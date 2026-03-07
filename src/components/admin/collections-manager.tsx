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
  TrendingUp, BookOpen, Eye, EyeOff, Loader2,
} from "lucide-react";

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
        <div className="rounded-2xl border border-[#6C3CE1]/30 bg-white p-5 space-y-3">
          <p className="font-semibold text-sm text-gray-900">Nova Trilha</p>
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
        <div className="flex flex-col items-center justify-center py-20 text-center rounded-2xl border-2 border-dashed border-gray-200 bg-white">
          <TrendingUp size={40} className="text-gray-200 mb-3" />
          <p className="font-medium text-gray-900 mb-1">Nenhuma trilha criada</p>
          <p className="text-sm text-gray-500 mb-4">Crie uma trilha para agrupar cursos em sequência.</p>
          <Button size="sm" onClick={() => setAdding(true)}><Plus size={13} /> Criar Trilha</Button>
        </div>
      )}

      {collections.map((col) => {
        const coursesInCol = (col.collection_courses ?? []).sort((a: any, b: any) => a.ordem - b.ordem);
        const available = allCourses.filter((c) => !usedCourseIds(col.id).has(c.id));

        return (
          <div key={col.id} className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
            {/* Header */}
            <div
              className="flex items-center gap-3 px-5 py-4 cursor-pointer hover:bg-gray-50 transition-colors group"
              onClick={() => setExpanded((p) => ({ ...p, [col.id]: !p[col.id] }))}
            >
              <TrendingUp size={16} className="text-[#6C3CE1] shrink-0" />
              <div className="flex-1 min-w-0">
                {editing === col.id ? (
                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <Input
                      value={editForm.titulo}
                      onChange={(e) => setEditForm((p) => ({ ...p, titulo: e.target.value }))}
                      className="h-7 text-xs flex-1"
                      autoFocus
                    />
                    <Button size="icon" className="h-7 w-7" loading={loading} onClick={() => handleUpdate(col.id)}><Save size={11} /></Button>
                    <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => setEditing(null)}><X size={11} /></Button>
                  </div>
                ) : (
                  <>
                    <p className="font-semibold text-gray-900 text-sm truncate">{col.titulo}</p>
                    {col.descricao && <p className="text-xs text-gray-400 truncate">{col.descricao}</p>}
                  </>
                )}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Badge variant={col.ativo ? "success" : "secondary"} className="text-[10px]">
                  {col.ativo ? "Ativa" : "Rascunho"}
                </Badge>
                <span className="text-xs text-gray-400">{coursesInCol.length} cursos</span>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                  <Button variant="ghost" size="icon" className="h-7 w-7" title={col.ativo ? "Desativar" : "Ativar"} onClick={() => handleToggleActive(col)}>
                    {col.ativo ? <EyeOff size={12} /> : <Eye size={12} />}
                  </Button>
                  <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => { setEditing(col.id); setEditForm({ titulo: col.titulo, descricao: col.descricao ?? "" }); }}>
                    <Edit2 size={12} />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-7 w-7 text-red-400 hover:text-red-500" onClick={() => handleDelete(col.id)}>
                    <Trash2 size={12} />
                  </Button>
                </div>
                <ChevronDown size={15} className={cn("text-gray-400 transition-transform", expanded[col.id] && "rotate-180")} />
              </div>
            </div>

            {/* Courses list */}
            {expanded[col.id] && (
              <div className="border-t border-gray-100">
                {coursesInCol.length === 0 && (
                  <p className="px-5 py-4 text-sm text-gray-400">Nenhum curso nesta trilha.</p>
                )}
                {coursesInCol.map((cc: any, i: number) => {
                  const course = cc.courses ?? allCourses.find((c) => c.id === cc.course_id);
                  return (
                    <div key={cc.course_id} className="flex items-center gap-3 px-5 py-2.5 border-b border-gray-50 hover:bg-gray-50 group/item transition-colors">
                      <span className="text-xs text-gray-400 w-5 shrink-0 text-center">{i + 1}</span>
                      <BookOpen size={13} className="text-[#6C3CE1] shrink-0" />
                      <span className="flex-1 text-sm text-gray-900 truncate">{course?.titulo ?? cc.course_id}</span>
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
                      className="flex-1 h-8 rounded-lg border border-gray-200 bg-white px-2 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C3CE1]"
                      defaultValue=""
                      onChange={(e) => { if (e.target.value) handleAddCourse(col.id, e.target.value); }}
                    >
                      <option value="">Selecionar curso...</option>
                      {available.map((c) => (
                        <option key={c.id} value={c.id}>{c.titulo}</option>
                      ))}
                    </select>
                    <Button size="sm" variant="ghost" className="h-8" onClick={() => setAddingCourse(null)}><X size={12} /></Button>
                  </div>
                ) : (
                  <button
                    className="w-full flex items-center gap-2 px-5 py-2.5 text-sm text-gray-400 hover:text-[#6C3CE1] hover:bg-purple-50/50 transition-colors"
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
