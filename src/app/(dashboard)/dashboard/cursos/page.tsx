import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import { createAdminClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Header } from "@/components/layout/header";
import { getLevelLabel, formatMinutes } from "@/lib/utils";
import { CategoryIcon } from "@/components/ui/category-icon";
import { BookOpen, Play, Trophy, ChevronRight, Plus } from "lucide-react";

export default async function MeusCursosPage() {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  const supabase = createAdminClient();
  const { data: userRow } = await supabase.from("users").select("id").eq("clerk_id", userId).single();
  const userUuid = userRow?.id;

  const { data: enrollments } = userUuid
    ? await (supabase as any)
        .from("enrollments")
        .select(`*, courses(*)`)
        .eq("user_id", userUuid)
        .eq("status", "ativo")
        .order("updated_at", { ascending: false })
    : { data: [] };

  const list = enrollments ?? [];

  const inProgress = list.filter((e: any) => e.progresso > 0 && e.progresso < 100);
  const notStarted = list.filter((e: any) => e.progresso === 0);
  const completed = list.filter((e: any) => e.progresso === 100);

  return (
    <div className="animate-fade-in">
      <Header
        title="Meus Cursos"
        subtitle={`${list.length} curso${list.length !== 1 ? "s" : ""} inscrito${list.length !== 1 ? "s" : ""}`}
        actions={
          <Link href="/cursos">
            <Button variant="outline" size="sm" className="gap-2">
              <Plus size={15} />
              Explorar cursos
            </Button>
          </Link>
        }
      />

      <div className="p-4 sm:p-6">
        {list.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center rounded-2xl bg-surface border border-border">
            <div className="mb-4"><BookOpen size={48} className="text-muted-light" /></div>
            <h2 className="text-xl font-bold text-foreground mb-2">Nenhum curso ainda</h2>
            <p className="text-muted-light mb-6">Explore o catálogo e comece sua jornada profissional</p>
            <Link href="/cursos">
              <Button className="gap-2">
                Ver catálogo de cursos <ChevronRight size={16} />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-10">
            {inProgress.length > 0 && (
              <section>
                <h2 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                  <Play size={16} className="text-amber-400" />
                  Em andamento ({inProgress.length})
                </h2>
                <CourseGrid courses={inProgress} />
              </section>
            )}

            {notStarted.length > 0 && (
              <section>
                <h2 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                  <BookOpen size={16} className="text-blue-600" />
                  Não iniciados ({notStarted.length})
                </h2>
                <CourseGrid courses={notStarted} />
              </section>
            )}

            {completed.length > 0 && (
              <section>
                <h2 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                  <Trophy size={16} className="text-amber-500" />
                  Concluídos ({completed.length})
                </h2>
                <CourseGrid courses={completed} showCertificate />
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function CourseGrid({ courses, showCertificate = false }: { courses: any[]; showCertificate?: boolean }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {courses.map((enrollment: any) => {
        const course = enrollment.courses;
        if (!course) return null;

        return (
          <div key={enrollment.id} className="rounded-2xl bg-surface border border-border overflow-hidden hover:border-amber-500/30 hover:shadow-md transition-all">
            <div className="relative h-36 bg-gradient-to-br from-surface-2 to-surface-3 flex items-center justify-center text-5xl overflow-hidden">
              {course.thumbnail_url ? (
                <Image src={course.thumbnail_url} alt={course.titulo} fill className="object-cover" />
              ) : (
                <CategoryIcon category={course.categoria} size={40} />
              )}
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant={course.nivel as any}>{getLevelLabel(course.nivel)}</Badge>
              </div>
              <h3 className="font-bold text-foreground leading-tight mb-3 line-clamp-2">{course.titulo}</h3>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-muted-light mb-1.5">
                  <span>Progresso</span>
                  <span>{enrollment.progresso}%</span>
                </div>
                <Progress value={enrollment.progresso} className="h-1.5" />
              </div>

              <Link href={`/dashboard/cursos/${course.slug}`} className="block">
                <Button variant={enrollment.progresso === 100 ? "secondary" : "default"} size="sm" className="w-full gap-1.5">
                  {enrollment.progresso === 0 ? (
                    <><Play size={14} /> Começar</>
                  ) : enrollment.progresso === 100 ? (
                    <><Trophy size={14} /> Ver curso</>
                  ) : (
                    <><Play size={14} /> Continuar</>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
