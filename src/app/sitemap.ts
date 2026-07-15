import type { MetadataRoute } from "next";
import { createAdminClient } from "@/lib/supabase/server";
import { getPortal, filterCoursesByPortal } from "@/lib/portal";

/**
 * Sitemap dinâmico, resolvido POR DOMÍNIO — cada domínio é uma escola independente
 * (smuproducoes.com = Backstage/eventos · aula.smuproducoes.com = cursos avulsos).
 *
 * Antes tinha DOIS defeitos, os dois silenciosos (ninguém vê na tela — aparece no
 * Google semanas depois):
 *  1. `BASE_URL` fixo em smuproducoes.com: o sitemap do aula mandava o Google
 *     indexar os cursos dele em URLs do www — que, por causa do filtro de portal,
 *     não mostram nada. Estávamos apontando o robô para páginas vazias.
 *  2. Sem filtro de escola: cada sitemap listava os cursos dos dois lados.
 *
 * force-dynamic (não ISR): o conteúdo varia por Host, e cache de 1h serviria o
 * sitemap de uma escola para a outra.
 */
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createAdminClient();
  const portal = await getPortal();
  const BASE_URL = portal === "aula" ? "https://aula.smuproducoes.com" : "https://smuproducoes.com";

  // ── Cursos ativos DESTA escola ────────────────────────────────
  const { data: rows } = await supabase
    .from("courses")
    .select("slug, updated_at, categoria, categorias")
    .eq("ativo", true)
    .order("updated_at", { ascending: false });

  const courses = filterCoursesByPortal(rows ?? [], portal);

  const courseEntries: MetadataRoute.Sitemap = courses.map((c) => ({
    url: `${BASE_URL}/cursos/${c.slug}`,
    lastModified: c.updated_at ? new Date(c.updated_at) : new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // ── Categorias únicas (só as que existem NESTA escola) ────────
  const categorias = [...new Set(courses.map((c) => c.categoria).filter(Boolean))];
  const categoryEntries: MetadataRoute.Sitemap = categorias.map((cat) => ({
    url: `${BASE_URL}/cursos/categoria/${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // ── Blog posts ─────────────────────────────────────────────────
  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const { data: posts }: { data: any[] | null } = await (supabase as any)
      .from("blog_posts")
      .select("slug, updated_at")
      .eq("publicado", true)
      .order("updated_at", { ascending: false });

    blogEntries = (posts ?? []).map((p) => ({
      url: `${BASE_URL}/blog/${p.slug}`,
      lastModified: p.updated_at ? new Date(p.updated_at) : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  } catch {
    // Tabela blog_posts pode não existir ainda — ignora silenciosamente
  }

  // ── Páginas estáticas ─────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/cursos`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/login`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/cadastro`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  return [...staticPages, ...courseEntries, ...categoryEntries, ...blogEntries];
}
