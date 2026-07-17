import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SIMULATORS } from "@/lib/simulators/catalog";
import { SimulatorFrame } from "@/components/simulators/simulator-frame";

export function generateStaticParams() {
  return SIMULATORS.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const sim = SIMULATORS.find((s) => s.id === id);
  return { title: sim ? `${sim.titulo} — Simulador SMU` : "Simulador — SMU PRO" };
}

export default async function SimuladorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sim = SIMULATORS.find((s) => s.id === id);
  if (!sim) notFound();
  return <SimulatorFrame src={sim.arquivo} titulo={sim.titulo} />;
}
