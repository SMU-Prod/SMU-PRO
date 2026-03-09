import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMinutes(minutes: number): string {
  if (minutes < 60) return `${minutes}min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}min` : `${h}h`;
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function slugify(text: string): string {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

export function getLevelColor(level: string) {
  const map: Record<string, string> = {
    trainee: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    junior: "bg-green-500/20 text-green-400 border-green-500/30",
    pleno: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    projeto_cultural: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    admin: "bg-red-500/20 text-red-400 border-red-500/30",
  };
  return map[level] ?? "bg-gray-500/20 text-gray-400 border-gray-500/30";
}

export function getLevelLabel(level: string) {
  const map: Record<string, string> = {
    trainee: "Trainee",
    junior: "Junior",
    pleno: "Pleno",
    projeto_cultural: "MIT",
    admin: "Admin",
    visitor: "Visitante",
  };
  return map[level] ?? level;
}

export function getCategoryLabel(cat: string) {
  const map: Record<string, string> = {
    som: "Sonorização",
    luz: "Iluminação",
    producao: "Produção",
    dj: "DJ",
    vj: "VJ / Vídeo",
    roadie: "Roadie",
    marketing: "Marketing",
    efeitos: "Efeitos Especiais",
    outros: "Outros",
  };
  return map[cat] ?? cat;
}

