/**
 * Cálculo AUTORITATIVO da nota do quiz — roda no servidor.
 *
 * A nota e o "aprovado" NUNCA devem ser calculados no cliente e enviados ao
 * servidor: um aluno poderia forjar nota=100/aprovado=true e emitir certificado
 * sem acertar as questões. Este módulo é a fonte da verdade e é chamado por
 * `submitQuizAttempt` a partir do gabarito real armazenado no banco.
 */

export interface ScoringOption {
  id: string;
  correta: boolean;
}

export interface ScoringQuestion {
  id: string;
  pontos: number;
  quiz_options: ScoringOption[];
}

export interface QuizScore {
  nota: number;
  aprovado: boolean;
  /** Mapa questão → id da opção correta, devolvido ao cliente só APÓS o envio. */
  gabarito: Record<string, string>;
}

/**
 * Recalcula a nota a partir das respostas do aluno e do gabarito do banco.
 *
 * @param questions   Questões com pontos e opções (incluindo a flag `correta`).
 * @param respostas   Mapa questão → id da opção escolhida pelo aluno.
 * @param nivelMinimoAprovacao  Percentual mínimo (0-100) para ser aprovado.
 */
export function computeQuizScore(
  questions: ScoringQuestion[],
  respostas: Record<string, string>,
  nivelMinimoAprovacao: number,
): QuizScore {
  let correct = 0;
  let totalPoints = 0;
  const gabarito: Record<string, string> = {};

  for (const q of questions) {
    const pontos = q.pontos ?? 0;
    totalPoints += pontos;
    const correctOption = q.quiz_options.find((o) => o.correta);
    if (correctOption) {
      gabarito[q.id] = correctOption.id;
      if (respostas[q.id] === correctOption.id) {
        correct += pontos;
      }
    }
  }

  const nota = totalPoints > 0 ? Math.round((correct / totalPoints) * 100) : 0;
  const aprovado = nota >= nivelMinimoAprovacao;
  return { nota, aprovado, gabarito };
}
