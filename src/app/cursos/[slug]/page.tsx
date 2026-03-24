import { getCourseBySlug } from "@/lib/actions/courses";
import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getLevelLabel, getCategoryLabel, formatMinutes, formatCurrency } from "@/lib/utils";
import { CategoryIcon } from "@/components/ui/category-icon";
import { CheckCircle, Clock, BookOpen, Award, Lock, Play, ChevronRight, ArrowLeft, Star } from "lucide-react";
import { EnrollButton } from "@/components/course/enroll-button";
import type { Metadata } from "next";

export const revalidate = 3600; // ISR: revalida a cada 1 hora

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const course = await getCourseBySlug(slug);
    return {
      title: course.titulo,
      description: course.descricao_curta || course.descricao?.slice(0, 160) || `Curso ${course.titulo} na SMU PRO`,
      openGraph: {
        title: course.titulo,
        description: course.descricao_curta || "",
        images: course.thumbnail_url ? [{ url: course.thumbnail_url }] : [],
      },
    };
  } catch {
    return { title: "Curso não encontrado" };
  }
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;

  let course: any;
  try {
    course = await getCourseBySlug(slug);
  } catch {
    notFound();
  }

  if (!course) notFound();

  const { userId } = await auth();
  let enrollment: any = null;
  let isMIT = false;

  if (userId) {
    const supabase = createAdminClient();
    const { data: userRow } = await supabase.from("users").select("id, projeto_cultural").eq("clerk_id", userId).single();
    if (userRow) {
      isMIT = userRow.projeto_cultural === true;
      const { data } = await supabase
        .from("enrollments")
        .select("*")
        .eq("user_id", userRow.id)
        .eq("course_id", course.id)
        .maybeSingle();
      enrollment = data;
    }
  }

  const allModules = course.modules ?? [];
  const modules = allModules.filter((m: any) => !m.parent_id);
  const childModsMap = new Map<string, any[]>();
  for (const m of allModules) {
    if (m.parent_id) {
      const list = childModsMap.get(m.parent_id) ?? [];
      list.push(m);
      childModsMap.set(m.parent_id, list.sort((a: any, b: any) => a.ordem - b.ordem));
    }
  }

  const totalLessons = allModules.reduce((acc: number, m: any) => acc + (m.lessons?.length ?? 0), 0);
  const isEnrolled = enrollment?.status === "ativo";
  const isFree = course.tipo === "free";

  // ── Schema.org JSON-LD ─────────────────────────────────────────
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.titulo,
    description: course.descricao_curta || course.descricao?.slice(0, 300) || "",
    url: `https://smuproducoes.com/cursos/${course.slug}`,
    provider: {
      "@type": "Organization",
      name: "SMU PRO",
      url: "https://smuproducoes.com",
      logo: "https://smuproducoes.com/icon-512.png",
    },
    ...(course.thumbnail_url && { image: course.thumbnail_url }),
    educationalLevel: getLevelLabel(course.nivel),
    inLanguage: "pt-BR",
    isAccessibleForFree: isFree,
    numberOfCredits: totalLessons,
    ...(course.carga_horaria && {
      timeRequired: `PT${course.carga_horaria}M`,
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseWorkload: `PT${course.carga_horaria}M`,
      },
    }),
    ...(!isFree && course.preco && {
      offers: {
        "@type": "Offer",
        price: course.preco,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        url: `https://smuproducoes.com/cursos/${course.slug}`,
      },
    }),
    about: {
      "@type": "Thing",
      name: getCategoryLabel(course.categoria),
    },
    syllabusSections: modules.map((m: any) => ({
      "@type": "Syllabus",
      name: m.titulo,
      numberOfLessons: m.lessons?.length ?? 0,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://smuproducoes.com" },
      { "@type": "ListItem", position: 2, name: "Cursos", item: "https://smuproducoes.com/cursos" },
      { "@type": "ListItem", position: 3, name: course.titulo, item: `https://smuproducoes.com/cursos/${course.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-surface-2 text-foreground">
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/cursos" className="flex items-center gap-2 text-muted-light hover:text-foreground transition-colors text-sm">
            <ArrowLeft size={16} />
            Voltar aos cursos
          </Link>
          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="gradient-text">SMU</span>
            <span className="text-muted-light text-sm font-normal ml-1">PRO</span>
          </Link>
          <div className="w-32" />
        </div>
      </nav>

      {/* Hero do curso */}
      <div className="relative border-b border-border bg-gradient-to-b from-surface-2 to-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-3 gap-12">
          {/* Info principal */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <CategoryIcon category={course.categoria} size={30} />
              <Badge variant={course.nivel as any}>{getLevelLabel(course.nivel)}</Badge>
              {(course.categorias?.length ? course.categorias : [course.categoria]).map((cat: string) => (
                <Badge key={cat} variant="secondary">{getCategoryLabel(cat)}</Badge>
              ))}
              {isFree && <Badge variant="free">Grátis</Badge>}
              {course.destaque && <Badge variant="warning">Em destaque</Badge>}
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-4">{course.titulo}</h1>

            {course.descricao_curta && (
              <p className="text-lg text-muted mb-6 leading-relaxed">{course.descricao_curta}</p>
            )}

            <div className="flex flex-wrap gap-6 text-sm text-muted-light">
              <span className="flex items-center gap-1.5">
                <BookOpen size={15} className="text-amber-400" />
                {totalLessons} aulas
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={15} className="text-amber-400" />
                {formatMinutes(course.carga_horaria ?? 0)}
              </span>
              <span className="flex items-center gap-1.5">
                <Award size={15} className="text-amber-400" />
                Certificado incluso
              </span>
              {course.avaliacao_media > 0 && (
                <span className="flex items-center gap-1.5">
                  <Star size={15} className="text-amber-400 fill-amber-400" />
                  {course.avaliacao_media.toFixed(1)} ({course.total_alunos} alunos)
                </span>
              )}
            </div>
          </div>

          {/* Card de compra */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-surface border border-border shadow-sm p-6 sticky top-24">
              {/* Preview / thumbnail */}
              {course.trailer_youtube_id ? (
                <div className="relative aspect-video rounded-xl overflow-hidden mb-5 bg-black">
                  <Image
                    src={`https://img.youtube.com/vi/${course.trailer_youtube_id}/hqdefault.jpg`}
                    alt={course.titulo}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-amber-500 flex items-center justify-center shadow-lg">
                      <Play size={24} className="fill-white text-white ml-1" />
                    </div>
                  </div>
                </div>
              ) : course.thumbnail_url ? (
                <div className="relative aspect-video rounded-xl overflow-hidden mb-5">
                  <Image
                    src={course.thumbnail_url}
                    alt={course.titulo}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              ) : (
                <div className="aspect-video rounded-xl bg-gradient-to-br from-surface-2 to-surface-3 mb-5 flex items-center justify-center text-6xl">
                  <CategoryIcon category={course.categoria} size={48} />
                </div>
              )}

              {/* Preço */}
              <div className="mb-5">
                {isFree ? (
                  <div className="text-3xl font-black text-emerald-600">Grátis</div>
                ) : (
                  <div className="text-3xl font-black text-foreground">{formatCurrency(course.preco ?? 0)}</div>
                )}
              </div>

              {/* CTA */}
              {isEnrolled ? (
                <Link href={`/dashboard/cursos/${course.slug}`} className="block">
                  <Button size="lg" className="w-full gap-2">
                    <Play size={18} />
                    Continuar estudando
                  </Button>
                </Link>
              ) : userId ? (
                <EnrollButton course={course} userId={userId} isMIT={isMIT} />
              ) : (
                <Link href={`/login?redirect_url=/cursos/${course.slug}`} className="block">
                  <Button size="lg" className="w-full gap-2">
                    Entrar para acessar <ChevronRight size={18} />
                  </Button>
                </Link>
              )}

              <div className="mt-4 space-y-2 text-sm text-muted-light">
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                  Acesso vitalício após inscrição
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                  Certificado verificável com QR Code
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                  Anotações pessoais no player
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo do curso */}
      <div className="mx-auto max-w-7xl px-6 py-12 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-10">
          {/* Descrição completa */}
          {course.descricao && (
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Sobre o curso</h2>
              <div className="text-muted leading-relaxed whitespace-pre-line">{course.descricao}</div>
            </section>
          )}

          {/* Conteúdo programático */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Conteúdo do curso</h2>
            <div className="space-y-3">
              {modules.map((mod: any, mIdx: number) => {
                const children = childModsMap.get(mod.id) ?? [];
                const modTotalLessons = (mod.lessons?.length ?? 0) + children.reduce((a: number, c: any) => a + (c.lessons?.length ?? 0), 0);
                return (
                  <div key={mod.id} className="rounded-xl bg-surface border border-border overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-4 bg-surface-2">
                      <h3 className="font-semibold text-sm text-foreground">
                        <span className="text-muted-light mr-2">Módulo {mIdx + 1}</span>
                        {mod.titulo}
                      </h3>
                      <span className="text-xs text-muted-light">{modTotalLessons} aulas</span>
                    </div>
                    <div className="border-t border-border/50">
                      {/* Root module's own lessons */}
                      {(mod.lessons ?? []).map((lesson: any, lIdx: number) => (
                        <div key={lesson.id} className="flex items-center gap-3 px-5 py-3 border-b border-border/50 last:border-0">
                          {lesson.preview_gratis || isEnrolled ? (
                            <Play size={14} className="text-amber-400 shrink-0" />
                          ) : (
                            <Lock size={14} className="text-muted-light shrink-0" />
                          )}
                          <span className="text-sm text-muted flex-1">
                            {lIdx + 1}. {lesson.titulo}
                          </span>
                          <div className="flex items-center gap-2 shrink-0">
                            {lesson.tem_quiz && (
                              <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/15 px-2 py-0.5 rounded-full">Quiz</span>
                            )}
                            {lesson.preview_gratis && !isEnrolled && (
                              <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded-full">Grátis</span>
                            )}
                            <span className="text-xs text-muted-light">{lesson.duracao_min}min</span>
                          </div>
                        </div>
                      ))}

                      {/* Submodules with their lessons */}
                      {children.map((sub: any) => (
                        <div key={sub.id}>
                          <div className="flex items-center gap-2 px-5 py-2.5 bg-surface-2/50 border-b border-border/50">
                            <ChevronRight size={12} className="text-amber-400/50 shrink-0" />
                            <span className="text-xs font-semibold text-foreground">{sub.titulo}</span>
                            <span className="text-[10px] text-muted-light ml-auto">{sub.lessons?.length ?? 0} aulas</span>
                          </div>
                          {(sub.lessons ?? []).map((lesson: any, lIdx: number) => (
                            <div key={lesson.id} className="flex items-center gap-3 px-7 py-3 border-b border-border/50 last:border-0">
                              {lesson.preview_gratis || isEnrolled ? (
                                <Play size={14} className="text-amber-400 shrink-0" />
                              ) : (
                                <Lock size={14} className="text-muted-light shrink-0" />
                              )}
                              <span className="text-sm text-muted flex-1">
                                {lIdx + 1}. {lesson.titulo}
                              </span>
                              <div className="flex items-center gap-2 shrink-0">
                                {lesson.tem_quiz && (
                                  <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/15 px-2 py-0.5 rounded-full">Quiz</span>
                                )}
                                {lesson.preview_gratis && !isEnrolled && (
                                  <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded-full">Grátis</span>
                                )}
                                <span className="text-xs text-muted-light">{lesson.duracao_min}min</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* Sidebar info extra */}
        <aside className="lg:col-span-1">
          <div className="rounded-2xl bg-surface border border-border p-6">
            <h3 className="font-bold mb-4 text-sm text-muted-light uppercase tracking-widest">Detalhes do curso</h3>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-light">Nível</dt>
                <dd className="font-medium text-foreground">{getLevelLabel(course.nivel)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-light">Categoria{(course.categorias?.length > 1) ? "s" : ""}</dt>
                <dd className="font-medium text-foreground text-right">
                  {(course.categorias?.length ? course.categorias : [course.categoria]).map((cat: string) => getCategoryLabel(cat)).join(", ")}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-light">Total de aulas</dt>
                <dd className="font-medium text-foreground">{totalLessons}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-light">Carga horária</dt>
                <dd className="font-medium text-foreground">{formatMinutes(course.carga_horaria ?? 0)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-light">Alunos inscritos</dt>
                <dd className="font-medium text-foreground">{course.total_alunos}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-light">Certificado</dt>
                <dd className="font-medium text-emerald-600">Incluso</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </div>
  );
}
