import Link from "next/link";
import { adminGetDashboardMetrics, getCurrentUser } from "@/lib/actions/users";
import { adminGetAllCourses, instructorGetDashboardStats } from "@/lib/actions/courses";
import { createAdminClient } from "@/lib/supabase/server";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, getLevelLabel } from "@/lib/utils";
import { CategoryIcon } from "@/components/ui/category-icon";
import { InstructorDashboard } from "@/components/admin/instructor-dashboard";
import {
  Users, BookOpen, Award, DollarSign, TrendingUp,
  UserCheck, BarChart3, Activity,
  CheckCircle, Trophy, User, CreditCard, KeyRound, Target, ClipboardList,
  type LucideIcon,
} from "lucide-react";

export default async function AdminDashboardPage() {
  const user = await getCurrentUser();

  // Instrutor vê dashboard próprio
  if (user?.role === "instrutor") {
    const stats = await instructorGetDashboardStats();
    return <InstructorDashboard stats={stats} />;
  }

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

      <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          <KpiCard
            icon={<Users size={20} className="text-blue-400" />}
            label="Total de Alunos"
            value={metrics.total_users}
            sub={`+${metrics.new_users_30d} nos últimos 30 dias`}
            bg="bg-blue-500/10"
            trend={metrics.new_users_30d > 0 ? "up" : "neutral"}
          />
          <KpiCard
            icon={<UserCheck size={20} className="text-amber-400" />}
            label="Alunos MIT"
            value={metrics.alunos_mit}
            sub="Projeto Cultural"
            bg="bg-amber-500/10"
          />
          <KpiCard
            icon={<BookOpen size={20} className="text-amber-400" />}
            label="Cursos Ativos"
            value={metrics.total_courses}
            sub={`${metrics.new_enrollments_30d} matrículas/mês`}
            bg="bg-amber-500/10"
          />
          <KpiCard
            icon={<Award size={20} className="text-emerald-400" />}
            label="Certificados"
            value={metrics.total_certificates}
            sub="Total emitidos"
            bg="bg-emerald-500/10"
          />
          <KpiCard
            icon={<DollarSign size={20} className="text-emerald-400" />}
            label="Receita Total"
            value={formatCurrency(metrics.receita_total)}
            sub="Pagamentos confirmados"
            bg="bg-emerald-500/10"
          />
          <KpiCard
            icon={<TrendingUp size={20} className="text-amber-400" />}
            label="Matrículas Ativas"
            value={metrics.total_enrollments}
            sub="Status ativo"
            bg="bg-amber-500/10"
          />
          <KpiCard
            icon={<BarChart3 size={20} className="text-blue-400" />}
            label="Novas Matrículas"
            value={metrics.new_enrollments_30d}
            sub="Últimos 30 dias"
            bg="bg-blue-500/10"
            trend={metrics.new_enrollments_30d > 0 ? "up" : "neutral"}
          />
          <KpiCard
            icon={<Activity size={20} className="text-red-400" />}
            label="Usuários Novos"
            value={metrics.new_users_30d}
            sub="Últimos 30 dias"
            bg="bg-red-500/10"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {/* Cursos */}
          <div className="xl:col-span-2">
            <Card>
              <CardHeader className="flex-row items-center justify-between">
                <CardTitle className="text-base">Cursos</CardTitle>
                <Link href="/admin/cursos" className="text-xs text-amber-400 hover:underline">
                  Gerenciar →
                </Link>
              </CardHeader>
              <CardContent className="p-0">
                {/* Mobile: card layout */}
                <div className="sm:hidden divide-y divide-border/50">
                  {(courses ?? []).slice(0, 8).map((c: any) => (
                    <div key={c.id} className="px-4 py-3 space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="shrink-0"><CategoryIcon category={c.categoria} size={16} /></span>
                          <span className="text-foreground font-medium truncate">{c.titulo}</span>
                        </div>
                        <Badge variant={c.ativo ? "success" : "secondary"} className="text-[10px] shrink-0">
                          {c.ativo ? "Ativo" : "Rascunho"}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-light">
                        <Badge variant={c.nivel as any} className="text-[10px]">{getLevelLabel(c.nivel)}</Badge>
                        <span>{c.total_alunos} alunos</span>
                        <span>{c.total_certificados} cert.</span>
                        <span>{c.progresso_medio ? `${c.progresso_medio}%` : "—"}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Desktop: table layout */}
                <div className="hidden sm:block overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/50 bg-surface-2">
                        <th className="px-5 pb-3 pt-3 text-left text-xs text-muted-light font-medium">Curso</th>
                        <th className="px-5 pb-3 pt-3 text-left text-xs text-muted-light font-medium">Nível</th>
                        <th className="px-5 pb-3 pt-3 text-right text-xs text-muted-light font-medium">Alunos</th>
                        <th className="px-5 pb-3 pt-3 text-right text-xs text-muted-light font-medium">Cert.</th>
                        <th className="px-5 pb-3 pt-3 text-right text-xs text-muted-light font-medium">Progresso</th>
                        <th className="px-5 pb-3 pt-3 text-center text-xs text-muted-light font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(courses ?? []).slice(0, 8).map((c: any) => (
                        <tr key={c.id} className="border-b border-border/50 hover:bg-hover transition-colors">
                          <td className="px-5 py-3">
                            <div className="flex items-center gap-2">
                              <CategoryIcon category={c.categoria} size={16} />
                              <span className="text-foreground font-medium truncate max-w-[120px] sm:max-w-[160px] lg:max-w-[200px]">{c.titulo}</span>
                            </div>
                          </td>
                          <td className="px-5 py-3">
                            <Badge variant={c.nivel as any} className="text-[10px]">
                              {getLevelLabel(c.nivel)}
                            </Badge>
                          </td>
                          <td className="px-5 py-3 text-right text-muted">{c.total_alunos}</td>
                          <td className="px-5 py-3 text-right text-muted">{c.total_certificados}</td>
                          <td className="px-5 py-3 text-right text-muted">
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
                      className="flex items-start gap-3 px-5 py-3 border-b border-border/50 last:border-0"
                    >
                      <div className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 text-xs ${getActivityColor(log.tipo)}`}>
                        {getActivityEmoji(log.tipo)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-foreground truncate">
                          {log.users?.nome ?? "Sistema"}
                        </p>
                        <p className="text-xs text-muted-light truncate">{log.descricao}</p>
                      </div>
                      <span className="text-[10px] text-muted-light shrink-0">
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
            <a href="/admin/usuarios" className="text-xs text-amber-400 hover:underline">
              Ver todos →
            </a>
          </CardHeader>
          <CardContent className="p-0">
            {/* Mobile: card layout */}
            <div className="sm:hidden divide-y divide-border/50">
              {(recentUsers ?? []).map((u: any) => (
                <div key={u.id} className="px-4 py-3 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-400 flex items-center justify-center text-xs text-white font-bold shrink-0">
                    {u.nome?.[0]?.toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground font-medium truncate">{u.nome}</p>
                    <p className="text-xs text-muted-light truncate">{u.email}</p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <Badge variant={u.role as any} className="text-[10px]">{getLevelLabel(u.role)}</Badge>
                    {u.projeto_cultural && <Badge variant="mit" className="text-[10px]">MIT</Badge>}
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop: table layout */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50 bg-surface-2">
                    {["Aluno", "Email", "Role", "MIT", "Cadastro"].map((h) => (
                      <th key={h} className="px-5 pb-3 pt-3 text-left text-xs text-muted-light font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(recentUsers ?? []).map((u: any) => (
                    <tr key={u.id} className="border-b border-border/50 hover:bg-hover transition-colors">
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-2">
                          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-amber-500 to-amber-400 flex items-center justify-center text-xs text-white font-bold shrink-0">
                            {u.nome?.[0]?.toUpperCase()}
                          </div>
                          <span className="text-foreground">{u.nome}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3 text-muted-light">{u.email}</td>
                      <td className="px-5 py-3">
                        <Badge variant={u.role as any} className="text-[10px]">
                          {getLevelLabel(u.role)}
                        </Badge>
                      </td>
                      <td className="px-5 py-3">
                        {u.projeto_cultural ? (
                          <Badge variant="mit" className="text-[10px]">MIT ✓</Badge>
                        ) : (
                          <span className="text-muted-light">—</span>
                        )}
                      </td>
                      <td className="px-5 py-3 text-muted-light text-xs">
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
    <Card className="hover:border-amber-500/20 transition-colors">
      <CardContent className="p-3 sm:p-4">
        <div className={`inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg ${bg} mb-2 sm:mb-3`}>
          {icon}
        </div>
        <p className="text-xl sm:text-2xl font-bold text-foreground">{value}</p>
        <p className="text-[10px] sm:text-xs text-muted-light mt-0.5">{label}</p>
        {sub && (
          <p className={`text-[10px] sm:text-xs mt-1 ${trend === "up" ? "text-emerald-400" : "text-muted-light"}`}>
            {trend === "up" ? "↑ " : ""}{sub}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

function getActivityColor(tipo: string) {
  const map: Record<string, string> = {
    enrollment: "bg-amber-500/15 text-amber-400",
    lesson_complete: "bg-emerald-500/15 text-emerald-400",
    certificate_issued: "bg-amber-500/15 text-amber-400",
    login: "bg-blue-500/15 text-blue-400",
    payment: "bg-emerald-500/15 text-emerald-400",
    role_change: "bg-red-500/15 text-red-400",
  };
  return map[tipo] ?? "bg-surface-3 text-muted-light";
}

function getActivityEmoji(tipo: string) {
  const map: Record<string, LucideIcon> = {
    enrollment: BookOpen,
    lesson_complete: CheckCircle,
    certificate_issued: Trophy,
    login: User,
    payment: CreditCard,
    role_change: KeyRound,
    quiz_pass: Target,
    quiz_fail: Target,
  };
  const Icon = map[tipo] ?? ClipboardList;
  return <Icon size={14} className="text-muted-light" />;
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
