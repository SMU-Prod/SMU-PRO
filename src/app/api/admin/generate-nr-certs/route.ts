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

  // Find all NR courses — match "NR" in title or "norma(s) regulament..."
  const { data: allCourses } = await supabase
    .from("courses")
    .select("id, titulo");

  const nrCourses = (allCourses ?? []).filter((c: any) =>
    /\bNR\b/i.test(c.titulo) || /norma.{0,5}regulament/i.test(c.titulo)
  );

  if (!nrCourses.length) return NextResponse.json({ generated: 0, message: "Nenhum curso NR encontrado" });

  let totalGenerated = 0;
  const errors: string[] = [];

  for (const course of nrCourses) {

    // Get all lessons for this NR course (including quiz info)
    const { data: modules } = await (supabase as any)
      .from("modules")
      .select("id, lessons(id, titulo, duracao_min, tem_quiz, quizzes(id))")
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

      // Get this user's passed quiz attempts to verify quiz completion
      const quizIds = allLessons
        .filter((l: any) => l.tem_quiz && l.quizzes?.length > 0)
        .flatMap((l: any) => l.quizzes.map((q: any) => q.id));

      let passedQuizIds = new Set<string>();
      if (quizIds.length > 0) {
        const { data: passedAttempts } = await supabase
          .from("quiz_attempts")
          .select("quiz_id")
          .eq("user_id", userUuid)
          .eq("aprovado", true)
          .in("quiz_id", quizIds);
        passedQuizIds = new Set((passedAttempts ?? []).map((a: any) => a.quiz_id));
      }

      // Build map of lesson_id → quiz passed
      const lessonQuizPassed = new Map<string, boolean>();
      for (const lesson of allLessons) {
        if (!lesson.tem_quiz || !lesson.quizzes?.length) {
          lessonQuizPassed.set(lesson.id, true); // No quiz = auto-passed
        } else {
          const quizPassed = lesson.quizzes.some((q: any) => passedQuizIds.has(q.id));
          lessonQuizPassed.set(lesson.id, quizPassed);
        }
      }

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
      // AND where the quiz (if any) has been passed
      for (const lesson of allLessons) {
        if (!completedIds.has(lesson.id)) continue;
        if (existingLessonIds.has(lesson.id)) continue;
        if (!lessonQuizPassed.get(lesson.id)) continue; // Quiz not passed yet

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

          if (insertErr) {
            if (insertErr.code !== "23505") {
              errors.push(`${userInfo?.nome}: ${lesson.titulo} - ${insertErr.message}`);
            }
            // 23505 = duplicate, skip silently (don't count as generated)
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
