import {
  Target, DollarSign, MapPin, Calendar, Users, Megaphone,
  Shield, Wrench, TrendingUp, AlertTriangle, Zap, BookOpen, ChevronRight,
  type LucideIcon,
} from "lucide-react";

// Catálogo ÚNICO de ícones de seção — usado pelo editor (SectionBlock) e pelo
// viewer (RichContentViewer). Cada seção guarda a CHAVE do ícone em data-icon.

export type SectionIconKey =
  | "target" | "money" | "location" | "calendar" | "team" | "marketing"
  | "safety" | "logistics" | "results" | "alert" | "action" | "book" | "arrow";

export const ICON_BY_KEY: Record<SectionIconKey, LucideIcon> = {
  target: Target,
  money: DollarSign,
  location: MapPin,
  calendar: Calendar,
  team: Users,
  marketing: Megaphone,
  safety: Shield,
  logistics: Wrench,
  results: TrendingUp,
  alert: AlertTriangle,
  action: Zap,
  book: BookOpen,
  arrow: ChevronRight,
};

// Opções mostradas no seletor de ícone do editor (ordem = ordem de exibição)
export const SECTION_ICON_OPTIONS: { key: SectionIconKey; label: string }[] = [
  { key: "target", label: "Objetivo" },
  { key: "book", label: "Introdução" },
  { key: "money", label: "Financeiro" },
  { key: "location", label: "Local" },
  { key: "calendar", label: "Data / Prazo" },
  { key: "team", label: "Equipe" },
  { key: "marketing", label: "Divulgação" },
  { key: "safety", label: "Segurança" },
  { key: "logistics", label: "Logística / Técnico" },
  { key: "results", label: "Resultado / Avaliação" },
  { key: "alert", label: "Atenção / Dica" },
  { key: "action", label: "Prática / Ação" },
  { key: "arrow", label: "Genérico" },
];

// Detecção automática por palavras-chave (default ao inserir + fallback legado)
const KEYWORD_MAP: Array<{ keywords: string[]; key: SectionIconKey }> = [
  { keywords: ["objetivo", "propósito", "meta", "definir"], key: "target" },
  { keywords: ["orçamento", "custo", "preço", "valor", "financeiro", "budget", "comissão", "salário"], key: "money" },
  { keywords: ["local", "espaço", "venue", "lugar"], key: "location" },
  { keywords: ["data", "hora", "horário", "cronograma", "agenda", "tempo", "prazo"], key: "calendar" },
  { keywords: ["equipe", "fornecedor", "pessoal", "staff", "profissional", "contrat"], key: "team" },
  { keywords: ["marketing", "promoção", "divulgação", "comunicação", "mídia"], key: "marketing" },
  { keywords: ["segurança", "epi", "proteção", "risco", "emergência"], key: "safety" },
  { keywords: ["logística", "transporte", "montagem", "técnico", "equipamento", "ferramenta"], key: "logistics" },
  { keywords: ["avaliação", "feedback", "resultado", "análise", "relatório", "pós"], key: "results" },
  { keywords: ["dica", "importante", "atenção", "lembre", "cuidado", "alerta"], key: "alert" },
  { keywords: ["prática", "execução", "ação", "implementação", "aplicação"], key: "action" },
  { keywords: ["introdução", "conceito", "sobre", "visão geral", "apresentação", "programação", "conteúdo"], key: "book" },
];

export function getIconKeyForTitle(title: string): SectionIconKey {
  const lower = (title || "").toLowerCase();
  for (const item of KEYWORD_MAP) {
    if (item.keywords.some((kw) => lower.includes(kw))) return item.key;
  }
  return "arrow";
}

export function getIconForKey(key: string | null | undefined): LucideIcon {
  return ICON_BY_KEY[(key as SectionIconKey)] ?? ICON_BY_KEY.arrow;
}

export function getIconForTitle(title: string): LucideIcon {
  return ICON_BY_KEY[getIconKeyForTitle(title)];
}
