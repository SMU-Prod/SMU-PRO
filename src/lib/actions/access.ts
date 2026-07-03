import type { SupabaseClient } from "@supabase/supabase-js";

/**
 * Verifica se o usuário tem acesso ao conteúdo do curso ao qual uma aula pertence.
 *
 * Regra de acesso (mesma usada em quiz/progresso/IA):
 *   - Admin sempre tem acesso;
 *   - Cursos do tipo "free" são liberados;
 *   - Demais exigem matrícula com status "ativo".
 *
 * Usado para fechar brechas onde qualquer usuário autenticado conseguia
 * marcar progresso, submeter quiz ou consumir IA de aulas de cursos em que
 * não está matriculado (o que permitia forjar certificados e gerar custo).
 *
 * Recebe um client admin (service_role) já criado pelo caller.
 */
export async function hasCourseAccessByLesson(
  supabase: SupabaseClient,
  userUuid: string,
  role: string | null | undefined,
  lessonId: string,
): Promise<boolean> {
  if (role === "admin") return true;

  const { data: lesson } = await (supabase as any)
    .from("lessons")
    .select("modules!inner(course_id)")
    .eq("id", lessonId)
    .single();

  const courseId = lesson?.modules?.course_id as string | undefined;
  if (!courseId) return false;

  const { data: course } = await supabase
    .from("courses")
    .select("tipo")
    .eq("id", courseId)
    .single();

  if ((course as any)?.tipo === "free") return true;

  const { data: enrollment } = await supabase
    .from("enrollments")
    .select("id")
    .eq("user_id", userUuid)
    .eq("course_id", courseId)
    .eq("status", "ativo")
    .maybeSingle();

  return !!enrollment;
}
