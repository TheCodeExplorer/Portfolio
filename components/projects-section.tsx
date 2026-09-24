"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  ExternalLink,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import { portfolioData } from "@/lib/data";
import { MotionSection, MotionItem } from "@/components/motion-wrapper";
import { SpotlightCard } from "@/components/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const { projects, personal } = portfolioData;

  // Active tab state for each project: "features" | "tech"
  const [activeTabs, setActiveTabs] = useState<Record<string, "features" | "tech">>(
    projects.reduce((acc, p) => ({ ...acc, [p.id]: "features" }), {})
  );

  const toggleTab = (projectId: string, tab: "features" | "tech") => {
    setActiveTabs((prev) => ({ ...prev, [projectId]: tab }));
  };

  return (
    <MotionSection
      id="projects"
      aria-labelledby="projects-heading"
      className="py-16 md:py-24 max-w-content mx-auto px-6 md:px-8 border-t border-border"
    >
      {/* Section Header */}
      <MotionItem className="mb-3">
        <span id="projects-heading" className="section-label">
          02 / Projects
        </span>
      </MotionItem>

      <MotionItem className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="headline-section">
            Featured Projects & Systems
          </h2>
          <p className="body-regular text-text-2 mt-1 max-w-xl">
            Applications, embedded hardware prototypes, and automated systems built end-to-end.
          </p>
        </div>
      </MotionItem>

      {/* Grid: 2 columns on desktop for technical inspection cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {projects.map((project) => {
          const currentTab = activeTabs[project.id] || "features";
          const hasGithub = Boolean(project.githubUrl);
          const hasLive = Boolean(project.liveUrl);

          return (
            <MotionItem key={project.id} className="flex flex-col h-full">
              <SpotlightCard
                className="h-full flex flex-col justify-between p-6 md:p-7 group"
              >
                <div>
                  {/* Card Header: Title & Status Badge */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="headline-card text-text group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      {project.statusTag && (
                        <Badge
                          variant={
                            project.statusTag.toLowerCase().includes("progress")
                              ? "progress"
                              : "status"
                          }
                        >
                          {project.statusTag}
                        </Badge>
                      )}
                    </div>

                    {/* Quick icon links */}
                    <div className="flex items-center gap-2 text-text-muted">
                      {hasGithub && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub repository`}
                          className="p-1.5 rounded-[4px] text-text-muted hover:text-text hover:bg-surface-elevated transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {hasLive && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} Live URL`}
                          className="p-1.5 rounded-[4px] text-text-muted hover:text-text hover:bg-surface-elevated transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* One-Line Purpose Callout */}
                  <div className="mb-4 pl-3 py-1.5 border-l-2 border-primary bg-surface-elevated/60 rounded-r-[2px]">
                    <span className="metadata-micro uppercase tracking-[0.03em] block mb-0.5 text-text-muted">
                      Problem & Purpose
                    </span>
                    <p className="body-regular text-[0.875rem] font-medium text-text leading-snug">
                      {project.purpose}
                    </p>
                  </div>

                  {/* Description Paragraph */}
                  <p className="body-regular text-text-2 mb-6">
                    {project.overview}
                  </p>

                  {/* Interactive Technical Inspector Segmented Control */}
                  <div className="border border-border rounded-[4px] p-0.5 bg-surface-elevated/80 mb-4 flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => toggleTab(project.id, "features")}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-[3px] text-[0.8125rem] font-medium cursor-pointer transition-colors duration-150 ${
                        currentTab === "features"
                          ? "bg-surface text-text border border-border"
                          : "text-text-muted hover:text-text"
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                      <span>Key Features</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleTab(project.id, "tech")}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-[3px] text-[0.8125rem] font-medium cursor-pointer transition-colors duration-150 ${
                        currentTab === "tech"
                          ? "bg-surface text-text border border-border"
                          : "text-text-muted hover:text-text"
                      }`}
                    >
                      <Cpu className="w-3.5 h-3.5 text-accent" />
                      <span>Technical Specs</span>
                    </button>
                  </div>

                  {/* Tab Content Display */}
                  <div className="min-h-[140px] mb-6">
                    {currentTab === "features" ? (
                      <ul className="space-y-2 text-[0.875rem] text-text-2">
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="space-y-2 label-code bg-surface/60 border border-border rounded-[4px] p-3.5">
                        {project.technicalImplementation.framework && (
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border/50 pb-1.5">
                            <span className="text-text-muted">Framework/Lang:</span>
                            <span className="text-text font-medium">
                              {project.technicalImplementation.framework}
                            </span>
                          </div>
                        )}
                        {project.technicalImplementation.database && (
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border/50 pb-1.5">
                            <span className="text-text-muted">Database & ORM:</span>
                            <span className="text-text font-medium">
                              {project.technicalImplementation.database}
                            </span>
                          </div>
                        )}
                        {project.technicalImplementation.auth && (
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border/50 pb-1.5">
                            <span className="text-text-muted">Auth System:</span>
                            <span className="text-text font-medium">
                              {project.technicalImplementation.auth}
                            </span>
                          </div>
                        )}
                        {project.technicalImplementation.state && (
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border/50 pb-1.5">
                            <span className="text-text-muted">State Mgmt:</span>
                            <span className="text-text font-medium">
                              {project.technicalImplementation.state}
                            </span>
                          </div>
                        )}
                        {project.technicalImplementation.hardware && (
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border/50 pb-1.5">
                            <span className="text-text-muted">Hardware / Sensors:</span>
                            <span className="text-text font-medium text-right">
                              {project.technicalImplementation.hardware}
                            </span>
                          </div>
                        )}
                        {project.technicalImplementation.architecture && (
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border/50 pb-1.5">
                            <span className="text-text-muted">Architecture:</span>
                            <span className="text-text font-medium">
                              {project.technicalImplementation.architecture}
                            </span>
                          </div>
                        )}
                        {project.technicalImplementation.deployment && (
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                            <span className="text-text-muted">Deployment:</span>
                            <span className="text-text font-medium">
                              {project.technicalImplementation.deployment}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Technical Chips & Action Buttons */}
                <div className="mt-auto pt-4 border-t border-border flex flex-col gap-4">
                  {project.chips && project.chips.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.chips.map((chip, idx) => (
                        <Badge key={idx} hasDot={true}>
                          {chip}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-3 pt-1">
                    {hasGithub && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5"
                        >
                          <Github className="w-3.5 h-3.5 text-text-muted group-hover:text-text" />
                          <span>View Code</span>
                          <ArrowUpRight className="w-3 h-3 text-text-muted" />
                        </a>
                      </Button>
                    )}
                    {hasLive && (
                      <Button size="sm" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </MotionItem>
          );
        })}
      </div>

      {/* GitHub all repos link */}
      <MotionItem className="mt-10 pt-4">
        <a
          href={personal.allReposUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[0.9375rem] font-medium text-text-2 hover:text-accent transition-colors group"
        >
          <span>Explore all projects & repositories on GitHub</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
        </a>
      </MotionItem>
    </MotionSection>
  );
}
