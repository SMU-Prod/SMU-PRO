import { getCourseBySlug } from "@/lib/actions/courses";
import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getCategoryIcon, getLevelLabel, getCategoryLabel, formatMinutes, formatCurrency } from "@/lib/utils";
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

  if (userId) {
    const supabase = createAdminClient();
    const { data: userRow } = await supabase.from("users").select("id").eq("clerk_id", userId).single();
    if (userRow) {
      const { data } = await supabase
        .from("enrollments")
        .select("*")
        .eq("user_id", userRow.id)
        .eq("course_id", course.id)
        .maybeSingle();
      enrollment = data;
    }
  }

  const modules = course.modules ?? [];

  const totalLessons = modules.reduce((acc: number, m: any) => acc + (m.lessons?.length ?? 0), 0);
  const isEnrolled = enrollment?.status === "ativo";
  const isFree = course.tipo === "free";

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-[#141416]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/cursos" className="flex items-center gap-2 text-zinc-500 hover:text-zinc-100 transition-colors text-sm">
            <ArrowLeft size={16} />
            Voltar aos cursos
          </Link>
          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="gradient-text">SMU</span>
            <span className="text-zinc-500 text-sm font-normal ml-1">PRO</span>
          </Link>
          <div className="w-32" />
        </div>
      </nav>

      {/* Hero do curso */}
      <div className="relative border-b border-zinc-800 bg-gradient-to-b from-zinc-900 to-[#141416]">
        <div className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-3 gap-12">
          {/* Info principal */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-3xl">{getCategoryIcon(course.categoria)}</span>
              <Badge variant={course.nivel as any}>{getLevelLabel(course.nivel)}</Badge>
              <Badge variant="secondary">{getCategoryLabel(course.categoria)}</Badge>
              {isFree && <Badge variant="free">Grátis</Badge>}
              {course.destaque && <Badge variant="warning">Em destaque</Badge>}
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-zinc-100 leading-tight mb-4">{course.titulo}</h1>

            {course.descricao_curta && (
              <p className="text-lg text-zinc-400 mb-6 leading-relaxed">{course.descricao_curta}</p>
            )}

            <div className="flex flex-wrap gap-6 text-sm text-zinc-500">
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
            <div className="rounded-2xl bg-[#141416] border border-zinc-800 shadow-sm p-6 sticky top-24">
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
              ) : (
                <div className="aspect-video rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 mb-5 flex items-center justify-center text-6xl">
                  {getCategoryIcon(course.categoria)}
                </div>
              )}

              {/* Preço */}
              <div className="mb-5">
                {isFree ? (
                  <div className="text-3xl font-black text-emerald-600">Grátis</div>
                ) : (
                  <div className="text-3xl font-black text-zinc-100">{formatCurrency(course.preco ?? 0)}</div>
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
                <EnrollButton course={course} userId={userId} />
              ) : (
                <Link href={`/login?redirect_url=/cursos/${course.slug}`} className="block">
                  <Button size="lg" className="w-full gap-2">
                    Entrar para acessar <ChevronRight size={18} />
                  </Button>
                </Link>
              )}

              <div className="mt-4 space-y-2 text-sm text-zinc-500">
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
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">Sobre o curso</h2>
              <div className="text-zinc-400 leading-relaxed whitespace-pre-line">{course.descricao}</div>
            </section>
          )}

          {/* Conteúdo programático */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-100 mb-6">Conteúdo do curso</h2>
            <div className="space-y-3">
              {modules.map((mod: any, mIdx: number) => (
                <div key={mod.id} className="rounded-xl bg-[#141416] border border-zinc-800 overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-4 bg-zinc-900">
                    <h3 className="font-semibold text-sm text-zinc-100">
                      <span className="text-zinc-500 mr-2">Módulo {mIdx + 1}</span>
                      {mod.titulo}
                    </h3>
                    <span className="text-xs text-zinc-500">{mod.lessons?.length ?? 0} aulas</span>
                  </div>
                  <div className="border-t border-zinc-800/50">
                    {(mod.lessons ?? []).map((lesson: any, lIdx: number) => (
                      <div key={lesson.id} className="flex items-center gap-3 px-5 py-3 border-b border-zinc-800/50 last:border-0">
                        {lesson.preview_gratis || isEnrolled ? (
                          <Play size={14} className="text-amber-400 shrink-0" />
                        ) : (
                          <Lock size={14} className="text-zinc-600 shrink-0" />
                        )}
                        <span className="text-sm text-zinc-300 flex-1">
                          {lIdx + 1}. {lesson.titulo}
                        </span>
                        <div className="flex items-center gap-2 shrink-0">
                          {lesson.tem_quiz && (
                            <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/15 px-2 py-0.5 rounded-full">Quiz</span>
                          )}
                          {lesson.preview_gratis && !isEnrolled && (
                            <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded-full">Grátis</span>
                          )}
                          <span className="text-xs text-zinc-500">{lesson.duracao_min}min</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar info extra */}
        <aside className="lg:col-span-1">
          <div className="rounded-2xl bg-[#141416] border border-zinc-800 p-6">
            <h3 className="font-bold mb-4 text-sm text-zinc-500 uppercase tracking-widest">Detalhes do curso</h3>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-zinc-500">Nível</dt>
                <dd className="font-medium text-zinc-100">{getLevelLabel(course.nivel)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Categoria</dt>
                <dd className="font-medium text-zinc-100">{getCategoryLabel(course.categoria)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Total de aulas</dt>
                <dd className="font-medium text-zinc-100">{totalLessons}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Carga horária</dt>
                <dd className="font-medium text-zinc-100">{formatMinutes(course.carga_horaria ?? 0)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Alunos inscritos</dt>
                <dd className="font-medium text-zinc-100">{course.total_alunos}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Certificado</dt>
                <dd className="font-medium text-emerald-600">Incluso</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </div>
  );
}
