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
      <MotionItem className="mb-3">
        <span id="skills-heading" className="section-label">
          03 / Skills
        </span>
      </MotionItem>

      <MotionItem className="mb-8">
        <h2 className="headline-section">
          Technologies & Capabilities
        </h2>
        <p className="body-regular text-text-2 mt-1">
          Languages, frameworks, database systems, and embedded tooling applied across projects.
        </p>
      </MotionItem>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((group, idx) => (
          <MotionItem key={idx} className="h-full">
            <SpotlightCard className="h-full flex flex-col justify-start p-5">
              {/* Mono Label */}
              <h3 className="label-code uppercase tracking-[0.03em] text-text-muted font-semibold mb-3 pb-2 border-b border-border">
                {group.title}
              </h3>

              {/* Technical Chips with Leading 6px Dot */}
              <div className="flex flex-wrap gap-2 pt-1">
                {group.skills.map((skill, sIdx) => (
                  <Badge key={sIdx} hasDot={true}>
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
