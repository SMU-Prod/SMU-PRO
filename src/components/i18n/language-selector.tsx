"use client";

import { LOCALES, useLocale, setLocale, type Locale } from "@/lib/i18n/locale";

/**
 * Seletor de idioma por bandeira (piloto). Muda o idioma do curso (texto + áudio).
 */
export function LanguageSelector({ className = "" }: { className?: string }) {
  const locale = useLocale();
  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-lg border border-border bg-surface-2 p-0.5 ${className}`}
      role="group"
      aria-label="Idioma"
    >
      {LOCALES.map((l) => {
        const active = l.code === locale;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLocale(l.code as Locale)}
            title={l.label}
            aria-pressed={active}
            className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-colors ${
              active
                ? "bg-amber-500 text-black"
                : "text-muted hover:text-foreground hover:bg-hover"
            }`}
          >
            <span className="text-sm leading-none">{l.flag}</span>
            <span className="hidden sm:inline">{l.code.toUpperCase()}</span>
          </button>
        );
      })}
    </div>
  );
}
