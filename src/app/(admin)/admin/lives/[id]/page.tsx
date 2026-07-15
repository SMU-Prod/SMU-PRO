import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/server";
import { getPortal, liveBelongsToPortal } from "@/lib/portal";
import { LiveForm } from "@/components/admin/live-form";
import type { LiveEvent } from "@/types/database";

export default async function AdminLiveFormPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (id === "nova") {
    return (
      <div className="p-4 sm:p-6">
        <h1 className="text-xl font-bold text-foreground mb-6">Nova live</h1>
        <LiveForm />
      </div>
    );
  }

  const supabase = createAdminClient();
  const { data } = await supabase.from("live_events").select("*").eq("id", id).maybeSingle();
  if (!data) notFound();

  // Escolas independentes: uma live só abre no painel do domínio a que pertence.
  // Esta página lê com service_role (bypassa RLS) sem passar pelas actions, então
  // o guard precisa estar aqui — igual ao admin/cursos/[id]. Sem ele, o admin do
  // aula veria (não salvaria) as lives do backstage.
  if (!liveBelongsToPortal((data as LiveEvent).portal, await getPortal())) notFound();

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl font-bold text-foreground mb-6">Editar live</h1>
      <LiveForm live={data as LiveEvent} />
    </div>
  );
}
