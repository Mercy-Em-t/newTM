import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { SITE_CONFIG } from '../../config/siteConfig';
import { 
  Shield, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  Send, 
  MapPin, 
  Compass, 
  Sparkles
} from 'lucide-react';

export const AboutView: React.FC = () => {
  const { navigate } = useNavigation();

  const principles = [
    {
      num: '01',
      title: 'Deterministic Over Optimistic',
      desc: 'Optimistic concurrency breaks under real-world burst pressure. We resolve race conditions at the database kernel with strict row-level locks, guaranteed idempotency, and explicit finite state machines.'
    },
    {
      num: '02',
      title: 'The Principle of Locality',
      desc: 'Do not distribute what you can isolate. Before introducing distributed queues, Kafka clusters, or microservice meshes, exhaust the power of relational database engines and bounded contexts.'
    },
    {
      num: '03',
      title: 'Relational Invariants Over Ephemeral State',
      desc: 'Application code is transient; business state is permanent. Database schemas must enforce relational invariants through CHECK constraints, foreign keys, and normalized structures.'
    },
    {
      num: '04',
      title: 'Operational Sovereignty',
      desc: 'Avoid cloud vendor lock-in that rents your core business logic back to you at exorbitant margins. We design architectures that can run cleanly on self-hosted Linux servers or any commodity cloud.'
    }
  ];

  const operatingRules = [
    {
      num: '01',
      title: 'Zero Corporate Theater',
      desc: 'I do not write 80-page slide decks to justify a sprint. You receive formal schema contracts, verified code, and measurable performance telemetry.'
    },
    {
      num: '02',
      title: 'Direct Desk Access',
      desc: 'When you commission Savannah Atelier, you collaborate directly with me. No account managers, no junior proxy layers, no communication loss.'
    },
    {
      num: '03',
      title: 'Built to Outlive the Contract',
      desc: 'Every system is normalized in 3NF and backed by deterministic invariant tests, ensuring your internal team can maintain it without 2 AM panic calls.'
    }
  ];

  const careerMilestones = [
    {
      role: 'Principal Systems Architect & Founder',
      org: 'Savannah Atelier',
      period: '2024 — Present',
      focus: 'High-concurrency transactional commerce, sovereign Linux deployments, and formal architectural simulation.'
    },
    {
      role: 'Lead Systems Architect',
      org: 'Perpetual & Order Guard',
      period: '2025 — Present',
      focus: 'Engineered zero-overselling row-level locking engine for conversational WhatsApp commerce on PostgreSQL & Redis.'
    },
    {
      role: 'Core Engine Architect',
      org: 'Tennissuite Engine',
      period: '2024 — 2025',
      focus: 'Built object-oriented tournament match scheduling engine with dynamic court recalculation under rain delays.'
    },
    {
      role: 'Fleet Infrastructure Engineer',
      org: 'Smart Matatu Dispatch',
      period: '2024',
      focus: 'Architected real-time commuter vehicle dispatch console with automated Google Sheets compliance audit trails.'
    }
  ];

  return (
    <section className="view-enter pt-4 pb-14 sm:pt-10 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10 sm:space-y-14 lg:space-y-20">
        
        {/* Masthead */}
        <div className="border-b t-border-subtle pb-4 sm:pb-6">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] t-accent-warm block mb-1.5 sm:mb-2">
            PRACTICE, ETHOS &amp; GOVERNANCE
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight t-text-primary">
            Architecture Before <span className="italic t-accent-editorial">Code</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base t-text-secondary leading-relaxed max-w-3xl text-pretty mt-2 sm:mt-2.5 font-light">
            Savannah Atelier operates on the conviction that high-performance software is not born in frantic hacking sprints, but in disciplined architectural simulation and formal mathematical invariants.
          </p>
        </div>

        {/* Act 1: Lead Architect Bio (Authoritative, No Premature Sales Button) */}
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6">
          <div className="border-b t-border-subtle pb-5 sm:pb-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-precious-gold font-bold">
                PRINCIPAL SYSTEMS ARCHITECT
              </span>
              <span className="text-xs t-text-muted">&middot;</span>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] t-text-secondary">
                <MapPin className="w-3 h-3 text-fae-fruit" />
                <span>Nairobi, Kenya</span>
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold t-text-primary">
              Eng. Tryphen Emurugat
            </h2>
            
            <p className="font-mono text-xs sm:text-sm t-accent-warm mt-1">
              Savannah Atelier &middot; Systems &amp; Technical Governance
            </p>
          </div>

          <div className="space-y-4 text-sm sm:text-base t-text-secondary leading-relaxed font-light">
            <p>
              Based in Nairobi, Kenya, I partner with founders, executive teams, and technical leaders to design, audit, and ship mission-critical backend architectures. My practice specializes in high-concurrency transactional commerce, multi-tenant relational platforms, and sovereign Linux deployments.
            </p>
            <p>
              Rather than gambling on brittle frameworks or rushing unverified code into production, I enforce phase-gated systems engineering. Every engagement begins with concurrency risk audits and strict third normal form (3NF) relational data integrity before a single line of production code is committed.
            </p>
          </div>

          {/* Quick Credential Badges */}
          <div className="pt-2 border-t t-border-subtle flex flex-wrap gap-2 text-[11px] font-mono">
            <span className="px-3 py-1 rounded-full theme-badge text-precious-gold">
              Row-Level Concurrency Locking
            </span>
            <span className="px-3 py-1 rounded-full theme-badge text-opal">
              3NF Relational Integrity
            </span>
            <span className="px-3 py-1 rounded-full theme-badge text-fae-fruit">
              Sovereign Linux Infrastructure
            </span>
            <span className="px-3 py-1 rounded-full theme-badge t-text-secondary">
              Available for Advisory &amp; Commission
            </span>
          </div>
        </div>

        {/* Act 2: Origin Story — Why Fragile Systems Offend Me */}
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 space-y-5 border-l-4 border-l-fae-fruit">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-fae-fruit" />
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] t-accent-warm font-semibold">
              The Origin Story
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-semibold t-text-primary">
            Why Fragile Software Offends Me
          </h3>

          <div className="space-y-3.5 text-xs sm:text-sm md:text-base t-text-secondary leading-relaxed font-light">
            <p>
              I grew up watching real people lose hours and hard-earned livelihoods to software that choked under pressure—matatu drivers delayed by lost manual logs, merchants double-selling stock during weekend WhatsApp bursts, and relational databases corrupted because a developer trusted an unverified queue.
            </p>
            <p>
              In emerging markets, software is never theoretical. When a payment gateway drops an order or inventory locks fail, real rent goes unpaid and real customer trust vanishes in seconds.
            </p>
            <p>
              Most platforms fail not because engineers cannot write code, but because they start typing before they understand the mathematics of their state transitions. I built Savannah Atelier to practice the deliberate opposite: simulate the failure states first, enforce strict mathematical invariants at the database kernel, and only then author the code that endures.
            </p>
          </div>
        </div>

        {/* Act 3: Executive Career & Systems Dossier (The "Hire Me" Snapshot) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b t-border-subtle pb-4">
            <div>
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] t-accent-warm block mb-1">
                EXECUTIVE DOSSIER
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold t-text-primary">
                Career Milestones &amp; Track Record
              </h3>
            </div>
            
            {/* Curated CV Request CTA */}
            <a
              href={SITE_CONFIG.contact.whatsapp.getUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full inner-panel border t-border-subtle hover:border-precious-gold text-xs font-mono font-medium text-precious-gold transition-all shrink-0 self-start sm:self-auto hover:bg-white/5"
              title="Request formal engineering CV and credentials"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Request Full Engineering CV ↗</span>
            </a>
          </div>

          <div className="space-y-3.5">
            {careerMilestones.map((milestone, idx) => (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-6 border t-border-subtle hover:border-precious-gold/40 transition-all"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-serif text-lg font-semibold t-text-primary">
                      {milestone.role}
                    </span>
                    <span className="text-xs t-text-muted">&middot;</span>
                    <span className="font-mono text-xs text-fae-fruit font-bold">
                      {milestone.org}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm t-text-secondary leading-relaxed font-light">
                    {milestone.focus}
                  </p>
                </div>

                <span className="font-mono text-xs px-2.5 py-1 rounded-md theme-badge text-precious-gold shrink-0 self-start">
                  {milestone.period}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Act 4: Working With Me — Operating Rules of Engagement */}
        <div className="space-y-6">
          <div className="border-b t-border-subtle pb-4">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] t-accent-warm block mb-1">
              RULES OF ENGAGEMENT
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold t-text-primary">
              How It Feels to Work With Me
            </h3>
            <p className="text-xs sm:text-sm t-text-secondary mt-1 font-light">
              Clear expectations. Zero hand-waving. Absolute operational ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {operatingRules.map((rule) => (
              <div key={rule.num} className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-7 space-y-3 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <span className="font-mono text-xs text-fae-fruit font-bold">PRINCIPLE {rule.num}</span>
                  <h4 className="font-serif text-lg sm:text-xl font-semibold t-text-primary">
                    {rule.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] t-text-secondary leading-relaxed font-light">
                    {rule.desc}
                  </p>
                </div>
                <div className="pt-2">
                  <CheckCircle2 className="w-4 h-4 text-precious-gold" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The 4 Architectural Tenets */}
        <div className="space-y-6">
          <div className="border-b t-border-subtle pb-4">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] t-accent-warm block mb-1">
              SYSTEMS THEORY
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold t-text-primary">
              Core Architectural Tenets
            </h3>
            <p className="text-xs sm:text-sm t-text-secondary mt-1 font-light">
              Non-negotiable systems engineering principles applied to every commissioned engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {principles.map((tenet) => (
              <div key={tenet.num} className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-fae-fruit font-bold">TENET {tenet.num}</span>
                  <Shield className="w-4 h-4 text-precious-gold" />
                </div>
                <h4 className="font-serif text-xl font-semibold t-text-primary">
                  {tenet.title}
                </h4>
                <p className="text-xs sm:text-sm t-text-secondary leading-relaxed font-light">
                  {tenet.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Structured Technical Stack Matrix */}
        <div className="space-y-6">
          <div className="border-b t-border-subtle pb-4">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] t-accent-warm block mb-1">
              TECHNICAL STACK MATRIX
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold t-text-primary">
              Production <span className="italic t-accent-editorial">Instruments</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] t-accent-warm">01 // Systems &amp; Backend</span>
              <h4 className="font-serif text-xl font-semibold t-text-primary">Core Engines &amp; Data</h4>
              <p className="text-xs sm:text-[13px] t-text-secondary leading-relaxed">High-integrity transactional APIs, domain state machines, and relational databases engineered for concurrency.</p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Python', 'Rust', 'Java', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Linux'].map((s) => (
                  <span key={s} className="font-mono text-[11px] px-2.5 py-1 rounded-lg theme-badge">{s}</span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] t-accent-warm">02 // Frontend &amp; Interface</span>
              <h4 className="font-serif text-xl font-semibold t-text-primary">Editorial &amp; Operational UI</h4>
              <p className="text-xs sm:text-[13px] t-text-secondary leading-relaxed">Responsive, accessible, high-contrast operational consoles and refined brand interfaces.</p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['React 19', 'Vite', 'Tailwind CSS', 'UI/UX Systems', 'TypeScript', 'Design Tokens'].map((s) => (
                  <span key={s} className="font-mono text-[11px] px-2.5 py-1 rounded-lg theme-badge">{s}</span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] t-accent-warm">03 // Infrastructure &amp; Delivery</span>
              <h4 className="font-serif text-xl font-semibold t-text-primary">Sovereign &amp; Edge Ops</h4>
              <p className="text-xs sm:text-[13px] t-text-secondary leading-relaxed">Predictable bare-metal Linux servers paired with modern edge deployment and PIN-isolated staging.</p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Docker', 'Supabase', 'Vercel', 'Fly.io', 'Ubuntu Servers'].map((s) => (
                  <span key={s} className="font-mono text-[11px] px-2.5 py-1 rounded-lg theme-badge">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Act 5: Beyond the Terminal — The Creative Counterweight */}
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 space-y-4 border t-border-subtle">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-precious-gold" />
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] t-accent-warm font-semibold">
              Beyond the Terminal
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-semibold t-text-primary">
            The Savannah Atelier &amp; MercyVerse Duality
          </h3>

          <p className="text-xs sm:text-sm md:text-base t-text-secondary leading-relaxed font-light">
            I believe that great engineering without aesthetic taste produces sterile tools, while visual design without mathematical rigor collapses under real traffic. Beyond systems architecture, I direct <strong className="text-precious-gold font-medium">The MercyVerse</strong>—curating visual essays, digital art, spatial design, and architectural broadcasts.
          </p>

          <div className="pt-2">
            <button
              onClick={() => navigate('studio')}
              className="inline-flex items-center gap-2 text-xs font-mono text-precious-gold hover:t-accent-editorial transition-colors"
            >
              <span>Explore Studio &amp; Broadcast Archive &rarr;</span>
            </button>
          </div>
        </div>

        {/* Call to Action: The Natural Closing Gateway */}
        <div className="p-8 sm:p-12 rounded-3xl inner-panel border border-precious-gold/30 text-center space-y-5">
          <h3 className="font-serif text-2xl sm:text-4xl font-semibold t-text-primary">
            Ready to Build With Architectural Certainty?
          </h3>
          <p className="text-xs sm:text-sm md:text-base t-text-secondary max-w-xl mx-auto font-light leading-relaxed">
            Whether auditing a legacy codebase for concurrency leaks or designing a mission-critical platform from first principles, let's talk through your operational requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => navigate('commission')}
              className="px-7 py-3.5 rounded-full btn-luminous text-xs font-mono uppercase tracking-wider font-semibold inline-flex items-center gap-2 shadow-lg"
            >
              <span>Initiate Commissioning Protocol</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={SITE_CONFIG.contact.whatsapp.getUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full inner-panel border t-border-subtle hover:border-precious-gold text-xs font-mono uppercase tracking-wider text-precious-gold font-medium inline-flex items-center gap-2 transition-all hover:bg-white/5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
