import type { Simulator } from "@/lib/simulators/types";
import { SimulatorCard } from "./simulator-card";

export function SimulatorShelf({ title, sims }: { title: string; sims: Simulator[] }) {
  if (sims.length === 0) return null;
  return (
    <section className="mb-10">
      <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-foreground">
        {title} <span className="text-sm font-normal text-muted">({sims.length})</span>
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {sims.map((s) => <SimulatorCard key={s.id} sim={s} />)}
      </div>
    </section>
  );
}
