import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/actions/users";
import { Header } from "@/components/layout/header";
import { Badge } from "@/components/ui/badge";
import { getLevelLabel } from "@/lib/utils";
import {
  Bell, Shield, Globe, CreditCard, Trash2, UserCircle,
  Mail, Lock, Smartphone, ChevronRight,
} from "lucide-react";

export default async function ConfiguracoesPage() {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  const user = await getCurrentUser();
  if (!user) redirect("/login");

  return (
    <div className="animate-fade-in">
      <Header title="Configurações" subtitle="Preferências e configurações da sua conta" />

      <div className="p-6 max-w-2xl space-y-6">
        {/* Account info summary */}
        <div className="rounded-2xl bg-white border border-gray-200 p-5">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center">
              <UserCircle size={24} className="text-[#6C3CE1]" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">{user.nome}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={user.role as any}>{getLevelLabel(user.role)}</Badge>
              {user.projeto_cultural && <Badge variant="mit">MIT</Badge>}
            </div>
          </div>
        </div>

        {/* Seção: Conta */}
        <Section title="Conta" icon={<UserCircle size={16} className="text-[#6C3CE1]" />}>
          <SettingItem
            icon={<Mail size={16} className="text-gray-400" />}
            label="E-mail"
            description={user.email}
            action="Gerenciado pelo Clerk"
            disabled
          />
          <SettingItem
            icon={<Lock size={16} className="text-gray-400" />}
            label="Senha"
            description="Altere sua senha de acesso"
            action="Alterar"
            href="https://accounts.clerk.dev/user/security"
          />
          <SettingItem
            icon={<Smartphone size={16} className="text-gray-400" />}
            label="Autenticação em dois fatores"
            description="Adicione uma camada extra de segurança"
            action="Configurar"
            href="https://accounts.clerk.dev/user/security"
          />
        </Section>

        {/* Seção: Notificações */}
        <Section title="Notificações" icon={<Bell size={16} className="text-amber-600" />}>
          <ToggleItem
            label="E-mails de atualizações de cursos"
            description="Receba alertas quando novos conteúdos forem adicionados"
            defaultEnabled
          />
          <ToggleItem
            label="Lembretes de estudo"
            description="Notificações semanais para manter seu progresso"
            defaultEnabled
          />
          <ToggleItem
            label="Novos certificados disponíveis"
            description="Aviso quando você completar um curso"
            defaultEnabled
          />
          <ToggleItem
            label="Promoções e novidades"
            description="Ofertas especiais e novos cursos"
            defaultEnabled={false}
          />
        </Section>

        {/* Seção: Privacidade */}
        <Section title="Privacidade e Segurança" icon={<Shield size={16} className="text-emerald-600" />}>
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
        <Section title="Preferências" icon={<Globe size={16} className="text-blue-600" />}>
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
          <Section title="Plano MIT" icon={<CreditCard size={16} className="text-amber-600" />}>
            <div className="px-4 py-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="font-semibold text-amber-800">Projeto Cultural MIT — Ativo</p>
                  <p className="text-sm text-amber-600">
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
            <div className="p-4 rounded-xl border border-red-200 bg-red-50">
              <h4 className="font-semibold text-red-800 mb-1">Excluir conta</h4>
              <p className="text-sm text-red-600 mb-3">
                Esta ação é permanente e irá remover todos os seus dados, progresso e certificados.
              </p>
              <button className="text-sm font-semibold text-red-600 hover:text-red-700 transition-colors">
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
    <div className="rounded-2xl bg-white border border-gray-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
        {icon}
        <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
      </div>
      <div className="divide-y divide-gray-100">
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
        <p className="text-sm font-medium text-gray-900">{label}</p>
        <p className="text-xs text-gray-500 mt-0.5">{description}</p>
      </div>
      {disabled ? (
        <span className="text-xs text-gray-400">{action}</span>
      ) : href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs font-medium text-[#6C3CE1] hover:underline"
        >
          {action}
          <ChevronRight size={12} />
        </a>
      ) : (
        <button className="flex items-center gap-1 text-xs font-medium text-[#6C3CE1] hover:underline">
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
      <p className="text-sm font-medium text-gray-900">{label}</p>
      <p className="text-sm text-gray-500">{description}</p>
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
        <p className="text-sm font-medium text-gray-900">{label}</p>
        <p className="text-xs text-gray-500 mt-0.5">{description}</p>
      </div>
      <div
        className={`relative inline-flex h-5 w-9 shrink-0 rounded-full border-2 transition-colors cursor-pointer ${
          defaultEnabled
            ? "bg-[#6C3CE1] border-[#6C3CE1]"
            : "bg-gray-200 border-gray-200"
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
