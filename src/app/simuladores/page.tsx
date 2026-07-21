import type { Metadata } from "next";
import Image from "next/image";
import { SIMULATORS } from "@/lib/simulators/catalog";
import { SimulatorBrowser } from "@/components/simulators/simulator-browser";

export const metadata: Metadata = { title: "Simuladores — SMU PRO" };

export default function SimuladoresPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <header className="mb-6 flex items-center gap-4">
        {/* logo.jpg (e não logo-smu.png): esta traz o próprio fundo preto, então
            se mantém legível no tema claro e no escuro. w-auto preserva o 981×934
            original — em caixa quadrada o object-cover comeria as bordas. */}
        <Image
          src="/logo.jpg"
          alt="SMU Produções"
          width={981}
          height={934}
          priority
          className="h-16 w-auto shrink-0 rounded-xl sm:h-20"
        />
        <div>
          <h1 className="text-3xl font-bold text-foreground">Simuladores</h1>
          <p className="mt-1 text-muted">Opere consoles, mesas e equipamentos reais direto do navegador.</p>
        </div>
      </header>
      <SimulatorBrowser sims={SIMULATORS} />
    </div>
  );
}
