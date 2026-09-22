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
      "inline-flex items-center justify-center font-medium transition-colors duration-150 rounded-btn focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none group select-none";

    const sizeStyles = {
      default: "h-[44px] px-5 text-[15px]",
      sm: "h-[36px] px-3 text-[14px]",
      icon: "h-[44px] w-[44px] p-0 flex items-center justify-center",
    }[size];

    const variantStyles = {
      primary:
        "bg-accent text-white dark:text-bg hover:bg-accent-hover active:opacity-90 shadow-none",
      outline:
        "border border-border bg-surface text-text hover:border-accent hover:text-accent active:bg-accent-soft",
      ghost:
        "bg-transparent text-text-2 hover:text-text hover:bg-accent-soft",
      icon:
        "border border-border bg-surface text-text-2 hover:text-accent hover:border-accent active:bg-accent-soft",
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
