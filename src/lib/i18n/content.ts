/**
 * Tradutor de CONTEÚDO do banco (títulos/descrições de cursos, módulos e aulas)
 * para EN/ES — sob demanda, com cache.
 *
 * Camadas de cache (nesta ordem):
 *   1. Memória do processo (instantâneo; por instância do servidor).
 *   2. Tabela `content_translations` no Supabase (persistente, compartilhada) —
 *      usada SE a migration tiver sido rodada. Se a tabela não existir, é ignorada.
 *   3. OpenAI (traduz o que faltar) → grava nas camadas acima.
 *
 * Re-traduz automaticamente quando o texto de origem muda (chave inclui o hash).
 * FAIL-SAFE: qualquer erro (sem chave, timeout, etc.) → mantém PT. Nunca quebra a página.
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
const memKey = (id: string, lang: string, hash: string) => `${id}:${lang}:${hash}`;

// Cache em memória do processo (persiste entre requisições numa instância quente).
const memCache = new Map<string, ContentFields>();

const LANG_NAME: Record<string, string> = { en: "English", es: "Spanish (Spain)" };

// Lote pequeno garante que a IA traduza TODOS os itens (lotes grandes truncavam
// a resposta e deixavam módulos/aulas sem traduzir).
const OAI_CHUNK = 12;

/** Traduz UM lote (≤ OAI_CHUNK itens) via OpenAI. Usa índice numérico (não UUID). */
async function callOpenAIChunk(openai: any, entities: ContentEntity[], lang: Lang): Promise<Map<string, ContentFields>> {
  const result = new Map<string, ContentFields>();
  // "i" = índice no lote. NUNCA mandamos UUID pra IA (ela corrompe ids longos);
  // mapeamos o índice de volta pra entidade real aqui.
  const payload = entities.map((e, i) => {
    const o: any = { i };
    if (e.titulo) o.titulo = e.titulo;
    if (e.descricao) o.descricao = e.descricao;
    if (e.descricao_curta) o.descricao_curta = e.descricao_curta;
    return o;
  });

  const sys = `You are a professional localizer for an online school (technical/professional and live-events courses). Translate the given course/module/lesson texts from Brazilian Portuguese to ${LANG_NAME[lang] ?? lang}.
RULES:
- Return EVERY item, echoing its exact numeric "i", and translate EVERY field present (titulo, descricao, descricao_curta). Never omit an item or leave a value in Portuguese.
- Natural, concise, correct for a course catalog and syllabus. Keep technical terms/acronyms (CFTV, DVR, NVR, LGPD, LED, IP, PA, DMX, DJ, VJ, DAW, EQ, Gain Staging, Line Check, Soundcheck, SMU) as-is.
- Keep numbers, units and punctuation. Do NOT add commentary.
Return ONLY JSON: { "items": [ { "i": <same number>, "titulo": ..., "descricao": ..., "descricao_curta": ... } ] } — one entry per input.`;

  const resp = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      { role: "system", content: sys },
      { role: "user", content: JSON.stringify({ items: payload }) },
    ],
    temperature: 0.2,
    max_tokens: 4096,
    response_format: { type: "json_object" },
  });

  const json = JSON.parse(resp.choices[0]?.message?.content || "{}");
  for (const it of json.items ?? []) {
    const idx = typeof it?.i === "number" ? it.i : parseInt(it?.i, 10);
    const e = entities[idx];
    if (!e) continue;
    const f: ContentFields = {};
    if (typeof it.titulo === "string") f.titulo = it.titulo;
    if (typeof it.descricao === "string") f.descricao = it.descricao;
    if (typeof it.descricao_curta === "string") f.descricao_curta = it.descricao_curta;
    result.set(e.id, f);
  }
  return result;
}

/** Traduz via OpenAI em lotes pequenos (garante cobertura total). Map(id → campos). */
async function callOpenAI(entities: ContentEntity[], lang: Lang): Promise<Map<string, ContentFields>> {
  const result = new Map<string, ContentFields>();
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return result;

  const { default: OpenAI } = await import("openai");
  const openai = new OpenAI({ apiKey, timeout: 30000, maxRetries: 1 });

  const chunks: ContentEntity[][] = [];
  for (let i = 0; i < entities.length; i += OAI_CHUNK) chunks.push(entities.slice(i, i + OAI_CHUNK));

  // Lotes em paralelo (limitado); se um lote falhar, os outros seguem (fail-safe parcial).
  const settled = await Promise.allSettled(chunks.map((c) => callOpenAIChunk(openai, c, lang)));
  for (const s of settled) {
    if (s.status === "fulfilled") for (const [id, f] of s.value) result.set(id, f);
    else console.error("[i18n/content] lote falhou:", (s.reason as any)?.message ?? s.reason);
  }
  return result;
}

/**
 * Traduz um lote de entidades para o idioma dado. Devolve Map(id → campos).
 * PT (ou lista vazia) → Map vazio. Fail-safe: erro → o que já tiver (resto fica PT).
 */
export async function translateEntities(entities: ContentEntity[], lang: Lang): Promise<Map<string, ContentFields>> {
  const out = new Map<string, ContentFields>();
  if (lang === "pt" || entities.length === 0) return out;

  // 1) cache em memória
  const misses: ContentEntity[] = [];
  for (const e of entities) {
    const hit = memCache.get(memKey(e.id, lang, srcHash(e)));
    if (hit) out.set(e.id, hit);
    else misses.push(e);
  }
  if (misses.length === 0) return out;

  // 2) cache no banco (se a tabela existir)
  let dbAvailable = false;
  let toTranslate = misses;
  try {
    const supabase = createAdminClient();
    const ids = [...new Set(misses.map((e) => e.id))];
    const { data, error } = await (supabase as any)
      .from("content_translations")
      .select("entity_id, source_hash, fields")
      .eq("lang", lang)
      .in("entity_id", ids);
    if (!error) {
      dbAvailable = true;
      const cacheMap = new Map<string, any>((data ?? []).map((r: any) => [r.entity_id, r]));
      const remaining: ContentEntity[] = [];
      for (const e of misses) {
        const c = cacheMap.get(e.id);
        if (c && c.source_hash === srcHash(e)) {
          const f = c.fields ?? {};
          out.set(e.id, f);
          memCache.set(memKey(e.id, lang, srcHash(e)), f);
        } else remaining.push(e);
      }
      toTranslate = remaining;
    }
  } catch {
    // tabela indisponível → segue só com memória + OpenAI
  }

  // 3) traduz o que faltar e grava nos caches
  if (toTranslate.length > 0) {
    try {
      const translated = await callOpenAI(toTranslate, lang);
      const rows: any[] = [];
      for (const e of toTranslate) {
        const f = translated.get(e.id);
        if (!f) continue;
        out.set(e.id, f);
        memCache.set(memKey(e.id, lang, srcHash(e)), f);
        rows.push({
          entity_type: e.type,
          entity_id: e.id,
          lang,
          source_hash: srcHash(e),
          fields: f,
          updated_at: new Date().toISOString(),
        });
      }
      if (dbAvailable && rows.length > 0) {
        try {
          const supabase = createAdminClient();
          await (supabase as any)
            .from("content_translations")
            .upsert(rows, { onConflict: "entity_type,entity_id,lang" });
        } catch {
          // falha ao gravar no banco não impede a tradução (já está em memória)
        }
      }
    } catch (err) {
      console.error("[i18n/content] fail-safe (mantém PT):", (err as any)?.message ?? err);
    }
  }

  return out;
}
