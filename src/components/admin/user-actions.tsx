"use client";

import { useState } from "react";
import { adminUpdateUserRole, adminToggleMIT, adminEnrollUserManually } from "@/lib/actions/users";
import { Button } from "@/components/ui/button";
import type { User, UserRole } from "@/types/database";
import { getLevelLabel } from "@/lib/utils";
import { ChevronDown, UserCheck, BookPlus, X, Check } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface UserActionsProps {
  user: User;
  courses?: any[];
}

export function UserActions({ user, courses = [] }: UserActionsProps) {
  const [loading, setLoading] = useState(false);
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [enrolling, setEnrolling] = useState<string | null>(null);

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

  const roles: { value: UserRole; label: string }[] = [
    { value: "trainee", label: "Trainee" },
    { value: "junior", label: "Junior" },
    { value: "pleno", label: "Pleno" },
    { value: "projeto_cultural", label: "MIT" },
    { value: "content_manager", label: "Content Manager" },
    { value: "admin", label: "Admin" },
  ];

  return (
    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
      {/* Enroll button */}
      {courses.length > 0 && (
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-xs gap-1 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            onClick={() => setEnrollOpen((v) => !v)}
            disabled={loading}
          >
            <BookPlus size={12} />
          </Button>
          {enrollOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setEnrollOpen(false)} />
              <div className="absolute right-0 top-8 z-50 w-64 rounded-xl border border-border bg-surface shadow-xl p-2 space-y-0.5">
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
          <Button variant="ghost" size="sm" disabled={loading} className="h-7 px-2 text-xs gap-1">
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
              className="flex items-center gap-2 px-3 py-2 text-xs cursor-pointer rounded-lg hover:bg-amber-50 outline-none transition-colors text-amber-600"
              onClick={handleMITToggle}
            >
              <UserCheck size={13} />
              {user.projeto_cultural ? "Remover do MIT" : "Adicionar ao MIT"}
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
