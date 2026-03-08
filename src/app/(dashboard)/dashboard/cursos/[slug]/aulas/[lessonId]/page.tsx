import { auth } from "@clerk/nextjs/server";
import { redirect, notFound } from "next/navigation";
import { getCourseWithProgress } from "@/lib/actions/courses";
import { createAdminClient } from "@/lib/supabase/server";
import { LessonPlayer } from "@/components/lesson/lesson-player";

interface Props {
  params: Promise<{ slug: string; lessonId: string }>;
}

export default async function LessonPage({ params }: Props) {
  const { slug, lessonId } = await params;
  const { userId } = await auth();
  if (!userId) redirect("/login");

  try {
    const { course, enrollment, progressMap } = await getCourseWithProgress(slug);

    const supabase = createAdminClient();
    const { data: userRow } = await supabase.from("users").select("id").eq("clerk_id", userId).single();
    const userUuid = userRow?.id;

    const { data: lesson } = await (supabase as any)
      .from("lessons")
      .select(`*, quizzes(*)`)
      .eq("id", lessonId)
      .single();

    if (!lesson) notFound();

    // Gate de acesso ao vídeo no servidor: remove youtube_id do payload
    // para usuários sem matrícula (exceto aulas com preview_gratis)
    const hasAccess = !!enrollment || lesson.preview_gratis;
    const lessonData = hasAccess ? lesson : { ...lesson, youtube_id: null };

    const [quizAttemptsResult, notesResult, quizResult] = await Promise.all([
      userUuid
        ? supabase.from("quiz_attempts").select("*").eq("user_id", userUuid).order("created_at", { ascending: false })
        : Promise.resolve({ data: [] }),
      userUuid
        ? supabase.from("notes").select("*").eq("user_id", userUuid).eq("lesson_id", lessonId).order("created_at", { ascending: false })
        : Promise.resolve({ data: [] }),
      lessonData.tem_quiz
        ? (supabase as any).from("quizzes").select("*, quiz_questions(*, quiz_options(*))").eq("lesson_id", lessonId).single()
        : Promise.resolve({ data: null }),
    ]);
    const quizAttempts = quizAttemptsResult.data;
    const notes = notesResult.data;
    const quizData = quizResult.data;

    return (
      <LessonPlayer
        course={course}
        lesson={lessonData}
        enrollment={enrollment}
        progressMap={progressMap}
        quizAttempts={quizAttempts ?? []}
        quizData={quizData ?? null}
        notes={notes ?? []}
        userId={userId}
      />
    );
  } catch {
    notFound();
  }
}
