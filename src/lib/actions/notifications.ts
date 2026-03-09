"use server";

import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import type { Notification, NotificationType, NotificationPreferences, NotificationPreferencesUpdate } from "@/types/database";

// ── Helpers ─────────────────────────────────────────────────

async function resolveUserUUID(clerkId: string): Promise<string | null> {
  const supabase = createAdminClient();
  const { data } = await supabase.from("users").select("id").eq("clerk_id", clerkId).single();
  return data?.id ?? null;
}

async function getAuthUserUUID(): Promise<string | null> {
  const { userId } = await auth();
  if (!userId) return null;
  return resolveUserUUID(userId);
}

// ── Preference check map ────────────────────────────────────

const INAPP_PREF_MAP: Partial<Record<NotificationType, keyof NotificationPreferences>> = {
  course_update: "inapp_course_updates",
  certificate: "inapp_certificates",
  quiz_result: "inapp_quiz_results",
  payment: "inapp_payments",
  system: "inapp_system",
};

// ── Read operations (authenticated user) ────────────────────

export async function getNotifications(limit = 30): Promise<Notification[]> {
  const userUuid = await getAuthUserUUID();
  if (!userUuid) return [];

  const supabase = createAdminClient();
  const { data } = await supabase
    .from("notifications")
    .select("*")
    .eq("user_id", userUuid)
    .order("created_at", { ascending: false })
    .limit(limit);

  return (data as Notification[]) ?? [];
}

export async function getUnreadCount(): Promise<number> {
  const userUuid = await getAuthUserUUID();
  if (!userUuid) return 0;

  const supabase = createAdminClient();
  const { count } = await supabase
    .from("notifications")
    .select("*", { count: "exact", head: true })
    .eq("user_id", userUuid)
    .eq("lida", false);

  return count ?? 0;
}

export async function markAsRead(notificationId: string): Promise<void> {
  const userUuid = await getAuthUserUUID();
  if (!userUuid) return;

  const supabase = createAdminClient();
  await supabase
    .from("notifications")
    .update({ lida: true })
    .eq("id", notificationId)
    .eq("user_id", userUuid);
}

export async function markAllAsRead(): Promise<void> {
  const userUuid = await getAuthUserUUID();
  if (!userUuid) return;

  const supabase = createAdminClient();
  await supabase
    .from("notifications")
    .update({ lida: true })
    .eq("user_id", userUuid)
    .eq("lida", false);
}

export async function deleteNotification(notificationId: string): Promise<void> {
  const userUuid = await getAuthUserUUID();
  if (!userUuid) return;

  const supabase = createAdminClient();
  await supabase
    .from("notifications")
    .delete()
    .eq("id", notificationId)
    .eq("user_id", userUuid);
}

// ── Preferences ─────────────────────────────────────────────

export async function getNotificationPreferences(): Promise<NotificationPreferences | null> {
  const userUuid = await getAuthUserUUID();
  if (!userUuid) return null;

  const supabase = createAdminClient();
  const { data } = await supabase
    .from("notification_preferences")
    .select("*")
    .eq("user_id", userUuid)
    .single();

  if (data) return data as NotificationPreferences;

  // Create defaults if not exists
  const { data: created } = await supabase
    .from("notification_preferences")
    .insert({ user_id: userUuid })
    .select()
    .single();

  return (created as NotificationPreferences) ?? null;
}

export async function updateNotificationPreferences(prefs: NotificationPreferencesUpdate): Promise<void> {
  const userUuid = await getAuthUserUUID();
  if (!userUuid) return;

  const supabase = createAdminClient();
  const { data: existing } = await supabase
    .from("notification_preferences")
    .select("id")
    .eq("user_id", userUuid)
    .single();

  if (existing) {
    await supabase
      .from("notification_preferences")
      .update({ ...prefs, updated_at: new Date().toISOString() })
      .eq("user_id", userUuid);
  } else {
    await supabase
      .from("notification_preferences")
      .insert({ user_id: userUuid, ...prefs });
  }
}

// ── Central Notification Dispatcher ─────────────────────────
// Called from server actions, API routes, and webhooks

export async function createNotification(params: {
  userUuid: string;
  tipo: NotificationType;
  titulo: string;
  mensagem?: string;
  link?: string;
}): Promise<void> {
  const supabase = createAdminClient();

  // Check user preferences (skip for welcome/admin — always deliver)
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

  // Insert in batches of 100
  for (let i = 0; i < inserts.length; i += 100) {
    await supabase.from("notifications").insert(inserts.slice(i, i + 100));
  }
}
