import { auth } from "@clerk/nextjs/server";
import { getPayment } from "@/lib/asaas";
import { createAdminClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

/**
 * GET /api/payments/status/[paymentId]
 * Polling de status — usado pela página de pagamento para detectar confirmação
 */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ paymentId: string }> }
) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const { paymentId } = await params;

  // Verifica que o paymentId pertence ao usuário autenticado
  const supabase = createAdminClient();
  const { data: userRow } = await supabase.from("users").select("id").eq("clerk_id", userId).single();
  const { data: enrollment } = userRow
    ? await supabase.from("enrollments").select("id").eq("payment_id", paymentId).eq("user_id", userRow.id).maybeSingle()
    : { data: null };

  if (!enrollment) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 403 });
  }

  try {
    const payment = await getPayment(paymentId);
    return NextResponse.json({
      status: payment.status,
      confirmed: ["RECEIVED", "CONFIRMED"].includes(payment.status),
    });
  } catch (error) {
    console.error("[Payment Status] Erro:", error);
    return NextResponse.json(
      { error: "Erro ao consultar status do pagamento" },
      { status: 500 }
    );
  }
}
