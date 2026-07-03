"use client";

import { createContext, useCallback, useContext, useEffect, useState, useSyncExternalStore } from "react";

export type Locale = "pt" | "en" | "es";

const KEY = "smu-locale";
const EVT = "smu-locale-change";

/** Lê o cookie smu-locale no cliente (fonte da verdade, compartilhada com os server components). */
function readCookie(): Locale | null {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(/(?:^|;\s*)smu-locale=(pt|en|es)/);
  return (m?.[1] as Locale) ?? null;
}

/**
 * Idioma efetivo no cliente. Prioriza o COOKIE (o mesmo que o servidor lê),
 * com o localStorage como reserva para estados legados.
 */
export function getLocale(): Locale {
  if (typeof window === "undefined") return "pt";
  const c = readCookie();
  if (c) return c;
  const v = window.localStorage.getItem(KEY);
  return v === "en" || v === "es" ? v : "pt";
}

/** Grava o idioma no localStorage + cookie (com domínio compartilhado apex↔www em produção). */
function writeLocale(l: Locale) {
  if (typeof window === "undefined") return;
  try { window.localStorage.setItem(KEY, l); } catch {}
  const base = `${KEY}=${l};path=/;max-age=31536000;samesite=lax`;
  document.cookie = base;
  // Compartilha o cookie entre smuproducoes.com e www.smuproducoes.com
  const host = window.location.hostname;
  if (host === "smuproducoes.com" || host.endsWith(".smuproducoes.com")) {
    document.cookie = `${base};domain=.smuproducoes.com`;
  }
}

function subscribe(cb: () => void) {
  window.addEventListener(EVT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVT, cb);
    window.removeEventListener("storage", cb);
  };
}

/** Muda o idioma (fora do Provider): grava e avisa os assinantes. */
export function setLocale(l: Locale) {
  if (typeof window === "undefined") return;
  writeLocale(l);
  window.dispatchEvent(new Event(EVT));
}

// ---- Provider (fonte única, semeada pelo servidor via cookie) ----

type Ctx = { locale: Locale; setLocale: (l: Locale) => void };
const LocaleContext = createContext<Ctx | null>(null);

/**
 * Semeia o idioma no cliente a partir do cookie lido no SERVIDOR (getServerLocale),
 * garantindo que SSR e cliente rendam no MESMO idioma (sem flash PT→EN, sem depender
 * só do localStorage). Envolve toda a app no layout raiz.
 */
export function LocaleProvider({ initial, children }: { initial: Locale; children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(initial);

  // Reconcilia com o estado real do cliente (cookie/localStorage) após montar
  // e garante que o cookie exista (ex.: escolha antiga salva só no localStorage).
  useEffect(() => {
    const actual = getLocale();
    if (actual !== locale) setLocaleState(actual);
    if (!readCookie()) writeLocale(actual);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Mantém sincronizado entre componentes/abas.
  useEffect(() => {
    const cb = () => setLocaleState(getLocale());
    window.addEventListener(EVT, cb);
    window.addEventListener("storage", cb);
    return () => {
      window.removeEventListener(EVT, cb);
      window.removeEventListener("storage", cb);
    };
  }, []);

  const set = useCallback((l: Locale) => {
    writeLocale(l);
    setLocaleState(l);
    window.dispatchEvent(new Event(EVT));
  }, []);

  return <LocaleContext.Provider value={{ locale, setLocale: set }}>{children}</LocaleContext.Provider>;
}

/**
 * Idioma escolhido pelo usuário. Lê do Provider (semeado pelo cookie do servidor);
 * fora do Provider, cai no store baseado em cookie/localStorage (SSR-safe = "pt").
 */
export function useLocale(): Locale {
  const ctx = useContext(LocaleContext);
  const store = useSyncExternalStore<Locale>(subscribe, getLocale, () => "pt");
  return ctx ? ctx.locale : store;
}

/** Setter que atualiza o estado do Provider imediatamente (além do cookie/localStorage). */
export function useSetLocale(): (l: Locale) => void {
  const ctx = useContext(LocaleContext);
  return ctx ? ctx.setLocale : setLocale;
}

export const LOCALES: { code: Locale; flag: string; label: string }[] = [
  { code: "pt", flag: "🇧🇷", label: "Português" },
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "es", flag: "🇪🇸", label: "Español" },
];
