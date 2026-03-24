"use client";

import { Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useSidebar } from "./sidebar-context";
import { useTheme } from "@/components/theme-provider";
import { NotificationDropdown } from "./notification-dropdown";
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
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={cn(
        "sticky top-0 z-30 flex items-center gap-3 border-b border-border bg-background/90 backdrop-blur-md px-4 sm:px-6 h-14 sm:h-16",
        className
      )}
    >
      {/* Hamburger — mobile only */}
      <button
        onClick={toggle}
        className="lg:hidden p-2.5 -ml-1 rounded-lg text-muted hover:text-foreground hover:bg-hover transition-colors"
        aria-label="Abrir menu"
      >
        <Menu size={22} />
      </button>

      {/* Title */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h1 className="text-base sm:text-lg font-semibold text-foreground truncate">{title}</h1>
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
        {subtitle && <p className="text-xs text-muted-light mt-0.5 hidden sm:block">{subtitle}</p>}
      </div>

      {/* Actions */}
      {actions}

      {/* Theme toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="shrink-0"
        onClick={toggleTheme}
        title={theme === "dark" ? "Modo claro" : "Modo escuro"}
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </Button>

      {/* Notifications */}
      <NotificationDropdown />
    </header>
  );
}
