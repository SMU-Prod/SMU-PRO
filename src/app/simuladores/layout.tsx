import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/actions/users";

export default async function SimuladoresLayout({ children }: { children: React.ReactNode }) {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  const user = await getCurrentUser();
  if (user && user.ativo === false) redirect("/conta-desativada");

  return <div className="min-h-screen bg-background text-foreground">{children}</div>;
}
