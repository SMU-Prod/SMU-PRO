import { requireAdminRole } from "@/lib/actions/users";
import { createAdminClient } from "@/lib/supabase/server";
import { Header } from "@/components/layout/header";
import { InstructorManager } from "@/components/admin/instructor-manager";

export default async function AdminInstrutoresPage() {
  await requireAdminRole();
  const supabase = createAdminClient();

  // Load instructors
  const { data: instructors } = await (supabase as any)
    .from("instructors")
    .select("*")
    .eq("ativo", true)
    .order("nome");

  // Load ALL active courses (not just NR)
  const { data: allCourses } = await supabase
    .from("courses")
    .select("id, titulo")
    .eq("ativo", true)
    .order("titulo");

  const courses = allCourses ?? [];

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
        title="Instrutores & Assinaturas"
        subtitle="Gerencie instrutores e responsáveis técnicos para certificados"
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
