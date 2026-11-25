import React from 'react';
import { Layers, Database, Cpu } from 'lucide-react';
import { GlassCard } from '../../ui/GlassCard';

export const PillarsSection: React.FC = () => {
  return (
    <section id="pillarsSection" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t t-border-subtle relative overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto space-y-14 transition-all duration-300">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-xs uppercase tracking-[0.24em] t-accent-warm block font-semibold">
            Architectural Philosophy &amp; Invariants
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light t-text-primary">
            Three Pillars of <span className="italic t-accent-editorial">Practice</span>
          </h2>
          <p className="text-sm sm:text-base t-text-secondary leading-relaxed font-light">
            Every engagement adheres to non-negotiable architectural tenets engineered to outlive hype cycles and accidental complexity.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Pillar 1 */}
          <GlassCard className="p-7 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl inner-panel border border-precious-gold/30 flex items-center justify-center text-precious-gold shadow-inner">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] t-accent-warm font-semibold">
                  01 &middot; Strategy
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-[1.65rem] t-text-primary font-normal leading-snug">
                Upfront Architectural Rigor
              </h3>
              <p className="text-xs sm:text-sm t-text-secondary leading-relaxed font-light">
                Before writing a line of code, I dissect your business workflow, calculate concurrency risks, and design a locked architectural blueprint. You get absolute clarity on timeline, exact costs, and a system structured never to need expensive rewrites.
              </p>
            </div>
            <div className="pt-4 border-t t-border-subtle flex flex-wrap gap-2">
              <span className="font-mono text-[10px] px-2.5 py-1 rounded-md theme-badge">ISO/IEC 29148</span>
              <span className="font-mono text-[10px] px-2.5 py-1 rounded-md theme-badge">State Modeling</span>
            </div>
          </GlassCard>

          {/* Pillar 2 */}
          <GlassCard className="p-7 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl inner-panel border border-fae-fruit/30 flex items-center justify-center text-fae-fruit shadow-inner">
                  <Database className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] t-accent-warm font-semibold">
                  02 &middot; Schemas
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-[1.65rem] t-text-primary font-normal leading-snug">
                3NF Relational Data Integrity
              </h3>
              <p className="text-xs sm:text-sm t-text-secondary leading-relaxed font-light">
                Data outlives code. I enforce strict Third Normal Form schemas with row-level integrity constraints, deterministic foreign keys, and audit logs. No phantom states, no corrupt transaction rows, and zero database-level race conditions.
              </p>
            </div>
            <div className="pt-4 border-t t-border-subtle flex flex-wrap gap-2">
              <span className="font-mono text-[10px] px-2.5 py-1 rounded-md theme-badge">Strict 3NF</span>
              <span className="font-mono text-[10px] px-2.5 py-1 rounded-md theme-badge">ACID Guarantees</span>
            </div>
          </GlassCard>

          {/* Pillar 3 */}
          <GlassCard className="p-7 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl inner-panel border border-opal/30 flex items-center justify-center text-opal shadow-inner">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] t-accent-warm font-semibold">
                  03 &middot; Concurrency
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-[1.65rem] t-text-primary font-normal leading-snug">
                High-Concurrency State Machines
              </h3>
              <p className="text-xs sm:text-sm t-text-secondary leading-relaxed font-light">
                Distributed transactions require explicit state boundaries. I model workflows as mathematical finite state machines backed by Redis state locks and transactional outbox patterns, handling unpredictable throughput bursts with zero packet loss.
              </p>
            </div>
            <div className="pt-4 border-t t-border-subtle flex flex-wrap gap-2">
              <span className="font-mono text-[10px] px-2.5 py-1 rounded-md theme-badge">Deterministic FSM</span>
              <span className="font-mono text-[10px] px-2.5 py-1 rounded-md theme-badge">Crash-Proof Concurrency</span>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
