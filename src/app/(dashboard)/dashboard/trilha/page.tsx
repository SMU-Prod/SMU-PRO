import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/server";
import { getCurrentUser } from "@/lib/actions/users";
import { Header } from "@/components/layout/header";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getLevelLabel, getCategoryIcon, formatMinutes } from "@/lib/utils";
import {
  CheckCircle2, Circle, Lock, Play, Award, TrendingUp,
  BookOpen, ChevronRight, Star,
} from "lucide-react";
import Link from "next/link";

const LEARNING_PATH: {
  level: string;
  label: string;
  description: string;
  color: string;
  bg: string;
  border: string;
}[] = [
  {
    level: "trainee",
    label: "Trainee",
    description: "Fundamentos para quem está começando no mercado de eventos",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    level: "junior",
    label: "Junior",
    description: "Habilidades intermediárias para coordenadores em crescimento",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    level: "pleno",
    label: "Pleno",
    description: "Domínio avançado para gestão completa de eventos",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
];

export default async function TrilhaPage() {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  const user = await getCurrentUser();
  const supabase = createAdminClient();
  const { data: userRow } = await supabase.from("users").select("id").eq("clerk_id", userId).single();
  const userUuid = userRow?.id;

  // Buscar cursos ativos e matrículas do usuário
  const [{ data: allCourses }, enrollmentsResult] = await Promise.all([
    supabase
      .from("courses")
      .select("id, titulo, slug, nivel, categoria, carga_horaria, thumbnail_url")
      .eq("ativo", true)
      .order("nivel")
      .order("titulo"),
    userUuid
      ? supabase
          .from("enrollments")
          .select("course_id, progresso, status")
          .eq("user_id", userUuid)
          .eq("status", "ativo")
      : Promise.resolve({ data: [] }),
  ]);
  const enrollments = enrollmentsResult.data;

  const courses = allCourses ?? [];
  const enrollMap = new Map(
    (enrollments ?? []).map((e) => [e.course_id, e])
  );

  // Organizar cursos por nível
  const byLevel: Record<string, typeof courses> = {};
  for (const c of courses) {
    if (!byLevel[c.nivel]) byLevel[c.nivel] = [];
    byLevel[c.nivel].push(c);
  }

  // Stats gerais
  const totalEnrolled = enrollments?.length ?? 0;
  const totalCompleted = (enrollments ?? []).filter((e) => e.progresso === 100).length;
  const totalCourses = courses.length;

  return (
    <div className="animate-fade-in">
      <Header
        title="Trilha de Aprendizado"
        subtitle="Sua jornada de desenvolvimento profissional"
        role={user?.role}
      />

      <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
        {/* Progress overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-surface rounded-2xl border border-border p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-9 w-9 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <BookOpen size={18} className="text-amber-400" />
              </div>
              <span className="text-sm text-muted-light">Matriculados</span>
            </div>
            <p className="text-2xl font-black text-foreground">{totalEnrolled}</p>
            <p className="text-xs text-muted-light mt-0.5">de {totalCourses} disponíveis</p>
          </div>
          <div className="bg-surface rounded-2xl border border-border p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-9 w-9 rounded-xl bg-emerald-50 flex items-center justify-center">
                <CheckCircle2 size={18} className="text-emerald-600" />
              </div>
              <span className="text-sm text-muted-light">Concluídos</span>
            </div>
            <p className="text-2xl font-black text-foreground">{totalCompleted}</p>
            <p className="text-xs text-muted-light mt-0.5">cursos finalizados</p>
          </div>
          <div className="bg-surface rounded-2xl border border-border p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-9 w-9 rounded-xl bg-amber-50 flex items-center justify-center">
                <Star size={18} className="text-amber-600" />
              </div>
              <span className="text-sm text-muted-light">Nível Atual</span>
            </div>
            <p className="text-2xl font-black text-foreground capitalize">{user?.role === "projeto_cultural" ? "MIT" : getLevelLabel(user?.role ?? "trainee")}</p>
            <p className="text-xs text-muted-light mt-0.5">na plataforma</p>
          </div>
        </div>

        {/* Learning path */}
        <div className="space-y-6">
          {LEARNING_PATH.map((levelInfo, idx) => {
            const levelCourses = byLevel[levelInfo.level] ?? [];
            const levelEnrolled = levelCourses.filter((c) => enrollMap.has(c.id));
            const levelCompleted = levelCourses.filter(
              (c) => enrollMap.get(c.id)?.progresso === 100
            );
            const levelProgress = levelCourses.length > 0
              ? Math.round((levelCompleted.length / levelCourses.length) * 100)
              : 0;

            return (
              <div key={levelInfo.level}>
                {/* Level header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl border shrink-0 ${levelInfo.border} ${levelInfo.bg}`}>
                      <span className={`font-black text-sm ${levelInfo.color}`}>{idx + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 sm:gap-3 mb-1 flex-wrap">
                        <h2 className="font-bold text-foreground">{levelInfo.label}</h2>
                        <Badge variant={levelInfo.level as any}>{levelInfo.label}</Badge>
                        <span className="text-xs text-muted-light">
                          {levelCompleted.length}/{levelCourses.length} concluídos
                        </span>
                      </div>
                      <p className="text-sm text-muted-light hidden sm:block">{levelInfo.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-13 sm:ml-0">
                    <Progress value={levelProgress} className="w-24 h-2" />
                    <span className="text-sm font-semibold text-amber-400 w-10 text-right">{levelProgress}%</span>
                  </div>
                </div>

                {/* Connector line */}
                {idx < LEARNING_PATH.length - 1 && (
                  <div className="ml-5 w-0.5 h-4 bg-surface-3 mb-4" />
                )}

                {/* Courses grid */}
                {levelCourses.length === 0 ? (
                  <div className="ml-0 sm:ml-14 p-4 rounded-xl bg-background border border-dashed border-border text-sm text-muted-light">
                    Nenhum curso disponível neste nível ainda.
                  </div>
                ) : (
                  <div className="ml-0 sm:ml-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {levelCourses.map((course) => {
                      const enrollment = enrollMap.get(course.id);
                      const progress = enrollment?.progresso ?? 0;
                      const isEnrolled = !!enrollment;
                      const isDone = progress === 100;

                      return (
                        <div
                          key={course.id}
                          className={`rounded-xl border bg-surface p-4 transition-all ${
                            isDone
                              ? "border-emerald-200 bg-emerald-50/30"
                              : isEnrolled
                              ? "border-amber-500/20 hover:shadow-sm"
                              : "border-border hover:border-border-strong"
                          }`}
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <div className="text-2xl shrink-0 mt-0.5">
                              {getCategoryIcon(course.categoria)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-foreground line-clamp-2 leading-snug">
                                {course.titulo}
                              </p>
                              {course.carga_horaria && (
                                <p className="text-xs text-muted-light mt-1">
                                  {formatMinutes(course.carga_horaria)}
                                </p>
                              )}
                            </div>
                            <div className="shrink-0">
                              {isDone ? (
                                <CheckCircle2 size={18} className="text-emerald-500" />
                              ) : isEnrolled ? (
                                <Circle size={18} className="text-amber-400" />
                              ) : (
                                <Lock size={16} className="text-muted-light" />
                              )}
                            </div>
                          </div>

                          {isEnrolled && (
                            <div className="mb-3">
                              <Progress value={progress} className="h-1.5" />
                              <p className="text-xs text-muted-light mt-1">{progress}% concluído</p>
                            </div>
                          )}

                          <Link href={isEnrolled ? `/dashboard/cursos/${course.slug}` : `/cursos/${course.slug}`}>
                            <Button
                              variant={isDone ? "success" : isEnrolled ? "default" : "secondary"}
                              size="sm"
                              className="w-full gap-1.5"
                            >
                              {isDone ? (
                                <><Award size={13} /> Ver certificado</>
                              ) : isEnrolled ? (
                                <><Play size={13} /> Continuar</>
                              ) : (
                                <><ChevronRight size={13} /> Ver curso</>
                              )}
                            </Button>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* MIT Banner */}
        <div className="rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-500/5 to-surface-2 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-amber-100 text-2xl sm:text-3xl shrink-0">
                🏆
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground mb-1">Projeto Cultural MIT</h3>
                <p className="text-xs sm:text-sm text-muted">
                  Alunos selecionados têm acesso gratuito e ilimitado a todos os cursos, incluindo nível Pleno.
                </p>
              </div>
            </div>
            {user?.projeto_cultural ? (
              <Badge variant="mit" className="shrink-0 text-sm px-3 py-1">MIT Ativo</Badge>
            ) : (
              <div className="shrink-0">
                <Link href="/#sobre">
                  <Button variant="outline" size="sm">Saiba mais</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
