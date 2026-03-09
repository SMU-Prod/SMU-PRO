"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Bell, Check, CheckCheck, BookOpen, Award, UserPlus, Info, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  getNotifications,
  getUnreadCount,
  markAsRead,
  markAllAsRead,
} from "@/lib/actions/notifications";
import type { Notification, NotificationType } from "@/types/database";

const iconMap: Record<NotificationType, React.ElementType> = {
  course_update: BookOpen,
  certificate: Award,
  enrollment: UserPlus,
  quiz_result: Sparkles,
  system: Info,
  welcome: Sparkles,
};

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "agora";
  if (mins < 60) return `${mins}min`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d`;
  return new Date(dateStr).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
}

export function NotificationDropdown() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Poll unread count every 30s
  const fetchUnread = useCallback(async () => {
    try {
      const count = await getUnreadCount();
      setUnreadCount(count);
    } catch {
      // silent
    }
  }, []);

  useEffect(() => {
    fetchUnread();
    const interval = setInterval(fetchUnread, 30000);
    return () => clearInterval(interval);
  }, [fetchUnread]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  async function handleOpen() {
    setOpen((v) => !v);
    if (!open) {
      setLoading(true);
      try {
        const data = await getNotifications(20);
        setNotifications(data);
      } catch {
        // silent
      } finally {
        setLoading(false);
      }
    }
  }

  async function handleMarkRead(n: Notification) {
    if (n.lida) {
      if (n.link) window.location.href = n.link;
      return;
    }
    await markAsRead(n.id);
    setNotifications((prev) =>
      prev.map((item) => (item.id === n.id ? { ...item, lida: true } : item))
    );
    setUnreadCount((c) => Math.max(0, c - 1));
    if (n.link) window.location.href = n.link;
  }

  async function handleMarkAll() {
    await markAllAsRead();
    setNotifications((prev) => prev.map((n) => ({ ...n, lida: true })));
    setUnreadCount(0);
  }

  return (
    <div className="relative" ref={ref}>
      <Button
        variant="ghost"
        size="icon"
        className="relative shrink-0"
        onClick={handleOpen}
        aria-label="Notificações"
      >
        <Bell size={18} />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-black">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </Button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 rounded-xl border border-border bg-surface shadow-2xl z-50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <h3 className="text-sm font-semibold text-foreground">Notificações</h3>
            {unreadCount > 0 && (
              <button
                onClick={handleMarkAll}
                className="flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 transition-colors"
              >
                <CheckCheck size={14} />
                Marcar todas como lidas
              </button>
            )}
          </div>

          {/* List */}
          <div className="max-h-80 overflow-y-auto">
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="h-5 w-5 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
              </div>
            ) : notifications.length === 0 ? (
              <div className="py-8 text-center">
                <Bell size={24} className="mx-auto text-muted-light mb-2" />
                <p className="text-sm text-muted-light">Nenhuma notificação</p>
              </div>
            ) : (
              notifications.map((n) => {
                const Icon = iconMap[n.tipo] || Info;
                return (
                  <button
                    key={n.id}
                    onClick={() => handleMarkRead(n)}
                    className={cn(
                      "w-full flex items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-hover",
                      !n.lida && "bg-amber-500/5"
                    )}
                  >
                    <div
                      className={cn(
                        "mt-0.5 shrink-0 h-8 w-8 rounded-full flex items-center justify-center",
                        !n.lida ? "bg-amber-500/10 text-amber-400" : "bg-surface-2 text-muted-light"
                      )}
                    >
                      <Icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={cn(
                          "text-sm leading-tight",
                          !n.lida ? "font-medium text-foreground" : "text-muted"
                        )}
                      >
                        {n.titulo}
                      </p>
                      {n.mensagem && (
                        <p className="text-xs text-muted-light mt-0.5 line-clamp-2">{n.mensagem}</p>
                      )}
                      <p className="text-[10px] text-muted-light mt-1">{timeAgo(n.created_at)}</p>
                    </div>
                    {!n.lida && (
                      <div className="mt-2 shrink-0 h-2 w-2 rounded-full bg-amber-500" />
                    )}
                  </button>
                );
              })
            )}
          </div>

          {/* Footer */}
          {notifications.length > 0 && (
            <div className="border-t border-border px-4 py-2">
              <button
                onClick={() => {
                  setOpen(false);
                  window.location.href = "/dashboard/configuracoes";
                }}
                className="w-full text-center text-xs text-muted-light hover:text-foreground transition-colors py-1"
              >
                Gerenciar preferências
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
