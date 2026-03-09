import {
  Volume2, Lightbulb, Clapperboard, Disc3, MonitorPlay,
  Wrench, Megaphone, Zap, Music, type LucideIcon,
} from "lucide-react";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  som: Volume2,
  luz: Lightbulb,
  producao: Clapperboard,
  dj: Disc3,
  vj: MonitorPlay,
  roadie: Wrench,
  marketing: Megaphone,
  efeitos: Zap,
  outros: Music,
};

export function CategoryIcon({ category, size = 16, className = "" }: {
  category: string;
  size?: number;
  className?: string;
}) {
  const Icon = CATEGORY_ICONS[category] ?? Music;
  return <Icon size={size} className={className} />;
}
