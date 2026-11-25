import React, { useState } from 'react';
import type { Project } from '../../data/projects';
import { useProjects } from '../../hooks/useContent';
import { CaseStudyModal } from './CaseStudyModal';
import { GlassCard } from '../ui/GlassCard';

export const WorkView: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState<'all' | 'systems' | 'multi-tenant' | 'commerce'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { key: 'all' | 'systems' | 'multi-tenant' | 'commerce'; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'systems', label: 'Systems & Backend' },
    { key: 'multi-tenant', label: 'Multi-Tenant Platforms' },
    { key: 'commerce', label: 'Commerce & Ops' }
  ];

  const filteredProjects = useProjects({
    category: currentFilter === 'all' ? undefined : currentFilter
  });

  return (
    <section className="view-enter py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto transition-all duration-300">
        {/* Section Header Masthead */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] t-accent-warm block mb-2">
              Commissioned Works
            </span>
            <h1 className="font-serif text-[1.75rem] xs:text-3xl sm:text-5xl lg:text-6xl font-semibold whitespace-nowrap tracking-tight t-text-primary">
              Portfolio &amp; <span className="italic t-accent-editorial">Architecture</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base t-text-secondary leading-relaxed max-w-3xl text-pretty mt-2.5">
              Inspect six commissioned systems across distributed backends, multi-tenant platforms, and conversational commerce. Select any project to examine constraints, engineering trade-offs, and production outcomes.
            </p>
          </div>

          {/* Squeezed Filter Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2" role="group" aria-label="Filter Projects">
            {categories.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setCurrentFilter(c.key)}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium transition-all ${
                  currentFilter === c.key ? 'btn-luminous' : 'btn-ghost-twilight'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <GlassCard
              key={p.id}
              onClick={() => setSelectedProject(p)}
              tabIndex={0}
              role="button"
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(p);
                }
              }}
              className="case-study-trigger rounded-3xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-fae-fruit hover:scale-[1.01] transition-transform"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[7.5px] sm:text-[8px] uppercase tracking-[0.16em] px-2 py-0.5 rounded-full theme-badge font-medium shrink-0">
                    {p.categoryLabel}
                  </span>
                  <span className="t-accent-warm group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </div>
                <h2 className="font-serif text-[1.85rem] sm:text-3xl lg:text-[2rem] font-bold leading-[1.12] tracking-tight t-text-primary group-hover:t-accent-editorial transition-colors mb-1.5">
                  {p.title}
                </h2>
                <p className="font-mono text-[9.5px] sm:text-[10.5px] t-accent-warm mb-2.5 leading-snug">
                  {p.subtitle}
                </p>
                <p className="text-xs sm:text-sm t-text-secondary leading-relaxed mb-5 line-clamp-3">
                  {p.summary}
                </p>
              </div>
              <div className="pt-4 border-t t-border-subtle flex flex-wrap gap-1.5">
                {p.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[9.5px] sm:text-[10px] px-2 py-0.5 rounded-md inner-panel t-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};
