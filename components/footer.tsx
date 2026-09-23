"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { portfolioData } from "@/lib/data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-6 bg-transparent">
      <div className="max-w-content mx-auto px-6 md:px-8 flex items-center justify-between text-[13px] text-muted font-mono">
        <span>{portfolioData.personal.name}</span>
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1 text-muted hover:text-accent cursor-pointer transition-colors"
          aria-label="Scroll to top"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
