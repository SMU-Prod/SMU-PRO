"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { useLocale, setLocale, type Locale } from "@/lib/i18n/locale";

// ── Bandeiras ilustradas (SVG inline, sem dependência externa) ──
function FlagBR({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 28 20" className="rounded-[2px] shrink-0" aria-hidden>
      <rect width="28" height="20" fill="#009c3b" />
      <polygon points="14,2.5 25.5,10 14,17.5 2.5,10" fill="#ffdf00" />
      <circle cx="14" cy="10" r="4.4" fill="#002776" />
      <path d="M9.9 9.2 A5 5 0 0 1 18.1 11.1" stroke="#fff" strokeWidth="1.1" fill="none" />
    </svg>
  );
}
function FlagUS({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 28 20" className="rounded-[2px] shrink-0" aria-hidden>
      <rect width="28" height="20" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={(i / 13) * 20} width="28" height={20 / 13} fill="#b22234" />
      ))}
      <rect width="12" height={20 * (7 / 13)} fill="#3c3b6e" />
    </svg>
  );
}
function FlagES({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 28 20" className="rounded-[2px] shrink-0" aria-hidden>
      <rect width="28" height="20" fill="#aa151b" />
      <rect y="5" width="28" height="10" fill="#f1bf00" />
    </svg>
  );
}

const OPTIONS: { code: Locale; name: string; Flag: (p: { size?: number }) => React.ReactElement }[] = [
  { code: "pt", name: "Português", Flag: FlagBR },
  { code: "en", name: "English", Flag: FlagUS },
  { code: "es", name: "Español", Flag: FlagES },
];

/**
 * Seletor de idioma GLOBAL (fica no cabeçalho, ao lado do tema).
 * Muda o idioma de todo o sistema — a escolha é lembrada e aplicada
 * em qualquer página que tenha conteúdo traduzido.
 */
export function LanguageSelector({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const current = OPTIONS.find((o) => o.code === locale) ?? OPTIONS[0];

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        title="Idioma"
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-lg border border-border bg-surface-2 px-2 py-1.5 text-xs font-medium text-foreground hover:bg-hover transition-colors"
      >
        <current.Flag size={20} />
        <span className="hidden sm:inline">{current.name}</span>
        <ChevronDown size={13} className={`text-muted transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 mt-1 w-40 rounded-lg border border-border bg-background shadow-lg py-1 z-50"
        >
          {OPTIONS.map((o) => {
            const active = o.code === locale;
            return (
              <button
                key={o.code}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => {
                  setLocale(o.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2.5 px-3 py-2 text-sm text-left transition-colors ${
                  active ? "text-amber-500 font-medium bg-hover" : "text-foreground hover:bg-hover"
                }`}
              >
                <o.Flag size={22} />
                <span className="flex-1">{o.name}</span>
                {active && <Check size={14} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
