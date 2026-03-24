import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import {
  createOrGetCustomer,
  createPayment,
  getPixQrCode,
  getDueDate,
  type AsaasBillingType,
} from "@/lib/asaas";

/**
 * POST /api/payments/checkout
 * Body: { courseId, billingType: "PIX" | "BOLETO" }
 *
 * Fluxo:
 * 1. Valida curso e usuário
 * 2. Cria enrollment com status "pendente"
 * 3. Cria/busca cliente no Asaas
 * 4. Cria cobrança no Asaas usando enrollment_id como externalReference
 * 5. Para PIX: busca QR code e retorna imagem + payload
 * 6. Para BOLETO: retorna bankSlipUrl
 * 7. Salva payment_id no enrollment
 */
export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const body = await req.json();
  const { courseId, billingType = "PIX" } = body as {
    courseId: string;
    billingType?: AsaasBillingType;
  };

  if (!courseId) {
    return NextResponse.json({ error: "courseId obrigatório" }, { status: 400 });
  }

  if (!["PIX", "BOLETO", "CREDIT_CARD"].includes(billingType)) {
    return NextResponse.json({ error: "billingType inválido. Utilize PIX, BOLETO ou CREDIT_CARD" }, { status: 400 });
  }

  const supabase = createAdminClient();

  // Resolver UUID do usuário (enrollments.user_id é uuid FK para users.id)
  const { data: userRow } = await supabase.from("users").select("id, nome, email, cpf").eq("clerk_id", userId).single();
  if (!userRow) return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });
  const userUuid = userRow.id;

  // CPF pode vir do body (modal de checkout) ou do perfil do usuário
  const cpf = (body.cpf as string)?.replace(/\D/g, "") || userRow.cpf?.replace(/\D/g, "") || null;
  if (!cpf || cpf.length !== 11) {
    return NextResponse.json(
      { error: "CPF é obrigatório para pagamento. Informe seu CPF para continuar.", needsCpf: true },
      { status: 422 }
    );
  }

  // Salvar CPF no perfil se veio pelo checkout e o perfil não tinha
  if (!userRow.cpf && cpf) {
    await supabase.from("users").update({ cpf }).eq("id", userUuid);
  }

  // 1. Verificar se já está inscrito (ativo)
  const { data: existingEnrollment } = await supabase
    .from("enrollments")
    .select("id, status")
    .eq("user_id", userUuid)
    .eq("course_id", courseId)
    .maybeSingle();

  if (existingEnrollment?.status === "ativo") {
    return NextResponse.json({ error: "Você já está inscrito neste curso" }, { status: 409 });
  }

  // 2. Buscar dados do curso
  const { data: course } = await supabase
    .from("courses")
    .select("id, titulo, tipo, preco, ativo")
    .eq("id", courseId)
    .single();

  if (!course) return NextResponse.json({ error: "Curso não encontrado" }, { status: 404 });
  if (!course.ativo) return NextResponse.json({ error: "Curso indisponível" }, { status: 400 });
  if (course.tipo === "free") return NextResponse.json({ error: "Use a rota de inscrição gratuita" }, { status: 400 });
  if (!course.preco || course.preco <= 0) {
    return NextResponse.json({ error: "Preço inválido" }, { status: 400 });
  }

  try {
    // 4. Criar/buscar cliente no Asaas (CPF obrigatório)
    const asaasCustomer = await createOrGetCustomer({
      name: userRow.nome,
      email: userRow.email,
      cpfCnpj: cpf,
      externalReference: userId,
    });

    // 5. Criar ou atualizar enrollment como "pendente"
    // Se já existe enrollment pendente COM payment_id, reusar evita double charge
    let enrollmentId: string;
    if (existingEnrollment) {
      // Se já tem um payment_id, significa que já foi criado um pagamento antes
      // Retornamos o payment existente para evitar double charge
      if (existingEnrollment.status === "pendente") {
        const { data: existPayment } = await supabase
          .from("enrollments")
          .select("payment_id")
          .eq("id", existingEnrollment.id)
          .single();

        if (existPayment?.payment_id) {
          return NextResponse.json(
            { error: "Já existe um pagamento pendente para este curso. Verifique sua página de pagamento." },
            { status: 409 }
          );
        }
      }
      enrollmentId = existingEnrollment.id;
    } else {
      const { data: newEnrollment, error: enrollError } = await supabase
        .from("enrollments")
        .insert({
          user_id: userUuid,
          course_id: courseId,
          tipo_acesso: "pago",
          status: "pendente",
          payment_provider: "asaas",
        })
        .select("id")
        .single();

      if (enrollError) throw new Error(enrollError.message);
      enrollmentId = newEnrollment!.id;
    }

    // 6. Criar cobrança no Asaas
    // Nota: não usamos callback.successUrl porque o Asaas exige que o domínio
    // esteja cadastrado na conta. O redirecionamento é feito pelo nosso frontend.
    const payment = await createPayment({
      customer: asaasCustomer.id,
      billingType,
      value: course.preco,
      dueDate: getDueDate(3),
      description: `SMU PRO — ${course.titulo}`,
      externalReference: enrollmentId,
    });

    // 7. Salvar payment_id no enrollment
    await supabase
      .from("enrollments")
      .update({
        payment_id: payment.id,
        valor_pago: course.preco,
      })
      .eq("id", enrollmentId);

    // 8. Para PIX: buscar QR code
    let pixQrCode: { encodedImage: string; payload: string; expirationDate: string } | null = null;
    if (billingType === "PIX") {
      pixQrCode = await getPixQrCode(payment.id);
    }

    // 9. Log de atividade
    await supabase.from("activity_log").insert({
      user_id: userUuid,
      tipo: "payment",
      descricao: `Checkout iniciado para ${course.titulo} via ${billingType}`,
      metadata: {
        payment_id: payment.id,
        course_id: courseId,
        enrollment_id: enrollmentId,
        billing_type: billingType,
        value: course.preco,
      },
    });

    return NextResponse.json({
      paymentId: payment.id,
      enrollmentId,
      billingType,
      value: payment.value,
      status: payment.status,
      invoiceUrl: payment.invoiceUrl,
      bankSlipUrl: payment.bankSlipUrl ?? null,
      pix: pixQrCode
        ? {
            qrCodeImage: `data:image/png;base64,${pixQrCode.encodedImage}`,
            copyPaste: pixQrCode.payload,
            expiresAt: pixQrCode.expirationDate,
          }
        : null,
    });
  } catch (error) {
    console.error("[Asaas Checkout Error]", error);
    return NextResponse.json(
      { error: "Erro ao processar pagamento. Tente novamente." },
      { status: 500 }
    );
  }
}
