import { createAdminClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CategoryIcon } from "@/components/ui/category-icon";
import { getLevelLabel, formatCurrency, getCategoryLabel } from "@/lib/utils";
import { ArrowLeft, BookOpen, Clock, ChevronRight, Users } from "lucide-react";
import { getServerT, getServerLocale } from "@/lib/i18n/server";
import { LanguageSelector } from "@/components/i18n/language-selector";
import { courseMeta } from "@/lib/i18n/courses-meta";
import { getPortal, filterCoursesByPortal } from "@/lib/portal";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

const CATEGORY_META: Record<string, { title: string; description: string; keywords: string[] }> = {
  som: {
    title: "Cursos de Sonorização ao Vivo",
    description: "Aprenda sonorização ao vivo, mixagem, sistemas de PA, microfonação e técnicas de áudio para eventos. Certificado incluso.",
    keywords: ["sonorização", "áudio ao vivo", "mixagem", "PA", "microfonação"],
  },
  luz: {
    title: "Cursos de Iluminação Cênica",
    description: "Domine iluminação cênica, moving heads, consoles DMX, design de luz e efeitos especiais para eventos e shows.",
    keywords: ["iluminação", "luz cênica", "DMX", "moving head", "design de luz"],
  },
  producao: {
    title: "Cursos de Produção de Eventos",
    description: "Aprenda produção executiva, gestão de eventos, logística, planejamento e coordenação de equipes técnicas.",
    keywords: ["produção de eventos", "gestão", "logística", "coordenação"],
  },
  dj: {
    title: "Cursos de DJ",
    description: "Técnicas de DJ, mixagem, beatmatching, uso de CDJs e controladoras para eventos e festas profissionais.",
    keywords: ["DJ", "mixagem", "beatmatching", "CDJ", "controladora"],
  },
  vj: {
    title: "Cursos de VJ e Vídeo ao Vivo",
    description: "VJing, mapeamento de vídeo, projeção, Resolume, conteúdo visual ao vivo para eventos e espetáculos.",
    keywords: ["VJ", "vídeo ao vivo", "projeção", "mapeamento", "Resolume"],
  },
  roadie: {
    title: "Cursos para Roadies",
    description: "Formação para roadies: montagem de palco, rigging, cabeamento, segurança e operação de equipamentos.",
    keywords: ["roadie", "montagem de palco", "rigging", "cabeamento"],
  },
  marketing: {
    title: "Cursos de Marketing para Eventos",
    description: "Marketing digital, divulgação, mídias sociais e estratégias de venda para profissionais de eventos.",
    keywords: ["marketing", "eventos", "divulgação", "mídias sociais"],
  },
  efeitos: {
    title: "Cursos de Efeitos Especiais",
    description: "Máquinas de fumaça, CO2, confete, pyro e efeitos especiais para eventos, shows e festas.",
    keywords: ["efeitos especiais", "fumaça", "pyro", "CO2", "confete"],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = CATEGORY_META[slug];
  if (!meta) return { title: "Categoria não encontrada" };

  return {
    title: `${meta.title} — SMU PRO`,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://smuproducoes.com/cursos/categoria/${slug}`,
    },
    alternates: {
      canonical: `https://smuproducoes.com/cursos/categoria/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(CATEGORY_META).map((slug) => ({ slug }));
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const meta = CATEGORY_META[slug];
  if (!meta) notFound();

  const t = await getServerT();
  const lang = await getServerLocale();

  const supabase = createAdminClient();
  const { data: courses } = await (supabase as any)
    .from("courses")
    .select("id, titulo, slug, nivel, categoria, categorias, tipo, preco, thumbnail_url, carga_horaria, descricao_curta, total_alunos")
    .eq("ativo", true)
    .eq("categoria", slug)
    .order("nivel")
    .order("titulo");

  const portal = await getPortal();
  const list = filterCoursesByPortal(courses ?? [], portal);

  // Schema.org
  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: meta.title,
    description: meta.description,
    url: `https://smuproducoes.com/cursos/categoria/${slug}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: list.length,
      itemListElement: list.map((c: any, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Course",
          name: c.titulo,
          url: `https://smuproducoes.com/cursos/${c.slug}`,
          description: c.descricao_curta || "",
          provider: { "@type": "Organization", name: "SMU PRO" },
        },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://smuproducoes.com" },
      { "@type": "ListItem", position: 2, name: "Cursos", item: "https://smuproducoes.com/cursos" },
      { "@type": "ListItem", position: 3, name: getCategoryLabel(slug), item: `https://smuproducoes.com/cursos/categoria/${slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-surface-2 text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/cursos" className="flex items-center gap-2 text-muted-light hover:text-foreground transition-colors text-sm">
            <ArrowLeft size={16} /> {t("Todos os cursos")}
          </Link>
          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="gradient-text">SMU</span> <span className="text-foreground">PRO</span>
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <Link href="/cadastro"><Button size="sm">{t("Começar grátis")}</Button></Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-14 w-14 rounded-2xl bg-amber-500/10 flex items-center justify-center">
              <CategoryIcon category={slug} size={28} className="text-amber-400" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-3">{t(meta.title)}</h1>
          <p className="text-muted-light max-w-2xl mx-auto">{t(meta.description)}</p>
          <p className="text-sm text-amber-400 mt-3">{list.length} {list.length !== 1 ? t("cursos disponíveis") : t("curso disponível")}</p>
        </div>

        {/* Course grid */}
        {list.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center rounded-2xl bg-surface border border-border">
            <BookOpen size={40} className="text-muted-light mb-3" />
            <p className="text-foreground font-medium mb-1">{t("Em breve")}</p>
            <p className="text-sm text-muted-light mb-5">{t("Estamos preparando cursos nesta categoria.")}</p>
            <Link href="/cursos"><Button variant="outline" size="sm">{t("Ver todos os cursos")}</Button></Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((c: any) => (
              <Link key={c.id} href={`/cursos/${c.slug}`} className="group">
                <div className="rounded-2xl bg-surface border border-border overflow-hidden hover:border-amber-500/30 hover:shadow-md transition-all h-full flex flex-col">
                  <div className="h-40 bg-gradient-to-br from-surface-2 to-surface-3 flex items-center justify-center overflow-hidden relative">
                    {c.thumbnail_url ? (
                      <Image src={c.thumbnail_url} alt={c.titulo} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <CategoryIcon category={c.categoria} size={40} className="text-muted-light" />
                    )}
                    <div className="absolute top-3 right-3">
                      <Badge variant={c.nivel as any} className="text-[10px]">{t(getLevelLabel(c.nivel))}</Badge>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h2 className="font-bold text-foreground leading-tight mb-2 line-clamp-2 group-hover:text-amber-400 transition-colors">
                      {courseMeta(c.slug, lang)?.titulo ?? c.titulo}
                    </h2>
                    {(courseMeta(c.slug, lang)?.descricao ?? c.descricao_curta) && (
                      <p className="text-sm text-muted-light line-clamp-2 mb-4 flex-1">{courseMeta(c.slug, lang)?.descricao ?? c.descricao_curta}</p>
                    )}
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/50">
                      <div className="flex items-center gap-3 text-xs text-muted-light">
                        {c.carga_horaria && <span className="flex items-center gap-1"><Clock size={11} /> {Math.round(c.carga_horaria / 60)}h</span>}
                        {c.total_alunos > 0 && <span className="flex items-center gap-1"><Users size={11} /> {c.total_alunos}</span>}
                      </div>
                      <span className="text-sm font-bold text-amber-400">
                        {c.tipo === "free" ? t("Grátis") : c.preco ? formatCurrency(c.preco) : t("Pago")}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* SEO text */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <h2 className="text-lg font-bold text-foreground mb-3">{t("Sobre")} {t(getCategoryLabel(slug))}</h2>
          <p className="text-sm text-muted-light leading-relaxed">
            {t("Os cursos de")} {t(getCategoryLabel(slug)).toLowerCase()} {t("da SMU PRO são desenvolvidos por profissionais atuantes no mercado de eventos. Com conteúdo interativo gerado por IA, certificado digital verificável e suporte completo, você aprende na prática e se prepara para atuar em shows, festivais, corporativos e muito mais.")}
          </p>
          <Link href="/cursos" className="inline-flex items-center gap-1 text-sm text-amber-400 mt-4 hover:underline">
            {t("Ver todas as categorias")} <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
