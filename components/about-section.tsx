"use client";

import React from "react";
import { GraduationCap } from "lucide-react";
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
      {/* Name Displayed First */}
      <MotionItem className="mb-10">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-text">
            {about.name}
          </h2>
          <span id="about-heading" className="section-label">
            01 / About
          </span>
        </div>
      </MotionItem>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Avatar + Story */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <MotionItem className="space-y-4">
            {about.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="text-[16px] md:text-[17px] leading-body text-text-2"
              >
                {para}
              </p>
            ))}
          </MotionItem>
        </div>

        {/* Right Column: Structured Education */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <MotionItem className="mb-2">
            <div className="flex items-center gap-2 text-text font-semibold text-[16px]">
              <GraduationCap className="w-4 h-4 text-accent" />
              <span>Education</span>
            </div>
          </MotionItem>

          <MotionItem className="space-y-3.5">
            {about.education.map((edu, idx) => (
              <SpotlightCard key={idx} className="p-5">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-baseline justify-between gap-2 flex-wrap">
                    <h3 className="text-[15px] font-semibold text-text">
                      {edu.degree}
                    </h3>
                    {edu.period && (
                      <span className="font-mono text-[12px] text-muted">
                        {edu.period}
                      </span>
                    )}
                  </div>
                  <p className="text-[14px] text-text-2">{edu.institution}</p>
                  <div className="flex items-center justify-between gap-2 pt-1 border-t border-border/60 mt-1">
                    {edu.grade && (
                      <span className="font-mono text-[12px] text-accent font-medium">
                        {edu.grade}
                      </span>
                    )}
                  </div>
                  {edu.details && (
                    <p className="text-[12px] text-muted pt-0.5">
                      {edu.details}
                    </p>
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
