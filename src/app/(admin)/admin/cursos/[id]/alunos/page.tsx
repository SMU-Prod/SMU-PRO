import { adminGetCourseEnrollments } from "@/lib/actions/users";
import { createAdminClient } from "@/lib/supabase/server";
import { CourseEnrollmentManager } from "@/components/admin/course-enrollment-manager";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function CourseStudentsPage({ params }: Props) {
  const { id: courseId } = await params;

  // Buscar dados do curso
  const supabase = createAdminClient();
  const { data: course } = await supabase
    .from("courses")
    .select("id, titulo, slug, tipo, total_alunos")
    .eq("id", courseId)
    .single();

  if (!course) {
    return (
      <div className="p-6 text-center">
        <p className="text-muted-light">Curso não encontrado.</p>
        <Link href="/admin/cursos">
          <Button variant="secondary" className="mt-4">Voltar</Button>
        </Link>
      </div>
    );
  }

  const enrollments = await adminGetCourseEnrollments(courseId);

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="sticky top-0 z-30 flex items-center gap-3 border-b border-border bg-surface/90 backdrop-blur-md px-4 sm:px-6 h-14 sm:h-16">
        <Link href="/admin/cursos">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowLeft size={16} />
          </Button>
        </Link>
        <div className="flex-1 min-w-0">
          <h1 className="text-base sm:text-lg font-semibold text-foreground truncate">
            Alunos — {course.titulo}
          </h1>
          <p className="text-xs text-muted-light">
            {enrollments.length} matrícula{enrollments.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <CourseEnrollmentManager
          courseId={courseId}
          courseTitulo={course.titulo}
          enrollments={enrollments}
        />
      </div>
    </div>
  );
}
