"use client";

import { useClerk } from "@clerk/nextjs";
import { useT } from "@/lib/i18n/ui";
import { Lock, Smartphone, ChevronRight } from "lucide-react";

/**
 * Abre o perfil do Clerk (modal) para o usuário alterar a própria senha e
 * configurar 2FA. Usa openUserProfile() — sempre correto, independente do
 * domínio do portal de contas (substitui o link fixo quebrado accounts.clerk.dev).
 */
export function AccountSecurityLinks() {
  const { openUserProfile } = useClerk();
  const t = useT();

  const Row = ({
    icon,
    label,
    description,
    action,
    onClick,
  }: {
    icon: React.ReactNode;
    label: string;
    description: string;
    action: string;
    onClick: () => void;
  }) => (
    <div className="flex items-center gap-4 px-5 py-4">
      <div className="shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-xs text-muted-light mt-0.5">{description}</p>
      </div>
      <button
        onClick={onClick}
        className="flex items-center gap-1 text-xs font-medium text-amber-400 hover:underline"
      >
        {action}
        <ChevronRight size={12} />
      </button>
    </div>
  );

  return (
    <>
      <Row
        icon={<Lock size={16} className="text-muted-light" />}
        label={t("Senha")}
        description={t("Altere sua senha de acesso")}
        action={t("Alterar")}
        onClick={() => openUserProfile()}
      />
      <Row
        icon={<Smartphone size={16} className="text-muted-light" />}
        label={t("Autenticação em dois fatores")}
        description={t("Adicione uma camada extra de segurança")}
        action={t("Configurar")}
        onClick={() => openUserProfile()}
      />
    </>
  );
}
