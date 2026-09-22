"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, FileText, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver for active section tracking
    const sectionIds = portfolioData.navigation.map((item) =>
      item.href.replace("#", "")
    );
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-[64px] z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-content mx-auto h-full px-6 md:px-8 flex items-center justify-between">
        {/* Left: Name */}
        <Link
          href="#"
          className="text-[15px] font-semibold tracking-tight text-text hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent"
        >
          {portfolioData.personal.name}
        </Link>

        {/* Desktop Nav Links */}
        <nav
          className="hidden md:flex items-center gap-7 h-full"
          aria-label="Main Navigation"
        >
          {portfolioData.navigation.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative h-full flex items-center text-[14px] font-medium transition-colors ${
                  isActive
                    ? "text-text"
                    : "text-text-2 hover:text-accent"
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Theme Toggle & Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button variant="outline" size="sm" asChild>
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[13px]"
            >
              <FileText className="w-3.5 h-3.5 text-muted" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open Navigation Menu"
                className="w-10 h-10 text-text"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col justify-between">
              <div>
                <SheetHeader className="text-left mb-6">
                  <SheetTitle className="text-[16px] font-semibold">
                    {portfolioData.personal.name}
                  </SheetTitle>
                </SheetHeader>
                <nav
                  className="flex flex-col gap-4"
                  aria-label="Mobile Navigation"
                >
                  {portfolioData.navigation.map((item) => {
                    const sectionId = item.href.replace("#", "");
                    const isActive = activeSection === sectionId;
                    return (
                      <SheetClose asChild key={item.href}>
                        <a
                          href={item.href}
                          className={`text-base font-medium py-2 border-b border-border/50 flex items-center justify-between ${
                            isActive ? "text-accent" : "text-text-2 hover:text-text"
                          }`}
                          onClick={() => setMobileOpen(false)}
                        >
                          <span>{item.label}</span>
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          )}
                        </a>
                      </SheetClose>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-6 border-t border-border">
                <Button variant="outline" className="w-full justify-center" asChild>
                  <a
                    href={portfolioData.personal.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[13px]"
                    onClick={() => setMobileOpen(false)}
                  >
                    <FileText className="w-4 h-4 text-muted" />
                    <span>Download Resume</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
