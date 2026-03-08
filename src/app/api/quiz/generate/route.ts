import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
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

interface GeneratedQuestion {
  texto: string;
  explicacao: string;
  opcoes: { texto: string; correta: boolean }[];
}

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const { titulo, conteudo, numQuestions = 5 } = await req.json();
  if (!conteudo) {
    return NextResponse.json({ error: "conteudo é obrigatório" }, { status: 400 });
  }

  const plainText = stripHtml(conteudo).slice(0, 6000);
  const count = Math.min(Math.max(Number(numQuestions) || 5, 2), 10);

  try {
    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2048,
      messages: [
        {
          role: "user",
          content: `Você é um professor especialista em eventos ao vivo (sonorização, iluminação, DJ, VJ, produção de eventos).

Gere exatamente ${count} questões de múltipla escolha baseadas no conteúdo abaixo.

Regras:
- Cada questão deve ter exatamente 4 opções de resposta
- Apenas 1 opção deve ser a correta
- As questões devem testar compreensão real do conteúdo, não memorização
- Inclua uma explicação curta (1-2 frases) para cada questão
- Varie a dificuldade: algumas fáceis, algumas médias, algumas difíceis
- Use linguagem clara e objetiva em português brasileiro
- As opções incorretas devem ser plausíveis (não absurdas)

Título da aula: ${titulo || "Sem título"}

Conteúdo:
${plainText}

Responda APENAS com JSON válido no formato abaixo, sem markdown:
[
  {
    "texto": "Pergunta aqui?",
    "explicacao": "Explicação da resposta correta.",
    "opcoes": [
      { "texto": "Opção A", "correta": false },
      { "texto": "Opção B", "correta": true },
      { "texto": "Opção C", "correta": false },
      { "texto": "Opção D", "correta": false }
    ]
  }
]`,
        },
      ],
    });

    const raw = message.content[0].type === "text" ? message.content[0].text : "";

    // Parse JSON - handle potential markdown wrapping
    const jsonStr = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();
    const questions: GeneratedQuestion[] = JSON.parse(jsonStr);

    // Validate structure
    if (!Array.isArray(questions) || questions.length === 0) {
      throw new Error("Resposta inválida da IA");
    }

    const validated = questions.slice(0, count).map((q) => ({
      texto: String(q.texto || ""),
      explicacao: String(q.explicacao || ""),
      opcoes: (q.opcoes || []).slice(0, 4).map((o) => ({
        texto: String(o.texto || ""),
        correta: Boolean(o.correta),
      })),
    }));

    return NextResponse.json({ questions: validated });
  } catch (error) {
    console.error("[Quiz Generate] Error:", error);
    return NextResponse.json(
      { error: "Erro ao gerar quiz. Verifique se a API key da Anthropic está configurada." },
      { status: 500 }
    );
  }
}
