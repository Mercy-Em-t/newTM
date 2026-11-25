import React from 'react';
import { ArrowRight, Send } from 'lucide-react';
import type { RouteKey } from '../../../context/NavigationContext';
import { useTheme } from '../../../context/ThemeContext';

interface DiagnosticBannerSectionProps {
  onNavigate: (route: RouteKey) => void;
}

export const DiagnosticBannerSection: React.FC<DiagnosticBannerSectionProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const isDawn = theme === 'dawn';

  return (
    <section className="pt-10 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`rounded-[2.25rem] p-8 sm:p-14 text-center relative overflow-hidden transition-all duration-300 ${
            isDawn
              ? 'glass-card border border-[rgba(158,30,91,0.22)] shadow-xl'
              : 'border border-fae-fruit/35 shadow-2xl'
          }`}
          style={{
            background: isDawn
              ? 'linear-gradient(135deg, rgba(255, 246, 250, 0.96) 0%, rgba(253, 236, 246, 0.92) 50%, rgba(247, 222, 238, 0.88) 100%)'
              : 'linear-gradient(135deg, rgba(107, 7, 51, 0.46) 0%, rgba(45, 16, 54, 0.78) 55%, rgba(104, 80, 173, 0.36) 100%)',
          }}
        >
          {/* Subtle Ambient Glow */}
          <div
            className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-[100px] pointer-events-none opacity-30"
            style={{ background: 'var(--aura-crimson)' }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-[100px] pointer-events-none opacity-20"
            style={{ background: 'var(--aura-gold)' }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10.5px] font-mono uppercase tracking-[0.2em] font-semibold mb-4 transition-colors ${
                isDawn
                  ? 'bg-[rgba(140,24,78,0.08)] border border-[rgba(140,24,78,0.22)] text-[#8C184E]'
                  : 'theme-badge text-precious-gold'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                  isDawn ? 'bg-[#8C184E]' : 'bg-precious-gold'
                }`}
              />
              <span>Executive Technical Desk &middot; Q4 2026 / Q1 2027 Commissioning</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal t-text-primary mb-4 leading-tight">
              Ready to architect systems{' '}
              <span className={`italic font-medium ${isDawn ? 'text-[#8C184E]' : 't-accent-editorial'}`}>
                built to endure?
              </span>
            </h2>

            <p className="text-sm sm:text-base t-text-secondary max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
              Stop guessing with technical debt. Retain formal systems architecture, 3NF relational data integrity, and concurrency governance for your enterprise platform.
            </p>

            {/* 3 Unified Action Pathways: Calculator, WhatsApp Direct, Solution Catalog */}
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <button
                type="button"
                onClick={() => onNavigate('commission')}
                className="px-7 py-3.5 rounded-full btn-luminous text-xs sm:text-sm font-mono uppercase tracking-[0.14em] font-semibold flex items-center gap-2 group transition-all shadow-lg"
              >
                <span>Calculate Scope &amp; Budget</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/254710720949?text=Hello%20Tryphen%2C%20I%20am%20inquiring%20about%20systems%20architecture%20commissioning."
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3.5 rounded-full border text-xs sm:text-sm font-mono uppercase tracking-[0.14em] font-medium inline-flex items-center gap-2 transition-all shadow-sm ${
                  isDawn
                    ? 'bg-white/80 border-[rgba(140,24,78,0.25)] text-[#8C184E] hover:border-[#8C184E] hover:bg-white'
                    : 'inner-panel border-white/15 hover:border-precious-gold text-precious-gold hover:bg-white/5'
                }`}
              >
                <Send className={`w-3.5 h-3.5 ${isDawn ? 'text-[#8C184E]' : 'text-precious-gold'}`} />
                <span>Direct WhatsApp Desk</span>
              </a>

              <button
                type="button"
                onClick={() => onNavigate('catalog')}
                className="px-6 py-3.5 rounded-full btn-ghost-twilight text-xs sm:text-sm font-mono uppercase tracking-[0.14em] transition-all"
              >
                Review Solution Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
