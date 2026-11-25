import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import type { Project } from '../../data/projects';
import { X, ArrowRight, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import { StateFlowDiagram } from './StateFlowDiagram';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const { navigate } = useNavigation();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    '01': true,
    '02': true,
    '03': true,
    '04': true,
  });

  if (!project) return null;

  const toggleSection = (num: string) => {
    setOpenSections((prev) => ({ ...prev, [num]: !prev[num] }));
  };

  const handleCommissionClick = () => {
    onClose();
    navigate('commission');
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-5 md:p-6"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div 
        className="modal-surface relative w-full max-w-4xl lg:max-w-5xl h-[92vh] max-h-[92vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl border t-border-subtle my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Executive Reader Header */}
        <header
          className="sticky top-0 z-30 shrink-0 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-3 border-b t-border-subtle"
          style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(24px)' }}
        >
          {/* Left: Breadcrumb */}
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <span className="hidden sm:inline-flex font-mono text-[9.5px] uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full theme-badge shrink-0">
              CASE STUDY
            </span>
            <div className="flex flex-col min-w-0">
              <span className="font-serif text-sm sm:text-base font-medium t-text-primary truncate">
                Architecture Specification
              </span>
              <span className="font-mono text-[10px] t-accent-warm truncate hidden md:inline">
                Savannah Atelier · Case Study
              </span>
            </div>
          </div>

          {/* Right: Close Action */}
          <button
            type="button"
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-full inner-panel t-text-primary hover:border-fae-fruit hover:text-fae-fruit transition-all shrink-0"
            aria-label="Close Case Study"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </header>

        {/* Scrollable Document Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 md:p-10 space-y-7">
          {/* Hero Masthead */}
          <header className="border-b t-border-subtle pb-6 space-y-2">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full theme-badge inline-block font-semibold">
                {project.categoryLabel.toUpperCase()}
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold t-text-primary leading-[1.08] tracking-tight">
              {project.title}
            </h1>
            <p className="font-serif italic text-base sm:text-lg t-accent-editorial leading-relaxed">
              {project.subtitle}
            </p>
          </header>

          {/* Section 01: Problem */}
          <section className="rounded-2xl border t-border-subtle inner-panel overflow-hidden">
            <button
              onClick={() => toggleSection('01')}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-fae-fruit"></span>
                <span className="font-mono text-xs uppercase tracking-wider text-precious-gold font-bold">
                  01 · Problem & Operational Constraints
                </span>
              </div>
              {openSections['01'] ? <ChevronUp className="w-4 h-4 text-precious-gold" /> : <ChevronDown className="w-4 h-4 text-precious-gold" />}
            </button>
            {openSections['01'] && (
              <div className="px-5 pb-5 text-sm sm:text-base t-text-secondary leading-relaxed border-t t-border-subtle pt-4 font-light">
                {project.problem}
              </div>
            )}
          </section>

          {/* Section 02: Architecture Engine & Diagram */}
          <section className="rounded-2xl border t-border-subtle inner-panel overflow-hidden">
            <button
              onClick={() => toggleSection('02')}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-precious-gold"></span>
                <span className="font-mono text-xs uppercase tracking-wider text-precious-gold font-bold">
                  02 · Systems Architecture & Core Engine
                </span>
              </div>
              {openSections['02'] ? <ChevronUp className="w-4 h-4 text-precious-gold" /> : <ChevronDown className="w-4 h-4 text-precious-gold" />}
            </button>
            {openSections['02'] && (
              <div className="px-5 pb-5 text-sm sm:text-base t-text-secondary leading-relaxed border-t t-border-subtle pt-4 font-light space-y-4">
                <p>{project.architecture}</p>

                {/* Interactive High-Assurance Architectural State Flow Diagram */}
                <StateFlowDiagram projectId={project.id} />

                {/* Stack Chips */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.stack.map((t) => (
                    <span key={t} className="font-mono text-[10px] px-2.5 py-1 rounded-md inner-panel text-precious-gold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Section 03: Trade-Offs */}
          <section className="rounded-2xl border t-border-subtle inner-panel overflow-hidden">
            <button
              onClick={() => toggleSection('03')}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-opal"></span>
                <span className="font-mono text-xs uppercase tracking-wider text-precious-gold font-bold">
                  03 · Architectural Trade-Offs & Decisions
                </span>
              </div>
              {openSections['03'] ? <ChevronUp className="w-4 h-4 text-precious-gold" /> : <ChevronDown className="w-4 h-4 text-precious-gold" />}
            </button>
            {openSections['03'] && (
              <div className="px-5 pb-5 text-sm sm:text-base t-text-secondary leading-relaxed border-t t-border-subtle pt-4 font-light">
                {project.tradeoffs}
              </div>
            )}
          </section>

          {/* Section 04: Measured Outcomes */}
          <section className="rounded-2xl border t-border-subtle inner-panel overflow-hidden">
            <button
              onClick={() => toggleSection('04')}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-precious-gold"></span>
                <span className="font-mono text-xs uppercase tracking-wider text-precious-gold font-bold">
                  04 · Measured Production Outcomes
                </span>
              </div>
              {openSections['04'] ? <ChevronUp className="w-4 h-4 text-precious-gold" /> : <ChevronDown className="w-4 h-4 text-precious-gold" />}
            </button>
            {openSections['04'] && (
              <div className="px-5 pb-5 text-sm sm:text-base t-text-secondary leading-relaxed border-t t-border-subtle pt-4 font-light">
                {project.outcomes}
              </div>
            )}
          </section>
        </div>

        {/* Anchored Executive Action Footer */}
        <footer
          className="sticky bottom-0 z-30 shrink-0 px-4 sm:px-8 py-3 border-t t-border-subtle flex items-center justify-between gap-3"
          style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(24px)' }}
        >
          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              type="button"
              onClick={handleCommissionClick}
              className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full btn-luminous text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shrink-0"
            >
              <span>Commission Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={`https://wa.me/254710720949?text=${encodeURIComponent(
                'Hello Tryphen, I read your case study on ' + project.title + ' (' + project.subtitle + ') and would like to commission a similar architecture.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Inquiry"
              title="WhatsApp Direct Inquiry"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full inner-panel hover:border-precious-gold text-precious-gold inline-flex items-center justify-center transition-all hover:scale-105 shrink-0 border border-precious-gold/40 shadow-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/></svg>
            </a>
          </div>

          {project.liveUrl && (
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-full inner-panel border border-precious-gold/30 hover:border-precious-gold text-xs font-mono text-precious-gold transition-all shrink-0 whitespace-nowrap inline-flex items-center gap-1.5"
                title="External Platform Preview"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </footer>
      </div>
    </div>,
    document.body
  );
};
