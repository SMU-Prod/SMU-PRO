/**
 * Tradutor de CONTEÚDO do banco (títulos/descrições de cursos, módulos e aulas)
 * para EN/ES — sob demanda, com cache na tabela `content_translations`.
 *
 * Como funciona:
 *  1. Recebe as entidades já carregadas do banco (curso/módulo/aula) e o idioma.
 *  2. Lê o cache; o que já está traduzido (e com o MESMO texto de origem) volta na hora.
 *  3. O que falta é traduzido via OpenAI (mesmo modelo do app) e gravado no cache.
 *  4. Se o texto de origem mudar (edição), o hash muda → re-traduz automaticamente.
 *
 * FAIL-SAFE: qualquer erro (sem chave, sem tabela, timeout, etc.) → devolve vazio;
 * quem chama usa o texto original em PT. NUNCA quebra a página.
 *
 * Uso (server component):
 *   const tr = await translateEntities(entities, lang);
 *   const titulo = tr.get(curso.id)?.titulo ?? curso.titulo;
 */
import crypto from "node:crypto";
import { createAdminClient } from "@/lib/supabase/server";
import type { Lang } from "./dict";

export type ContentFields = { titulo?: string; descricao?: string; descricao_curta?: string };
export type ContentEntity = { type: "course" | "module" | "lesson"; id: string } & ContentFields;

function srcHash(e: ContentEntity): string {
  const s = `${e.titulo ?? ""}${e.descricao ?? ""}${e.descricao_curta ?? ""}`;
  return crypto.createHash("sha1").update(s).digest("hex").slice(0, 16);
}

const LANG_NAME: Record<string, string> = { en: "English", es: "Spanish (Spain)" };

/** Traduz um lote via OpenAI. Retorna Map(id → campos traduzidos). */
async function callOpenAI(entities: ContentEntity[], lang: Lang): Promise<Map<string, ContentFields>> {
  const result = new Map<string, ContentFields>();
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return result;

  const { default: OpenAI } = await import("openai");
  const openai = new OpenAI({ apiKey, timeout: 20000, maxRetries: 1 });

  // Envia só os campos presentes, para não inventar tradução de campo vazio.
  const payload = entities.map((e) => {
    const o: any = { id: e.id };
    if (e.titulo) o.titulo = e.titulo;
    if (e.descricao) o.descricao = e.descricao;
    if (e.descricao_curta) o.descricao_curta = e.descricao_curta;
    return o;
  });

  const sys = `You are a professional localizer for an online professional-training school (technical courses and work-from-home skills). Translate the given course/module/lesson texts from Brazilian Portuguese to ${LANG_NAME[lang] ?? lang}.
RULES:
- Translate ONLY the fields present in each item (titulo, descricao, descricao_curta). Keep the same field keys.
- Natural, concise, correct for a course catalog. Keep technical terms/acronyms (CFTV, DVR, NVR, LGPD, LED, IP, PA, DMX, DJ, VJ, SMU) as-is.
- Keep numbers, units and punctuation. Do NOT add commentary.
Return ONLY JSON: { "items": [ { "id": <same id>, "titulo": ..., "descricao": ..., "descricao_curta": ... } ] } with one entry per input, same ids, including only the fields you translated.`;

  const resp = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      { role: "system", content: sys },
      { role: "user", content: JSON.stringify({ items: payload }) },
    ],
    temperature: 0.2,
    response_format: { type: "json_object" },
  });

  const json = JSON.parse(resp.choices[0]?.message?.content || "{}");
  for (const it of json.items ?? []) {
    if (!it?.id) continue;
    const f: ContentFields = {};
    if (typeof it.titulo === "string") f.titulo = it.titulo;
    if (typeof it.descricao === "string") f.descricao = it.descricao;
    if (typeof it.descricao_curta === "string") f.descricao_curta = it.descricao_curta;
    result.set(String(it.id), f);
  }
  return result;
}

/**
 * Traduz um lote de entidades para o idioma dado. Devolve Map(id → campos).
 * PT (ou lista vazia) → Map vazio. Fail-safe: erro → Map vazio (chamador usa PT).
 */
export async function translateEntities(entities: ContentEntity[], lang: Lang): Promise<Map<string, ContentFields>> {
  const out = new Map<string, ContentFields>();
  if (lang === "pt" || entities.length === 0) return out;

  try {
    const supabase = createAdminClient();
    const ids = [...new Set(entities.map((e) => e.id))];

    // 1) lê o cache. Se a tabela não existir (migration não rodada) ou der erro,
    //    aborta e mantém PT — SEM chamar a OpenAI (evita traduzir a cada visita).
    const { data: cached, error: readErr } = await (supabase as any)
      .from("content_translations")
      .select("entity_id, source_hash, fields")
      .eq("lang", lang)
      .in("entity_id", ids);
    if (readErr) {
      console.error("[i18n/content] cache indisponível, mantém PT:", readErr.message);
      return out;
    }
    const cacheMap = new Map<string, any>((cached ?? []).map((r: any) => [r.entity_id, r]));

    // 2) separa o que já está válido do que precisa traduzir
    const toTranslate: ContentEntity[] = [];
    for (const e of entities) {
      const c = cacheMap.get(e.id);
      if (c && c.source_hash === srcHash(e)) out.set(e.id, c.fields ?? {});
      else toTranslate.push(e);
    }

    // 3) traduz o que falta e grava no cache
    if (toTranslate.length > 0) {
      const translated = await callOpenAI(toTranslate, lang);
      const rows: any[] = [];
      for (const e of toTranslate) {
        const fields = translated.get(e.id);
        if (!fields) continue;
        out.set(e.id, fields);
        rows.push({
          entity_type: e.type,
          entity_id: e.id,
          lang,
          source_hash: srcHash(e),
          fields,
          updated_at: new Date().toISOString(),
        });
      }
      if (rows.length > 0) {
        await (supabase as any)
          .from("content_translations")
          .upsert(rows, { onConflict: "entity_type,entity_id,lang" });
      }
    }
  } catch (err) {
    console.error("[i18n/content] fail-safe (mantém PT):", (err as any)?.message ?? err);
  }

  return out;
}
