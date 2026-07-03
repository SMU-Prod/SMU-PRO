import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/actions/users";
import { Sidebar } from "@/components/layout/sidebar";
import { SidebarProvider } from "@/components/layout/sidebar-context";
import { IdleLogout } from "@/components/security/idle-logout";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  const user = await getCurrentUser();
  // Conta desativada: bloqueia o acesso mesmo com sessão ainda válida no navegador.
  if (user && user.ativo === false) redirect("/conta-desativada");

  return (
    <SidebarProvider>
      <IdleLogout />
      <div className="flex h-screen bg-background">
        <Sidebar role={user?.role ?? "trainee"} />
        <main className="flex-1 lg:ml-64 overflow-y-auto min-w-0">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
