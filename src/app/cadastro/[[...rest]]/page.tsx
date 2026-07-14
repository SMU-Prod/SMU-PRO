"use client";

import Image from "next/image";
import { SignUp } from "@clerk/nextjs";
import { ShieldCheck } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { getClerkAppearance } from "@/components/auth/clerk-theme";
import { useT } from "@/lib/i18n/ui";

export default function CadastroPage() {
  const { theme } = useTheme();
  const t = useT();

  return (
    <div className="min-h-screen bg-surface-2 flex flex-col items-center justify-center px-4 py-10">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-amber-500/20 blur-[120px]" />
      </div>

      <div className="mb-6 text-center flex flex-col items-center">
        <a href="/">
          <Image
            src="/logo.jpg"
            alt="SMU PRO"
            width={64}
            height={64}
            className="h-16 w-16 rounded-2xl object-cover shadow-lg"
          />
        </a>
        <p className="mt-3 text-muted-light text-sm">{t("Crie sua conta profissional")}</p>
      </div>

      {/* Requisitos obrigatórios da senha (política do provedor de identidade) */}
      <div className="mb-4 w-full max-w-[400px] rounded-xl border border-border bg-surface p-4">
        <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground">
          <ShieldCheck size={14} className="text-amber-500" />
          {t("Requisitos da senha")}
        </p>
        <ul className="space-y-1 text-[13px] text-muted-light">
          <li>• {t("Mínimo de 8 caracteres")}</li>
          <li>• {t("Máximo de 72 caracteres")}</li>
          <li>• {t("Deve conter letras e números")}</li>
          <li>• {t("Não pode ser uma senha comum ou exposta em vazamentos de dados")}</li>
        </ul>
      </div>

      <SignUp
        appearance={getClerkAppearance(theme)}
        forceRedirectUrl="/dashboard"
        signInUrl="/login"
      />
    </div>
  );
}
