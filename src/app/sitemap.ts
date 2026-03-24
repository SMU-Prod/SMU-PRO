import type { MetadataRoute } from "next";
import { createAdminClient } from "@/lib/supabase/server";

const BASE_URL = "https://smuproducoes.com";

/**
 * Sitemap dinâmico — indexa automaticamente:
 * - Páginas estáticas (home, catálogo, login, cadastro)
 * - Todos os cursos ativos (/cursos/[slug])
 * - Todas as categorias com cursos (/cursos/categoria/[slug])
 * - Posts do blog (/blog/[slug]) — quando existirem
 *
 * Revalidação: a cada 1 hora (ISR)
 */
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createAdminClient();

  // ── Cursos ativos ──────────────────────────────────────────────
  const { data: courses } = await supabase
    .from("courses")
    .select("slug, updated_at, categoria")
    .eq("ativo", true)
    .order("updated_at", { ascending: false });

  const courseEntries: MetadataRoute.Sitemap = (courses ?? []).map((c) => ({
    url: `${BASE_URL}/cursos/${c.slug}`,
    lastModified: c.updated_at ? new Date(c.updated_at) : new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // ── Categorias únicas ─────────────────────────────────────────
  const categorias = [...new Set((courses ?? []).map((c) => c.categoria).filter(Boolean))];
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
