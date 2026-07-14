"use client";

import { useState } from "react";
import { adminUpdateUserRole, adminToggleMIT, adminEnrollUserManually, ownerSetUserActive, ownerResetPassword } from "@/lib/actions/users";
import { Button } from "@/components/ui/button";
import type { User, UserRole } from "@/types/database";
import { getLevelLabel } from "@/lib/utils";
import { ChevronDown, UserCheck, BookPlus, X, Check, Power, KeyRound, Copy } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface UserActionsProps {
  user: User;
  courses?: any[];
  /** Só o Odin (dono) vê as ações de acesso/senha. */
  isOwner?: boolean;
}

export function UserActions({ user, courses = [], isOwner = false }: UserActionsProps) {
  const [loading, setLoading] = useState(false);
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [enrolling, setEnrolling] = useState<string | null>(null);
  const [tempPass, setTempPass] = useState<string | null>(null);

  const handleRoleChange = async (role: UserRole) => {
    setLoading(true);
    await adminUpdateUserRole(user.clerk_id, role);
    setLoading(false);
  };

  const handleMITToggle = async () => {
    setLoading(true);
    await adminToggleMIT(user.clerk_id, !user.projeto_cultural);
    setLoading(false);
  };

  const handleEnroll = async (courseId: string) => {
    setEnrolling(courseId);
    await adminEnrollUserManually(user.clerk_id, courseId);
    setEnrolling(null);
  };

  const handleToggleActive = async () => {
    const acao = user.ativo ? "DESATIVAR" : "reativar";
    if (!confirm(`${acao === "DESATIVAR" ? "Desativar" : "Reativar"} o acesso de ${user.nome}?${user.ativo ? " A sessão dele será encerrada na hora." : ""}`)) return;
    setLoading(true);
    try {
      await ownerSetUserActive(user.clerk_id, !user.ativo);
    } catch (e) {
      alert("Falhou: " + (e as Error).message);
    }
    setLoading(false);
  };

  const handleResetPassword = async () => {
    if (!confirm(`Gerar uma nova senha para ${user.nome}? A senha atual dele deixa de funcionar imediatamente.`)) return;
    setLoading(true);
    try {
      const { tempPassword } = await ownerResetPassword(user.clerk_id);
      setTempPass(tempPassword);
    } catch (e) {
      alert("Falhou: " + (e as Error).message);
    }
    setLoading(false);
  };

  const roles: { value: UserRole; label: string }[] = [
    { value: "trainee", label: "Trainee" },
    { value: "junior", label: "Junior" },
    { value: "pleno", label: "Pleno" },
    { value: "projeto_cultural", label: "MIT" },
    { value: "content_manager", label: "Operador" },
    { value: "admin", label: "Admin" },
  ];

  return (
    <div className="flex items-center gap-1 transition-opacity">
      {/* Enroll button */}
      {courses.length > 0 && (
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="h-9 sm:h-7 px-2 text-xs gap-1 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
            onClick={() => setEnrollOpen((v) => !v)}
            disabled={loading}
          >
            <BookPlus size={12} />
          </Button>
          {enrollOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setEnrollOpen(false)} />
              <div className="absolute right-0 top-8 z-50 w-64 max-w-[90vw] rounded-xl border border-border bg-surface shadow-xl p-2 space-y-0.5">
                <div className="flex items-center justify-between px-2 py-1.5 mb-1">
                  <p className="text-xs font-semibold text-muted">Matricular em curso</p>
                  <button onClick={() => setEnrollOpen(false)} className="text-muted-light hover:text-muted">
                    <X size={12} />
                  </button>
                </div>
                {courses.map((c: any) => (
                  <button
                    key={c.id}
                    onClick={() => handleEnroll(c.id)}
                    disabled={enrolling === c.id}
                    className="w-full text-left px-2 py-2 rounded-lg hover:bg-hover transition-colors flex items-center gap-2 text-xs"
                  >
                    {enrolling === c.id ? (
                      <span className="h-4 w-4 rounded-full border-2 border-amber-500 border-t-transparent animate-spin shrink-0" />
                    ) : (
                      <span className="h-4 w-4 flex items-center justify-center shrink-0 text-muted-light">
                        <BookPlus size={11} />
                      </span>
                    )}
                    <span className="text-muted truncate">{c.titulo}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Role + MIT dropdown */}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button variant="ghost" size="sm" disabled={loading} className="h-9 sm:h-7 px-2 text-xs gap-1">
            Ações <ChevronDown size={11} />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="z-50 min-w-[180px] rounded-xl border border-border bg-surface p-1.5 shadow-xl animate-fade-in"
            sideOffset={4}
            align="end"
          >
            <DropdownMenu.Label className="px-3 py-1.5 text-[10px] text-muted-light uppercase tracking-widest font-semibold">
              Alterar Role
            </DropdownMenu.Label>
            {roles.map((r) => (
              <DropdownMenu.Item
                key={r.value}
                className="flex items-center justify-between gap-2 px-3 py-2 text-xs text-muted cursor-pointer rounded-lg hover:bg-amber-500/10 hover:text-amber-400 outline-none transition-colors"
                onClick={() => handleRoleChange(r.value)}
              >
                <span className={user.role === r.value ? "text-amber-400 font-semibold" : ""}>
                  {r.label}
                </span>
                {user.role === r.value && <Check size={12} className="text-amber-400" />}
              </DropdownMenu.Item>
            ))}

            <DropdownMenu.Separator className="my-1.5 h-px bg-surface-3" />

            <DropdownMenu.Item
              className="flex items-center gap-2 px-3 py-2 text-xs cursor-pointer rounded-lg hover:bg-amber-500/10 outline-none transition-colors text-amber-400"
              onClick={handleMITToggle}
            >
              <UserCheck size={13} />
              {user.projeto_cultural ? "Remover do MIT" : "Adicionar ao MIT"}
            </DropdownMenu.Item>

            {isOwner && (
              <>
                <DropdownMenu.Separator className="my-1.5 h-px bg-surface-3" />
                <DropdownMenu.Label className="px-3 py-1.5 text-[10px] text-muted-light uppercase tracking-widest font-semibold">
                  Odin — Acesso
                </DropdownMenu.Label>
                <DropdownMenu.Item
                  className={`flex items-center gap-2 px-3 py-2 text-xs cursor-pointer rounded-lg outline-none transition-colors ${
                    user.ativo
                      ? "text-red-400 hover:bg-red-500/10"
                      : "text-emerald-400 hover:bg-emerald-500/10"
                  }`}
                  onClick={handleToggleActive}
                >
                  <Power size={13} />
                  {user.ativo ? "Desativar acesso" : "Reativar acesso"}
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  className="flex items-center gap-2 px-3 py-2 text-xs cursor-pointer rounded-lg hover:bg-amber-500/10 outline-none transition-colors text-foreground"
                  onClick={handleResetPassword}
                >
                  <KeyRound size={13} />
                  Redefinir senha
                </DropdownMenu.Item>
              </>
            )}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>

      {tempPass && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4" onClick={() => setTempPass(null)}>
          <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-5 space-y-3" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2">
              <KeyRound size={16} className="text-amber-400" />
              <h3 className="text-sm font-semibold text-foreground">Nova senha de {user.nome}</h3>
            </div>
            <p className="text-xs text-muted-light">
              Anote e entregue em mãos. Ela <strong>não será mostrada de novo</strong> e nenhum e-mail foi enviado.
            </p>
            <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2">
              <code className="flex-1 text-sm font-mono text-foreground break-all">{tempPass}</code>
              <button
                onClick={() => navigator.clipboard?.writeText(tempPass)}
                className="shrink-0 text-muted-light hover:text-amber-400 transition-colors"
                title="Copiar"
              >
                <Copy size={14} />
              </button>
            </div>
            <button
              onClick={() => setTempPass(null)}
              className="w-full h-9 rounded-lg bg-amber-500 text-white text-sm font-semibold hover:bg-amber-400 transition-colors"
            >
              Guardei a senha
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
