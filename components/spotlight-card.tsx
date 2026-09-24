"use client";

import React, { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightCard({
  children,
  className = "",
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: -999,
    y: -999,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setMousePos({ x: -999, y: -999 });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-card bg-surface border border-border p-6",
        "transition-[transform,border-color,box-shadow] duration-200 ease-out",
        "hover:-translate-y-[2px] hover:border-accent-border hover:shadow-[var(--card-shadow-hover)]",
        "motion-reduce:hover:translate-y-0",
        className
      )}
      {...props}
    >
      {/* 240px subtle spotlight at 8% accent */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(240px circle at ${mousePos.x}px ${mousePos.y}px, color-mix(in srgb, var(--accent) 8%, transparent), transparent 80%)`,
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
