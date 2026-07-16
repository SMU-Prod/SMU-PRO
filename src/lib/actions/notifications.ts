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

// Os dispatchers (createNotification/notifyAdmins/notifyCourseStudents) foram
// movidos para @/lib/notifications/dispatch (módulo interno sem "use server"),
// para não virarem endpoints HTTP. Este arquivo mantém só operações do usuário.

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

