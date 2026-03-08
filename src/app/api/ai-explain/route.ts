import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

function stripHtml(html: string): string {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const { lessonId, titulo, conteudo } = await req.json();
  if (!lessonId || !conteudo) {
    return NextResponse.json({ error: "lessonId e conteudo são obrigatórios" }, { status: 400 });
  }

  const supabase = createAdminClient();

  // Check cache first (cast to any — table created manually in Supabase)
  const { data: cached } = await (supabase as any)
    .from("ai_explanations")
    .select("explanation")
    .eq("lesson_id", lessonId)
    .limit(1);

  if (cached && cached.length > 0) {
    return NextResponse.json({ explanation: cached[0].explanation });
  }

  const plainText = stripHtml(conteudo).slice(0, 4000);

  try {
    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: `Você é um professor especialista em eventos ao vivo (sonorização, iluminação, DJ, VJ).
Explique o conteúdo abaixo de forma didática e interessante para um aluno iniciante/intermediário.

Regras:
- Use linguagem simples e direta, como se estivesse conversando
- Traga 2-3 curiosidades ou dicas práticas do mercado de eventos
- Dê exemplos reais (shows, festivais, casas de evento)
- Use emojis com moderação para tornar mais visual
- Máximo 3 parágrafos
- Fale em português brasileiro

Título da aula: ${titulo || "Sem título"}

Conteúdo:
${plainText}`,
        },
      ],
    });

    const explanation =
      message.content[0].type === "text" ? message.content[0].text : "";

    // Cache the explanation
    await (supabase as any).from("ai_explanations").upsert(
      {
        lesson_id: lessonId,
        explanation,
        model: "claude-haiku-4-5-20251001",
        created_at: new Date().toISOString(),
      },
      { onConflict: "lesson_id" }
    );

    return NextResponse.json({ explanation });
  } catch (error) {
    console.error("[AI Explain] Error:", error);
    return NextResponse.json(
      { error: "Erro ao gerar explicação. Tente novamente." },
      { status: 500 }
    );
  }
}
