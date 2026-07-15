"use server";

import { auth } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { createAdminClient } from "@/lib/supabase/server";
import { accumulateWatchTime } from "@/lib/live/rules";

/**
 * Heartbeat de presença. Chamado a cada 30s pelo cliente.
 *
 * Log exigido pela NR-01 Anexo II 4.7.1 (retenção mínima 2 anos).
 *
 * LIMITE CONHECIDO: com provider YouTube isto é client-side e falsificável —
 * o iframe não expõe identidade do espectador e a Analytics API do YouTube não
 * tem dimensão por espectador. Serve como métrica e log de acesso, NÃO como
 * prova de auditoria para certificação. Ver §8.3 da spec.
 */
export async function registrarPresenca(liveEventId: string): Promise<void> {
  const { userId } = await auth();
  if (!userId) return; // deslogado não gera log — não é erro

  const supabase = createAdminClient();
  const { data: userRow } = await supabase
    .from("users").select("id").eq("clerk_id", userId).single();
  const userUuid = userRow?.id;
  if (!userUuid) return;

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  const userAgent = h.get("user-agent") ?? null;
  const agora = new Date().toISOString();

  const { data: existente } = await supabase
    .from("live_attendance").select("id, duracao_segundos, last_seen_at")
    .eq("live_event_id", liveEventId).eq("user_id", userUuid).maybeSingle();

  if (!existente) {
    await (supabase as any).from("live_attendance").insert({
      live_event_id: liveEventId, user_id: userUuid,
      joined_at: agora, last_seen_at: agora, duracao_segundos: 0,
      ip, user_agent: userAgent,
    });
    return;
  }

  const duracao = accumulateWatchTime(
    { duracao_segundos: (existente as any).duracao_segundos, last_seen_at: (existente as any).last_seen_at },
    agora,
  );

  await (supabase as any)
    .from("live_attendance")
    .update({ last_seen_at: agora, duracao_segundos: duracao })
    .eq("id", (existente as any).id);
}
