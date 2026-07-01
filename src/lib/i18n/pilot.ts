"use client";

import { useEffect, useState } from "react";
import type { Locale } from "./locale";

/**
 * Traduções por CURSO, carregadas SOB DEMANDA (dynamic import → cada curso vira
 * um chunk separado; só carrega o do curso aberto, não pesa o app).
 * Cada arquivo data/<slug>.json tem:
 *   { en: { lessons: { <lessonId>: {titulo,descricao,conteudo_rico} }, quiz: { <questionId>: {pergunta,explicacao,opcoes:{<optId>:txt}} } }, es: {...} }
 * Para adicionar um curso traduzido: gere data/<slug>.json e registre o slug aqui.
 */
const LOADERS: Record<string, () => Promise<any>> = {
  "introducao-para-eventos": () => import("./data/introducao-para-eventos.json"),
  "panorama-das-profissoes-em-eventos": () => import("./data/panorama-das-profissoes-em-eventos.json"),
  "luz-basico": () => import("./data/luz-basico.json"),
  "efeito-basico": () => import("./data/efeito-basico.json"),
  "video-basico": () => import("./data/video-basico.json"),
  "producao-basico": () => import("./data/producao-basico.json"),
  "som-basico": () => import("./data/som-basico.json"),
};

const cache = new Map<string, any>();

export function hasCourseTranslation(slug: string): boolean {
  return !!LOADERS[slug];
}

export async function loadCourseTr(slug: string): Promise<any | null> {
  if (!LOADERS[slug]) return null;
  if (cache.has(slug)) return cache.get(slug);
  try {
    const mod = await LOADERS[slug]();
    const data = mod?.default ?? mod;
    cache.set(slug, data);
    return data;
  } catch {
    return null;
  }
}

export type CourseTr = {
  lessons?: Record<string, { titulo?: string; descricao?: string; conteudo_rico?: string }>;
  quiz?: Record<string, { pergunta?: string; explicacao?: string; opcoes?: Record<string, string> }>;
} | null;

/**
 * Hook: retorna as traduções do curso no idioma atual (ou null em PT / sem tradução).
 * Carrega assíncrono; em PT retorna null na hora.
 */
export function useCourseTr(slug: string, locale: Locale): CourseTr {
  const [data, setData] = useState<any | null>(null);
  useEffect(() => {
    if (locale === "pt" || !hasCourseTranslation(slug)) {
      setData(null);
      return;
    }
    let alive = true;
    loadCourseTr(slug).then((d) => {
      if (alive) setData(d);
    });
    return () => {
      alive = false;
    };
  }, [slug, locale]);
  if (locale === "pt" || !data) return null;
  return (data[locale] as CourseTr) ?? null;
}
