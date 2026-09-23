"use client";

import React from "react";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { MotionSection, MotionItem } from "@/components/motion-wrapper";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const { contact, personal } = portfolioData;

  return (
    <MotionSection
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 md:py-24 max-w-content mx-auto px-6 md:px-8 border-t border-border"
    >
      <MotionItem className="mb-6">
        <span id="contact-heading" className="section-label">
          06 / Contact
        </span>
      </MotionItem>

      <div className="max-w-2xl">
        <MotionItem>
          <h2 className="text-2xl md:text-4xl text-text mb-4 font-semibold tracking-tight">
            {contact.heading}
          </h2>
        </MotionItem>

        <MotionItem>
          <p className="text-[16px] md:text-[17px] leading-body text-text-2 mb-8">
            {contact.subheading}
          </p>
        </MotionItem>

        <MotionItem>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild className="group">
              <a href={`mailto:${personal.email}`}>
                <Mail className="w-4 h-4 mr-2" />
                <span>Send Email</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-150 group-hover:translate-x-0.5" />
              </a>
            </Button>

            <Button variant="outline" asChild aria-label="GitHub Profile">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </Button>

            <Button variant="outline" asChild aria-label="LinkedIn Profile">
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </Button>
          </div>
        </MotionItem>
      </div>
    </MotionSection>
  );
}
