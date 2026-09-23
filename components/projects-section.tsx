"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  ExternalLink,
  Layers,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import { portfolioData, type Project } from "@/lib/data";
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
      <MotionItem className="mb-4">
        <span id="projects-heading" className="section-label">
          02 / Projects
        </span>
      </MotionItem>

      <MotionItem className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-text">
            Featured Projects & Systems
          </h2>
          <p className="text-[15px] md:text-[16px] text-text-2 mt-1 max-w-xl">
            Applications, embedded hardware prototypes, and automated systems built end-to-end.
          </p>
        </div>
      </MotionItem>

      {/* Grid: 2 columns on desktop for deep technical inspection cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                      <h3 className="text-xl md:text-2xl font-semibold text-text group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      {project.statusTag && (
                        <Badge variant="status">{project.statusTag}</Badge>
                      )}
                    </div>

                    {/* Quick icon links */}
                    <div className="flex items-center gap-2 text-muted">
                      {hasGithub && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub repository`}
                          className="p-1.5 rounded-btn text-muted hover:text-accent hover:bg-accent-soft transition-colors"
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
                          className="p-1.5 rounded-btn text-muted hover:text-accent hover:bg-accent-soft transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* One-Line Purpose Callout */}
                  <div className="mb-4 pl-3 py-1 border-l-2 border-accent/40 bg-accent-soft/40 rounded-r-md">
                    <p className="text-[13px] md:text-[14px] font-medium text-text leading-snug">
                      <span className="font-mono text-muted text-[11px] uppercase tracking-wider block mb-0.5">
                        Problem & Purpose
                      </span>
                      {project.purpose}
                    </p>
                  </div>

                  {/* Overview Paragraph */}
                  <p className="text-[15px] leading-relaxed text-text-2 mb-6">
                    {project.overview}
                  </p>

                  {/* Interactive Cursor-Style Inspector Segmented Control */}
                  <div className="border border-border/80 rounded-btn p-1 bg-bg/50 mb-4 flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => toggleTab(project.id, "features")}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-[8px] text-[13px] font-medium cursor-pointer transition-all duration-150 ${
                        currentTab === "features"
                          ? "bg-surface text-text shadow-sm border border-border"
                          : "text-muted hover:text-text"
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                      <span>Key Features</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleTab(project.id, "tech")}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-[8px] text-[13px] font-medium cursor-pointer transition-all duration-150 ${
                        currentTab === "tech"
                          ? "bg-surface text-text shadow-sm border border-border"
                          : "text-muted hover:text-text"
                      }`}
                    >
                      <Cpu className="w-3.5 h-3.5 text-accent" />
                      <span>Technical Specs</span>
                    </button>
                  </div>

                  {/* Tab Content Display */}
                  <div className="min-h-[140px] mb-6">
                    {currentTab === "features" ? (
                      <ul className="space-y-2 text-[14px] text-text-2">
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="space-y-2 font-mono text-[12px] bg-surface/60 border border-border/60 rounded-btn p-3.5">
                        {project.technicalImplementation.framework && (
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border/40 pb-1.5">
                            <span className="text-muted">Framework/Lang:</span>
                            <span className="text-text font-medium">
                              {project.technicalImplementation.framework}
                            </span>
                          </div>
                        )}
                        {project.technicalImplementation.database && (
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border/40 pb-1.5">
                            <span className="text-muted">Database & ORM:</span>
                            <span className="text-text font-medium">
                              {project.technicalImplementation.database}
                            </span>
                          </div>
                        )}
                        {project.technicalImplementation.auth && (
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border/40 pb-1.5">
                            <span className="text-muted">Auth System:</span>
                            <span className="text-text font-medium">
                              {project.technicalImplementation.auth}
                            </span>
                          </div>
                        )}
                        {project.technicalImplementation.state && (
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border/40 pb-1.5">
                            <span className="text-muted">State Mgmt:</span>
                            <span className="text-text font-medium">
                              {project.technicalImplementation.state}
                            </span>
                          </div>
                        )}
                        {project.technicalImplementation.hardware && (
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border/40 pb-1.5">
                            <span className="text-muted">Hardware / Sensors:</span>
                            <span className="text-text font-medium text-right">
                              {project.technicalImplementation.hardware}
                            </span>
                          </div>
                        )}
                        {project.technicalImplementation.architecture && (
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border/40 pb-1.5">
                            <span className="text-muted">Architecture:</span>
                            <span className="text-text font-medium">
                              {project.technicalImplementation.architecture}
                            </span>
                          </div>
                        )}
                        {project.technicalImplementation.deployment && (
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                            <span className="text-muted">Deployment:</span>
                            <span className="text-text font-medium">
                              {project.technicalImplementation.deployment}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Tech Chips & Action Buttons */}
                <div className="mt-auto pt-4 border-t border-border/80 flex flex-col gap-4">
                  {project.chips && project.chips.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.chips.map((chip, idx) => (
                        <Badge key={idx}>{chip}</Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-3 pt-1">
                    {hasGithub && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="text-[13px]"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5"
                        >
                          <Github className="w-3.5 h-3.5 text-muted group-hover:text-accent" />
                          <span>View Code</span>
                          <ArrowUpRight className="w-3 h-3 text-muted" />
                        </a>
                      </Button>
                    )}
                    {hasLive && (
                      <Button size="sm" asChild className="text-[13px]">
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
          className="inline-flex items-center gap-2 text-[15px] font-medium text-text-2 hover:text-accent transition-colors group"
        >
          <span>Explore all projects & repositories on GitHub</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
        </a>
      </MotionItem>
    </MotionSection>
  );
}
