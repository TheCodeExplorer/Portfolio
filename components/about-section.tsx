"use client";

import React from "react";
import { portfolioData } from "@/lib/data";
import { MotionSection, MotionItem } from "@/components/motion-wrapper";
import { SpotlightCard } from "@/components/spotlight-card";

export function AboutSection() {
  const { about, personal } = portfolioData;

  return (
    <MotionSection
      id="about"
      aria-labelledby="about-heading"
      className="py-16 md:py-24 max-w-content mx-auto px-6 md:px-8 border-t border-border"
    >
      {/* Section label */}
      <MotionItem className="mb-8">
        <span id="about-heading" className="section-label">
          01 / About
        </span>
      </MotionItem>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
        {/* Left Column: Avatar + Bio */}
        <div className="md:col-span-6 flex flex-col gap-6">
          <MotionItem>
            {/* 96px rounded-square avatar placeholder */}
            <div className="w-24 h-24 rounded-[14px] bg-accent-soft border border-border flex items-center justify-center select-none">
              <span className="font-semibold text-2xl tracking-wider text-accent">
                {personal.initials}
              </span>
            </div>
          </MotionItem>

          <MotionItem>
            <p className="text-[17px] leading-body text-text-2">
              {about.bio}
            </p>
          </MotionItem>
        </div>

        {/* Right Column: Compact Education List */}
        <div className="md:col-span-6">
          <MotionItem className="space-y-4">
            {about.education.map((edu, idx) => (
              <SpotlightCard key={idx} className="p-5">
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-[16px] font-semibold text-text">
                      {edu.degree}
                    </h3>
                    {edu.period && (
                      <span className="font-mono text-[12px] text-muted">
                        {edu.period}
                      </span>
                    )}
                  </div>
                  <p className="text-[14px] text-text-2">{edu.institution}</p>
                  {edu.grade && (
                    <div className="pt-1">
                      <span className="font-mono text-[12px] text-accent font-medium">
                        {edu.grade}
                      </span>
                    </div>
                  )}
                </div>
              </SpotlightCard>
            ))}
          </MotionItem>
        </div>
      </div>
    </MotionSection>
  );
}
