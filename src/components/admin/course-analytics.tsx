import { createAdminClient } from "@/lib/supabase/server";
import { formatMinutes } from "@/lib/utils";
import { Users, Award, TrendingUp, BookOpen, BarChart3 } from "lucide-react";

interface Props {
  courseId: string;
  totalLessons: number;
}

export async function CourseAnalytics({ courseId, totalLessons }: Props) {
  const supabase = createAdminClient();

  // Enrollment stats
  const { data: enrollmentStats } = await supabase
    .from("enrollments")
    .select("status, progresso")
    .eq("course_id", courseId);

  const total = enrollmentStats?.length ?? 0;
  const started = enrollmentStats?.filter((e) => (e.progresso ?? 0) > 0).length ?? 0;
  const completed = enrollmentStats?.filter((e) => (e.progresso ?? 0) >= 100).length ?? 0;

  // Certificates
  const { count: certCount } = await (supabase as any)
    .from("certificates")
    .select("id", { count: "exact", head: true })
    .eq("course_id", courseId);

  // Average progress
  const avgProgress = total > 0
    ? Math.round((enrollmentStats ?? []).reduce((sum, e) => sum + (e.progresso ?? 0), 0) / total)
    : 0;

  // Progress distribution buckets
  const buckets = [
    { label: "0%", min: 0, max: 0 },
    { label: "1–25%", min: 1, max: 25 },
    { label: "26–50%", min: 26, max: 50 },
    { label: "51–75%", min: 51, max: 75 },
    { label: "76–99%", min: 76, max: 99 },
    { label: "100%", min: 100, max: 100 },
  ];

  const distribution = buckets.map((b) => ({
    label: b.label,
    count: (enrollmentStats ?? []).filter((e) => {
      const p = e.progresso ?? 0;
      return p >= b.min && p <= b.max;
    }).length,
  }));

  const maxBucket = Math.max(...distribution.map((d) => d.count), 1);

  // Lesson completion rates (top 10 most-completed and least-completed)
  const { data: progressData } = await (supabase as any)
    .from("progress")
    .select("lesson_id, concluido")
    .eq("course_id", courseId);

  const lessonMap: Record<string, { total: number; done: number }> = {};
  for (const p of progressData ?? []) {
    if (!lessonMap[p.lesson_id]) lessonMap[p.lesson_id] = { total: 0, done: 0 };
    lessonMap[p.lesson_id].total++;
    if (p.concluido) lessonMap[p.lesson_id].done++;
  }

  // Enrollments over time (last 90 days)
  const { data: recentEnrollments } = await supabase
    .from("enrollments")
    .select("created_at")
    .eq("course_id", courseId)
     
    .gte("created_at", new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString())
    .order("created_at", { ascending: true });

  const enrollByWeek: Record<string, number> = {};
  for (const e of recentEnrollments ?? []) {
    const d = new Date(e.created_at);
    const weekStart = new Date(d);
    weekStart.setDate(d.getDate() - d.getDay());
    const key = weekStart.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
    enrollByWeek[key] = (enrollByWeek[key] ?? 0) + 1;
  }

  const weeks = Object.keys(enrollByWeek);
  const maxWeek = Math.max(...Object.values(enrollByWeek), 1);

  return (
    <div className="space-y-6 max-w-4xl">
      {/* KPI row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <KpiCard icon={<Users size={18} className="text-blue-600" />} label="Matrículas" value={total} bg="bg-blue-50" />
        <KpiCard icon={<TrendingUp size={18} className="text-amber-400" />} label="Iniciaram" value={`${started} (${total > 0 ? Math.round(started / total * 100) : 0}%)`} bg="bg-amber-500/10" isText />
        <KpiCard icon={<BookOpen size={18} className="text-emerald-600" />} label="Concluíram" value={`${completed} (${total > 0 ? Math.round(completed / total * 100) : 0}%)`} bg="bg-emerald-50" isText />
        <KpiCard icon={<Award size={18} className="text-amber-600" />} label="Certificados" value={certCount ?? 0} bg="bg-amber-50" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Funnel */}
        <div className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="font-bold text-foreground mb-4 flex items-center gap-2 text-sm">
            <TrendingUp size={16} className="text-amber-400" />
            Funil de Conclusão
          </h2>
          {total === 0 ? (
            <p className="text-muted-light text-sm">Nenhuma matrícula ainda.</p>
          ) : (
            <div className="space-y-3">
              {[
                { label: "Matrículas", count: total, color: "bg-blue-500" },
                { label: "Iniciaram", count: started, color: "bg-amber-500/100" },
                { label: "Concluíram", count: completed, color: "bg-emerald-500" },
                { label: "Certificados", count: certCount ?? 0, color: "bg-amber-500" },
              ].map((step) => (
                <div key={step.label} className="flex items-center gap-3">
                  <span className="w-24 text-xs text-muted-light shrink-0">{step.label}</span>
                  <div className="flex-1 h-6 bg-surface-3 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${step.color} rounded-full transition-all`}
                      style={{ width: `${(step.count / total) * 100}%` }}
                    />
                  </div>
                  <span className="w-16 text-right text-xs font-semibold text-muted shrink-0">
                    {step.count} ({Math.round((step.count / total) * 100)}%)
                  </span>
                </div>
              ))}
            </div>
          )}
          <div className="mt-4 pt-4 border-t border-border/50">
            <p className="text-xs text-muted-light">Progresso médio dos alunos: <strong className="text-foreground">{avgProgress}%</strong></p>
          </div>
        </div>

        {/* Progress distribution */}
        <div className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="font-bold text-foreground mb-4 flex items-center gap-2 text-sm">
            <BarChart3 size={16} className="text-blue-600" />
            Distribuição de Progresso
          </h2>
          {total === 0 ? (
            <p className="text-muted-light text-sm">Nenhuma matrícula ainda.</p>
          ) : (
            <div className="space-y-2">
              {distribution.map((d) => (
                <div key={d.label} className="flex items-center gap-3">
                  <span className="w-16 text-xs text-muted-light shrink-0 text-right">{d.label}</span>
                  <div className="flex-1 h-5 bg-surface-3 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all"
                      style={{ width: `${(d.count / maxBucket) * 100}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-xs text-muted shrink-0">{d.count}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Enrollments over time */}
      {weeks.length > 0 && (
        <div className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="font-bold text-foreground mb-4 flex items-center gap-2 text-sm">
            <Users size={16} className="text-blue-600" />
            Matrículas — últimas 12 semanas
          </h2>
          <div className="space-y-2">
            {weeks.map((week) => (
              <div key={week} className="flex items-center gap-3">
                <span className="w-20 text-xs text-muted-light shrink-0">{week}</span>
                <div className="flex-1 h-5 bg-surface-3 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all"
                    style={{ width: `${(enrollByWeek[week] / maxWeek) * 100}%` }}
                  />
                </div>
                <span className="w-8 text-right text-xs text-muted shrink-0">{enrollByWeek[week]}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function KpiCard({ icon, label, value, bg, isText = false }: {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  bg: string;
  isText?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <div className="flex items-center gap-2 mb-2">
        <div className={`h-8 w-8 rounded-xl ${bg} flex items-center justify-center`}>{icon}</div>
        <span className="text-xs text-muted-light">{label}</span>
      </div>
      <div className="text-xl font-black text-foreground">
        {isText ? value : Number(value).toLocaleString("pt-BR")}
      </div>
    </div>
  );
}
