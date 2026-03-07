"use client";

import { useState } from "react";
import { createNote, deleteNote } from "@/lib/actions/notes";
import { Button } from "@/components/ui/button";
import type { Note } from "@/types/database";
import { Plus, Trash2, StickyNote } from "lucide-react";
import { cn } from "@/lib/utils";

interface NotesTabProps {
  lessonId: string;
  notes: Note[];
  userId: string;
}

export function NotesTab({ lessonId, notes: initialNotes, userId }: NotesTabProps) {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!newNote.trim() || saving) return;
    setSaving(true);
    try {
      const data = await createNote(lessonId, newNote.trim());
      if (data) setNotes((prev) => [data as any, ...prev]);
      setNewNote("");
    } catch (e) {
      console.error("[Notes] Erro ao salvar:", e);
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
    await deleteNote(id).catch((e) => console.error("[Notes] Erro ao deletar:", e));
  };

  return (
    <div className="animate-fade-in space-y-4">
      {/* Nova anotação */}
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Escreva sua anotação..."
          className={cn(
            "w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400",
            "resize-none outline-none min-h-[80px]"
          )}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.ctrlKey) handleSave();
          }}
        />
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
          <span className="text-xs text-gray-400">Ctrl+Enter para salvar</span>
          <Button size="sm" onClick={handleSave} loading={saving} disabled={!newNote.trim()}>
            <Plus size={14} /> Salvar Nota
          </Button>
        </div>
      </div>

      {/* Lista de notas */}
      {notes.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <StickyNote size={36} className="text-gray-200 mb-3" />
          <p className="text-sm text-gray-400">Nenhuma anotação ainda.</p>
          <p className="text-xs text-gray-400 mt-1">Suas notas ficam salvas para revisar depois.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {notes.map((note) => (
            <div
              key={note.id}
              className="group rounded-xl border border-gray-200 bg-white p-4 hover:border-purple-200 transition-colors"
            >
              <p className="text-sm text-gray-800 whitespace-pre-wrap">{note.conteudo}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-gray-400">
                  {new Date(note.created_at).toLocaleDateString("pt-BR", {
                    day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit",
                  })}
                </span>
                <button
                  onClick={() => handleDelete(note.id)}
                  className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
