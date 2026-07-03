"use client";

import { useEffect, useRef } from "react";
import { useClerk } from "@clerk/nextjs";

/**
 * Desloga automaticamente após um período sem atividade (padrão: 10 minutos).
 * Protege contra sessão esquecida aberta num computador compartilhado ou sem
 * supervisão — ao deslogar, o Clerk limpa o cookie de sessão (não fica em cache).
 *
 * Montado apenas nas áreas autenticadas (dashboard e admin).
 */
const DEFAULT_IDLE_MS = 10 * 60 * 1000; // 10 minutos

const ACTIVITY_EVENTS = [
  "mousemove",
  "mousedown",
  "keydown",
  "touchstart",
  "scroll",
  "visibilitychange",
];

export function IdleLogout({ timeoutMs = DEFAULT_IDLE_MS }: { timeoutMs?: number }) {
  const { signOut } = useClerk();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const reset = () => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        signOut({ redirectUrl: "/login?motivo=inatividade" });
      }, timeoutMs);
    };

    reset();
    const handler = () => reset();
    ACTIVITY_EVENTS.forEach((ev) =>
      window.addEventListener(ev, handler, { passive: true })
    );

    return () => {
      if (timer.current) clearTimeout(timer.current);
      ACTIVITY_EVENTS.forEach((ev) => window.removeEventListener(ev, handler));
    };
  }, [signOut, timeoutMs]);

  return null;
}
