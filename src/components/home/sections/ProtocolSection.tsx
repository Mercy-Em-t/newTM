import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Calculator } from 'lucide-react';
import type { RouteKey } from '../../../context/NavigationContext';
import { useCurrency } from '../../../hooks/useCurrency';
import { useProtocolSteps } from '../../../hooks/useContent';
import { resolvePricing } from '../../../utils/currency';

interface ProtocolSectionProps {
  onNavigate: (route: RouteKey) => void;
}

export const ProtocolSection: React.FC<ProtocolSectionProps> = ({ onNavigate }) => {
  const protocolSteps = useProtocolSteps();
  const [currentIdx, setCurrentIdx] = useState(0);
  const { currency, setCurrency } = useCurrency();

  const activeProtocol = protocolSteps[currentIdx] || protocolSteps[0];

  return (
    <section id="protocolSection" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t t-border-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header with Currency Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.24em] t-accent-warm block font-semibold">
              The 4-Phase Commissioning Protocol
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light t-text-primary">
              How to Get <span className="italic t-accent-editorial">Started</span>
            </h2>
            <p className="text-sm sm:text-base t-text-secondary leading-relaxed font-light">
              A transparent, milestone-driven protocol designed to give technical founders and executive leadership predictable budgets, locked timelines, and zero surprises.
            </p>
          </div>

          {/* Currency Toggle Switcher */}
          <div className="inline-flex items-center p-1 rounded-full inner-panel border border-fae-fruit/30 self-start md:self-auto shrink-0 shadow-inner">
            <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider t-text-muted whitespace-nowrap">
              Currency:
            </span>
            <button
              type="button"
              onClick={() => setCurrency('KES')}
              className={`px-3 py-1 rounded-full text-xs font-mono font-semibold transition-all whitespace-nowrap shrink-0 ${
                currency === 'KES'
                  ? 'bg-gradient-to-r from-fae-fruit to-opal text-white shadow-md'
                  : 't-text-secondary hover:t-text-primary'
              }`}
            >
              KES
            </button>
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1 rounded-full text-xs font-mono font-semibold transition-all whitespace-nowrap shrink-0 ${
                currency === 'USD'
                  ? 'bg-gradient-to-r from-fae-fruit to-opal text-white shadow-md'
                  : 't-text-secondary hover:t-text-primary'
              }`}
            >
              USD
            </button>
          </div>
        </div>

        {/* Phase Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {protocolSteps.map((step, idx) => (
            <button
              key={step.phase}
              type="button"
              onClick={() => setCurrentIdx(idx)}
              className={`p-4 sm:p-5 rounded-2xl inner-panel border text-left transition-all ${
                currentIdx === idx
                  ? 'border-precious-gold shadow-lg shadow-precious-gold/10 bg-white/5'
                  : 't-border-subtle hover:border-precious-gold/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-precious-gold font-bold">
                  Phase 0{idx + 1}
                </span>
                <span className="font-mono text-[10px] t-text-muted">
                  {step.timeline}
                </span>
              </div>
              <div className="font-serif text-lg sm:text-xl t-text-primary font-medium line-clamp-1">
                {step.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Phase Deep Dive Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-precious-gold/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Phase Details & Scope Finder */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-badge text-[10px] font-mono uppercase tracking-wider font-semibold">
                  <span>{activeProtocol.phase}</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl t-text-primary font-normal">
                  {activeProtocol.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base t-text-secondary leading-relaxed font-light">
                {activeProtocol.summary}
              </p>

              {/* What You Receive Deliverables */}
              <div className="space-y-3 pt-2">
                <span className="font-mono text-xs uppercase tracking-wider text-precious-gold font-bold block">
                  Mandatory Phase Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeProtocol.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm t-text-secondary font-light">
                      <CheckCircle2 className="w-4 h-4 text-precious-gold shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Scope Finder & Cost Simulator */}
              <div className="pt-4 border-t t-border-subtle space-y-3">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-precious-gold" />
                  <span className="font-mono text-xs uppercase tracking-wider t-text-primary font-semibold">
                    Interactive Scope Finder
                  </span>
                </div>
                <p className="text-xs t-text-secondary leading-relaxed font-light">
                  Unsure if your project needs a rapid 1-week Architectural Feasibility Audit or a full 8-week Sovereign Commission? Answer 3 questions in our interactive calculator.
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate('commission')}
                  className="px-5 py-2.5 rounded-full inner-panel border border-precious-gold/40 hover:border-precious-gold text-xs font-mono text-precious-gold flex items-center gap-2 transition-all group"
                >
                  <span>Launch Diagnostic Scope Finder</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Pricing & Engagement Gate */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:border-l lg:t-border-subtle lg:pl-8">
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider t-text-muted block font-semibold">
                  Investment &amp; Governance
                </span>
                <div className="p-5 rounded-2xl inner-panel border border-white/10 space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider t-accent-warm block font-semibold">
                    Fixed-Price Delivery:
                  </span>
                  <div className="font-mono text-2xl sm:text-3xl text-precious-gold font-bold">
                    {resolvePricing(activeProtocol.pricingKes, activeProtocol.pricingUsd, currency)}
                  </div>
                  <span className="font-mono text-[11px] t-text-muted block">
                    Zero budget overruns. Milestone-gated escrow delivery.
                  </span>
                </div>

                <div className="space-y-2 text-xs t-text-secondary font-light">
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span>Typical Timeline:</span>
                    <strong className="font-mono t-text-primary">{activeProtocol.timeline}</strong>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span>Engagement Type:</span>
                    <strong className="font-mono t-text-primary">Direct Desk Retainer</strong>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span>Availability:</span>
                    <strong className="font-mono text-precious-gold">Q4 2026 / Q1 2027</strong>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onNavigate('commission')}
                className="w-full py-3.5 rounded-full btn-luminous text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2 group transition-all"
              >
                <span>Reserve Engagement Window</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
