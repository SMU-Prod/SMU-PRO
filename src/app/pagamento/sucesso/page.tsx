import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, BookOpen, AlertTriangle } from "lucide-react";

interface Props {
  searchParams: Promise<{ enrollment?: string }>;
}

export default async function PaymentSuccessPage({ searchParams }: Props) {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  const params = await searchParams;
  const enrollmentId = params.enrollment;

  // Verificar status real do pagamento se temos o enrollmentId
  let paymentStatus: "confirmed" | "pending" | "unknown" = "unknown";
  let courseTitulo = "";
  let courseSlug = "";

  if (enrollmentId) {
    const supabase = createAdminClient();
    const { data: userRow } = await supabase
      .from("users")
      .select("id")
      .eq("clerk_id", userId)
      .single();

    if (userRow) {
      const { data: enrollment } = await supabase
        .from("enrollments")
        .select("status, courses(titulo, slug)")
        .eq("id", enrollmentId)
        .eq("user_id", userRow.id)
        .single();

      if (enrollment) {
        const course = enrollment.courses as any;
        courseTitulo = course?.titulo ?? "";
        courseSlug = course?.slug ?? "";
        paymentStatus = enrollment.status === "ativo" ? "confirmed" : "pending";
      }
    }
  }

  const isConfirmed = paymentStatus === "confirmed";
  const isPending = paymentStatus === "pending";

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ring-4 ${
          isConfirmed
            ? "bg-emerald-500/10 ring-emerald-500/5"
            : "bg-amber-500/10 ring-amber-500/5"
        }`}>
          {isConfirmed ? (
            <CheckCircle size={40} className="text-emerald-400" />
          ) : isPending ? (
            <Clock size={40} className="text-amber-400" />
          ) : (
            <CheckCircle size={40} className="text-emerald-400" />
          )}
        </div>

        <h1 className="text-3xl font-black text-foreground mb-3">
          {isConfirmed
            ? "Pagamento confirmado!"
            : isPending
              ? "Pagamento em processamento"
              : "Pagamento recebido!"}
        </h1>

        <p className="text-muted mb-8 leading-relaxed">
          {isConfirmed
            ? `Seu acesso${courseTitulo ? ` ao curso "${courseTitulo}"` : ""} foi liberado. Vá para o painel e comece a estudar agora mesmo.`
            : isPending
              ? "Seu pagamento está sendo processado. Assim que confirmado, seu acesso será liberado automaticamente. Isso pode levar alguns minutos."
              : "Seu pagamento foi recebido. Verifique seus cursos no painel para acompanhar o status do acesso."}
        </p>

        {isPending && (
          <div className="flex items-center justify-center gap-2 text-sm text-amber-400 bg-amber-500/10 rounded-lg px-4 py-3 mb-6">
            <AlertTriangle size={16} />
            <span>Pagamentos via PIX e boleto podem levar alguns minutos para compensar.</span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href={isConfirmed && courseSlug ? `/dashboard/cursos/${courseSlug}` : "/dashboard/cursos"}>
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              <BookOpen size={18} />
              {isConfirmed ? "Começar a estudar" : "Meus cursos"}
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Ir para o painel
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
