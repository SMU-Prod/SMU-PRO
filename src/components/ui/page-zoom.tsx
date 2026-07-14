"use client";

import { useCallback, useEffect, useState } from "react";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

const KEY = "smu-page-zoom";
const MIN = 1;
const MAX = 2.5;
const STEP = 0.25;
const TARGET_ID = "smu-zoom-root";

/**
 * Lupa GLOBAL — amplia a PÁGINA inteira (texto, imagens, tudo) para leitura.
 * Diferente de um zoom de imagem: a página continua rolando normalmente, então dá
 * para MOVER e ler qualquer parte. Aplica CSS `zoom` no container do conteúdo
 * (#smu-zoom-root); o próprio controle fica fora dele, então não é ampliado.
 */
export function PageZoom() {
  const [z, setZ] = useState(1);

  const set = useCallback((value: number) => {
    const v = Math.min(MAX, Math.max(MIN, Math.round(value * 100) / 100));
    setZ(v);
    const el = document.getElementById(TARGET_ID);
    if (el) (el.style as unknown as { zoom: string }).zoom = String(v);
    try {
      localStorage.setItem(KEY, String(v));
    } catch {}
  }, []);

  useEffect(() => {
    let saved = 1;
    try {
      saved = parseFloat(localStorage.getItem(KEY) || "1");
    } catch {}
    if (!saved || isNaN(saved)) saved = 1;
    set(saved);
  }, [set]);

  const btn =
    "flex h-8 w-8 items-center justify-center rounded-full text-foreground hover:bg-hover disabled:opacity-30 disabled:hover:bg-transparent transition-colors";

  return (
    <div
      className="fixed bottom-4 right-4 z-[90] flex items-center gap-0.5 rounded-full border border-border bg-surface/95 px-1.5 py-1 shadow-lg backdrop-blur"
      role="group"
      aria-label="Zoom"
    >
      <button className={btn} onClick={() => set(z - STEP)} disabled={z <= MIN} title="Diminuir zoom" aria-label="Diminuir zoom">
        <ZoomOut size={16} />
      </button>
      <span className="min-w-[42px] select-none text-center text-xs font-semibold tabular-nums text-muted">
        {Math.round(z * 100)}%
      </span>
      <button className={btn} onClick={() => set(z + STEP)} disabled={z >= MAX} title="Aumentar zoom" aria-label="Aumentar zoom">
        <ZoomIn size={16} />
      </button>
      {z !== 1 && (
        <button className={btn} onClick={() => set(1)} title="Zoom normal (100%)" aria-label="Zoom normal">
          <RotateCcw size={14} />
        </button>
      )}
    </div>
  );
}
