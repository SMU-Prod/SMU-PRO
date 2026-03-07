import { timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { sendPaymentConfirmedEmail } from "@/lib/email";
import type { AsaasWebhookPayload } from "@/lib/asaas";

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
 * - PAYMENT_RECEIVED  → Ativa enrollment (PIX e boleto compensado)
 * - PAYMENT_CONFIRMED → Ativa enrollment (crédito autorizado)
 * - PAYMENT_REFUNDED  → Cancela enrollment
 * - PAYMENT_OVERDUE   → Marca enrollment como expirado
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

        // Ativa o enrollment
        await supabase
          .from("enrollments")
          .update({
            status: "ativo",
            valor_pago: payment.value,
            payment_id: payment.id,
          })
          .eq("id", enrollmentId);

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

        console.log(`[Asaas Webhook] Enrollment ativado: ${enrollmentId}`);
        break;
      }

      // ─── Reembolso ────────────────────────────────────────────────────────
      case "PAYMENT_REFUNDED":
      case "PAYMENT_PARTIALLY_REFUNDED": {
        if (!payment?.externalReference) break;

        const { data: refundEnrollment } = await supabase
          .from("enrollments")
          .update({ status: "cancelado" })
          .eq("id", payment.externalReference)
          .select("user_id")
          .single();

        await supabase.from("activity_log").insert({
          user_id: refundEnrollment?.user_id ?? null,
          tipo: "payment",
          descricao: `Reembolso processado via ${payment.billingType}`,
          metadata: { event, payment_id: payment.id, enrollment_id: payment.externalReference },
        });

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
