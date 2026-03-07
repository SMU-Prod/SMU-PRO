"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useSidebar } from "./sidebar-context";
import type { UserRole } from "@/types/database";
import {
  LayoutDashboard,
  BookOpen,
  Award,
  TrendingUp,
  Settings,
  ShieldCheck,
  Users,
  BarChart3,
  FileText,
  Layers,
  X,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
}

const studentNav: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Meus Cursos", href: "/dashboard/cursos", icon: BookOpen },
  { label: "Trilha de Aprendizado", href: "/dashboard/trilha", icon: TrendingUp },
  { label: "Certificados", href: "/dashboard/certificados", icon: Award },
  { label: "Configurações", href: "/dashboard/configuracoes", icon: Settings },
];

const adminNav: NavItem[] = [
  { label: "Visão Geral", href: "/admin", icon: BarChart3 },
  { label: "Cursos", href: "/admin/cursos", icon: Layers },
  { label: "Trilhas", href: "/admin/trilhas", icon: TrendingUp },
  { label: "Usuários", href: "/admin/usuarios", icon: Users },
  { label: "Certificados", href: "/admin/certificados", icon: Award },
  { label: "Relatórios", href: "/admin/relatorios", icon: FileText },
  { label: "Configurações", href: "/admin/configuracoes", icon: Settings },
];

const contentManagerNav: NavItem[] = [
  { label: "Cursos", href: "/admin/cursos", icon: Layers },
  { label: "Trilhas", href: "/admin/trilhas", icon: TrendingUp },
];

interface SidebarProps {
  role?: UserRole;
}

export function Sidebar({ role = "trainee" }: SidebarProps) {
  const pathname = usePathname();
  const { user } = useUser();
  const { open, close } = useSidebar();

  const isAdmin = role === "admin";
  const isContentManager = role === "content_manager";
  const navItems = isAdmin ? adminNav : isContentManager ? contentManagerNav : studentNav;

  const SidebarContent = () => (
    <aside className="flex h-full flex-col bg-white">
      {/* Logo */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#6C3CE1] to-[#8B5CF6] shadow-md">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <div>
            <p className="font-bold text-gray-900 leading-none">SMU PRO</p>
            <p className="text-[10px] text-gray-400 mt-0.5">
              {isAdmin ? "Painel Admin" : isContentManager ? "Gestão de Conteúdo" : "Plataforma de Cursos"}
            </p>
          </div>
        </div>
        {/* Close button — mobile only */}
        <button
          onClick={close}
          className="lg:hidden p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      {/* Admin toggle */}
      {(role === "admin" || role === "content_manager") && (
        <div className="mx-3 mt-3">
          <div className="flex rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
            <Link
              href="/dashboard"
              onClick={close}
              className="flex-1 text-center py-1.5 text-xs text-gray-500 hover:bg-gray-100 transition-colors"
            >
              Aluno
            </Link>
            <div className="flex-1 text-center py-1.5 text-xs bg-[#6C3CE1] text-white font-semibold rounded-md mx-0.5">
              Admin
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active =
            (item.href === "/dashboard" && pathname === "/dashboard") ||
            (item.href === "/admin" && pathname === "/admin") ||
            (item.href !== "/dashboard" &&
              item.href !== "/admin" &&
              pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-150 group",
                active
                  ? "bg-purple-50 text-[#6C3CE1] font-medium"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              )}
            >
              <Icon
                size={18}
                className={cn(
                  "shrink-0",
                  active ? "text-[#6C3CE1]" : "text-gray-400 group-hover:text-gray-600"
                )}
              />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <Badge variant="default" className="text-[10px] px-1.5 py-0">
                  {item.badge}
                </Badge>
              )}
            </Link>
          );
        })}

        {/* Admin link for student view when user is admin */}
        {role === "admin" && !isAdmin && (
          <Link
            href="/admin"
            onClick={close}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all mt-2"
          >
            <ShieldCheck size={18} className="text-red-500" />
            <span>Painel Admin</span>
          </Link>
        )}
      </nav>

      {/* User */}
      <div className="border-t border-gray-200 p-4 flex items-center gap-3">
        <UserButton
          appearance={{
            elements: { avatarBox: "h-8 w-8" },
          }}
        />
        {user && (
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{user.fullName}</p>
            <p className="text-xs text-gray-400 truncate">
              {user.primaryEmailAddress?.emailAddress}
            </p>
          </div>
        )}
      </div>
    </aside>
  );

  return (
    <>
      {/* Desktop sidebar — always visible ≥ lg */}
      <div className="hidden lg:flex fixed left-0 top-0 z-40 h-screen w-64 flex-col border-r border-gray-200">
        <SidebarContent />
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          onClick={close}
          aria-hidden="true"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          {/* Drawer */}
          <div
            className="absolute left-0 top-0 h-full w-72 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  );
}
