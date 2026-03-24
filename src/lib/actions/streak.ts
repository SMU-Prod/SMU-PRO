"use server";

import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";

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

  // Group by date and find consecutive days
  const dates = new Set<string>();

  for (const activity of activities) {
    const date = new Date(activity.created_at).toISOString().split("T")[0];
    dates.add(date);
  }

  // Sort dates in descending order
  const sortedDates = Array.from(dates).sort().reverse();

  // Count consecutive days from today backwards
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let streak = 0;
  let currentDate = new Date(today);

  for (const dateStr of sortedDates) {
    const checkDate = new Date(dateStr);
    checkDate.setHours(0, 0, 0, 0);

    const timeDiff = currentDate.getTime() - checkDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // If the date is today or yesterday (allowing for timezone), count it
    if (daysDiff === 0 || daysDiff === 1) {
      streak++;
      currentDate = new Date(checkDate);
      currentDate.setDate(currentDate.getDate() - 1);
    } else if (daysDiff > 1) {
      // Gap found, break the streak
      break;
    }
  }

  return streak;
}
