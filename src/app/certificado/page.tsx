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
    <div className="min-h-screen bg-[#0A0A0F] flex flex-col items-center justify-center p-6">
      {/* Header */}
      <div className="mb-10 text-center">
        <Link href="/" className="inline-flex items-center gap-2 mb-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#6C3CE1] to-[#C084FC]">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-bold text-[#E8E8F0]">SMU PRO</span>
        </Link>
        <div className="flex items-center justify-center gap-2 text-[#6C3CE1] mb-4">
          <Shield size={20} />
          <span className="text-sm font-semibold uppercase tracking-widest">Verificação de Certificado</span>
        </div>
        <h1 className="text-3xl font-bold text-[#E8E8F0] mb-2">Verificar Autenticidade</h1>
        <p className="text-[#8888A8] max-w-sm mx-auto text-sm leading-relaxed">
          Digite o código de verificação impresso no certificado para confirmar sua autenticidade.
        </p>
      </div>

      {/* Form */}
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-[#2A2A38] bg-[#111118] p-8">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-2xl bg-[#6C3CE1]/20 border border-[#6C3CE1]/30 flex items-center justify-center">
              <Award size={32} className="text-[#6C3CE1]" />
            </div>
          </div>

          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label className="block text-xs text-[#8888A8] uppercase tracking-widest mb-2">
                Código de Verificação
              </label>
              <Input
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                placeholder="Ex: a1b2c3d4-e5f6-..."
                className="bg-[#16161F] border-[#2A2A38] text-[#E8E8F0] placeholder:text-[#44445A] focus:border-[#6C3CE1] font-mono"
                autoFocus
              />
              <p className="text-xs text-[#44445A] mt-2">
                O código está no rodapé do certificado, abaixo do QR Code.
              </p>
            </div>
            <Button type="submit" className="w-full gap-2" disabled={!codigo.trim()}>
              <Search size={16} />
              Verificar Certificado
            </Button>
          </form>
        </div>

        <p className="text-center text-[#44445A] text-xs mt-6">
          Certificados emitidos pela{" "}
          <Link href="/" className="text-[#6C3CE1] hover:underline">SMU PRO</Link>{" "}
          são verificáveis publicamente e possuem QR Code único.
        </p>
      </div>
    </div>
  );
}
