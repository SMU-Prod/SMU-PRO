import { requireAdminRole } from "@/lib/actions/users";
import { adminGetPlans, adminGetSubscriptions } from "@/lib/actions/subscriptions";
import { Header } from "@/components/layout/header";
import { SubscriptionManager } from "@/components/admin/subscription-manager";

export default async function AssinaturasPage() {
  await requireAdminRole();

  const [plans, { subscriptions, total }] = await Promise.all([
    adminGetPlans(),
    adminGetSubscriptions(),
  ]);

  return (
    <div className="animate-fade-in">
      <Header
        title="Assinaturas"
        subtitle={`${total} assinatura(s) · ${plans.length} plano(s)`}
      />
      <div className="p-4 sm:p-6">
        <SubscriptionManager plans={plans} subscriptions={subscriptions} total={total} />
      </div>
    </div>
  );
}
