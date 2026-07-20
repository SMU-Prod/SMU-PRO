import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Simulator } from "@/lib/simulators/types";
import { SEGMENT_META } from "@/lib/simulators/segments";
import { NIVEL_LABEL, NIVEL_VARIANT, TIPO_LABEL } from "./meta";
import type { TFn } from "@/lib/i18n/ui";

/**
 * Linha da LISTA — mesmo desenho do /cursos (components/cursos/courses-view.tsx):
 * thumb 112×64 · badges · título em negrito · meta à direita.
 * Simulador não tem thumbnail: no lugar da imagem vai o gradiente + emoji do segmento.
 */
export function SimulatorRow({ sim, t }: { sim: Simulator; t: TFn }) {
  const meta = SEGMENT_META[sim.segmento];
  return (
    <Link href={`/simuladores/${sim.id}`} className="group block">
      <div className="flex items-center gap-4 rounded-xl border border-border bg-surface p-3 transition-all hover:border-amber-500/30 hover:shadow-sm">
        <div
          className={`relative flex h-16 w-28 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br ${meta.gradient}`}
        >
          <span className="text-3xl opacity-80" aria-hidden="true">{meta.emoji}</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-1.5">
            <Badge variant={NIVEL_VARIANT[sim.nivel]}>{t(NIVEL_LABEL[sim.nivel])}</Badge>
            <Badge variant="secondary" className="text-xs">{t(meta.label)}</Badge>
          </div>
          <h3 className="truncate font-bold leading-tight text-foreground transition-colors group-hover:text-amber-400">
            {sim.titulo}
          </h3>
        </div>
        <div className="shrink-0 text-right text-xs text-muted-light">
          {sim.tipo === "real" ? (
            <div className="font-bold text-amber-500">{t(TIPO_LABEL.real)}</div>
          ) : (
            <div>{t(TIPO_LABEL[sim.tipo])}</div>
          )}
        </div>
      </div>
    </Link>
  );
}
