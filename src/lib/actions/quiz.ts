"use server";

import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { createNotification } from "@/lib/actions/notifications";

export async function submitQuizAttempt(
  quizId: string,
  nota: number,
  aprovado: boolean,
  respostas: Record<string, string>
) {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");

  const supabase = createAdminClient();
  const { data: userRow } = await supabase.from("users").select("id, role").eq("clerk_id", userId).single();
  if (!userRow) throw new Error("Usuário não encontrado");

  // Validar nota
  if (nota < 0 || nota > 100) throw new Error("Nota inválida");

  // Verificar se o usuário tem acesso ao curso do quiz (enrollment ativo)
  const { data: quiz } = await supabase
    .from("quizzes")
    .select("lesson_id, lessons(titulo, module_id, modules(course_id))")
    .eq("id", quizId)
    .single();
  if (!quiz) throw new Error("Quiz não encontrado");

  const courseId = (quiz as any).lessons?.modules?.course_id;
  if (courseId) {
    const { data: enrollment } = await supabase
      .from("enrollments")
      .select("id")
      .eq("user_id", userRow.id)
      .eq("course_id", courseId)
      .eq("status", "ativo")
      .maybeSingle();

    // Admin tem acesso total; pleno precisa de enrollment manual; cursos free são liberados
    if (!enrollment) {
      const isAdmin = userRow.role === "admin";
      if (!isAdmin) {
        const { data: course } = await supabase
          .from("courses")
          .select("tipo")
          .eq("id", courseId)
          .single();
        if (course?.tipo !== "free") {
          throw new Error("Acesso negado: você não está matriculado neste curso");
        }
      }
    }
  }

  const { error } = await supabase.from("quiz_attempts").insert({
    user_id: userRow.id,
    quiz_id: quizId,
    nota,
    aprovado,
    respostas,
  });

  if (error) throw new Error(error.message);

  // Quiz result notification
  const quizTitle = (quiz as any).lessons?.titulo ?? "Quiz";
  if (aprovado) {
    createNotification({
      userUuid: userRow.id,
      tipo: "quiz_result",
      titulo: `Aprovado no quiz: ${quizTitle}`,
      mensagem: `Você acertou ${nota}% das questões. Parabéns!`,
    }).catch(() => {});
  } else {
    createNotification({
      userUuid: userRow.id,
      tipo: "quiz_result",
      titulo: `Tente novamente: ${quizTitle}`,
      mensagem: `Você acertou ${nota}%. Revise o conteúdo e tente novamente!`,
    }).catch(() => {});
  }
}
