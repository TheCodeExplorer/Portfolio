import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "status" | "progress" | "primary";
  hasDot?: boolean;
}

function Badge({
  className,
  variant = "default",
  hasDot = false,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-surface-elevated text-text-2 border border-border hover:border-border-interactive hover:text-text rounded-[4px] px-2.5 py-1 text-[0.8125rem] font-medium leading-[1.35] tracking-[0.02em]",
    primary:
      "bg-surface-elevated text-text border border-border hover:border-border-interactive rounded-[4px] px-2.5 py-1 text-[0.8125rem] font-medium leading-[1.35] tracking-[0.02em]",
    status:
      "font-mono text-[0.75rem] font-medium tracking-[0.03em] uppercase px-2.5 py-0.5 rounded-[4px] bg-accent-soft text-accent border border-accent-border",
    progress:
      "font-mono text-[0.75rem] font-medium tracking-[0.03em] uppercase px-2.5 py-0.5 rounded-[4px] bg-progress-soft text-progress border border-progress/20",
  }[variant];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 transition-colors duration-150 select-none",
        variantStyles,
        className
      )}
      {...props}
    >
      {hasDot && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 inline-block"
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </div>
  );
}

export { Badge };
