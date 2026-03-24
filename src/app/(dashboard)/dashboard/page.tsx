import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/actions/users";
import { createAdminClient } from "@/lib/supabase/server";
import { Header } from "@/components/layout/header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { formatMinutes, getLevelLabel } from "@/lib/utils";
import { CategoryIcon } from "@/components/ui/category-icon";
import {
  BookOpen, Award, Clock, TrendingUp, Play, ChevronRight,
  Trophy, Music, Target, Flame, GraduationCap, BarChart3,
  Calendar, CheckCircle2, ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  const user = await getCurrentUser();
  const supabase = createAdminClient();
  const { data: userRow } = await supabase.from("users").select("id").eq("clerk_id", userId).single();
  const userUuid = userRow?.id;

  const [enrollmentsResult, certificatesResult, recentActivityResult, allEnrollmentsResult] = await Promise.all([
    userUuid
      ? supabase
          .from("enrollments")
          .select(`*, courses(*)`)
          .eq("user_id", userUuid)
          .eq("status", "ativo")
          .order("updated_at", { ascending: false })
          .limit(6)
      : Promise.resolve({ data: [] }),
    userUuid
      ? supabase
          .from("certificates")
          .select(`*, courses(titulo, nivel, categoria)`)
          .eq("user_id", userUuid)
          .order("emitido_em", { ascending: false })
          .limit(4)
      : Promise.resolve({ data: [] }),
    userUuid
      ? supabase
          .from("activity_log")
          .select("*")
          .eq("user_id", userUuid)
          .in("tipo", ["lesson_complete", "quiz_pass", "certificate_issued"])
          .order("created_at", { ascending: false })
          .limit(5)
      : Promise.resolve({ data: [] }),
    userUuid
      ? supabase
          .from("enrollments")
          .select("progresso, course_id, courses(carga_horaria)")
          .eq("user_id", userUuid)
          .eq("status", "ativo")
      : Promise.resolve({ data: [] }),
  ]);

  const enrollments = enrollmentsResult.data ?? [];
  const certificates = certificatesResult.data ?? [];
  const recentActivity = recentActivityResult.data ?? [];
  const allEnrollments = allEnrollmentsResult.data ?? [];

  // Calculate stats
  const totalCursos = allEnrollments.length;
  const totalCompleted = allEnrollments.filter((e: any) => e.progresso === 100).length;
  const inProgress = enrollments.filter((e) => (e.progresso ?? 0) > 0 && (e.progresso ?? 0) < 100);
  const notStarted = enrollments.filter((e) => (e.progresso ?? 0) === 0);

  const totalHoras = allEnrollments.reduce((acc: number, e: any) => {
    const course = e.courses as any;
    return acc + (course?.carga_horaria ?? 0);
  }, 0);

  const horasEstudadas = allEnrollments.reduce((acc: number, e: any) => {
    const course = e.courses as any;
    const ch = course?.carga_horaria ?? 0;
    return acc + Math.round((ch * (e.progresso ?? 0)) / 100);
  }, 0);

  const progressoGeral = totalCursos > 0
    ? Math.round(allEnrollments.reduce((acc: number, e: any) => acc + (e.progresso ?? 0), 0) / totalCursos)
    : 0;

  return (
    <div className="animate-fade-in">
      <Header
        title={`Olá, ${user?.nome?.split(" ")[0] ?? "Aluno"}!`}
        subtitle="Bem-vindo de volta à SMU PRO"
        role={user?.role}
      />

      <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
        {/* MIT Banner */}
        {user?.projeto_cultural && (
          <div className="relative overflow-hidden rounded-xl border border-amber-200 bg-gradient-to-r from-amber-500/5 to-surface-2 p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                <Trophy size={24} className="text-amber-400" />
              </div>
              <div>
                <p className="font-semibold text-amber-700">Aluno Projeto Cultural MIT</p>
                <p className="text-sm text-muted-light">
                  Acesso gratuito e ilimitado a todos os cursos da plataforma.
                </p>
              </div>
              <Badge variant="mit" className="ml-auto">MIT</Badge>
            </div>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={<BookOpen size={20} className="text-amber-400" />}
            label="Cursos Matriculados"
            value={totalCursos}
            bg="bg-amber-500/10"
          />
          <StatCard
            icon={<CheckCircle2 size={20} className="text-emerald-600" />}
            label="Concluídos"
            value={totalCompleted}
            bg="bg-emerald-50"
          />
          <StatCard
            icon={<Award size={20} className="text-amber-600" />}
            label="Certificados"
            value={certificates.length}
            bg="bg-amber-50"
          />
          <StatCard
            icon={<Clock size={20} className="text-blue-600" />}
            label="Horas Estudadas"
            value={formatMinutes(horasEstudadas)}
            bg="bg-blue-50"
          />
        </div>

        {/* Progresso Geral + Resumo Rápido */}
        {totalCursos > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Progresso Geral */}
            <Card className="lg:col-span-2">
              <CardContent className="p-5">
                <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <BarChart3 size={16} className="text-amber-400" />
                  Seu Progresso
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-light">Progresso geral</span>
                      <span className="text-sm font-bold text-foreground">{progressoGeral}%</span>
                    </div>
                    <Progress value={progressoGeral} className="h-3" />
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="text-center p-3 rounded-lg bg-amber-500/5 border border-amber-500/10">
                      <p className="text-lg font-bold text-foreground">{inProgress.length}</p>
                      <p className="text-xs text-muted-light">Em andamento</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-blue-50 border border-blue-100">
                      <p className="text-lg font-bold text-foreground">{notStarted.length}</p>
                      <p className="text-xs text-muted-light">Não iniciados</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-emerald-50 border border-emerald-100">
                      <p className="text-lg font-bold text-foreground">{totalCompleted}</p>
                      <p className="text-xs text-muted-light">Finalizados</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Atalhos Rápidos */}
            <Card>
              <CardContent className="p-5">
                <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Target size={16} className="text-amber-400" />
                  Acesso Rápido
                </h2>
                <div className="space-y-2">
                  <Link href="/dashboard/cursos" className="block">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-2 transition-colors group">
                      <div className="h-8 w-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                        <BookOpen size={14} className="text-amber-400" />
                      </div>
                      <span className="text-sm text-foreground flex-1">Meus Cursos</span>
                      <ChevronRight size={14} className="text-muted-light group-hover:text-amber-400 transition-colors" />
                    </div>
                  </Link>
                  <Link href="/dashboard/trilha" className="block">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-2 transition-colors group">
                      <div className="h-8 w-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <TrendingUp size={14} className="text-emerald-600" />
                      </div>
                      <span className="text-sm text-foreground flex-1">Trilha de Aprendizado</span>
                      <ChevronRight size={14} className="text-muted-light group-hover:text-amber-400 transition-colors" />
                    </div>
                  </Link>
                  <Link href="/dashboard/certificados" className="block">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-2 transition-colors group">
                      <div className="h-8 w-8 rounded-lg bg-amber-50 flex items-center justify-center">
                        <Award size={14} className="text-amber-600" />
                      </div>
                      <span className="text-sm text-foreground flex-1">Certificados</span>
                      <ChevronRight size={14} className="text-muted-light group-hover:text-amber-400 transition-colors" />
                    </div>
                  </Link>
                  <Link href="/cursos" className="block">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-2 transition-colors group">
                      <div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        <GraduationCap size={14} className="text-blue-600" />
                      </div>
                      <span className="text-sm text-foreground flex-1">Explorar Catálogo</span>
                      <ChevronRight size={14} className="text-muted-light group-hover:text-amber-400 transition-colors" />
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Em andamento */}
        {inProgress.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-foreground flex items-center gap-2">
                <Flame size={16} className="text-amber-500" />
                Continuar Estudando
              </h2>
              <Link href="/dashboard/cursos">
                <Button variant="ghost" size="sm">
                  Ver todos <ChevronRight size={14} />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {inProgress.map((enrollment) => {
                const course = enrollment.courses as any;
                return (
                  <CourseCard
                    key={enrollment.id}
                    course={course}
                    progress={enrollment.progresso ?? 0}
                  />
                );
              })}
            </div>
          </section>
        )}

        {/* Atividade Recente */}
        {recentActivity.length > 0 && (
          <section>
            <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Calendar size={16} className="text-amber-400" />
              Atividade Recente
            </h2>
            <Card>
              <CardContent className="p-0 divide-y divide-border">
                {recentActivity.map((activity: any) => {
                  const date = new Date(activity.created_at);
                  const timeAgo = getTimeAgo(date);
                  const icon = activity.tipo === "certificate_issued" ? (
                    <Award size={14} className="text-amber-500" />
                  ) : activity.tipo === "quiz_pass" ? (
                    <CheckCircle2 size={14} className="text-emerald-500" />
                  ) : (
                    <Play size={14} className="text-blue-500" />
                  );

                  return (
                    <div key={activity.id} className="flex items-center gap-3 px-4 py-3">
                      <div className="h-8 w-8 rounded-lg bg-surface-2 flex items-center justify-center shrink-0">
                        {icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground truncate">{activity.descricao}</p>
                      </div>
                      <span className="text-xs text-muted-light shrink-0">{timeAgo}</span>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </section>
        )}

        {/* Certificados recentes */}
        {certificates.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-foreground flex items-center gap-2">
                <Award size={16} className="text-amber-500" />
                Certificados Recentes
              </h2>
              <Link href="/dashboard/certificados">
                <Button variant="ghost" size="sm">
                  Ver todos <ChevronRight size={14} />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {certificates.map((cert) => {
                const course = cert.courses as any;
                return (
                  <Link key={cert.id} href={`/certificado/${cert.codigo_verificacao}`}>
                    <Card className="hover:border-amber-500/30 transition-colors cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                            <Award size={18} className="text-amber-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">{course?.titulo}</p>
                            <p className="text-xs text-muted-light mt-0.5">
                              {new Date(cert.emitido_em).toLocaleDateString("pt-BR")}
                            </p>
                            {cert.nota_final && (
                              <p className="text-xs text-emerald-600 mt-0.5 font-medium">Nota: {cert.nota_final}/100</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Explorar cursos (empty state) */}
        {enrollments.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4"><Music size={48} className="text-muted-light" /></div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Comece sua jornada</h3>
            <p className="text-muted-light mb-6 max-w-md">
              Explore nosso catálogo de cursos e inicie sua formação profissional no mercado de eventos.
            </p>
            <Link href="/cursos">
              <Button size="lg">
                <BookOpen size={18} />
                Explorar Cursos
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, bg }: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  bg: string;
}) {
  return (
    <Card className="hover:border-amber-500/20 transition-colors">
      <CardContent className="p-4">
        <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${bg} mb-3`}>
          {icon}
        </div>
        <p className="text-2xl font-bold text-foreground">{value}</p>
        <p className="text-xs text-muted-light mt-0.5">{label}</p>
      </CardContent>
    </Card>
  );
}

function CourseCard({ course, progress }: { course: any; progress: number }) {
  return (
    <Link href={`/dashboard/cursos/${course.slug}`}>
      <Card className="overflow-hidden hover:border-amber-500/20 hover:shadow-md transition-all group cursor-pointer">
        <div className="relative h-36 bg-gradient-to-br from-surface-3 to-surface-3 overflow-hidden">
          {course.thumbnail_url ? (
            <img
              src={course.thumbnail_url}
              alt={course.titulo}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-4xl">
              <CategoryIcon category={course.categoria} size={36} />
            </div>
          )}
          <div className="absolute top-2 right-2">
            <Badge variant={course.nivel as any}>{getLevelLabel(course.nivel)}</Badge>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
            <div className="h-12 w-12 rounded-full bg-amber-500 flex items-center justify-center shadow-lg">
              <Play size={18} className="text-white ml-1" />
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-sm text-foreground line-clamp-1">{course.titulo}</h3>
          <div className="mt-3 space-y-1">
            <div className="flex items-center justify-between text-xs text-muted-light">
              <span>{progress}% concluído</span>
              <span>{formatMinutes(course.carga_horaria ?? 0)}</span>
            </div>
            <Progress value={progress} className="h-1.5" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function getTimeAgo(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  const diffHrs = Math.floor(diffMin / 60);
  const diffDays = Math.floor(diffHrs / 24);

  if (diffMin < 1) return "agora";
  if (diffMin < 60) return `${diffMin}min atrás`;
  if (diffHrs < 24) return `${diffHrs}h atrás`;
  if (diffDays === 1) return "ontem";
  if (diffDays < 7) return `${diffDays} dias atrás`;
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
}
