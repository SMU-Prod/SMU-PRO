"use server";

import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { computeStreak, toBrtDateString } from "@/lib/streak";

export async function getStudyStreak(): Promise<number> {
  const { userId } = await auth();
  if (!userId) return 0;

  const supabase = createAdminClient();

  // Get user's UUID from clerk ID
  const { data: userRow } = await supabase
    .from("users")
    .select("id")
    .eq("clerk_id", userId)
    .single();

  if (!userRow?.id) return 0;

  // Get all activity logs for this user, ordered by date DESC
  const { data: activities } = await supabase
    .from("activity_log")
    .select("created_at")
    .eq("user_id", userRow.id)
    .in("tipo", ["lesson_complete", "quiz_pass"])
    .order("created_at", { ascending: false });

  if (!activities || activities.length === 0) return 0;

  // Dias de atividade e "hoje" no fuso BR; a lógica de consecutividade é pura/testada.
  const activityDates = activities.map((a) => toBrtDateString(a.created_at));
  const today = toBrtDateString(new Date().toISOString());
  return computeStreak(activityDates, today);
}
