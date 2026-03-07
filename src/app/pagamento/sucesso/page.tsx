import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen } from "lucide-react";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 ring-4 ring-emerald-50">
          <CheckCircle size={40} className="text-emerald-600" />
        </div>
        <h1 className="text-3xl font-black text-gray-900 mb-3">Pagamento confirmado!</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
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
