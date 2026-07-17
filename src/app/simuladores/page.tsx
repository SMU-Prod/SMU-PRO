import type { Metadata } from "next";
import { SIMULATORS } from "@/lib/simulators/catalog";
import { SimulatorBrowser } from "@/components/simulators/simulator-browser";

export const metadata: Metadata = { title: "Simuladores — SMU PRO" };

export default function SimuladoresPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Simuladores</h1>
        <p className="mt-1 text-muted">Opere consoles, mesas e equipamentos reais direto do navegador.</p>
      </header>
      <SimulatorBrowser sims={SIMULATORS} />
    </div>
  );
}
