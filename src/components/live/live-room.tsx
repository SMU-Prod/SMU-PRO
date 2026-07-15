"use client";

import type { ReactNode } from "react";
import { LivePlayer } from "./live-player";
import { AttendanceHeartbeat } from "./attendance-heartbeat";
import { useT } from "@/lib/i18n/ui";
import type { LiveEvent } from "@/types/database";

/**
 * Layout da sala.
 *
 * Celular / iPad retrato (<lg): player fixo no topo, chat ocupa o resto e rola.
 * iPad paisagem / desktop (>=lg): 65/35 lado a lado, igual à aula.
 *
 * `dvh` e não `vh`: no Safari do iOS o 100vh inclui a barra de endereço, e o
 * input do chat ficaria fora da tela. O globals.css usa 100vh globalmente —
 * não mexer lá, o risco não vale; resolver no escopo da sala.
 */
export function LiveRoom({ event, chatSlot }: { event: LiveEvent; chatSlot: ReactNode }) {
  const t = useT();
  const aoVivo = event.status === "ao_vivo";

  return (
    <div className="flex flex-col lg:flex-row h-[100dvh] bg-background">
      {aoVivo && <AttendanceHeartbeat liveEventId={event.id} />}
      <div className="flex flex-col lg:w-[65%] shrink-0">
        <div className="shrink-0">
          {aoVivo ? (
            <LivePlayer event={event} />
          ) : (
            <div className="w-full aspect-video bg-surface flex items-center justify-center">
              <p className="text-muted text-sm px-4 text-center">
                {event.status === "agendado"
                  ? t("A transmissão ainda não começou.")
                  : t("Esta transmissão já foi encerrada.")}
              </p>
            </div>
          )}
        </div>

        <div className="px-4 sm:px-6 py-3 border-b border-border">
          <div className="flex items-center gap-2">
            {aoVivo && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/15 px-2 py-0.5 text-xs font-semibold text-red-500">
                <span className="size-1.5 rounded-full bg-red-500 animate-pulse" />
                {t("AO VIVO")}
              </span>
            )}
            <h1 className="text-base sm:text-lg font-bold text-foreground truncate">{event.titulo}</h1>
          </div>
          {event.descricao && (
            <p className="mt-1 text-sm text-muted line-clamp-2 hidden sm:block">{event.descricao}</p>
          )}
        </div>
      </div>

      {/* Chat: abaixo do player no celular, coluna à direita no desktop.
          min-h-0 é obrigatório — sem isso o filho que rola estoura o flex. */}
      <div className="flex-1 min-h-0 lg:w-[35%] lg:border-l border-border bg-surface flex flex-col">
        {chatSlot}
      </div>
    </div>
  );
}
