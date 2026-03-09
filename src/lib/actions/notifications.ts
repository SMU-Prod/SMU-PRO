"use server";

import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import type { Notification, NotificationType } from "@/types/database";

async function resolveUserUUID(clerkId: string): Promise<string | null> {
  const supabase = createAdminClient();
  const { data } = await supabase.from("users").select("id").eq("clerk_id", clerkId).single();
  return data?.id ?? null;
}

export async function getNotifications(limit = 20): Promise<Notification[]> {
  const { userId } = await auth();
  if (!userId) return [];

  const userUuid = await resolveUserUUID(userId);
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
  const { userId } = await auth();
  if (!userId) return 0;

  const userUuid = await resolveUserUUID(userId);
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
  const { userId } = await auth();
  if (!userId) return;

  const userUuid = await resolveUserUUID(userId);
  if (!userUuid) return;

  const supabase = createAdminClient();
  await supabase
    .from("notifications")
    .update({ lida: true })
    .eq("id", notificationId)
    .eq("user_id", userUuid);
}

export async function markAllAsRead(): Promise<void> {
  const { userId } = await auth();
  if (!userId) return;

  const userUuid = await resolveUserUUID(userId);
  if (!userUuid) return;

  const supabase = createAdminClient();
  await supabase
    .from("notifications")
    .update({ lida: true })
    .eq("user_id", userUuid)
    .eq("lida", false);
}

/** Create a notification for a user (called from other server actions/webhooks) */
export async function createNotification(params: {
  userUuid: string;
  tipo: NotificationType;
  titulo: string;
  mensagem?: string;
  link?: string;
}): Promise<void> {
  const supabase = createAdminClient();
  await supabase.from("notifications").insert({
    user_id: params.userUuid,
    tipo: params.tipo,
    titulo: params.titulo,
    mensagem: params.mensagem ?? null,
    link: params.link ?? null,
  });
}
