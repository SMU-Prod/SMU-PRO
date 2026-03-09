import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen } from "lucide-react";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 ring-4 ring-emerald-500/5">
          <CheckCircle size={40} className="text-emerald-400" />
        </div>
        <h1 className="text-3xl font-black text-foreground mb-3">Pagamento confirmado!</h1>
        <p className="text-muted mb-8 leading-relaxed">
          Seu acesso foi liberado. Vá para o painel e comece a estudar agora mesmo.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/dashboard/cursos">
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              <BookOpen size={18} />
              Meus cursos
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
