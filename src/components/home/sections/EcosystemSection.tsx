import React from 'react';
import { FlaskConical, Video, Compass, Users, BookOpen, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import type { RouteKey } from '../../../context/NavigationContext';

interface EcosystemSectionProps {
  onNavigate: (route: RouteKey) => void;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({ onNavigate }) => {
  return (
    <section id="ecosystemSection" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t t-border-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-xs uppercase tracking-[0.24em] t-accent-warm block font-semibold">
            R&amp;D, Community &amp; Talent
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light t-text-primary">
            The Tryphen <span className="italic t-accent-editorial">Ecosystem</span>
          </h2>
          <p className="text-sm sm:text-base t-text-secondary leading-relaxed font-light">
            More than an SDLC framework. We are a sovereign hub for continuous systems R&amp;D, architectural teardowns, and engineering community.
          </p>
        </div>

        {/* 6-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Emurugat Labs (md:col-span-5) */}
          <div className="md:col-span-5 glass-card rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between border t-border-subtle hover:border-opal/50 transition-all">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-badge text-[10px] font-mono uppercase tracking-wider font-semibold">
                  <FlaskConical className="w-3.5 h-3.5 text-opal" />
                  <span>R&amp;D Sandbox</span>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-full theme-badge text-precious-gold font-bold">
                  Cluster Online
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl t-text-primary font-normal">
                  Emurugat Labs
                </h3>
                <p className="text-xs sm:text-sm t-text-secondary leading-relaxed font-light mt-1.5">
                  Our sovereign experimental wing. Access live Docker staging environments, verified microservices, and low-latency streaming topologies.
                </p>
              </div>

              {/* Telemetry Metrics */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="inner-panel p-2.5 rounded-xl border border-white/5 text-center sm:text-left">
                  <span className="font-mono text-base font-bold text-precious-gold block">120ms</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider t-text-muted">E2E Latency</span>
                </div>
                <div className="inner-panel p-2.5 rounded-xl border border-white/5 text-center sm:text-left">
                  <span className="font-mono text-base font-bold text-precious-gold block">10k+</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider t-text-muted">Concurrent</span>
                </div>
                <div className="inner-panel p-2.5 rounded-xl border border-white/5 text-center sm:text-left">
                  <span className="font-mono text-base font-bold text-opal block">60%</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider t-text-muted">Egress Saved</span>
                </div>
              </div>

              {/* Active Staging Clusters */}
              <div className="space-y-2">
                <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] t-text-muted block font-semibold">
                  Active Staging Clusters
                </span>
                <div className="space-y-2">
                  <div className="inner-panel p-3 rounded-xl border border-white/5 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-precious-gold" />
                        <span className="font-mono text-xs font-medium t-text-primary">Nueve Streaming Core</span>
                      </div>
                      <p className="text-[11px] t-text-muted font-light pl-3.5">WebRTC/HLS low-latency transcoding</p>
                    </div>
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded theme-badge text-precious-gold font-bold shrink-0">
                      v2.4
                    </span>
                  </div>

                  <div className="inner-panel p-3 rounded-xl border border-white/5 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-opal" />
                        <span className="font-mono text-xs font-medium t-text-primary">Rust IAM Gateway</span>
                      </div>
                      <p className="text-[11px] t-text-muted font-light pl-3.5">Zero-GC token validation &amp; ACL</p>
                    </div>
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-opal/10 text-opal border border-opal/20 font-bold shrink-0">
                      Active
                    </span>
                  </div>

                  <div className="inner-panel p-3 rounded-xl border border-white/5 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-precious-gold" />
                        <span className="font-mono text-xs font-medium t-text-primary">Redis Concurrency Lock</span>
                      </div>
                      <p className="text-[11px] t-text-muted font-light pl-3.5">Redlock atomic lease &amp; outbox</p>
                    </div>
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-precious-gold/10 text-precious-gold border border-precious-gold/20 font-bold shrink-0">
                      Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Stack Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-md inner-panel border border-white/5 t-text-secondary">Docker</span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-md inner-panel border border-white/5 t-text-secondary">Ubuntu Linux</span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-md inner-panel border border-white/5 t-text-secondary">WebRTC/HLS</span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-md inner-panel border border-white/5 t-text-secondary">Redis Cluster</span>
              </div>
            </div>

            <div className="pt-5 border-t t-border-subtle mt-5 flex items-center justify-between">
              <button
                type="button"
                onClick={() => onNavigate('labs')}
                className="font-mono text-xs text-opal font-semibold flex items-center gap-1.5 hover:underline group"
              >
                <span>Enter Labs Sandbox</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="font-mono text-[10px] text-precious-gold">
                3 Nodes Staged &rarr;
              </span>
            </div>
          </div>

          {/* Right Column: 5 Cards Grid (md:col-span-7) */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 2: Architecture Breakdowns (Span 2 cols) */}
            <div className="sm:col-span-2 glass-card rounded-[2rem] p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border t-border-subtle hover:border-fae-fruit/50 transition-all">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-fae-fruit" />
                  <h3 className="font-serif text-xl sm:text-2xl t-text-primary font-normal">
                    Architecture Breakdowns
                  </h3>
                </div>
                <p className="text-xs sm:text-sm t-text-secondary leading-relaxed font-light">
                  Watch our live visual essays and Nueve streams where we tear down enterprise system designs and concurrency edge cases.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => onNavigate('studio')}
                  className="px-4 py-2.5 rounded-full btn-luminous text-xs font-mono font-semibold flex items-center gap-1.5"
                >
                  <span>Browse Studio</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <a
                  href="https://www.youtube.com/@MercyVerse-all1000lifetimes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full inner-panel hover:text-fae-fruit transition-colors text-xs"
                  title="Watch Live on YouTube"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-rose-500" />
                </a>
              </div>
            </div>

            {/* Card 3: Our Background / Practice */}
            <div className="glass-card rounded-[2rem] p-6 flex flex-col justify-between border t-border-subtle hover:border-precious-gold/50 transition-all">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl inner-panel border border-white/10 flex items-center justify-center text-precious-gold">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg t-text-primary font-normal">
                  Our Background
                </h3>
                <p className="text-xs t-text-secondary leading-relaxed font-light">
                  Learn about the engineers, core invariants, and philosophy behind the Savannah Atelier consultancy in Nairobi.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t t-border-subtle">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="font-mono text-xs text-precious-gold flex items-center gap-1 hover:underline"
                >
                  <span>Read Practice</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 4: Community Outreach */}
            <div className="glass-card rounded-[2rem] p-6 flex flex-col justify-between border t-border-subtle hover:border-precious-gold/50 transition-all">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl inner-panel border border-white/10 flex items-center justify-center text-opal">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg t-text-primary font-normal">
                  Community Outreach
                </h3>
                <p className="text-xs t-text-secondary leading-relaxed font-light">
                  Our initiatives for mentoring, university workshops, and growing the next generation of high-assurance architects.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t t-border-subtle">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="font-mono text-xs text-opal flex items-center gap-1 hover:underline"
                >
                  <span>Join Community</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 5: Library & Knowledgebase */}
            <div className="glass-card rounded-[2rem] p-6 flex flex-col justify-between border t-border-subtle hover:border-precious-gold/50 transition-all">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl inner-panel border border-white/10 flex items-center justify-center text-opal">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg t-text-primary font-normal">
                  Library &amp; Knowledgebase
                </h3>
                <p className="text-xs t-text-secondary leading-relaxed font-light">
                  Access our repository of whitepapers, technical monographs, and SDLC best practices.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t t-border-subtle">
                <button
                  type="button"
                  onClick={() => onNavigate('library')}
                  className="font-mono text-xs text-opal flex items-center gap-1 hover:underline"
                >
                  <span>Browse Antilibrary</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 6: Talent Portal */}
            <div className="glass-card rounded-[2rem] p-6 flex flex-col justify-between border t-border-subtle hover:border-fae-fruit/50 transition-all">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl inner-panel border border-white/10 flex items-center justify-center text-fae-fruit">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg t-text-primary font-normal">
                  Talent Portal
                </h3>
                <p className="text-xs t-text-secondary leading-relaxed font-light">
                  Subcontractors: Take the paid technical vetting challenge (KES 7.5k - 10k) and execute mutual NDAs.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t t-border-subtle">
                <button
                  type="button"
                  onClick={() => onNavigate('portal')}
                  className="font-mono text-xs text-fae-fruit flex items-center gap-1 hover:underline"
                >
                  <span>Apply to Network</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
