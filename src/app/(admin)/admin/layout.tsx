import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/actions/users";
import { adminGetAllCourses, instructorGetMyCourses } from "@/lib/actions/courses";
import { Sidebar } from "@/components/layout/sidebar";
import { SidebarProvider } from "@/components/layout/sidebar-context";
import { CommandPalette } from "@/components/admin/command-palette";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  const user = await getCurrentUser();
  if (process.env.NODE_ENV === 'development') {
    console.log("[Admin Layout] userId:", userId, "user:", user?.email, "role:", user?.role);
  }
  const isAdmin = user?.role === "admin";
  const isContentManager = user?.role === "content_manager";
  const isInstructor = user?.role === "instrutor";
  if (!isAdmin && !isContentManager && !isInstructor) {
    if (process.env.NODE_ENV === 'development') {
      console.log("[Admin Layout] Redirecting to /dashboard — not admin/content_manager/instrutor");
    }
    redirect("/dashboard");
  }

  let rawCourses: any[] = [];
  if (isInstructor) {
    rawCourses = await instructorGetMyCourses();
  } else {
    const result = await adminGetAllCourses({ limit: 200 });
    rawCourses = result.courses ?? [];
  }
  const courseList = rawCourses.map((c: { id?: string; course_id?: string; titulo: string; nivel: string; ativo: boolean }) => ({
    id: (c.id ?? c.course_id) as string,
    titulo: c.titulo,
    nivel: c.nivel,
    ativo: c.ativo,
  }));

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <Sidebar role={user?.role as "admin" | "content_manager" | "instrutor"} />
        <main className="flex-1 lg:ml-64 overflow-y-auto min-w-0">
          {/* Command Palette — disponível em todas as páginas admin */}
          <div className="fixed top-3 left-1/2 -translate-x-1/2 z-40 hidden md:block">
            <CommandPalette courses={courseList} />
          </div>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
