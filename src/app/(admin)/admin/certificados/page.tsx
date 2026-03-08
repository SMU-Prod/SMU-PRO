import { requireAdminRole } from "@/lib/actions/users";
import { createAdminClient } from "@/lib/supabase/server";
import { Header } from "@/components/layout/header";
import { Badge } from "@/components/ui/badge";
import { formatMinutes } from "@/lib/utils";
import { Award, ExternalLink, Search } from "lucide-react";
import Link from "next/link";

interface Props {
  searchParams: Promise<{ search?: string; page?: string }>;
}

const PAGE_SIZE = 20;

export default async function AdminCertificadosPage({ searchParams }: Props) {
  await requireAdminRole();
  const { search, page: pageStr } = await searchParams;
  const page = Math.max(1, parseInt(pageStr ?? "1"));

  const supabase = createAdminClient();

  let query = (supabase as any)
    .from("certificates")
    .select(`*, users(nome, email), courses(titulo, nivel, categoria)`, { count: "exact" })
    .order("emitido_em", { ascending: false })
    .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);

  if (search) {
    query = query.ilike("codigo_verificacao", `%${search}%`);
  }

  const { data: certs, count } = await query;
  const total = count ?? 0;
  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <div className="animate-fade-in">
      <Header
        title="Certificados"
        subtitle={`${total} certificados emitidos`}
      />

      <div className="p-6 space-y-6">
        {/* Busca */}
        <form method="get" className="relative max-w-sm">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-light" />
          <input
            name="search"
            defaultValue={search}
            placeholder="Buscar por código..."
            className="w-full rounded-xl bg-surface border border-border pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-light focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
          />
        </form>

        {/* Tabela */}
        <div className="rounded-2xl bg-surface border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-surface-2">
                <th className="px-5 py-4 text-left text-xs font-semibold text-muted-light uppercase tracking-wider">Aluno</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-muted-light uppercase tracking-wider">Curso</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-muted-light uppercase tracking-wider">Nota</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-muted-light uppercase tracking-wider">Carga</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-muted-light uppercase tracking-wider">MIT</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-muted-light uppercase tracking-wider">Emitido em</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-muted-light uppercase tracking-wider">Código</th>
                <th className="px-5 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {(certs ?? []).map((cert: any) => (
                <tr key={cert.id} className="hover:bg-hover transition-colors">
                  <td className="px-5 py-4">
                    <div className="font-medium text-foreground">{cert.users?.nome ?? "—"}</div>
                    <div className="text-xs text-muted-light mt-0.5">{cert.users?.email}</div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="text-foreground">{cert.courses?.titulo ?? "—"}</div>
                    {cert.courses?.nivel && (
                      <Badge variant={cert.courses.nivel} className="mt-1 text-xs">{cert.courses.nivel}</Badge>
                    )}
                  </td>
                  <td className="px-5 py-4 text-muted">
                    {cert.nota_final != null ? `${cert.nota_final}/100` : "—"}
                  </td>
                  <td className="px-5 py-4 text-muted">
                    {cert.carga_horaria ? formatMinutes(cert.carga_horaria) : "—"}
                  </td>
                  <td className="px-5 py-4">
                    {cert.projeto_cultural ? (
                      <Badge variant="mit">MIT</Badge>
                    ) : (
                      <span className="text-muted-light">—</span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-muted-light text-xs">
                    {new Date(cert.emitido_em).toLocaleDateString("pt-BR")}
                  </td>
                  <td className="px-5 py-4">
                    <span className="font-mono text-xs text-muted-light">{cert.codigo_verificacao.slice(0, 12)}…</span>
                  </td>
                  <td className="px-5 py-4">
                    <Link
                      href={`/certificado/${cert.codigo_verificacao}`}
                      target="_blank"
                      className="text-muted-light hover:text-amber-400 transition-colors"
                    >
                      <ExternalLink size={15} />
                    </Link>
                  </td>
                </tr>
              ))}

              {(certs ?? []).length === 0 && (
                <tr>
                  <td colSpan={8} className="px-5 py-16 text-center text-muted-light">
                    <Award size={40} className="mx-auto mb-3 text-muted-light" />
                    Nenhum certificado encontrado
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Paginação */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between text-sm text-muted-light">
            <span>Página {page} de {totalPages} ({total} total)</span>
            <div className="flex gap-2">
              {page > 1 && (
                <Link
                  href={`?page=${page - 1}${search ? `&search=${search}` : ""}`}
                  className="px-3 py-1.5 rounded-lg bg-surface border border-border hover:bg-hover transition-colors text-muted"
                >
                  Anterior
                </Link>
              )}
              {page < totalPages && (
                <Link
                  href={`?page=${page + 1}${search ? `&search=${search}` : ""}`}
                  className="px-3 py-1.5 rounded-lg bg-surface border border-border hover:bg-hover transition-colors text-muted"
                >
                  Próxima
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
