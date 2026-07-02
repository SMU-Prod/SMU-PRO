import { requireAdminRole } from "@/lib/actions/users";
import { getServerT } from "@/lib/i18n/server";
import { Header } from "@/components/layout/header";
import {
  Settings, Shield, Bell, Database, Key, AlertTriangle,
} from "lucide-react";

export default async function AdminConfiguracoesPage() {
  await requireAdminRole();
  const t = await getServerT();
  return (
    <div className="animate-fade-in">
      <Header
        title={t("Configurações do Sistema")}
        subtitle={t("Parâmetros gerais da plataforma SMU PRO")}
      />

      <div className="p-4 sm:p-6 max-w-3xl space-y-6">
        {/* Seção: Plataforma */}
        <Section title={t("Plataforma")} icon={<Settings size={16} className="text-amber-400" />}>
          <Row label={t("Nome da plataforma")} value="SMU PRO" />
          <Row label={t("URL base")} value="smu-pro.vercel.app" />
          <Row label={t("Versão")} value="1.0.0" />
          <Row label={t("Ambiente")} value={t("Produção")} />
        </Section>

        {/* Seção: Autenticação */}
        <Section title={t("Autenticação")} icon={<Key size={16} className="text-amber-400" />}>
          <Row label={t("Provedor")} value="Clerk" />
          <Row label={t("Sessões simultâneas")} value={t("Ilimitadas")} />
          <InfoRow
            label={t("Definir role de admin")}
            description={t('Para promover um usuário a admin: (1) Acesse o Clerk Dashboard → Users → selecione o usuário → Metadata → adicione {"role":"admin"}. (2) No Supabase, atualize a coluna role na tabela users para "admin".')}
          />
        </Section>

        {/* Seção: Banco de Dados */}
        <Section title={t("Banco de Dados")} icon={<Database size={16} className="text-blue-400" />}>
          <Row label={t("Provedor")} value="Supabase (PostgreSQL)" />
          <Row label="RLS" value={t("Ativado")} />
          <Row label={t("Criação automática de usuários")} value={t("Via getCurrentUser() (upsert)")} />
        </Section>

        {/* Seção: Segurança */}
        <Section title={t("Segurança")} icon={<Shield size={16} className="text-emerald-400" />}>
          <Row label={t("Autenticação de dois fatores")} value={t("Suportado (Clerk)")} />
          <Row label={t("Proteção CSRF")} value={t("Next.js nativo")} />
          <Row label={t("Validação de roles")} value={t("Middleware + Layout")} />
        </Section>

        {/* Seção: Notificações */}
        <Section title={t("Notificações")} icon={<Bell size={16} className="text-orange-400" />}>
          <Row label={t("Provedor de e-mail")} value={t("Não configurado")} />
          <InfoRow
            label={t("Webhooks do Clerk")}
            description={t("Configure um webhook no Clerk Dashboard apontando para /api/webhooks/clerk para sincronização em tempo real de usuários.")}
          />
        </Section>

        {/* Aviso */}
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5 flex gap-3">
          <AlertTriangle size={18} className="text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-300 mb-1">{t("Configurações avançadas")}</p>
            <p className="text-sm text-amber-400/80">
              {t("Alterações em variáveis de ambiente, chaves de API e configurações de banco de dados devem ser feitas diretamente nos painéis do Supabase, Clerk e Vercel.")}
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
    <div className="rounded-2xl bg-surface border border-border overflow-hidden">
      <div className="px-4 sm:px-5 py-4 border-b border-border/50 flex items-center gap-2">
        {icon}
        <h3 className="font-semibold text-foreground text-sm">{title}</h3>
      </div>
      <div className="divide-y divide-border/50">{children}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-4 sm:px-5 py-3">
      <p className="text-sm text-muted">{label}</p>
      <p className="text-sm font-medium text-foreground">{value}</p>
    </div>
  );
}

function InfoRow({ label, description }: { label: string; description: string }) {
  return (
    <div className="px-4 sm:px-5 py-3 sm:py-4">
      <p className="text-sm font-medium text-foreground mb-1">{label}</p>
      <p className="text-xs text-muted-light leading-relaxed">{description}</p>
    </div>
  );
}
