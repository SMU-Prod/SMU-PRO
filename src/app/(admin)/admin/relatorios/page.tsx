import { requireAdminRole } from "@/lib/actions/users";
import { createAdminClient } from "@/lib/supabase/server";
import { Header } from "@/components/layout/header";
import { formatCurrency, getLevelLabel } from "@/lib/utils";
import { TrendingUp, Users, BookOpen, Award, DollarSign, BarChart3 } from "lucide-react";

export default async function AdminRelatoriosPage() {
  await requireAdminRole();
  const supabase = createAdminClient();

  // Métricas gerais
  const { data: metrics } = await supabase
    .from("admin_dashboard_metrics")
    .select("*")
    .single();

  // Receita por mês (últimos 6 meses)
  const { data: payments } = await supabase
    .from("enrollments")
    .select("valor_pago, created_at, status")
    .eq("status", "ativo")
    .not("valor_pago", "is", null)
    .gte("created_at", new Date(Date.now() - 180 * 24 * 60 * 60 * 1000).toISOString())
    .order("created_at", { ascending: true });

  // Agrupar por mês
  const receitaPorMes: Record<string, number> = {};
  for (const p of payments ?? []) {
    const mes = new Date(p.created_at).toLocaleDateString("pt-BR", { month: "short", year: "2-digit" });
    receitaPorMes[mes] = (receitaPorMes[mes] ?? 0) + (p.valor_pago ?? 0);
  }

  // Distribuição por nível
  const { data: coursesByLevel } = await supabase
    .from("courses")
    .select("nivel")
    .eq("ativo", true);

  const nivelCount: Record<string, number> = {};
  for (const c of coursesByLevel ?? []) {
    nivelCount[c.nivel] = (nivelCount[c.nivel] ?? 0) + 1;
  }

  // Top cursos por alunos
  const { data: topCursos } = await (supabase as any)
    .from("admin_course_stats")
    .select("titulo, total_alunos, total_certificados, progresso_medio, nivel, avaliacao_media")
    .order("total_alunos", { ascending: false })
    .limit(10);

  // Inscrições por mês (últimos 6 meses)
  const { data: enrollmentsByMonth } = await supabase
    .from("enrollments")
    .select("created_at")
    .gte("created_at", new Date(Date.now() - 180 * 24 * 60 * 60 * 1000).toISOString());

  const inscricoesPorMes: Record<string, number> = {};
  for (const e of enrollmentsByMonth ?? []) {
    const mes = new Date(e.created_at).toLocaleDateString("pt-BR", { month: "short", year: "2-digit" });
    inscricoesPorMes[mes] = (inscricoesPorMes[mes] ?? 0) + 1;
  }

  // Payment method breakdown
  const { data: paymentMethods } = await supabase
    .from("enrollments")
    .select("payment_provider, valor_pago, tipo_acesso")
    .eq("status", "ativo")
    .not("valor_pago", "is", null);

  const methodStats: Record<string, { count: number; total: number }> = {};
  for (const p of paymentMethods ?? []) {
    const key = p.payment_provider ?? "manual";
    if (!methodStats[key]) methodStats[key] = { count: 0, total: 0 };
    methodStats[key].count++;
    methodStats[key].total += p.valor_pago ?? 0;
  }

  // Conversion rate
  const { count: totalEnrollments } = await supabase
    .from("enrollments")
    .select("*", { count: "exact", head: true });

  const { count: paidEnrollments } = await supabase
    .from("enrollments")
    .select("*", { count: "exact", head: true })
    .eq("status", "ativo")
    .eq("tipo_acesso", "pago");

  const conversionRate = totalEnrollments && totalEnrollments > 0
    ? ((paidEnrollments ?? 0) / totalEnrollments * 100).toFixed(1)
    : "0.0";

  // Free vs paid distribution
  const { count: freeEnrollments } = await supabase
    .from("enrollments")
    .select("*", { count: "exact", head: true })
    .eq("tipo_acesso", "free");

  const meses = Object.keys(receitaPorMes);
  const receitaMax = Math.max(...Object.values(receitaPorMes), 1);
  const inscricoesMax = Math.max(...Object.values(inscricoesPorMes), 1);

  return (
    <div className="animate-fade-in">
      <Header title="Relatórios" subtitle="Visão analítica da plataforma" />

      <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
        {/* KPIs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard
            icon={<Users size={20} className="text-blue-400" />}
            label="Total de usuários"
            value={metrics?.total_users ?? 0}
            bg="bg-blue-500/10"
          />
          <KpiCard
            icon={<BookOpen size={20} className="text-amber-400" />}
            label="Total de matrículas"
            value={metrics?.total_enrollments ?? 0}
            bg="bg-amber-500/10"
          />
          <KpiCard
            icon={<Award size={20} className="text-amber-400" />}
            label="Certificados emitidos"
            value={metrics?.total_certificates ?? 0}
            bg="bg-amber-500/10"
          />
          <KpiCard
            icon={<DollarSign size={20} className="text-emerald-400" />}
            label="Receita total"
            value={formatCurrency(metrics?.receita_total ?? 0)}
            isText
            bg="bg-emerald-500/10"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Receita por mês */}
          <div className="rounded-2xl bg-surface border border-border p-4 sm:p-6">
            <h2 className="font-bold text-foreground mb-6 flex items-center gap-2">
              <TrendingUp size={18} className="text-emerald-400" />
              Receita — últimos 6 meses
            </h2>
            {meses.length === 0 ? (
              <p className="text-muted-light text-sm">Sem dados de receita ainda.</p>
            ) : (
              <div className="space-y-3">
                {meses.map((mes) => (
                  <div key={mes} className="flex items-center gap-3">
                    <span className="w-16 text-xs text-muted-light shrink-0">{mes}</span>
                    <div className="flex-1 h-6 bg-surface-3 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all"
                        style={{ width: `${(receitaPorMes[mes] / receitaMax) * 100}%` }}
                      />
                    </div>
                    <span className="w-24 text-right text-xs font-semibold text-muted shrink-0">
                      {formatCurrency(receitaPorMes[mes])}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Inscrições por mês */}
          <div className="rounded-2xl bg-surface border border-border p-4 sm:p-6">
            <h2 className="font-bold text-foreground mb-6 flex items-center gap-2">
              <BarChart3 size={18} className="text-amber-400" />
              Inscrições — últimos 6 meses
            </h2>
            {Object.keys(inscricoesPorMes).length === 0 ? (
              <p className="text-muted-light text-sm">Sem dados de inscrições ainda.</p>
            ) : (
              <div className="space-y-3">
                {Object.entries(inscricoesPorMes).map(([mes, count]) => (
                  <div key={mes} className="flex items-center gap-3">
                    <span className="w-16 text-xs text-muted-light shrink-0">{mes}</span>
                    <div className="flex-1 h-6 bg-surface-3 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all"
                        style={{ width: `${(count / inscricoesMax) * 100}%` }}
                      />
                    </div>
                    <span className="w-16 text-right text-xs font-semibold text-muted shrink-0">
                      {count} aluno{count !== 1 ? "s" : ""}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Top cursos */}
        <div className="rounded-2xl bg-surface border border-border overflow-hidden">
          <div className="px-4 sm:px-5 py-4 border-b border-border/50">
            <h2 className="font-bold text-foreground flex items-center gap-2">
              <BookOpen size={18} className="text-amber-400" />
              Top 10 cursos por alunos
            </h2>
          </div>
          {/* Mobile: card layout */}
          <div className="md:hidden divide-y divide-border/50">
            {(topCursos ?? []).map((course: any, i: number) => (
              <div key={i} className="px-4 py-3 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-light font-mono shrink-0">#{i + 1}</span>
                  <p className="text-sm font-medium text-foreground truncate">{course.titulo}</p>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-light flex-wrap">
                  <span>{getLevelLabel(course.nivel)}</span>
                  <span>{course.total_alunos} alunos</span>
                  <span>{course.total_certificados} cert.</span>
                  <span>{Math.round(course.progresso_medio ?? 0)}%</span>
                  {course.avaliacao_media > 0 && <span>★ {course.avaliacao_media.toFixed(1)}</span>}
                </div>
              </div>
            ))}
          </div>
          {/* Desktop: table layout */}
          <div className="hidden md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/50 bg-surface-2">
                  <th className="px-5 py-3 text-left text-xs font-semibold text-muted-light uppercase tracking-wider">#</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-muted-light uppercase tracking-wider">Curso</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-muted-light uppercase tracking-wider">Nível</th>
                  <th className="px-5 py-3 text-right text-xs font-semibold text-muted-light uppercase tracking-wider">Alunos</th>
                  <th className="px-5 py-3 text-right text-xs font-semibold text-muted-light uppercase tracking-wider hidden lg:table-cell">Certificados</th>
                  <th className="px-5 py-3 text-right text-xs font-semibold text-muted-light uppercase tracking-wider">Progresso</th>
                  <th className="px-5 py-3 text-right text-xs font-semibold text-muted-light uppercase tracking-wider hidden lg:table-cell">Avaliação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {(topCursos ?? []).map((course: any, i: number) => (
                  <tr key={i} className="hover:bg-surface-3 transition-colors">
                    <td className="px-5 py-3 text-muted-light font-mono text-xs">{i + 1}</td>
                    <td className="px-5 py-3 font-medium text-foreground">{course.titulo}</td>
                    <td className="px-5 py-3">
                      <span className="text-xs text-muted-light">{getLevelLabel(course.nivel)}</span>
                    </td>
                    <td className="px-5 py-3 text-right text-muted">{course.total_alunos}</td>
                    <td className="px-5 py-3 text-right text-muted hidden lg:table-cell">{course.total_certificados}</td>
                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-16 h-1.5 bg-surface-3 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-amber-500 rounded-full"
                            style={{ width: `${course.progresso_medio ?? 0}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-light">{Math.round(course.progresso_medio ?? 0)}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-right text-muted hidden lg:table-cell">
                      {course.avaliacao_media > 0 ? `★ ${course.avaliacao_media.toFixed(1)}` : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Distribuição por nível */}
        {Object.keys(nivelCount).length > 0 && (
          <div className="rounded-2xl bg-surface border border-border p-4 sm:p-6 max-w-sm">
            <h2 className="font-bold text-foreground mb-5 flex items-center gap-2">
              <BarChart3 size={18} className="text-blue-400" />
              Cursos por nível
            </h2>
            <div className="space-y-3">
              {Object.entries(nivelCount).map(([nivel, count]) => (
                <div key={nivel} className="flex items-center justify-between">
                  <span className="text-sm text-muted">{getLevelLabel(nivel)}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-2 bg-surface-3 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-500 rounded-full"
                        style={{ width: `${(count / Math.max(...Object.values(nivelCount))) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-foreground w-4 text-right">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Billing Analytics */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Payment Method Breakdown */}
          <div className="rounded-2xl bg-surface border border-border p-4 sm:p-6">
            <h2 className="font-bold text-foreground mb-5 flex items-center gap-2">
              <DollarSign size={18} className="text-emerald-400" />
              Receita por método de pagamento
            </h2>
            {Object.keys(methodStats).length === 0 ? (
              <p className="text-muted-light text-sm">Sem dados de pagamento ainda.</p>
            ) : (
              <div className="space-y-3">
                {Object.entries(methodStats).map(([method, stats]) => {
                  const maxTotal = Math.max(...Object.values(methodStats).map(s => s.total), 1);
                  return (
                    <div key={method} className="flex items-center gap-3">
                      <span className="w-16 text-xs text-muted-light shrink-0 capitalize">{method}</span>
                      <div className="flex-1 h-6 bg-surface-3 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all"
                          style={{ width: `${(stats.total / maxTotal) * 100}%` }}
                        />
                      </div>
                      <span className="w-28 text-right text-xs font-semibold text-muted shrink-0">
                        {formatCurrency(stats.total)} ({stats.count})
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Conversion & Distribution */}
          <div className="rounded-2xl bg-surface border border-border p-4 sm:p-6">
            <h2 className="font-bold text-foreground mb-5 flex items-center gap-2">
              <TrendingUp size={18} className="text-blue-400" />
              Taxas e distribuição
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Taxa de conversão</p>
                  <p className="text-xs text-muted-light">Matrículas pagas / total</p>
                </div>
                <span className="text-2xl font-black text-foreground">{conversionRate}%</span>
              </div>
              <div className="h-px bg-border/50" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Matrículas gratuitas</p>
                  <p className="text-xs text-muted-light">Cursos free + projeto cultural</p>
                </div>
                <span className="text-lg font-bold text-foreground">{freeEnrollments ?? 0}</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Matrículas pagas</p>
                  <p className="text-xs text-muted-light">Via PIX, boleto ou cartão</p>
                </div>
                <span className="text-lg font-bold text-foreground">{paidEnrollments ?? 0}</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Total de matrículas</p>
                  <p className="text-xs text-muted-light">Todas as matrículas</p>
                </div>
                <span className="text-lg font-bold text-foreground">{totalEnrollments ?? 0}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KpiCard({ icon, label, value, isText = false, bg }: {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  isText?: boolean;
  bg: string;
}) {
  return (
    <div className="rounded-2xl bg-surface border border-border p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className={`h-9 w-9 rounded-xl ${bg} flex items-center justify-center`}>
          {icon}
        </div>
        <span className="text-sm text-muted-light">{label}</span>
      </div>
      <div className="text-2xl font-black text-foreground">
        {isText ? value : Number(value).toLocaleString("pt-BR")}
      </div>
    </div>
  );
}
