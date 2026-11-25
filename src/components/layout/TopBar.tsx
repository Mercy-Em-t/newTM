import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import type { RouteKey } from '../../context/NavigationContext';
import { useTheme } from '../../context/ThemeContext';
import { useSidebar } from '../../context/SidebarContext';
import { Search, Sun, Moon, ArrowRight, Menu, X } from 'lucide-react';
import { BrandLogo } from '../shared/BrandLogo';

interface TopBarProps {
  onOpenCmdK?: () => void;
  onToggleRail?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenCmdK }) => {
  const { currentRoute, navigate } = useNavigation();
  const { theme, toggleTheme, setTheme } = useTheme();
  const { isCollapsed } = useSidebar();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const routeTitles: Record<RouteKey, string> = {
    home: 'Systems Architecture & Technical Governance',
    work: 'Portfolio & Flagship Work',
    studio: 'Studio & Broadcast Archive',
    publications: 'Monographs & Architectural Papers',
    catalog: 'Solution Catalog & Interventions',
    commission: 'Commissioning Protocol',
    about: 'Savannah Atelier Practice & Ethos',
    library: 'Personal Antilibrary & Provenance',
    labs: 'Emurugat Labs & Proving Ground',
    portal: 'Client Staging Portal & Verification',
    cms: 'Savannah Atelier Editorial Console',
  };

  const handleMobileNav = (r: RouteKey) => {
    navigate(r);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 glass-nav transition-all">
      {/* Desktop Contextual Header Strip (xl+) */}
      <div className="hidden xl:flex items-center justify-between h-12 px-6 border-b t-border-subtle">
        {/* Left: Dynamic Brand Signature (Zero Rail Toggle Button) */}
        <div className="flex items-center gap-3">
          {/* When sidebar is collapsed: Display full Brand Wordmark & Monogram in header */}
          {isCollapsed ? (
            <button
              type="button"
              onClick={() => navigate('home')}
              className="flex items-center gap-2.5 focus:outline-none text-left group"
              aria-label="Tryphen Emurugat Home"
            >
              <BrandLogo size="sm" />
              <span className="t-accent-warm/70 font-mono text-xs px-0.5 select-none">/</span>
              <span className="font-serif text-xs sm:text-sm t-text-primary italic font-medium tracking-wide truncate max-w-sm">
                {routeTitles[currentRoute]}
              </span>
            </button>
          ) : (
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="uppercase tracking-[0.2em] t-accent-warm font-bold">Savannah Atelier</span>
              <span className="t-accent-warm/70 font-mono select-none">/</span>
              <span className="font-serif text-sm t-text-primary italic font-medium">
                {routeTitles[currentRoute]}
              </span>
            </div>
          )}
        </div>

        {/* Right: Direct WhatsApp Nairobi Desk Channel */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/254710720949?text=Hello%20Tryphen%2C%20I%20am%20inquiring%20about%20systems%20architecture."
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-full inner-panel border t-border-subtle hover:border-precious-gold text-xs font-mono t-text-secondary hover:text-precious-gold transition-colors flex items-center gap-1.5"
            title="Direct WhatsApp Executive Desk"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-precious-gold animate-pulse"></span>
            <span>Nairobi Direct Desk</span>
          </a>
        </div>
      </div>

      {/* Mobile & Tablet Header (< xl) */}
      <div className="xl:hidden max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-3">
          {/* Brand Wordmark Lockup */}
          <button
            onClick={() => handleMobileNav('home')}
            className="group flex items-center focus:outline-none shrink-0 text-left py-1"
            aria-label="Tryphen Emurugat Home"
          >
            <BrandLogo size="md" />
          </button>

          {/* Right Mobile Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Spotlight Search Icon */}
            <button
              onClick={onOpenCmdK}
              type="button"
              className="p-2 rounded-xl inner-panel border t-border-subtle hover:border-precious-gold text-precious-gold transition-colors shrink-0 flex items-center justify-center"
              title="Search Atelier (⌘K)"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Quick 1-Tap Theme Toggle Icon */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-xl inner-panel border t-border-subtle hover:border-precious-gold text-precious-gold transition-colors shrink-0 flex items-center justify-center"
              title="Toggle Theme (Dark / Light)"
              aria-label="Toggle Theme"
            >
              {theme === 'thorn' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Commission CTA (md+) */}
            <button
              type="button"
              onClick={() => handleMobileNav('commission')}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full btn-luminous text-xs font-medium tracking-wide shrink-0"
            >
              <span>Commission</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Drawer Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl inner-panel t-text-primary hover:border-fae-fruit transition-colors shrink-0"
              aria-label="Toggle navigation drawer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-precious-gold" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Mobile Drawer Menu (indexA.html lines 979-1039) */}
      {mobileMenuOpen && (
        <div
          className="xl:hidden border-t border-b t-border-subtle p-4 sm:p-5 space-y-4 shadow-2xl relative z-30"
          style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(24px)' }}
        >
          {/* Aesthetic Theme Switcher */}
          <div className="p-2.5 rounded-2xl inner-panel border t-border-subtle flex items-center justify-between">
            <span className="font-mono text-[10.5px] uppercase tracking-wider t-text-muted">Aesthetic:</span>
            <div className="inline-flex items-center p-0.5 rounded-full bg-black/40 border border-white/10" role="group">
              <button
                type="button"
                onClick={() => setTheme('thorn')}
                className={`px-2.5 py-1 rounded-full text-xs font-mono transition-all ${
                  theme === 'thorn' ? 'bg-precious-gold/20 text-precious-gold font-bold' : 't-text-muted hover:t-text-primary'
                }`}
              >
                Thorn Crown
              </button>
              <button
                type="button"
                onClick={() => setTheme('dawn')}
                className={`px-2.5 py-1 rounded-full text-xs font-mono transition-all ${
                  theme === 'dawn' ? 'bg-precious-gold/20 text-precious-gold font-bold' : 't-text-muted hover:t-text-primary'
                }`}
              >
                Opal Dawn
              </button>
            </div>
          </div>

          {/* Group 1: Atelier & Systems */}
          <div className="space-y-1.5">
            <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] t-text-muted px-2 block">
              Atelier & Systems
            </span>
            <div className="grid grid-cols-2 gap-1.5 font-medium">
              <button
                onClick={() => handleMobileNav('home')}
                className={`py-2.5 px-3 rounded-xl inner-panel flex items-center justify-between text-xs transition-colors ${
                  currentRoute === 'home' ? 'border-precious-gold/50 text-precious-gold font-bold' : 't-text-primary'
                }`}
              >
                <span>Home</span>
                <span className="font-mono text-[9px] t-text-muted">00</span>
              </button>
              <button
                onClick={() => handleMobileNav('work')}
                className={`py-2.5 px-3 rounded-xl inner-panel flex items-center justify-between text-xs transition-colors ${
                  currentRoute === 'work' ? 'border-precious-gold/50 text-precious-gold font-bold' : 't-text-primary'
                }`}
              >
                <span>Flagship Work</span>
                <span className="font-mono text-[9px] text-fae-fruit font-bold">6 Cases</span>
              </button>
              <button
                onClick={() => handleMobileNav('catalog')}
                className={`py-2.5 px-3 rounded-xl inner-panel flex items-center justify-between text-xs transition-colors ${
                  currentRoute === 'catalog' ? 'border-precious-gold/50 text-precious-gold font-bold' : 't-text-primary'
                }`}
              >
                <span>Solution Catalog</span>
                <span className="font-mono text-[9px] text-precious-gold font-bold">Pricing</span>
              </button>
              <button
                onClick={() => handleMobileNav('labs')}
                className={`py-2.5 px-3 rounded-xl inner-panel flex items-center justify-between text-xs transition-colors ${
                  currentRoute === 'labs' ? 'border-precious-gold/50 text-precious-gold font-bold' : 't-text-primary'
                }`}
              >
                <span>Emurugat Labs</span>
                <span className="font-mono text-[9px] text-precious-gold font-bold">R&D</span>
              </button>
            </div>
          </div>

          {/* Group 2: Dispatch & Research */}
          <div className="space-y-1.5 pt-1 border-t border-white/5">
            <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] t-text-muted px-2 block">
              Dispatch & Research
            </span>
            <div className="grid grid-cols-2 gap-1.5 font-medium">
              <button
                onClick={() => handleMobileNav('publications')}
                className={`py-2.5 px-3 rounded-xl inner-panel flex items-center justify-between text-xs transition-colors ${
                  currentRoute === 'publications' ? 'border-precious-gold/50 text-precious-gold font-bold' : 't-text-primary'
                }`}
              >
                <span>Publications</span>
                <span className="font-mono text-[9px] text-opal font-bold">Papers</span>
              </button>
              <button
                onClick={() => handleMobileNav('studio')}
                className={`py-2.5 px-3 rounded-xl inner-panel flex items-center justify-between text-xs transition-colors ${
                  currentRoute === 'studio' ? 'border-precious-gold/50 text-precious-gold font-bold' : 't-text-primary'
                }`}
              >
                <span>Studio Playlists</span>
                <span className="font-mono text-[9px] text-fae-fruit font-bold">Audio</span>
              </button>
              <button
                onClick={() => handleMobileNav('library')}
                className={`py-2.5 px-3 rounded-xl inner-panel flex items-center justify-between text-xs transition-colors ${
                  currentRoute === 'library' ? 'border-precious-gold/50 text-precious-gold font-bold' : 't-text-primary'
                }`}
              >
                <span>The Antilibrary</span>
                <span className="font-mono text-[9px] text-precious-gold font-bold">21 Vols</span>
              </button>
              <button
                onClick={() => handleMobileNav('about')}
                className={`py-2.5 px-3 rounded-xl inner-panel flex items-center justify-between text-xs transition-colors ${
                  currentRoute === 'about' ? 'border-precious-gold/50 text-precious-gold font-bold' : 't-text-primary'
                }`}
              >
                <span>Practice Manifesto</span>
                <span className="font-mono text-[9px] t-text-muted">ISO</span>
              </button>
            </div>
          </div>

          {/* Group 3: Utility Controls & Search */}
          <div className="pt-1 border-t border-white/5 space-y-1.5">
            <button
              type="button"
              onClick={() => handleMobileNav('cms')}
              className={`w-full text-left py-2 px-3 rounded-xl inner-panel flex items-center justify-between font-mono text-xs transition-colors ${
                currentRoute === 'cms' ? 'border-precious-gold/50 text-precious-gold font-bold' : 't-text-primary'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-precious-gold animate-pulse"></span>
                <span>Editorial CMS Suite</span>
              </span>
              <span className="text-[9.5px] text-precious-gold uppercase tracking-wider">Access</span>
            </button>
            <button
              type="button"
              onClick={() => handleMobileNav('portal')}
              className={`w-full text-left py-2 px-3 rounded-xl inner-panel flex items-center justify-between font-mono text-xs transition-colors ${
                currentRoute === 'portal' ? 'border-precious-gold/50 text-precious-gold font-bold' : 't-text-primary'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-precious-gold"></span>
                <span>Client Staging Vault</span>
              </span>
              <span className="text-[9.5px] text-precious-gold uppercase tracking-wider">PIN Gate</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenCmdK) onOpenCmdK();
              }}
              className="w-full text-left py-2 px-3 rounded-xl inner-panel t-text-primary flex items-center justify-between font-mono text-xs"
            >
              <span className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-precious-gold" />
                <span>Spotlight Search</span>
              </span>
              <kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-white/10 text-[9px] text-precious-gold font-bold">⌘K</kbd>
            </button>
          </div>

          {/* Primary Commission CTA */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => handleMobileNav('commission')}
              className="w-full flex justify-center items-center gap-2 px-5 py-3 rounded-full btn-luminous text-xs font-mono uppercase tracking-wider shadow-lg"
            >
              <span>Commission Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
