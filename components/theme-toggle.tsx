"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle theme"
        className="w-10 h-10 rounded-btn text-muted"
      >
        <span className="w-5 h-5 block" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="w-10 h-10 rounded-btn text-text-2 hover:text-text"
    >
      {isDark ? (
        <Sun className="h-[18px] w-[18px] transition-transform duration-200 hover:rotate-45" />
      ) : (
        <Moon className="h-[18px] w-[18px] transition-transform duration-200 hover:-rotate-12" />
      )}
    </Button>
  );
}
