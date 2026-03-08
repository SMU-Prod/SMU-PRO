import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default:   "bg-amber-500/15 border-amber-500/25 text-amber-400",
        trainee:   "bg-blue-500/15 border-blue-500/25 text-blue-400",
        junior:    "bg-emerald-500/15 border-emerald-500/25 text-emerald-400",
        pleno:     "bg-purple-500/15 border-purple-500/25 text-purple-400",
        mit:       "bg-amber-500/15 border-amber-500/25 text-amber-400",
        admin:     "bg-red-500/15 border-red-500/25 text-red-400",
        free:      "bg-emerald-500/15 border-emerald-500/25 text-emerald-400",
        pago:      "bg-amber-500/15 border-amber-500/25 text-amber-400",
        secondary: "bg-zinc-800 border-zinc-700 text-zinc-400",
        success:   "bg-emerald-500/15 border-emerald-500/25 text-emerald-400",
        warning:   "bg-amber-500/15 border-amber-500/25 text-amber-400",
        danger:    "bg-red-500/15 border-red-500/25 text-red-400",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
