"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/server";
import { getPortal, liveBelongsToPortal } from "@/lib/portal";
import { deriveProvider, validateLiveEvent } from "@/lib/live/rules";
import type { LiveEvent, LiveEventInsert, LiveEventUpdate, LiveStatus } from "@/types/database";

/** Mesma regra de assertAdmin do courses.ts: admin, content_manager ou instrutor. */
async function assertAdmin(): Promise<string> {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");

  const supabase = createAdminClient();
  const { data: rows } = await supabase
    .from("users").select("id, role").eq("clerk_id", userId)
    .order("created_at", { ascending: false }).limit(1);
  const role = rows?.[0]?.role ?? null;

  if (role !== "admin" && role !== "content_manager" && role !== "instrutor") {
    throw new Error("Acesso negado: apenas administradores, content managers ou instrutores");
  }
  return rows![0].id as string;
}

/** Bloqueia gerenciar live de outra escola. Espelha assertCourseInPortal do courses.ts. */
async function assertLiveInPortal(id: string) {
  const portal = await getPortal();
  const supabase = createAdminClient();
  const { data } = await supabase.from("live_events").select("portal").eq("id", id).single();
  if (data && !liveBelongsToPortal((data as any).portal, portal)) {
    throw new Error(
      portal === "aula"
        ? "Esta live é da escola Backstage — acesse pelo smuproducoes.com para editá-la."
        : "Esta live é da escola do aula — acesse pelo aula.smuproducoes.com para editá-la.",
    );
  }
}

/** Agenda do portal atual: agendadas e ao vivo, mais próximas primeiro. */
export async function listLivesForPortal(): Promise<LiveEvent[]> {
  const portal = await getPortal();
  const supabase = createAdminClient();
  const { data } = await supabase
    .from("live_events").select("*")
    .in("status", ["agendado", "ao_vivo"])
    .order("inicio_previsto", { ascending: true });
  return ((data ?? []) as LiveEvent[]).filter((l) => liveBelongsToPortal(l.portal, portal));
}

/** Live por slug — null se não existir OU se for de outra escola. */
export async function getLiveBySlug(slug: string): Promise<LiveEvent | null> {
  const portal = await getPortal();
  const supabase = createAdminClient();
  const { data } = await supabase.from("live_events").select("*").eq("slug", slug).maybeSingle();
  if (!data) return null;
  const live = data as LiveEvent;
  return liveBelongsToPortal(live.portal, portal) ? live : null;
}

/** Todas as lives da escola do portal — para o painel admin. */
export async function listLivesForAdmin(): Promise<LiveEvent[]> {
  await assertAdmin();
  const portal = await getPortal();
  const supabase = createAdminClient();
  const { data } = await supabase
    .from("live_events").select("*").order("inicio_previsto", { ascending: false });
  return ((data ?? []) as LiveEvent[]).filter((l) => liveBelongsToPortal(l.portal, portal));
}

export async function createLive(input: LiveEventInsert) {
  const userUuid = await assertAdmin();

  const acesso = input.acesso ?? "aberto";
  const provider = input.provider ?? deriveProvider(acesso);

  const check = validateLiveEvent({
    portal: input.portal,
    acesso,
    provider,
    course_id: input.course_id ?? null,
    youtube_id: input.youtube_id ?? null,
  });
  if (!check.ok) throw new Error(check.erro);

  // Fase 1 não tem Cloudflare implementado — falhar alto em vez de gravar
  // uma live que nenhum player sabe tocar.
  if (provider === "cloudflare") {
    throw new Error("Live restrita (Cloudflare) ainda não está disponível — use live aberta por enquanto.");
  }

  const supabase = createAdminClient();
  const { data, error } = await (supabase as any)
    .from("live_events")
    .insert({ ...input, acesso, provider, criado_por: userUuid })
    .select().single();
  if (error) throw new Error(error.message);

  revalidatePath("/ao-vivo");
  revalidatePath("/admin/lives");
  return data as LiveEvent;
}

export async function updateLive(id: string, input: LiveEventUpdate) {
  await assertAdmin();
  await assertLiveInPortal(id);

  const supabase = createAdminClient();
  const { data: atual } = await supabase.from("live_events").select("*").eq("id", id).single();
  if (!atual) throw new Error("Live não encontrada");
  const merged = { ...(atual as LiveEvent), ...input };

  const check = validateLiveEvent({
    portal: merged.portal,
    acesso: merged.acesso,
    provider: merged.provider,
    course_id: merged.course_id ?? null,
    youtube_id: merged.youtube_id ?? null,
  });
  if (!check.ok) throw new Error(check.erro);

  const { error } = await (supabase as any)
    .from("live_events")
    .update({ ...input, updated_at: new Date().toISOString() })
    .eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/ao-vivo");
  revalidatePath(`/ao-vivo/${merged.slug}`);
  revalidatePath("/admin/lives");
}

export async function setLiveStatus(id: string, status: LiveStatus) {
  await assertAdmin();
  await assertLiveInPortal(id);

  const agora = new Date().toISOString();
  const extra =
    status === "ao_vivo" ? { inicio_real: agora }
    : status === "encerrado" ? { fim_real: agora }
    : {};

  const supabase = createAdminClient();
  const { error } = await (supabase as any)
    .from("live_events").update({ status, ...extra, updated_at: agora }).eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/ao-vivo");
  revalidatePath("/admin/lives");
}

export async function deleteLive(id: string) {
  await assertAdmin();
  await assertLiveInPortal(id);
  const supabase = createAdminClient();
  const { error } = await supabase.from("live_events").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/ao-vivo");
  revalidatePath("/admin/lives");
}
