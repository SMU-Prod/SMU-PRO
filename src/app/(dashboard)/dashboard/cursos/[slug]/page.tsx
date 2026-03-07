import { auth } from "@clerk/nextjs/server";
import { redirect, notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/server";

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
    .select("id, modules(id, ordem, lessons(id, ordem))")
    .eq("slug", slug)
    .single();

  if (!course) notFound();

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

  redirect(`/dashboard/cursos/${slug}/aulas/${targetLessonId}`);
}
