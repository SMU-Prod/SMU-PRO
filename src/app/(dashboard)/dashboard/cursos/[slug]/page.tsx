import { auth } from "@clerk/nextjs/server";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { Radio, Play } from "lucide-react";
import { createAdminClient } from "@/lib/supabase/server";
import { getPortal, courseBelongsToPortal } from "@/lib/portal";
import { listLivesForCourse } from "@/lib/actions/lives";
import { getServerT } from "@/lib/i18n/server";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{ slug: string }>;
}

/**
 * /dashboard/cursos/[slug] — redireciona para a primeira aula do curso
 * ou para a última aula em progresso, se houver.
 */
export default async function CourseRedirectPage({ params }: Props) {
  const { slug } = await params;
  const { userId } = await auth();
  if (!userId) redirect("/login");

  const supabase = createAdminClient();
  const { data: userRow } = await supabase.from("users").select("id").eq("clerk_id", userId).single();
  const userUuid = userRow?.id;

  // Buscar course + módulos + aulas ordenados
  const { data: course } = await (supabase as any)
    .from("courses")
    .select("id, categorias, modules(id, ordem, lessons(id, ordem))")
    .eq("slug", slug)
    .single();

  if (!course) notFound();
  // Escolas independentes: curso da outra escola não abre neste domínio.
  if (!courseBelongsToPortal(course.categorias, await getPortal())) notFound();

  const modules = (course.modules ?? []).sort((a: any, b: any) => a.ordem - b.ordem);
  const allLessons = modules.flatMap((m: any) =>
    (m.lessons ?? []).sort((a: any, b: any) => a.ordem - b.ordem)
  );

  if (allLessons.length === 0) notFound();

  // Tentar encontrar a última aula em progresso
  const { data: progress } = userUuid
    ? await supabase
        .from("progress")
        .select("lesson_id, concluido, updated_at")
        .eq("user_id", userUuid)
        .in("lesson_id", allLessons.map((l: any) => l.id))
        .order("updated_at", { ascending: false })
    : { data: null };

  let targetLessonId: string;

  if (progress && progress.length > 0) {
    // Encontra a primeira aula ainda não concluída
    const completedIds = new Set(progress.filter((p: any) => p.concluido).map((p: any) => p.lesson_id));
    const nextLesson = allLessons.find((l: any) => !completedIds.has(l.id));
    targetLessonId = nextLesson?.id ?? allLessons[allLessons.length - 1].id;
  } else {
    targetLessonId = allLessons[0].id;
  }

  // course_id existia na live e nada lia — este é o vínculo virando tela.
  const lives = await listLivesForCourse(course.id);

  // Sem lives (a maioria dos cursos): comportamento inalterado, direto para a aula.
  if (lives.length === 0) {
    redirect(`/dashboard/cursos/${slug}/aulas/${targetLessonId}`);
  }

  const t = await getServerT();

  return (
    <div className="animate-fade-in p-4 sm:p-6 space-y-6">
      <section>
        <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <Radio size={16} className="text-amber-400" />
          {t("Ao vivo")}
        </h2>
        <Card>
          <CardContent className="p-0 divide-y divide-border">
            {lives.map((live) => (
              <Link
                key={live.id}
                href={`/ao-vivo/${live.slug}`}
                className="flex items-center gap-3 px-4 py-3 hover:bg-surface-2 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{live.titulo}</p>
                  <p className="text-xs text-muted-light mt-0.5">
                    {new Date(live.inicio_previsto).toLocaleString("pt-BR")}
                  </p>
                </div>
                {live.status === "ao_vivo" && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/15 px-2 py-0.5 text-xs font-semibold text-red-500 shrink-0">
                    <span className="size-1.5 rounded-full bg-red-500 animate-pulse" />
                    {t("AO VIVO")}
                  </span>
                )}
              </Link>
            ))}
          </CardContent>
        </Card>
      </section>

      <div className="flex justify-end">
        <Link href={`/dashboard/cursos/${slug}/aulas/${targetLessonId}`}>
          <Button size="lg" className="gap-2">
            <Play size={18} />
            {t("Continuar curso")}
          </Button>
        </Link>
      </div>
    </div>
  );
}
