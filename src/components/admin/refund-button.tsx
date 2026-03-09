"use client";

import { useState } from "react";
import { Loader2, RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";

export function RefundButton({ enrollmentId, disabled }: { enrollmentId: string; disabled?: boolean }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleRefund() {
    if (!confirm("Tem certeza que deseja reembolsar este pagamento? O acesso do aluno será cancelado.")) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/payments/${enrollmentId}/refund`, { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      alert("Reembolso processado com sucesso!");
      router.refresh();
    } catch (err: any) {
      alert(err.message ?? "Erro ao processar reembolso");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleRefund}
      disabled={disabled || loading}
      className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      title="Reembolsar"
    >
      {loading ? <Loader2 size={14} className="animate-spin" /> : <RotateCcw size={14} />}
      Reembolsar
    </button>
  );
}
