"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { LayoutGrid, List as ListIcon, X } from "lucide-react";
import type { Simulator, Segmento } from "@/lib/simulators/types";
import { SEGMENT_ORDER, SEGMENT_META } from "@/lib/simulators/segments";
import { useT } from "@/lib/i18n/ui";
import { NIVEL_LABEL, TIPO_LABEL } from "./meta";
import { SimulatorShelf } from "./simulator-shelf";

const NIVEIS: Simulator["nivel"][] = ["basico", "avancado", "legado"];

type View = "cards" | "list";
const VIEW_KEY = "smu_simulators_view";

/** "Vídeo" → "video": busca insensível a acento e caixa. */
function norm(s: string) {
  return s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
}

/** Texto pesquisável: título + segmento + nível + tipo + marca (que só existe no nome do arquivo). */
function haystack(s: Simulator) {
  const marca = s.arquivo.replace(/^.*\//, "").replace(/\.html$/, "").replace(/-/g, " ");
  return norm([s.titulo, SEGMENT_META[s.segmento].label, NIVEL_LABEL[s.nivel], TIPO_LABEL[s.tipo], marca].join(" "));
}

function Chip({ ativo, onClick, children }: { ativo: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={ativo}
      className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${
        ativo
          ? "border-amber-500 bg-amber-500/10 text-amber-500"
          : "border-border text-muted hover:border-amber-500/40 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

export function SimulatorBrowser({ sims }: { sims: Simulator[] }) {
  const t = useT();
  const [q, setQ] = useState("");
  const [nivel, setNivel] = useState<Simulator["nivel"] | "todos">("todos");
  const [segmento, setSegmento] = useState<Segmento | "todos">("todos");
  const [view, setView] = useState<View>("cards");
  const inputRef = useRef<HTMLInputElement>(null);

  // lembra a preferência do usuário — mesma convenção do /cursos
  useEffect(() => {
    const salvo = typeof window !== "undefined" ? window.localStorage.getItem(VIEW_KEY) : null;
    if (salvo === "cards" || salvo === "list") setView(salvo);
  }, []);
  const change = (v: View) => {
    setView(v);
    try { window.localStorage.setItem(VIEW_KEY, v); } catch {}
  };

  // "/" foca a busca; Esc limpa.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const alvo = e.target as HTMLElement | null;
      const digitando = alvo?.tagName === "INPUT" || alvo?.tagName === "TEXTAREA";
      if (e.key === "/" && !digitando) {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === "Escape" && digitando) {
        setQ("");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Índice de busca calculado uma vez — não por tecla digitada.
  const indice = useMemo(() => new Map(sims.map((s) => [s.id, haystack(s)])), [sims]);
  const termos = useMemo(() => norm(q).split(/\s+/).filter(Boolean), [q]);

  const casa = (s: Simulator) => {
    const alvo = indice.get(s.id) ?? "";
    return termos.every((x) => alvo.includes(x)); // todas as palavras: "yamaha cl5" acha só a CL5
  };

  const filtrados = useMemo(
    () => sims.filter((s) => (nivel === "todos" || s.nivel === nivel) && (segmento === "todos" || s.segmento === segmento) && casa(s)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sims, termos, nivel, segmento, indice]
  );

  // Contagem por segmento respeitando busca e nível — o chip mostra quanto há para achar.
  const contagem = useMemo(() => {
    const m = {} as Record<Segmento, number>;
    for (const seg of SEGMENT_ORDER) m[seg] = 0;
    for (const s of sims) if ((nivel === "todos" || s.nivel === nivel) && casa(s)) m[s.segmento]++;
    return m;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sims, termos, nivel, indice]);

  const total = filtrados.length;
  const segmentosVisiveis = segmento === "todos" ? SEGMENT_ORDER : [segmento];
  const temFiltro = q !== "" || nivel !== "todos" || segmento !== "todos";
  const limpar = () => { setQ(""); setNivel("todos"); setSegmento("todos"); };

  return (
    <div>
      {/* Pré-filtro por área: som, luz, dj, vídeo, produção, efeito */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        <Chip ativo={segmento === "todos"} onClick={() => setSegmento("todos")}>
          {t("Tudo")} <span className="text-xs opacity-60">({sims.length})</span>
        </Chip>
        {SEGMENT_ORDER.map((seg) => (
          <Chip key={seg} ativo={segmento === seg} onClick={() => setSegmento(segmento === seg ? "todos" : seg)}>
            <span aria-hidden="true">{SEGMENT_META[seg].emoji}</span> {t(SEGMENT_META[seg].label)}{" "}
            <span className="text-xs opacity-60">({contagem[seg]})</span>
          </Chip>
        ))}
      </div>

      <div className="mb-5 flex flex-wrap items-center gap-3">
        <div className="relative w-full max-w-xs">
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            type="search"
            aria-label={t("Buscar")}
            placeholder={t("Buscar por marca, modelo ou área…")}
            className="w-full rounded-lg border border-border bg-surface py-2 pl-3 pr-16 text-sm text-foreground placeholder:text-muted focus:border-amber-500 focus:outline-none"
          />
          {q ? (
            <button
              type="button"
              onClick={() => setQ("")}
              aria-label={t("Limpar")}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted hover:text-foreground"
            >
              <X size={14} />
            </button>
          ) : (
            <kbd className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 rounded border border-border px-1.5 py-0.5 text-[10px] text-muted sm:block">
              /
            </kbd>
          )}
        </div>

        <div className="flex gap-1.5">
          <Chip ativo={nivel === "todos"} onClick={() => setNivel("todos")}>{t("Todos")}</Chip>
          {NIVEIS.map((n) => (
            <Chip key={n} ativo={nivel === n} onClick={() => setNivel(nivel === n ? "todos" : n)}>
              {t(NIVEL_LABEL[n])}
            </Chip>
          ))}
        </div>

        {/* Alternar visualização — mesmo controle do /cursos */}
        <div className="ml-auto inline-flex items-center rounded-lg border border-border bg-surface p-0.5">
          <button
            type="button"
            onClick={() => change("cards")}
            aria-label={t("Ver em cartões")}
            aria-pressed={view === "cards"}
            title={t("Cartões")}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
              view === "cards" ? "bg-amber-500 text-white" : "text-muted hover:text-foreground"
            }`}
          >
            <LayoutGrid size={15} /> {t("Cartões")}
          </button>
          <button
            type="button"
            onClick={() => change("list")}
            aria-label={t("Ver em lista")}
            aria-pressed={view === "list"}
            title={t("Lista")}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
              view === "list" ? "bg-amber-500 text-white" : "text-muted hover:text-foreground"
            }`}
          >
            <ListIcon size={15} /> {t("Lista")}
          </button>
        </div>
      </div>

      <div className="mb-5 flex items-center gap-3 text-sm text-muted-light" aria-live="polite">
        <span>
          {total} {total === 1 ? t("simulador") : t("simuladores")}
          {temFiltro ? ` ${t("de")} ${sims.length}` : ""}
        </span>
        {temFiltro && (
          <button type="button" onClick={limpar} className="text-amber-500 hover:underline">
            {t("Limpar filtros")}
          </button>
        )}
      </div>

      {total === 0 ? (
        <div className="py-16 text-center">
          <p className="text-muted">{t("Nenhum simulador encontrado.")}</p>
          {temFiltro && (
            <button
              type="button"
              onClick={limpar}
              className="mt-3 rounded-lg border border-amber-500 px-4 py-2 text-sm text-amber-500"
            >
              {t("Limpar filtros")}
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-10">
          {segmentosVisiveis.map((seg) => (
            <SimulatorShelf
              key={seg}
              title={SEGMENT_META[seg].label}
              sims={filtrados.filter((s) => s.segmento === seg)}
              view={view}
              t={t}
            />
          ))}
        </div>
      )}
    </div>
  );
}
