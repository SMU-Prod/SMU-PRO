import { adminGetDashboardMetrics } from "@/lib/actions/users";
import { adminGetAllCourses } from "@/lib/actions/courses";
import { createAdminClient } from "@/lib/supabase/server";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, getCategoryIcon, getLevelLabel } from "@/lib/utils";
import {
  Users, BookOpen, Award, DollarSign, TrendingUp,
  UserCheck, BarChart3, Activity,
} from "lucide-react";

export default async function AdminDashboardPage() {
  const [metrics, { courses }] = await Promise.all([
    adminGetDashboardMetrics(),
    adminGetAllCourses({ limit: 100 }),
  ]);

  const supabase = createAdminClient();
  const { data: recentActivity } = await supabase
    .from("activity_log")
    .select("*, users(nome, email)")
    .order("created_at", { ascending: false })
    .limit(10);

  const { data: recentUsers } = await supabase
    .from("users")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);

  return (
    <div className="animate-fade-in">
      <Header
        title="Painel Administrativo"
        subtitle="Visão geral da SMU PRO"
        role="admin"
      />

      <div className="p-6 space-y-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard
            icon={<Users size={20} className="text-blue-600" />}
            label="Total de Alunos"
            value={metrics.total_users}
            sub={`+${metrics.new_users_30d} nos últimos 30 dias`}
            bg="bg-blue-50"
            trend={metrics.new_users_30d > 0 ? "up" : "neutral"}
          />
          <KpiCard
            icon={<UserCheck size={20} className="text-amber-600" />}
            label="Alunos MIT"
            value={metrics.alunos_mit}
            sub="Projeto Cultural"
            bg="bg-amber-50"
          />
          <KpiCard
            icon={<BookOpen size={20} className="text-[#6C3CE1]" />}
            label="Cursos Ativos"
            value={metrics.total_courses}
            sub={`${metrics.new_enrollments_30d} matrículas/mês`}
            bg="bg-purple-50"
          />
          <KpiCard
            icon={<Award size={20} className="text-emerald-600" />}
            label="Certificados"
            value={metrics.total_certificates}
            sub="Total emitidos"
            bg="bg-emerald-50"
          />
          <KpiCard
            icon={<DollarSign size={20} className="text-emerald-600" />}
            label="Receita Total"
            value={formatCurrency(metrics.receita_total)}
            sub="Pagamentos confirmados"
            bg="bg-emerald-50"
          />
          <KpiCard
            icon={<TrendingUp size={20} className="text-purple-600" />}
            label="Matrículas Ativas"
            value={metrics.total_enrollments}
            sub="Status ativo"
            bg="bg-purple-50"
          />
          <KpiCard
            icon={<BarChart3 size={20} className="text-blue-600" />}
            label="Novas Matrículas"
            value={metrics.new_enrollments_30d}
            sub="Últimos 30 dias"
            bg="bg-blue-50"
            trend={metrics.new_enrollments_30d > 0 ? "up" : "neutral"}
          />
          <KpiCard
            icon={<Activity size={20} className="text-red-500" />}
            label="Usuários Novos"
            value={metrics.new_users_30d}
            sub="Últimos 30 dias"
            bg="bg-red-50"
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Cursos */}
          <div className="xl:col-span-2">
            <Card>
              <CardHeader className="flex-row items-center justify-between">
                <CardTitle className="text-base">Cursos</CardTitle>
                <a href="/admin/cursos" className="text-xs text-[#6C3CE1] hover:underline">
                  Gerenciar →
                </a>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 bg-gray-50">
                        <th className="px-5 pb-3 pt-3 text-left text-xs text-gray-400 font-medium">Curso</th>
                        <th className="px-5 pb-3 pt-3 text-left text-xs text-gray-400 font-medium">Nível</th>
                        <th className="px-5 pb-3 pt-3 text-right text-xs text-gray-400 font-medium">Alunos</th>
                        <th className="px-5 pb-3 pt-3 text-right text-xs text-gray-400 font-medium">Cert.</th>
                        <th className="px-5 pb-3 pt-3 text-right text-xs text-gray-400 font-medium">Progresso</th>
                        <th className="px-5 pb-3 pt-3 text-center text-xs text-gray-400 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(courses ?? []).slice(0, 8).map((c: any) => (
                        <tr key={c.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="px-5 py-3">
                            <div className="flex items-center gap-2">
                              <span className="text-base">{getCategoryIcon(c.categoria)}</span>
                              <span className="text-gray-900 font-medium truncate max-w-[160px]">{c.titulo}</span>
                            </div>
                          </td>
                          <td className="px-5 py-3">
                            <Badge variant={c.nivel as any} className="text-[10px]">
                              {getLevelLabel(c.nivel)}
                            </Badge>
                          </td>
                          <td className="px-5 py-3 text-right text-gray-600">{c.total_alunos}</td>
                          <td className="px-5 py-3 text-right text-gray-600">{c.total_certificados}</td>
                          <td className="px-5 py-3 text-right text-gray-600">
                            {c.progresso_medio ? `${c.progresso_medio}%` : "—"}
                          </td>
                          <td className="px-5 py-3 text-center">
                            <Badge variant={c.ativo ? "success" : "secondary"} className="text-[10px]">
                              {c.ativo ? "Ativo" : "Rascunho"}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Atividade recente */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Atividade Recente</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {(recentActivity ?? []).map((log: any) => (
                    <div
                      key={log.id}
                      className="flex items-start gap-3 px-5 py-3 border-b border-gray-100 last:border-0"
                    >
                      <div className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 text-xs ${getActivityColor(log.tipo)}`}>
                        {getActivityEmoji(log.tipo)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-gray-900 truncate">
                          {log.users?.nome ?? "Sistema"}
                        </p>
                        <p className="text-xs text-gray-500 truncate">{log.descricao}</p>
                      </div>
                      <span className="text-[10px] text-gray-400 shrink-0">
                        {timeAgo(log.created_at)}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Novos usuários */}
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="text-base">Alunos Recentes</CardTitle>
            <a href="/admin/usuarios" className="text-xs text-[#6C3CE1] hover:underline">
              Ver todos →
            </a>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    {["Aluno", "Email", "Role", "MIT", "Cadastro"].map((h) => (
                      <th key={h} className="px-5 pb-3 pt-3 text-left text-xs text-gray-400 font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(recentUsers ?? []).map((u: any) => (
                    <tr key={u.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-2">
                          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-[#6C3CE1] to-[#8B5CF6] flex items-center justify-center text-xs text-white font-bold shrink-0">
                            {u.nome?.[0]?.toUpperCase()}
                          </div>
                          <span className="text-gray-900">{u.nome}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3 text-gray-500">{u.email}</td>
                      <td className="px-5 py-3">
                        <Badge variant={u.role as any} className="text-[10px]">
                          {getLevelLabel(u.role)}
                        </Badge>
                      </td>
                      <td className="px-5 py-3">
                        {u.projeto_cultural ? (
                          <Badge variant="mit" className="text-[10px]">MIT ✓</Badge>
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="px-5 py-3 text-gray-500 text-xs">
                        {new Date(u.created_at).toLocaleDateString("pt-BR")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function KpiCard({ icon, label, value, sub, bg, trend }: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  sub?: string;
  bg: string;
  trend?: "up" | "down" | "neutral";
}) {
  return (
    <Card className="hover:border-purple-200 transition-colors">
      <CardContent className="p-4">
        <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${bg} mb-3`}>
          {icon}
        </div>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-xs text-gray-500 mt-0.5">{label}</p>
        {sub && (
          <p className={`text-xs mt-1 ${trend === "up" ? "text-emerald-600" : "text-gray-400"}`}>
            {trend === "up" ? "↑ " : ""}{sub}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

function getActivityColor(tipo: string) {
  const map: Record<string, string> = {
    enrollment: "bg-purple-100 text-purple-700",
    lesson_complete: "bg-emerald-100 text-emerald-700",
    certificate_issued: "bg-amber-100 text-amber-700",
    login: "bg-blue-100 text-blue-700",
    payment: "bg-emerald-100 text-emerald-700",
    role_change: "bg-red-100 text-red-700",
  };
  return map[tipo] ?? "bg-gray-100 text-gray-500";
}

function getActivityEmoji(tipo: string) {
  const map: Record<string, string> = {
    enrollment: "📚", lesson_complete: "✅", certificate_issued: "🏆",
    login: "👤", payment: "💳", role_change: "🔑", quiz_pass: "🎯",
  };
  return map[tipo] ?? "📋";
}

function timeAgo(date: string) {
  const diff = Date.now() - new Date(date).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "agora";
  if (mins < 60) return `${mins}min`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h`;
  return `${Math.floor(hours / 24)}d`;
}
