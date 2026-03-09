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
import { BookOpen, Award, Clock, TrendingUp, Play, ChevronRight, Trophy, Music } from "lucide-react";
import { CategoryIcon } from "@/components/ui/category-icon";
import Link from "next/link";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  const user = await getCurrentUser();
  const supabase = createAdminClient();
  const { data: userRow } = await supabase.from("users").select("id").eq("clerk_id", userId).single();
  const userUuid = userRow?.id;

  const [enrollmentsResult, certificatesResult] = await Promise.all([
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
          .limit(3)
      : Promise.resolve({ data: [] }),
  ]);

  const enrollments = enrollmentsResult.data ?? [];
  const certificates = certificatesResult.data ?? [];

  const totalHoras = enrollments.reduce((acc, e) => {
    const course = e.courses as any;
    return acc + (course?.carga_horaria ?? 0);
  }, 0);

  const inProgress = enrollments.filter((e) => (e.progresso ?? 0) > 0 && (e.progresso ?? 0) < 100);

  return (
    <div className="animate-fade-in">
      <Header
        title={`Olá, ${user?.nome?.split(" ")[0] ?? "Aluno"}!`}
        subtitle="Bem-vindo de volta à SMU PRO"
        role={user?.role}
      />

      <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={<BookOpen size={20} className="text-amber-400" />}
            label="Cursos Matriculados"
            value={enrollments.length}
            bg="bg-amber-500/10"
          />
          <StatCard
            icon={<TrendingUp size={20} className="text-emerald-600" />}
            label="Em Andamento"
            value={inProgress.length}
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
            label="Horas de Conteúdo"
            value={formatMinutes(totalHoras)}
            bg="bg-blue-50"
          />
        </div>

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
                  Você tem acesso gratuito e ilimitado a todos os cursos da plataforma.
                </p>
              </div>
              <Badge variant="mit" className="ml-auto">MIT</Badge>
            </div>
          </div>
        )}

        {/* Em andamento */}
        {inProgress.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-foreground">Continuar Estudando</h2>
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

        {/* Certificados recentes */}
        {certificates.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-foreground">Certificados Recentes</h2>
              <Link href="/dashboard/certificados">
                <Button variant="ghost" size="sm">
                  Ver todos <ChevronRight size={14} />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {certificates.map((cert) => {
                const course = cert.courses as any;
                return (
                  <Card key={cert.id} className="hover:border-amber-500/30 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl"><CategoryIcon category={course?.categoria} size={24} /></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">{course?.titulo}</p>
                          <p className="text-xs text-muted-light mt-0.5">
                            {new Date(cert.emitido_em).toLocaleDateString("pt-BR")}
                          </p>
                        </div>
                        <Award size={16} className="text-amber-500 shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {/* Explorar cursos */}
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
        {/* Thumbnail */}
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
          {/* Play overlay */}
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
