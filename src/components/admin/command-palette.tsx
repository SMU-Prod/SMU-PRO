"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Search, Layers, Users, BarChart3, Settings, Plus, Award, FileText, ArrowRight, Command } from "lucide-react";
import { cn } from "@/lib/utils";

interface CommandItem {
  id: string;
  label: string;
  sublabel?: string;
  icon: React.ElementType;
  iconColor?: string;
  href: string;
  group: string;
}

const STATIC_COMMANDS: CommandItem[] = [
  // Navegação
  { id: "dashboard", label: "Visão Geral", sublabel: "Painel administrativo", icon: BarChart3, iconColor: "text-blue-500", href: "/admin", group: "Navegação" },
  { id: "cursos", label: "Cursos", sublabel: "Gerenciar todos os cursos", icon: Layers, iconColor: "text-amber-400", href: "/admin/cursos", group: "Navegação" },
  { id: "usuarios", label: "Usuários", sublabel: "Gerenciar alunos", icon: Users, iconColor: "text-emerald-500", href: "/admin/usuarios", group: "Navegação" },
  { id: "certificados", label: "Certificados", sublabel: "Ver todos os certificados", icon: Award, iconColor: "text-amber-500", href: "/admin/certificados", group: "Navegação" },
  { id: "relatorios", label: "Relatórios", sublabel: "Analytics e dados", icon: FileText, iconColor: "text-red-500", href: "/admin/relatorios", group: "Navegação" },
  { id: "configuracoes", label: "Configurações", sublabel: "Configurações da plataforma", icon: Settings, iconColor: "text-muted-light", href: "/admin/configuracoes", group: "Navegação" },
  // Ações rápidas
  { id: "novo-curso", label: "Criar Novo Curso", sublabel: "Abre o wizard de criação", icon: Plus, iconColor: "text-amber-400", href: "/admin/cursos/novo", group: "Ações Rápidas" },
];

interface CommandPaletteProps {
  courses?: { id: string; titulo: string; nivel: string; ativo: boolean }[];
}

export function CommandPalette({ courses = [] }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Cmd+K / Ctrl+K listener
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Reset state on open
  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Build course commands
  const courseCommands: CommandItem[] = courses.map((c) => ({
    id: `course-${c.id}`,
    label: c.titulo,
    sublabel: `${c.nivel} · ${c.ativo ? "Publicado" : "Rascunho"}`,
    icon: Layers,
    iconColor: "text-amber-400",
    href: `/admin/cursos/${c.id}`,
    group: "Cursos",
  }));

  const allCommands = [...STATIC_COMMANDS, ...courseCommands];

  // Filter
  const filtered = query.trim()
    ? allCommands.filter(
        (c) =>
          c.label.toLowerCase().includes(query.toLowerCase()) ||
          c.sublabel?.toLowerCase().includes(query.toLowerCase())
      )
    : allCommands;

  // Group
  const grouped = filtered.reduce<Record<string, CommandItem[]>>((acc, item) => {
    if (!acc[item.group]) acc[item.group] = [];
    acc[item.group].push(item);
    return acc;
  }, {});

  const flatFiltered = filtered;

  const navigate = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router]
  );

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, flatFiltered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = flatFiltered[activeIndex];
      if (item) navigate(item.href);
    }
  };

  let globalIdx = 0;

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 h-8 px-3 rounded-lg border border-border bg-surface text-sm text-muted-light hover:border-amber-500/30 hover:text-muted transition-colors"
        title="Busca rápida (Ctrl+K)"
      >
        <Search size={13} />
        <span>Buscar...</span>
        <div className="ml-2 flex items-center gap-0.5 text-[10px] text-muted-light font-mono">
          <Command size={10} />
          <span>K</span>
        </div>
      </button>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm animate-in fade-in-0" />
          <Dialog.Content
            className="fixed left-1/2 top-[15%] z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 rounded-2xl bg-surface shadow-2xl ring-1 ring-border overflow-hidden animate-in fade-in-0 zoom-in-95"
            onKeyDown={handleKeyDown}
          >
            <Dialog.Title className="sr-only">Command Palette</Dialog.Title>

            {/* Search input */}
            <div className="flex items-center gap-3 border-b border-border/50 px-4 py-3">
              <Search size={16} className="text-muted-light shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => { setQuery(e.target.value); setActiveIndex(0); }}
                placeholder="Buscar páginas, cursos, ações..."
                className="flex-1 text-sm text-foreground placeholder:text-muted-light bg-transparent focus:outline-none"
              />
              <kbd className="text-[10px] text-muted-light font-mono border border-border rounded px-1.5 py-0.5">ESC</kbd>
            </div>

            {/* Results */}
            <div className="max-h-80 overflow-y-auto py-2">
              {filtered.length === 0 ? (
                <div className="py-8 text-center text-sm text-muted-light">
                  Nenhum resultado para "<span className="text-muted">{query}</span>"
                </div>
              ) : (
                Object.entries(grouped).map(([group, items]) => (
                  <div key={group}>
                    <p className="px-4 py-1.5 text-[10px] font-semibold text-muted-light uppercase tracking-wide">
                      {group}
                    </p>
                    {items.map((item) => {
                      const Icon = item.icon;
                      const isActive = flatFiltered[activeIndex]?.id === item.id;
                      globalIdx++;
                      return (
                        <button
                          key={item.id}
                          className={cn(
                            "w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors",
                            isActive ? "bg-amber-500/10" : "hover:bg-surface-3"
                          )}
                          onClick={() => navigate(item.href)}
                          onMouseEnter={() => setActiveIndex(flatFiltered.findIndex((f) => f.id === item.id))}
                        >
                          <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg bg-surface-3 shrink-0", isActive && "bg-amber-500/15")}>
                            <Icon size={15} className={item.iconColor ?? "text-muted-light"} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">{item.label}</p>
                            {item.sublabel && <p className="text-xs text-muted-light truncate">{item.sublabel}</p>}
                          </div>
                          {isActive && <ArrowRight size={13} className="text-amber-400 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                ))
              )}
            </div>

            {/* Footer hint */}
            <div className="border-t border-border/50 px-4 py-2 flex items-center gap-4 text-[10px] text-muted-light">
              <span><kbd className="font-mono border border-border rounded px-1">↑↓</kbd> navegar</span>
              <span><kbd className="font-mono border border-border rounded px-1">Enter</kbd> abrir</span>
              <span><kbd className="font-mono border border-border rounded px-1">Esc</kbd> fechar</span>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
