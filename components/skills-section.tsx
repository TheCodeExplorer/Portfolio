"use client";

import React from "react";
import { portfolioData } from "@/lib/data";
import { MotionSection, MotionItem } from "@/components/motion-wrapper";
import { SpotlightCard } from "@/components/spotlight-card";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <MotionSection
      id="skills"
      aria-labelledby="skills-heading"
      className="py-16 md:py-24 max-w-content mx-auto px-6 md:px-8 border-t border-border"
    >
      <MotionItem className="mb-8">
        <span id="skills-heading" className="section-label">
          03 / Skills
        </span>
      </MotionItem>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, idx) => (
          <MotionItem key={idx} className="h-full">
            <SpotlightCard className="h-full flex flex-col justify-start">
              {/* Mono Label */}
              <h3 className="font-mono text-[13px] uppercase tracking-wider text-muted font-medium mb-4">
                {group.title}
              </h3>

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <Badge key={sIdx} className="text-[13px]">
                    {skill}
                  </Badge>
                ))}
              </div>
            </SpotlightCard>
          </MotionItem>
        ))}
      </div>
    </MotionSection>
  );
}
