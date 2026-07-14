"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { RichContentViewer } from "@/components/lesson/rich-content-viewer";
import { useT } from "@/lib/i18n/ui";

interface EditorPreviewProps {
  html: string;
  open: boolean;
  onClose: () => void;
}

// Modal que mostra o conteúdo EXATAMENTE como o aluno verá (usa o RichContentViewer real).
export function EditorPreview({ html, open, onClose }: EditorPreviewProps) {
  const t = useT();

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 p-4 sm:p-8"
      onMouseDown={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-xl border border-border bg-background shadow-2xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-surface px-4 py-3 rounded-t-xl">
          <span className="text-sm font-semibold text-foreground">
            {t("Pré-visualização — visão do aluno")}
          </span>
          <button
            type="button"
            onClick={onClose}
            title={t("Fechar (Esc)")}
            className="flex h-7 w-7 items-center justify-center rounded text-muted-light hover:bg-surface-3 hover:text-foreground transition-colors"
          >
            <X size={16} />
          </button>
        </div>
        <div className="p-4 sm:p-6">
          {html?.trim() ? (
            <RichContentViewer html={html} />
          ) : (
            <p className="text-sm text-muted-light italic">{t("Sem conteúdo para pré-visualizar.")}</p>
          )}
        </div>
      </div>
    </div>
  );
}
