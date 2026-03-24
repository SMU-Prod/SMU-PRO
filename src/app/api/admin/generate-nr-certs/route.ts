import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

/**
 * POST /api/admin/generate-nr-certs
 *
 * Retroactively generates NR per-lesson certificates for all users
 * who completed NR lessons but didn't get a certificate (because
 * the feature didn't exist yet).
 *
 * Admin only. Call once after deploying the NR cert feature.
 */
export async function POST() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const supabase = createAdminClient();
  const { data: user } = await supabase.from("users").select("role").eq("clerk_id", userId).single();
  if (user?.role !== "admin") return NextResponse.json({ error: "Sem permissão" }, { status: 403 });

  // Find all NR courses
  const { data: nrCourses } = await supabase
    .from("courses")
    .select("id, titulo")
    .like("titulo", "%NR%");

  if (!nrCourses?.length) return NextResponse.json({ generated: 0, message: "Nenhum curso NR encontrado" });

  let totalGenerated = 0;
  const errors: string[] = [];

  for (const course of nrCourses) {
    if (!/NR[- ]?\d+/i.test(course.titulo)) continue;

    // Get all lessons for this NR course
    const { data: modules } = await (supabase as any)
      .from("modules")
      .select("id, lessons(id, titulo, duracao_min)")
      .eq("course_id", course.id);

    const allLessons = (modules ?? []).flatMap((m: any) => m.lessons ?? []);

    // Get all enrolled users with any progress
    const { data: enrollments } = await supabase
      .from("enrollments")
      .select("user_id, users(id, nome, email, projeto_cultural)")
      .eq("course_id", course.id)
      .eq("status", "ativo");

    for (const enrollment of enrollments ?? []) {
      const userUuid = enrollment.user_id;
      const userInfo = enrollment.users as any;

      // Get this user's completed lessons for this course
      const lessonIds = allLessons.map((l: any) => l.id);
      if (lessonIds.length === 0) continue;

      const { data: progress } = await supabase
        .from("progress")
        .select("lesson_id")
        .eq("user_id", userUuid)
        .eq("concluido", true)
        .in("lesson_id", lessonIds);

      const completedIds = new Set((progress ?? []).map((p: any) => p.lesson_id));

      // Get existing certificates for this user+course
      const { data: existingCerts } = await supabase
        .from("certificates")
        .select("id, metadata")
        .eq("user_id", userUuid)
        .eq("course_id", course.id);

      const existingLessonIds = new Set(
        (existingCerts ?? [])
          .filter((c: any) => c.metadata?.lesson_id)
          .map((c: any) => c.metadata.lesson_id)
      );

      // Generate certificate for each completed lesson that doesn't have one
      for (const lesson of allLessons) {
        if (!completedIds.has(lesson.id)) continue;
        if (existingLessonIds.has(lesson.id)) continue;

        try {
          const { error: insertErr } = await (supabase as any)
            .from("certificates")
            .insert({
              user_id: userUuid,
              course_id: course.id,
              nota_final: 100,
              carga_horaria: lesson.duracao_min ?? 0,
              projeto_cultural: userInfo?.projeto_cultural ?? false,
              metadata: { lesson_id: lesson.id, lesson_titulo: lesson.titulo, tipo: "nr_aula" },
            });

          if (insertErr && insertErr.code !== "23505") {
            errors.push(`${userInfo?.nome}: ${lesson.titulo} - ${insertErr.message}`);
          } else {
            totalGenerated++;
          }
        } catch (e: any) {
          errors.push(`${userInfo?.nome}: ${lesson.titulo} - ${e.message}`);
        }
      }
    }
  }

  return NextResponse.json({
    generated: totalGenerated,
    errors: errors.length,
    errorDetails: errors.slice(0, 10),
    message: `${totalGenerated} certificados NR gerados retroativamente${errors.length ? `. ${errors.length} erros.` : "."}`,
  });
}
