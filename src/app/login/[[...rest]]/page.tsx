"use client";

import { SignIn } from "@clerk/nextjs";
import { useTheme } from "@/components/theme-provider";
import { getClerkAppearance } from "@/components/auth/clerk-theme";

export default function LoginPage() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-surface-2 flex flex-col items-center justify-center px-4">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-amber-500/20 blur-[120px]" />
      </div>

      <div className="mb-8 text-center">
        <a href="/" className="text-2xl font-black tracking-tight">
          <span className="gradient-text">SMU</span>
          <span className="text-muted-light text-base font-normal ml-1">PRO</span>
        </a>
        <p className="mt-2 text-muted-light text-sm">Bem-vindo de volta</p>
      </div>

      <SignIn
        appearance={getClerkAppearance(theme)}
        forceRedirectUrl="/dashboard"
        signUpUrl="/cadastro"
      />
    </div>
  );
}
