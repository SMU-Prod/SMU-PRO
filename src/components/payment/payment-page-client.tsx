"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import {
  CheckCircle,
  Copy,
  ExternalLink,
  Loader2,
  RefreshCw,
  Clock,
  QrCode,
  FileText,
} from "lucide-react";

interface Props {
  paymentId: string;
  billingType: string;
  status: string;
  value: number;
  courseTitle: string;
  courseSlug?: string;
  pixData: { qrCodeImage: string; copyPaste: string; expiresAt: string } | null;
  boletoData: { identificationField: string; bankSlipUrl: string } | null;
  invoiceUrl?: string;
}

const POLL_INTERVAL = 5000; // 5 segundos
const MAX_POLLS = 120; // 10 minutos

export function PaymentPageClient({
  paymentId,
  billingType,
  status: initialStatus,
  value,
  courseTitle,
  courseSlug,
  pixData,
  boletoData,
  invoiceUrl,
}: Props) {
  const router = useRouter();
  const [status, setStatus] = useState(initialStatus);
  const [confirmed, setConfirmed] = useState(
    ["RECEIVED", "CONFIRMED"].includes(initialStatus)
  );
  const [polling, setPolling] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);
  const [copiedBoleto, setCopiedBoleto] = useState(false);
  const [pollCount, setPollCount] = useState(0);

  const checkStatus = useCallback(async () => {
    if (confirmed || pollCount >= MAX_POLLS) return;

    try {
      const res = await fetch(`/api/payments/status/${paymentId}`);
      if (!res.ok) return;
      const data = await res.json();
      setStatus(data.status);
      if (data.confirmed) {
        setConfirmed(true);
        setPolling(false);
      }
    } catch {
      // silencia erros de polling
    }
    setPollCount((c) => c + 1);
  }, [paymentId, confirmed, pollCount]);

  // Inicia polling automático para PIX (pagamento quase instantâneo)
  useEffect(() => {
    if (confirmed || billingType !== "PIX") return;

    setPolling(true);
    const interval = setInterval(checkStatus, POLL_INTERVAL);
    return () => clearInterval(interval);
  }, [confirmed, billingType, checkStatus]);

  // Redireciona ao confirmar
  useEffect(() => {
    if (confirmed && courseSlug) {
      setTimeout(() => {
        router.push(`/dashboard/cursos/${courseSlug}`);
        router.refresh();
      }, 2500);
    }
  }, [confirmed, courseSlug, router]);

  function copyToClipboard(text: string, type: "pix" | "boleto") {
    navigator.clipboard.writeText(text);
    if (type === "pix") {
      setCopiedPix(true);
      setTimeout(() => setCopiedPix(false), 3000);
    } else {
      setCopiedBoleto(true);
      setTimeout(() => setCopiedBoleto(false), 3000);
    }
  }

  if (confirmed) {
    return (
      <div className="min-h-screen bg-smu-black flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
            <CheckCircle size={40} className="text-green-400" />
          </div>
          <h1 className="text-3xl font-black mb-3">Pagamento confirmado!</h1>
          <p className="text-white/50 mb-2">{courseTitle}</p>
          <p className="text-white/30 text-sm mb-8">
            Você já tem acesso completo ao curso. Redirecionando...
          </p>
          {courseSlug && (
            <Link href={`/dashboard/cursos/${courseSlug}`}>
              <Button size="lg" className="gap-2">
                Começar a estudar agora
              </Button>
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-smu-black text-white">
      {/* Nav */}
      <nav className="border-b border-white/5 bg-smu-black/80">
        <div className="mx-auto flex h-16 max-w-4xl items-center px-6">
          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="gradient-text">SMU</span>
            <span className="text-white/60 text-sm font-normal ml-1">PRO</span>
          </Link>
        </div>
      </nav>

      <div className="mx-auto max-w-2xl px-6 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 px-4 py-1.5 text-sm text-yellow-400 mb-4">
            <Clock size={14} />
            Aguardando pagamento
          </div>
          <h1 className="text-3xl font-black mb-2">{courseTitle}</h1>
          <p className="text-white/40">Valor: <strong className="text-white">{formatCurrency(value)}</strong></p>
        </div>

        {/* PIX */}
        {billingType === "PIX" && pixData && (
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <div className="flex items-center gap-2 mb-6">
              <QrCode size={20} className="text-amber-400" />
              <h2 className="font-bold">Pague com PIX</h2>
              {polling && (
                <span className="ml-auto flex items-center gap-1.5 text-xs text-white/30">
                  <Loader2 size={12} className="animate-spin" />
                  Verificando...
                </span>
              )}
            </div>

            <div className="flex flex-col items-center gap-6">
              {/* QR Code */}
              <div className="rounded-xl bg-white p-4 inline-block">
                <img
                  src={pixData.qrCodeImage}
                  alt="QR Code PIX"
                  className="h-48 w-48 object-contain"
                />
              </div>

              <div className="text-center text-sm text-white/40">
                <p>Abra o app do seu banco → PIX → QR Code</p>
                <p>ou use o código abaixo (Copia e Cola)</p>
              </div>

              {/* Copia e Cola */}
              <div className="w-full">
                <div className="flex gap-2">
                  <input
                    readOnly
                    value={pixData.copyPaste}
                    className="flex-1 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-xs text-white/60 font-mono truncate focus:outline-none"
                  />
                  <Button
                    variant="secondary"
                    size="sm"
                    className="gap-1.5 shrink-0"
                    onClick={() => copyToClipboard(pixData.copyPaste, "pix")}
                  >
                    {copiedPix ? (
                      <><CheckCircle size={14} className="text-green-400" /> Copiado!</>
                    ) : (
                      <><Copy size={14} /> Copiar</>
                    )}
                  </Button>
                </div>
              </div>

              <p className="text-xs text-white/25">
                Expira em: {new Date(pixData.expiresAt).toLocaleString("pt-BR")}
              </p>
            </div>

            {/* Manual check */}
            <div className="mt-6 pt-6 border-t border-white/5 flex justify-center">
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 text-white/40"
                onClick={checkStatus}
              >
                <RefreshCw size={14} />
                Verificar manualmente
              </Button>
            </div>
          </div>
        )}

        {/* BOLETO */}
        {billingType === "BOLETO" && boletoData && (
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <div className="flex items-center gap-2 mb-6">
              <FileText size={20} className="text-amber-400" />
              <h2 className="font-bold">Boleto Bancário</h2>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <p className="text-xs text-white/40 mb-2">Linha digitável</p>
                <p className="font-mono text-sm text-white break-all leading-relaxed">
                  {boletoData.identificationField || "Linha digitável disponível no PDF"}
                </p>
              </div>

              {boletoData.identificationField && (
                <Button
                  variant="secondary"
                  size="sm"
                  className="gap-2"
                  onClick={() => copyToClipboard(boletoData!.identificationField, "boleto")}
                >
                  {copiedBoleto ? (
                    <><CheckCircle size={14} className="text-green-400" /> Copiado!</>
                  ) : (
                    <><Copy size={14} /> Copiar linha digitável</>
                  )}
                </Button>
              )}

              <div className="flex gap-3 pt-2">
                <a href={boletoData.bankSlipUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="lg" className="w-full gap-2">
                    <ExternalLink size={16} />
                    Visualizar / Imprimir boleto
                  </Button>
                </a>
              </div>

              <p className="text-xs text-white/30 text-center">
                O boleto pode levar até 3 dias úteis para compensar.
                Após o pagamento, seu acesso será liberado automaticamente.
              </p>
            </div>
          </div>
        )}

        {/* Invoice URL (fallback) */}
        {invoiceUrl && billingType !== "PIX" && billingType !== "BOLETO" && (
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
            <p className="text-white/50 mb-4">Finalize o pagamento na página segura do Asaas</p>
            <a href={invoiceUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                <ExternalLink size={16} />
                Ir para página de pagamento
              </Button>
            </a>
          </div>
        )}

        {/* Status atual */}
        <div className="mt-6 text-center text-xs text-white/25">
          Status atual: <strong className="text-white/40">{status}</strong>
          {" · "}
          <Link href="/dashboard" className="hover:text-white transition-colors">
            Voltar ao painel
          </Link>
        </div>
      </div>
    </div>
  );
}
