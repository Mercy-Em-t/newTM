import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import type { RouteKey } from '../../../context/NavigationContext';
import type { Project } from '../../../data/projects';
import { useProjects } from '../../../hooks/useContent';
import { GlassCard } from '../../ui/GlassCard';

interface FeaturedArchitecturesSectionProps {
  onNavigate: (route: RouteKey) => void;
  onSelectProject: (project: Project) => void;
}

export const FeaturedArchitecturesSection: React.FC<FeaturedArchitecturesSectionProps> = ({
  onNavigate,
  onSelectProject,
}) => {
  const featuredProjects = useProjects({ featuredOnly: true });

  return (
    <section id="workSection" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t t-border-subtle relative overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto space-y-12 transition-all duration-300">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.24em] t-accent-warm block font-semibold">
              Selected Engagements &amp; Architectural Records
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light t-text-primary">
              Featured <span className="italic t-accent-editorial">Architectures</span>
            </h2>
            <p className="text-sm sm:text-base t-text-secondary leading-relaxed font-light">
              Explore concrete case studies in event-driven streaming, 3NF schema design, and crash-proof concurrency across high-throughput production systems.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('work')}
            className="px-6 py-3 rounded-full btn-ghost-twilight text-xs font-mono uppercase tracking-wider flex items-center gap-2 self-start sm:self-auto group transition-all"
          >
            <span>View All 6 Cases</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Featured Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project) => (
            <GlassCard
              key={project.id}
              className="p-7 sm:p-8 flex flex-col justify-between space-y-6 cursor-pointer group hover:scale-[1.01] transition-all"
            >
              <div
                onClick={() => onSelectProject(project)}
                className="space-y-4"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectProject(project);
                  }
                }}
              >
                {/* Category Pill */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-precious-gold font-bold">
                    {project.categoryLabel}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-full theme-badge">
                    Case Record
                  </span>
                </div>

                <h3 className="font-serif text-2xl t-text-primary font-normal line-clamp-1 group-hover:t-accent-editorial transition-colors">
                  {project.title}
                </h3>

                <p className="font-mono text-[10.5px] t-accent-warm leading-snug line-clamp-1">
                  {project.subtitle}
                </p>

                <p className="text-xs sm:text-sm t-text-secondary leading-relaxed font-light line-clamp-3">
                  {project.summary}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] px-2 py-0.5 rounded-md inner-panel border border-white/5 t-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-md inner-panel border border-white/5 t-text-muted">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t t-border-subtle flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="font-mono text-xs text-precious-gold font-semibold flex items-center gap-1.5 hover:underline"
                >
                  <span>Deconstruct Architecture</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
