import { createAdminClient } from "@/lib/supabase/server";

/**
 * Comissões de parceiro — chamadas por checkout, webhook Asaas e refund (código
 * servidor confiável), NUNCA pelo cliente.
 *
 * Fora de um arquivo `"use server"` de propósito: lá, `registerCommission` viraria
 * um endpoint HTTP e qualquer um com o Next-Action id poderia forjar registros
 * financeiros. `getCourseSplitConfig` expõe a wallet do parceiro — idem.
 */

// ── Buscar split para um curso (usado no checkout) ──
export async function getCourseSplitConfig(courseId: string) {
  const supabase = createAdminClient();
  const { data, error } = await (supabase as any)
    .from("partner_courses")
    .select("comissao_percentual, comissao_indicacao, instructor_partners!inner(id, nome, asaas_wallet_id, comissao_padrao, ativo)")
    .eq("course_id", courseId)
    .eq("ativo", true);

  if (error || !data?.length) return null;

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

  // upsert por enrollment_id: um retry de webhook não gera comissão em dobro.
  // (Depende do UNIQUE(enrollment_id) — migration 20260716_partner_commissions_unique.)
  const { error } = await (supabase as any)
    .from("partner_commissions")
    .upsert(
      {
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
      },
      { onConflict: "enrollment_id", ignoreDuplicates: true },
    );
  if (error) console.error("[Commission] Erro ao registrar:", error.message);
}

/**
 * Cancela a comissão de uma matrícula estornada. Sem isto, o parceiro continua
 * elegível a receber por uma venda 100% reembolsada. Chamado nos dois caminhos
 * de estorno (webhook PAYMENT_REFUNDED e refund do admin).
 */
export async function cancelCommissionByEnrollment(enrollmentId: string) {
  const supabase = createAdminClient();
  const { error } = await (supabase as any)
    .from("partner_commissions")
    .update({ status: "cancelado" })
    .eq("enrollment_id", enrollmentId)
    .neq("status", "pago");
  if (error) console.error("[Commission] Erro ao cancelar:", error.message);
}
