import intro from "./data/introducao-para-eventos.json";
import type { Locale } from "./locale";

/**
 * Traduções do PILOTO multilíngue (fase 1), embutidas no app.
 * Fase 2 migra para o banco (coluna jsonb `traducoes`) quando escalar
 * para todos os cursos/idiomas. Estrutura por curso:
 *   { en: { lessons: { <lessonId>: {titulo,descricao,conteudo_rico} }, quiz: { <questionId>: {pergunta, opcoes:{<optId>:texto}} } }, es: {...} }
 */
type LessonTr = { titulo?: string; descricao?: string; conteudo_rico?: string };
type QuizTr = Record<string, { pergunta?: string; explicacao?: string; opcoes?: Record<string, string> }>;

const PILOT: Record<string, any> = {
  "introducao-para-eventos": intro,
};

export function isPilotCourse(slug: string): boolean {
  return !!PILOT[slug];
}

export function getLessonTr(slug: string, lessonId: string, locale: Locale): LessonTr | null {
  if (locale === "pt") return null;
  const c = PILOT[slug];
  return c?.[locale]?.lessons?.[lessonId] ?? null;
}

export function getQuizTr(slug: string, locale: Locale): QuizTr | null {
  if (locale === "pt") return null;
  const c = PILOT[slug];
  return c?.[locale]?.quiz ?? null;
}
