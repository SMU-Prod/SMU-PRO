import { requireAdminRole } from "@/lib/actions/users";
import { createAdminClient } from "@/lib/supabase/server";
import { Header } from "@/components/layout/header";
import { formatCurrency } from "@/lib/utils";
import { RefundButton } from "@/components/admin/refund-button";
import { DollarSign, Clock, CheckCircle, XCircle } from "lucide-react";

const STATUS_STYLES: Record<string, { label: string; className: string }> = {
  ativo: { label: "Ativo", className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  pendente: { label: "Pendente", className: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
  cancelado: { label: "Cancelado", className: "bg-red-500/10 text-red-400 border-red-500/20" },
  expirado: { label: "Expirado", className: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20" },
};

export default async function AdminPagamentosPage() {
  await requireAdminRole();
  const supabase = createAdminClient();

  // Fetch paid enrollments with user and course data
  const { data: enrollments } = await (supabase as any)
    .from("enrollments")
    .select("id, status, tipo_acesso, payment_id, payment_provider, valor_pago, created_at, users(nome, email), courses(titulo)")
    .not("payment_id", "is", null)
    .order("created_at", { ascending: false })
    .limit(200);

  const rows = (enrollments ?? []) as any[];

  // KPIs
  const totalRevenue = rows.filter((r) => r.status === "ativo").reduce((sum: number, r: any) => sum + (r.valor_pago ?? 0), 0);
  const pendingCount = rows.filter((r) => r.status === "pendente").length;
  const activeCount = rows.filter((r) => r.status === "ativo").length;
  const refundedCount = rows.filter((r) => r.status === "cancelado").length;

  return (
    <div className="animate-fade-in">
      <Header title="Pagamentos" subtitle="Todas as cobranças e matrículas pagas" />

      <div className="p-4 sm:p-6 space-y-6">
        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <KpiCard icon={<DollarSign size={20} className="text-emerald-400" />} label="Receita confirmada" value={formatCurrency(totalRevenue)} bg="bg-emerald-500/10" />
          <KpiCard icon={<Clock size={20} className="text-amber-400" />} label="Pendentes" value={String(pendingCount)} bg="bg-amber-500/10" />
          <KpiCard icon={<CheckCircle size={20} className="text-blue-400" />} label="Matrículas pagas ativas" value={String(activeCount)} bg="bg-blue-500/10" />
          <KpiCard icon={<XCircle size={20} className="text-red-400" />} label="Reembolsos" value={String(refundedCount)} bg="bg-red-500/10" />
        </div>

        {/* Table */}
        <div className="rounded-2xl bg-surface border border-border overflow-hidden">
          {/* Mobile */}
          <div className="md:hidden divide-y divide-border/50">
            {rows.length === 0 && <p className="px-5 py-8 text-center text-muted-light text-sm">Nenhum pagamento encontrado.</p>}
            {rows.map((row: any) => {
              const style = STATUS_STYLES[row.status] ?? STATUS_STYLES.pendente;
              return (
                <div key={row.id} className="px-4 py-3 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-foreground truncate">{row.users?.nome ?? "—"}</p>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border ${style.className}`}>{style.label}</span>
                  </div>
                  <p className="text-xs text-muted-light truncate">{row.courses?.titulo ?? "—"}</p>
                  <div className="flex items-center justify-between text-xs text-muted-light">
                    <span>{formatCurrency(row.valor_pago ?? 0)}</span>
                    <span>{new Date(row.created_at).toLocaleDateString("pt-BR")}</span>
                  </div>
                  {row.status === "ativo" && row.payment_id && (
                    <RefundButton enrollmentId={row.id} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/50 bg-surface-2">
                  <th className="px-5 py-3 text-left text-xs font-semibold text-muted-light uppercase tracking-wider">Aluno</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-muted-light uppercase tracking-wider">Curso</th>
                  <th className="px-5 py-3 text-right text-xs font-semibold text-muted-light uppercase tracking-wider">Valor</th>
                  <th className="px-5 py-3 text-center text-xs font-semibold text-muted-light uppercase tracking-wider">Status</th>
                  <th className="px-5 py-3 text-right text-xs font-semibold text-muted-light uppercase tracking-wider">Data</th>
                  <th className="px-5 py-3 text-right text-xs font-semibold text-muted-light uppercase tracking-wider">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {rows.length === 0 && (
                  <tr><td colSpan={6} className="px-5 py-8 text-center text-muted-light">Nenhum pagamento encontrado.</td></tr>
                )}
                {rows.map((row: any) => {
                  const style = STATUS_STYLES[row.status] ?? STATUS_STYLES.pendente;
                  return (
                    <tr key={row.id} className="hover:bg-surface-3 transition-colors">
                      <td className="px-5 py-3">
                        <p className="font-medium text-foreground">{row.users?.nome ?? "—"}</p>
                        <p className="text-xs text-muted-light">{row.users?.email ?? ""}</p>
                      </td>
                      <td className="px-5 py-3 text-muted">{row.courses?.titulo ?? "—"}</td>
                      <td className="px-5 py-3 text-right font-medium text-foreground">{formatCurrency(row.valor_pago ?? 0)}</td>
                      <td className="px-5 py-3 text-center">
                        <span className={`text-[10px] px-2 py-0.5 rounded-full border ${style.className}`}>{style.label}</span>
                      </td>
                      <td className="px-5 py-3 text-right text-muted-light text-xs">{new Date(row.created_at).toLocaleDateString("pt-BR")}</td>
                      <td className="px-5 py-3 text-right">
                        {row.status === "ativo" && row.payment_id ? (
                          <RefundButton enrollmentId={row.id} />
                        ) : (
                          <span className="text-xs text-muted-light">—</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function KpiCard({ icon, label, value, bg }: { icon: React.ReactNode; label: string; value: string; bg: string }) {
  return (
    <div className="rounded-2xl bg-surface border border-border p-3 sm:p-5">
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <div className={`h-8 w-8 sm:h-9 sm:w-9 rounded-xl ${bg} flex items-center justify-center shrink-0`}>{icon}</div>
        <span className="text-xs sm:text-sm text-muted-light truncate">{label}</span>
      </div>
      <div className="text-xl sm:text-2xl font-black text-foreground">{value}</div>
    </div>
  );
}
