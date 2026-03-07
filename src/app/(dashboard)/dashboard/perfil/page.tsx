import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/actions/users";
import { Header } from "@/components/layout/header";
import { ProfileForm } from "@/components/profile/profile-form";
import { Badge } from "@/components/ui/badge";
import { getLevelLabel } from "@/lib/utils";
import { UserCircle, Mail, Calendar, ShieldCheck } from "lucide-react";

export default async function PerfilPage() {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const memberSince = new Date(user.created_at).toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="animate-fade-in">
      <Header title="Meu Perfil" subtitle="Gerencie suas informações pessoais" />

      <div className="p-6 max-w-2xl space-y-6">
        {/* Card de info */}
        <div className="rounded-2xl bg-white border border-gray-200 p-6">
          <div className="flex items-start gap-5">
            {user.avatar_url ? (
              <img
                src={user.avatar_url}
                alt={user.nome}
                className="h-16 w-16 rounded-full object-cover ring-2 ring-purple-200"
              />
            ) : (
              <div className="h-16 w-16 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center">
                <UserCircle size={32} className="text-[#6C3CE1]" />
              </div>
            )}
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900">{user.nome}</h2>
              <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                <Mail size={13} />
                {user.email}
              </div>
              <div className="flex items-center gap-2 mt-0.5 text-sm text-gray-500">
                <Calendar size={13} />
                Membro desde {memberSince}
              </div>
              <div className="flex items-center gap-2 mt-3 flex-wrap">
                <Badge variant={user.role as any}>{getLevelLabel(user.role)}</Badge>
                {user.projeto_cultural && (
                  <Badge variant="mit">Projeto Cultural MIT</Badge>
                )}
                {user.ativo ? (
                  <Badge variant="success">Ativo</Badge>
                ) : (
                  <Badge variant="danger">Inativo</Badge>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Formulário de edição */}
        <div className="rounded-2xl bg-white border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
            <ShieldCheck size={18} className="text-[#6C3CE1]" />
            Informações pessoais
          </h3>
          <ProfileForm user={user} />
        </div>
      </div>
    </div>
  );
}
