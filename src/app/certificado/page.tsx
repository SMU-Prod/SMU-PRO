"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Award, Search, Shield } from "lucide-react";
import Link from "next/link";

export default function CertificateVerifyPage() {
  const router = useRouter();
  const [codigo, setCodigo] = useState("");

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = codigo.trim();
    if (!trimmed) return;
    router.push(`/certificado/${trimmed}`);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      {/* Header */}
      <div className="mb-10 text-center">
        <Link href="/" className="inline-flex items-center gap-2 mb-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-300">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-bold text-foreground">SMU PRO</span>
        </Link>
        <div className="flex items-center justify-center gap-2 text-amber-400 mb-4">
          <Shield size={20} />
          <span className="text-sm font-semibold uppercase tracking-widest">Verificação de Certificado</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Verificar Autenticidade</h1>
        <p className="text-muted-light max-w-sm mx-auto text-sm leading-relaxed">
          Digite o código de verificação impresso no certificado para confirmar sua autenticidade.
        </p>
      </div>

      {/* Form */}
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-border bg-surface p-8">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
              <Award size={32} className="text-amber-400" />
            </div>
          </div>

          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label className="block text-xs text-muted-light uppercase tracking-widest mb-2">
                Código de Verificação
              </label>
              <Input
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                placeholder="Ex: a1b2c3d4-e5f6-..."
                className="bg-surface border-border text-foreground placeholder:text-muted-light focus:border-amber-500 font-mono"
                autoFocus
              />
              <p className="text-xs text-muted-light mt-2">
                O código está no rodapé do certificado, abaixo do QR Code.
              </p>
            </div>
            <Button type="submit" className="w-full gap-2" disabled={!codigo.trim()}>
              <Search size={16} />
              Verificar Certificado
            </Button>
          </form>
        </div>

        <p className="text-center text-muted-light text-xs mt-6">
          Certificados emitidos pela{" "}
          <Link href="/" className="text-amber-400 hover:underline">SMU PRO</Link>{" "}
          são verificáveis publicamente e possuem QR Code único.
        </p>
      </div>
    </div>
  );
}
