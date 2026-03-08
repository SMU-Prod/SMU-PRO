import { requireAdminRole } from "@/lib/actions/users";
import { Header } from "@/components/layout/header";
import {
  Settings, Shield, Bell, Database, Key, AlertTriangle,
} from "lucide-react";

export default async function AdminConfiguracoesPage() {
  await requireAdminRole();
  return (
    <div className="animate-fade-in">
      <Header
        title="Configurações do Sistema"
        subtitle="Parâmetros gerais da plataforma SMU PRO"
      />

      <div className="p-6 max-w-3xl space-y-6">
        {/* Seção: Plataforma */}
        <Section title="Plataforma" icon={<Settings size={16} className="text-amber-400" />}>
          <Row label="Nome da plataforma" value="SMU PRO" />
          <Row label="URL base" value="smu-pro.vercel.app" />
          <Row label="Versão" value="1.0.0" />
          <Row label="Ambiente" value="Produção" />
        </Section>

        {/* Seção: Autenticação */}
        <Section title="Autenticação" icon={<Key size={16} className="text-amber-400" />}>
          <Row label="Provedor" value="Clerk" />
          <Row label="Sessões simultâneas" value="Ilimitadas" />
          <InfoRow
            label="Definir role de admin"
            description='Para promover um usuário a admin: (1) Acesse o Clerk Dashboard → Users → selecione o usuário → Metadata → adicione {"role":"admin"}. (2) No Supabase, atualize a coluna role na tabela users para "admin".'
          />
        </Section>

        {/* Seção: Banco de Dados */}
        <Section title="Banco de Dados" icon={<Database size={16} className="text-blue-400" />}>
          <Row label="Provedor" value="Supabase (PostgreSQL)" />
          <Row label="RLS" value="Ativado" />
          <Row label="Criação automática de usuários" value="Via getCurrentUser() (upsert)" />
        </Section>

        {/* Seção: Segurança */}
        <Section title="Segurança" icon={<Shield size={16} className="text-emerald-400" />}>
          <Row label="Autenticação de dois fatores" value="Suportado (Clerk)" />
          <Row label="Proteção CSRF" value="Next.js nativo" />
          <Row label="Validação de roles" value="Middleware + Layout" />
        </Section>

        {/* Seção: Notificações */}
        <Section title="Notificações" icon={<Bell size={16} className="text-orange-400" />}>
          <Row label="Provedor de e-mail" value="Não configurado" />
          <InfoRow
            label="Webhooks do Clerk"
            description="Configure um webhook no Clerk Dashboard apontando para /api/webhooks/clerk para sincronização em tempo real de usuários."
          />
        </Section>

        {/* Aviso */}
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5 flex gap-3">
          <AlertTriangle size={18} className="text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-300 mb-1">Configurações avançadas</p>
            <p className="text-sm text-amber-400/80">
              Alterações em variáveis de ambiente, chaves de API e configurações de banco de dados
              devem ser feitas diretamente nos painéis do Supabase, Clerk e Vercel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-[#141416] border border-zinc-800 overflow-hidden">
      <div className="px-5 py-4 border-b border-zinc-800/50 flex items-center gap-2">
        {icon}
        <h3 className="font-semibold text-zinc-100 text-sm">{title}</h3>
      </div>
      <div className="divide-y divide-zinc-800/50">{children}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between px-5 py-3.5">
      <p className="text-sm text-zinc-400">{label}</p>
      <p className="text-sm font-medium text-zinc-100">{value}</p>
    </div>
  );
}

function InfoRow({ label, description }: { label: string; description: string }) {
  return (
    <div className="px-5 py-4">
      <p className="text-sm font-medium text-zinc-100 mb-1">{label}</p>
      <p className="text-xs text-zinc-500 leading-relaxed">{description}</p>
    </div>
  );
}
