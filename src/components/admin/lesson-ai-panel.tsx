"use client";

import { useState } from "react";
import { Zap, Sparkles, Loader2, RotateCcw, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LessonAiPanelProps {
  lessonId: string;
  titulo: string;
  conteudo: string;
  categoria: string;
}

/**
 * Painel de controles IA para o admin.
 * Aparece dentro do formulário de edição de aula no admin.
 * Controla: Gerar Simulação Interativa + Refinar Conteúdo
 */
export function LessonAiPanel({ lessonId, titulo, conteudo, categoria }: LessonAiPanelProps) {
  const [generatingSimulation, setGeneratingSimulation] = useState(false);
  const [simulationDone, setSimulationDone] = useState(false);
  const [simulationError, setSimulationError] = useState<string | null>(null);

  const [refiningContent, setRefiningContent] = useState(false);
  const [refineDone, setRefineDone] = useState(false);
  const [refineError, setRefineError] = useState<string | null>(null);

  const hasContent = conteudo && conteudo.length > 50;

  async function handleGenerateSimulation(force = false) {
    if (generatingSimulation || !hasContent) return;
    setGeneratingSimulation(true);
    setSimulationError(null);
    setSimulationDone(false);
    try {
      const res = await fetch("/api/animation/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId, titulo, conteudo, categoria, force }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erro ao gerar");
      }
      const result = await res.json();
      if (result.status === "ready") {
        setSimulationDone(true);
      } else {
        // Polling
        pollSimulation();
      }
    } catch (err: any) {
      setSimulationError(err.message);
    } finally {
      setGeneratingSimulation(false);
    }
  }

  async function pollSimulation() {
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/animation/generate?lessonId=${lessonId}&tipo=interactive`);
        const result = await res.json();
        if (result.status === "ready") {
          setSimulationDone(true);
          setGeneratingSimulation(false);
          clearInterval(interval);
        } else if (result.status === "error") {
          setSimulationError("Erro na geração");
          setGeneratingSimulation(false);
          clearInterval(interval);
        }
      } catch { /* keep polling */ }
    }, 5000);
    setTimeout(() => clearInterval(interval), 300_000);
  }

  async function handleRefineContent() {
    if (refiningContent || !hasContent) return;
    setRefiningContent(true);
    setRefineError(null);
    setRefineDone(false);
    try {
      const res = await fetch("/api/ai-refine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId, titulo, conteudo, categoria }),
      });
      if (!res.ok) throw new Error("Erro ao refinar");
      const result = await res.json();
      if (result.content) setRefineDone(true);
    } catch (err: any) {
      setRefineError(err.message);
    } finally {
      setRefiningContent(false);
    }
  }

  if (!hasContent) return null;

  return (
    <div className="rounded-lg border border-purple-500/20 bg-purple-500/5 p-3 space-y-2">
      <div className="flex items-center gap-2 text-xs text-purple-300 font-medium">
        <Sparkles size={13} />
        Ferramentas de IA
      </div>

      <div className="flex flex-wrap gap-2">
        {/* Gerar Simulação Interativa */}
        <Button
          type="button"
          size="sm"
          onClick={() => handleGenerateSimulation(false)}
          disabled={generatingSimulation}
          className="gap-1.5 bg-purple-600 hover:bg-purple-500 text-xs h-7"
        >
          {generatingSimulation ? (
            <Loader2 size={12} className="animate-spin" />
          ) : simulationDone ? (
            <Check size={12} />
          ) : (
            <Zap size={12} />
          )}
          {generatingSimulation ? "Gerando..." : simulationDone ? "Simulação gerada!" : "Gerar Simulação Interativa"}
        </Button>

        {/* Regenerar (se já existe) */}
        {simulationDone && (
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() => handleGenerateSimulation(true)}
            disabled={generatingSimulation}
            className="gap-1.5 text-xs h-7 border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
          >
            <RotateCcw size={12} />
            Regenerar
          </Button>
        )}

        {/* Refinar Conteúdo */}
        <Button
          type="button"
          size="sm"
          onClick={handleRefineContent}
          disabled={refiningContent}
          className="gap-1.5 bg-smu-amber hover:bg-smu-amber-dark text-black text-xs h-7"
        >
          {refiningContent ? (
            <Loader2 size={12} className="animate-spin" />
          ) : refineDone ? (
            <Check size={12} />
          ) : (
            <Sparkles size={12} />
          )}
          {refiningContent ? "Refinando..." : refineDone ? "Conteúdo refinado!" : "Refinar Conteúdo com IA"}
        </Button>
      </div>

      {/* Errors */}
      {simulationError && <p className="text-[10px] text-red-400">{simulationError}</p>}
      {refineError && <p className="text-[10px] text-red-400">{refineError}</p>}

      <p className="text-[10px] text-muted-light">
        Simulação: GPT-4.1 gera widgets interativos + imagens realistas (~2min) · Refinar: IA organiza o conteúdo em cards didáticos (~30s)
      </p>
    </div>
  );
}
