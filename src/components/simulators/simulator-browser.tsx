"use client";

import { useMemo, useState } from "react";
import type { Simulator, Segmento } from "@/lib/simulators/types";
import { SEGMENT_ORDER, SEGMENT_META } from "@/lib/simulators/segments";
import { SimulatorShelf } from "./simulator-shelf";

const NIVEIS: Simulator["nivel"][] = ["basico", "avancado", "legado"];
const NIVEL_LABEL: Record<Simulator["nivel"], string> = { basico: "Básico", avancado: "Avançado", legado: "Legado" };

export function SimulatorBrowser({ sims }: { sims: Simulator[] }) {
  const [q, setQ] = useState("");
  const [nivel, setNivel] = useState<Simulator["nivel"] | "todos">("todos");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return sims.filter((s) => {
      if (nivel !== "todos" && s.nivel !== nivel) return false;
      if (term && !s.titulo.toLowerCase().includes(term)) return false;
      return true;
    });
  }, [sims, q, nivel]);

  const bySeg = (seg: Segmento) => filtered.filter((s) => s.segmento === seg);
  const total = filtered.length;

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar simulador…"
          className="w-full max-w-xs rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground placeholder:text-muted"
        />
        <div className="flex gap-1.5">
          <button
            onClick={() => setNivel("todos")}
            className={`rounded-lg border px-3 py-1.5 text-sm ${nivel === "todos" ? "border-amber-500 text-amber-400" : "border-border text-muted"}`}
          >Todos</button>
          {NIVEIS.map((n) => (
            <button
              key={n}
              onClick={() => setNivel(n)}
              className={`rounded-lg border px-3 py-1.5 text-sm ${nivel === n ? "border-amber-500 text-amber-400" : "border-border text-muted"}`}
            >{NIVEL_LABEL[n]}</button>
          ))}
        </div>
      </div>
      {total === 0 ? (
        <p className="py-16 text-center text-muted">Nenhum simulador encontrado.</p>
      ) : (
        SEGMENT_ORDER.map((seg) => (
          <SimulatorShelf key={seg} title={SEGMENT_META[seg].label} sims={bySeg(seg)} />
        ))
      )}
    </div>
  );
}
