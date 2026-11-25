import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { BrandLogo } from '../shared/BrandLogo';
import { SITE_CONFIG } from '../../config/siteConfig';
import { 
  ArrowUp, 
  ExternalLink, 
  Send
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { currentRoute, navigate } = useNavigation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-surface mt-16 sm:mt-24 pt-10 sm:pt-14 pb-6 sm:pb-8 xl:pb-6 px-4 sm:px-6 lg:px-8 border-t t-border-subtle relative overflow-hidden">
      {/* Subtle Ambient Glow in Background */}
      <div 
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-40" 
        style={{ background: 'var(--aura-crimson)' }} 
        aria-hidden="true" 
      />
      <div 
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-30" 
        style={{ background: 'var(--aura-gold)' }} 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 relative z-10">
        {/* Top Executive Dispatch Strip: Displayed on Inner Subpages (Lines 1059-1082) */}
        {currentRoute !== 'home' && (
          <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border t-border-subtle bg-gradient-to-r from-fae-fruit/10 via-fae-fruit/[0.02] to-precious-gold/10">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-precious-gold animate-pulse shrink-0" />
                <span className="font-mono text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.16em] sm:tracking-[0.24em] text-precious-gold font-bold">
                  Executive Technical Desk &middot; Q4 2026 / Q1 2027 Commissioning
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl t-text-primary font-normal">
                Ready to architect systems built to endure?
              </h3>
              <p className="text-xs sm:text-sm t-text-secondary leading-relaxed font-light">
                Retain formal systems architecture, 3NF relational data integrity, and concurrency audit for your enterprise platform. Direct desk engagement with zero intermediary layers.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button 
                type="button" 
                onClick={() => navigate('commission')} 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-luminous text-xs font-mono font-medium shadow-lg"
              >
                <span>Calculate Scope &rarr;</span>
              </button>
              <a 
                href="https://wa.me/254710720949?text=Hello%20Tryphen%2C%20I%20am%20inquiring%20about%20systems%20architecture%20commissioning." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full inner-panel border t-border-subtle hover:border-precious-gold text-xs font-mono font-medium transition-colors text-precious-gold shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Direct WhatsApp Desk</span>
              </a>
            </div>
          </div>
        )}

        {/* 4-Column Architectural Grid (Lines 1084-1242) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 sm:pb-10 border-b t-border-subtle">
          {/* Brand & Philosophy Column (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-3">
              <BrandLogo size="lg" sublabel="SAVANNAH ATELIER &middot; NAIROBI" />
            </div>

            <p className="text-xs sm:text-sm t-text-secondary leading-relaxed font-light max-w-sm">
              Principal Systems Architect specializing in decoupled enterprise architectures, 3NF relational data integrity, and high-assurance commissioning. Rejecting accidental complexity to build software engineered to outlive hype cycles.
            </p>
          </div>

          {/* Col 1: Practice & Architecture (Span 2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] t-accent-warm font-semibold">Practice &amp; Architecture</p>
            <ul className="space-y-2.5 text-[13px] font-sans t-text-secondary">
              <li>
                <button onClick={() => navigate('work')} className="group flex items-center gap-2 hover:t-accent-editorial transition-colors text-left">
                  <span className="text-xs t-accent-warm/60 group-hover:t-accent-editorial transition-colors">&rsaquo;</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">Case Studies</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('catalog')} className="group flex items-center gap-2 hover:t-accent-editorial transition-colors text-left">
                  <span className="text-xs t-accent-warm/60 group-hover:t-accent-editorial transition-colors">&rsaquo;</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">Solution Catalog</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('about')} className="group flex items-center gap-2 hover:t-accent-editorial transition-colors text-left">
                  <span className="text-xs t-accent-warm/60 group-hover:t-accent-editorial transition-colors">&rsaquo;</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">Architectural Tenets</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('commission')} className="group flex items-center gap-2 hover:t-accent-editorial transition-colors text-left">
                  <span className="text-xs t-accent-warm/60 group-hover:t-accent-editorial transition-colors">&rsaquo;</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">Commissioning Protocol</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('portal')} className="group flex items-center gap-2 hover:t-accent-editorial transition-colors text-left">
                  <span className="text-xs t-accent-warm/60 group-hover:t-accent-editorial transition-colors">&rsaquo;</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">Client Staging Gate</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Dispatch & R&D (Span 2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] t-accent-warm font-semibold">Dispatch &amp; R&amp;D</p>
            <ul className="space-y-2.5 text-[13px] font-sans t-text-secondary">
              <li>
                <button onClick={() => navigate('publications')} className="group flex items-center gap-2 hover:t-accent-editorial transition-colors text-left">
                  <span className="text-xs t-accent-warm/60 group-hover:t-accent-editorial transition-colors">&rsaquo;</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">Technical Publications</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('studio')} className="group flex items-center gap-2 hover:t-accent-editorial transition-colors text-left">
                  <span className="text-xs t-accent-warm/60 group-hover:t-accent-editorial transition-colors">&rsaquo;</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">The MercyVerse Studio</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('library')} className="group flex items-center gap-2 hover:t-accent-editorial transition-colors text-left">
                  <span className="text-xs t-accent-warm/60 group-hover:t-accent-editorial transition-colors">&rsaquo;</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">Personal Antilibrary</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('labs')} className="group flex items-center gap-2 hover:t-accent-editorial transition-colors text-left">
                  <span className="text-xs t-accent-warm/60 group-hover:t-accent-editorial transition-colors">&rsaquo;</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">Emurugat Labs (R&amp;D)</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('cms')} className="group flex items-center gap-2 hover:t-accent-editorial transition-colors text-left">
                  <span className="text-xs t-accent-warm/60 group-hover:t-accent-editorial transition-colors">&rsaquo;</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">Editorial CMS Suite</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Desk & Network (Span 4) */}
          <div className="lg:col-span-4 space-y-3.5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] t-accent-warm font-semibold">Direct Desk &amp; Network</p>
            <ul className="space-y-2 text-[13px] font-sans t-text-secondary">
              <li>
                <a href={SITE_CONFIG.contact.whatsapp.getUrl()} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 hover:t-accent-editorial transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-precious-gold"></span>
                  <span className="group-hover:translate-x-0.5 transition-transform">WhatsApp Direct</span>
                  <span className="text-xs font-mono t-text-muted">({SITE_CONFIG.contact.whatsapp.numberFormatted}) ↗</span>
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.socials.x.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 hover:t-accent-editorial transition-colors">
                  <ExternalLink className="w-3.5 h-3.5 t-accent-warm/70 shrink-0" />
                  <span className="group-hover:translate-x-0.5 transition-transform">{SITE_CONFIG.socials.x.label}</span>
                  <span className="text-xs font-mono t-text-muted">({SITE_CONFIG.socials.x.handle}) ↗</span>
                </a>
              </li>
              <li>
                <a 
                  href={SITE_CONFIG.socials.instagram.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center gap-2 hover:t-accent-editorial transition-colors"
                  title={`${SITE_CONFIG.socials.instagram.displayName} (${SITE_CONFIG.socials.instagram.handle}) on Instagram`}
                >
                  <ExternalLink className="w-3.5 h-3.5 t-accent-warm/70 shrink-0" />
                  <span className="group-hover:translate-x-0.5 transition-transform">{SITE_CONFIG.socials.instagram.label}</span>
                  <span className="text-xs font-mono t-text-muted">({SITE_CONFIG.socials.instagram.handle}) ↗</span>
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.socials.github.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 hover:t-accent-editorial transition-colors">
                  <ExternalLink className="w-3.5 h-3.5 t-accent-warm/70 shrink-0" />
                  <span className="group-hover:translate-x-0.5 transition-transform">{SITE_CONFIG.socials.github.label}</span>
                  <span className="text-xs font-mono t-text-muted">({SITE_CONFIG.socials.github.handle}) ↗</span>
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.socials.youtubeMercyVerse.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 hover:t-accent-editorial transition-colors">
                  <ExternalLink className="w-3.5 h-3.5 t-accent-warm/70 shrink-0" />
                  <span className="group-hover:translate-x-0.5 transition-transform">{SITE_CONFIG.socials.youtubeMercyVerse.label}</span>
                  <span className="text-xs font-mono t-text-muted">(YouTube) ↗</span>
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.socials.youtubeLabs.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 hover:t-accent-editorial transition-colors">
                  <ExternalLink className="w-3.5 h-3.5 t-accent-warm/70 shrink-0" />
                  <span className="group-hover:translate-x-0.5 transition-transform">{SITE_CONFIG.socials.youtubeLabs.label}</span>
                  <span className="text-xs font-mono t-text-muted">(YouTube) ↗</span>
                </a>
              </li>
              <li className="pt-2">
                <button 
                  type="button" 
                  onClick={scrollToTop} 
                  className="group flex items-center gap-1.5 text-xs font-mono t-accent-warm hover:t-accent-editorial transition-colors"
                >
                  <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Return to Summit</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Location Bar (Lines 1244-1258) */}
        <div className="pt-2 sm:pt-3 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono t-text-muted">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-center md:text-left">
            <span>&copy; {new Date().getFullYear()} Tryphen Emurugat &middot; Savannah Atelier.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="t-text-secondary">Nairobi, Kenya</span>
            <span className="w-1.5 h-1.5 rounded-full bg-precious-gold"></span>
            <span className="t-accent-editorial font-medium">Systems Built to Scale</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
