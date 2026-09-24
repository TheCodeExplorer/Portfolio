"use client";

import React from "react";
import { ArrowRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { MotionSection, MotionItem } from "@/components/motion-wrapper";

export function HeroSection() {
  const { personal } = portfolioData;

  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Precision grid background with radial mask */}
      <div
        className="grid-bg absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-content mx-auto px-6 md:px-8">
        <MotionSection className="flex flex-col items-start text-left">
          {/* Status pill with subtle cyan accent indicator */}
          <MotionItem>
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-[4px] border border-border bg-surface-elevated text-accent text-[12px] font-mono tracking-wide mb-6 select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span>{personal.statusPill}</span>
            </div>
          </MotionItem>

          {/* Core Display Headline */}
          <MotionItem>
            <h1 className="display-hero max-w-4xl mb-6">
              {personal.headline}
            </h1>
          </MotionItem>

          {/* Subtitle / Bio */}
          <MotionItem>
            <p className="body-large max-w-[660px] mb-8">
              {personal.heroBio}
            </p>
          </MotionItem>

          {/* CTA Buttons */}
          <MotionItem>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Button asChild className="group">
                <a href="#projects">
                  <span>View projects</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                </a>
              </Button>

              <Button variant="outline" asChild className="group">
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-1.5 text-text-muted group-hover:text-accent transition-colors" />
                  <span>Download resume</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0.5 transition-all duration-150" />
                </a>
              </Button>

              <div className="flex items-center gap-2">
                <Button variant="icon" size="icon" asChild aria-label="GitHub Profile">
                  <a
                    href={personal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-[18px] h-[18px]" />
                  </a>
                </Button>

                <Button variant="icon" size="icon" asChild aria-label="LinkedIn Profile">
                  <a
                    href={personal.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-[18px] h-[18px]" />
                  </a>
                </Button>
              </div>
            </div>
          </MotionItem>

          {/* Location metadata */}
          <MotionItem>
            <div className="flex items-center gap-1.5 metadata-micro">
              <MapPin className="w-3.5 h-3.5 text-text-muted" />
              <span>{personal.location}</span>
            </div>
          </MotionItem>
        </MotionSection>
      </div>
    </div>
  );
}
