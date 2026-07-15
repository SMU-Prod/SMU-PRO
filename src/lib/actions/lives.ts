"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/server";
import { getPortal, liveBelongsToPortal, filterCoursesByPortal } from "@/lib/portal";
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

// Strict: admin-only operations (delete). Espelha assertAdminOnly do courses.ts.
async function assertAdminOnly() {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");

  const supabase = createAdminClient();
  const { data: rows } = await supabase
    .from("users").select("role").eq("clerk_id", userId).limit(1);
  if (rows?.[0]?.role !== "admin") throw new Error("Acesso negado: apenas administradores");
  return userId;
}

/** Colunas públicas: exclui cf_live_input_id/cf_video_uid (identificadores internos do Cloudflare). */
const PUBLIC_LIVE_COLUMNS =
  "id, titulo, slug, descricao, tipo, portal, acesso, provider, course_id, youtube_id, status, inicio_previsto, inicio_real, fim_real, recording_lesson_id, criado_por, created_at, updated_at";

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
    .from("live_events").select(PUBLIC_LIVE_COLUMNS)
    .in("status", ["agendado", "ao_vivo"])
    .order("inicio_previsto", { ascending: true });
  return ((data ?? []) as LiveEvent[]).filter((l) => liveBelongsToPortal(l.portal, portal));
}

/** Live por slug — null se não existir OU se for de outra escola. */
export async function getLiveBySlug(slug: string): Promise<LiveEvent | null> {
  const portal = await getPortal();
  const supabase = createAdminClient();
  const { data } = await supabase.from("live_events").select(PUBLIC_LIVE_COLUMNS).eq("slug", slug).maybeSingle();
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

/**
 * Cursos ativos da escola do portal atual — para o seletor de curso no
 * formulário de live. Busca só id/titulo/categorias (nada do catálogo
 * completo do outro portal vaza pra cá) e filtra em SQL/servidor, nunca
 * no cliente.
 */
export async function listCoursesForPortalSelect(): Promise<{ id: string; titulo: string }[]> {
  await assertAdmin();
  const portal = await getPortal();
  const supabase = createAdminClient();
  const { data } = await supabase
    .from("courses")
    .select("id, titulo, categorias")
    .eq("ativo", true)
    .order("titulo");
  return filterCoursesByPortal((data ?? []) as any[], portal).map((c: any) => ({ id: c.id, titulo: c.titulo }));
}

export async function createLive(input: LiveEventInsert) {
  const userUuid = await assertAdmin();

  // Regra do dono: cada domínio é uma escola independente. Sem isto, um admin
  // logado no aula.smuproducoes.com podia gravar direto no catálogo do Backstage.
  const portal = await getPortal();
  if (!liveBelongsToPortal(input.portal, portal)) {
    throw new Error(
      portal === "aula"
        ? "Você está na escola do aula — não é possível criar uma live da escola Backstage por aqui."
        : "Você está na escola Backstage — não é possível criar uma live da escola do aula por aqui.",
    );
  }

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

  // O portal RESULTANTE também precisa pertencer à escola do caller — assertLiveInPortal
  // só checou o portal ANTIGO, então sem isto input.portal moveria a live entre escolas.
  const portal = await getPortal();
  if (!liveBelongsToPortal(merged.portal, portal)) {
    throw new Error("Não é possível mover uma live para a escola do outro domínio.");
  }

  // Mesma recusa de createLive: Fase 1 não tem player Cloudflare implementado.
  if (merged.provider === "cloudflare") {
    throw new Error("Live restrita (Cloudflare) ainda não está disponível — use live aberta por enquanto.");
  }

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
  await assertAdminOnly();
  await assertLiveInPortal(id);
  const supabase = createAdminClient();
  const { error } = await supabase.from("live_events").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/ao-vivo");
  revalidatePath("/admin/lives");
}
