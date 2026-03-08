"use client";

import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useSidebar } from "./sidebar-context";
import type { UserRole } from "@/types/database";

interface HeaderProps {
  title: string;
  subtitle?: string;
  role?: UserRole;
  className?: string;
  actions?: React.ReactNode;
}

export function Header({ title, subtitle, role, className, actions }: HeaderProps) {
  const { toggle } = useSidebar();

  return (
    <header
      className={cn(
        "sticky top-0 z-30 flex items-center gap-3 border-b border-zinc-800 bg-[#0A0A0B]/90 backdrop-blur-md px-4 sm:px-6 h-14 sm:h-16",
        className
      )}
    >
      {/* Hamburger — mobile only */}
      <button
        onClick={toggle}
        className="lg:hidden p-2 -ml-1 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
        aria-label="Abrir menu"
      >
        <Menu size={20} />
      </button>

      {/* Title */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h1 className="text-base sm:text-lg font-semibold text-zinc-100 truncate">{title}</h1>
          {role && (
            <Badge
              variant={
                role === "admin" ? "admin" :
                role === "projeto_cultural" ? "mit" :
                role === "pleno" ? "pleno" :
                role === "junior" ? "junior" : "trainee"
              }
              className="hidden sm:inline-flex"
            >
              {role === "projeto_cultural" ? "MIT" :
               role.charAt(0).toUpperCase() + role.slice(1)}
            </Badge>
          )}
        </div>
        {subtitle && <p className="text-xs text-zinc-500 mt-0.5 hidden sm:block">{subtitle}</p>}
      </div>

      {/* Actions */}
      {actions}

      {/* Notifications */}
      <Button variant="ghost" size="icon" className="relative shrink-0">
        <Bell size={18} />
        <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-amber-500" />
      </Button>
    </header>
  );
}
