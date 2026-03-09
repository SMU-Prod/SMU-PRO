"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CheckCircle, Loader2, Play, QrCode, FileText, ChevronDown, CreditCard } from "lucide-react";
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
}

type BillingType = "PIX" | "BOLETO" | "CREDIT_CARD";

export function EnrollButton({ course, userId }: Props) {
  const [loading, setLoading] = useState(false);
  const [enrolled, setEnrolled] = useState(false);
  const [showMethods, setShowMethods] = useState(false);
  const router = useRouter();

  const isFree = course.tipo === "free";

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

  async function handlePaidEnroll(billingType: BillingType) {
    setLoading(true);
    setShowMethods(false);
    try {
      const res = await fetch("/api/payments/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId: course.id, billingType }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Erro ao iniciar pagamento");

      router.push(`/pagamento/${data.paymentId}`);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Erro ao processar. Tente novamente.");
      setLoading(false);
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
        {loading ? "Processando..." : "Inscrever-se grátis"}
      </Button>
    );
  }

  // Pago — seletor de método de pagamento
  return (
    <div className="space-y-2">
      {showMethods ? (
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
      ) : (
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
      )}
    </div>
  );
}
