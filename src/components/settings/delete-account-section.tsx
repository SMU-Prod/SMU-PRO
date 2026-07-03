"use client";

import { useState } from "react";
import { AlertTriangle } from "lucide-react";

export function DeleteAccountSection({ userName }: { userName: string }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmText, setConfirmText] = useState("");

  const expectedText = "EXCLUIR MINHA CONTA";
  const canDelete = confirmText === expectedText;

  if (!showConfirm) {
    return (
      <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/10">
        <h4 className="font-semibold text-red-400 mb-1">Excluir conta</h4>
        <p className="text-sm text-red-400/80 mb-3">
          Esta ação é permanente e irá remover todos os seus dados, progresso e certificados.
        </p>
        <button
          onClick={() => setShowConfirm(true)}
          className="text-sm font-semibold text-red-400 hover:text-red-300 transition-colors"
        >
          Solicitar exclusão de conta →
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/10 space-y-4">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
          <AlertTriangle size={20} className="text-red-400" />
        </div>
        <div>
          <h4 className="font-semibold text-red-400 mb-1">Tem certeza absoluta?</h4>
          <p className="text-sm text-red-400/80">
            Esta ação é <strong>irreversível</strong>. Todos os seus cursos, progresso, certificados
            e dados pessoais serão permanentemente excluídos.
          </p>
        </div>
      </div>

      <div>
        <label className="block text-xs text-red-400/70 mb-2">
          Digite <strong className="text-red-400">{expectedText}</strong> para confirmar:
        </label>
        <input
          type="text"
          value={confirmText}
          onChange={(e) => setConfirmText(e.target.value)}
          placeholder={expectedText}
          className="w-full rounded-lg border border-red-500/30 bg-red-500/5 px-3 py-2 text-sm text-foreground placeholder:text-red-400/30 focus:outline-none focus:border-red-500/50"
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => {
            setShowConfirm(false);
            setConfirmText("");
          }}
          className="flex-1 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted hover:bg-surface-2 transition-colors"
        >
          Cancelar
        </button>
        <button
          disabled={!canDelete}
          onClick={() => {
            // Redirecionar para o Clerk para exclusão de conta
            window.open("https://accounts.clerk.dev/user/security", "_blank");
          }}
          className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
            canDelete
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-red-500/20 text-red-400/40 cursor-not-allowed"
          }`}
        >
          Excluir permanentemente
        </button>
      </div>
    </div>
  );
}
