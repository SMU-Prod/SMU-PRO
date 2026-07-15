import { headers } from "next/headers";
import type { LivePortalDb } from "@/types/database";

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

/**
 * Um curso pertence à escola do portal informado?
 * Regra do dono: cada domínio é uma escola; o admin só gerencia os cursos do domínio
 * em que está logado (o login é o mesmo, o acervo é separado).
 */
export function courseBelongsToPortal(categorias: string[] | null | undefined, portal: Portal): boolean {
  return portal === "aula" ? ehCursoAula(categorias) : !ehCursoAula(categorias);
}

/**
 * Normaliza `categorias` para a escola do portal onde o curso está sendo criado:
 *  - aula → garante ao menos uma área do aula (senão o curso cairia no backstage);
 *  - main (backstage) → remove tags de aula.
 */
export function stampPortalCategorias(categorias: string[] | null | undefined, portal: Portal): string[] {
  const cats = Array.isArray(categorias) ? [...categorias] : [];
  if (portal === "aula") {
    return cats.some((c) => AULA_CATEGORIAS.includes(c)) ? cats : [...cats, "tecnico"];
  }
  return cats.filter((c) => !AULA_CATEGORIAS.includes(c));
}

/**
 * Uma live pertence ao portal se for dela ou de "ambos".
 *
 * Curso deriva o portal implicitamente de `categorias`; live NÃO pode fazer
 * isso — palestra e podcast não têm `course_id`, logo não têm `categorias` de
 * onde derivar. Por isso live carrega coluna `portal` explícita.
 */
export function liveBelongsToPortal(livePortal: LivePortalDb, portal: Portal): boolean {
  return livePortal === "ambos" || livePortal === portal;
}
