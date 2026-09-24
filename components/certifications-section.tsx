"use client";

import React from "react";
import { Award, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { MotionSection, MotionItem } from "@/components/motion-wrapper";
import { SpotlightCard } from "@/components/spotlight-card";
import { Badge } from "@/components/ui/badge";

export function CertificationsSection() {
  const { certifications } = portfolioData;

  return (
    <MotionSection
      id="certifications"
      aria-labelledby="certifications-heading"
      className="py-16 md:py-24 max-w-content mx-auto px-6 md:px-8 border-t border-border"
    >
      {/* Section Label */}
      <MotionItem className="mb-3">
        <span id="certifications-heading" className="section-label">
          05 / Certifications
        </span>
      </MotionItem>

      <MotionItem className="mb-10">
        <div className="flex items-center gap-2.5">
          <Award className="w-5 h-5 text-accent" />
          <h2 className="headline-section">
            Certifications & Training
          </h2>
        </div>
        <p className="body-regular text-text-2 mt-1">
          Structured coursework, technical specializations, and foundational credentials.
        </p>
      </MotionItem>

      {/* Structured Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, idx) => (
          <MotionItem key={idx} className="h-full">
            <SpotlightCard className="h-full flex flex-col justify-between p-6 group">
              <div>
                {/* Top: Title & Period */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="headline-card text-text group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  {cert.period && (
                    <span className="metadata-micro shrink-0">
                      {cert.period}
                    </span>
                  )}
                </div>

                {/* Issuing Organization */}
                <p className="label-code text-accent font-medium mb-4">
                  {cert.issuer}
                </p>

                {/* Topics / Skills */}
                {cert.topics && cert.topics.length > 0 && (
                  <div className="mb-6">
                    <span className="metadata-micro uppercase tracking-[0.03em] block mb-2">
                      Topics & Skills Covered:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.topics.map((topic, tIdx) => (
                        <Badge key={tIdx} hasDot={true}>
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom: Credential Action */}
              <div className="pt-4 border-t border-border mt-auto flex items-center justify-between">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[0.8125rem] font-medium text-accent hover:underline group/link"
                  >
                    <span>View Credential</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                ) : (
                  <span className="metadata-micro text-text-muted">
                    Verified Coursework
                  </span>
                )}
              </div>
            </SpotlightCard>
          </MotionItem>
        ))}
      </div>
    </MotionSection>
  );
}
