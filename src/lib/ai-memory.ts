/**
 * SMU PRO — AI Memory System
 *
 * A IA aprende com ela mesma:
 * - Após cada geração, salva o que funcionou (bons prompts, boas estruturas)
 * - Antes de cada geração, lê as memórias relevantes da categoria
 * - Score pode ser ajustado pelo admin (feedback humano)
 *
 * Exemplos de memória:
 * - "Para aulas de som sobre EQ, widgets com Canvas de espectro são mais eficazes"
 * - "Imagens de equipamento ficam melhores com 'studio photography, shallow depth of field'"
 * - "Aulas de nível básico precisam de mais analogias visuais"
 */

import { createAdminClient } from "@/lib/supabase/server";

interface MemoryEntry {
  categoria: string;
  tipo: string;
  chave: string;
  conteudo: string;
  contexto?: Record<string, any>;
  score?: number;
}

/**
 * Salva um aprendizado na memória da IA
 */
export async function saveMemory(entry: MemoryEntry): Promise<void> {
  const supabase = createAdminClient();

  try {
    await (supabase as any).from("ai_memory").upsert(
      {
        categoria: entry.categoria,
        tipo: entry.tipo,
        chave: entry.chave,
        conteudo: entry.conteudo,
        contexto: entry.contexto || {},
        score: entry.score || 0.5,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "categoria,tipo,chave" }
    );
  } catch (err) {
    console.error("[AI Memory] Save error:", err);
  }
}

/**
 * Lê memórias relevantes para uma categoria
 * Retorna as top memórias com melhor score
 */
export async function getMemories(
  categoria: string,
  limit: number = 10
): Promise<string> {
  const supabase = createAdminClient();

  try {
    const { data } = await (supabase as any)
      .from("ai_memory")
      .select("conteudo, score, vezes_usado")
      .eq("categoria", categoria)
      .gte("score", 0)
      .order("score", { ascending: false })
      .limit(limit);

    if (!data || data.length === 0) return "";

    // Formata como texto para injetar no prompt
    const lines = data.map((m: any, i: number) =>
      `${i + 1}. [score:${m.score}] ${m.conteudo}`
    );

    // Incrementar vezes_usado
    await (supabase as any)
      .from("ai_memory")
      .update({ vezes_usado: data[0].vezes_usado + 1 })
      .eq("categoria", categoria)
      .gte("score", 0);

    return lines.join("\n");
  } catch (err) {
    console.error("[AI Memory] Read error:", err);
    return "";
  }
}

/**
 * Após uma geração bem-sucedida, salva aprendizados automaticamente
 */
export async function learnFromGeneration(
  categoria: string,
  lessonTitle: string,
  totalScenes: number,
  widgetCount: number,
  imageCount: number,
  nivel: string,
  diagnosticoNota: string
): Promise<void> {
  // Salvar padrão de estrutura
  await saveMemory({
    categoria,
    tipo: "lesson",
    chave: `structure_${nivel}`,
    conteudo: `Aulas de nível ${nivel} na categoria ${categoria} geraram ${totalScenes} cenas (${widgetCount} widgets, ${imageCount} imagens). Título: "${lessonTitle}".`,
    contexto: { lessonTitle, totalScenes, widgetCount, imageCount, nivel },
    score: 0.5,
  });

  // Salvar diagnóstico como referência
  if (diagnosticoNota) {
    await saveMemory({
      categoria,
      tipo: "lesson",
      chave: `diagnostico_${Date.now()}`,
      conteudo: `Diagnóstico da aula "${lessonTitle}": ${diagnosticoNota.substring(0, 300)}`,
      contexto: { lessonTitle },
      score: 0.3,
    });
  }
}
