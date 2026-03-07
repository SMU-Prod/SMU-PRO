import { createAdminClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getLevelLabel, getCategoryIcon, formatMinutes, getCategoryLabel } from "@/lib/utils";
import { CourseContentManager } from "@/components/admin/course-content-manager";
import { CourseQualityScore } from "@/components/admin/course-quality-score";
import { CourseForm } from "@/components/admin/course-form";
import { CourseAnalytics } from "@/components/admin/course-analytics";
import { Edit, ArrowLeft, Layers, Info, ShieldCheck, BarChart3, Eye } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ tab?: string }>;
}

const TABS = [
  { id: "curriculo", label: "Currículo", icon: Layers },
  { id: "informacoes", label: "Informações", icon: Info },
  { id: "qualidade", label: "Qualidade", icon: ShieldCheck },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
];

export default async function AdminCourseDetailPage({ params, searchParams }: Props) {
  const { id } = await params;
  const { tab = "curriculo" } = await searchParams;

  const supabase = createAdminClient();

  const { data: course } = await (supabase as any)
    .from("courses")
    .select(`*, modules(*, lessons(*))`)
    .eq("id", id)
    .single();

  if (!course) notFound();

  const sortedCourse = {
    ...course,
    modules: (course.modules ?? [])
      .sort((a: any, b: any) => a.ordem - b.ordem)
      .map((m: any) => ({
        ...m,
        lessons: (m.lessons ?? []).sort((a: any, b: any) => a.ordem - b.ordem),
      })),
  };

  const totalLessons = sortedCourse.modules.reduce(
    (acc: number, m: any) => acc + (m.lessons?.length ?? 0), 0
  );

  return (
    <div className="animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 px-6 pt-4 text-xs text-gray-400">
        <Link href="/admin/cursos" className="hover:text-gray-600 transition-colors">Cursos</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium truncate max-w-[200px]">{course.titulo}</span>
      </div>

      {/* Header */}
      <div className="px-6 pt-3 pb-4 flex flex-col sm:flex-row sm:items-start gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="text-2xl">{getCategoryIcon(course.categoria)}</span>
            <h1 className="text-xl font-bold text-gray-900 truncate">{course.titulo}</h1>
            <Badge variant={course.ativo ? "success" : "secondary"} className="text-[10px]">
              {course.ativo ? "Publicado" : "Rascunho"}
            </Badge>
          </div>
          <div className="flex items-center gap-2 flex-wrap text-sm text-gray-500">
            <Badge variant={course.nivel as any} className="text-[10px]">{getLevelLabel(course.nivel)}</Badge>
            <span>·</span>
            <span>{getCategoryLabel(course.categoria)}</span>
            <span>·</span>
            <span>{sortedCourse.modules.length} módulos</span>
            <span>·</span>
            <span>{totalLessons} aulas</span>
            {course.carga_horaria && (
              <>
                <span>·</span>
                <span>{formatMinutes(course.carga_horaria)}</span>
              </>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link href="/admin/cursos">
            <Button variant="ghost" size="sm">
              <ArrowLeft size={15} /> Voltar
            </Button>
          </Link>
          <Link href={`/cursos/${course.slug}`} target="_blank">
            <Button variant="ghost" size="sm" title="Ver como aluno">
              <Eye size={15} /> Preview
            </Button>
          </Link>
          <Link href={`/admin/cursos/${id}/editar`}>
            <Button variant="secondary" size="sm">
              <Edit size={15} /> Editar
            </Button>
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 border-b border-gray-200">
        <div className="flex gap-0">
          {TABS.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <Link
                key={t.id}
                href={`/admin/cursos/${id}?tab=${t.id}`}
                className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                  active
                    ? "border-[#6C3CE1] text-[#6C3CE1]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <Icon size={14} />
                {t.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Tab content */}
      <div className="p-6">
        {tab === "curriculo" && (
          <CourseContentManager course={sortedCourse} />
        )}

        {tab === "informacoes" && (
          <CourseForm course={course} />
        )}

        {tab === "qualidade" && (
          <div className="max-w-xl">
            <CourseQualityScore course={sortedCourse} />
          </div>
        )}

        {tab === "analytics" && (
          <CourseAnalytics courseId={id} totalLessons={totalLessons} />
        )}
      </div>
    </div>
  );
}
