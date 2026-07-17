import Link from "next/link";
import type { Simulator } from "@/lib/simulators/types";
import { SEGMENT_META } from "@/lib/simulators/segments";

const TIPO_LABEL: Record<Simulator["tipo"], string> = { real: "Réplica fiel", lab: "Laboratório", sim: "Simulador" };
const NIVEL_LABEL: Record<Simulator["nivel"], string> = { basico: "Básico", avancado: "Avançado", legado: "Legado" };

export function SimulatorCard({ sim }: { sim: Simulator }) {
  const meta = SEGMENT_META[sim.segmento];
  return (
    <Link
      href={`/simuladores/${sim.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-amber-500/50"
    >
      <div className={`relative flex h-28 items-center justify-center bg-gradient-to-br ${meta.gradient}`}>
        <span className="text-4xl opacity-80" aria-hidden="true">{meta.emoji}</span>
        {sim.tipo === "real" && (
          <span className="absolute right-2 top-2 rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-semibold text-black">
            RÉPLICA FIEL
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3">
        <h3 className="line-clamp-2 text-sm font-semibold text-foreground group-hover:text-amber-400">{sim.titulo}</h3>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1 text-[11px] text-muted">
          <span>{meta.label}</span><span>·</span><span>{NIVEL_LABEL[sim.nivel]}</span><span>·</span><span>{TIPO_LABEL[sim.tipo]}</span>
        </div>
      </div>
    </Link>
  );
}
