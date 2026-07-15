"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CategoryIcon } from "@/components/ui/category-icon";
import { formatMinutes, formatCurrency, getLevelLabel } from "@/lib/utils";

export type ExplorerCourse = {
  id: string;
  slug: string;
  titulo: string;
  categoria: string;
  nivel: string;
  tipo?: string | null;
  preco?: number | null;
  thumbnail_url?: string | null;
  total_aulas?: number | null;
  carga_horaria?: number | null;
  descricao_curta?: string | null;
};

const FILTERS: { key: string; label: string; match: (c: ExplorerCourse) => boolean }[] = [
  { key: "all", label: "Todos", match: () => true },
  { key: "som", label: "Sonorização", match: (c) => c.categoria === "som" },
  { key: "luz", label: "Iluminação", match: (c) => c.categoria === "luz" },
  { key: "dj", label: "DJ & Produção", match: (c) => c.categoria === "dj" || c.categoria === "producao" },
  { key: "vj", label: "VJ & Vídeo", match: (c) => c.categoria === "vj" },
];

export type ExplorerDict = {
  filters: Record<string, string>;
  free: string;
  aulas: string;
  levels: Record<string, string>;
};

export function CourseExplorer({
  courses,
  dict,
}: {
  courses: ExplorerCourse[];
  dict: ExplorerDict;
}) {
  const [active, setActive] = useState("all");
  const flt = FILTERS.find((f) => f.key === active) ?? FILTERS[0];
  const lvl = (n: string) => dict.levels[n] ?? getLevelLabel(n);

  return (
    <div>
      <div className="mb-7 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors " +
              (active === f.key
                ? "border-amber-500 bg-amber-500 font-semibold text-black"
                : "border-border bg-surface text-muted hover:border-border-strong hover:text-foreground")
            }
          >
            {dict.filters[f.key] ?? f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {courses.filter(flt.match).map((course) => (
          <Link key={course.id} href={`/cursos/${course.slug}`} className="group">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-amber-500/30">
              <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-surface-2 to-surface-3">
                {course.thumbnail_url ? (
                  <Image
                    src={course.thumbnail_url}
                    alt={course.titulo}
                    fill
                    sizes="(max-width:640px) 100vw, 25vw"
                    className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
                  />
                ) : (
                  <span className="opacity-50">
                    <CategoryIcon category={course.categoria} size={40} />
                  </span>
                )}
                <div className="absolute left-2.5 top-2.5 z-10 flex gap-1.5">
                  <Badge variant={course.nivel as never}>{lvl(course.nivel)}</Badge>
                  {course.tipo === "free" && <Badge variant="free">{dict.free}</Badge>}
                </div>
              </div>
              <div className="p-4">
                <h4 className="mb-2 text-[15px] font-semibold leading-tight text-foreground transition-colors group-hover:text-amber-400">
                  {course.titulo}
                </h4>
                <div className="flex items-center justify-between border-t border-border pt-2.5 text-xs text-muted-light">
                  <span>
                    {course.total_aulas ? `${course.total_aulas} ${dict.aulas}` : lvl(course.nivel)}
                    {course.carga_horaria ? ` · ${formatMinutes(course.carga_horaria)}` : ""}
                  </span>
                  {course.preco && course.preco > 0 ? (
                    <span className="font-semibold text-amber-400">{formatCurrency(course.preco)}</span>
                  ) : (
                    <span className="font-semibold text-emerald-400">{dict.free}</span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
