"use client";

import React from "react";
import { portfolioData } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 bg-surface/50">
      <div className="max-w-content mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[14px]">
        <span className="text-text-2">
          © {currentYear} {portfolioData.personal.name}
        </span>
        <span className="font-mono text-[12px] text-muted">
          Built with Next.js & Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
