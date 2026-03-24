import { getPublishedPosts, getFeaturedPosts } from "@/lib/actions/blog";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ChevronRight, ArrowLeft, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog — Artigos sobre Sonorização, Iluminação e Eventos",
  description:
    "Aprenda sobre sonorização ao vivo, iluminação cênica, DJ, VJ, produção e gestão de eventos. Conteúdo gratuito da SMU PRO para profissionais do setor.",
  openGraph: {
    title: "Blog — SMU PRO",
    description: "Artigos sobre sonorização, iluminação e produção de eventos",
    url: "https://smuproducoes.com/blog",
  },
};

const BLOG_CATEGORIAS: Record<string, string> = {
  geral: "Geral",
  som: "Sonorização",
  luz: "Iluminação",
  producao: "Produção",
  dj: "DJ",
  vj: "VJ",
  carreira: "Carreira",
  equipamentos: "Equipamentos",
  tutoriais: "Tutoriais",
};

interface Props {
  searchParams: Promise<{ categoria?: string; page?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { categoria, page: pageStr = "1" } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageStr));

  const [{ posts, total }, featured] = await Promise.all([
    getPublishedPosts({ page: currentPage, limit: 12, categoria }),
    currentPage === 1 && !categoria ? getFeaturedPosts() : Promise.resolve([]),
  ]);

  const totalPages = Math.ceil(total / 12);

  // Schema.org para blog listing
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog SMU PRO",
    description: "Artigos sobre sonorização, iluminação e produção de eventos",
    url: "https://smuproducoes.com/blog",
    publisher: {
      "@type": "Organization",
      name: "SMU PRO",
      url: "https://smuproducoes.com",
    },
  };

  return (
    <div className="min-h-screen bg-surface-2 text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-muted-light hover:text-foreground transition-colors text-sm">
            <ArrowLeft size={16} /> Home
          </Link>
          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="gradient-text">SMU</span> <span className="text-foreground">PRO</span>
          </Link>
          <Link href="/cursos">
            <Button variant="outline" size="sm">Ver Cursos</Button>
          </Link>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-3">
            Blog <span className="gradient-text">SMU PRO</span>
          </h1>
          <p className="text-muted-light max-w-xl mx-auto">
            Artigos, tutoriais e insights sobre sonorização, iluminação e produção de eventos
          </p>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 flex-wrap justify-center mb-10">
          <Link
            href="/blog"
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              !categoria
                ? "bg-amber-500 text-black border-amber-500"
                : "bg-surface text-muted border-border hover:border-amber-500/30"
            }`}
          >
            Todos
          </Link>
          {Object.entries(BLOG_CATEGORIAS).map(([key, label]) => (
            <Link
              key={key}
              href={`/blog?categoria=${key}`}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                categoria === key
                  ? "bg-amber-500 text-black border-amber-500"
                  : "bg-surface text-muted border-border hover:border-amber-500/30"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Featured posts */}
        {featured.length > 0 && (
          <section className="mb-12">
            <h2 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
              <BookOpen size={18} className="text-amber-400" />
              Destaques
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featured.map((post: any) => (
                <PostCard key={post.id} post={post} featured />
              ))}
            </div>
          </section>
        )}

        {/* All posts */}
        {posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center rounded-2xl bg-surface border border-border">
            <BookOpen size={40} className="text-muted-light mb-3" />
            <p className="text-foreground font-medium mb-1">Nenhum artigo encontrado</p>
            <p className="text-sm text-muted-light mb-5">
              {categoria ? "Tente outra categoria." : "Em breve teremos novos conteúdos."}
            </p>
            <Link href="/blog"><Button variant="outline" size="sm">Ver todos</Button></Link>
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post: any) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 mt-10">
                {currentPage > 1 && (
                  <Link href={`/blog?${categoria ? `categoria=${categoria}&` : ""}page=${currentPage - 1}`}>
                    <Button variant="outline" size="sm">Anterior</Button>
                  </Link>
                )}
                <span className="text-sm text-muted-light">
                  Página {currentPage} de {totalPages}
                </span>
                {currentPage < totalPages && (
                  <Link href={`/blog?${categoria ? `categoria=${categoria}&` : ""}page=${currentPage + 1}`}>
                    <Button variant="outline" size="sm">Próxima</Button>
                  </Link>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function PostCard({ post, featured = false }: { post: any; featured?: boolean }) {
  const date = new Date(post.created_at).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="rounded-2xl bg-surface border border-border overflow-hidden hover:border-amber-500/30 hover:shadow-md transition-all h-full flex flex-col">
        {/* Thumbnail */}
        <div className={`relative bg-gradient-to-br from-surface-2 to-surface-3 flex items-center justify-center overflow-hidden ${featured ? "h-48" : "h-36"}`}>
          {post.thumbnail_url ? (
            <Image src={post.thumbnail_url} alt={post.titulo} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
          ) : (
            <BookOpen size={32} className="text-muted-light" />
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="default" className="text-[10px]">
              {BLOG_CATEGORIAS[post.categoria] ?? post.categoria}
            </Badge>
            <span className="text-[10px] text-muted-light flex items-center gap-1">
              <Clock size={10} /> {post.tempo_leitura ?? 5} min
            </span>
          </div>

          <h3 className="font-bold text-foreground leading-tight mb-2 line-clamp-2 group-hover:text-amber-400 transition-colors">
            {post.titulo}
          </h3>

          {post.resumo && (
            <p className="text-sm text-muted-light line-clamp-2 mb-4 flex-1">
              {post.resumo}
            </p>
          )}

          <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/50">
            <span className="text-[10px] text-muted-light">{date}</span>
            <span className="text-xs text-amber-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              Ler mais <ChevronRight size={12} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
