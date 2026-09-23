"use client";

import React from "react";
import { Briefcase } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { MotionSection, MotionItem } from "@/components/motion-wrapper";

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <MotionSection
      id="experience"
      aria-labelledby="experience-heading"
      className="py-16 md:py-24 max-w-content mx-auto px-6 md:px-8 border-t border-border"
    >
      <MotionItem className="mb-4">
        <span id="experience-heading" className="section-label">
          04 / Experience
        </span>
      </MotionItem>

      <MotionItem className="mb-10">
        <div className="flex items-center gap-2.5">
          <Briefcase className="w-5 h-5 text-accent" />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text">
            Practical Experience & Internships
          </h2>
        </div>
        <p className="text-[15px] text-text-2 mt-1">
          Technical internship programs, collaborative projects, and structured industry training.
        </p>
      </MotionItem>

      {/* Minimal Vertical Timeline */}
      <div className="relative border-l border-border ml-3 md:ml-36 space-y-10">
        {experience.map((item, idx) => (
          <MotionItem key={idx} className="relative pl-6 md:pl-8 group">
            {/* Small accent dot on the line */}
            <div
              className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-bg transition-transform duration-150 group-hover:scale-125"
              aria-hidden="true"
            />

            {/* Mono Date on the left for desktop */}
            {item.period && (
              <span className="md:absolute md:-left-36 md:w-28 md:text-right font-mono text-[13px] text-muted block mb-1 md:mb-0">
                {item.period}
              </span>
            )}

            {/* Role, Company, and Description */}
            <div className="flex flex-col gap-1.5">
              <h3 className="text-[17px] font-semibold text-text group-hover:text-accent transition-colors">
                {item.role}
              </h3>
              <p className="font-mono text-[13px] text-accent font-medium">
                {item.company}
              </p>
              {item.description && (
                <p className="text-[15px] leading-relaxed text-text-2 pt-1 max-w-2xl">
                  {item.description}
                </p>
              )}
            </div>
          </MotionItem>
        ))}
      </div>
    </MotionSection>
  );
}
