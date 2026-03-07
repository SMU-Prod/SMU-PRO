import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/server";
import { getPayment, getPixQrCode, getBoletoIdentificationField } from "@/lib/asaas";
import { notFound } from "next/navigation";
import { PaymentPageClient } from "@/components/payment/payment-page-client";

interface Props {
  params: Promise<{ paymentId: string }>;
}

export default async function PaymentPage({ params }: Props) {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  const { paymentId } = await params;

  let payment: any;
  try {
    payment = await getPayment(paymentId);
  } catch {
    notFound();
  }

  // Verificar se o payment pertence a um enrollment do usuário
  const supabase = createAdminClient();
  const { data: userRow } = await supabase.from("users").select("id").eq("clerk_id", userId).single();
  const { data: enrollment } = userRow
    ? await supabase.from("enrollments").select("*, courses(titulo, categoria, preco)").eq("payment_id", paymentId).eq("user_id", userRow.id).maybeSingle()
    : { data: null };

  if (!enrollment) notFound();

  // Já pago → redireciona para o curso
  if (enrollment.status === "ativo") {
    redirect(`/dashboard/cursos/${(enrollment as any).courses?.slug ?? ""}`);
  }

  // Buscar dados extras conforme billingType
  let pixData: { qrCodeImage: string; copyPaste: string; expiresAt: string } | null = null;
  let boletoData: { identificationField: string; bankSlipUrl: string } | null = null;

  if (payment.billingType === "PIX") {
    try {
      const qr = await getPixQrCode(paymentId);
      pixData = {
        qrCodeImage: `data:image/png;base64,${qr.encodedImage}`,
        copyPaste: qr.payload,
        expiresAt: qr.expirationDate,
      };
    } catch {
      // QR code pode ainda estar sendo gerado
    }
  }

  if (payment.billingType === "BOLETO" && payment.bankSlipUrl) {
    try {
      const boleto = await getBoletoIdentificationField(paymentId);
      boletoData = {
        identificationField: boleto.identificationField,
        bankSlipUrl: payment.bankSlipUrl,
      };
    } catch {
      boletoData = payment.bankSlipUrl
        ? { identificationField: "", bankSlipUrl: payment.bankSlipUrl }
        : null;
    }
  }

  const course = (enrollment as any).courses;

  return (
    <PaymentPageClient
      paymentId={paymentId}
      billingType={payment.billingType}
      status={payment.status}
      value={payment.value}
      courseTitle={course?.titulo ?? "Curso"}
      courseSlug={course?.slug}
      pixData={pixData}
      boletoData={boletoData}
      invoiceUrl={payment.invoiceUrl}
    />
  );
}
