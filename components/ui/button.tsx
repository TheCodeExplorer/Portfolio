import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "primary" | "outline" | "ghost" | "icon";
  size?: "default" | "sm" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors duration-150 rounded-[4px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none group select-none";

    const sizeStyles = {
      default: "h-[40px] px-5 text-[0.875rem]",
      sm: "h-[34px] px-3 text-[0.8125rem]",
      icon: "h-[40px] w-[40px] p-0 flex items-center justify-center",
    }[size];

    const variantStyles = {
      primary:
        "bg-primary hover:bg-primary-hover text-[#F8FAFC] font-semibold border border-transparent shadow-none",
      outline:
        "border border-border bg-transparent text-text hover:border-border-interactive hover:bg-surface-elevated font-medium",
      ghost:
        "bg-transparent text-text-2 hover:text-text hover:bg-surface-elevated",
      icon:
        "border border-border bg-surface text-text-2 hover:text-text hover:border-border-interactive hover:bg-surface-elevated",
    }[variant];

    return (
      <Comp
        className={cn(baseStyles, sizeStyles, variantStyles, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
