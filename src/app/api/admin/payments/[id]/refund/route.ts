import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { auth } from "@clerk/nextjs/server";
import { refundPayment } from "@/lib/asaas";
import { createNotification } from "@/lib/actions/notifications";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: enrollmentId } = await params;

  // Admin check
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const supabase = createAdminClient();
  const { data: adminUser } = await supabase.from("users").select("role").eq("clerk_id", userId).limit(1).single();
  if (adminUser?.role !== "admin") {
    return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
  }

  // Get enrollment
  const { data: enrollment } = await supabase
    .from("enrollments")
    .select("id, user_id, course_id, payment_id, status, valor_pago")
    .eq("id", enrollmentId)
    .single();

  if (!enrollment) return NextResponse.json({ error: "Matrícula não encontrada" }, { status: 404 });
  if (!enrollment.payment_id) return NextResponse.json({ error: "Sem pagamento associado" }, { status: 400 });
  if (enrollment.status === "cancelado") return NextResponse.json({ error: "Já cancelada" }, { status: 409 });

  try {
    // Refund via Asaas
    await refundPayment(enrollment.payment_id);

    // Cancel enrollment
    await supabase
      .from("enrollments")
      .update({ status: "cancelado" })
      .eq("id", enrollmentId);

    // Log
    await supabase.from("activity_log").insert({
      user_id: enrollment.user_id,
      tipo: "payment",
      descricao: `Reembolso solicitado pelo admin`,
      metadata: { enrollment_id: enrollmentId, payment_id: enrollment.payment_id },
    });

    // Notify user
    createNotification({
      userUuid: enrollment.user_id,
      tipo: "payment",
      titulo: "Reembolso processado",
      mensagem: `Seu pagamento de R$ ${(enrollment.valor_pago ?? 0).toFixed(2)} será estornado.`,
      link: "/dashboard/cursos",
    }).catch(() => {});

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("[Admin Refund]", error);
    return NextResponse.json({ error: error.message ?? "Erro ao processar reembolso" }, { status: 500 });
  }
}
