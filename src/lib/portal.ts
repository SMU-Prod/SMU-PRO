import { headers } from "next/headers";

/**
 * Portal "aula.smuproducoes.com" — catálogo dos cursos NOVOS (SMU Técnico + Renda em Casa).
 * O www.smuproducoes.com continua só com os cursos de EVENTOS. É o MESMO app e o MESMO banco,
 * servidos em dois domínios (a Vercel suporta); o que muda é o FILTRO por categoria conforme o host.
 *
 * Distinção no banco: os cursos de técnico/renda entram com a coluna `categorias` contendo
 * 'tecnico' ou 'renda-em-casa'; os cursos de eventos têm `categorias` vazio.
 *
 * (Regra do dono, 08/07/2026: www = eventos, não mexer; aula = os cursos novos.)
 */
export const AULA_CATEGORIAS = ["tecnico", "renda-em-casa"];

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

/** Um curso é do portal "aula" se a lista `categorias` cruza com técnico/renda-em-casa. */
function ehCursoAula(categorias?: string[] | null): boolean {
  if (!Array.isArray(categorias)) return false;
  return categorias.some((c) => AULA_CATEGORIAS.includes(c));
}

/**
 * Filtra os cursos conforme o portal:
 *  - aula → só os de técnico/renda em casa;
 *  - main (www) → só os de eventos (exclui técnico/renda).
 */
export function filterCoursesByPortal<T extends { categorias?: string[] | null }>(courses: T[], portal: Portal): T[] {
  if (portal === "aula") return courses.filter((c) => ehCursoAula(c.categorias));
  return courses.filter((c) => !ehCursoAula(c.categorias));
}
