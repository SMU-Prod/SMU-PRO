"use client";

import Image from "next/image";
import { SignUp } from "@clerk/nextjs";
import { KeyRound } from "lucide-react";
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

      {/* Ajuda de senha — critérios claros (o campo do Clerk não explica sozinho) */}
      <div className="mb-4 w-full max-w-[400px] rounded-xl border border-border bg-surface p-4">
        <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground">
          <KeyRound size={14} className="text-amber-500" />
          {t("Como criar sua senha")}
        </p>
        <ul className="space-y-1 text-[13px] text-muted-light">
          <li>• {t("Use pelo menos 8 caracteres")}</li>
          <li>• {t("Combine letras e números (ex.: Palco2025)")}</li>
          <li>• {t("Pode usar símbolos (! @ # $) para deixar mais forte")}</li>
          <li>• {t("Evite senhas óbvias como 12345678 ou sua data de nascimento")}</li>
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
