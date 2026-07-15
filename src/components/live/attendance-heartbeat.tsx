"use client";

import { useEffect } from "react";
import { registrarPresenca } from "@/lib/actions/live-attendance";

const INTERVALO_MS = 30_000;

/**
 * Dispara o heartbeat enquanto a aba está visível.
 *
 * Pausa quando a aba fica oculta: aluno com a live aberta em segundo plano por
 * uma hora não "assistiu" uma hora, e este número vai para log de auditoria.
 * O accumulateWatchTime descarta buracos > 90s, então pausar aqui e ele
 * descartar lá se reforçam.
 */
export function AttendanceHeartbeat({ liveEventId }: { liveEventId: string }) {
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const bater = () => {
      if (document.visibilityState === "visible") {
        registrarPresenca(liveEventId).catch((e) =>
          console.error("[AttendanceHeartbeat]", e),
        );
      }
    };

    bater();
    timer = setInterval(bater, INTERVALO_MS);
    document.addEventListener("visibilitychange", bater);

    return () => {
      if (timer) clearInterval(timer);
      document.removeEventListener("visibilitychange", bater);
    };
  }, [liveEventId]);

  return null;
}
