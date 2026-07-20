import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Simulator } from "@/lib/simulators/types";
import { SEGMENT_META } from "@/lib/simulators/segments";
import { NIVEL_LABEL, NIVEL_VARIANT, TIPO_LABEL } from "./meta";
import type { TFn } from "@/lib/i18n/ui";

export function SimulatorCard({ sim, t }: { sim: Simulator; t: TFn }) {
  const meta = SEGMENT_META[sim.segmento];
  return (
    <Link href={`/simuladores/${sim.id}`} className="group">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-md">
        <div className={`relative flex h-28 shrink-0 items-center justify-center bg-gradient-to-br ${meta.gradient}`}>
          <span className="text-4xl opacity-80" aria-hidden="true">{meta.emoji}</span>
          {sim.tipo === "real" && (
            <span className="absolute right-2 top-2 rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-semibold text-white">
              {t(TIPO_LABEL.real)}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col p-4">
          <div className="mb-2 flex flex-wrap items-center gap-1.5">
            <Badge variant={NIVEL_VARIANT[sim.nivel]}>{t(NIVEL_LABEL[sim.nivel])}</Badge>
          </div>
          <h3 className="line-clamp-2 text-sm font-bold leading-tight text-foreground transition-colors group-hover:text-amber-400">
            {sim.titulo}
          </h3>
          <div className="mt-auto pt-3 text-xs text-muted-light">{t(meta.label)}</div>
        </div>
      </div>
    </Link>
  );
}
