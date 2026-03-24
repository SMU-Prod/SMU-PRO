import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/actions/users";
import { Header } from "@/components/layout/header";
import { Badge } from "@/components/ui/badge";
import { getLevelLabel } from "@/lib/utils";
import { NotificationPreferencesForm } from "@/components/settings/notification-preferences";
import {
  Bell, Shield, Globe, CreditCard, Trash2, UserCircle,
  Mail, Lock, Smartphone, ChevronRight, Trophy,
} from "lucide-react";

export default async function ConfiguracoesPage() {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  const user = await getCurrentUser();
  if (!user) redirect("/login");

  return (
    <div className="animate-fade-in">
      <Header title="Configurações" subtitle="Preferências e configurações da sua conta" />

      <div className="p-4 sm:p-6 max-w-2xl space-y-6">
        {/* Account info summary */}
        <div className="rounded-2xl bg-surface border border-border p-5">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <UserCircle size={24} className="text-amber-400" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-foreground">{user.nome}</p>
              <p className="text-sm text-muted-light">{user.email}</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={user.role as any}>{getLevelLabel(user.role)}</Badge>
              {user.projeto_cultural && <Badge variant="mit">MIT</Badge>}
            </div>
          </div>
        </div>

        {/* Seção: Conta */}
        <Section title="Conta" icon={<UserCircle size={16} className="text-amber-400" />}>
          <SettingItem
            icon={<Mail size={16} className="text-muted-light" />}
            label="E-mail"
            description={user.email}
            action="Gerenciado pelo Clerk"
            disabled
          />
          <SettingItem
            icon={<Lock size={16} className="text-muted-light" />}
            label="Senha"
            description="Altere sua senha de acesso"
            action="Alterar"
            href="https://accounts.clerk.dev/user/security"
          />
          <SettingItem
            icon={<Smartphone size={16} className="text-muted-light" />}
            label="Autenticação em dois fatores"
            description="Adicione uma camada extra de segurança"
            action="Configurar"
            href="https://accounts.clerk.dev/user/security"
          />
        </Section>

        {/* Seção: Notificações */}
        <Section title="Notificações" icon={<Bell size={16} className="text-amber-400" />}>
          <NotificationPreferencesForm />
        </Section>

        {/* Seção: Privacidade */}
        <Section title="Privacidade e Segurança" icon={<Shield size={16} className="text-emerald-400" />}>
          <ToggleItem
            label="Exibir meu perfil publicamente"
            description="Outros alunos podem ver seu progresso e conquistas"
            defaultEnabled={false}
          />
          <ToggleItem
            label="Aparecer no ranking da turma"
            description="Mostre seu desempenho nas classificações"
            defaultEnabled
          />
        </Section>

        {/* Seção: Preferências */}
        <Section title="Preferências" icon={<Globe size={16} className="text-blue-400" />}>
          <SettingRow
            label="Idioma"
            description="Português (Brasil)"
          />
          <SettingRow
            label="Fuso horário"
            description="América/São_Paulo (GMT-3)"
          />
        </Section>

        {/* Seção: Assinatura */}
        {user.projeto_cultural && (
          <Section title="Plano MIT" icon={<CreditCard size={16} className="text-amber-400" />}>
            <div className="px-4 py-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <Trophy size={24} className="text-amber-400" />
                <div>
                  <p className="font-semibold text-amber-400">Projeto Cultural MIT — Ativo</p>
                  <p className="text-sm text-amber-500/80">
                    Você tem acesso gratuito e ilimitado a todos os cursos da plataforma.
                  </p>
                </div>
                <Badge variant="mit" className="ml-auto shrink-0">MIT</Badge>
              </div>
            </div>
          </Section>
        )}

        {/* Zona de perigo */}
        <Section title="Zona de Risco" icon={<Trash2 size={16} className="text-red-500" />}>
          <div className="px-4 py-4">
            <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/10">
              <h4 className="font-semibold text-red-400 mb-1">Excluir conta</h4>
              <p className="text-sm text-red-400/80 mb-3">
                Esta ação é permanente e irá remover todos os seus dados, progresso e certificados.
              </p>
              <button className="text-sm font-semibold text-red-400 hover:text-red-300 transition-colors">
                Solicitar exclusão de conta →
              </button>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, icon, children }: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-surface border border-border overflow-hidden">
      <div className="px-5 py-4 border-b border-border/50 flex items-center gap-2">
        {icon}
        <h3 className="font-semibold text-foreground text-sm">{title}</h3>
      </div>
      <div className="divide-y divide-border/50">
        {children}
      </div>
    </div>
  );
}

function SettingItem({ icon, label, description, action, href, disabled }: {
  icon: React.ReactNode;
  label: string;
  description: string;
  action: string;
  href?: string;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-center gap-4 px-5 py-4">
      <div className="shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-xs text-muted-light mt-0.5">{description}</p>
      </div>
      {disabled ? (
        <span className="text-xs text-muted-light">{action}</span>
      ) : href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs font-medium text-amber-400 hover:underline"
        >
          {action}
          <ChevronRight size={12} />
        </a>
      ) : (
        <button className="flex items-center gap-1 text-xs font-medium text-amber-400 hover:underline">
          {action}
          <ChevronRight size={12} />
        </button>
      )}
    </div>
  );
}

function SettingRow({ label, description }: { label: string; description: string }) {
  return (
    <div className="flex items-center justify-between px-5 py-4">
      <p className="text-sm font-medium text-foreground">{label}</p>
      <p className="text-sm text-muted-light">{description}</p>
    </div>
  );
}

function ToggleItem({ label, description, defaultEnabled }: {
  label: string;
  description: string;
  defaultEnabled: boolean;
}) {
  return (
    <div className="flex items-center gap-4 px-5 py-4">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-xs text-muted-light mt-0.5">{description}</p>
      </div>
      <div
        className={`relative inline-flex h-5 w-9 shrink-0 rounded-full border-2 transition-colors cursor-pointer ${
          defaultEnabled
            ? "bg-amber-500 border-amber-500"
            : "bg-surface-3 border-border-strong"
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
            defaultEnabled ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </div>
    </div>
  );
}
