"use server";

import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { sendCourseCompletionEmail } from "@/lib/email";
import { revalidatePath } from "next/cache";

async function resolveUserUUID(clerkId: string): Promise<string | null> {
  const supabase = createAdminClient();
  const { data } = await supabase.from("users").select("id").eq("clerk_id", clerkId).single();
  return data?.id ?? null;
}

export async function markLessonComplete(lessonId: string, courseSlug: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");

  const admin = createAdminClient();
  const userUuid = await resolveUserUUID(userId);
  if (!userUuid) throw new Error("Usuário não encontrado");

  const { error } = await admin.from("progress").upsert(
    {
      user_id: userUuid,
      lesson_id: lessonId,
      concluido: true,
      completed_at: new Date().toISOString(),
    },
    { onConflict: "user_id,lesson_id" }
  );

  if (error) throw error;

  // Check if course is now 100% complete — fire completion email once
  try {
    const { data: course } = await (admin as any)
      .from("courses")
      .select(`id, titulo, carga_horaria, modules(lessons(id))`)
      .eq("slug", courseSlug)
      .single();

    if (course) {
      const allLessonIds: string[] = (course.modules ?? []).flatMap((m: any) =>
        (m.lessons ?? []).map((l: any) => l.id)
      );
      const { data: done } = await admin
        .from("progress")
        .select("lesson_id")
        .eq("user_id", userUuid)
        .eq("concluido", true)
        .in("lesson_id", allLessonIds);

      const doneIds = new Set((done ?? []).map((p) => p.lesson_id));
      const isComplete = allLessonIds.length > 0 && allLessonIds.every((id) => doneIds.has(id));

      if (isComplete) {
        // Update enrollment progress to 100
        await admin
          .from("enrollments")
          .update({ progresso: 100 })
          .eq("user_id", userUuid)
          .eq("course_id", course.id);

        // Send completion email (fire-and-forget)
        const { data: user } = await admin
          .from("users").select("email, nome").eq("clerk_id", userId).single();
        if (user?.email) {
          sendCourseCompletionEmail({
            to: user.email,
            nome: user.nome,
            courseTitulo: course.titulo,
            courseSlug,
          }).catch((err) => console.error("[Email] Erro ao enviar conclusão:", err));
        }
      }
    }
  } catch (e) {
    // Non-critical — don't fail the main action
    console.error("[markLessonComplete] Completion check failed:", e);
  }

  revalidatePath(`/cursos/${courseSlug}`);
}

export async function updateWatchTime(lessonId: string, seconds: number) {
  const { userId } = await auth();
  if (!userId) return;

  const admin = createAdminClient();
  const userUuid = await resolveUserUUID(userId);
  if (!userUuid) return;

  await admin.from("progress").upsert(
    { user_id: userUuid, lesson_id: lessonId, tempo_assistido: seconds },
    { onConflict: "user_id,lesson_id" }
  );
}

export async function getUserProgress(courseId: string) {
  const { userId } = await auth();
  if (!userId) return [];

  const admin = createAdminClient();
  const userUuid = await resolveUserUUID(userId);
  if (!userUuid) return [];

  // Busca apenas lessons do curso específico via join filter
  const { data: lessons } = await admin
    .from("lessons")
    .select("id, module_id, modules!inner(course_id)")
    .eq("modules.course_id", courseId);

  if (!lessons || lessons.length === 0) return [];

  const lessonIds = lessons.map((l) => l.id);

  const { data } = await admin
    .from("progress")
    .select("*")
    .eq("user_id", userUuid)
    .in("lesson_id", lessonIds);

  return data ?? [];
}
