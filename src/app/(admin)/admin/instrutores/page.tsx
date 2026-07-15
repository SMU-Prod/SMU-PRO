import { requireAdminRole } from "@/lib/actions/users";
import { getPortal, filterCoursesByPortal } from "@/lib/portal";
import { createAdminClient } from "@/lib/supabase/server";
import { Header } from "@/components/layout/header";
import { InstructorManager } from "@/components/admin/instructor-manager";
import { getServerT } from "@/lib/i18n/server";

export default async function AdminInstrutoresPage() {
  const t = await getServerT();
  await requireAdminRole();
  const supabase = createAdminClient();

  // Load instructors
  const { data: instructors } = await (supabase as any)
    .from("instructors")
    .select("*")
    .eq("ativo", true)
    .order("nome");

  // Cursos ativos DESTA escola (cada domínio é uma escola independente).
  // Sem o filtro, o seletor oferecia curso do aula para vincular instrutor no
  // Backstage — e o vínculo ficaria invisível no painel dono do curso.
  const { data: allCourses } = await supabase
    .from("courses")
    .select("id, titulo, categorias")
    .eq("ativo", true)
    .order("titulo");

  const courses = filterCoursesByPortal(allCourses ?? [], await getPortal());

  // Load lessons for all courses (for per-lesson assignment)
  const courseIds = courses.map((c: any) => c.id);
  let lessons: any[] = [];
  if (courseIds.length > 0) {
    const { data } = await supabase
      .from("lessons")
      .select("id, titulo, module_id, modules!inner(course_id)")
      .in("modules.course_id", courseIds)
      .order("ordem");
    lessons = data ?? [];
  }

  // Load existing assignments
  const { data: assignments } = await (supabase as any)
    .from("course_instructors")
    .select("*, instructors(nome, tipo)")
    .order("created_at");

  return (
    <div className="animate-fade-in">
      <Header
        title={t("Instrutores & Assinaturas")}
        subtitle={t("Gerencie instrutores e responsáveis técnicos para certificados")}
      />
      <div className="p-4 sm:p-6">
        <InstructorManager
          instructors={instructors ?? []}
          courses={courses}
          lessons={lessons}
          assignments={assignments ?? []}
        />
      </div>
    </div>
  );
}
