/**
 * Regra de elegibilidade e nota do certificado de curso.
 *
 * Certificado NR tem validade legal: NÃO pode ser emitido se o aluno não passou
 * em TODOS os quizzes exigidos pelo curso. O bug anterior deixava `notaMedia=100`
 * como default e emitia mesmo sem nenhuma tentativa aprovada quando um quiz era
 * adicionado depois que as aulas já estavam concluídas.
 *
 * Pura e sem I/O — testável. Espelha o trigger on_lesson_completed (v_all_quizzes_passed).
 */
export function computeCertificateEligibility(
  requiredQuizIds: string[],
  approvedAttempts: { quiz_id: string; nota: number }[],
): { eligible: boolean; notaMedia: number } {
  // Sem quiz exigido → elegível, nota cheia (curso sem avaliação).
  if (requiredQuizIds.length === 0) return { eligible: true, notaMedia: 100 };

  // Melhor nota aprovada por quiz.
  const melhorNota = new Map<string, number>();
  for (const a of approvedAttempts) {
    const atual = melhorNota.get(a.quiz_id);
    if (atual === undefined || a.nota > atual) melhorNota.set(a.quiz_id, a.nota);
  }

  // Exige aprovação em CADA quiz do curso.
  const todosAprovados = requiredQuizIds.every((id) => melhorNota.has(id));
  if (!todosAprovados) return { eligible: false, notaMedia: 0 };

  const notas = requiredQuizIds.map((id) => melhorNota.get(id)!);
  const notaMedia = Math.round(notas.reduce((a, b) => a + b, 0) / notas.length);
  return { eligible: true, notaMedia };
}
