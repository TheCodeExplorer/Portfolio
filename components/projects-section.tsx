"use client";

import React from "react";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { portfolioData, type Project } from "@/lib/data";
import { MotionSection, MotionItem } from "@/components/motion-wrapper";
import { SpotlightCard } from "@/components/spotlight-card";
import { Badge } from "@/components/ui/badge";

export function ProjectsSection() {
  const { projects, personal } = portfolioData;

  const getColSpanClass = (desktopCols: number) => {
    switch (desktopCols) {
      case 7:
        return "lg:col-span-7";
      case 5:
        return "lg:col-span-5";
      case 4:
      default:
        return "lg:col-span-4";
    }
  };

  const handleCardClick = (project: Project, e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("a")) return; // let normal link clicks proceed

    const targetUrl = project.liveUrl || project.githubUrl;
    if (targetUrl) {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <MotionSection
      id="projects"
      aria-labelledby="projects-heading"
      className="py-16 md:py-24 max-w-content mx-auto px-6 md:px-8 border-t border-border"
    >
      <MotionItem className="mb-8">
        <span id="projects-heading" className="section-label">
          02 / Projects
        </span>
      </MotionItem>

      {/* Bento Grid: 1 col mobile, 2 cols tablet, 12 cols desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {projects.map((project) => {
          const colSpan = getColSpanClass(project.desktopCols);
          const hasLinks = Boolean(project.githubUrl || project.liveUrl);

          return (
            <MotionItem
              key={project.id}
              className={`${colSpan} flex flex-col h-full`}
            >
              <SpotlightCard
                isProject={true}
                onClick={(e) => handleCardClick(project, e)}
                className={`h-full flex flex-col justify-between group ${
                  hasLinks ? "cursor-pointer" : ""
                }`}
              >
                <div>
                  {/* Top Bar: Title & Status */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-[18px] font-semibold text-text group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      {project.statusTag && (
                        <Badge variant="status">{project.statusTag}</Badge>
                      )}
                    </div>

                    {/* Optional icon links */}
                    {hasLinks && (
                      <div className="flex items-center gap-2 text-muted">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} GitHub repository`}
                            className="p-1 rounded-sm text-muted hover:text-accent transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} Live URL`}
                            className="p-1 rounded-sm text-muted hover:text-accent transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-[15px] leading-relaxed text-text-2 mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Chips */}
                {project.chips && project.chips.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 mt-auto">
                    {project.chips.map((chip, idx) => (
                      <Badge key={idx}>{chip}</Badge>
                    ))}
                  </div>
                )}
              </SpotlightCard>
            </MotionItem>
          );
        })}
      </div>

      {/* GitHub all repos link below grid */}
      <MotionItem className="mt-8 pt-4">
        <a
          href={personal.allReposUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[15px] font-medium text-text-2 hover:text-accent transition-colors group"
        >
          <span>See all repositories on GitHub</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
        </a>
      </MotionItem>
    </MotionSection>
  );
}
