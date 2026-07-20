"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { adminToggleCourse, adminDuplicateCourse, adminDeleteCourse } from "@/lib/actions/courses";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { getCategoryLabel, getLevelLabel, formatCurrency } from "@/lib/utils";
import { CategoryIcon } from "@/components/ui/category-icon";
import { Edit, Layers, EyeOff, CheckSquare, Square, X, Zap, Copy, Trash2, LayoutGrid, List as ListIcon } from "lucide-react";
import Link from "next/link";
import { CourseToggle } from "@/components/admin/course-toggle";
import { StudentPreviewButton } from "@/components/admin/student-card-preview";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n/ui";
import { useLocale } from "@/lib/i18n/locale";
import { courseMeta } from "@/lib/i18n/courses-meta";

interface Course {
  id: string;
  slug?: string;
  titulo: string;
  nivel: string;
  categoria: string;
  tipo: string;
  ativo: boolean;
  preco?: number | null;
  total_aulas: number;
  total_alunos: number;
  total_certificados: number;
  progresso_medio?: number | null;
  thumbnail_url?: string | null;
}

export function CourseBulkActions({ courses }: { courses: Course[] }) {
  const router = useRouter();
  const t = useT();
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [bulkLoading, setBulkLoading] = useState(false);

  // Cards × Lista. Começa em "cards" no servidor (evita mismatch de hidratação) e
  // aplica a preferência salva depois de montar — mesmo padrão do catálogo do aluno.
  const [view, setView] = useState<"cards" | "list">("cards");
  useEffect(() => {
    try {
      const salvo = window.localStorage.getItem("smu_admin_courses_view");
      if (salvo === "cards" || salvo === "list") setView(salvo);
    } catch { /* localStorage indisponível */ }
  }, []);
  const changeView = (v: "cards" | "list") => {
    setView(v);
    try { window.localStorage.setItem("smu_admin_courses_view", v); } catch { /* noop */ }
  };

  const toggleSelect = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectAll = () => setSelected(new Set(courses.map((c) => c.id)));
  const clearAll = () => setSelected(new Set());

  const handleBulkActivate = async (ativo: boolean) => {
    setBulkLoading(true);
    try {
      await Promise.all([...selected].map((id) => adminToggleCourse(id, ativo)));
      clearAll();
      router.refresh();
    } finally {
      setBulkLoading(false);
    }
  };

  const allSelected = selected.size === courses.length && courses.length > 0;

  return (
    <div className="space-y-3">
      {/* Bulk toolbar */}
      <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-2.5">
        <div className="flex items-center gap-3">
          <button
            onClick={allSelected ? clearAll : selectAll}
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            {allSelected
              ? <CheckSquare size={16} className="text-amber-400" />
              : <Square size={16} className="text-muted-light" />}
            <span className="hidden sm:inline">
              {selected.size > 0 ? `${selected.size} ${selected.size > 1 ? t("selecionados") : t("selecionado")}` : t("Selecionar todos")}
            </span>
            <span className="sm:hidden">
              {selected.size > 0 ? selected.size : ""}
            </span>
          </button>

          {selected.size > 0 && (
            <>
              <div className="h-4 w-px bg-surface-3" />
              <button onClick={clearAll} className="text-muted-light hover:text-muted transition-colors">
                <X size={14} />
              </button>
            </>
          )}
        </div>

        {selected.size > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-light hidden sm:inline">{selected.size} {selected.size > 1 ? t("cursos") : t("curso")}</span>
            <Button
              size="sm"
              variant="secondary"
              loading={bulkLoading}
              onClick={() => handleBulkActivate(false)}
              className="h-7 text-xs gap-1"
            >
              <EyeOff size={12} /> {t("Desativar")}
            </Button>
            <Button
              size="sm"
              loading={bulkLoading}
              onClick={() => handleBulkActivate(true)}
              className="h-7 text-xs gap-1"
            >
              <Zap size={12} /> {t("Publicar")}
            </Button>
          </div>
        )}

        {selected.size === 0 && (
          <span className="text-xs text-muted-light">{courses.length} {courses.length !== 1 ? t("cursos") : t("curso")}</span>
        )}

        {/* Cards × Lista — mesmo padrão do catálogo do aluno, com a preferência salva */}
        <div className="ml-auto flex items-center gap-0.5 rounded-lg border border-border bg-surface-2 p-0.5">
          <button
            type="button"
            onClick={() => changeView("cards")}
            aria-label={t("Ver em cards")}
            title={t("Ver em cards")}
            className={`rounded-md p-1.5 transition-colors ${view === "cards" ? "bg-amber-500 text-white" : "text-muted hover:text-foreground"}`}
          >
            <LayoutGrid size={15} />
          </button>
          <button
            type="button"
            onClick={() => changeView("list")}
            aria-label={t("Ver em lista")}
            title={t("Ver em lista")}
            className={`rounded-md p-1.5 transition-colors ${view === "list" ? "bg-amber-500 text-white" : "text-muted hover:text-foreground"}`}
          >
            <ListIcon size={15} />
          </button>
        </div>
      </div>

      {view === "cards" ? (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {courses.map((c) => (
            <CourseAdminCard
              key={c.id}
              course={c}
              selected={selected.has(c.id)}
              onSelect={() => toggleSelect(c.id)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border overflow-hidden divide-y divide-border">
          {courses.map((c) => (
            <CourseAdminRow
              key={c.id}
              course={c}
              selected={selected.has(c.id)}
              onSelect={() => toggleSelect(c.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/** Linha da visão em LISTA: densa, para varrer 45 cursos de uma vez. */
function CourseAdminRow({
  course: c,
  selected,
  onSelect,
}: {
  course: Course;
  selected: boolean;
  onSelect: () => void;
}) {
  const t = useT();
  const locale = useLocale();
  const dispTitulo = courseMeta(c.slug, locale)?.titulo ?? c.titulo;

  return (
    <div className={`flex items-center gap-3 px-3 py-2 transition-colors ${selected ? "bg-amber-500/10" : "hover:bg-hover"}`}>
      <input
        type="checkbox"
        checked={selected}
        onChange={onSelect}
        className="h-4 w-4 shrink-0 rounded border-border accent-amber-500"
        aria-label={t("Selecionar")}
      />
      <Link href={`/admin/cursos/${c.id}`} className="min-w-0 flex-1 group">
        <p className="truncate text-sm font-medium text-foreground group-hover:text-amber-400 transition-colors">
          {dispTitulo}
        </p>
        <p className="truncate text-[11px] text-muted-light">{c.slug}</p>
      </Link>
      <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${c.ativo ? "bg-emerald-500/15 text-emerald-500" : "bg-surface-3 text-muted-light"}`}>
        {c.ativo ? t("Ativo") : t("Rascunho")}
      </span>
      <span className="hidden sm:block shrink-0 w-16 text-right text-[11px] text-muted-light">
        {c.total_alunos ?? 0} {t("alunos")}
      </span>
      <span className="hidden md:block shrink-0 w-14 text-right text-[11px] text-muted-light">
        {c.total_aulas ?? 0} {t("aulas")}
      </span>
      <Link
        href={`/admin/cursos/${c.id}`}
        className="shrink-0 rounded-lg border border-border px-2.5 py-1 text-xs text-muted hover:text-foreground hover:border-amber-500/30 transition-colors"
      >
        {t("Abrir")}
      </Link>
    </div>
  );
}

function CourseAdminCard({
  course: c,
  selected,
  onSelect,
}: {
  course: Course;
  selected: boolean;
  onSelect: () => void;
}) {
  const router = useRouter();
  const t = useT();
  const locale = useLocale();
  const dispTitulo = courseMeta(c.slug, locale)?.titulo ?? c.titulo;
  const [cloning, setCloning] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleClone = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!confirm(`${t("Clonar o curso")} "${dispTitulo}"?`)) return;
    setCloning(true);
    try {
      await adminDuplicateCourse(c.id);
      router.refresh();
    } finally {
      setCloning(false);
    }
  };

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (c.total_alunos > 0) {
      alert(`${t("Este curso tem")} ${c.total_alunos} ${c.total_alunos > 1 ? t("alunos") : t("aluno")} ${c.total_alunos > 1 ? t("matriculados") : t("matriculado")}. ${t("Desative-o primeiro ou remova as matrículas.")}`);
      return;
    }
    if (!confirm(`${t("Tem certeza que deseja apagar")} "${dispTitulo}"? ${t("Esta ação não pode ser desfeita.")}`)) return;
    setDeleting(true);
    try {
      await adminDeleteCourse(c.id);
      router.refresh();
    } catch {
      alert(t("Erro ao apagar curso. Verifique se não há dados vinculados."));
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div
      className={cn(
        "rounded-2xl bg-surface border overflow-hidden hover:shadow-sm transition-all group",
        selected ? "border-amber-500 ring-2 ring-amber-500/20" : "border-border hover:border-amber-500/20"
      )}
    >
      {/* Thumbnail / Header */}
      <div className="h-20 bg-gradient-to-br from-surface-2 to-surface-3 flex items-center justify-center text-4xl relative overflow-hidden">
        {c.thumbnail_url ? (
          <img src={c.thumbnail_url} alt={c.titulo} className="w-full h-full object-cover" />
        ) : (
          <CategoryIcon category={c.categoria} size={32} />
        )}

        {/* Select checkbox */}
        <button
          onClick={onSelect}
          className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity"
          title={t("Selecionar")}
        >
          {selected
            ? <CheckSquare size={18} className="text-amber-400 drop-shadow-sm" />
            : <Square size={18} className="text-white drop-shadow-sm" />}
        </button>
        {selected && (
          <button onClick={onSelect} className="absolute top-2 left-2">
            <CheckSquare size={18} className="text-amber-400 drop-shadow-sm" />
          </button>
        )}

        <div className="absolute top-2 right-2 flex gap-1.5">
          <Badge variant={c.nivel as any} className="text-[10px]">{t(getLevelLabel(c.nivel))}</Badge>
          <Badge variant={c.ativo ? "success" : "secondary"} className="text-[10px]">
            {c.ativo ? t("Ativo") : t("Rascunho")}
          </Badge>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 space-y-3">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-foreground text-sm leading-tight line-clamp-2">{dispTitulo}</h3>
            <Badge variant={c.tipo === "pago" ? "default" : "free"} className="text-[10px] shrink-0">
              {c.tipo === "pago" ? (c.preco ? formatCurrency(c.preco) : t("Pago")) : c.tipo === "free" ? t("Grátis") : "MIT"}
            </Badge>
          </div>
          <p className="text-xs text-muted-light mt-1">{t(getCategoryLabel(c.categoria))}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-surface-2 rounded-lg py-2">
            <p className="text-sm font-bold text-foreground">{c.total_aulas}</p>
            <p className="text-[10px] text-muted-light">{t("Aulas")}</p>
          </div>
          <div className="bg-surface-2 rounded-lg py-2">
            <p className="text-sm font-bold text-foreground">{c.total_alunos}</p>
            <p className="text-[10px] text-muted-light">{t("Alunos")}</p>
          </div>
          <div className="bg-surface-2 rounded-lg py-2">
            <p className="text-sm font-bold text-amber-600">{c.total_certificados}</p>
            <p className="text-[10px] text-muted-light">{t("Certs.")}</p>
          </div>
        </div>

        {/* Progress */}
        {c.progresso_medio != null && (
          <div>
            <div className="flex justify-between text-[10px] text-muted-light mb-1">
              <span>{t("Progresso médio")}</span>
              <span>{c.progresso_medio}%</span>
            </div>
            <Progress value={c.progresso_medio} className="h-1.5" />
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2 pt-1 border-t border-border/50">
          <CourseToggle id={c.id} ativo={c.ativo} />
          <Link href={`/admin/cursos/${c.id}`} className="flex-1">
            <Button variant="secondary" size="sm" className="w-full gap-1.5">
              <Layers size={13} /> {t("Módulos")}
            </Button>
          </Link>
          <StudentPreviewButton course={c} />
          <Link href={`/admin/cursos/${c.id}?tab=informacoes`}>
            <Button variant="ghost" size="icon" className="h-8 w-8" title={t("Editar informações")}>
              <Edit size={14} />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="h-8 w-8" title={t("Clonar curso")} loading={cloning} onClick={handleClone}>
            <Copy size={14} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-red-400 hover:text-red-300 hover:bg-red-500/10"
            title={t("Apagar curso")}
            loading={deleting}
            onClick={handleDelete}
          >
            <Trash2 size={14} />
          </Button>
        </div>
      </div>
    </div>
  );
}
