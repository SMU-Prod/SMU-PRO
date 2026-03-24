"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, AlertTriangle, CheckCircle2, Info, Loader2, X, ExternalLink } from "lucide-react";

interface ValidationIssue {
  tipo: string;
  severidade: "alta" | "media" | "baixa";
  descricao: string;
  sugestao: string;
  trecho?: string;
}

interface ValidationResult {
  score: number;
  issues: ValidationIssue[];
  suggestions: string[];
  sources: string[];
  lastChecked: string;
}

export function ContentValidatorButton({ lessonId, courseCategoria }: { lessonId: string; courseCategoria?: string }) {
  const [result, setResult] = useState<ValidationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  const handleValidate = async () => {
    setLoading(true);
    setShowPanel(true);
    try {
      const res = await fetch("/api/content-validator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId, courseCategoria }),
      });
      if (res.ok) {
        setResult(await res.json());
      }
    } catch (err) {
      console.error("[Validator] Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const scoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-500";
    if (score >= 60) return "text-amber-500";
    return "text-red-500";
  };

  const scoreBg = (score: number) => {
    if (score >= 80) return "bg-emerald-500/10 border-emerald-500/20";
    if (score >= 60) return "bg-amber-500/10 border-amber-500/20";
    return "bg-red-500/10 border-red-500/20";
  };

  const severityIcon = (s: string) => {
    if (s === "alta") return <AlertTriangle size={12} className="text-red-400 shrink-0" />;
    if (s === "media") return <Info size={12} className="text-amber-400 shrink-0" />;
    return <CheckCircle2 size={12} className="text-blue-400 shrink-0" />;
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="gap-1.5 text-xs border-emerald-500/30 text-emerald-600 hover:bg-emerald-50"
        onClick={handleValidate}
        disabled={loading}
      >
        {loading ? <Loader2 size={12} className="animate-spin" /> : <ShieldCheck size={12} />}
        Validar Conteúdo
      </Button>

      {showPanel && (
        <div className="mt-3 rounded-lg border border-border bg-surface p-4 space-y-3 animate-fade-in">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-foreground flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-500" />
              Validação de Conteúdo
            </h4>
            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setShowPanel(false)}>
              <X size={12} />
            </Button>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-6">
              <Loader2 size={20} className="animate-spin text-muted-light" />
              <span className="ml-2 text-xs text-muted-light">Analisando conteúdo...</span>
            </div>
          ) : result ? (
            <>
              {/* Score */}
              <div className={`rounded-lg border p-3 flex items-center gap-3 ${scoreBg(result.score)}`}>
                <div className={`text-2xl font-black ${scoreColor(result.score)}`}>
                  {result.score}
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">
                    {result.score >= 80 ? "Conteúdo de qualidade" : result.score >= 60 ? "Pode melhorar" : "Precisa de atenção"}
                  </p>
                  <p className="text-[10px] text-muted-light">
                    {result.issues.length} problemas · {result.suggestions.length} sugestões
                  </p>
                </div>
              </div>

              {/* Issues */}
              {result.issues.length > 0 && (
                <div className="space-y-1.5">
                  <p className="text-[10px] font-bold text-muted-light uppercase tracking-wide">Problemas</p>
                  {result.issues.map((issue, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 rounded-md bg-surface-2 text-xs">
                      {severityIcon(issue.severidade)}
                      <div className="flex-1 min-w-0">
                        <p className="text-foreground font-medium">{issue.descricao}</p>
                        <p className="text-muted-light mt-0.5">{issue.sugestao}</p>
                      </div>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded-full shrink-0 ${
                        issue.severidade === "alta" ? "bg-red-500/10 text-red-400" :
                        issue.severidade === "media" ? "bg-amber-500/10 text-amber-400" :
                        "bg-blue-500/10 text-blue-400"
                      }`}>
                        {issue.severidade}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Suggestions */}
              {result.suggestions.length > 0 && (
                <div className="space-y-1.5">
                  <p className="text-[10px] font-bold text-muted-light uppercase tracking-wide">Sugestões</p>
                  {result.suggestions.map((s, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 rounded-md bg-surface-2 text-xs">
                      <CheckCircle2 size={12} className="text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-muted">{s}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Sources */}
              {result.sources.length > 0 && (
                <div>
                  <p className="text-[10px] font-bold text-muted-light uppercase tracking-wide mb-1">Fontes Oficiais de Referência</p>
                  <div className="flex flex-wrap gap-1">
                    {result.sources.map((src, i) => (
                      <span key={i} className="text-[9px] px-2 py-0.5 rounded-full bg-surface-2 border border-border text-muted-light">
                        {src}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <p className="text-[9px] text-muted-light">
                Verificado em {new Date(result.lastChecked).toLocaleString("pt-BR")}
              </p>
            </>
          ) : null}
        </div>
      )}
    </>
  );
}
