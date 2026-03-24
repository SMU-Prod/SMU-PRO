"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CheckCircle, Loader2, Play, QrCode, FileText, ChevronDown, CreditCard, User } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface Course {
  id: string;
  slug: string;
  titulo: string;
  tipo: string;
  preco: number | null;
}

interface Props {
  course: Course;
  userId: string;
  isMIT?: boolean;
}

type BillingType = "PIX" | "BOLETO" | "CREDIT_CARD";

export function EnrollButton({ course, userId, isMIT = false }: Props) {
  const [loading, setLoading] = useState(false);
  const [enrolled, setEnrolled] = useState(false);
  const [showMethods, setShowMethods] = useState(false);
  const [showCpfModal, setShowCpfModal] = useState(false);
  const [cpf, setCpf] = useState("");
  const [cpfError, setCpfError] = useState("");
  const [pendingBillingType, setPendingBillingType] = useState<BillingType | null>(null);
  const router = useRouter();

  // MIT (projeto cultural) tem acesso gratuito a todos os cursos
  const isFree = course.tipo === "free" || isMIT;

  // Format CPF as user types: 000.000.000-00
  function handleCpfChange(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    let formatted = digits;
    if (digits.length > 3) formatted = digits.slice(0, 3) + "." + digits.slice(3);
    if (digits.length > 6) formatted = formatted.slice(0, 7) + "." + digits.slice(6);
    if (digits.length > 9) formatted = formatted.slice(0, 11) + "-" + digits.slice(9);
    setCpf(formatted);
    setCpfError("");
  }

  function validateCpf(value: string): boolean {
    const digits = value.replace(/\D/g, "");
    if (digits.length !== 11) return false;
    // Basic check: not all same digit
    if (/^(\d)\1{10}$/.test(digits)) return false;
    return true;
  }

  async function handleFreeEnroll() {
    setLoading(true);
    try {
      const res = await fetch("/api/enrollments/free", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId: course.id }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Erro ao se inscrever");
      }
      setEnrolled(true);
      setTimeout(() => {
        router.push(`/dashboard/cursos/${course.slug}`);
        router.refresh();
      }, 800);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Erro ao processar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  async function handlePaidEnroll(billingType: BillingType, cpfValue?: string) {
    setLoading(true);
    setShowMethods(false);
    try {
      const body: Record<string, string> = { courseId: course.id, billingType };
      if (cpfValue) body.cpf = cpfValue;

      const res = await fetch("/api/payments/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();

      // Server says CPF is needed → show modal
      if (!res.ok && data.needsCpf) {
        setPendingBillingType(billingType);
        setShowCpfModal(true);
        setLoading(false);
        return;
      }

      if (!res.ok) throw new Error(data.error ?? "Erro ao iniciar pagamento");

      router.push(`/pagamento/${data.paymentId}`);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Erro ao processar. Tente novamente.");
      setLoading(false);
    }
  }

  function handleCpfSubmit() {
    if (!validateCpf(cpf)) {
      setCpfError("CPF inválido. Verifique e tente novamente.");
      return;
    }
    setShowCpfModal(false);
    if (pendingBillingType) {
      handlePaidEnroll(pendingBillingType, cpf.replace(/\D/g, ""));
    }
  }

  if (enrolled) {
    return (
      <Button size="lg" variant="success" className="w-full gap-2" disabled>
        <CheckCircle size={18} />
        Inscrito! Redirecionando...
      </Button>
    );
  }

  if (isFree) {
    return (
      <Button
        size="lg"
        className="w-full gap-2"
        onClick={handleFreeEnroll}
        disabled={loading}
      >
        {loading ? <Loader2 size={18} className="animate-spin" /> : <Play size={18} />}
        {loading ? "Processando..." : isMIT ? "Inscrever-se — Projeto MIT" : "Inscrever-se grátis"}
      </Button>
    );
  }

  // Pago — seletor de método de pagamento
  return (
    <div className="space-y-2">
      {/* CPF Modal */}
      {showCpfModal && (
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <User size={16} className="text-amber-400" />
            Informe seu CPF para continuar
          </div>
          <p className="text-xs text-muted-light">
            Obrigatório para pagamentos via PIX, Boleto ou Cartão. Será salvo no seu perfil.
          </p>
          <input
            type="text"
            value={cpf}
            onChange={(e) => handleCpfChange(e.target.value)}
            placeholder="000.000.000-00"
            maxLength={14}
            className="w-full rounded-xl bg-surface-2 border border-border-strong px-4 py-2.5 text-sm text-foreground placeholder:text-muted-light focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
            onKeyDown={(e) => e.key === "Enter" && handleCpfSubmit()}
            autoFocus
          />
          {cpfError && <p className="text-red-500 text-xs">{cpfError}</p>}
          <div className="flex gap-2">
            <Button size="sm" onClick={handleCpfSubmit} className="flex-1 gap-1" disabled={loading}>
              {loading ? <Loader2 size={14} className="animate-spin" /> : null}
              Continuar
            </Button>
            <Button size="sm" variant="ghost" onClick={() => { setShowCpfModal(false); setPendingBillingType(null); }}>
              Cancelar
            </Button>
          </div>
        </div>
      )}

      {showMethods && !showCpfModal ? (
        <>
          <p className="text-center text-sm text-muted mb-3">Escolha a forma de pagamento:</p>

          <button
            onClick={() => handlePaidEnroll("PIX")}
            disabled={loading}
            className="w-full flex items-center gap-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 text-left hover:bg-emerald-500/15 transition-colors disabled:opacity-50"
          >
            <QrCode size={20} className="text-emerald-400 shrink-0" />
            <div>
              <div className="font-semibold text-sm text-foreground">PIX</div>
              <div className="text-xs text-muted-light">Confirmação instantânea</div>
            </div>
            {loading ? (
              <Loader2 size={16} className="ml-auto animate-spin text-muted-light" />
            ) : (
              <span className="ml-auto font-bold text-sm text-foreground">{formatCurrency(course.preco ?? 0)}</span>
            )}
          </button>

          <button
            onClick={() => handlePaidEnroll("BOLETO")}
            disabled={loading}
            className="w-full flex items-center gap-3 rounded-xl bg-blue-500/10 border border-blue-500/20 px-4 py-3 text-left hover:bg-blue-500/15 transition-colors disabled:opacity-50"
          >
            <FileText size={20} className="text-blue-400 shrink-0" />
            <div>
              <div className="font-semibold text-sm text-foreground">Boleto Bancário</div>
              <div className="text-xs text-muted-light">Prazo de até 3 dias úteis</div>
            </div>
            {loading ? (
              <Loader2 size={16} className="ml-auto animate-spin text-muted-light" />
            ) : (
              <span className="ml-auto font-bold text-sm text-foreground">{formatCurrency(course.preco ?? 0)}</span>
            )}
          </button>

          <button
            onClick={() => handlePaidEnroll("CREDIT_CARD")}
            disabled={loading}
            className="w-full flex items-center gap-3 rounded-xl bg-purple-500/10 border border-purple-500/20 px-4 py-3 text-left hover:bg-purple-500/15 transition-colors disabled:opacity-50"
          >
            <CreditCard size={20} className="text-purple-400 shrink-0" />
            <div>
              <div className="font-semibold text-sm text-foreground">Cartão de Crédito</div>
              <div className="text-xs text-muted-light">Acesso liberado imediatamente</div>
            </div>
            {loading ? (
              <Loader2 size={16} className="ml-auto animate-spin text-muted-light" />
            ) : (
              <span className="ml-auto font-bold text-sm text-foreground">{formatCurrency(course.preco ?? 0)}</span>
            )}
          </button>

          <Button
            variant="ghost"
            size="sm"
            className="w-full"
            onClick={() => setShowMethods(false)}
            disabled={loading}
          >
            Cancelar
          </Button>
        </>
      ) : !showCpfModal ? (
        <Button
          size="lg"
          className="w-full gap-2"
          onClick={() => setShowMethods(true)}
          disabled={loading}
        >
          {loading && <Loader2 size={18} className="animate-spin" />}
          {loading ? "Processando..." : (
            <span className="flex items-center gap-2 w-full justify-center">
              Comprar — {formatCurrency(course.preco ?? 0)}
              <ChevronDown size={16} />
            </span>
          )}
        </Button>
      ) : null}
    </div>
  );
}
