import type { Simulator } from "@/lib/simulators/types";
import type { TFn } from "@/lib/i18n/ui";
import { SimulatorCard } from "./simulator-card";
import { SimulatorRow } from "./simulator-row";

/** Cabeçalho de seção idêntico ao do /cursos: traço âmbar + caixa alta espaçada + contagem. */
export function SimulatorShelf({
  title,
  sims,
  view = "cards",
  t,
}: {
  title: string;
  sims: Simulator[];
  view?: "cards" | "list";
  t: TFn;
}) {
  if (sims.length === 0) return null;
  return (
    <section>
      <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-light">
        <span className="h-px w-5 bg-amber-500/60" />
        {t(title)}
        <span className="font-normal normal-case tracking-normal text-muted-light/60">({sims.length})</span>
      </h2>
      {view === "list" ? (
        <div className="space-y-2">
          {sims.map((s) => <SimulatorRow key={s.id} sim={s} t={t} />)}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {sims.map((s) => <SimulatorCard key={s.id} sim={s} t={t} />)}
        </div>
      )}
    </section>
  );
}
