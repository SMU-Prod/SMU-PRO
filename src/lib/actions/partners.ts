"use server";

import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

// ── Helpers ──

async function requireAdmin() {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");
  const supabase = createAdminClient();
  const { data: rows } = await supabase
    .from("users")
    .select("role")
    .eq("clerk_id", userId)
    .limit(1);
  if (rows?.[0]?.role !== "admin") throw new Error("Acesso negado");
  return supabase;
}

// ── CRUD Parceiros ──

export async function listPartners() {
  const supabase = await requireAdmin();
  const { data, error } = await (supabase as any)
    .from("instructor_partners")
    .select("*, partner_courses(id, course_id, comissao_percentual, comissao_indicacao, ativo, courses:course_id(titulo))")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data ?? [];
}

export async function createPartner(input: {
  nome: string;
  email: string;
  cpf?: string;
  telefone?: string;
  bio?: string;
  comissao_padrao?: number;
  asaas_wallet_id?: string;
  instructor_id?: string;
}) {
  const supabase = await requireAdmin();
  const { data, error } = await (supabase as any)
    .from("instructor_partners")
    .insert({
      nome: input.nome,
      email: input.email,
      cpf: input.cpf || null,
      telefone: input.telefone || null,
      bio: input.bio || null,
      comissao_padrao: input.comissao_padrao ?? 40,
      asaas_wallet_id: input.asaas_wallet_id || null,
      instructor_id: input.instructor_id || null,
    })
    .select()
    .single();
  if (error) throw new Error(error.message);
  revalidatePath("/admin/parceiros");
  return data;
}

export async function updatePartner(id: string, updates: Record<string, any>) {
  const supabase = await requireAdmin();
  const { error } = await (supabase as any)
    .from("instructor_partners")
    .update(updates)
    .eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/parceiros");
}

export async function deletePartner(id: string) {
  const supabase = await requireAdmin();
  // Soft delete — desativar
  const { error } = await (supabase as any)
    .from("instructor_partners")
    .update({ ativo: false })
    .eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/parceiros");
}

// ── Vínculo Parceiro-Curso ──

export async function assignPartnerToCourse(input: {
  partnerId: string;
  courseId: string;
  comissaoPercentual?: number;
  comissaoIndicacao?: number;
}) {
  const supabase = await requireAdmin();
  const { error } = await (supabase as any)
    .from("partner_courses")
    .upsert({
      partner_id: input.partnerId,
      course_id: input.courseId,
      comissao_percentual: input.comissaoPercentual ?? null,
      comissao_indicacao: input.comissaoIndicacao ?? 60,
    }, { onConflict: "partner_id,course_id" });
  if (error) throw new Error(error.message);
  revalidatePath("/admin/parceiros");
}

export async function removePartnerFromCourse(partnerId: string, courseId: string) {
  const supabase = await requireAdmin();
  const { error } = await (supabase as any)
    .from("partner_courses")
    .delete()
    .eq("partner_id", partnerId)
    .eq("course_id", courseId);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/parceiros");
}

// ── Buscar split para um curso (usado no checkout) ──

export async function getCourseSplitConfig(courseId: string) {
  const supabase = createAdminClient();
  const { data, error } = await (supabase as any)
    .from("partner_courses")
    .select("comissao_percentual, comissao_indicacao, instructor_partners!inner(id, nome, asaas_wallet_id, comissao_padrao, ativo)")
    .eq("course_id", courseId)
    .eq("ativo", true);

  if (error || !data?.length) return null;

  // Pega o primeiro parceiro ativo vinculado
  const pc = data[0];
  const partner = pc.instructor_partners;

  if (!partner?.ativo || !partner?.asaas_wallet_id) return null;

  return {
    partnerId: partner.id,
    partnerName: partner.nome,
    walletId: partner.asaas_wallet_id,
    comissaoPercentual: pc.comissao_percentual ?? partner.comissao_padrao ?? 40,
    comissaoIndicacao: pc.comissao_indicacao ?? 60,
  };
}

// ── Registrar comissão (chamado após pagamento confirmado) ──

export async function registerCommission(input: {
  partnerId: string;
  enrollmentId: string;
  courseId: string;
  valorVenda: number;
  valorLiquido: number;
  comissaoPercentual: number;
  asaasSplitId?: string;
  tipoIndicacao?: string;
}) {
  const supabase = createAdminClient();
  const valorComissao = Math.round(input.valorLiquido * (input.comissaoPercentual / 100) * 100) / 100;
  const valorPlataforma = Math.round((input.valorLiquido - valorComissao) * 100) / 100;

  const { error } = await (supabase as any)
    .from("partner_commissions")
    .insert({
      partner_id: input.partnerId,
      enrollment_id: input.enrollmentId,
      course_id: input.courseId,
      valor_venda: input.valorVenda,
      valor_liquido: input.valorLiquido,
      comissao_percentual: input.comissaoPercentual,
      valor_comissao: valorComissao,
      valor_plataforma: valorPlataforma,
      asaas_split_id: input.asaasSplitId || null,
      tipo_indicacao: input.tipoIndicacao || "organico",
      status: "pendente",
    });
  if (error) console.error("[Commission] Erro ao registrar:", error.message);
}

// ── Relatório de comissões ──

export async function getPartnerCommissions(partnerId?: string, page = 1, limit = 20) {
  const supabase = await requireAdmin();
  let query = (supabase as any)
    .from("partner_commissions")
    .select("*, instructor_partners(nome), courses:course_id(titulo)", { count: "exact" })
    .order("created_at", { ascending: false })
    .range((page - 1) * limit, page * limit - 1);

  if (partnerId) {
    query = query.eq("partner_id", partnerId);
  }

  const { data, count, error } = await query;
  if (error) throw new Error(error.message);
  return { commissions: data ?? [], total: count ?? 0 };
}

export async function getPartnerDashboardStats(partnerId: string) {
  const supabase = await requireAdmin();

  const { data: commissions } = await (supabase as any)
    .from("partner_commissions")
    .select("valor_comissao, status, created_at")
    .eq("partner_id", partnerId);

  const all = commissions ?? [];
  const totalGanho = all.reduce((s: number, c: any) => s + (Number(c.valor_comissao) || 0), 0);
  const totalPendente = all.filter((c: any) => c.status === "pendente").reduce((s: number, c: any) => s + (Number(c.valor_comissao) || 0), 0);
  const totalPago = all.filter((c: any) => c.status === "pago").reduce((s: number, c: any) => s + (Number(c.valor_comissao) || 0), 0);
  const totalVendas = all.length;

  return { totalGanho, totalPendente, totalPago, totalVendas };
}
