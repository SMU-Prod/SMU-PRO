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

  const meses = Object.keys(receitaPorMes);
  const receitaMax = Math.max(...Object.values(receitaPorMes), 1);
  const inscricoesMax = Math.max(...Object.values(inscricoesPorMes), 1);

  return (
    <div className="animate-fade-in">
      <Header title="Relatórios" subtitle="Visão analítica da plataforma" />

      <div className="p-6 space-y-8">
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
          <div className="rounded-2xl bg-[#141416] border border-zinc-800 p-6">
            <h2 className="font-bold text-zinc-100 mb-6 flex items-center gap-2">
              <TrendingUp size={18} className="text-emerald-400" />
              Receita — últimos 6 meses
            </h2>
            {meses.length === 0 ? (
              <p className="text-zinc-500 text-sm">Sem dados de receita ainda.</p>
            ) : (
              <div className="space-y-3">
                {meses.map((mes) => (
                  <div key={mes} className="flex items-center gap-3">
                    <span className="w-16 text-xs text-zinc-500 shrink-0">{mes}</span>
                    <div className="flex-1 h-6 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all"
                        style={{ width: `${(receitaPorMes[mes] / receitaMax) * 100}%` }}
                      />
                    </div>
                    <span className="w-24 text-right text-xs font-semibold text-zinc-400 shrink-0">
                      {formatCurrency(receitaPorMes[mes])}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Inscrições por mês */}
          <div className="rounded-2xl bg-[#141416] border border-zinc-800 p-6">
            <h2 className="font-bold text-zinc-100 mb-6 flex items-center gap-2">
              <BarChart3 size={18} className="text-amber-400" />
              Inscrições — últimos 6 meses
            </h2>
            {Object.keys(inscricoesPorMes).length === 0 ? (
              <p className="text-zinc-500 text-sm">Sem dados de inscrições ainda.</p>
            ) : (
              <div className="space-y-3">
                {Object.entries(inscricoesPorMes).map(([mes, count]) => (
                  <div key={mes} className="flex items-center gap-3">
                    <span className="w-16 text-xs text-zinc-500 shrink-0">{mes}</span>
                    <div className="flex-1 h-6 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all"
                        style={{ width: `${(count / inscricoesMax) * 100}%` }}
                      />
                    </div>
                    <span className="w-16 text-right text-xs font-semibold text-zinc-400 shrink-0">
                      {count} aluno{count !== 1 ? "s" : ""}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Top cursos */}
        <div className="rounded-2xl bg-[#141416] border border-zinc-800 overflow-hidden">
          <div className="px-5 py-4 border-b border-zinc-800/50">
            <h2 className="font-bold text-zinc-100 flex items-center gap-2">
              <BookOpen size={18} className="text-amber-400" />
              Top 10 cursos por alunos
            </h2>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800/50 bg-zinc-900">
                <th className="px-5 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">#</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">Curso</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">Nível</th>
                <th className="px-5 py-3 text-right text-xs font-semibold text-zinc-500 uppercase tracking-wider">Alunos</th>
                <th className="px-5 py-3 text-right text-xs font-semibold text-zinc-500 uppercase tracking-wider">Certificados</th>
                <th className="px-5 py-3 text-right text-xs font-semibold text-zinc-500 uppercase tracking-wider">Progresso médio</th>
                <th className="px-5 py-3 text-right text-xs font-semibold text-zinc-500 uppercase tracking-wider">Avaliação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {(topCursos ?? []).map((course: any, i: number) => (
                <tr key={i} className="hover:bg-zinc-800 transition-colors">
                  <td className="px-5 py-3 text-zinc-500 font-mono text-xs">{i + 1}</td>
                  <td className="px-5 py-3 font-medium text-zinc-100">{course.titulo}</td>
                  <td className="px-5 py-3">
                    <span className="text-xs text-zinc-500">{getLevelLabel(course.nivel)}</span>
                  </td>
                  <td className="px-5 py-3 text-right text-zinc-300">{course.total_alunos}</td>
                  <td className="px-5 py-3 text-right text-zinc-300">{course.total_certificados}</td>
                  <td className="px-5 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-16 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber-500 rounded-full"
                          style={{ width: `${course.progresso_medio ?? 0}%` }}
                        />
                      </div>
                      <span className="text-xs text-zinc-500">{Math.round(course.progresso_medio ?? 0)}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-right text-zinc-300">
                    {course.avaliacao_media > 0 ? `★ ${course.avaliacao_media.toFixed(1)}` : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Distribuição por nível */}
        {Object.keys(nivelCount).length > 0 && (
          <div className="rounded-2xl bg-[#141416] border border-zinc-800 p-6 max-w-sm">
            <h2 className="font-bold text-zinc-100 mb-5 flex items-center gap-2">
              <BarChart3 size={18} className="text-blue-400" />
              Cursos por nível
            </h2>
            <div className="space-y-3">
              {Object.entries(nivelCount).map(([nivel, count]) => (
                <div key={nivel} className="flex items-center justify-between">
                  <span className="text-sm text-zinc-400">{getLevelLabel(nivel)}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-500 rounded-full"
                        style={{ width: `${(count / Math.max(...Object.values(nivelCount))) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-zinc-100 w-4 text-right">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
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
    <div className="rounded-2xl bg-[#141416] border border-zinc-800 p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className={`h-9 w-9 rounded-xl ${bg} flex items-center justify-center`}>
          {icon}
        </div>
        <span className="text-sm text-zinc-500">{label}</span>
      </div>
      <div className="text-2xl font-black text-zinc-100">
        {isText ? value : Number(value).toLocaleString("pt-BR")}
      </div>
    </div>
  );
}
