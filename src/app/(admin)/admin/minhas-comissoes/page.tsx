import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/server";
import { getCurrentUser } from "@/lib/actions/users";
import { Header } from "@/components/layout/header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import { Wallet, TrendingUp, Clock, CheckCircle2, XCircle, DollarSign } from "lucide-react";

export default async function InstructorCommissionsPage() {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const supabase = createAdminClient();

  // Resolve user UUID
  const { data: userRow } = await supabase
    .from("users")
    .select("id")
    .eq("clerk_id", userId)
    .single();

  if (!userRow) redirect("/dashboard");

  // Find partner record linked to this user
  const { data: partner } = await (supabase as any)
    .from("instructor_partners")
    .select("id, nome, comissao_padrao, asaas_wallet_id")
    .eq("user_id", userRow.id)
    .eq("ativo", true)
    .maybeSingle();

  let commissions: any[] = [];
  const stats = { total: 0, pendente: 0, pago: 0, cancelado: 0 };

  if (partner) {
    const { data } = await (supabase as any)
      .from("partner_commissions")
      .select("*, courses(titulo)")
      .eq("partner_id", partner.id)
      .order("created_at", { ascending: false })
      .limit(100);

    commissions = data ?? [];

    for (const c of commissions) {
      stats.total += c.valor_comissao ?? 0;
      if (c.status === "pendente") stats.pendente += c.valor_comissao ?? 0;
      if (c.status === "pago") stats.pago += c.valor_comissao ?? 0;
      if (c.status === "cancelado") stats.cancelado += c.valor_comissao ?? 0;
    }
  }

  return (
    <div className="animate-fade-in">
      <Header
        title="Minhas Comissões"
        subtitle={partner ? `Comissão padrão: ${partner.comissao_padrao}%` : "Perfil de parceiro não vinculado"}
        role="instrutor"
      />

      <div className="p-4 sm:p-6 space-y-6">
        {!partner ? (
          <Card>
            <CardContent className="py-16 text-center">
              <Wallet size={48} className="mx-auto text-muted-light mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Perfil de parceiro não vinculado</h3>
              <p className="text-muted-light text-sm">Solicite ao administrador que vincule sua conta ao sistema de comissões.</p>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <DollarSign size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-light">Total Ganho</p>
                    <p className="text-lg font-bold text-foreground">{formatCurrency(stats.total)}</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-light">Pendente</p>
                    <p className="text-lg font-bold text-foreground">{formatCurrency(stats.pendente)}</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-light">Pago</p>
                    <p className="text-lg font-bold text-foreground">{formatCurrency(stats.pago)}</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                    <TrendingUp size={20} className="text-red-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-light">Vendas</p>
                    <p className="text-lg font-bold text-foreground">{commissions.length}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Wallet Info */}
            {partner.asaas_wallet_id && (
              <div className="bg-surface-2 rounded-xl border border-border p-4 text-sm text-muted-light">
                <span className="font-medium text-foreground">Wallet Asaas: </span>
                <code className="bg-surface-3 px-2 py-0.5 rounded text-xs">{partner.asaas_wallet_id}</code>
              </div>
            )}

            {/* Lista de comissões */}
            {commissions.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <Wallet size={40} className="mx-auto text-muted-light mb-3" />
                  <p className="text-muted-light">Nenhuma comissão registrada ainda.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-muted-light uppercase tracking-wider">Histórico de Comissões</h3>
                {commissions.map((c: any) => (
                  <Card key={c.id}>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground text-sm truncate">
                          {c.courses?.titulo ?? "Curso"}
                        </p>
                        <p className="text-xs text-muted-light">
                          Venda: {formatCurrency(c.valor_venda ?? 0)} · Líquido: {formatCurrency(c.valor_liquido ?? 0)} · {c.comissao_percentual}%
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-bold text-emerald-400 text-sm">{formatCurrency(c.valor_comissao ?? 0)}</p>
                        <Badge
                          variant={c.status === "pago" ? "success" : c.status === "pendente" ? "warning" : "danger"}
                          className="text-[10px] mt-1"
                        >
                          {c.status === "pago" ? "Pago" : c.status === "pendente" ? "Pendente" : "Cancelado"}
                        </Badge>
                      </div>
                      <span className="text-xs text-muted-light shrink-0 hidden sm:block">
                        {new Date(c.created_at).toLocaleDateString("pt-BR")}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
