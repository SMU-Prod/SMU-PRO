import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/actions/users";
import { adminGetAllCourses } from "@/lib/actions/courses";
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
  console.log("[Admin Layout] userId:", userId, "user:", user?.email, "role:", user?.role);
  const isAdmin = user?.role === "admin";
  const isContentManager = user?.role === "content_manager";
  if (!isAdmin && !isContentManager) {
    console.log("[Admin Layout] Redirecting to /dashboard — not admin/content_manager");
    redirect("/dashboard");
  }

  const { courses } = await adminGetAllCourses({ limit: 200 });
  const courseList = (courses ?? []).map((c: { id: string; titulo: string; nivel: string; ativo: boolean }) => ({
    id: c.id,
    titulo: c.titulo,
    nivel: c.nivel,
    ativo: c.ativo,
  }));

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <Sidebar role={user?.role as "admin" | "content_manager"} />
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
