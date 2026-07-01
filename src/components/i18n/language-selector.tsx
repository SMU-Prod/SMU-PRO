"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Check } from "lucide-react";
import { useLocale, setLocale, type Locale } from "@/lib/i18n/locale";

// Bandeiras REAIS dos países (imagens oficiais). cc = código do país no flagcdn.
const OPTIONS: { code: Locale; cc: string; name: string }[] = [
  { code: "pt", cc: "br", name: "Português" },
  { code: "en", cc: "us", name: "English" },
  { code: "es", cc: "es", name: "Español" },
];

function Flag({ cc, w = 22 }: { cc: string; w?: number }) {
  return (
    <img
      src={`https://flagcdn.com/${cc}.svg`}
      alt={cc.toUpperCase()}
      width={w}
      height={Math.round(w * 0.7)}
      className="rounded-[2px] object-cover shrink-0 border border-black/10"
      style={{ width: w, height: Math.round(w * 0.7) }}
      loading="lazy"
    />
  );
}

/**
 * Seletor de idioma GLOBAL (cabeçalho, ao lado do tema). Bandeiras reais + nome.
 * Muda o idioma de todo o sistema; a escolha é lembrada e aplicada onde há tradução.
 */
export function LanguageSelector({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const current = OPTIONS.find((o) => o.code === locale) ?? OPTIONS[0];

  function choose(code: Locale) {
    setLocale(code);
    setOpen(false);
    router.refresh(); // re-renderiza os server components no novo idioma
  }

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
        <Flag cc={current.cc} w={22} />
        <span className="hidden sm:inline">{current.name}</span>
        <ChevronDown size={13} className={`text-muted transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 mt-1 w-44 rounded-lg border border-border bg-background shadow-lg py-1 z-50"
        >
          {OPTIONS.map((o) => {
            const active = o.code === locale;
            return (
              <button
                key={o.code}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => choose(o.code)}
                className={`flex w-full items-center gap-2.5 px-3 py-2 text-sm text-left transition-colors ${
                  active ? "text-amber-500 font-medium bg-hover" : "text-foreground hover:bg-hover"
                }`}
              >
                <Flag cc={o.cc} w={26} />
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
