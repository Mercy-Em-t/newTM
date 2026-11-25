import React, { useState, useMemo } from 'react';
import { CATALOG_CATEGORIES } from '../../data/catalog';
import { useNavigation } from '../../context/NavigationContext';
import { useCurrency } from '../../hooks/useCurrency';
import { GlassCard } from '../ui/GlassCard';
import {
  Code,
  Cpu,
  Database,
  Layers,
  ShieldCheck,
  Lock,
  Server,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Calculator,
  MessageSquare,
  Flame,
  CheckCircle2
} from 'lucide-react';

export const CatalogView: React.FC = () => {
  const { navigate } = useNavigation();
  const { currency, setCurrency } = useCurrency();

  // Drawer expansion state: default all 4 categories open
  const [openDrawers, setOpenDrawers] = useState<Record<string, boolean>>({
    audits: true,
    ip: true,
    backends: true,
    infrastructure: true,
  });

  // Active category filter tab: 'all' or specific category id
  const [activeTab, setActiveTab] = useState<string>('all');

  const toggleDrawer = (categoryId: string) => {
    setOpenDrawers(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const expandAll = () => {
    setOpenDrawers({
      audits: true,
      ip: true,
      backends: true,
      infrastructure: true,
    });
  };

  const collapseAll = () => {
    setOpenDrawers({
      audits: false,
      ip: false,
      backends: false,
      infrastructure: false,
    });
  };

  const allOpen = Object.values(openDrawers).every(Boolean);

  const handleSelectService = (serviceKey?: string) => {
    if (serviceKey) {
      sessionStorage.setItem('selectedServiceKey', serviceKey);
    }
    navigate('commission');
  };

  const itemIcons: Record<string, React.ReactNode> = {
    'legacy-rescue': <Code className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />,
    'concurrency-audit': <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />,
    'query-optimization': <Database className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />,
    'nueve-streaming': <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-precious-gold" />,
    'order-guard-whatsapp': <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-precious-gold" />,
    'iam-rust': <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />,
    'fsm-engine': <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />,
    'transactional-outbox': <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />,
    'inventory-locking': <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />,
    'cicd-design': <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-precious-gold" />,
    'server-hardening': <Server className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />,
    'staging-gateway': <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />,
  };

  const filteredCategories = useMemo(() => {
    if (activeTab === 'all') return CATALOG_CATEGORIES;
    return CATALOG_CATEGORIES.filter(c => c.id === activeTab);
  }, [activeTab]);

  const totalSolutionsCount = useMemo(() => {
    return CATALOG_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
  }, []);

  return (
    <section className="view-enter py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto space-y-12 sm:space-y-16 transition-all duration-300">

        {/* Catalog Masthead */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 sm:space-y-4">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] t-accent-warm block font-semibold">
            STANDALONE INTERVENTIONS &amp; LABS IP
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light t-text-primary tracking-tight">
            Solution <span className="italic t-accent-editorial font-medium">Catalog</span>
          </h1>
          <p className="text-xs sm:text-sm lg:text-base t-text-secondary leading-relaxed font-light text-pretty max-w-xl mx-auto">
            Browse our categorized standalone engineering services, off-the-shelf software products, and sovereign architectures available through Emurugat Labs.
          </p>

          {/* Controls Bar: Currency Switcher & Expand/Collapse Controller */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 pt-2">
            {/* Currency Toggle Switcher */}
            <div className="inline-flex items-center p-0.5 sm:p-1 rounded-full inner-panel text-[11px] sm:text-xs font-mono border t-border-subtle shadow-sm">
              <span className="px-2 py-0.5 text-[9.5px] sm:text-[10px] uppercase tracking-wider t-text-muted">
                Currency:
              </span>
              <button
                type="button"
                onClick={() => setCurrency('KES')}
                className={`px-2.5 sm:px-3 py-1 rounded-full text-[10.5px] sm:text-[11px] font-semibold transition-all ${
                  currency === 'KES'
                    ? 'bg-gradient-to-r from-[#6B0733] to-[#6850AD] text-[#FAF4F7] shadow-sm'
                    : 't-text-secondary hover:t-text-primary'
                }`}
              >
                KES
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-2.5 sm:px-3 py-1 rounded-full text-[10.5px] sm:text-[11px] font-semibold transition-all ${
                  currency === 'USD'
                    ? 'bg-gradient-to-r from-[#6B0733] to-[#6850AD] text-[#FAF4F7] shadow-sm'
                    : 't-text-secondary hover:t-text-primary'
                }`}
              >
                USD ($)
              </button>
            </div>

            {/* Expand / Collapse All Drawer Controller */}
            <button
              type="button"
              onClick={allOpen ? collapseAll : expandAll}
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full inner-panel border t-border-subtle hover:border-precious-gold/40 text-[10.5px] sm:text-[11px] font-mono t-text-secondary hover:t-text-primary transition-all shadow-sm shrink-0"
            >
              {allOpen ? <ChevronUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-precious-gold" /> : <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-precious-gold" />}
              <span>{allOpen ? 'Collapse All' : 'Expand All'}</span>
            </button>
          </div>
        </div>

        {/* Category Quick Filter Pills: Unconstrained Width Container */}
        <div className="w-full max-w-6xl 2xl:max-w-7xl mx-auto -mt-4 sm:-mt-6">
          <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1 px-4 justify-start lg:justify-center">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap shrink-0 transition-all ${
                activeTab === 'all'
                  ? 'btn-luminous !text-[#1A0822] font-bold shadow-md'
                  : 'inner-panel border t-border-subtle hover:border-precious-gold/40 t-text-secondary hover:t-text-primary'
              }`}
            >
              All ({totalSolutionsCount})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('audits')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap shrink-0 transition-all ${
                activeTab === 'audits'
                  ? 'btn-luminous !text-[#1A0822] font-bold shadow-md'
                  : 'inner-panel border t-border-subtle hover:border-precious-gold/40 t-text-secondary hover:t-text-primary'
              }`}
            >
              01 · Audits &amp; Invariants (3)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('ip')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap shrink-0 transition-all ${
                activeTab === 'ip'
                  ? 'btn-luminous !text-[#1A0822] font-bold shadow-md'
                  : 'inner-panel border t-border-subtle hover:border-precious-gold/40 t-text-secondary hover:t-text-primary'
              }`}
            >
              02 · Sovereign IP (3)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('backends')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap shrink-0 transition-all ${
                activeTab === 'backends'
                  ? 'btn-luminous !text-[#1A0822] font-bold shadow-md'
                  : 'inner-panel border t-border-subtle hover:border-precious-gold/40 t-text-secondary hover:t-text-primary'
              }`}
            >
              03 · Concurrency Engines (3)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('infrastructure')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap shrink-0 transition-all ${
                activeTab === 'infrastructure'
                  ? 'btn-luminous !text-[#1A0822] font-bold shadow-md'
                  : 'inner-panel border t-border-subtle hover:border-precious-gold/40 t-text-secondary hover:t-text-primary'
              }`}
            >
              04 · Sovereign DevOps (3)
            </button>
          </div>
        </div>

        {/* Categorized Solution Drawers */}
        <div className="space-y-6 sm:space-y-10">
          {filteredCategories.map((category) => {
            const isOpen = openDrawers[category.id] ?? true;

            return (
              <div
                key={category.id}
                className="glass-card rounded-2xl sm:rounded-3xl border t-border-subtle overflow-hidden transition-all duration-300 shadow-lg"
              >
                {/* Category Drawer Header / Trigger */}
                <button
                  type="button"
                  onClick={() => toggleDrawer(category.id)}
                  className="w-full p-4 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 text-left hover:bg-white/[0.02] transition-colors group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1 sm:space-y-1.5 flex-1">
                    <div className="flex items-center justify-between md:justify-start gap-2 sm:gap-3">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="font-mono text-xs font-bold px-2 sm:px-2.5 py-0.5 rounded-full bg-precious-gold/15 text-precious-gold border border-precious-gold/30">
                          {category.index}
                        </span>
                        <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] t-accent-warm font-semibold">
                          {category.tagline}
                        </span>
                      </div>
                      {/* Mobile Compact Counter & Chevron */}
                      <div className="flex items-center gap-2 md:hidden">
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded-full inner-panel border t-border-subtle t-text-muted font-medium">
                          {category.items.length}
                        </span>
                        <span className="w-6 h-6 rounded-full inner-panel border t-border-subtle flex items-center justify-center text-precious-gold">
                          {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </span>
                      </div>
                    </div>
                    <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold t-text-primary group-hover:t-accent-editorial transition-colors">
                      {category.title}
                    </h2>
                    <p className="text-xs sm:text-sm t-text-secondary font-light max-w-3xl leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <div className="hidden md:flex items-center gap-3 shrink-0 self-end md:self-center">
                    <span className="font-mono text-xs px-3 py-1 rounded-full inner-panel border t-border-subtle t-text-muted font-medium">
                      {category.items.length} {category.items.length === 1 ? 'Solution' : 'Solutions'}
                    </span>
                    <span className="w-8 h-8 rounded-full inner-panel border t-border-subtle group-hover:border-precious-gold flex items-center justify-center text-precious-gold transition-transform duration-300">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </div>
                </button>

                {/* Collapsible Drawer Body */}
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-7 sm:pb-8 pt-1 sm:pt-2 border-t t-border-subtle">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-3 sm:pt-4">
                      {category.items.map((item) => (
                        <GlassCard
                          key={item.id}
                          className={`rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between border-t-4 ${item.borderColor} hover:border-precious-gold transition-all ${
                            item.isBestseller ? 'ring-1 ring-precious-gold/40 shadow-xl' : ''
                          }`}
                        >
                          <div className="space-y-3">
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className={`font-mono text-[10px] uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full theme-badge ${item.badgeColor}`}>
                                  {item.badge}
                                </span>
                                {item.isBestseller && (
                                  <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-sm shrink-0">
                                    <Flame className="w-2.5 h-2.5 fill-stone-950 text-stone-950" />
                                    <span>{item.bestsellerLabel || 'Bestseller'}</span>
                                  </span>
                                )}
                              </div>
                              {itemIcons[item.id]}
                            </div>

                            {'subBadge' in item && item.subBadge && (
                              <span className="inline-block font-mono text-[9.5px] uppercase tracking-wider px-2 py-0.5 rounded-md inner-panel text-precious-gold">
                                {item.subBadge}
                              </span>
                            )}

                            <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-semibold t-text-primary">
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm t-text-secondary leading-relaxed font-light">
                              {item.description}
                            </p>
                          </div>

                          {/* Item Footer / Action CTA */}
                          <div className="pt-4 sm:pt-6 mt-4 border-t t-border-subtle flex items-center justify-between gap-2 sm:gap-3">
                            {'investmentUsd' in item && item.investmentUsd ? (
                              <>
                                <div>
                                  <span className="font-mono text-[8.5px] sm:text-[9px] uppercase tracking-wider t-text-muted block">
                                    INVESTMENT
                                  </span>
                                  <span className="font-mono text-xs sm:text-sm font-bold t-accent-editorial">
                                    {currency === 'USD' ? item.investmentUsd : item.investmentKes}
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => handleSelectService('serviceKey' in item ? item.serviceKey : undefined)}
                                  className="px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full btn-luminous text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-center shrink-0"
                                >
                                  {item.actionText || 'Commission →'}
                                </button>
                              </>
                            ) : (
                              <>
                                <div>
                                  <span className="font-mono text-[8.5px] sm:text-[9px] uppercase tracking-wider t-text-muted block">
                                    LICENSING
                                  </span>
                                  <span className="font-mono text-xs sm:text-sm font-bold t-accent-editorial">
                                    Enterprise IP
                                  </span>
                                </div>
                                <a
                                  href={`https://wa.me/254710720949?text=${encodeURIComponent(
                                    'inquiryText' in item && item.inquiryText ? item.inquiryText : `Hello Tryphen, I would like to inquire about licensing ${item.title}.`
                                  )}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full inner-panel border border-precious-gold/30 hover:border-precious-gold text-precious-gold text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-semibold inline-flex items-center gap-1 shrink-0 transition-colors shadow-sm"
                                >
                                  <span>Inquire ↗</span>
                                </a>
                              </>
                            )}
                          </div>
                        </GlassCard>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dedicated "Is It Custom?" Diagnostic Determination Section */}
        <div className="glass-card relative rounded-2xl sm:rounded-3xl p-5 sm:p-10 border t-border-subtle hover:border-precious-gold/40 shadow-2xl overflow-hidden transition-all duration-300">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[100px] pointer-events-none opacity-20"
            style={{ background: 'var(--aura-gold, rgba(244,185,86,0.2))' }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-[100px] pointer-events-none opacity-25"
            style={{ background: 'var(--aura-crimson, rgba(107,7,51,0.3))' }}
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-6 sm:space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 border-b t-border-subtle pb-5 sm:pb-6">
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-precious-gold" />
                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] t-accent-warm font-bold">
                    BESPOKE ENGINEERING DIAGNOSTIC
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl font-light t-text-primary tracking-tight">
                  Is It <span className="italic t-accent-editorial font-medium">Custom?</span> How We Determine Your Scope
                </h2>
              </div>
              <p className="text-xs sm:text-sm t-text-secondary font-light max-w-md text-pretty">
                Off-the-shelf software and generic SaaS work for standard forms, but they break under high-concurrency race conditions, complex domain state machines, and multi-tenant data isolation.
              </p>
            </div>

            {/* 3 Determination Criteria Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5">
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl inner-panel border t-border-subtle space-y-2 hover:border-precious-gold/30 transition-all shadow-sm">
                <div className="flex items-center gap-2 font-mono text-xs text-amber-500 font-semibold">
                  <span className="w-5 h-5 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-[10px]">01</span>
                  <span>Concurrency &amp; Locks</span>
                </div>
                <h3 className="font-serif text-sm sm:text-base t-text-primary font-semibold">
                  Race-Condition Vulnerability
                </h3>
                <p className="text-xs t-text-secondary leading-relaxed font-light">
                  Do multiple users, background workers, or payment webhooks mutate the same record simultaneously? If yes, standard ORMs will cause silent data corruption without row-level PostgreSQL locks.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl inner-panel border t-border-subtle space-y-2 hover:border-precious-gold/30 transition-all shadow-sm">
                <div className="flex items-center gap-2 font-mono text-xs text-purple-500 font-semibold">
                  <span className="w-5 h-5 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-[10px]">02</span>
                  <span>Domain Complexity</span>
                </div>
                <h3 className="font-serif text-sm sm:text-base t-text-primary font-semibold">
                  Strict Finite-State Invariants
                </h3>
                <p className="text-xs t-text-secondary leading-relaxed font-light">
                  Does your operational workflow have non-linear lifecycle states (e.g. rain delays, multi-party approvals, automated escalations)? If procedural code handles this, bugs will multiply without a formal FSM.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl inner-panel border t-border-subtle space-y-2 hover:border-precious-gold/30 transition-all shadow-sm">
                <div className="flex items-center gap-2 font-mono text-xs text-opal font-semibold">
                  <span className="w-5 h-5 rounded-full bg-opal/15 border border-opal/30 flex items-center justify-center text-[10px]">03</span>
                  <span>Sovereignty &amp; Control</span>
                </div>
                <h3 className="font-serif text-sm sm:text-base t-text-primary font-semibold">
                  Zero Vendor Lock-In
                </h3>
                <p className="text-xs t-text-secondary leading-relaxed font-light">
                  Must your application run self-hosted on bare-metal or private cloud, with zero external CDN tax and 100% intellectual property ownership? If yes, off-the-shelf SaaS is an architectural trap.
                </p>
              </div>
            </div>

            {/* Diagnostic Action Banner */}
            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 inner-panel p-4 sm:p-6 rounded-xl sm:rounded-2xl border t-border-subtle">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-serif text-base sm:text-lg t-text-primary font-semibold">
                  Ready to Determine Your Exact Scope &amp; Investment?
                </h4>
                <p className="text-xs t-text-secondary font-light">
                  Use our interactive Commission Scope Calculator or schedule an architectural triage with Tryphen Emurugat directly.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => navigate('commission')}
                  className="w-full sm:w-auto justify-center px-4 sm:px-5 py-2.5 rounded-full btn-luminous text-xs font-mono uppercase tracking-wider font-bold inline-flex items-center gap-2 shadow-lg text-center"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Calculate Scope &amp; Budget &rarr;</span>
                </button>
                <a
                  href="https://wa.me/254710720949?text=Hello%20Tryphen%2C%20I%20have%20a%20custom%20systems%20architecture%20problem%20and%20would%20like%20to%20determine%20the%20scope."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto justify-center px-4 sm:px-5 py-2.5 rounded-full inner-panel border border-precious-gold/30 hover:border-precious-gold text-precious-gold text-xs font-mono uppercase tracking-wider font-semibold inline-flex items-center gap-1.5 transition-colors shadow-sm text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Direct WhatsApp Desk &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
