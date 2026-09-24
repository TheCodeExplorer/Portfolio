import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "status" | "progress" | "outline";
}

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variantStyles = {
    default:
      "chip-mono bg-surface text-text-2 border-border hover:border-accent-border hover:bg-surface-2 hover:text-text",
    status:
      "font-mono text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-[4px] bg-accent-soft text-accent border border-accent-border",
    progress:
      "font-mono text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-[4px] bg-progress-soft text-progress border border-progress/20",
    outline:
      "chip-mono bg-transparent text-text-muted border-border",
  }[variant];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 transition-colors duration-150 select-none",
        variantStyles,
        className
      )}
      {...props}
    />
  );
}

export { Badge };
