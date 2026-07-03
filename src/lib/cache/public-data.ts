import { unstable_cache } from "next/cache";
import { createAdminClient } from "@/lib/supabase/server";
import { getLandingPageStats } from "@/lib/actions/users";

/**
 * Cache de dados para as PÁGINAS PÚBLICAS (landing e catálogo).
 *
 * Essas páginas ficam `force-dynamic` porque o i18n lê o idioma de um cookie
 * (e ler cookie obriga render dinâmico). Isso, sozinho, faria cada request bater
 * no Supabase. Aqui cacheamos os dados (não a rota) com `unstable_cache`, então:
 *   - o i18n por cookie continua intacto (a página ainda renderiza por request);
 *   - mas os dados vêm do cache (revalidação de 1h), sem bater no banco a cada hit.
 *
 * `unstable_cache` NÃO pode ler cookies/headers, por isso usamos o admin client
 * (sem cookies). Só expomos dados públicos (cursos com `ativo = true`).
 *
 * Para invalidar após publicar/editar curso: `revalidateTag("courses")`.
 */

export interface PublicCourseFilters {
  nivel?: string;
  categoria?: string;
  tipo?: string;
}

/**
 * Lista cacheada de cursos públicos (ativo = true).
 * NÃO cobre busca textual (search) — resultados de busca não devem ser cacheados;
 * para busca, use `getCourses()` diretamente.
 */
export const getPublicCoursesCached = unstable_cache(
  async (filters?: PublicCourseFilters) => {
    const supabase = createAdminClient();
    let query = supabase
      .from("courses")
      .select("*")
      .eq("ativo", true)
      .order("destaque", { ascending: false })
      .order("ordem");

    if (filters?.nivel) query = query.eq("nivel", filters.nivel as any);
    if (filters?.categoria) {
      query = query.or(`categoria.eq.${filters.categoria},categorias.cs.{${filters.categoria}}`);
    }
    if (filters?.tipo) query = query.eq("tipo", filters.tipo as any);

    const { data, error } = await query;
    if (error) throw error;
    return data;
  },
  ["public-courses"],
  // updateTag("courses") nas mutações purga na hora; o revalidate de 10min é
  // apenas rede de segurança caso a invalidação por tag não alcance o cache.
  { revalidate: 600, tags: ["courses"] },
);

/** Estatísticas da landing (contagens agregadas) — cacheadas por 1h. */
export const getLandingStatsCached = unstable_cache(
  async () => getLandingPageStats(),
  ["landing-stats"],
  { revalidate: 3600, tags: ["courses"] },
);
