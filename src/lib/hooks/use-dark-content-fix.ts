"use client";

import { useEffect, type RefObject } from "react";
import { useTheme } from "@/components/theme-provider";

// Lê uma cor CSS inline (rgb/rgba/#hex) e devolve [r,g,b], ou null se não reconhecer.
function parseCssColor(v: string): [number, number, number] | null {
  if (!v) return null;
  const s = v.trim();
  const m = s.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
  if (m) return [Number(m[1]), Number(m[2]), Number(m[3])];
  const h = s.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);
  if (h) {
    let hex = h[1];
    if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
    return [parseInt(hex.slice(0, 2), 16), parseInt(hex.slice(2, 4), 16), parseInt(hex.slice(4, 6), 16)];
  }
  return null;
}

/**
 * Correção de contraste no MODO ESCURO para conteúdo de curso.
 *
 * O conteúdo dos cursos traz cores de texto FIXAS (o editor gerou tons quase
 * pretos: rgb(17,24,39), rgb(74,85,104), rgb(26,46,74), etc.) que somem no fundo
 * escuro — só aparecem ao imprimir, quando o fundo vira branco. Aqui, quando o
 * tema é escuro, a gente CLAREIA só as cores escuras (por luminância), preservando
 * as vivas (âmbar/vermelho/azul de destaque). Pula os infográficos <figure>, que
 * têm fundo branco próprio. Guarda a cor original em data-oc p/ restaurar ao voltar
 * pro tema claro. É render-side, então cobre PT (banco) + EN/ES (json).
 *
 * @param ref  container que embrulha o HTML injetado (dangerouslySetInnerHTML)
 * @param deps recomputa quando o conteúdo muda (ex.: [sanitized])
 */
export function useDarkContentFix(ref: RefObject<HTMLElement | null>, deps: unknown[] = []) {
  const { theme } = useTheme();
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const dark = !document.documentElement.classList.contains("light");
    const els = root.querySelectorAll<HTMLElement>('[style*="color"]');
    els.forEach((el) => {
      if (el.closest("figure")) return; // infográfico tem fundo branco próprio
      const saved = el.getAttribute("data-oc");
      if (!dark) {
        if (saved !== null) { el.style.color = saved; el.removeAttribute("data-oc"); }
        return;
      }
      const base = saved ?? el.style.color;
      const rgb = parseCssColor(base);
      if (!rgb) return;
      const lum = 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
      if (lum >= 140) return; // já é clara o bastante p/ ler no escuro
      if (saved === null) el.setAttribute("data-oc", el.style.color);
      const k = 0.62; // mistura em direção ao branco, preservando o matiz
      const r = Math.round(rgb[0] + (255 - rgb[0]) * k);
      const g = Math.round(rgb[1] + (255 - rgb[1]) * k);
      const b = Math.round(rgb[2] + (255 - rgb[2]) * k);
      el.style.color = `rgb(${r}, ${g}, ${b})`;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, ...deps]);
}
