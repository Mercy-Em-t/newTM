import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_PROJECTS } from '../../data/projects';
import { PUBLICATIONS } from '../../data/publications';
import { STUDIO_SERIES } from '../../data/studio';
import { CATALOG_SERVICES } from '../../data/catalog';
import { ANTILIBRARY_BOOKS } from '../../data/antilibrary';
import { useNavigation } from '../../context/NavigationContext';
import { useTheme } from '../../context/ThemeContext';
import type { RouteKey } from '../../context/NavigationContext';
import { 
  Search, 
  X, 
  Briefcase, 
  BookOpen, 
  Video, 
  Sparkles, 
  Terminal, 
  Shield, 
  Sun, 
  Moon, 
  PhoneCall, 
  Lock,
  Layers
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SpotlightItem {
  id: string;
  type: 'publication' | 'studio' | 'library' | 'project' | 'service' | 'labs' | 'action';
  typeLabel: string;
  badgeClass: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  keywords?: string[];
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const { navigate } = useNavigation();
  const { setTheme } = useTheme();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Global keydown handler for '/' and Command+K
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      const isInput = activeTag === 'input' || activeTag === 'textarea' || (document.activeElement as HTMLElement)?.isContentEditable;

      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      } else if (e.key === '/' && !isInput && !isOpen) {
        e.preventDefault();
        setQuery('');
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isOpen, onClose]);

  // Handle keys inside modal
  useEffect(() => {
    if (!isOpen) return;

    const handleModalKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (filteredItems.length > 0 ? (prev + 1) % filteredItems.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (filteredItems.length > 0 ? (prev - 1 + filteredItems.length) % filteredItems.length : 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleModalKeyDown);
    return () => window.removeEventListener('keydown', handleModalKeyDown);
  });

  // Scroll selected item into view
  useEffect(() => {
    if (resultsRef.current) {
      const selectedEl = resultsRef.current.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement;
      if (selectedEl) {
        selectedEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  // Reset selectedIndex on query change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  if (!isOpen) return null;

  const handleNavigate = (route: RouteKey) => {
    onClose();
    navigate(route);
  };

  // Compile all searchable assets (identical to indexA.html lines 7531-7750)
  const allItems: SpotlightItem[] = [
    // Labs IP & Sandboxes
    {
      id: 'labs-portal',
      type: 'labs',
      typeLabel: 'R&D Sandbox',
      badgeClass: 'text-precious-gold bg-precious-gold/10 border-precious-gold/30',
      title: 'Emurugat Labs (R&D Sandbox & Products)',
      subtitle: 'Docker microservices, Nueve Streaming Core, and Rust IAM',
      icon: <Terminal className="w-4 h-4 text-precious-gold shrink-0" />,
      keywords: ['docker', 'sandbox', 'cluster', 'labs', 'devops', 'microservices'],
      action: () => handleNavigate('labs'),
    },
    {
      id: 'labs-nueve',
      type: 'labs',
      typeLabel: 'Software IP',
      badgeClass: 'text-precious-gold bg-precious-gold/10 border-precious-gold/30',
      title: 'Nueve Streaming Core (Low-Latency Video)',
      subtitle: 'SaaS License · Live Demo in Labs',
      icon: <Terminal className="w-4 h-4 text-precious-gold shrink-0" />,
      keywords: ['nueve', 'streaming', 'video', 'hls', 'webrtc', 'low latency', 'broadcast'],
      action: () => handleNavigate('labs'),
    },
    {
      id: 'labs-iam',
      type: 'labs',
      typeLabel: 'Software IP',
      badgeClass: 'text-purple-400 bg-purple-400/10 border-purple-400/30',
      title: 'Identity Access Manager (Rust IAM)',
      subtitle: 'Microservice IP · API Sandbox in Labs',
      icon: <Shield className="w-4 h-4 text-purple-400 shrink-0" />,
      keywords: ['rust', 'iam', 'auth', 'tokens', 'security', 'argon2', 'zero gc'],
      action: () => handleNavigate('labs'),
    },

    // System Actions
    {
      id: 'action-theme-thorn',
      type: 'action',
      typeLabel: 'Setting',
      badgeClass: 'text-precious-gold bg-precious-gold/10 border-precious-gold/30',
      title: 'Switch to Thorn Crown Theme (Dark Velvet Obsidian)',
      subtitle: 'Dark luxury architectural palette',
      icon: <Moon className="w-4 h-4 text-precious-gold shrink-0" />,
      action: () => {
        setTheme('thorn');
        onClose();
      },
    },
    {
      id: 'action-theme-dawn',
      type: 'action',
      typeLabel: 'Setting',
      badgeClass: 'text-opal bg-opal/10 border-opal/30',
      title: 'Switch to Opal Dawn Theme (Light Blush Alabaster)',
      subtitle: 'Light editorial gallery aesthetic',
      icon: <Sun className="w-4 h-4 text-opal shrink-0" />,
      action: () => {
        setTheme('dawn');
        onClose();
      },
    },
    {
      id: 'action-cms',
      type: 'action',
      typeLabel: 'Management',
      badgeClass: 'text-precious-gold bg-precious-gold/10 border-precious-gold/30',
      title: 'Open Editorial CMS Suite (#/cms)',
      subtitle: 'Manage publications, studio videos, and antilibrary catalog',
      icon: <Layers className="w-4 h-4 text-precious-gold shrink-0" />,
      action: () => handleNavigate('cms'),
    },
    {
      id: 'action-portal',
      type: 'action',
      typeLabel: 'Staging Vault',
      badgeClass: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/30',
      title: 'Open Client Staging Portal (#/portal)',
      subtitle: 'Private client milestone telemetry and deliverables gate',
      icon: <Lock className="w-4 h-4 text-indigo-400 shrink-0" />,
      action: () => handleNavigate('portal'),
    },
    {
      id: 'action-commission-calc',
      type: 'action',
      typeLabel: 'Estimation',
      badgeClass: 'text-fae-fruit bg-fae-fruit/10 border-fae-fruit/30',
      title: 'Calculate Scope & Commission Budget',
      subtitle: 'Interactive architectural scope qualifier & pricing intake',
      icon: <Sparkles className="w-4 h-4 text-fae-fruit shrink-0" />,
      action: () => handleNavigate('commission'),
    },
    {
      id: 'action-whatsapp',
      type: 'action',
      typeLabel: 'Consultation',
      badgeClass: 'text-precious-gold bg-precious-gold/10 border-precious-gold/30',
      title: 'Open WhatsApp Direct Desk (+254 710 720 949)',
      subtitle: 'Instant direct desk channel with lead architect',
      icon: <PhoneCall className="w-4 h-4 text-precious-gold shrink-0" />,
      action: () => {
        onClose();
        window.open('https://wa.me/254710720949?text=' + encodeURIComponent('Hello Tryphen, I would like to schedule an architectural consultation.'), '_blank');
      },
    },

    // Publications (Technical Monographs)
    ...PUBLICATIONS.map((p) => ({
      id: `pub-${p.id}`,
      type: 'publication' as const,
      typeLabel: 'Technical Monograph',
      badgeClass: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
      title: p.title,
      subtitle: `${p.ref} · ${p.category} · ${p.readTime}`,
      icon: <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />,
      keywords: [p.ref, p.category, p.lead || '', p.subtitle],
      action: () => handleNavigate('publications'),
    })),

    // Studio Videos
    ...STUDIO_SERIES.map((s) => ({
      id: `studio-${s.id}`,
      type: 'studio' as const,
      typeLabel: 'Video Breakdown',
      badgeClass: 'text-rose-400 bg-rose-400/10 border-rose-400/30',
      title: s.title,
      subtitle: `${s.duration} · ${s.categoryLabel || s.tag}`,
      icon: <Video className="w-4 h-4 text-rose-400 shrink-0" />,
      keywords: [s.tag, s.categoryLabel || '', s.description],
      action: () => handleNavigate('studio'),
    })),

    // Antilibrary Volumes
    ...ANTILIBRARY_BOOKS.map((b) => ({
      id: `lib-${b.id}`,
      type: 'library' as const,
      typeLabel: 'Antilibrary Volume',
      badgeClass: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/30',
      title: `${b.title} — ${b.author}`,
      subtitle: `${b.year ? b.year + ' · ' : ''}${b.categoryLabel}`,
      icon: <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" />,
      keywords: [b.author, b.marginalia, b.categoryLabel, b.architecturalThesis || '', 'kafka', 'nietzsche', 'philosophy'],
      action: () => handleNavigate('library'),
    })),

    // Portfolio Projects (Case Studies)
    ...PORTFOLIO_PROJECTS.map((proj) => ({
      id: `proj-${proj.id}`,
      type: 'project' as const,
      typeLabel: 'Case Study',
      badgeClass: 'text-precious-gold bg-precious-gold/10 border-precious-gold/30',
      title: proj.title,
      subtitle: `${proj.categoryLabel || proj.category} · ${proj.stack.slice(0, 3).join(', ')}`,
      icon: <Briefcase className="w-4 h-4 text-precious-gold shrink-0" />,
      keywords: [...proj.stack, proj.problem, proj.summary, proj.architecture, 'kafka', 'postgres', 'event-driven', 'concurrency'],
      action: () => handleNavigate('work'),
    })),

    // Catalog Services
    ...CATALOG_SERVICES.map((srv) => ({
      id: `srv-${srv.id}`,
      type: 'service' as const,
      typeLabel: 'Service & IP',
      badgeClass: 'text-fae-fruit bg-fae-fruit/10 border-fae-fruit/30',
      title: srv.title,
      subtitle: `${srv.badge} · ${srv.investmentUsd} / ${srv.investmentKes}`,
      icon: <Sparkles className="w-4 h-4 text-fae-fruit shrink-0" />,
      action: () => handleNavigate('catalog'),
    })),
  ];

  const q = query.toLowerCase().trim();
  const filteredItems = allItems.filter((item) => {
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.typeLabel.toLowerCase().includes(q) ||
      item.type.toLowerCase().includes(q) ||
      (item.keywords && item.keywords.some((k) => k.toLowerCase().includes(q)))
    );
  });

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="glass-card w-full max-w-2xl rounded-2xl shadow-2xl border border-precious-gold/40 overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b t-border-subtle flex items-center gap-3 bg-black/40">
          <Search className="w-5 h-5 text-precious-gold shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search 41 assets (publications, videos, books, projects)..."
            className="flex-1 bg-transparent text-sm sm:text-base t-text-primary placeholder:text-lavender-rose/40 focus:outline-none font-mono"
          />
          <kbd className="hidden sm:inline-flex px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-precious-gold">
            ESC
          </kbd>
          <button 
            onClick={onClose} 
            className="p-1 rounded hover:bg-white/10 t-text-muted hover:t-text-primary transition-colors"
            aria-label="Close spotlight"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div 
          ref={resultsRef}
          className="flex-1 overflow-y-auto p-2 sm:p-3 space-y-1 divide-y divide-white/5 font-mono text-xs max-h-[60vh]"
        >
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center space-y-2">
              <p className="font-serif text-lg t-text-primary">
                No results found for &ldquo;<span className="text-precious-gold font-mono">{query}</span>&rdquo;
              </p>
              <p className="text-xs font-mono t-text-secondary">
                Try searching for &ldquo;Rust&rdquo;, &ldquo;Postgres&rdquo;, &ldquo;Kafka&rdquo;, &ldquo;Nietzsche&rdquo;, or &ldquo;Theme&rdquo;.
              </p>
            </div>
          ) : (
            filteredItems.slice(0, 35).map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  data-index={idx}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 rounded-xl cursor-pointer flex items-center justify-between gap-3 transition-all ${
                    isSelected 
                      ? 'bg-precious-gold/15 border border-precious-gold/40 shadow-sm' 
                      : 'hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div className="shrink-0">{item.icon}</div>
                    <div className="space-y-0.5 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full border whitespace-nowrap shrink-0 ${item.badgeClass}`}>
                          {item.typeLabel}
                        </span>
                        <h4 className={`font-serif text-sm sm:text-base truncate font-medium ${isSelected ? 'text-precious-gold' : 't-text-primary'}`}>
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs font-mono t-text-secondary truncate pl-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-1.5 font-mono text-[10px] t-text-muted">
                    {isSelected ? (
                      <span className="text-precious-gold font-bold flex items-center gap-1">
                        <span>↵</span>
                        <span>Open</span>
                      </span>
                    ) : (
                      <span className="opacity-40">Select</span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Hints */}
        <div className="px-4 py-2.5 bg-black/40 border-t t-border-subtle flex items-center justify-between text-[11px] font-mono t-text-muted">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1 py-0.5 rounded bg-white/10 text-[10px]">↑</kbd> <kbd className="px-1 py-0.5 rounded bg-white/10 text-[10px]">↓</kbd> Navigate</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px]">↵</kbd> Select</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px]">ESC</kbd> Close</span>
          </div>
          <span className="text-precious-gold font-semibold tracking-wider">Savannah Spotlight</span>
        </div>
      </div>
    </div>
  );
};
