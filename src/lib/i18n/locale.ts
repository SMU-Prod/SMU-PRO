"use client";

import { useSyncExternalStore } from "react";

export type Locale = "pt" | "en" | "es";

const KEY = "smu-locale";
const EVT = "smu-locale-change";

export function getLocale(): Locale {
  if (typeof window === "undefined") return "pt";
  const v = window.localStorage.getItem(KEY);
  return v === "en" || v === "es" ? v : "pt";
}

export function setLocale(l: Locale) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, l);
  window.dispatchEvent(new Event(EVT));
}

function subscribe(cb: () => void) {
  window.addEventListener(EVT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVT, cb);
    window.removeEventListener("storage", cb);
  };
}

/**
 * Idioma escolhido pelo aluno (piloto multilíngue). Sem Provider global:
 * guarda no localStorage e sincroniza entre componentes via evento.
 * SSR-safe: o snapshot do servidor é sempre "pt".
 */
export function useLocale(): Locale {
  return useSyncExternalStore(subscribe, getLocale, () => "pt");
}

export const LOCALES: { code: Locale; flag: string; label: string }[] = [
  { code: "pt", flag: "🇧🇷", label: "Português" },
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "es", flag: "🇪🇸", label: "Español" },
];
