"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function CertificadoError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Certificado Error]", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <AlertTriangle size={48} className="text-amber-400 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-foreground mb-2">Erro ao carregar certificado</h2>
        <p className="text-sm text-muted mb-6">
          Ocorreu um erro ao carregar este certificado. Verifique se o link está correto e tente novamente.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={reset}>Tentar novamente</Button>
          <Link href="/">
            <Button variant="outline">Voltar ao início</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
