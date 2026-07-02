import meta from "./data/courses-meta.json";
import type { Lang } from "./dict";

/**
 * Título/descrição TRADUZIDOS de cada curso (nível de dado, por slug).
 * Neutro (server + client). Em PT retorna null → usar course.titulo/descricao do banco.
 * Uso server: `courseMeta(slug, await getServerLocale())`
 * Uso client: `courseMeta(slug, useLocale())`
 */
type CourseMetaTr = { titulo?: string; descricao?: string };

export function courseMeta(slug: string | undefined | null, lang: Lang): CourseMetaTr | null {
  if (!slug || lang === "pt") return null;
  const c = (meta as Record<string, { en?: CourseMetaTr; es?: CourseMetaTr }>)[slug];
  return (c?.[lang] as CourseMetaTr) ?? null;
}
