"use server";

import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { sendCourseCompletionEmail, sendCertificateEmail } from "@/lib/email";
import { createNotification } from "@/lib/actions/notifications";
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

  // ── NR per-lesson certificate: if course is NR, generate certificate for each completed lesson ──
  try {
    const { data: lessonData } = await (admin as any)
      .from("lessons")
      .select("id, titulo, duracao_min, tem_quiz, module_id, modules!inner(course_id, courses!inner(titulo, slug, categoria))")
      .eq("id", lessonId)
      .single();

    if (lessonData) {
      const courseTitulo = lessonData.modules?.courses?.titulo ?? "";
      const isNR = /NR[- ]?\d+/i.test(courseTitulo);

      if (isNR) {
        // Check if NR per-lesson certificate already exists (using lesson_id in metadata)
        const { data: existingNRCert } = await admin
          .from("certificates")
          .select("id")
          .eq("user_id", userUuid)
          .eq("course_id", lessonData.modules.course_id)
          .contains("metadata", { lesson_id: lessonId })
          .maybeSingle();

        if (!existingNRCert) {
          const { data: userRow } = await admin
            .from("users")
            .select("email, nome, projeto_cultural")
            .eq("clerk_id", userId)
            .single();

          if (userRow) {
            const { error: certErr } = await admin.from("certificates").insert({
              user_id: userUuid,
              course_id: lessonData.modules.course_id,
              nota_final: 100,
              carga_horaria: lessonData.duracao_min ?? 0,
              projeto_cultural: userRow.projeto_cultural ?? false,
              metadata: { lesson_id: lessonId, lesson_titulo: lessonData.titulo, tipo: "nr_aula" },
            });
            if (certErr && certErr.code !== "23505") {
              console.error("[NR Cert] Error:", certErr);
            } else if (!certErr) {
              await admin.from("activity_log").insert({
                user_id: userUuid,
                tipo: "certificate_issued" as any,
                descricao: `Certificado NR emitido: ${lessonData.titulo}`,
                metadata: { lesson_id: lessonId, course_id: lessonData.modules.course_id },
              });
            }
          }
        }
      }
    }
  } catch (e) {
    console.error("[NR per-lesson cert] Error:", e);
  }

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

        // Auto-generate certificate
        await autoGenerateCertificate(admin, userUuid, course.id, allLessonIds, userId).catch(
          (err) => console.error("[Certificate] Auto-generate failed:", err)
        );

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

        // In-app notification
        createNotification({
          userUuid,
          tipo: "certificate",
          titulo: `Parabéns! Você concluiu "${course.titulo}"`,
          mensagem: "Seu certificado já está disponível para download.",
          link: "/dashboard/certificados",
        }).catch((err) => console.error("[Notification] Erro:", err));
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

/**
 * Auto-generate certificate when a course is 100% complete.
 * Replicates the logic from /api/certificates/generate but runs server-side.
 */
async function autoGenerateCertificate(
  admin: ReturnType<typeof createAdminClient>,
  userUuid: string,
  courseId: string,
  allLessonIds: string[],
  clerkId: string,
) {
  // Check if certificate already exists
  const { data: existing } = await admin
    .from("certificates")
    .select("id")
    .eq("user_id", userUuid)
    .eq("course_id", courseId)
    .single();

  if (existing) return; // Already has certificate

  // Get course details
  const { data: course } = await admin
    .from("courses")
    .select("titulo, carga_horaria")
    .eq("id", courseId)
    .single();

  // Get user details
  const { data: userRow } = await admin
    .from("users")
    .select("email, nome, projeto_cultural")
    .eq("clerk_id", clerkId)
    .single();

  if (!userRow || !course) return;

  // Calculate average quiz grade for this course
  const { data: lessons } = await admin
    .from("lessons")
    .select("id, tem_quiz")
    .in("id", allLessonIds);

  const quizLessonIds = (lessons ?? []).filter((l) => l.tem_quiz).map((l) => l.id);
  let notaMedia = 100;

  if (quizLessonIds.length > 0) {
    const { data: quizzes } = await admin
      .from("quizzes")
      .select("id")
      .in("lesson_id", quizLessonIds);

    if (quizzes?.length) {
      const { data: attempts } = await admin
        .from("quiz_attempts")
        .select("nota")
        .eq("user_id", userUuid)
        .eq("aprovado", true)
        .in("quiz_id", quizzes.map((q) => q.id));

      if (attempts?.length) {
        notaMedia = Math.round(
          attempts.reduce((acc, b) => acc + b.nota, 0) / attempts.length
        );
      }
    }
  }

  // Create certificate
  const { data: cert, error } = await admin
    .from("certificates")
    .insert({
      user_id: userUuid,
      course_id: courseId,
      nota_final: notaMedia,
      carga_horaria: course.carga_horaria,
      projeto_cultural: userRow.projeto_cultural ?? false,
    })
    .select()
    .single();

  if (error) {
    // ON CONFLICT = already exists
    if (error.code === "23505") return;
    throw error;
  }

  // Log activity
  await admin.from("activity_log").insert({
    user_id: userUuid,
    tipo: "certificate_issued" as any,
    descricao: `Certificado emitido automaticamente para ${course.titulo}`,
    metadata: { certificate_id: cert.id, course_id: courseId },
  });

  // Send certificate email
  if (userRow.email && cert) {
    sendCertificateEmail({
      to: userRow.email,
      nome: userRow.nome,
      courseTitulo: course.titulo,
      notaFinal: cert.nota_final,
      cargaHoraria: cert.carga_horaria,
      codigoVerificacao: cert.codigo_verificacao,
    }).catch((err) => console.error("[Email] Erro ao enviar certificado:", err));
  }
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
