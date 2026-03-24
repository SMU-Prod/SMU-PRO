import { getPostBySlug, getRelatedPosts } from "@/lib/actions/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowLeft, ChevronRight, BookOpen, Calendar, Eye } from "lucide-react";
import type { Metadata } from "next";

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "Artigo não encontrado" };

  const title = post.meta_title || post.titulo;
  const description = post.meta_description || post.resumo || post.conteudo?.slice(0, 160);
  const image = post.og_image_url || post.thumbnail_url;

  return {
    title,
    description,
    openGraph: {
      title,
      description: description || "",
      type: "article",
      publishedTime: post.created_at,
      modifiedTime: post.updated_at,
      authors: ["SMU PRO"],
      tags: post.tags ?? [],
      images: image ? [{ url: image, width: 1200, height: 630 }] : [],
      url: `https://smuproducoes.com/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: description || "",
      images: image ? [image] : [],
    },
    alternates: {
      canonical: `https://smuproducoes.com/blog/${post.slug}`,
    },
  };
}

const BLOG_CATEGORIAS: Record<string, string> = {
  geral: "Geral", som: "Sonorização", luz: "Iluminação", producao: "Produção",
  dj: "DJ", vj: "VJ", carreira: "Carreira", equipamentos: "Equipamentos", tutoriais: "Tutoriais",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post.categoria, post.id);

  const date = new Date(post.created_at).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // Schema.org Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.titulo,
    description: post.resumo || post.conteudo?.slice(0, 160),
    ...(post.thumbnail_url && { image: post.thumbnail_url }),
    datePublished: post.created_at,
    dateModified: post.updated_at,
    author: { "@type": "Organization", name: "SMU PRO", url: "https://smuproducoes.com" },
    publisher: {
      "@type": "Organization",
      name: "SMU PRO",
      logo: { "@type": "ImageObject", url: "https://smuproducoes.com/icon-512.png" },
    },
    mainEntityOfPage: `https://smuproducoes.com/blog/${post.slug}`,
    wordCount: post.conteudo?.split(/\s+/).length ?? 0,
    articleSection: BLOG_CATEGORIAS[post.categoria] ?? post.categoria,
    inLanguage: "pt-BR",
    keywords: post.tags?.join(", ") ?? "",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://smuproducoes.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://smuproducoes.com/blog" },
      { "@type": "ListItem", position: 3, name: post.titulo, item: `https://smuproducoes.com/blog/${post.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-surface-2 text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/blog" className="flex items-center gap-2 text-muted-light hover:text-foreground transition-colors text-sm">
            <ArrowLeft size={16} /> Blog
          </Link>
          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="gradient-text">SMU</span> <span className="text-foreground">PRO</span>
          </Link>
          <Link href="/cursos"><Button variant="outline" size="sm">Ver Cursos</Button></Link>
        </div>
      </nav>

      <article className="mx-auto max-w-3xl px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted-light mb-8">
          <Link href="/" className="hover:text-muted transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-muted transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-muted truncate max-w-[200px]">{post.titulo}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="default">{BLOG_CATEGORIAS[post.categoria] ?? post.categoria}</Badge>
            <span className="text-xs text-muted-light flex items-center gap-1"><Clock size={12} /> {post.tempo_leitura ?? 5} min de leitura</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">{post.titulo}</h1>
          {post.resumo && (
            <p className="text-lg text-muted-light leading-relaxed">{post.resumo}</p>
          )}
          <div className="flex items-center gap-4 mt-5 text-xs text-muted-light">
            <span className="flex items-center gap-1"><Calendar size={12} /> {date}</span>
            {post.views > 0 && <span className="flex items-center gap-1"><Eye size={12} /> {post.views} visualizações</span>}
          </div>
        </header>

        {/* Thumbnail */}
        {post.thumbnail_url && (
          <div className="rounded-2xl overflow-hidden border border-border mb-10">
            <img src={post.thumbnail_url} alt={post.titulo} className="w-full aspect-video object-cover" />
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-lg prose-invert max-w-none
            [&_h1]:text-foreground [&_h1]:font-black [&_h1]:text-2xl [&_h1]:mt-10 [&_h1]:mb-4
            [&_h2]:text-foreground [&_h2]:font-bold [&_h2]:text-xl [&_h2]:mt-8 [&_h2]:mb-3
            [&_h3]:text-foreground [&_h3]:font-semibold [&_h3]:text-lg [&_h3]:mt-6 [&_h3]:mb-2
            [&_p]:text-muted [&_p]:leading-relaxed [&_p]:mb-4
            [&_a]:text-amber-400 [&_a]:underline [&_a]:underline-offset-2
            [&_strong]:text-foreground
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:text-muted
            [&_li]:mb-1.5
            [&_blockquote]:border-l-4 [&_blockquote]:border-amber-500 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-light
            [&_code]:bg-surface-3 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:text-amber-400
            [&_img]:rounded-xl [&_img]:border [&_img]:border-border
            [&_table]:border [&_table]:border-border [&_th]:bg-surface-3 [&_th]:p-2 [&_td]:p-2 [&_td]:border [&_td]:border-border"
          dangerouslySetInnerHTML={{ __html: post.conteudo }}
        />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-border">
            {post.tags.map((tag: string) => (
              <span key={tag} className="px-2.5 py-1 rounded-full bg-surface-3 text-xs text-muted">#{tag}</span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-10 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 text-center">
          <h3 className="font-bold text-foreground mb-2">Quer aprender na prática?</h3>
          <p className="text-sm text-muted-light mb-4">Explore nossos cursos com certificado, IA e conteúdo interativo.</p>
          <Link href="/cursos"><Button>Ver cursos disponíveis <ChevronRight size={14} /></Button></Link>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-lg font-bold text-foreground mb-5">Artigos relacionados</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((r: any) => (
              <Link key={r.id} href={`/blog/${r.slug}`} className="group">
                <div className="rounded-2xl bg-surface border border-border overflow-hidden hover:border-amber-500/30 transition-all">
                  <div className="h-32 bg-gradient-to-br from-surface-2 to-surface-3 flex items-center justify-center overflow-hidden">
                    {r.thumbnail_url ? (
                      <img src={r.thumbnail_url} alt={r.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <BookOpen size={24} className="text-muted-light" />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground text-sm leading-tight line-clamp-2 group-hover:text-amber-400 transition-colors">{r.titulo}</h3>
                    <span className="text-[10px] text-muted-light mt-2 flex items-center gap-1"><Clock size={10} /> {r.tempo_leitura ?? 5} min</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
