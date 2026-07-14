import { getCourses } from "@/lib/actions/courses";
import { getPublicCoursesCached } from "@/lib/cache/public-data";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { CategoryIcon } from "@/components/ui/category-icon";
import { CoursesView } from "@/components/cursos/courses-view";
import { getServerT, getServerLocale } from "@/lib/i18n/server";
import { translateEntities } from "@/lib/i18n/content";
import { LanguageSelector } from "@/components/i18n/language-selector";
import { getPortal, filterCoursesByPortal } from "@/lib/portal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursos — SMU PRO",
  description: "Explore todos os cursos de sonorização, iluminação, DJ, VJ e produção de eventos da SMU PRO.",
  openGraph: {
    title: "Cursos — SMU PRO",
    description: "Explore todos os cursos de sonorização, iluminação, DJ, VJ e produção de eventos da SMU PRO.",
  },
};

export const dynamic = "force-dynamic"; // renderiza por requisição p/ ler o cookie de idioma

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

// Portal aula (escola livre): filtra por ÁREA, não por nível nem categoria de eventos.
const CATEGORIAS_AULA = [
  { value: "", label: "Todas as áreas" },
  { value: "tecnico", label: "Cursos técnicos" },
  { value: "renda-em-casa", label: "Renda em casa" },
];

export default async function CursosPage({ searchParams }: Props) {
  const { nivel, categoria, tipo, search } = await searchParams;
  const { userId } = await auth();
  const isSignedIn = !!userId;
  const t = await getServerT();

  let courses: any[] = [];
  try {
    // Busca textual não é cacheada (variantes infinitas); os demais filtros usam
    // a lista cacheada (i18n por cookie continua funcionando — só os dados vêm do cache).
    const trimmedSearch = search?.trim();
    courses = trimmedSearch
      ? (await getCourses({ nivel, categoria, tipo, search: trimmedSearch })) ?? []
      : (await getPublicCoursesCached({ nivel, categoria, tipo })) ?? [];
  } catch {
    courses = [];
  }

  // Portal aula.smuproducoes.com: catálogo curado (só os cursos do portal).
  const portal = await getPortal();
  const isAula = portal === "aula";
  courses = filterCoursesByPortal(courses, portal);
  // No aula, o filtro de categoria é por ÁREA (técnico/renda); no www, categorias de eventos.
  const CATS = isAula ? CATEGORIAS_AULA : CATEGORIAS;

  // ordena: iniciais (trainee) -> básicos (junior) -> plenos (pleno); alfabético dentro do grupo
  const NIVEL_RANK: Record<string, number> = { trainee: 0, junior: 1, pleno: 2 };
  courses = [...courses].sort((a, b) => {
    const ra = NIVEL_RANK[a.nivel] ?? 99;
    const rb = NIVEL_RANK[b.nivel] ?? 99;
    if (ra !== rb) return ra - rb;
    return (a.titulo || "").localeCompare(b.titulo || "", "pt-BR");
  });

  // Traduz nome/descrição dos cursos (conteúdo do banco) para o idioma atual.
  // Fail-safe: se falhar, mantém PT. Cacheado por curso — só a 1ª carga paga.
  const lang = await getServerLocale();
  if (lang !== "pt" && courses.length > 0) {
    const tr = await translateEntities(
      courses.map((c) => ({ type: "course" as const, id: c.id, titulo: c.titulo, descricao: c.descricao, descricao_curta: c.descricao_curta })),
      lang,
    );
    if (tr.size > 0) {
      courses = courses.map((c) => {
        const f = tr.get(c.id);
        return f ? { ...c, titulo: f.titulo ?? c.titulo, descricao: f.descricao ?? c.descricao, descricao_curta: f.descricao_curta ?? c.descricao_curta } : c;
      });
    }
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
            <LanguageSelector />
            {isSignedIn ? (
              <Link href="/dashboard">
                <Button size="sm">{t("Meu painel")}</Button>
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">{t("Entrar")}</Button>
                </Link>
                <Link href="/cadastro">
                  <Button size="sm">{t("Cadastrar")}</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-foreground mb-2">{t("Todos os cursos")}</h1>
          <p className="text-muted-light">
            {courses.length} {courses.length === 1 ? t("curso encontrado") : t("cursos encontrados")}
            {activeFilters > 0 && ` ${t("com")} ${activeFilters} ${activeFilters > 1 ? t("filtros aplicados") : t("filtro aplicado")}`}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar de filtros */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="rounded-2xl bg-surface border border-border p-5 space-y-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-muted-light uppercase tracking-widest">
                <SlidersHorizontal size={14} />
                {t("Filtros")}
                {activeFilters > 0 && (
                  <Link href="/cursos" className="ml-auto text-xs text-amber-400 hover:underline">
                    {t("Limpar")}
                  </Link>
                )}
              </div>

              {/* Busca */}
              <form method="get" action="/cursos" className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-light" />
                <input
                  name="search"
                  defaultValue={search}
                  placeholder={t("Buscar cursos...")}
                  className="w-full rounded-lg bg-surface border border-border pl-8 pr-3 py-2 text-sm text-foreground placeholder:text-muted-light focus:outline-none focus:border-amber-500 transition-colors"
                />
                {nivel && <input type="hidden" name="nivel" value={nivel} />}
                {categoria && <input type="hidden" name="categoria" value={categoria} />}
                {tipo && <input type="hidden" name="tipo" value={tipo} />}
                <button type="submit" className="sr-only">{t("Buscar")}</button>
              </form>

              {/* Nível — só no www (no aula livre não há trainee/junior/pleno) */}
              {!isAula && (
              <div>
                <p className="text-xs font-semibold text-muted-light uppercase tracking-wider mb-3">{t("Nível")}</p>
                <div className="space-y-1">
                  {NIVEIS.map((n) => {
                    const params = new URLSearchParams({ ...(categoria ? { categoria } : {}), ...(tipo ? { tipo } : {}), ...(search ? { search } : {}), ...(n.value ? { nivel: n.value } : {}) });
                    return (
                      <Link
                        key={n.value}
                        href={`/cursos?${params}`}
                        className={`block px-3 py-1.5 rounded-lg text-sm transition-colors ${nivel === n.value || (!nivel && !n.value) ? "bg-amber-500 text-white" : "text-muted hover:text-foreground hover:bg-hover"}`}
                      >
                        {t(n.label)}
                      </Link>
                    );
                  })}
                </div>
              </div>
              )}

              {/* Categoria (no aula = área: técnico/renda) */}
              <div>
                <p className="text-xs font-semibold text-muted-light uppercase tracking-wider mb-3">{isAula ? t("Área") : t("Categoria")}</p>
                <div className="space-y-1">
                  {CATS.map((c) => {
                    const params = new URLSearchParams({ ...(nivel ? { nivel } : {}), ...(tipo ? { tipo } : {}), ...(search ? { search } : {}), ...(c.value ? { categoria: c.value } : {}) });
                    return (
                      <Link
                        key={c.value}
                        href={`/cursos?${params}`}
                        className={`block px-3 py-1.5 rounded-lg text-sm transition-colors ${categoria === c.value || (!categoria && !c.value) ? "bg-amber-500 text-white" : "text-muted hover:text-foreground hover:bg-hover"}`}
                      >
                        {!isAula && c.value && <span className="mr-1.5 inline-flex"><CategoryIcon category={c.value} size={14} /></span>}
                        {t(c.label)}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Tipo — só no www (no aula livre todos são grátis) */}
              {!isAula && (
              <div>
                <p className="text-xs font-semibold text-muted-light uppercase tracking-wider mb-3">{t("Tipo")}</p>
                <div className="space-y-1">
                  {TIPOS.map((tp) => {
                    const params = new URLSearchParams({ ...(nivel ? { nivel } : {}), ...(categoria ? { categoria } : {}), ...(search ? { search } : {}), ...(tp.value ? { tipo: tp.value } : {}) });
                    return (
                      <Link
                        key={tp.value}
                        href={`/cursos?${params}`}
                        className={`block px-3 py-1.5 rounded-lg text-sm transition-colors ${tipo === tp.value || (!tipo && !tp.value) ? "bg-amber-500 text-white" : "text-muted hover:text-foreground hover:bg-hover"}`}
                      >
                        {t(tp.label)}
                      </Link>
                    );
                  })}
                </div>
              </div>
              )}
            </div>
          </aside>

          {/* Grid de cursos */}
          <main className="flex-1">
            {courses.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="mb-4"><Search size={48} className="text-muted-light mx-auto" /></div>
                <h3 className="text-xl font-bold text-foreground mb-2">{t("Nenhum curso encontrado")}</h3>
                <p className="text-muted-light mb-6">{t("Tente ajustar os filtros ou")}{" "}
                  <Link href="/cursos" className="text-amber-400 hover:underline">{t("ver todos os cursos")}</Link>
                </p>
              </div>
            ) : (
              <CoursesView courses={courses} isAula={isAula} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
