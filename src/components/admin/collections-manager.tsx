"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  adminCreateCollection, adminUpdateCollection,
  adminDeleteCollection, adminAddCourseToCollection,
  adminRemoveCourseFromCollection,
} from "@/lib/actions/collections";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn, slugify, getLevelLabel } from "@/lib/utils";
import {
  Plus, Edit2, Trash2, ChevronDown, Save, X,
  TrendingUp, BookOpen, Eye, EyeOff, Loader2, Monitor,
  Play, Lock, CheckCircle2, Circle, Trophy, ChevronRight,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { CategoryIcon } from "@/components/ui/category-icon";

interface Course { id: string; titulo: string; nivel: string; ativo: boolean }

export function CollectionsManager({
  collections: initial,
  allCourses,
}: {
  collections: any[];
  allCourses: Course[];
}) {
  const router = useRouter();
  const [collections, setCollections] = useState<any[]>(initial);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [addingCourse, setAddingCourse] = useState<string | null>(null);
  const [previewId, setPreviewId] = useState<string | null>(null);

  const [newForm, setNewForm] = useState({ titulo: "", descricao: "", slug: "" });
  const [editForm, setEditForm] = useState({ titulo: "", descricao: "" });

  const handleCreate = async () => {
    if (!newForm.titulo.trim()) return;
    setLoading(true);
    try {
      const created = await adminCreateCollection({
        titulo: newForm.titulo,
        descricao: newForm.descricao,
        slug: newForm.slug || slugify(newForm.titulo),
        ordem: collections.length,
      });
      setCollections((p) => [...p, { ...created, collection_courses: [] }]);
      setAdding(false);
      setNewForm({ titulo: "", descricao: "", slug: "" });
    } finally { setLoading(false); }
  };

  const handleUpdate = async (id: string) => {
    setLoading(true);
    try {
      await adminUpdateCollection(id, editForm);
      setCollections((p) => p.map((c) => c.id === id ? { ...c, ...editForm } : c));
      setEditing(null);
    } finally { setLoading(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Remover esta trilha?")) return;
    await adminDeleteCollection(id);
    setCollections((p) => p.filter((c) => c.id !== id));
  };

  const handleToggleActive = async (col: any) => {
    setLoading(true);
    try {
      await adminUpdateCollection(col.id, { ativo: !col.ativo });
      setCollections((p) => p.map((c) => c.id === col.id ? { ...c, ativo: !c.ativo } : c));
    } finally { setLoading(false); }
  };

  const handleAddCourse = async (collectionId: string, courseId: string) => {
    const col = collections.find((c) => c.id === collectionId);
    const ordem = (col?.collection_courses ?? []).length;
    await adminAddCourseToCollection(collectionId, courseId, ordem);
    const course = allCourses.find((c) => c.id === courseId);
    setCollections((p) =>
      p.map((c) =>
        c.id === collectionId
          ? { ...c, collection_courses: [...(c.collection_courses ?? []), { course_id: courseId, ordem, courses: course }] }
          : c
      )
    );
    setAddingCourse(null);
    router.refresh();
  };

  const handleRemoveCourse = async (collectionId: string, courseId: string) => {
    await adminRemoveCourseFromCollection(collectionId, courseId);
    setCollections((p) =>
      p.map((c) =>
        c.id === collectionId
          ? { ...c, collection_courses: (c.collection_courses ?? []).filter((cc: any) => cc.course_id !== courseId) }
          : c
      )
    );
  };

  const usedCourseIds = (collId: string) =>
    new Set((collections.find((c) => c.id === collId)?.collection_courses ?? []).map((cc: any) => cc.course_id));

  return (
    <div className="space-y-4 max-w-3xl">
      <div className="flex justify-end">
        <Button size="sm" onClick={() => setAdding(true)}>
          <Plus size={14} /> Nova Trilha
        </Button>
      </div>

      {adding && (
        <div className="rounded-2xl border border-amber-500/30 bg-surface p-5 space-y-3">
          <p className="font-semibold text-sm text-foreground">Nova Trilha</p>
          <Input
            placeholder="Título da trilha *"
            value={newForm.titulo}
            onChange={(e) => setNewForm((p) => ({ ...p, titulo: e.target.value, slug: slugify(e.target.value) }))}
            autoFocus
          />
          <Input
            placeholder="Descrição (opcional)"
            value={newForm.descricao}
            onChange={(e) => setNewForm((p) => ({ ...p, descricao: e.target.value }))}
          />
          <Input
            placeholder="Slug"
            value={newForm.slug}
            onChange={(e) => setNewForm((p) => ({ ...p, slug: e.target.value }))}
          />
          <div className="flex gap-2">
            <Button size="sm" loading={loading} onClick={handleCreate}><Save size={13} /> Criar</Button>
            <Button size="sm" variant="ghost" onClick={() => setAdding(false)}><X size={13} /> Cancelar</Button>
          </div>
        </div>
      )}

      {collections.length === 0 && !adding && (
        <div className="flex flex-col items-center justify-center py-20 text-center rounded-2xl border-2 border-dashed border-border bg-surface">
          <TrendingUp size={40} className="text-muted-light mb-3" />
          <p className="font-medium text-foreground mb-1">Nenhuma trilha criada</p>
          <p className="text-sm text-muted-light mb-4">Crie uma trilha para agrupar cursos em sequência.</p>
          <Button size="sm" onClick={() => setAdding(true)}><Plus size={13} /> Criar Trilha</Button>
        </div>
      )}

      {collections.map((col) => {
        const coursesInCol = (col.collection_courses ?? []).sort((a: any, b: any) => a.ordem - b.ordem);
        const available = allCourses.filter((c) => !usedCourseIds(col.id).has(c.id));

        return (
          <div key={col.id} className="rounded-2xl border border-border bg-surface overflow-hidden">
            {/* Header */}
            <div
              className="flex items-center gap-3 px-5 py-4 cursor-pointer hover:bg-hover transition-colors group"
              onClick={() => setExpanded((p) => ({ ...p, [col.id]: !p[col.id] }))}
            >
              <TrendingUp size={16} className="text-amber-400 shrink-0" />
              <div className="flex-1 min-w-0">
                {editing === col.id ? (
                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <Input
                      value={editForm.titulo}
                      onChange={(e) => setEditForm((p) => ({ ...p, titulo: e.target.value }))}
                      className="h-7 text-xs flex-1"
                      autoFocus
                    />
                    <Button size="icon" className="h-9 w-9 sm:h-7 sm:w-7" loading={loading} onClick={() => handleUpdate(col.id)}><Save size={11} /></Button>
                    <Button size="icon" variant="ghost" className="h-9 w-9 sm:h-7 sm:w-7" onClick={() => setEditing(null)}><X size={11} /></Button>
                  </div>
                ) : (
                  <>
                    <p className="font-semibold text-foreground text-sm truncate">{col.titulo}</p>
                    {col.descricao && <p className="text-xs text-muted-light truncate">{col.descricao}</p>}
                  </>
                )}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Badge variant={col.ativo ? "success" : "secondary"} className="text-[10px]">
                  {col.ativo ? "Ativa" : "Rascunho"}
                </Badge>
                <span className="text-xs text-muted-light">{coursesInCol.length} cursos</span>
                <div className="md:opacity-0 md:group-hover:opacity-100 transition-opacity flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                  <Button variant="ghost" size="icon" className="h-9 w-9 sm:h-7 sm:w-7" title="Preview do aluno" onClick={() => setPreviewId(previewId === col.id ? null : col.id)}>
                    <Monitor size={12} />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 sm:h-7 sm:w-7" title={col.ativo ? "Desativar" : "Ativar"} onClick={() => handleToggleActive(col)}>
                    {col.ativo ? <EyeOff size={12} /> : <Eye size={12} />}
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 sm:h-7 sm:w-7" onClick={() => { setEditing(col.id); setEditForm({ titulo: col.titulo, descricao: col.descricao ?? "" }); }}>
                    <Edit2 size={12} />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 sm:h-7 sm:w-7 text-red-400 hover:text-red-500" onClick={() => handleDelete(col.id)}>
                    <Trash2 size={12} />
                  </Button>
                </div>
                <ChevronDown size={15} className={cn("text-muted-light transition-transform", expanded[col.id] && "rotate-180")} />
              </div>
            </div>

            {/* Student preview panel */}
            {previewId === col.id && (
              <div className="border-t border-amber-500/20 bg-amber-500/5 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Monitor size={14} className="text-amber-400" />
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Preview — Visão do Aluno</span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {coursesInCol.map((cc: any, i: number) => {
                    const course = cc.courses ?? allCourses.find((c: any) => c.id === cc.course_id);
                    if (!course) return null;
                    // Simula 3 estados: em andamento, não iniciado, concluído
                    const mockProgress = i === 0 ? 45 : i === coursesInCol.length - 1 ? 100 : 0;
                    const isEnrolled = mockProgress > 0;
                    const isDone = mockProgress === 100;
                    return (
                      <div
                        key={cc.course_id}
                        className={cn(
                          "rounded-xl border bg-surface p-4 transition-all",
                          isDone ? "border-emerald-200 bg-emerald-50/30" : isEnrolled ? "border-amber-500/20" : "border-border"
                        )}
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="shrink-0 mt-0.5">
                            <CategoryIcon category={course.categoria ?? "outros"} size={24} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-foreground line-clamp-2 leading-snug">{course.titulo}</p>
                          </div>
                          <div className="shrink-0">
                            {isDone ? <CheckCircle2 size={18} className="text-emerald-500" /> : isEnrolled ? <Circle size={18} className="text-amber-400" /> : <Lock size={16} className="text-muted-light" />}
                          </div>
                        </div>
                        {isEnrolled && (
                          <div className="mb-3">
                            <Progress value={mockProgress} className="h-1.5" />
                            <p className="text-xs text-muted-light mt-1">{mockProgress}% concluído</p>
                          </div>
                        )}
                        <Button variant={isDone ? "success" : isEnrolled ? "default" : "secondary"} size="sm" className="w-full gap-1.5 pointer-events-none">
                          {isDone ? <><Trophy size={13} /> Ver certificado</> : isEnrolled ? <><Play size={13} /> Continuar</> : <><ChevronRight size={13} /> Ver curso</>}
                        </Button>
                      </div>
                    );
                  })}
                </div>
                {coursesInCol.length === 0 && (
                  <p className="text-sm text-muted-light text-center py-4">Adicione cursos à trilha para ver o preview.</p>
                )}
              </div>
            )}

            {/* Courses list */}
            {expanded[col.id] && (
              <div className="border-t border-border/50">
                {coursesInCol.length === 0 && (
                  <p className="px-5 py-4 text-sm text-muted-light">Nenhum curso nesta trilha.</p>
                )}
                {coursesInCol.map((cc: any, i: number) => {
                  const course = cc.courses ?? allCourses.find((c) => c.id === cc.course_id);
                  return (
                    <div key={cc.course_id} className="flex items-center gap-3 px-5 py-2.5 border-b border-border/30 hover:bg-hover group/item transition-colors">
                      <span className="text-xs text-muted-light w-5 shrink-0 text-center">{i + 1}</span>
                      <BookOpen size={13} className="text-amber-400 shrink-0" />
                      <span className="flex-1 text-sm text-foreground truncate">{course?.titulo ?? cc.course_id}</span>
                      {course?.nivel && (
                        <Badge variant={course.nivel as any} className="text-[10px]">{getLevelLabel(course.nivel)}</Badge>
                      )}
                      <button
                        className="opacity-0 group-hover/item:opacity-100 transition-opacity text-red-400 hover:text-red-500"
                        onClick={() => handleRemoveCourse(col.id, cc.course_id)}
                      >
                        <X size={13} />
                      </button>
                    </div>
                  );
                })}

                {/* Add course */}
                {addingCourse === col.id ? (
                  <div className="px-5 py-3 flex items-center gap-2">
                    <select
                      className="flex-1 h-10 sm:h-8 rounded-lg border border-border bg-surface px-2 text-sm sm:text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500"
                      defaultValue=""
                      onChange={(e) => { if (e.target.value) handleAddCourse(col.id, e.target.value); }}
                    >
                      <option value="">Selecionar curso...</option>
                      {available.map((c) => (
                        <option key={c.id} value={c.id}>{c.titulo}</option>
                      ))}
                    </select>
                    <Button size="sm" variant="ghost" className="h-10 sm:h-8" onClick={() => setAddingCourse(null)}><X size={14} /></Button>
                  </div>
                ) : (
                  <button
                    className="w-full flex items-center gap-2 px-5 py-2.5 text-sm text-muted-light hover:text-amber-400 hover:bg-amber-500/5 transition-colors"
                    onClick={() => setAddingCourse(col.id)}
                  >
                    <Plus size={13} /> Adicionar curso
                  </button>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
