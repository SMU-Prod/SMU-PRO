"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/server";
import { getPortal, liveBelongsToPortal, filterCoursesByPortal } from "@/lib/portal";
import { deriveProvider, validateLiveEvent } from "@/lib/live/rules";
import type { LiveEvent, LiveEventInsert, LiveEventUpdate, LiveStatus } from "@/types/database";

/**
 * Mesma regra de assertAdmin do courses.ts: admin, content_manager ou instrutor.
 * Retorna também o role — espelhando assertInstructorOrAdmin do courses.ts —
 * para que os callers possam aplicar ownership filtering (instrutor vê/mexe só no que criou).
 */
async function assertAdmin(): Promise<{ userUuid: string; role: string }> {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");

  const supabase = createAdminClient();
  const { data: rows } = await supabase
    .from("users").select("id, role, ativo").eq("clerk_id", userId)
    .order("created_at", { ascending: false }).limit(1);
  const role = rows?.[0]?.role ?? null;

  if (rows?.[0]?.ativo === false) throw new Error("Conta desativada");
  if (role !== "admin" && role !== "content_manager" && role !== "instrutor") {
    throw new Error("Acesso negado: apenas administradores, content managers ou instrutores");
  }
  return { userUuid: rows![0].id as string, role: role as string };
}

/**
 * Bloqueia instrutor de gerenciar live de outro instrutor. Espelha o bloco de
 * ownership de instructorUpdateCourse do courses.ts. Admin/content_manager passam direto.
 */
function assertLiveOwnership(live: Pick<LiveEvent, "criado_por">, userUuid: string, role: string) {
  if (role === "instrutor" && live.criado_por !== userUuid) {
    throw new Error("Acesso negado: você só pode gerenciar as lives que criou");
  }
}

// Strict: admin-only operations (delete). Espelha assertAdminOnly do courses.ts.
async function assertAdminOnly() {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");

  const supabase = createAdminClient();
  const { data: rows } = await supabase
    .from("users").select("role, ativo").eq("clerk_id", userId).limit(1);
  if (rows?.[0]?.ativo === false) throw new Error("Conta desativada");
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

/**
 * Lives de um curso específico — para a página do curso do aluno.
 * course_id existia na tabela e nada lia; é isso que torna o vínculo visível.
 * Mesmo filtro liveBelongsToPortal das outras leituras deste arquivo.
 */
export async function listLivesForCourse(courseId: string): Promise<LiveEvent[]> {
  const portal = await getPortal();
  const supabase = createAdminClient();
  const { data } = await supabase
    .from("live_events")
    .select(PUBLIC_LIVE_COLUMNS)
    .eq("course_id", courseId)
    .in("status", ["agendado", "ao_vivo"])
    .order("inicio_previsto", { ascending: true });
  return ((data ?? []) as LiveEvent[]).filter((l) => liveBelongsToPortal(l.portal, portal));
}

/**
 * Lives que o aluno logado deveria ver no dashboard: das próximas 3, as que são
 * de um curso em que ele está matriculado (ativo) OU que não têm curso nenhum
 * (palestra/podcast avulso — é pra todo mundo). Vazio se deslogado.
 */
export async function listUpcomingLivesForUser(): Promise<LiveEvent[]> {
  const { userId } = await auth();
  if (!userId) return [];

  const portal = await getPortal();
  const supabase = createAdminClient();

  const { data: userRow } = await supabase.from("users").select("id").eq("clerk_id", userId).single();
  const userUuid = userRow?.id;
  if (!userUuid) return [];

  const { data: enrollments } = await supabase
    .from("enrollments")
    .select("course_id")
    .eq("user_id", userUuid)
    .eq("status", "ativo");
  const enrolledCourseIds = new Set((enrollments ?? []).map((e: any) => e.course_id));

  const { data } = await supabase
    .from("live_events")
    .select(PUBLIC_LIVE_COLUMNS)
    .in("status", ["agendado", "ao_vivo"])
    .order("inicio_previsto", { ascending: true });

  const lives = ((data ?? []) as LiveEvent[]).filter((l) => liveBelongsToPortal(l.portal, portal));
  const relevant = lives.filter((l) => !l.course_id || enrolledCourseIds.has(l.course_id));
  return relevant.slice(0, 3);
}

/**
 * Todas as lives da escola do portal — para o painel admin.
 * Admin/CM veem tudo (da escola atual); instrutor vê só as que criou —
 * mesma regra de instructorGetMyCourses do courses.ts, agora usando criado_por.
 */
export async function listLivesForAdmin(): Promise<LiveEvent[]> {
  const { userUuid, role } = await assertAdmin();
  const portal = await getPortal();
  const supabase = createAdminClient();
  const { data } = await supabase
    .from("live_events").select("*").order("inicio_previsto", { ascending: false });
  let lives = ((data ?? []) as LiveEvent[]).filter((l) => liveBelongsToPortal(l.portal, portal));
  if (role === "instrutor") {
    lives = lives.filter((l) => l.criado_por === userUuid);
  }
  return lives;
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
  const { userUuid } = await assertAdmin();

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
  const { userUuid, role } = await assertAdmin();
  await assertLiveInPortal(id);

  const supabase = createAdminClient();
  const { data: atual } = await supabase.from("live_events").select("*").eq("id", id).single();
  if (!atual) throw new Error("Live não encontrada");
  assertLiveOwnership(atual as LiveEvent, userUuid, role);
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
  const { userUuid, role } = await assertAdmin();
  await assertLiveInPortal(id);

  const supabaseCheck = createAdminClient();
  const { data: atual } = await supabaseCheck
    .from("live_events").select("criado_por, inicio_real").eq("id", id).single();
  if (!atual) throw new Error("Live não encontrada");
  assertLiveOwnership(atual as Pick<LiveEvent, "criado_por">, userUuid, role);

  const agora = new Date().toISOString();

  // Reabrir uma live encerrada precisa ser possível: encerrar por engano no meio
  // da transmissão, ou a transmissão cair e voltar, não podem matar o evento.
  //
  // Ao voltar para o ar:
  //   - inicio_real só é gravado se ainda estiver vazio. Sobrescrever apagaria o
  //     horário REAL do início, que é o fato que o log de auditoria (NR-01 Anexo
  //     II) precisa guardar — o segundo start não é o início da aula.
  //   - fim_real é limpo: `ao_vivo` carregando um fim no passado é estado incoerente.
  const extra =
    status === "ao_vivo"
      ? { inicio_real: (atual as any).inicio_real ?? agora, fim_real: null }
      : status === "encerrado"
        ? { fim_real: agora }
        : {};

  const supabase = createAdminClient();
  const { error } = await (supabase as any)
    .from("live_events").update({ status, ...extra, updated_at: agora }).eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/ao-vivo");
  revalidatePath("/admin/lives");
}

/** Uma linha do relatório de presença — já com nome/e-mail do aluno resolvidos. */
export type AttendanceRow = {
  id: string;
  user_id: string;
  nome: string;
  email: string;
  joined_at: string;
  last_seen_at: string;
  duracao_segundos: number;
  ip: string | null;
};

/**
 * Relatório de presença de uma live — a tela que a NR-01 Anexo II 4.7.1 exige
 * (log de acesso retido por 2 anos). Mesma tríade de guarda de updateLive:
 * portal certo + (se instrutor) só a própria live. Sem a checagem de ownership
 * aqui, um instrutor digitando a URL de outra live veria e-mail/IP de aluno
 * que não é dele — pior que o resto do painel porque aqui tem PII de verdade.
 */
export async function listAttendanceForLive(liveEventId: string): Promise<AttendanceRow[]> {
  const { userUuid, role } = await assertAdmin();
  await assertLiveInPortal(liveEventId);

  const supabase = createAdminClient();
  const { data: live } = await supabase
    .from("live_events").select("criado_por").eq("id", liveEventId).single();
  if (!live) throw new Error("Live não encontrada");
  assertLiveOwnership(live as Pick<LiveEvent, "criado_por">, userUuid, role);

  const { data } = await supabase
    .from("live_attendance")
    .select("id, user_id, joined_at, last_seen_at, duracao_segundos, ip, users(nome, email)")
    .eq("live_event_id", liveEventId)
    .order("duracao_segundos", { ascending: false });

  return ((data ?? []) as any[]).map((r) => ({
    id: r.id as string,
    user_id: r.user_id as string,
    nome: (r.users?.nome as string) ?? "—",
    email: (r.users?.email as string) ?? "—",
    joined_at: r.joined_at as string,
    last_seen_at: r.last_seen_at as string,
    duracao_segundos: r.duracao_segundos as number,
    ip: (r.ip as string | null) ?? null,
  }));
}

/**
 * Contagem de participantes (live_attendance) e mensagens (live_messages) para
 * um lote de lives — usada pela lista admin. UMA chamada por tabela pro lote
 * inteiro, nunca por linha: com N lives isso seria 2N queries na renderização
 * da lista inteira, e cada uma delas pagando o round-trip do Supabase.
 */
export async function getLiveEngagementCounts(
  liveEventIds: string[],
): Promise<Record<string, { participantes: number; mensagens: number }>> {
  await assertAdmin();

  const counts: Record<string, { participantes: number; mensagens: number }> = {};
  for (const id of liveEventIds) counts[id] = { participantes: 0, mensagens: 0 };
  if (liveEventIds.length === 0) return counts;

  const supabase = createAdminClient();
  const [{ data: attendance }, { data: messages }] = await Promise.all([
    supabase.from("live_attendance").select("live_event_id").in("live_event_id", liveEventIds),
    supabase.from("live_messages").select("live_event_id").in("live_event_id", liveEventIds),
  ]);

  for (const row of (attendance ?? []) as { live_event_id: string }[]) {
    counts[row.live_event_id].participantes++;
  }
  for (const row of (messages ?? []) as { live_event_id: string }[]) {
    counts[row.live_event_id].mensagens++;
  }
  return counts;
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
