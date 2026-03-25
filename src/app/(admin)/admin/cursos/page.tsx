import { adminGetAllCourses, instructorGetMyCourses } from "@/lib/actions/courses";
import { getCurrentUser } from "@/lib/actions/users";
import { Button } from "@/components/ui/button";
import { Plus, Layers, Search, BookOpen, Users, Award } from "lucide-react";
import Link from "next/link";
import { CourseBulkActions } from "@/components/admin/course-bulk-actions";

const PAGE_SIZE = 24;

interface Props {
  searchParams: Promise<{ q?: string; nivel?: string; tipo?: string; page?: string }>;
}

const NIVEIS = [
  { value: "", label: "Todos" },
  { value: "trainee", label: "Trainee" },
  { value: "junior", label: "Junior" },
  { value: "pleno", label: "Pleno" },
];

const TIPOS = [
  { value: "free", label: "Grátis" },
  { value: "pago", label: "Pago" },
  { value: "projeto_cultural", label: "MIT" },
];

export default async function AdminCoursesPage({ searchParams }: Props) {
  const { q = "", nivel = "", tipo = "", page: pageStr = "1" } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageStr));
  const user = await getCurrentUser();
  const isInstructor = user?.role === "instrutor";

  let filtered: any[];
  let total: number;
  let allCourses: any[];

  if (isInstructor) {
    // Instrutor vê só seus cursos
    const myCourses = await instructorGetMyCourses();
    // Filtro client-side para instrutor (dataset pequeno)
    let result = myCourses;
    if (q) result = result.filter((c: any) => c.titulo?.toLowerCase().includes(q.toLowerCase()));
    if (nivel) result = result.filter((c: any) => c.nivel === nivel);
    if (tipo) result = result.filter((c: any) => c.tipo === tipo);
    total = result.length;
    filtered = result.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
    allCourses = myCourses;
  } else {
    const res = await adminGetAllCourses({ page: currentPage, limit: PAGE_SIZE, search: q, nivel, tipo });
    filtered = res.courses;
    total = res.total;
    const all = await adminGetAllCourses({ limit: 500 });
    allCourses = all.courses;
  }

  const totalAlunos = allCourses.reduce((s: number, c: any) => s + (c.total_alunos ?? 0), 0);
  const totalCerts = allCourses.reduce((s: number, c: any) => s + (c.total_certificados ?? 0), 0);
  const ativos = allCourses.filter((c: any) => c.ativo).length;
  const totalPages = Math.ceil(total / PAGE_SIZE);

  const makeHref = (overrides: Record<string, string>) => {
    const params = new URLSearchParams({
      ...(q ? { q } : {}),
      ...(nivel ? { nivel } : {}),
      ...(tipo ? { tipo } : {}),
      ...overrides,
    });
    return `/admin/cursos?${params}`;
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="sticky top-0 z-30 flex items-center gap-3 border-b border-border bg-surface/90 backdrop-blur-md px-4 sm:px-6 h-14 sm:h-16">
        <div className="flex-1 min-w-0">
          <h1 className="text-base sm:text-lg font-semibold text-foreground">Gerenciar Cursos</h1>
          <p className="text-xs text-muted-light hidden sm:block">{total} cursos cadastrados</p>
        </div>
        <Link href="/admin/cursos/novo">
          <Button size="sm"><Plus size={16} /> Novo Curso</Button>
        </Link>
      </div>

      <div className="p-4 sm:p-6 space-y-4">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Total de cursos", value: allCourses.length, icon: <Layers size={16} className="text-amber-400" />, bg: "bg-amber-500/10" },
            { label: "Cursos ativos", value: ativos, icon: <BookOpen size={16} className="text-emerald-400" />, bg: "bg-emerald-500/10" },
            { label: "Total de alunos", value: totalAlunos, icon: <Users size={16} className="text-blue-400" />, bg: "bg-blue-500/10" },
            { label: "Certificados", value: totalCerts, icon: <Award size={16} className="text-amber-400" />, bg: "bg-amber-500/10" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-surface border border-border px-4 py-3 flex items-center gap-3">
              <div className={`h-8 w-8 rounded-lg ${s.bg} flex items-center justify-center shrink-0`}>{s.icon}</div>
              <div>
                <p className="text-xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-light">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <form method="get" action="/admin/cursos" className="relative flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-light" />
            <input
              name="q"
              defaultValue={q}
              placeholder="Buscar cursos..."
              className="w-full h-9 rounded-lg border border-border bg-surface pl-8 pr-3 text-sm text-foreground placeholder:text-muted-light focus:outline-none focus:border-amber-500 transition-colors"
            />
            {nivel && <input type="hidden" name="nivel" value={nivel} />}
            {tipo && <input type="hidden" name="tipo" value={tipo} />}
            <button type="submit" className="sr-only">Buscar</button>
          </form>

          <div className="flex gap-2 flex-wrap">
            {NIVEIS.map((n) => (
              <Link key={n.value} href={makeHref({ nivel: n.value })}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  nivel === n.value || (!nivel && !n.value)
                    ? "bg-amber-500 text-white border-amber-500"
                    : "bg-surface text-muted border-border hover:border-amber-500/30"
                }`}>
                {n.label}
              </Link>
            ))}
            {TIPOS.map((t) => (
              <Link key={t.value} href={makeHref({ tipo: tipo === t.value ? "" : t.value })}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  tipo === t.value
                    ? "bg-amber-500 text-white border-amber-500"
                    : "bg-surface text-muted border-border hover:border-amber-500/30"
                }`}>
                {t.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Grid com bulk actions */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center rounded-2xl bg-surface border border-border">
            <Layers size={40} className="text-muted-light mb-3" />
            <p className="text-foreground font-medium mb-1">Nenhum curso encontrado</p>
            <p className="text-sm text-muted-light mb-5">
              {q || nivel || tipo ? "Tente ajustar os filtros." : "Crie o primeiro curso da plataforma."}
            </p>
            <Link href="/admin/cursos/novo">
              <Button><Plus size={16} /> Criar Curso</Button>
            </Link>
          </div>
        ) : (
          <>
            {!isInstructor && <CourseBulkActions courses={filtered} />}
            {totalPages > 1 && (
              <div className="flex items-center justify-between text-sm text-muted-light pt-2">
                <span>Página {currentPage} de {totalPages} ({total} cursos)</span>
                <div className="flex gap-2">
                  {currentPage > 1 && (
                    <Link href={makeHref({ page: String(currentPage - 1) })}
                      className="px-3 py-1.5 rounded-lg bg-surface border border-border hover:bg-hover transition-colors text-muted text-xs">
                      Anterior
                    </Link>
                  )}
                  {currentPage < totalPages && (
                    <Link href={makeHref({ page: String(currentPage + 1) })}
                      className="px-3 py-1.5 rounded-lg bg-surface border border-border hover:bg-hover transition-colors text-muted text-xs">
                      Próxima
                    </Link>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
