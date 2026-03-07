import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default:   "bg-purple-100 border-purple-200 text-purple-700",
        trainee:   "bg-blue-50 border-blue-200 text-blue-700",
        junior:    "bg-emerald-50 border-emerald-200 text-emerald-700",
        pleno:     "bg-purple-50 border-purple-200 text-purple-700",
        mit:       "bg-amber-50 border-amber-200 text-amber-700",
        admin:     "bg-red-50 border-red-200 text-red-700",
        free:      "bg-emerald-50 border-emerald-200 text-emerald-700",
        pago:      "bg-purple-50 border-purple-200 text-purple-700",
        secondary: "bg-gray-100 border-gray-200 text-gray-600",
        success:   "bg-emerald-50 border-emerald-200 text-emerald-700",
        warning:   "bg-amber-50 border-amber-200 text-amber-700",
        danger:    "bg-red-50 border-red-200 text-red-700",
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
