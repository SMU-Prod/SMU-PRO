"use server";

import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { createNotification } from "@/lib/notifications/dispatch";
import { generateNRCertForLesson } from "@/lib/actions/progress";
import { hasCourseAccessByLesson } from "@/lib/actions/access";
import { computeQuizScore, type ScoringQuestion, type QuizScore } from "@/lib/quiz-scoring";

/**
 * Registra uma tentativa de quiz.
 *
 * SEGURANÇA: a nota e o "aprovado" são recalculados AQUI, no servidor, a partir
 * do gabarito no banco — os valores nunca vêm do cliente. Também validamos o
 * acesso ao curso e o limite de tentativas antes de gravar. Isso impede que um
 * aluno forje aprovação (e, por consequência, certificados).
 *
 * @returns nota/aprovado autoritativos e o gabarito (para exibição pós-envio).
 */
export async function submitQuizAttempt(
  quizId: string,
  respostas: Record<string, string>,
): Promise<QuizScore> {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");

  const supabase = createAdminClient();
  const { data: userRow } = await supabase.from("users").select("id, role").eq("clerk_id", userId).single();
  if (!userRow) throw new Error("Usuário não encontrado");

  // Carrega o quiz com gabarito, config de aprovação/tentativas e dados da aula
  const { data: quiz } = await (supabase as any)
    .from("quizzes")
    .select(
      `id, lesson_id, nivel_minimo_aprovacao, tentativas_permitidas,
       quiz_questions(id, pontos, quiz_options(id, correta)),
       lessons(titulo, duracao_min, module_id, modules!inner(course_id, courses!inner(titulo)))`,
    )
    .eq("id", quizId)
    .single();
  if (!quiz) throw new Error("Quiz não encontrado");

  // Verifica acesso ao curso (matrícula ativa / admin / curso free)
  const canAccess = await hasCourseAccessByLesson(supabase, userRow.id, userRow.role, quiz.lesson_id);
  if (!canAccess) throw new Error("Acesso negado: você não está matriculado neste curso");

  // Limite de tentativas (autoritativo no servidor)
  const { count: attemptCount } = await supabase
    .from("quiz_attempts")
    .select("id", { count: "exact", head: true })
    .eq("user_id", userRow.id)
    .eq("quiz_id", quizId);
  const tentativasPermitidas = quiz.tentativas_permitidas ?? 1;
  if ((attemptCount ?? 0) >= tentativasPermitidas) {
    throw new Error("Tentativas esgotadas");
  }

  // Recalcula a nota a partir do gabarito real
  const questions = (quiz.quiz_questions ?? []) as ScoringQuestion[];
  const { nota, aprovado, gabarito } = computeQuizScore(
    questions,
    respostas,
    quiz.nivel_minimo_aprovacao ?? 0,
  );

  // Insert atômico: a função serializa por (user, quiz) e reconta o limite dentro
  // da transação — fecha a race do count-then-insert (o check acima é só feedback).
  const { error } = await (supabase as any).rpc("insert_quiz_attempt_guarded", {
    p_user_id: userRow.id,
    p_quiz_id: quizId,
    p_nota: nota,
    p_aprovado: aprovado,
    p_respostas: respostas,
    p_max_tentativas: tentativasPermitidas,
  });
  if (error) {
    if (error.message?.includes("Tentativas esgotadas")) throw new Error("Tentativas esgotadas");
    throw new Error(error.message);
  }

  // Notificação de resultado
  const quizTitle = (quiz as any).lessons?.titulo ?? "Quiz";
  if (aprovado) {
    createNotification({
      userUuid: userRow.id,
      tipo: "quiz_result",
      titulo: `Aprovado no quiz: ${quizTitle}`,
      mensagem: `Você acertou ${nota}% das questões. Parabéns!`,
    }).catch((err) => console.error("[Quiz Passed Notification Error]", err));

    // ── Certificado NR por aula: gera quando o quiz é aprovado E a aula já está concluída ──
    try {
      const lessonId = quiz.lesson_id;
      const lessonInfo = (quiz as any).lessons;
      const courseInfo = lessonInfo?.modules;
      const courseTitulo = courseInfo?.courses?.titulo ?? "";
      const isNR = /\bNR\b/i.test(courseTitulo) || /norma.{0,5}regulament/i.test(courseTitulo);

      if (isNR && lessonId && courseInfo?.course_id) {
        // Só gera se a aula já estiver marcada como concluída
        const { data: progressRow } = await supabase
          .from("progress")
          .select("concluido")
          .eq("user_id", userRow.id)
          .eq("lesson_id", lessonId)
          .eq("concluido", true)
          .maybeSingle();

        if (progressRow) {
          await generateNRCertForLesson(
            supabase,
            userRow.id,
            courseInfo.course_id,
            lessonId,
            { titulo: lessonInfo.titulo, duracao_min: lessonInfo.duracao_min },
            courseTitulo,
            userId,
          );
        }
      }
    } catch (e) {
      console.error("[Quiz → NR cert] Error:", e);
    }
  } else {
    createNotification({
      userUuid: userRow.id,
      tipo: "quiz_result",
      titulo: `Tente novamente: ${quizTitle}`,
      mensagem: `Você acertou ${nota}%. Revise o conteúdo e tente novamente!`,
    }).catch((err) => console.error("[Quiz Failed Notification Error]", err));
  }

  return { nota, aprovado, gabarito };
}
