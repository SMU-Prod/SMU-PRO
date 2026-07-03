"use server";

import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import {
  createOrGetCustomer,
  createSubscription as createAsaasSubscription,
  cancelSubscription as cancelAsaasSubscription,
  getDueDate,
} from "@/lib/asaas";
import type { SubscriptionStatus, SubscriptionPlan, Subscription } from "@/types/database";

// ============================================================
// Helpers
// ============================================================

// Tabelas subscription_plans e subscriptions ainda não estão nos tipos gerados do Supabase.
// Usamos `any` para queries nessas tabelas até o próximo `supabase gen types`.
function db() {
  return createAdminClient() as any;
}

async function getAuthenticatedUser() {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");

  const supabase = createAdminClient();
  const { data: user } = await supabase
    .from("users")
    .select("id, nome, email, cpf, clerk_id")
    .eq("clerk_id", userId)
    .single();

  if (!user) throw new Error("Usuário não encontrado");
  return { userId, user, supabase };
}

// ============================================================
// Public: Aluno
// ============================================================

/** Busca plano de assinatura ativo */
export async function getActivePlan(): Promise<SubscriptionPlan | null> {
  const { data } = await db()
    .from("subscription_plans")
    .select("*")
    .eq("ativo", true)
    .order("created_at", { ascending: true })
    .limit(1)
    .maybeSingle();

  return data as SubscriptionPlan | null;
}

/** Busca a assinatura ativa do usuário logado */
export async function getUserSubscription() {
  const { userId } = await auth();
  if (!userId) return null;

  const supabase = createAdminClient();
  const { data: userRow } = await supabase
    .from("users")
    .select("id")
    .eq("clerk_id", userId)
    .single();

  if (!userRow) return null;

  const { data } = await db()
    .from("subscriptions")
    .select("*, subscription_plans(*)")
    .eq("user_id", userRow.id)
    .in("status", ["ativo", "pendente"])
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  return data;
}

/** Verifica se o usuário tem assinatura ativa para acessar um curso */
export async function hasSubscriptionAccess(userUuid: string, courseId: string): Promise<boolean> {
  const supabase = db();

  // 1. Verificar se o curso está disponível na assinatura
  const { data: course } = await supabase
    .from("courses")
    .select("disponivel_assinatura")
    .eq("id", courseId)
    .single();

  if (!course?.disponivel_assinatura) return false;

  // 2. Verificar se o usuário tem assinatura ativa
  const { data: sub } = await supabase
    .from("subscriptions")
    .select("id, status")
    .eq("user_id", userUuid)
    .eq("status", "ativo")
    .limit(1)
    .maybeSingle();

  return !!sub;
}

/** Aluno cria uma assinatura (pagamento recorrente via Asaas) */
export async function createUserSubscription(input: {
  planId: string;
  billingType: "PIX" | "CREDIT_CARD" | "BOLETO";
  ciclo: "mensal" | "anual";
}) {
  const { user } = await getAuthenticatedUser();
  const sdb = db();

  // Verificar se já tem assinatura ativa
  const { data: existing } = await sdb
    .from("subscriptions")
    .select("id")
    .eq("user_id", user.id)
    .in("status", ["ativo", "pendente"])
    .limit(1)
    .maybeSingle();

  if (existing) throw new Error("Você já possui uma assinatura ativa.");

  // Buscar plano
  const { data: plan } = await sdb
    .from("subscription_plans")
    .select("*")
    .eq("id", input.planId)
    .eq("ativo", true)
    .single();

  if (!plan) throw new Error("Plano não encontrado.");

  const value = input.ciclo === "anual" && plan.preco_anual
    ? plan.preco_anual
    : plan.preco_mensal;

  // Criar/buscar cliente no Asaas
  const customer = await createOrGetCustomer({
    name: user.nome ?? "Aluno SMU PRO",
    email: user.email,
    cpfCnpj: (user as any).cpf ?? undefined,
    externalReference: (user as any).clerk_id,
  });

  // Criar assinatura no Asaas
  const asaasSub = await createAsaasSubscription({
    customer: customer.id,
    billingType: input.billingType,
    value,
    cycle: input.ciclo === "anual" ? "YEARLY" : "MONTHLY",
    nextDueDate: getDueDate(0), // Começa hoje
    description: `Assinatura ${plan.nome} - ${input.ciclo}`,
    externalReference: `sub_${user.id}`,
  });

  // Salvar no banco
  const { data: sub, error } = await sdb
    .from("subscriptions")
    .insert({
      user_id: user.id,
      plan_id: input.planId,
      status: "pendente",
      asaas_subscription_id: asaasSub.id,
      asaas_customer_id: customer.id,
      ciclo: input.ciclo,
      data_inicio: new Date().toISOString(),
      data_proximo_pagamento: asaasSub.nextDueDate,
    })
    .select()
    .single();

  if (error) throw error;

  revalidatePath("/dashboard");
  return sub;
}

/** Aluno cancela assinatura */
export async function cancelUserSubscription() {
  const { user } = await getAuthenticatedUser();
  const sdb = db();

  const { data: sub } = await sdb
    .from("subscriptions")
    .select("*")
    .eq("user_id", user.id)
    .in("status", ["ativo", "pendente"])
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (!sub) throw new Error("Nenhuma assinatura ativa encontrada.");

  // Cancelar no Asaas
  if (sub.asaas_subscription_id) {
    try {
      await cancelAsaasSubscription(sub.asaas_subscription_id);
    } catch (err) {
      console.error("[Subscription] Erro ao cancelar no Asaas:", err);
    }
  }

  // Atualizar no banco
  await sdb
    .from("subscriptions")
    .update({
      status: "cancelado",
      data_cancelamento: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("id", sub.id);

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/assinatura");
}

// ============================================================
// Admin
// ============================================================

async function assertAdmin() {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");
  const supabase = createAdminClient();
  const { data: rows } = await supabase
    .from("users")
    .select("role")
    .eq("clerk_id", userId)
    .limit(1);
  if (rows?.[0]?.role !== "admin") throw new Error("Acesso negado");
}

/** Admin: lista todos os planos */
export async function adminGetPlans() {
  await assertAdmin();
  const sdb = db();
  const { data, error } = await sdb
    .from("subscription_plans")
    .select("*")
    .order("created_at", { ascending: true });
  if (error) throw error;
  return data ?? [];
}

/** Admin: atualiza plano */
export async function adminUpdatePlan(planId: string, updates: {
  nome?: string;
  descricao?: string;
  preco_mensal?: number;
  preco_anual?: number | null;
  ativo?: boolean;
  features?: string[];
}) {
  await assertAdmin();
  const sdb = db();
  const { error } = await sdb
    .from("subscription_plans")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", planId);
  if (error) throw error;
  revalidatePath("/admin/assinaturas");
}

/** Admin: cria novo plano */
export async function adminCreatePlan(input: {
  nome: string;
  descricao?: string;
  preco_mensal: number;
  preco_anual?: number;
  features?: string[];
}) {
  await assertAdmin();
  const sdb = db();
  const { data, error } = await sdb
    .from("subscription_plans")
    .insert({
      nome: input.nome,
      descricao: input.descricao ?? null,
      preco_mensal: input.preco_mensal,
      preco_anual: input.preco_anual ?? null,
      ativo: true,
      features: input.features ?? [],
    })
    .select()
    .single();
  if (error) throw error;
  revalidatePath("/admin/assinaturas");
  return data;
}

/** Admin: lista assinaturas de usuários */
export async function adminGetSubscriptions(page = 1, limit = 20) {
  await assertAdmin();
  const sdb = db();
  const { data, count, error } = await sdb
    .from("subscriptions")
    .select("*, users(nome, email, avatar_url), subscription_plans(nome, preco_mensal)", { count: "exact" })
    .order("created_at", { ascending: false })
    .range((page - 1) * limit, page * limit - 1);
  if (error) throw error;
  return { subscriptions: data ?? [], total: count ?? 0 };
}
