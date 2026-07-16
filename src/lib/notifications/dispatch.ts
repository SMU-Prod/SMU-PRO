import { createAdminClient } from "@/lib/supabase/server";
import type { NotificationType, NotificationPreferences } from "@/types/database";

/**
 * Dispatchers de notificação — chamados por server actions, rotas de API e webhooks
 * (código servidor confiável), NUNCA pelo cliente.
 *
 * Ficam FORA de um arquivo `"use server"` de propósito: lá, todo export vira um
 * endpoint HTTP (Next-Action) e qualquer um que descubra o id poderia injetar
 * notificações em nome do sistema. Como módulo interno, continuam chamáveis pelo
 * servidor sem expor superfície pública.
 */

const INAPP_PREF_MAP: Partial<Record<NotificationType, keyof NotificationPreferences>> = {
  course_update: "inapp_course_updates",
  certificate: "inapp_certificates",
  quiz_result: "inapp_quiz_results",
  payment: "inapp_payments",
  system: "inapp_system",
};

export async function createNotification(params: {
  userUuid: string;
  tipo: NotificationType;
  titulo: string;
  mensagem?: string;
  link?: string;
}): Promise<void> {
  const supabase = createAdminClient();

  const prefKey = INAPP_PREF_MAP[params.tipo];
  if (prefKey) {
    const { data: prefs } = await supabase
      .from("notification_preferences")
      .select(prefKey)
      .eq("user_id", params.userUuid)
      .single();

    if (prefs && (prefs as any)[prefKey] === false) {
      return; // User opted out
    }
  }

  await supabase.from("notifications").insert({
    user_id: params.userUuid,
    tipo: params.tipo,
    titulo: params.titulo,
    mensagem: params.mensagem ?? null,
    link: params.link ?? null,
  });
}

/** Notify all admins — for admin-only alerts */
export async function notifyAdmins(params: {
  titulo: string;
  mensagem?: string;
  link?: string;
}): Promise<void> {
  const supabase = createAdminClient();
  const { data: admins } = await supabase
    .from("users")
    .select("id")
    .in("role", ["admin", "content_manager"])
    .eq("ativo", true);

  if (!admins?.length) return;

  const inserts = admins.map((admin) => ({
    user_id: admin.id,
    tipo: "admin" as NotificationType,
    titulo: params.titulo,
    mensagem: params.mensagem ?? null,
    link: params.link ?? null,
  }));

  await supabase.from("notifications").insert(inserts);
}

/** Notify all enrolled users of a course — for course updates */
export async function notifyCourseStudents(params: {
  courseId: string;
  titulo: string;
  mensagem?: string;
  link?: string;
}): Promise<void> {
  const supabase = createAdminClient();
  const { data: enrollments } = await supabase
    .from("enrollments")
    .select("user_id")
    .eq("course_id", params.courseId)
    .eq("status", "ativo");

  if (!enrollments?.length) return;

  const uniqueUserIds = [...new Set(enrollments.map((e) => e.user_id))];

  const inserts = uniqueUserIds.map((userId) => ({
    user_id: userId,
    tipo: "course_update" as NotificationType,
    titulo: params.titulo,
    mensagem: params.mensagem ?? null,
    link: params.link ?? null,
  }));

  for (let i = 0; i < inserts.length; i += 100) {
    await supabase.from("notifications").insert(inserts.slice(i, i + 100));
  }
}
