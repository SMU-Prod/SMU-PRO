"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";

export function GenerateNRCertsButton() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ generated: number; errors: number; message: string } | null>(null);

  const handleGenerate = async () => {
    if (!confirm("Isso vai gerar certificados NR retroativos para todas as aulas já concluídas. Continuar?")) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/admin/generate-nr-certs", { method: "POST" });
      const data = await res.json();
      setResult(data);
    } catch {
      setResult({ generated: 0, errors: 1, message: "Erro de conexão" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        size="sm"
        className="gap-1.5"
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? <Loader2 size={14} className="animate-spin" /> : <RefreshCw size={14} />}
        {loading ? "Gerando..." : "Gerar Certificados NR"}
      </Button>

      {result && (
        <span className={`text-xs flex items-center gap-1 ${result.errors > 0 ? "text-amber-500" : "text-emerald-500"}`}>
          {result.errors > 0 ? <AlertTriangle size={12} /> : <CheckCircle2 size={12} />}
          {result.message}
        </span>
      )}
    </div>
  );
}
