import { NextResponse } from "next/server";
import { translateEntities } from "@/lib/i18n/content";

export const dynamic = "force-dynamic";

/**
 * TEMPORÁRIO — diagnóstico do tradutor de conteúdo em produção.
 * Não recebe entrada do usuário; traduz uma string fixa. Remover após diagnóstico.
 */
export async function GET() {
  const out: any = { hasKey: !!process.env.OPENAI_API_KEY };

  // 1) chamada crua à OpenAI
  try {
    const { default: OpenAI } = await import("openai");
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, timeout: 25000, maxRetries: 1 });
    const resp = await openai.chat.completions.create({
      model: "gpt-4.1",
      messages: [{ role: "user", content: 'Return JSON {"en": "..."} translating to English: "Fundamentos do Som e da Cadeia de Sinal"' }],
      response_format: { type: "json_object" },
      max_tokens: 100,
    });
    out.rawOpenAI = resp.choices[0]?.message?.content ?? null;
  } catch (e: any) {
    out.rawOpenAIError = e?.status ? `HTTP ${e.status}: ${e.message}` : (e?.message ?? String(e));
  }

  // 1b) Gemini (Google GenAI) — alternativa se a OpenAI estiver sem cota
  out.hasGeminiKey = !!process.env.GOOGLE_GENAI_API_KEY;
  try {
    const { GoogleGenAI } = await import("@google/genai");
    const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY });
    const r = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: 'Return ONLY JSON {"en":"..."} translating to English: "Fundamentos do Som e da Cadeia de Sinal"',
      config: { responseMimeType: "application/json" },
    });
    out.gemini = r.text ?? null;
  } catch (e: any) {
    out.geminiError = e?.status ? `HTTP ${e.status}: ${e.message}` : (e?.message ?? String(e));
  }

  // 2) via translateEntities (com cache/banco)
  try {
    const m = await translateEntities(
      [{ type: "module", id: "debug-fixed-id-0001", titulo: "Fundamentos do Som e da Cadeia de Sinal" }],
      "en",
    );
    out.viaTranslate = m.get("debug-fixed-id-0001") ?? null;
  } catch (e: any) {
    out.viaTranslateError = e?.message ?? String(e);
  }

  return NextResponse.json(out);
}
