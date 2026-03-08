import { adminGetUsers, requireAdminRole } from "@/lib/actions/users";
import { adminGetAllCourses } from "@/lib/actions/courses";
import { Header } from "@/components/layout/header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getLevelLabel } from "@/lib/utils";
import { UserActions } from "@/components/admin/user-actions";
import { Search, Users, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  searchParams: Promise<{ q?: string; page?: string; role?: string; mit?: string }>;
}

const ROLES = [
  { value: "", label: "Todos os roles" },
  { value: "trainee", label: "Trainee" },
  { value: "junior", label: "Junior" },
  { value: "pleno", label: "Pleno" },
  { value: "projeto_cultural", label: "MIT" },
  { value: "content_manager", label: "Content Manager" },
  { value: "admin", label: "Admin" },
];

export default async function AdminUsersPage({ searchParams }: Props) {
  await requireAdminRole();
  const { q = "", page = "1", role = "", mit = "" } = await searchParams;
  const currentPage = parseInt(page);
  const pageSize = 20;

  const [{ users, total }, { courses }] = await Promise.all([
    adminGetUsers(currentPage, pageSize, q, role, mit),
    adminGetAllCourses({ limit: 200 }),
  ]);

  const totalPages = Math.ceil(total / pageSize);
  const activeFilters = [q, role, mit].filter(Boolean).length;

  const makeHref = (overrides: Record<string, string>) => {
    const params = new URLSearchParams({
      ...(q ? { q } : {}),
      ...(role ? { role } : {}),
      ...(mit ? { mit } : {}),
      page: "1",
      ...overrides,
    });
    return `/admin/usuarios?${params}`;
  };

  return (
    <div className="animate-fade-in">
      <Header
        title="Gerenciar Usuários"
        subtitle={`${total} usuários cadastrados`}
      />

      <div className="p-4 sm:p-6 space-y-4">
        {/* Filters bar */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <form method="get" action="/admin/usuarios" className="relative flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              name="q"
              defaultValue={q}
              placeholder="Buscar por nome ou email..."
              className="w-full h-9 rounded-lg border border-zinc-800 bg-[#141416] pl-8 pr-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
            {role && <input type="hidden" name="role" value={role} />}
            {mit && <input type="hidden" name="mit" value={mit} />}
            <button type="submit" className="sr-only">Buscar</button>
          </form>

          {/* Role filter */}
          <div className="flex gap-2 flex-wrap">
            {ROLES.map((r) => (
              <Link
                key={r.value}
                href={makeHref({ role: r.value })}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  role === r.value || (!role && !r.value)
                    ? "bg-amber-500 text-white border-amber-500"
                    : "bg-[#141416] text-zinc-400 border-zinc-800 hover:border-amber-500/30"
                }`}
              >
                {r.label}
              </Link>
            ))}
            <Link
              href={makeHref({ mit: mit === "1" ? "" : "1" })}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                mit === "1"
                  ? "bg-amber-500 text-white border-amber-500"
                  : "bg-[#141416] text-zinc-400 border-zinc-800 hover:border-amber-300"
              }`}
            >
              MIT
            </Link>
            {activeFilters > 0 && (
              <Link
                href="/admin/usuarios"
                className="px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-800 bg-[#141416] text-red-400 hover:border-red-500/30 transition-colors"
              >
                Limpar
              </Link>
            )}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Total", value: total, color: "text-zinc-100" },
            { label: "MIT", value: users.filter((u) => u.projeto_cultural).length, color: "text-amber-600" },
            { label: "Admins", value: users.filter((u) => u.role === "admin").length, color: "text-red-500" },
            { label: "Ativos", value: users.filter((u) => u.ativo).length, color: "text-emerald-600" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-[#141416] border border-zinc-800 px-4 py-3 flex items-center gap-3">
              <div>
                <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
                <p className="text-xs text-zinc-500">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800/50 bg-zinc-900">
                    {["Aluno", "Email", "Role", "MIT", "Status", "Cadastro", "Ações"].map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-xs text-zinc-500 font-medium whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr
                      key={u.id}
                      className="border-b border-zinc-800/50 hover:bg-zinc-800 transition-colors group"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="relative shrink-0">
                            {u.avatar_url ? (
                              <Image src={u.avatar_url} alt={u.nome} width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
                            ) : (
                              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-400 flex items-center justify-center text-white text-xs font-bold">
                                {u.nome?.[0]?.toUpperCase()}
                              </div>
                            )}
                            {u.ativo && (
                              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-[#141416]" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <p className="text-zinc-100 font-medium truncate max-w-[140px]">{u.nome}</p>
                            {u.ultimo_acesso && (
                              <p className="text-[10px] text-zinc-500">
                                Último acesso: {new Date(u.ultimo_acesso).toLocaleDateString("pt-BR")}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-zinc-500 text-xs">{u.email}</td>
                      <td className="px-4 py-3">
                        <Badge
                          variant={
                            u.role === "admin" ? "admin" :
                            u.role === "projeto_cultural" ? "mit" :
                            u.role === "pleno" ? "pleno" :
                            u.role === "junior" ? "junior" : "trainee"
                          }
                          className="text-[10px]"
                        >
                          {getLevelLabel(u.role)}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        {u.projeto_cultural ? (
                          <Badge variant="mit" className="text-[10px]">MIT ✓</Badge>
                        ) : (
                          <span className="text-zinc-600">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant={u.ativo ? "success" : "danger"} className="text-[10px]">
                          {u.ativo ? "Ativo" : "Inativo"}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-zinc-500 text-xs whitespace-nowrap">
                        {new Date(u.created_at).toLocaleDateString("pt-BR")}
                      </td>
                      <td className="px-4 py-3">
                        <UserActions user={u} courses={courses ?? []} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {users.length === 0 && (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <Users size={40} className="text-zinc-700 mb-3" />
                  <p className="text-zinc-100 font-medium">Nenhum usuário encontrado</p>
                  <p className="text-sm text-zinc-500 mt-1">Tente ajustar os filtros de busca.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between px-5 py-3 border-t border-zinc-800/50 bg-zinc-900">
                <p className="text-xs text-zinc-500">
                  Página {currentPage} de {totalPages} · {total} usuários
                </p>
                <div className="flex items-center gap-1">
                  {currentPage > 1 && (
                    <Link href={makeHref({ page: String(currentPage - 1) })}>
                      <Button variant="secondary" size="sm" className="gap-1">
                        <ChevronLeft size={14} /> Anterior
                      </Button>
                    </Link>
                  )}
                  {currentPage < totalPages && (
                    <Link href={makeHref({ page: String(currentPage + 1) })}>
                      <Button variant="secondary" size="sm" className="gap-1">
                        Próxima <ChevronRight size={14} />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
