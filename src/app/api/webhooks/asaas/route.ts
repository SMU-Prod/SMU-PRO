import { timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/server";
import { sendPaymentConfirmedEmail } from "@/lib/email";
import { createNotification, notifyAdmins } from "@/lib/actions/notifications";
import { getCourseSplitConfig, registerCommission } from "@/lib/actions/partners";
import type { AsaasWebhookPayload } from "@/lib/asaas";

/**
 * ISSUE #17: Get Asaas fee rate based on billing type
 * PIX: 1.99%, Boleto: 2.49%, Card: 2.99%
 */
function getAsaasFeeRate(billingType: string): number {
  switch (billingType) {
    case "PIX":
      return 0.0199; // 1.99%
    case "BOLETO":
      return 0.0249; // 2.49%
    case "CREDIT_CARD":
      return 0.0299; // 2.99%
    default:
      return 0.035; // Fallback to old hardcoded value
  }
}

/**
 * POST /api/webhooks/asaas
 *
 * Recebe eventos do Asaas e processa pagamentos.
 *
 * Segurança: verifica o header "asaas-access-token" contra
 * a env ASAAS_WEBHOOK_TOKEN que você configurou ao criar o webhook.
 *
 * Configure o webhook no Asaas em:
 * Minha Conta → Integrações → Webhooks → Novo webhook
 * URL: https://seu-dominio.com/api/webhooks/asaas
 * Events: PAYMENT_RECEIVED, PAYMENT_CONFIRMED
 *
 * Eventos tratados:
 * - PAYMENT_RECEIVED           → Ativa enrollment (PIX e boleto compensado)
 * - PAYMENT_CONFIRMED          → Ativa enrollment (crédito autorizado)
 * - PAYMENT_REFUNDED           → Cancela enrollment e comissão
 * - PAYMENT_OVERDUE            → Marca enrollment como expirado
 * - PAYMENT_CHARGEBACK_REQUESTED → Cancela enrollment e comissão (chargeback)
 * - PAYMENT_AWAITING_RISK_ANALYSIS → Log apenas (não atua)
 */
export async function POST(req: Request) {
  // 1. Verificar autenticidade do webhook (timing-safe para evitar timing attacks)
  const webhookToken = req.headers.get("asaas-access-token") ?? "";
  const expectedToken = process.env.ASAAS_WEBHOOK_TOKEN;
  if (!expectedToken) {
    console.error("[Asaas Webhook] ASAAS_WEBHOOK_TOKEN não configurado");
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }
  let tokenValid = false;
  try {
    const a = Buffer.from(webhookToken);
    const b = Buffer.from(expectedToken);
    tokenValid = a.length === b.length && timingSafeEqual(a, b);
  } catch {
    tokenValid = false;
  }
  if (!tokenValid) {
    console.warn("[Asaas Webhook] Token inválido");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: AsaasWebhookPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { event, payment } = body;

  console.log(`[Asaas Webhook] Evento: ${event} | Payment: ${payment?.id?.substring(0, 12)}...`);

  const supabase = createAdminClient();

  // Deduplication: verificar se esse webhook já foi processado
  if (payment?.id) {
    const dedupeKey = `${event}_${payment.id}`;
    const { error: dedupeErr } = await (supabase as any).from("webhook_log").insert({
      provider: "asaas",
      event_type: event,
      external_id: dedupeKey,
    });
    if (dedupeErr?.code === "23505") {
      // Unique constraint violation = já processado
      console.log("[Asaas Webhook] Já processado, ignorando duplicata.");
      return NextResponse.json({ received: true, deduplicated: true });
    }
  }

  try {
    switch (event) {
      // ─── Pagamento recebido (PIX imediato ou boleto compensado) ─────────
      case "PAYMENT_RECEIVED":
      // ─── Cartão de crédito autorizado ────────────────────────────────────
      case "PAYMENT_CONFIRMED": {
        if (!payment?.externalReference) {
          console.warn("[Asaas Webhook] externalReference vazio, ignorando.");
          break;
        }

        const enrollmentId = payment.externalReference;

        // Busca o enrollment
        const { data: enrollment } = await supabase
          .from("enrollments")
          .select("id, user_id, course_id, status")
          .eq("id", enrollmentId)
          .single();

        if (!enrollment) {
          console.warn("[Asaas Webhook] Enrollment não encontrado:", enrollmentId);
          break;
        }

        // Idempotência: não reprocessa se já ativo
        if (enrollment.status === "ativo") {
          console.log("[Asaas Webhook] Enrollment já ativo, ignorando.");
          break;
        }

        // ISSUE #18: Validate payment value matches course price
        const { data: course } = await supabase
          .from("courses")
          .select("preco")
          .eq("id", enrollment.course_id)
          .single();

        if (course) {
          const tolerance = 0.01; // Small tolerance for rounding errors (1 cent)
          if (course.preco && payment.value < (course.preco - tolerance)) {
            console.error(
              `[Asaas Webhook] BLOQUEADO: Valor do pagamento (R$ ${payment.value}) ` +
              `inferior ao preço do curso (R$ ${course.preco}). EnrollmentId: ${enrollmentId}. ` +
              `Enrollment NÃO será ativado.`
            );

            // Notificar admins sobre a discrepância
            notifyAdmins({
              titulo: "Pagamento com valor incorreto detectado",
              mensagem: `Pagamento R$ ${payment.value} < preço R$ ${course.preco}. Enrollment ${enrollmentId} não ativado. Verificar manualmente.`,
              link: "/admin/pagamentos",
            }).catch((err) => console.error("[Underpayment Notification Error]", err));

            // Log mas NÃO ativar o enrollment
            await supabase.from("activity_log").insert({
              user_id: enrollment.user_id,
              tipo: "payment",
              descricao: `Pagamento com valor inferior bloqueado: R$ ${payment.value} < R$ ${course.preco}`,
              metadata: { event, payment_id: payment.id, enrollment_id: enrollmentId, value: payment.value, expected: course.preco },
            });

            break; // Não ativa o enrollment
          }
        }

        // Ativa o enrollment
        await supabase
          .from("enrollments")
          .update({
            status: "ativo",
            valor_pago: payment.value,
            payment_id: payment.id,
          })
          .eq("id", enrollmentId);

        // Revalidate affected pages after enrollment activation
        revalidatePath("/dashboard", "layout");
        revalidatePath("/admin", "layout");

        // ISSUE #12: Register commission after payment confirmed (moved from checkout)
        const splitConfig = await getCourseSplitConfig(enrollment.course_id);
        if (splitConfig) {
          const feeRate = getAsaasFeeRate(payment.billingType);
          const taxaEstimada = payment.value * feeRate;
          const valorLiquido = payment.value - taxaEstimada;
          registerCommission({
            partnerId: splitConfig.partnerId,
            enrollmentId,
            courseId: enrollment.course_id,
            valorVenda: payment.value,
            valorLiquido,
            comissaoPercentual: splitConfig.comissaoPercentual,
            tipoIndicacao: "organico",
          }).catch((err) => console.error("[Commission] Erro ao registrar:", err));
        }

        // Log de atividade
        await supabase.from("activity_log").insert({
          user_id: enrollment.user_id,
          tipo: "payment",
          descricao: `Pagamento ${event === "PAYMENT_RECEIVED" ? "recebido" : "confirmado"} via ${payment.billingType}`,
          metadata: {
            event,
            payment_id: payment.id,
            enrollment_id: enrollmentId,
            course_id: enrollment.course_id,
            value: payment.value,
            billing_type: payment.billingType,
          },
        });

        // Email de confirmação de pagamento
        const { data: userData } = await supabase
          .from("users")
          .select("email, nome")
          .eq("id", enrollment.user_id)
          .single();

        const { data: courseData } = await supabase
          .from("courses")
          .select("titulo, slug")
          .eq("id", enrollment.course_id)
          .single();

        if (userData?.email && courseData) {
          sendPaymentConfirmedEmail({
            to: userData.email,
            nome: userData.nome,
            courseTitulo: courseData.titulo,
            courseSlug: courseData.slug,
            valor: payment.value,
            billingType: payment.billingType,
          }).catch((err) => console.error("[Email] Erro ao enviar confirmação:", err));
        }

        // In-app notifications
        if (courseData) {
          createNotification({
            userUuid: enrollment.user_id,
            tipo: "payment",
            titulo: `Pagamento confirmado: ${courseData.titulo}`,
            mensagem: "Seu acesso ao curso foi liberado. Bons estudos!",
            link: `/cursos/${courseData.slug}`,
          }).catch((err) => console.error("[Asaas Webhook Notification Error]", err));

          notifyAdmins({
            titulo: `Nova venda: ${courseData.titulo}`,
            mensagem: `${userData?.nome ?? "Aluno"} — R$ ${payment.value?.toFixed(2)} via ${payment.billingType}`,
            link: "/admin",
          }).catch((err) => console.error("[Asaas Admin Notification Error]", err));
        }

        console.log(`[Asaas Webhook] Enrollment ativado: ${enrollmentId}`);
        break;
      }

      // ─── Reembolso ────────────────────────────────────────────────────────
      case "PAYMENT_REFUNDED":
      case "PAYMENT_PARTIALLY_REFUNDED": {
        if (!payment?.externalReference) break;

        // Só cancela enrollment que está ativo ou pendente (evita atualizar expirados/cancelados)
        const { data: refundEnrollment } = await supabase
          .from("enrollments")
          .update({ status: "cancelado" })
          .eq("id", payment.externalReference)
          .in("status", ["ativo", "pendente"])
          .select("user_id")
          .maybeSingle();

        // Cancel associated commissions (ISSUE #13: refund should cancel commission)
        if (refundEnrollment) {
          await (supabase as any)
            .from("partner_commissions")
            .update({ status: "cancelado" })
            .eq("enrollment_id", payment.externalReference);
        }

        await supabase.from("activity_log").insert({
          user_id: refundEnrollment?.user_id ?? null,
          tipo: "payment",
          descricao: `Reembolso processado via ${payment.billingType}`,
          metadata: { event, payment_id: payment.id, enrollment_id: payment.externalReference },
        });

        if (refundEnrollment?.user_id) {
          createNotification({
            userUuid: refundEnrollment.user_id,
            tipo: "payment",
            titulo: "Reembolso processado",
            mensagem: "Seu pagamento foi reembolsado e o acesso ao curso foi cancelado.",
            link: "/dashboard/cursos",
          }).catch((err) => console.error("[Asaas Refund Notification Error]", err));
        }

        console.log(`[Asaas Webhook] Enrollment cancelado por reembolso: ${payment.externalReference}`);
        break;
      }

      // ─── Vencido ──────────────────────────────────────────────────────────
      case "PAYMENT_OVERDUE": {
        if (!payment?.externalReference) break;

        // Busca user_id para o log — não cancela (boleto pode ser pago com atraso)
        const { data: overdueEnrollment } = await supabase
          .from("enrollments")
          .select("user_id")
          .eq("id", payment.externalReference)
          .maybeSingle();

        await supabase.from("activity_log").insert({
          user_id: overdueEnrollment?.user_id ?? null,
          tipo: "payment",
          descricao: `Cobrança vencida via ${payment.billingType}`,
          metadata: { event, payment_id: payment.id, enrollment_id: payment.externalReference },
        });
        break;
      }

      // ─── Boleto cancelado por expiração ───────────────────────────────────
      case "PAYMENT_BANK_SLIP_CANCELLED": {
        if (!payment?.externalReference) break;

        await supabase
          .from("enrollments")
          .update({ status: "expirado" })
          .eq("id", payment.externalReference)
          .eq("status", "pendente"); // só cancela se ainda pendente

        console.log(`[Asaas Webhook] Boleto expirado, enrollment cancelado: ${payment.externalReference}`);
        break;
      }

      // ─── Chargeback solicitado ────────────────────────────────────────────
      case "PAYMENT_CHARGEBACK_REQUESTED": {
        if (!payment?.externalReference) break;

        // Cancela enrollment para chargeback
        const { data: chargebackEnrollment } = await supabase
          .from("enrollments")
          .update({ status: "cancelado" })
          .eq("id", payment.externalReference)
          .in("status", ["ativo", "pendente"])
          .select("user_id")
          .maybeSingle();

        // Cancel associated commissions
        if (chargebackEnrollment) {
          await (supabase as any)
            .from("partner_commissions")
            .update({ status: "cancelado" })
            .eq("enrollment_id", payment.externalReference);
        }

        await supabase.from("activity_log").insert({
          user_id: chargebackEnrollment?.user_id ?? null,
          tipo: "payment",
          descricao: `Chargeback solicitado no cartão`,
          metadata: { event, payment_id: payment.id, enrollment_id: payment.externalReference },
        });

        if (chargebackEnrollment?.user_id) {
          createNotification({
            userUuid: chargebackEnrollment.user_id,
            tipo: "payment",
            titulo: "Chargeback em análise",
            mensagem: "Um chargeback foi solicitado para seu pagamento. O acesso ao curso foi suspenso.",
            link: "/dashboard/cursos",
          }).catch((err) => console.error("[Asaas Chargeback Notification Error]", err));
        }

        console.log(`[Asaas Webhook] Chargeback solicitado, enrollment cancelado: ${payment.externalReference}`);
        break;
      }

      // ─── Aguardando análise de risco ───────────────────────────────────────
      case "PAYMENT_AWAITING_RISK_ANALYSIS": {
        // Apenas log de consciência, não toma ação
        const { data: riskEnrollment } = await supabase
          .from("enrollments")
          .select("user_id")
          .eq("id", payment.externalReference ?? "")
          .maybeSingle();

        await supabase.from("activity_log").insert({
          user_id: riskEnrollment?.user_id ?? null,
          tipo: "payment",
          descricao: `Pagamento aguardando análise de risco`,
          metadata: { event, payment_id: payment.id, enrollment_id: payment.externalReference },
        });

        console.log(`[Asaas Webhook] Pagamento em análise de risco: ${payment.externalReference}`);
        break;
      }

      default:
        console.log(`[Asaas Webhook] Evento não tratado: ${event}`);
    }
  } catch (error) {
    console.error("[Asaas Webhook] Erro ao processar:", error);
    // Retorna 500 para o Asaas tentar novamente
    return NextResponse.json({ error: "Processing error" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
