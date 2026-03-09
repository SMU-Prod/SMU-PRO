"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Dashboard Error]", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
      <AlertTriangle size={48} className="text-amber-400 mb-4" />
      <h2 className="text-lg font-semibold text-foreground mb-2">Algo deu errado</h2>
      <p className="text-sm text-muted mb-6 max-w-md">
        Ocorreu um erro inesperado. Tente novamente ou entre em contato com o suporte.
      </p>
      <Button onClick={reset}>Tentar novamente</Button>
    </div>
  );
}
