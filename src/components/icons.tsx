import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Bot,
  Calendar,
  Check,
  Download,
  FileText,
  Github,
  Globe,
  Headphones,
  Instagram,
  LayoutDashboard,
  Linkedin,
  Link2,
  Mail,
  Menu,
  MessageCircle,
  Monitor,
  Moon,
  Play,
  RefreshCw,
  Rocket,
  Settings2,
  Sparkles,
  Star,
  Sun,
  Trash2,
  Wrench,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const icons = {
  arrow: ArrowRight,
  up: ArrowUp,
  external: ArrowUpRight,
  bot: Bot,
  calendar: Calendar,
  check: Check,
  download: Download,
  file: FileText,
  github: Github,
  globe: Globe,
  headset: Headphones,
  instagram: Instagram,
  dashboard: LayoutDashboard,
  linkedin: Linkedin,
  link: Link2,
  mail: Mail,
  menu: Menu,
  chat: MessageCircle,
  monitor: Monitor,
  moon: Moon,
  play: Play,
  refresh: RefreshCw,
  rocket: Rocket,
  cog: Settings2,
  spark: Sparkles,
  star: Star,
  sun: Sun,
  trash: Trash2,
  wrench: Wrench,
  close: X,
  zap: Zap,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

export function Icon({
  name,
  className,
  strokeWidth = 2,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const Comp = icons[name];
  return <Comp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
