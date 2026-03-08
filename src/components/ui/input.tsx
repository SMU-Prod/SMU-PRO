import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-light">
            {icon}
          </span>
        )}
        <input
          type={type}
          ref={ref}
          className={cn(
            "flex h-10 w-full rounded-lg border border-border-strong bg-surface-2 px-3 py-2 text-sm text-foreground",
            "placeholder:text-muted-light",
            "focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-surface-3",
            "transition-colors duration-200",
            icon && "pl-10",
            error && "border-red-800 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-xs text-red-400">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
