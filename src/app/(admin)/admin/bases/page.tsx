import { requireAdminRole } from "@/lib/actions/users";
import { getServerT } from "@/lib/i18n/server";
import { Header } from "@/components/layout/header";
import { BasesManager } from "@/components/admin/bases-manager";

export const dynamic = "force-dynamic";

export default async function AdminBasesPage() {
  await requireAdminRole();
  const t = await getServerT();
  return (
    <div className="animate-fade-in">
      <Header
        title={t("Bases dos simuladores")}
        subtitle={t("Músicas (backing tracks) que aparecem no seletor de todos os simuladores de mesa")}
      />
      <BasesManager />
    </div>
  );
}
