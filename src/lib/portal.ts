import { headers } from "next/headers";

/**
 * Portal "aula.smuproducoes.com" — catálogo SEPARADO e CURADO, com o mesmo layout do
 * site oficial, mas mostrando só os cursos desta lista. O site principal
 * (smuproducoes.com) continua com o catálogo completo, sem mudança.
 *
 * Para adicionar/remover um curso do portal aula: coloque/tire o SLUG do curso aqui.
 * (Fase 2, se o Rick quiser gerenciar pelo admin: virar uma flag no banco + toggle.)
 */
export const AULA_COURSE_SLUGS: string[] = [
  // Usado só quando AULA_INCLUDE_ALL = false (curadoria de um subconjunto).
];

/**
 * Rick pediu TODOS os cursos no portal aula. Com `true`, o aula mostra todos os cursos
 * ativos (mesmo catálogo do site principal, incluindo cursos futuros). Para curar um
 * subconjunto no futuro: ponha `false` e liste os slugs em AULA_COURSE_SLUGS.
 */
export const AULA_INCLUDE_ALL = true;

export type Portal = "aula" | "main";

/** Detecta o portal pelo host da requisição (aula.smuproducoes.com → "aula"). */
export async function getPortal(): Promise<Portal> {
  try {
    const h = await headers();
    const host = (h.get("x-forwarded-host") || h.get("host") || "").toLowerCase().split(":")[0];
    if (host === "aula.smuproducoes.com" || host.startsWith("aula.")) return "aula";
  } catch {}
  return "main";
}

/** Filtra uma lista de cursos para o catálogo do portal (no aula, só os curados). */
export function filterCoursesByPortal<T extends { slug?: string | null }>(courses: T[], portal: Portal): T[] {
  if (portal !== "aula" || AULA_INCLUDE_ALL) return courses;
  const set = new Set(AULA_COURSE_SLUGS);
  return courses.filter((c) => !!c.slug && set.has(c.slug));
}
