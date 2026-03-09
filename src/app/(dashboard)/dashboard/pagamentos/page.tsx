import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/server";
import { Header } from "@/components/layout/header";
import { formatCurrency } from "@/lib/utils";
import { DollarSign, CheckCircle } from "lucide-react";

const STATUS_STYLES: Record<string, { label: string; className: string }> = {
  ativo: { label: "Confirmado", className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  pendente: { label: "Pendente", className: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
  cancelado: { label: "Reembolsado", className: "bg-red-500/10 text-red-400 border-red-500/20" },
  expirado: { label: "Expirado", className: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20" },
};

export default async function PagamentosPage() {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  const supabase = createAdminClient();
  const { data: userRow } = await supabase.from("users").select("id").eq("clerk_id", userId).single();
  if (!userRow) redirect("/login");

  const { data: enrollments } = await (supabase as any)
    .from("enrollments")
    .select("id, status, tipo_acesso, payment_id, payment_provider, valor_pago, created_at, courses(titulo, slug)")
    .eq("user_id", userRow.id)
    .not("payment_id", "is", null)
    .order("created_at", { ascending: false });

  const rows = (enrollments ?? []) as any[];
  const totalPaid = rows.filter((r) => r.status === "ativo").reduce((sum: number, r: any) => sum + (r.valor_pago ?? 0), 0);

  return (
    <div className="animate-fade-in">
      <Header title="Pagamentos" subtitle="Histórico de pagamentos e matrículas" />

      <div className="p-4 sm:p-6 space-y-6 max-w-3xl">
        {/* Summary */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-surface border border-border p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-9 w-9 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <DollarSign size={20} className="text-emerald-400" />
              </div>
              <span className="text-sm text-muted-light">Total investido</span>
            </div>
            <div className="text-2xl font-black text-foreground">{formatCurrency(totalPaid)}</div>
          </div>
          <div className="rounded-2xl bg-surface border border-border p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-9 w-9 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <CheckCircle size={20} className="text-amber-400" />
              </div>
              <span className="text-sm text-muted-light">Cursos adquiridos</span>
            </div>
            <div className="text-2xl font-black text-foreground">{rows.filter((r) => r.status === "ativo").length}</div>
          </div>
        </div>

        {/* List */}
        <div className="rounded-2xl bg-surface border border-border overflow-hidden divide-y divide-border/50">
          {rows.length === 0 && (
            <div className="px-5 py-12 text-center">
              <DollarSign size={32} className="mx-auto mb-3 text-muted-light" />
              <p className="text-muted-light text-sm">Você ainda não realizou nenhum pagamento.</p>
            </div>
          )}
          {rows.map((row: any) => {
            const style = STATUS_STYLES[row.status] ?? STATUS_STYLES.pendente;
            return (
              <div key={row.id} className="px-5 py-4 flex items-center gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{row.courses?.titulo ?? "Curso removido"}</p>
                  <p className="text-xs text-muted-light mt-0.5">
                    {new Date(row.created_at).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                  </p>
                </div>
                <span className="font-semibold text-sm text-foreground shrink-0">{formatCurrency(row.valor_pago ?? 0)}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full border shrink-0 ${style.className}`}>{style.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
