"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LayoutGrid, List as ListIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CategoryIcon } from "@/components/ui/category-icon";
import { getCategoryLabel, getLevelLabel, formatMinutes, formatCurrency } from "@/lib/utils";
import { useT, type TFn } from "@/lib/i18n/ui";
import { useLocale, type Locale } from "@/lib/i18n/locale";
import { courseMeta } from "@/lib/i18n/courses-meta";

type Course = any;

// ordem dos grupos: iniciais (trainee) -> básicos (junior) -> plenos (pleno)
const GROUPS: { nivel: string; label: string }[] = [
  { nivel: "trainee", label: "Cursos iniciais" },
  { nivel: "junior", label: "Básicos" },
  { nivel: "pleno", label: "Plenos" },
  { nivel: "__outros", label: "Outros" },
];

function metaLinha(course: Course, t: TFn) {
  return `${course.total_aulas} ${t("aulas")} · ${formatMinutes(course.carga_horaria ?? 0)}`;
}

function Cartao({ course, t, locale }: { course: Course; t: TFn; locale: Locale }) {
  return (
    <Link href={`/cursos/${course.slug}`} className="group">
      <div className="h-full rounded-2xl bg-surface border border-border overflow-hidden hover:border-amber-500/30 hover:shadow-md transition-all hover:-translate-y-1 flex flex-col">
        <div className="relative h-40 bg-gradient-to-br from-surface-2 to-surface-3 flex items-center justify-center text-5xl shrink-0 overflow-hidden">
          {course.thumbnail_url ? (
            <Image src={course.thumbnail_url} alt={course.titulo} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
          ) : (
            <CategoryIcon category={course.categoria} size={40} />
          )}
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <Badge variant={course.nivel as any}>{t(getLevelLabel(course.nivel))}</Badge>
            {(course.categorias?.length ? course.categorias : [course.categoria]).map((cat: string) => (
              <Badge key={cat} variant="secondary" className="text-xs">{t(getCategoryLabel(cat))}</Badge>
            ))}
            {course.tipo === "free" && <Badge variant="free">{t("Grátis")}</Badge>}
          </div>
          <h3 className="font-bold text-base text-foreground leading-tight mb-2 group-hover:text-amber-400 transition-colors">
            {courseMeta(course.slug, locale)?.titulo ?? course.titulo}
          </h3>
          <p className="text-muted-light text-sm line-clamp-2 mb-auto">
            {course.descricao_curta || courseMeta(course.slug, locale)?.descricao || course.descricao || t("Curso completo de formação profissional.")}
          </p>
          <div className="flex items-center justify-between text-xs text-muted-light pt-4 mt-4 border-t border-border/50">
            <span>{metaLinha(course, t)}</span>
            {course.preco && course.preco > 0 ? (
              <span className="text-foreground font-bold text-sm">{formatCurrency(course.preco)}</span>
            ) : (
              <span className="text-emerald-600 font-bold">{t("Grátis")}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

function LinhaLista({ course, t, locale }: { course: Course; t: TFn; locale: Locale }) {
  return (
    <Link href={`/cursos/${course.slug}`} className="group block">
      <div className="flex items-center gap-4 rounded-xl bg-surface border border-border p-3 hover:border-amber-500/30 hover:shadow-sm transition-all">
        <div className="relative h-16 w-28 shrink-0 rounded-lg overflow-hidden bg-surface-2 flex items-center justify-center">
          {course.thumbnail_url ? (
            <Image src={course.thumbnail_url} alt={course.titulo} fill sizes="112px" className="object-cover" />
          ) : (
            <CategoryIcon category={course.categoria} size={24} />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 mb-1 flex-wrap">
            <Badge variant={course.nivel as any}>{t(getLevelLabel(course.nivel))}</Badge>
            {(course.categorias?.length ? course.categorias : [course.categoria]).slice(0, 2).map((cat: string) => (
              <Badge key={cat} variant="secondary" className="text-xs">{t(getCategoryLabel(cat))}</Badge>
            ))}
            {course.tipo === "free" && <Badge variant="free">{t("Grátis")}</Badge>}
          </div>
          <h3 className="font-bold text-foreground leading-tight truncate group-hover:text-amber-400 transition-colors">
            {courseMeta(course.slug, locale)?.titulo ?? course.titulo}
          </h3>
          <p className="text-muted-light text-xs line-clamp-1">
            {course.descricao_curta || courseMeta(course.slug, locale)?.descricao || course.descricao || t("Curso completo de formação profissional.")}
          </p>
        </div>
        <div className="shrink-0 text-right text-xs text-muted-light">
          <div>{course.total_aulas} {t("aulas")}</div>
          <div>{formatMinutes(course.carga_horaria ?? 0)}</div>
          {course.preco && course.preco > 0 ? (
            <div className="text-foreground font-bold">{formatCurrency(course.preco)}</div>
          ) : (
            <div className="text-emerald-600 font-bold">{t("Grátis")}</div>
          )}
        </div>
      </div>
    </Link>
  );
}

export function CoursesView({ courses }: { courses: Course[] }) {
  const t = useT();
  const locale = useLocale();
  const [view, setView] = useState<"cards" | "list">("cards");

  // lembra a preferência do usuário
  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("smu_courses_view") : null;
    if (saved === "cards" || saved === "list") setView(saved);
  }, []);
  const change = (v: "cards" | "list") => {
    setView(v);
    try { window.localStorage.setItem("smu_courses_view", v); } catch {}
  };

  const grupos = GROUPS.map((g) => ({
    ...g,
    itens: courses.filter((c) =>
      g.nivel === "__outros"
        ? !["trainee", "junior", "pleno"].includes(c.nivel)
        : c.nivel === g.nivel
    ),
  })).filter((g) => g.itens.length > 0);

  return (
    <div>
      {/* Barra: alternar visualização */}
      <div className="flex items-center justify-end mb-5">
        <div className="inline-flex items-center rounded-lg border border-border bg-surface p-0.5">
          <button
            type="button"
            onClick={() => change("cards")}
            aria-label={t("Ver em cartões")}
            title={t("Cartões")}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${view === "cards" ? "bg-amber-500 text-white" : "text-muted hover:text-foreground"}`}
          >
            <LayoutGrid size={15} /> {t("Cartões")}
          </button>
          <button
            type="button"
            onClick={() => change("list")}
            aria-label={t("Ver em lista")}
            title={t("Lista")}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${view === "list" ? "bg-amber-500 text-white" : "text-muted hover:text-foreground"}`}
          >
            <ListIcon size={15} /> {t("Lista")}
          </button>
        </div>
      </div>

      {/* Grupos ordenados */}
      <div className="space-y-10">
        {grupos.map((g) => (
          <section key={g.nivel}>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-light mb-4 flex items-center gap-2">
              <span className="h-px w-5 bg-amber-500/60" />
              {t(g.label)}
              <span className="text-muted-light/60 normal-case font-normal tracking-normal">({g.itens.length})</span>
            </h2>
            {view === "cards" ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {g.itens.map((c) => <Cartao key={c.id} course={c} t={t} locale={locale} />)}
              </div>
            ) : (
              <div className="space-y-2">
                {g.itens.map((c) => <LinhaLista key={c.id} course={c} t={t} locale={locale} />)}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
