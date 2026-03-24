import { createAdminClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getLevelLabel, formatMinutes, getCategoryLabel } from "@/lib/utils";
import { CategoryIcon } from "@/components/ui/category-icon";
import { CourseQualityScore } from "@/components/admin/course-quality-score";
import { CourseForm } from "@/components/admin/course-form";
import { CourseAnalytics } from "@/components/admin/course-analytics";
import { CourseStudentPreview } from "@/components/admin/course-student-preview";
import { CourseContentManager } from "@/components/admin/course-content-manager";
import { Edit, ArrowLeft, Layers, Info, ShieldCheck, BarChart3, Eye, Monitor } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ tab?: string }>;
}

const TABS = [
  { id: "curriculo", label: "Currículo", icon: Layers },
  { id: "informacoes", label: "Informações", icon: Info },
  { id: "preview", label: "Preview Aluno", icon: Monitor },
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
      <div className="flex items-center gap-2 px-4 sm:px-6 pt-4 text-xs text-muted-light">
        <Link href="/admin/cursos" className="hover:text-muted transition-colors shrink-0">Cursos</Link>
        <span>/</span>
        <span className="text-muted font-medium truncate">{course.titulo}</span>
      </div>

      {/* Header */}
      <div className="px-4 sm:px-6 pt-3 pb-4 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <CategoryIcon category={course.categoria} size={24} />
            <h1 className="text-lg sm:text-xl font-bold text-foreground truncate">{course.titulo}</h1>
            <Badge variant={course.ativo ? "success" : "secondary"} className="text-[10px]">
              {course.ativo ? "Publicado" : "Rascunho"}
            </Badge>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap text-xs sm:text-sm text-muted-light">
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
              <ArrowLeft size={15} /> <span className="hidden sm:inline">Voltar</span>
            </Button>
          </Link>
          <Link href={`/admin/cursos/${id}?tab=preview`}>
            <Button variant="ghost" size="sm" title="Ver como o aluno visualiza">
              <Monitor size={15} /> <span className="hidden sm:inline">Preview</span>
            </Button>
          </Link>
          <Link href={`/admin/cursos/${id}/editar`}>
            <Button variant="secondary" size="sm">
              <Edit size={15} /> <span className="hidden sm:inline">Editar</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Tabs — scroll horizontal no mobile */}
      <div className="border-b border-border">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-0 px-4 sm:px-6 min-w-max">
            {TABS.map((t) => {
              const Icon = t.icon;
              const active = tab === t.id;
              return (
                <Link
                  key={t.id}
                  href={`/admin/cursos/${id}?tab=${t.id}`}
                  className={`flex items-center gap-1.5 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    active
                      ? "border-amber-500 text-amber-400"
                      : "border-transparent text-muted-light hover:text-muted"
                  }`}
                >
                  <Icon size={14} />
                  {t.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div className="p-4 sm:p-6">
        {tab === "curriculo" && (
          <CourseContentManager course={sortedCourse} />
        )}

        {tab === "informacoes" && (
          <CourseForm course={course} />
        )}

        {tab === "preview" && (
          <CourseStudentPreview course={sortedCourse} />
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
