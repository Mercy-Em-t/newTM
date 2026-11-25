import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import type { Publication } from '../../data/publications';
import { usePublications } from '../../hooks/useContent';
import { useToast } from '../../context/ToastContext';
import { GlassCard } from '../ui/GlassCard';
import { X, Printer, Quote, ArrowRight, ArrowDown, Search, Filter } from 'lucide-react';

export const PublicationsView: React.FC = () => {
  const { showToast } = useToast();
  const publications = usePublications();
  const [selectedPub, setSelectedPub] = useState<Publication | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const openPublication = (pub: Publication) => {
    setSelectedPub(pub);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyCitation = (citation: string) => {
    navigator.clipboard.writeText(citation);
    showToast('Citation copied to clipboard.', 'success');
  };

  const getNextPub = (currentId: string): Publication | null => {
    const idx = publications.findIndex((p) => p.id === currentId);
    if (idx === -1 || publications.length <= 1) return null;
    return publications[(idx + 1) % publications.length];
  };

  const nextPub = selectedPub ? getNextPub(selectedPub.id) : null;

  const topicPills = [
    { key: 'all', label: `All Monographs (${publications.length})` },
    { key: 'concurrency', label: 'Concurrency & Locks' },
    { key: 'domain', label: 'Domain Modeling & FSM' },
    { key: 'governance', label: 'Commissioning & Governance' },
    { key: 'streaming', label: 'Media & Streaming Core' },
    { key: 'security', label: 'Systems & Rust IAM' },
  ];

  const filteredPubs = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return publications.filter((pub) => {
      // Category filter matching
      if (activeCategory !== 'all') {
        const catLow = pub.category.toLowerCase();
        const titleLow = pub.title.toLowerCase();
        if (activeCategory === 'concurrency' && !catLow.includes('concurrency') && !titleLow.includes('lock')) return false;
        if (activeCategory === 'domain' && !catLow.includes('domain') && !titleLow.includes('state')) return false;
        if (activeCategory === 'governance' && !catLow.includes('governance') && !titleLow.includes('staging')) return false;
        if (activeCategory === 'streaming' && !catLow.includes('media') && !titleLow.includes('streaming')) return false;
        if (activeCategory === 'security' && !catLow.includes('security') && !titleLow.includes('rust')) return false;
      }

      // Keyword search
      if (!q) return true;
      return (
        pub.title.toLowerCase().includes(q) ||
        pub.category.toLowerCase().includes(q) ||
        pub.lead.toLowerCase().includes(q) ||
        pub.subtitle.toLowerCase().includes(q)
      );
    });
  }, [publications, activeCategory, searchQuery]);

  const visiblePubs = filteredPubs.slice(0, visibleCount);

  return (
    <section className="view-enter pt-10 sm:pt-14 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto space-y-10 transition-all duration-300">
        {/* Masthead */}
        <div className="border-b t-border-subtle pb-6 sm:pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] t-accent-warm block mb-2 font-semibold">
              RESEARCH &amp; MONOGRAPH ARCHIVE
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight t-text-primary">
              Publications &amp; <span className="italic t-accent-editorial">Architectural Papers</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base t-text-secondary leading-relaxed max-w-3xl text-pretty mt-2.5 font-light">
              Formal architectural treatises and systems retrospectives authored by Tryphen Emurugat. Exploring atomic inventory locking, state machine invariants, and multi-tenant schema isolation.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <span className="font-mono text-xs px-4 py-2 rounded-full theme-badge t-accent-warm font-semibold">
              Vol. IV Collection &middot; Peer-Reviewed Architecture
            </span>
          </div>
        </div>

        {/* Topic Filter Pills & Search Console */}
        <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-5 space-y-3.5 border t-border-subtle shadow-lg">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Real-time Filter Search */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-lavender-rose/60">
                <Search className="w-4 h-4 text-precious-gold" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search monographs by title, invariant, or keyword (e.g. Locking, Monolith, WebRTC)..."
                className="theme-input w-full pl-11 pr-10 py-2.5 rounded-full text-xs font-mono transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-lavender-rose/70 hover:text-precious-gold font-mono text-base font-bold"
                  title="Clear search"
                >
                  &times;
                </button>
              )}
            </div>

            <div className="shrink-0 flex items-center gap-2 px-2 font-mono text-xs t-accent-warm font-semibold">
              <Filter className="w-3.5 h-3.5 text-precious-gold" />
              <span>Showing {visiblePubs.length} of {filteredPubs.length}</span>
            </div>
          </div>

          {/* Topic Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1 pb-0.5">
            {topicPills.map((pill) => (
              <button
                key={pill.key}
                type="button"
                onClick={() => {
                  setActiveCategory(pill.key);
                  setVisibleCount(6);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                  activeCategory === pill.key
                    ? 'btn-luminous !text-[#1A0822] font-bold shadow-md'
                    : 'btn-ghost-twilight t-text-primary'
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePubs.map((pub) => (
            <GlassCard
              key={pub.id}
              onClick={() => openPublication(pub)}
              tabIndex={0}
              role="button"
              className="rounded-3xl p-7 flex flex-col justify-between cursor-pointer group focus:outline-none focus:ring-2 focus:ring-fae-fruit hover:scale-[1.01] transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full theme-badge">
                    {pub.volume}
                  </span>
                  <span className="font-mono text-[11px] t-text-muted">{pub.readTime}</span>
                </div>

                <div className="space-y-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-precious-gold font-semibold block">
                    {pub.category}
                  </span>
                  <h3 className="font-serif text-2xl font-normal t-text-primary leading-snug group-hover:t-accent-editorial transition-colors">
                    {pub.title}
                  </h3>
                  <span className="font-mono text-[11px] t-accent-warm block font-light">
                    By Tryphen Emurugat &middot; {pub.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm t-text-secondary leading-relaxed font-light line-clamp-3">
                  {pub.lead}
                </p>
              </div>

              <div className="pt-4 border-t t-border-subtle mt-6 flex items-center justify-between">
                <span className="font-mono text-xs text-precious-gold font-medium flex items-center gap-1 group-hover:underline">
                  <span>Read Monograph</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="font-mono text-[10px] t-text-muted uppercase tracking-wider">
                  {pub.ref}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Progressive "Load More" Controller & Archive Seal */}
        <div className="pt-8 border-t t-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 t-text-muted">
            <span className="w-2 h-2 rounded-full bg-precious-gold animate-pulse" />
            <span>Archive Integrity: 100% Peer-Reviewed Monograph Manifests</span>
          </div>

          <div className="flex items-center gap-3">
            {filteredPubs.length > visibleCount ? (
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="px-6 py-3 rounded-full btn-luminous text-xs font-mono font-semibold flex items-center gap-2 shadow-lg transition-all"
              >
                <span>Load More Monographs ({visibleCount} of {filteredPubs.length})</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            ) : (
              <span className="font-mono text-xs t-accent-warm font-semibold px-4 py-2 rounded-full inner-panel border t-border-subtle">
                &bull; Vol. IV Monograph Archive Fully Loaded ({filteredPubs.length} Total) &bull;
              </span>
            )}
          </div>
        </div>

        {/* Full-Screen Reading Drawer Modal */}
        {selectedPub &&
          createPortal(
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
              <div
                className="glass-card rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto border t-border-subtle p-6 sm:p-10 space-y-8 relative shadow-2xl"
                role="dialog"
                aria-modal="true"
                aria-labelledby="pub-title"
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between gap-4 border-b t-border-subtle pb-6">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
                      <span className="px-2.5 py-0.5 rounded-full theme-badge text-precious-gold font-bold">
                        {selectedPub.volume}
                      </span>
                      <span className="t-accent-warm font-medium">{selectedPub.category}</span>
                      <span className="t-text-muted">&middot;</span>
                      <span className="t-text-muted">{selectedPub.readTime}</span>
                    </div>
                    <h2 id="pub-title" className="font-serif text-3xl sm:text-4xl t-text-primary leading-tight font-normal">
                      {selectedPub.title}
                    </h2>
                    <p className="font-mono text-xs t-accent-warm">
                      Authored by Tryphen Emurugat &middot; Published {selectedPub.date}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedPub(null)}
                    className="p-2.5 rounded-full inner-panel hover:t-accent-editorial transition-colors"
                    aria-label="Close Monograph"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Core Architectural Thesis Quote Box */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-fae-fruit/10 via-opal/10 to-precious-gold/10 border border-fae-fruit/30 relative">
                  <Quote className="w-8 h-8 text-precious-gold/40 absolute top-4 right-4" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-precious-gold block mb-2 font-bold">
                    Core Architectural Thesis
                  </span>
                  <p className="font-serif text-lg sm:text-xl italic t-text-primary leading-relaxed font-light">
                    &ldquo;{selectedPub.subtitle}&rdquo;
                  </p>
                </div>

                {/* Full Treatise Body Text from Sections */}
                <div className="space-y-8 text-sm sm:text-base t-text-secondary leading-relaxed font-light">
                  {selectedPub.sections.map((section) => (
                    <div key={section.num} className="space-y-3">
                      <h3 className="font-serif text-xl sm:text-2xl t-text-primary font-normal">
                        {section.num} &middot; {section.heading}
                      </h3>
                      <p className="leading-relaxed">{section.content}</p>
                      {section.pullQuote && (
                        <blockquote className="my-4 p-4 border-l-2 border-precious-gold/60 pl-4 font-serif italic text-base t-text-primary bg-white/5 rounded-r-xl">
                          &ldquo;{section.pullQuote}&rdquo;
                        </blockquote>
                      )}
                      {section.blueprintCode && (
                        <pre className="blueprint-box my-3 p-4 rounded-xl font-mono text-xs overflow-x-auto bg-black/40 border border-white/10">
                          <code>{section.blueprintCode}</code>
                        </pre>
                      )}
                    </div>
                  ))}
                </div>

                {/* Citation Box */}
                <div className="p-5 rounded-2xl inner-panel border t-border-subtle space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-precious-gold font-bold">
                      Formal Academic / Industry Citation
                    </span>
                    <button
                      onClick={() => copyCitation(selectedPub.citation)}
                      className="font-mono text-xs text-opal hover:underline"
                    >
                      Copy BibTeX / Citation
                    </button>
                  </div>
                  <pre className="font-mono text-xs t-text-primary bg-black/40 p-3 rounded-xl overflow-x-auto border border-white/5">
                    <code>{selectedPub.citation}</code>
                  </pre>
                </div>

                {/* Footer Controls */}
                <div className="pt-6 border-t t-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="btn-ghost-twilight px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-2"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Monograph</span>
                  </button>

                  <div className="flex items-center gap-3">
                    {nextPub && (
                      <button
                        type="button"
                        onClick={() => openPublication(nextPub)}
                        className="btn-luminous px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-2"
                      >
                        <span>Next: {nextPub.title.substring(0, 24)}...</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => setSelectedPub(null)}
                      className="btn-ghost-twilight px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider"
                    >
                      Close Reader
                    </button>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )}
      </div>
    </section>
  );
};
