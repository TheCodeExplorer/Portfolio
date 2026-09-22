"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { MotionSection, MotionItem } from "@/components/motion-wrapper";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  const { experience, certifications } = portfolioData;

  return (
    <MotionSection
      id="experience"
      aria-labelledby="experience-heading"
      className="py-16 md:py-24 max-w-content mx-auto px-6 md:px-8 border-t border-border"
    >
      <MotionItem className="mb-8">
        <span id="experience-heading" className="section-label">
          04 / Experience
        </span>
      </MotionItem>

      {/* Minimal Vertical Timeline */}
      <div className="relative border-l border-border ml-3 md:ml-36 space-y-10 mb-16">
        {experience.map((item, idx) => (
          <MotionItem key={idx} className="relative pl-6 md:pl-8 group">
            {/* Small accent dot on the 1px line */}
            <div
              className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-bg"
              aria-hidden="true"
            />

            {/* Mono Date on the left (on desktop, absolute or side placement) */}
            {item.period && (
              <span className="md:absolute md:-left-36 md:w-28 md:text-right font-mono text-[13px] text-muted block mb-1 md:mb-0">
                {item.period}
              </span>
            )}

            {/* Role & Company */}
            <div className="flex flex-col gap-1">
              <h3 className="text-[17px] font-semibold text-text">
                {item.role}
              </h3>
              <p className="text-[15px] text-text-2">{item.company}</p>
            </div>
          </MotionItem>
        ))}
      </div>

      {/* Certifications Row */}
      <MotionItem className="pt-6 border-t border-border/60">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="font-mono text-[12px] uppercase tracking-wider text-muted font-medium">
            Certifications:
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {certifications.map((cert, idx) => (
              <div key={idx} className="inline-flex items-center gap-2">
                <Badge className="text-[13px]">{cert.name}</Badge>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 text-[12px] font-mono text-accent hover:underline"
                  >
                    <span>Credential</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </MotionItem>
    </MotionSection>
  );
}
