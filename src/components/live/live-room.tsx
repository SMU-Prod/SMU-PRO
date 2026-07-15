"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, PanelRightClose, PanelRightOpen } from "lucide-react";
import { cn } from "@/lib/utils";
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
 *
 * Chat recolhível — mesmo idioma do painel "Conteúdo do Curso" da aula
 * (lesson-player.tsx): aba âmbar fixa na borda direita reabre no desktop;
 * no celular o chat some e o player ocupa a tela toda, com um botão na
 * barra de título (a aba flutuante é `hidden lg:flex`, não apareceria lá).
 * Aberto por padrão — é a razão da sala existir.
 */
export function LiveRoom({ event, chatSlot }: { event: LiveEvent; chatSlot: ReactNode }) {
  const t = useT();
  const aoVivo = event.status === "ao_vivo";
  const [chatOpen, setChatOpen] = useState(true);
  useEffect(() => {
    try {
      const v = localStorage.getItem("smu:liveChatOpen");
      if (v !== null) setChatOpen(v === "1");
    } catch { /* localStorage indisponível */ }
  }, []);
  const toggleChat = useCallback(() => {
    setChatOpen((prev) => {
      const next = !prev;
      try { localStorage.setItem("smu:liveChatOpen", next ? "1" : "0"); } catch { /* noop */ }
      return next;
    });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-[100dvh] bg-background">
      {aoVivo && <AttendanceHeartbeat liveEventId={event.id} />}
      {/* Com o chat recolhido a coluna toma a tela inteira, mas o vídeo NÃO cresce:
          em retrato quem limita é a largura, não a altura (390px de tela = 219px de
          altura em 16:9). Sem centralizar, o player fica colado no topo com metade
          da tela preta embaixo, parecendo quebrado. Vídeo maior no celular se
          resolve girando para paisagem / tela cheia, não com layout. */}
      <div
        className={cn(
          "flex flex-col w-full",
          chatOpen ? "shrink-0 lg:w-[65%]" : "flex-1 justify-center lg:justify-start lg:w-full"
        )}
      >
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
            <Link
              href="/ao-vivo"
              aria-label={t("Voltar para a agenda")}
              className="-ml-2 flex size-11 shrink-0 items-center justify-center rounded-lg text-muted hover:text-foreground hover:bg-hover transition-colors"
            >
              <ArrowLeft size={20} />
            </Link>
            {aoVivo && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/15 px-2 py-0.5 text-xs font-semibold text-red-500">
                <span className="size-1.5 rounded-full bg-red-500 animate-pulse" />
                {t("AO VIVO")}
              </span>
            )}
            <h1 className="min-w-0 flex-1 text-base sm:text-lg font-bold text-foreground truncate">{event.titulo}</h1>
            {/* Recolher/mostrar o chat — funciona nos dois tamanhos (no desktop
                existe também a aba flutuante abaixo, esta cobre o celular). */}
            <button
              onClick={toggleChat}
              className="flex size-11 shrink-0 items-center justify-center rounded-lg text-muted hover:text-foreground hover:bg-hover transition-colors"
              aria-label={chatOpen ? t("Ocultar chat") : t("Mostrar chat")}
              title={chatOpen ? t("Ocultar chat") : t("Mostrar chat")}
            >
              {chatOpen ? <PanelRightClose size={20} /> : <PanelRightOpen size={20} />}
            </button>
          </div>
          {event.descricao && (
            <p className="mt-1 text-sm text-muted line-clamp-2 hidden sm:block">{event.descricao}</p>
          )}
        </div>
      </div>

      {/* Chat: abaixo do player no celular, coluna à direita no desktop.
          min-h-0 é obrigatório — sem isso o filho que rola estoura o flex.
          Recolhido: some por completo (hidden) nos dois tamanhos — a aba
          flutuante (desktop) ou o botão da barra de título (ambos) reabre. */}
      <div
        className={cn(
          "flex-1 min-h-0 lg:w-[35%] lg:border-l border-border bg-surface flex-col",
          chatOpen ? "flex" : "hidden"
        )}
      >
        {chatSlot}
      </div>

      {/* Aba flutuante na borda direita para REABRIR o chat quando recolhido —
          mesmo idioma do lesson-player: fica exatamente onde o painel estava,
          impossível de não ver. Desktop only (no celular o botão é na barra de título). */}
      {!chatOpen && (
        <button
          onClick={toggleChat}
          className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-2 rounded-l-xl bg-amber-500 text-black shadow-lg hover:bg-amber-400 hover:pr-3 px-2 py-3 transition-all"
          aria-label={t("Mostrar chat")}
          title={t("Mostrar chat")}
        >
          <PanelRightOpen size={18} />
          <span className="text-[11px] font-semibold tracking-wide" style={{ writingMode: "vertical-rl" }}>
            {t("Chat")}
          </span>
        </button>
      )}
    </div>
  );
}
