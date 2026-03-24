import { getCourses } from "@/lib/actions/courses";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getCategoryLabel, getLevelLabel, formatMinutes, formatCurrency } from "@/lib/utils";
import { Search, SlidersHorizontal } from "lucide-react";
import { CategoryIcon } from "@/components/ui/category-icon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursos — SMU PRO",
  description: "Explore todos os cursos de sonorização, iluminação, DJ, VJ e produção de eventos da SMU PRO.",
  openGraph: {
    title: "Cursos — SMU PRO",
    description: "Explore todos os cursos de sonorização, iluminação, DJ, VJ e produção de eventos da SMU PRO.",
  },
};

export const revalidate = 3600; // ISR: revalida a cada 1 hora

interface Props {
  searchParams: Promise<{ nivel?: string; categoria?: string; tipo?: string; search?: string }>;
}

const NIVEIS = [
  { value: "", label: "Todos os níveis" },
  { value: "trainee", label: "Trainee" },
  { value: "junior", label: "Junior" },
  { value: "pleno", label: "Pleno" },
];

const CATEGORIAS = [
  { value: "", label: "Todas as categorias" },
  { value: "som", label: "Sonorização" },
  { value: "luz", label: "Iluminação" },
  { value: "dj", label: "DJ" },
  { value: "vj", label: "VJ / Vídeo" },
  { value: "producao", label: "Produção" },
  { value: "roadie", label: "Roadie" },
  { value: "marketing", label: "Marketing" },
  { value: "efeitos", label: "Efeitos" },
];

const TIPOS = [
  { value: "", label: "Qualquer tipo" },
  { value: "free", label: "Grátis" },
  { value: "pago", label: "Pago" },
];

export default async function CursosPage({ searchParams }: Props) {
  const { nivel, categoria, tipo, search } = await searchParams;
  const { userId } = await auth();
  const isSignedIn = !!userId;

  let courses: any[] = [];
  try {
    courses = await getCourses({ nivel, categoria, tipo, search }) ?? [];
  } catch {
    courses = [];
  }

  const activeFilters = [nivel, categoria, tipo, search].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-surface-2 text-foreground">
      {/* Nav simples */}
      <nav className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="gradient-text">SMU</span>
            <span className="text-muted-light text-sm font-normal ml-1">PRO</span>
          </Link>
          <div className="flex items-center gap-3">
            {isSignedIn ? (
              <Link href="/dashboard">
                <Button size="sm">Meu painel</Button>
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">Entrar</Button>
                </Link>
                <Link href="/cadastro">
                  <Button size="sm">Cadastrar</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-foreground mb-2">Todos os cursos</h1>
          <p className="text-muted-light">
            {courses.length} {courses.length === 1 ? "curso encontrado" : "cursos encontrados"}
            {activeFilters > 0 && ` com ${activeFilters} filtro${activeFilters > 1 ? "s" : ""} aplicado${activeFilters > 1 ? "s" : ""}`}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar de filtros */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="rounded-2xl bg-surface border border-border p-5 space-y-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-muted-light uppercase tracking-widest">
                <SlidersHorizontal size={14} />
                Filtros
                {activeFilters > 0 && (
                  <Link href="/cursos" className="ml-auto text-xs text-amber-400 hover:underline">
                    Limpar
                  </Link>
                )}
              </div>

              {/* Busca */}
              <form method="get" action="/cursos" className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-light" />
                <input
                  name="search"
                  defaultValue={search}
                  placeholder="Buscar cursos..."
                  className="w-full rounded-lg bg-surface border border-border pl-8 pr-3 py-2 text-sm text-foreground placeholder:text-muted-light focus:outline-none focus:border-amber-500 transition-colors"
                />
                {nivel && <input type="hidden" name="nivel" value={nivel} />}
                {categoria && <input type="hidden" name="categoria" value={categoria} />}
                {tipo && <input type="hidden" name="tipo" value={tipo} />}
                <button type="submit" className="sr-only">Buscar</button>
              </form>

              {/* Nível */}
              <div>
                <p className="text-xs font-semibold text-muted-light uppercase tracking-wider mb-3">Nível</p>
                <div className="space-y-1">
                  {NIVEIS.map((n) => {
                    const params = new URLSearchParams({ ...(categoria ? { categoria } : {}), ...(tipo ? { tipo } : {}), ...(search ? { search } : {}), ...(n.value ? { nivel: n.value } : {}) });
                    return (
                      <Link
                        key={n.value}
                        href={`/cursos?${params}`}
                        className={`block px-3 py-1.5 rounded-lg text-sm transition-colors ${nivel === n.value || (!nivel && !n.value) ? "bg-amber-500 text-white" : "text-muted hover:text-foreground hover:bg-hover"}`}
                      >
                        {n.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Categoria */}
              <div>
                <p className="text-xs font-semibold text-muted-light uppercase tracking-wider mb-3">Categoria</p>
                <div className="space-y-1">
                  {CATEGORIAS.map((c) => {
                    const params = new URLSearchParams({ ...(nivel ? { nivel } : {}), ...(tipo ? { tipo } : {}), ...(search ? { search } : {}), ...(c.value ? { categoria: c.value } : {}) });
                    return (
                      <Link
                        key={c.value}
                        href={`/cursos?${params}`}
                        className={`block px-3 py-1.5 rounded-lg text-sm transition-colors ${categoria === c.value || (!categoria && !c.value) ? "bg-amber-500 text-white" : "text-muted hover:text-foreground hover:bg-hover"}`}
                      >
                        {c.value && <span className="mr-1.5 inline-flex"><CategoryIcon category={c.value} size={14} /></span>}
                        {c.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Tipo */}
              <div>
                <p className="text-xs font-semibold text-muted-light uppercase tracking-wider mb-3">Tipo</p>
                <div className="space-y-1">
                  {TIPOS.map((t) => {
                    const params = new URLSearchParams({ ...(nivel ? { nivel } : {}), ...(categoria ? { categoria } : {}), ...(search ? { search } : {}), ...(t.value ? { tipo: t.value } : {}) });
                    return (
                      <Link
                        key={t.value}
                        href={`/cursos?${params}`}
                        className={`block px-3 py-1.5 rounded-lg text-sm transition-colors ${tipo === t.value || (!tipo && !t.value) ? "bg-amber-500 text-white" : "text-muted hover:text-foreground hover:bg-hover"}`}
                      >
                        {t.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          {/* Grid de cursos */}
          <main className="flex-1">
            {courses.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="mb-4"><Search size={48} className="text-muted-light mx-auto" /></div>
                <h3 className="text-xl font-bold text-foreground mb-2">Nenhum curso encontrado</h3>
                <p className="text-muted-light mb-6">Tente ajustar os filtros ou{" "}
                  <Link href="/cursos" className="text-amber-400 hover:underline">ver todos os cursos</Link>
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {courses.map((course: any) => (
                  <Link key={course.id} href={`/cursos/${course.slug}`} className="group">
                    <div className="h-full rounded-2xl bg-surface border border-border overflow-hidden hover:border-amber-500/30 hover:shadow-md transition-all hover:-translate-y-1 flex flex-col">
                      <div className="relative h-40 bg-gradient-to-br from-surface-2 to-surface-3 flex items-center justify-center text-5xl shrink-0 overflow-hidden">
                        {course.thumbnail_url ? (
                          <Image src={course.thumbnail_url} alt={course.titulo} fill className="object-cover" />
                        ) : (
                          <CategoryIcon category={course.categoria} size={40} />
                        )}
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                          <Badge variant={course.nivel as any}>{getLevelLabel(course.nivel)}</Badge>
                          {(course.categorias?.length ? course.categorias : [course.categoria]).map((cat: string) => (
                            <Badge key={cat} variant="secondary" className="text-xs">{getCategoryLabel(cat)}</Badge>
                          ))}
                          {course.tipo === "free" && <Badge variant="free">Grátis</Badge>}
                        </div>
                        <h3 className="font-bold text-base text-foreground leading-tight mb-2 group-hover:text-amber-400 transition-colors">
                          {course.titulo}
                        </h3>
                        <p className="text-muted-light text-sm line-clamp-2 mb-auto">{course.descricao_curta}</p>
                        <div className="flex items-center justify-between text-xs text-muted-light pt-4 mt-4 border-t border-border/50">
                          <span>{course.total_aulas} aulas · {formatMinutes(course.carga_horaria ?? 0)}</span>
                          {course.preco && course.preco > 0 ? (
                            <span className="text-foreground font-bold text-sm">{formatCurrency(course.preco)}</span>
                          ) : (
                            <span className="text-emerald-600 font-bold">Grátis</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
