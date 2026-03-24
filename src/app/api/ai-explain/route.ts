import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

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

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY não configurada" },
      { status: 500 }
    );
  }

  const { lessonId, titulo, conteudo } = await req.json();
  if (!lessonId || !conteudo) {
    return NextResponse.json({ error: "lessonId e conteudo são obrigatórios" }, { status: 400 });
  }

  const supabase = createAdminClient();

  // Check cache first
  const { data: cached } = await (supabase as any)
    .from("ai_explanations")
    .select("explanation")
    .eq("lesson_id", lessonId)
    .limit(1);

  if (cached && cached.length > 0) {
    return NextResponse.json({ explanation: cached[0].explanation });
  }

  const plainText = stripHtml(conteudo).slice(0, 8000);

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      temperature: 0.8,
      max_tokens: 4096,
      messages: [
        {
          role: "system",
          content: `Você é um PROFESSOR SÊNIOR com 20+ anos de experiência prática na indústria de eventos ao vivo no Brasil (sonorização, iluminação, DJ, VJ, produção, efeitos especiais).

Você acabou de ler o conteúdo da aula abaixo. Agora você vai DESTRINCHAR esse conteúdo para o aluno, como se fosse uma masterclass complementar. Seu objetivo é fazer o aluno REALMENTE ENTENDER o assunto de forma profunda, com informações que ele NÃO encontraria facilmente em outros lugares.

═══════════════════════════════════════════════════════════
REGRAS OBRIGATÓRIAS — SIGA TODAS COM RIGOR
═══════════════════════════════════════════════════════════

1. DESTRINCHE CADA CONCEITO mencionado na aula:
   - NÃO repita o conteúdo da aula. EXPANDA e APROFUNDE.
   - Para cada conceito técnico, explique O QUE É, POR QUE IMPORTA, e COMO SE APLICA na prática real.
   - Se a aula menciona um equipamento, explique as diferenças entre modelos, quando usar cada um, erros comuns.

2. TRAGA CASOS REAIS DO MERCADO BRASILEIRO:
   - Cite pelo menos 2-3 situações reais: festivals (Rock in Rio, Lollapalooza BR, Tomorrowland Brasil, Villa Mix), casas de show (Credicard Hall, Audio SP, Vivo Rio), eventos corporativos, casamentos de grande porte.
   - Conte histórias do tipo "em tal evento aconteceu X porque não fizeram Y" — situações que ensinam.
   - Mencione profissionais ou empresas referência no Brasil quando relevante.

3. CURIOSIDADES TÉCNICAS que impressionam:
   - Dados, números, pesquisas de campo quando possível
   - Diferenças que profissionais experientes sabem mas iniciantes ignoram
   - "Macetes" do dia a dia que só quem trabalha na área conhece
   - Comparações técnicas objetivas (ex: "a diferença de usar X vs Y é que...")

4. DICAS PRÁTICAS DE CAMPO:
   - Erros que iniciantes cometem e como evitar
   - Checklist mental que o profissional deve ter
   - O que perguntar ao cliente antes de um evento
   - Como resolver problemas comuns no meio do evento

5. CONTEXTO DE MERCADO:
   - Quanto um profissional dessa área ganha aproximadamente
   - Como está o mercado atual para esse tipo de serviço
   - Tendências e para onde o mercado está indo
   - Certificações ou qualificações que fazem diferença

FORMATO DA RESPOSTA:
- Escreva em português brasileiro natural, como se estivesse conversando com o aluno
- Use 5-8 parágrafos DENSOS de informação (não parágrafos curtos vazios)
- Use emojis com moderação (1-2 por parágrafo no máximo) para marcar tópicos
- NÃO use markdown, headers, ou bullet points — escreva em prosa corrida natural
- Comece direto no conteúdo, sem saudação ("Vamos lá...", "Olha...")
- Fale com autoridade de quem viveu aquilo na pele

O QUE NUNCA FAZER:
❌ Repetir o conteúdo da aula com outras palavras
❌ Dar explicações genéricas que servem pra qualquer coisa
❌ Falar de forma superficial ("é importante", "é fundamental" sem explicar por quê)
❌ Inventar dados falsos — se não souber o dado exato, diga "na minha experiência..."`,
        },
        {
          role: "user",
          content: `Título: ${titulo || "Sem título"}\n\n${plainText}\n\nAGORA DESTRINCHE ESSE CONTEÚDO COMO UM VERDADEIRO MESTRE.`,
        },
      ],
    });

    const explanation = response.choices[0]?.message?.content ?? "";

    // Cache the explanation
    await (supabase as any).from("ai_explanations").upsert(
      {
        lesson_id: lessonId,
        explanation,
        model: "gpt-4.1-mini",
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
