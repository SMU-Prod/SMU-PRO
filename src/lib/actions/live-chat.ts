"use server";

import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { stripHtml } from "@/lib/utils";
import type { LiveMessage } from "@/types/database";

const MAX_LEN = 500;
const JANELA_MS = 10_000;
const MAX_POR_JANELA = 5;

export async function listLiveMessages(liveEventId: string): Promise<LiveMessage[]> {
  const supabase = createAdminClient();
  const { data } = await supabase
    .from("live_messages").select("*")
    .eq("live_event_id", liveEventId).eq("oculto", false)
    .order("created_at", { ascending: false }).limit(200);
  // Buscamos as 200 mais RECENTES (desc) para nao deixar quem entra tarde
  // preso no inicio da transmissao; revertemos aqui para devolver ordem cronologica.
  return ((data ?? []) as LiveMessage[]).reverse();
}

export async function sendLiveMessage(liveEventId: string, texto: string): Promise<void> {
  const { userId } = await auth();
  if (!userId) throw new Error("Entre na sua conta para participar do chat.");

  const limpo = stripHtml(texto);
  if (!limpo) throw new Error("Mensagem vazia.");
  if (limpo.length > MAX_LEN) throw new Error(`Máximo de ${MAX_LEN} caracteres.`);

  const supabase = createAdminClient();
  const { data: userRow } = await supabase
    .from("users").select("id, nome, role").eq("clerk_id", userId).single();
  const userUuid = userRow?.id;
  if (!userUuid) throw new Error("Usuário não encontrado.");
  const autorNome = (userRow as any)?.nome?.trim() || "Aluno";
  const autorRole = (userRow as any)?.role ?? null;

  const { data: live } = await supabase
    .from("live_events").select("status").eq("id", liveEventId).single();
  if ((live as any)?.status !== "ao_vivo") throw new Error("A transmissão não está ao vivo.");

  // Rate limit no servidor — o cliente não é confiável.
  const desde = new Date(Date.now() - JANELA_MS).toISOString();
  const { count } = await supabase
    .from("live_messages")
    .select("id", { count: "exact", head: true })
    .eq("live_event_id", liveEventId).eq("user_id", userUuid)
    .gte("created_at", desde);
  if ((count ?? 0) >= MAX_POR_JANELA) throw new Error("Devagar — aguarde alguns segundos.");

  const { error } = await (supabase as any)
    .from("live_messages")
    .insert({ live_event_id: liveEventId, user_id: userUuid, texto: limpo, autor_nome: autorNome, autor_role: autorRole });
  if (error) throw new Error(error.message);
}
