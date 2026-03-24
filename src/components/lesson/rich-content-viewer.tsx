"use client";

import { useMemo, useState, useEffect } from "react";
import {
  Target, BookOpen, MapPin, Users, Megaphone,
  AlertTriangle, Wrench, TrendingUp,
  Calendar, DollarSign, Shield, Zap, ChevronRight,
  Sparkles, Loader2,
} from "lucide-react";
import DOMPurify from "isomorphic-dompurify";
import { Button } from "@/components/ui/button";

interface RichContentViewerProps {
  html: string;
  lessonId?: string;
  titulo?: string;
  categoria?: string;
  isAdmin?: boolean;  // Só admin pode gerar/refinar
}

// Ícone por seção — cor âmbar SMU para todos
const SECTION_ICONS: Array<{ keywords: string[]; icon: typeof Target }> = [
  { keywords: ["objetivo", "propósito", "meta", "definir"], icon: Target },
  { keywords: ["orçamento", "custo", "preço", "valor", "financeiro", "budget"], icon: DollarSign },
  { keywords: ["local", "espaço", "venue", "seleção de local", "lugar"], icon: MapPin },
  { keywords: ["data", "hora", "horário", "cronograma", "agenda", "tempo", "prazo"], icon: Calendar },
  { keywords: ["equipe", "fornecedor", "pessoal", "staff", "profissional", "contrat"], icon: Users },
  { keywords: ["marketing", "promoção", "divulgação", "comunicação", "mídia"], icon: Megaphone },
  { keywords: ["segurança", "epi", "proteção", "risco", "emergência"], icon: Shield },
  { keywords: ["logística", "transporte", "montagem", "técnico", "equipamento", "ferramenta"], icon: Wrench },
  { keywords: ["avaliação", "feedback", "resultado", "análise", "relatório", "pós"], icon: TrendingUp },
  { keywords: ["dica", "importante", "atenção", "lembre", "cuidado", "alerta"], icon: AlertTriangle },
  { keywords: ["prática", "execução", "ação", "implementação", "aplicação"], icon: Zap },
  { keywords: ["introdução", "conceito", "sobre", "visão geral", "apresentação", "programação", "conteúdo"], icon: BookOpen },
];

function getIconForTitle(title: string): typeof Target {
  const lower = title.toLowerCase();
  for (const item of SECTION_ICONS) {
    if (item.keywords.some(kw => lower.includes(kw))) return item.icon;
  }
  return ChevronRight;
}

interface Section {
  title: string;
  content: string;
}

function parseIntoSections(html: string): Section[] {
  const sections: Section[] = [];
  const parser = typeof DOMParser !== "undefined" ? new DOMParser() : null;
  if (!parser) return [{ title: "", content: html }];

  const doc = parser.parseFromString(`<div>${html}</div>`, "text/html");
  const container = doc.body.firstElementChild;
  if (!container) return [{ title: "", content: html }];

  let currentTitle = "";
  let currentContent = "";

  for (const node of Array.from(container.children)) {
    const tag = node.tagName.toLowerCase();

    if (tag.match(/^h[1-6]$/)) {
      if (currentTitle || currentContent.trim()) {
        sections.push({ title: currentTitle, content: currentContent.trim() });
      }
      currentTitle = node.textContent?.trim() || "";
      currentContent = "";
      continue;
    }

    if (tag === "p") {
      const firstChild = node.firstElementChild;
      const text = node.textContent?.trim() || "";

      if (
        firstChild &&
        (firstChild.tagName === "STRONG" || firstChild.tagName === "B") &&
        (
          firstChild.textContent?.trim() === text ||
          (text.includes(":") && firstChild.textContent?.trim() === text.split(":")[0].trim())
        )
      ) {
        if (currentTitle || currentContent.trim()) {
          sections.push({ title: currentTitle, content: currentContent.trim() });
        }
        if (text.includes(":")) {
          const colonIdx = text.indexOf(":");
          currentTitle = text.substring(0, colonIdx).trim();
          const rest = text.substring(colonIdx + 1).trim();
          currentContent = rest ? `<p>${rest}</p>` : "";
        } else {
          currentTitle = text;
          currentContent = "";
        }
        continue;
      }
    }

    currentContent += node.outerHTML;
  }

  if (currentTitle || currentContent.trim()) {
    sections.push({ title: currentTitle, content: currentContent.trim() });
  }

  return sections;
}

/**
 * Remove hardcoded black/white/gray font colors from pasted HTML
 * so they follow the dark/light theme. Preserves intentional semantic colors.
 */
function neutralizeGenericColors(html: string): string {
  if (typeof DOMParser === "undefined") return html;
  const doc = new DOMParser().parseFromString(`<div>${html}</div>`, "text/html");
  const container = doc.body.firstElementChild;
  if (!container) return html;

  // Semantic colors we want to keep (hue-based)
  const isSemanticColor = (r: number, g: number, b: number): boolean => {
    // If all channels are similar → grayscale → strip it
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const saturation = max === 0 ? 0 : (max - min) / max;
    // Low saturation = grayscale/near-white/near-black
    return saturation > 0.25 && max > 30 && min < 230;
  };

  const parseColor = (color: string): [number, number, number] | null => {
    // rgb(r, g, b)
    const rgbMatch = color.match(/rgb\s*\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/);
    if (rgbMatch) return [+rgbMatch[1], +rgbMatch[2], +rgbMatch[3]];
    // #RRGGBB or #RGB
    const hexMatch = color.match(/#([0-9a-f]{3,8})/i);
    if (hexMatch) {
      let hex = hexMatch[1];
      if (hex.length === 3) hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
      return [parseInt(hex.slice(0,2),16), parseInt(hex.slice(2,4),16), parseInt(hex.slice(4,6),16)];
    }
    // Named colors
    if (color.includes("black")) return [0, 0, 0];
    if (color.includes("white")) return [255, 255, 255];
    if (color.includes("gray") || color.includes("grey")) return [128, 128, 128];
    return null;
  };

  const els = container.querySelectorAll("[style]");
  for (const el of Array.from(els)) {
    const style = (el as HTMLElement).style;

    // Handle color
    if (style.color) {
      const rgb = parseColor(style.color);
      if (rgb && !isSemanticColor(...rgb)) {
        style.removeProperty("color");
      }
    }

    // Handle background-color (remove white/black backgrounds)
    if (style.backgroundColor) {
      const rgb = parseColor(style.backgroundColor);
      if (rgb && !isSemanticColor(...rgb)) {
        style.removeProperty("background-color");
      }
    }

    // If style is now empty, remove the attribute
    if (!(el as HTMLElement).getAttribute("style")?.trim()) {
      el.removeAttribute("style");
    }
  }

  return container.innerHTML;
}

export function RichContentViewer({ html, lessonId, titulo, categoria, isAdmin = false }: RichContentViewerProps) {
  const [refinedHtml, setRefinedHtml] = useState<string | null>(null);
  const [refining, setRefining] = useState(false);

  // Carregar conteúdo refinado se existir (silencioso, sem gerar)
  useEffect(() => {
    if (!lessonId) return;
    async function loadCachedRefined() {
      try {
        const res = await fetch(`/api/ai-refine?lessonId=${lessonId}`);
        if (res.ok) {
          const data = await res.json();
          if (data.content) setRefinedHtml(data.content);
        }
      } catch { /* usar original */ }
    }
    loadCachedRefined();
  }, [lessonId]);

  // Só admin pode gerar refinamento
  async function handleRefine() {
    if (refining || !lessonId || !isAdmin) return;
    setRefining(true);
    try {
      const res = await fetch("/api/ai-refine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId, titulo, conteudo: html, categoria }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.content) setRefinedHtml(data.content);
      }
    } catch { /* fallback */ }
    setRefining(false);
  }

  // Aluno vê refinado se existir, senão original
  const activeHtml = refinedHtml || html;

  // Sanitize HTML but preserve all inline styles (including colors chosen in the editor).
  // Color cleanup happens ONLY at paste time in the RichTextEditor (transformPastedHTML),
  // not here — otherwise editor-chosen colors would be stripped.
  const sanitized = useMemo(() => {
    return DOMPurify.sanitize(activeHtml, {
      ADD_ATTR: ["style", "class", "target", "rel", "data-width", "data-alignment", "alt"],
      ADD_TAGS: ["mark", "sup", "sub", "img", "table", "thead", "tbody", "tr", "td", "th", "colgroup", "col", "figure", "figcaption"],
    });
  }, [activeHtml]);

  const sections = useMemo(() => parseIntoSections(sanitized), [sanitized]);

  // Botão admin de refinar (reutilizável)
  const RefineButton = () => {
    if (!isAdmin) return null;
    if (refinedHtml) {
      return (
        <div className="flex items-center gap-2 pb-2">
          <span className="flex items-center gap-1.5 text-xs text-smu-amber">
            <Sparkles size={14} />
            Conteúdo refinado pela IA
          </span>
          <Button
            size="sm"
            variant="outline"
            onClick={handleRefine}
            disabled={refining}
            className="gap-1.5 text-xs border-smu-amber/30 text-smu-amber hover:bg-smu-amber/10 h-7 px-3 ml-auto"
          >
            {refining ? <Loader2 size={12} className="animate-spin" /> : <Sparkles size={12} />}
            Re-refinar
          </Button>
        </div>
      );
    }
    return (
      <div className="pb-2">
        <Button
          size="sm"
          onClick={handleRefine}
          disabled={refining}
          className="gap-1.5 bg-smu-amber hover:bg-smu-amber-dark text-black font-medium"
        >
          {refining ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
          {refining ? "Refinando conteúdo..." : "Refinar conteúdo com IA"}
        </Button>
      </div>
    );
  };

  if (sections.length <= 1 && !sections[0]?.title) {
    return (
      <div>
        <RefineButton />
        <div className="prose-light max-w-none" dangerouslySetInnerHTML={{ __html: sanitized }} />
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <RefineButton />

      {sections.map((section, idx) => {
        if (!section.title && !section.content) return null;

        if (!section.title) {
          return (
            <div
              key={idx}
              className="prose-light max-w-none text-sm text-muted leading-relaxed py-1"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          );
        }

        const Icon = getIconForTitle(section.title);

        return (
          <div
            key={idx}
            className="rounded-lg bg-surface-2 border border-border p-3.5 transition-colors hover:border-border-strong"
          >
            <div className="flex items-center gap-2 mb-2">
              <Icon size={14} className="text-smu-amber shrink-0" />
              <h3 className="text-[13px] font-semibold text-foreground">
                {section.title}
              </h3>
            </div>

            {section.content && (
              <div
                className="prose-light max-w-none text-[13px] text-muted leading-relaxed pl-[22px]"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
