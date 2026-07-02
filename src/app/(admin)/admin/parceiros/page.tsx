import { requireAdminRole } from "@/lib/actions/users";
import { listPartners, getPartnerCommissions } from "@/lib/actions/partners";
import { adminGetAllCourses } from "@/lib/actions/courses";
import { Header } from "@/components/layout/header";
import { PartnerManager } from "@/components/admin/partner-manager";
import { getServerT } from "@/lib/i18n/server";

export default async function AdminPartnersPage() {
  const t = await getServerT();
  await requireAdminRole();

  const [partners, { courses }, { commissions, total: totalCommissions }] = await Promise.all([
    listPartners(),
    adminGetAllCourses({ limit: 200 }),
    getPartnerCommissions(undefined, 1, 50),
  ]);

  return (
    <div className="animate-fade-in">
      <Header
        title={t("Instrutores Parceiros")}
        subtitle={`${partners.length} ${t("parceiros cadastrados")} · ${totalCommissions} ${t("comissões registradas")}`}
      />
      <div className="p-4 sm:p-6">
        <PartnerManager
          partners={partners}
          courses={courses ?? []}
          commissions={commissions}
        />
      </div>
    </div>
  );
}
