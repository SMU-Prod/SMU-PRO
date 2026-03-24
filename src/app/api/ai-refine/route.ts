import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { rateLimit } from "@/lib/rate-limit";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

/**
 * POST /api/ai-refine
 *
 * A IA analisa o conteúdo da aula como um professor técnico especialista
 * e retorna uma versão refinada, organizada em seções didáticas claras.
 *
 * O conteúdo original NÃO é alterado no banco — o resultado é cacheado
 * na tabela ai_explanations para exibição refinada ao aluno.
 */
export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const { success } = await rateLimit(`ai:${userId}`, 5, 60000);
  if (!success) {
    return NextResponse.json({ error: "Muitas requisições. Aguarde 1 minuto." }, { status: 429 });
  }

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ error: "OPENAI_API_KEY não configurada" }, { status: 500 });
  }

  const { lessonId, titulo, conteudo, categoria } = await req.json();

  if (!lessonId || !conteudo) {
    return NextResponse.json({ error: "lessonId e conteudo obrigatórios" }, { status: 400 });
  }

  const supabase = createAdminClient();

  // Check cache
  const { data: cached } = await (supabase as any)
    .from("ai_explanations")
    .select("*")
    .eq("lesson_id", lessonId)
    .eq("tipo", "refined_content")
    .limit(1);

  if (cached && cached.length > 0) {
    return NextResponse.json(cached[0]);
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4.1",
      messages: [
        {
          role: "system",
          content: `Você é um professor técnico sênior especialista na área de eventos ao vivo. Sua tarefa é REFINAR o conteúdo de uma aula para torná-lo mais didático, claro e organizado.

REGRAS:
1. MANTENHA todo o conteúdo original — não remova informações
2. ORGANIZE em seções lógicas com títulos claros em PT-BR
3. ENRIQUEÇA com explicações técnicas mais precisas quando necessário
4. ADICIONE contexto prático ("Na prática de eventos...")
5. CORRIJA imprecisões técnicas se houver
6. Use linguagem acessível mas tecnicamente correta
7. Cada seção deve ter um título descritivo

Responda em HTML limpo com tags <h3> para títulos de seção e <p> para parágrafos. Use <strong> para termos importantes. Use <ul>/<li> para listas quando fizer sentido.

NÃO use markdown. Responda SÓ com HTML.`,
        },
        {
          role: "user",
          content: `Refine este conteúdo da aula "${titulo}" (categoria: ${categoria || "eventos"}) para ser mais didático e organizado:\n\n${conteudo}`,
        },
      ],
      temperature: 0.5,
      max_tokens: 8192,
    });

    const refined = response.choices[0]?.message?.content || "";

    // Limpar markdown se veio
    const cleanHtml = refined
      .replace(/^```html\s*\n?/i, "")
      .replace(/\n?```\s*$/i, "")
      .trim();

    // Cache
    const record = {
      lesson_id: lessonId,
      tipo: "refined_content",
      content: cleanHtml,
      model: "gpt-4.1",
      created_at: new Date().toISOString(),
    };

    await (supabase as any)
      .from("ai_explanations")
      .upsert(record, { onConflict: "lesson_id,tipo" });

    return NextResponse.json(record);
  } catch (error) {
    console.error("[AI Refine] Error:", error);
    return NextResponse.json({ error: "Erro ao refinar conteúdo" }, { status: 500 });
  }
}

/**
 * GET /api/ai-refine?lessonId=xxx
 * Checa se existe conteúdo refinado no cache (não gera novo)
 */
export async function GET(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const lessonId = searchParams.get("lessonId");

  if (!lessonId) {
    return NextResponse.json({ error: "lessonId obrigatório" }, { status: 400 });
  }

  const supabase = createAdminClient();
  const { data } = await (supabase as any)
    .from("ai_explanations")
    .select("*")
    .eq("lesson_id", lessonId)
    .eq("tipo", "refined_content")
    .limit(1);

  if (!data || data.length === 0) {
    return NextResponse.json({ content: null });
  }

  return NextResponse.json(data[0]);
}
