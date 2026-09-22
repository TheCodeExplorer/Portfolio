"use client";

import React, { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "pointer" | "project";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const [isMouseDown, setIsMouseDown] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Position references for smooth interpolation
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Check for fine pointer and reduced motion preference
    const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const checkEnabled = () => {
      const isFine = finePointerQuery.matches;
      const isReduced = reducedMotionQuery.matches;
      setEnabled(isFine && !isReduced);
    };

    checkEnabled();
    finePointerQuery.addEventListener("change", checkEnabled);
    reducedMotionQuery.addEventListener("change", checkEnabled);

    return () => {
      finePointerQuery.removeEventListener("change", checkEnabled);
      reducedMotionQuery.removeEventListener("change", checkEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Direct update for dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest('[data-cursor="project"]');
      if (projectCard) {
        setMode("project");
        return;
      }

      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]'
      );
      if (interactive) {
        setMode("pointer");
        return;
      }

      setMode("default");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);

    // Smooth lerp loop for the ring
    const render = () => {
      const lerpFactor = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [enabled, isVisible]);

  if (!enabled) return null;

  // Determine ring size & scale styles
  let ringClasses = "border border-accent/50 bg-transparent";
  let ringStyle: React.CSSProperties = {
    width: "36px",
    height: "36px",
  };

  let scale = isMouseDown ? 0.85 : 1;

  if (mode === "pointer") {
    scale = (isMouseDown ? 0.85 : 1) * 1.6;
    ringClasses = "border border-accent/50 bg-accent/10";
  } else if (mode === "project") {
    ringStyle = {
      width: "72px",
      height: "72px",
    };
    scale = isMouseDown ? 0.85 : 1;
    ringClasses = "bg-accent border border-accent text-bg";
  }

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[99999] transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* 8px Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full bg-accent pointer-events-none transition-transform duration-100 ease-out will-change-transform ${
          mode === "project"
            ? "opacity-0 scale-0"
            : mode === "pointer"
            ? "w-1 h-1"
            : "w-2 h-2"
        }`}
      />

      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          ...ringStyle,
          transform: `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${scale})`,
          transition: "width 0.2s cubic-bezier(0.22, 1, 0.36, 1), height 0.2s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.15s ease, border-color 0.15s ease, transform 0.12s ease-out",
        }}
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none will-change-transform ${ringClasses}`}
      >
        {mode === "project" && (
          <span
            className="font-mono text-[11px] font-medium uppercase tracking-wider text-bg select-none"
            style={{ color: "var(--bg)" }}
          >
            View
          </span>
        )}
      </div>
    </div>
  );
}
