import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getActivePlan, getUserSubscription } from "@/lib/actions/subscriptions";
import { createAdminClient } from "@/lib/supabase/server";
import { Header } from "@/components/layout/header";
import { SubscriptionPageClient } from "@/components/subscription/subscription-page-client";

export default async function AssinaturaPage() {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  const [plan, subscription] = await Promise.all([
    getActivePlan(),
    getUserSubscription(),
  ]);

  // Buscar cursos disponíveis na assinatura
  const supabase = createAdminClient();
  const { data: courses } = await supabase
    .from("courses")
    .select("id, titulo, slug, thumbnail_url, categoria, nivel, carga_horaria, preco")
    .eq("ativo", true)
    .eq("disponivel_assinatura", true)
    .order("titulo");

  return (
    <div className="animate-fade-in">
      <Header
        title="Assinatura"
        subtitle="Acesse todos os cursos com um único plano mensal"
      />
      <div className="p-4 sm:p-6">
        <SubscriptionPageClient
          plan={plan}
          subscription={subscription}
          courses={courses ?? []}
        />
      </div>
    </div>
  );
}
