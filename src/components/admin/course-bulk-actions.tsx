"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { adminToggleCourse, adminDuplicateCourse, adminDeleteCourse } from "@/lib/actions/courses";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { getCategoryIcon, getCategoryLabel, getLevelLabel, formatCurrency } from "@/lib/utils";
import { Edit, Layers, EyeOff, CheckSquare, Square, X, Zap, Copy, Trash2 } from "lucide-react";
import Link from "next/link";
import { CourseToggle } from "@/components/admin/course-toggle";
import { cn } from "@/lib/utils";

interface Course {
  id: string;
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
}

export function CourseBulkActions({ courses }: { courses: Course[] }) {
  const router = useRouter();
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [bulkLoading, setBulkLoading] = useState(false);

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
      <div className="flex items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-[#141416] px-4 py-2.5">
        <div className="flex items-center gap-3">
          <button
            onClick={allSelected ? clearAll : selectAll}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            {allSelected
              ? <CheckSquare size={16} className="text-amber-400" />
              : <Square size={16} className="text-zinc-500" />}
            <span className="hidden sm:inline">
              {selected.size > 0 ? `${selected.size} selecionado${selected.size > 1 ? "s" : ""}` : "Selecionar todos"}
            </span>
            <span className="sm:hidden">
              {selected.size > 0 ? selected.size : ""}
            </span>
          </button>

          {selected.size > 0 && (
            <>
              <div className="h-4 w-px bg-zinc-700" />
              <button onClick={clearAll} className="text-zinc-500 hover:text-zinc-400 transition-colors">
                <X size={14} />
              </button>
            </>
          )}
        </div>

        {selected.size > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-500 hidden sm:inline">{selected.size} curso{selected.size > 1 ? "s" : ""}</span>
            <Button
              size="sm"
              variant="secondary"
              loading={bulkLoading}
              onClick={() => handleBulkActivate(false)}
              className="h-7 text-xs gap-1"
            >
              <EyeOff size={12} /> Desativar
            </Button>
            <Button
              size="sm"
              loading={bulkLoading}
              onClick={() => handleBulkActivate(true)}
              className="h-7 text-xs gap-1"
            >
              <Zap size={12} /> Publicar
            </Button>
          </div>
        )}

        {selected.size === 0 && (
          <span className="text-xs text-zinc-500">{courses.length} curso{courses.length !== 1 ? "s" : ""}</span>
        )}
      </div>

      {/* Course grid */}
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
  const [cloning, setCloning] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleClone = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!confirm(`Clonar o curso "${c.titulo}"?`)) return;
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
      alert(`Este curso tem ${c.total_alunos} aluno${c.total_alunos > 1 ? "s" : ""} matriculado${c.total_alunos > 1 ? "s" : ""}. Desative-o primeiro ou remova as matrículas.`);
      return;
    }
    if (!confirm(`Tem certeza que deseja apagar "${c.titulo}"? Esta ação não pode ser desfeita.`)) return;
    setDeleting(true);
    try {
      await adminDeleteCourse(c.id);
      router.refresh();
    } catch {
      alert("Erro ao apagar curso. Verifique se não há dados vinculados.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div
      className={cn(
        "rounded-2xl bg-[#141416] border overflow-hidden hover:shadow-sm transition-all group",
        selected ? "border-amber-500 ring-2 ring-amber-500/20" : "border-zinc-800 hover:border-amber-500/20"
      )}
    >
      {/* Thumbnail / Header */}
      <div className="h-20 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center text-4xl relative">
        {getCategoryIcon(c.categoria)}

        {/* Select checkbox */}
        <button
          onClick={onSelect}
          className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity"
          title="Selecionar"
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
          <Badge variant={c.nivel as any} className="text-[10px]">{getLevelLabel(c.nivel)}</Badge>
          <Badge variant={c.ativo ? "success" : "secondary"} className="text-[10px]">
            {c.ativo ? "Ativo" : "Rascunho"}
          </Badge>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 space-y-3">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-zinc-100 text-sm leading-tight line-clamp-2">{c.titulo}</h3>
            <Badge variant={c.tipo === "pago" ? "default" : "free"} className="text-[10px] shrink-0">
              {c.tipo === "pago" ? (c.preco ? formatCurrency(c.preco) : "Pago") : c.tipo === "free" ? "Grátis" : "MIT"}
            </Badge>
          </div>
          <p className="text-xs text-zinc-500 mt-1">{getCategoryLabel(c.categoria)}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-zinc-900 rounded-lg py-2">
            <p className="text-sm font-bold text-zinc-100">{c.total_aulas}</p>
            <p className="text-[10px] text-zinc-500">Aulas</p>
          </div>
          <div className="bg-zinc-900 rounded-lg py-2">
            <p className="text-sm font-bold text-zinc-100">{c.total_alunos}</p>
            <p className="text-[10px] text-zinc-500">Alunos</p>
          </div>
          <div className="bg-zinc-900 rounded-lg py-2">
            <p className="text-sm font-bold text-amber-600">{c.total_certificados}</p>
            <p className="text-[10px] text-zinc-500">Certs.</p>
          </div>
        </div>

        {/* Progress */}
        {c.progresso_medio != null && (
          <div>
            <div className="flex justify-between text-[10px] text-zinc-500 mb-1">
              <span>Progresso médio</span>
              <span>{c.progresso_medio}%</span>
            </div>
            <Progress value={c.progresso_medio} className="h-1.5" />
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2 pt-1 border-t border-zinc-800/50">
          <CourseToggle id={c.id} ativo={c.ativo} />
          <Link href={`/admin/cursos/${c.id}`} className="flex-1">
            <Button variant="secondary" size="sm" className="w-full gap-1.5">
              <Layers size={13} /> Módulos
            </Button>
          </Link>
          <Link href={`/admin/cursos/${c.id}?tab=informacoes`}>
            <Button variant="ghost" size="icon" className="h-8 w-8" title="Editar informações">
              <Edit size={14} />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="h-8 w-8" title="Clonar curso" loading={cloning} onClick={handleClone}>
            <Copy size={14} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-red-400 hover:text-red-300 hover:bg-red-500/10"
            title="Apagar curso"
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
