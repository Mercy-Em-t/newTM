import React, { useEffect } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { useTheme } from '../../context/ThemeContext';
import { useSidebar } from '../../context/SidebarContext';
import { BrandLogo } from '../shared/BrandLogo';
import { 
  Briefcase, 
  Sparkles, 
  FlaskConical, 
  FileText, 
  Film, 
  Library, 
  ShieldCheck, 
  PenTool, 
  Search, 
  ArrowRight,
  PanelLeftClose,
  PanelLeftOpen,
  Sun,
  Moon
} from 'lucide-react';

interface SidebarProps {
  onOpenCmdK?: () => void;
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  badge?: string;
  badgeColor?: string;
  isActive: boolean;
  isCollapsed: boolean;
  pulse?: boolean;
  onClick: () => void;
}

const SidebarNavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  badge,
  badgeColor = 't-text-muted',
  isActive,
  isCollapsed,
  pulse,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative w-full flex items-center rounded-xl text-xs font-medium transition-all ${
        isCollapsed ? 'h-10 justify-center' : 'px-3 py-2 justify-between'
      } ${
        isActive
          ? 'bg-precious-gold/15 text-precious-gold font-semibold border border-precious-gold/30 shadow-[0_0_12px_rgba(244,185,86,0.15)]'
          : 't-text-secondary hover:t-text-primary hover:bg-white/5'
      }`}
      title={isCollapsed ? label : undefined}
    >
      {/* Active Left Indicator Bar */}
      {isCollapsed && isActive && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r bg-precious-gold shadow-[0_0_8px_rgba(244,185,86,0.8)]" />
      )}

      {/* Icon + Label */}
      <span className="flex items-center gap-2.5 min-w-0">
        <span className="shrink-0 transition-transform group-hover:scale-110">{icon}</span>
        {!isCollapsed && <span className="truncate">{label}</span>}
      </span>

      {/* Expanded Badge or Pulse */}
      {!isCollapsed && (
        <span className="flex items-center gap-1.5 shrink-0">
          {badge && <span className={`font-mono text-[10px] ${badgeColor}`}>{badge}</span>}
          {pulse && <span className="w-2 h-2 rounded-full bg-precious-gold animate-pulse" />}
        </span>
      )}

      {/* Floating HUD Tooltip when Collapsed */}
      {isCollapsed && (
        <span className="absolute left-full ml-3 px-2.5 py-1.5 rounded-xl border t-border-subtle inner-panel backdrop-blur-md shadow-2xl text-[11px] font-mono t-text-primary whitespace-nowrap pointer-events-none opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 z-50 flex items-center gap-2">
          <span>{label}</span>
          {badge && (
            <span className={`text-[9px] px-1.5 py-0.5 rounded-md inner-panel font-semibold ${badgeColor}`}>
              {badge}
            </span>
          )}
        </span>
      )}
    </button>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ onOpenCmdK }) => {
  const { currentRoute, navigate } = useNavigation();
  const { theme, toggleTheme, setTheme } = useTheme();
  const { isCollapsed, toggleCollapse } = useSidebar();

  // Keyboard shortcut: "[" to toggle sidebar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '[' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        toggleCollapse();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleCollapse]);

  return (
    <aside
      id="desktopSidebar"
      className={`hidden xl:flex fixed top-0 left-0 bottom-0 flex-col justify-between z-40 border-r t-border-subtle transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-72'
      }`}
      style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(28px)' }}
    >
      {/* Top Section: Brand Identity & Search */}
      <div className={`p-4 sm:p-5 border-b t-border-subtle shrink-0 ${isCollapsed ? 'flex flex-col items-center' : ''}`}>
        <div className={`flex items-center justify-between gap-3 ${isCollapsed ? 'flex-col justify-center w-full' : ''}`}>
          <button
            onClick={() => navigate('home')}
            className={`group relative flex items-center gap-3 focus:outline-none min-w-0 text-left ${isCollapsed ? 'justify-center' : ''}`}
            aria-label="Tryphen Emurugat Home"
          >
            {isCollapsed ? (
              <>
                <span className="w-10 h-10 rounded-xl flex items-center justify-center inner-panel border border-precious-gold/30 group-hover:border-precious-gold transition-colors shrink-0 bg-black/40 shadow-inner">
                  <svg className="w-6 h-6" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="56" height="56" rx="12" fill="#110517" stroke="rgba(244,185,86,0.3)" strokeWidth="1.8"/>
                    <rect x="8" y="8" width="48" height="48" rx="8" stroke="rgba(217,115,82,0.2)" strokeWidth="1" strokeDasharray="2 2"/>
                    <path d="M16 19H48" stroke="#F4B956" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M32 19V47" stroke="#F4B956" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M22 28H44" stroke="#D97352" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M22 28V43H44" stroke="#D97352" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="16" cy="19" r="2.5" fill="#F4B956"/>
                    <circle cx="48" cy="19" r="2.5" fill="#F4B956"/>
                  </svg>
                </span>
                <span className="absolute left-full ml-3 px-2.5 py-1.5 rounded-xl border border-precious-gold/30 bg-[#16061E]/95 backdrop-blur-md shadow-2xl text-[11px] font-mono text-precious-gold whitespace-nowrap pointer-events-none opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 z-50">
                  Tryphen Emurugat · Home
                </span>
              </>
            ) : (
              <BrandLogo size="md" />
            )}
          </button>

          {/* Collapse / Expand Toggle Button */}
          <button
            type="button"
            onClick={toggleCollapse}
            className={`group relative p-1.5 rounded-xl inner-panel border t-border-subtle hover:border-precious-gold text-precious-gold transition-colors shrink-0 ${
              isCollapsed ? 'mt-2.5 w-full h-9 flex items-center justify-center' : ''
            }`}
            title={isCollapsed ? 'Expand Sidebar (Shortcut: [ or Ctrl+B)' : 'Collapse Sidebar (Shortcut: [ or Ctrl+B)'}
          >
            {isCollapsed ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-3.5 h-3.5" />}
            {isCollapsed && (
              <span className="absolute left-full ml-3 px-2.5 py-1 rounded-xl border t-border-subtle inner-panel backdrop-blur-md shadow-2xl text-[11px] font-mono t-text-primary whitespace-nowrap pointer-events-none opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 z-50">
                Expand Sidebar <kbd className="ml-1 px-1 py-0.2 rounded inner-panel text-[9px] t-text-secondary">[</kbd>
              </span>
            )}
          </button>
        </div>

        {/* Search Bar / Cmd+K Trigger */}
        <button
          type="button"
          onClick={onOpenCmdK}
          className={`w-full mt-2.5 flex items-center rounded-xl inner-panel border t-border-subtle hover:border-precious-gold text-xs font-mono t-text-muted hover:t-text-primary transition-all group relative ${
            isCollapsed ? 'h-9 justify-center' : 'px-3 py-2 justify-between'
          }`}
          title="Search all assets (Cmd+K)"
        >
          <span className="flex items-center gap-2">
            <Search className="w-4 h-4 text-precious-gold group-hover:scale-110 transition-transform" />
            {!isCollapsed && <span>Search atelier...</span>}
          </span>
          {!isCollapsed && (
            <kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-white/10 text-[10px] text-precious-gold font-bold">⌘K</kbd>
          )}
          {isCollapsed && (
            <span className="absolute left-full ml-3 px-2.5 py-1 rounded-xl border t-border-subtle inner-panel backdrop-blur-md shadow-2xl text-[11px] font-mono t-text-primary whitespace-nowrap pointer-events-none opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 z-50 flex items-center gap-1.5">
              <span>Search</span>
              <kbd className="px-1 py-0.2 rounded inner-panel text-[9px] t-accent-editorial font-bold">⌘K</kbd>
            </span>
          )}
        </button>
      </div>

      {/* Middle Section: Grouped Architectural Navigation */}
      <nav
        className={`flex-1 px-2.5 py-3 space-y-4 ${
          isCollapsed ? 'overflow-visible' : 'overflow-y-auto luxury-scrollbar'
        }`}
        aria-label="Desktop Atelier Navigation"
      >
        {/* Group 1: Atelier & Architecture */}
        <div className="space-y-1">
          {!isCollapsed && (
            <div className="px-3 pb-1 font-mono text-[9px] uppercase tracking-[0.24em] t-text-muted font-bold">
              Atelier & Architecture
            </div>
          )}
          
          <SidebarNavItem
            icon={<Briefcase className="w-4 h-4 text-fae-fruit" />}
            label="Flagship Work"
            badge="6 Cases"
            isActive={currentRoute === 'work'}
            isCollapsed={isCollapsed}
            onClick={() => navigate('work')}
          />

          <SidebarNavItem
            icon={<Sparkles className="w-4 h-4 text-precious-gold" />}
            label="Solution Catalog"
            badge="Pricing"
            badgeColor="text-precious-gold"
            isActive={currentRoute === 'catalog'}
            isCollapsed={isCollapsed}
            onClick={() => navigate('catalog')}
          />

          <SidebarNavItem
            icon={<FlaskConical className="w-4 h-4 text-opal" />}
            label="Emurugat Labs"
            badge="R&D"
            badgeColor="text-precious-gold"
            isActive={currentRoute === 'labs'}
            isCollapsed={isCollapsed}
            onClick={() => navigate('labs')}
          />
        </div>

        {/* Group 2: Dispatch & Media */}
        <div className="space-y-1">
          {!isCollapsed && (
            <div className="px-3 pb-1 font-mono text-[9px] uppercase tracking-[0.24em] t-text-muted font-bold">
              Dispatch & Media
            </div>
          )}

          <SidebarNavItem
            icon={<FileText className="w-4 h-4 text-opal" />}
            label="Publications"
            badge="Papers"
            isActive={currentRoute === 'publications'}
            isCollapsed={isCollapsed}
            onClick={() => navigate('publications')}
          />

          <SidebarNavItem
            icon={<Film className="w-4 h-4 text-fae-fruit" />}
            label="Studio / Playlists"
            badge="MercyVerse"
            badgeColor="t-accent-warm"
            isActive={currentRoute === 'studio'}
            isCollapsed={isCollapsed}
            onClick={() => navigate('studio')}
          />

          <SidebarNavItem
            icon={<Library className="w-4 h-4 text-precious-gold" />}
            label="Antilibrary"
            badge="21 Vols"
            badgeColor="text-precious-gold"
            isActive={currentRoute === 'library'}
            isCollapsed={isCollapsed}
            onClick={() => navigate('library')}
          />
        </div>

        {/* Group 3: Governance & Controls */}
        <div className="space-y-1">
          {!isCollapsed && (
            <div className="px-3 pb-1 font-mono text-[9px] uppercase tracking-[0.24em] t-text-muted font-bold">
              Governance & Controls
            </div>
          )}

          <SidebarNavItem
            icon={<ShieldCheck className="w-4 h-4 text-opal" />}
            label="Practice & Manifesto"
            isActive={currentRoute === 'about'}
            isCollapsed={isCollapsed}
            onClick={() => navigate('about')}
          />

          <SidebarNavItem
            icon={<PenTool className="w-4 h-4 text-precious-gold" />}
            label="Editorial CMS"
            pulse={true}
            isActive={currentRoute === 'cms'}
            isCollapsed={isCollapsed}
            onClick={() => navigate('cms')}
          />
        </div>
      </nav>

      {/* Bottom Section: Theme Switcher & Commission CTA */}
      <div className="p-3 sm:p-4 border-t t-border-subtle space-y-2.5 bg-black/20 shrink-0">
        {!isCollapsed ? (
          /* Expanded Dual Theme Switcher */
          <div className="flex items-center justify-between p-1 rounded-full inner-panel border border-white/10" role="group" aria-label="Theme Switcher">
            <button
              type="button"
              onClick={() => setTheme('thorn')}
              className={`flex-1 py-1.5 rounded-full text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all ${
                theme === 'thorn'
                  ? 'bg-white/15 text-precious-gold shadow'
                  : 't-text-muted hover:t-text-primary'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>Thorn</span>
            </button>
            <button
              type="button"
              onClick={() => setTheme('dawn')}
              className={`flex-1 py-1.5 rounded-full text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all ${
                theme === 'dawn'
                  ? 'bg-white/15 text-opal shadow'
                  : 't-text-muted hover:t-text-primary'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Dawn</span>
            </button>
          </div>
        ) : (
          /* Collapsed Single Theme Switcher Button with Floating Tooltip */
          <button
            type="button"
            onClick={toggleTheme}
            className="group relative w-full h-10 rounded-xl inner-panel border t-border-subtle hover:border-precious-gold flex justify-center items-center text-precious-gold transition-colors"
          >
            {theme === 'thorn' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            <span className="absolute left-full ml-3 px-2.5 py-1.5 rounded-xl border t-border-subtle inner-panel backdrop-blur-md shadow-2xl text-[11px] font-mono t-text-primary whitespace-nowrap pointer-events-none opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 z-50">
              Switch Theme ({theme === 'thorn' ? 'Dawn Light' : 'Thorn Dark'})
            </span>
          </button>
        )}

        {/* Commissioning Quick Button */}
        <button
          onClick={() => navigate('commission')}
          className={`group relative w-full rounded-xl btn-luminous text-xs font-mono font-semibold uppercase tracking-wider flex items-center transition-all ${
            isCollapsed ? 'h-10 justify-center' : 'px-4 py-2.5 justify-between'
          }`}
          title="Commission an Intervention"
        >
          {!isCollapsed ? (
            <>
              <span>Commission</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </>
          ) : (
            <>
              <ArrowRight className="w-4 h-4" />
              <span className="absolute left-full ml-3 px-2.5 py-1.5 rounded-xl border t-border-subtle inner-panel backdrop-blur-md shadow-2xl text-[11px] font-mono t-text-primary whitespace-nowrap pointer-events-none opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 z-50">
                Commission Intervention ↗
              </span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
};