"use client";

import { useState } from "react";
import { Sparkles, Loader2, ChevronDown, ChevronUp, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AiExplainerProps {
  lessonId: string;
  titulo: string;
  conteudo: string;
}

export function AiExplainer({ lessonId, titulo, conteudo }: AiExplainerProps) {
  const [explanation, setExplanation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // TTS state for the explanation itself
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioLoading, setAudioLoading] = useState(false);

  const hasContent = conteudo && conteudo.length > 50;

  async function generateExplanation() {
    if (loading) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/ai-explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId, titulo, conteudo }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erro ao gerar explicação");
      }

      const data = await res.json();
      setExplanation(data.explanation);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function generateExplanationAudio() {
    if (!explanation || audioLoading) return;
    setAudioLoading(true);

    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lessonId: `ai-${lessonId}`,
          text: explanation,
        }),
      });

      if (!res.ok) throw new Error("Erro ao gerar áudio");

      const contentType = res.headers.get("Content-Type");
      if (contentType?.includes("audio/")) {
        const blob = await res.blob();
        setAudioUrl(URL.createObjectURL(blob));
      } else {
        const data = await res.json();
        setAudioUrl(data.audioUrl);
      }
    } catch {
      // Silently fail audio generation
    } finally {
      setAudioLoading(false);
    }
  }

  if (!hasContent) return null;

  // Initial state
  if (!explanation) {
    return (
      <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-500/5 border border-amber-500/20">
        <Button
          size="sm"
          onClick={generateExplanation}
          disabled={loading}
          className="gap-2"
        >
          {loading ? (
            <Loader2 size={14} className="animate-spin" />
          ) : (
            <Sparkles size={14} />
          )}
          {loading ? "Analisando conteúdo..." : "Explicação IA"}
        </Button>
        <span className="text-xs text-muted-light">
          IA destrincha o conteúdo com dicas práticas do mercado
        </span>
        {error && <span className="text-xs text-red-400">{error}</span>}
      </div>
    );
  }

  // Explanation loaded
  return (
    <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-amber-500/10 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-amber-500" />
          <span className="text-sm font-medium text-foreground">Explicação IA</span>
          <span className="text-[10px] text-muted-light px-1.5 py-0.5 rounded-full bg-surface-3">
            Claude
          </span>
        </div>
        {expanded ? <ChevronUp size={14} className="text-muted" /> : <ChevronDown size={14} className="text-muted" />}
      </button>

      {/* Content */}
      {expanded && (
        <div className="px-4 pb-4 space-y-3">
          <div className="text-sm text-muted leading-relaxed whitespace-pre-line">
            {explanation}
          </div>

          {/* Listen to explanation */}
          <div className="flex items-center gap-2 pt-2 border-t border-amber-500/10">
            {audioUrl ? (
              <audio controls src={audioUrl} className="h-8 w-full max-w-xs" />
            ) : (
              <button
                onClick={generateExplanationAudio}
                disabled={audioLoading}
                className="flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors"
              >
                {audioLoading ? (
                  <Loader2 size={12} className="animate-spin" />
                ) : (
                  <Headphones size={12} />
                )}
                {audioLoading ? "Gerando..." : "Ouvir explicação"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
