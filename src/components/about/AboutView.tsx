import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { Shield, ArrowRight } from 'lucide-react';

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

  return (
    <section className="view-enter pt-4 pb-12 sm:pt-10 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-10 lg:space-y-14">
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

        {/* Lead Architect Bio */}
        <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-4 border-b t-border-subtle pb-4 sm:pb-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-precious-gold font-bold">
                PRINCIPAL SYSTEMS ARCHITECT
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold t-text-primary mt-1">
                Eng. Tryphen Emurugat
              </h2>
              <p className="font-mono text-xs t-accent-warm mt-0.5">
                Savannah Atelier · Systems &amp; Technical Governance
              </p>
            </div>
            <button
              onClick={() => navigate('commission')}
              className="px-5 py-2.5 rounded-full btn-luminous text-xs font-mono uppercase tracking-wider font-semibold self-start sm:self-auto inline-flex items-center gap-1.5"
            >
              <span>Commission Desk →</span>
            </button>
          </div>

          <div className="space-y-4 text-sm sm:text-base t-text-secondary leading-relaxed font-light">
            <p>
              Based in Nairobi, Kenya, Tryphen Emurugat architects resilient distributed backends, multi-tenant relational platforms, and low-latency transactional software for organizations across East Africa and international markets.
            </p>
            <p>
              With extensive practice across high-throughput conversational commerce (Order Guard), deterministic sports bracket engines (Tennissuite), and cloud transit dispatch pipelines, our atelier enforces strict phase-gated engineering that eliminates silent production corruption.
            </p>
          </div>
        </div>

        {/* The 4 Architectural Tenets */}
        <div className="space-y-6">
          <div className="border-b t-border-subtle pb-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold t-text-primary">
              Core Architectural Tenets
            </h3>
            <p className="text-xs sm:text-sm t-text-secondary mt-1 font-light">
              Non-negotiable systems engineering principles applied to every commissioned engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((tenet) => (
              <div key={tenet.num} className="glass-card rounded-3xl p-6 sm:p-7 space-y-3">
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

        {/* Structured Technical Stack Matrix (indexA.html lines 5357-5394) */}
        <div className="space-y-6">
          <div className="border-b t-border-subtle pb-4">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] t-accent-warm block mb-2">
              TECHNICAL STACK MATRIX
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold t-text-primary">
              Production <span className="italic t-accent-editorial">Instruments</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-3xl p-6 sm:p-7 space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] t-accent-warm">01 // Systems & Backend</span>
              <h4 className="font-serif text-xl font-semibold t-text-primary">Core Engines & Data</h4>
              <p className="text-xs sm:text-[13px] t-text-secondary leading-relaxed">High-integrity transactional APIs, domain state machines, and relational databases engineered for concurrency.</p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Python', 'Rust', 'Java', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Linux'].map((s) => (
                  <span key={s} className="font-mono text-[11px] px-2.5 py-1 rounded-lg theme-badge">{s}</span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6 sm:p-7 space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] t-accent-warm">02 // Frontend & Interface</span>
              <h4 className="font-serif text-xl font-semibold t-text-primary">Editorial & Operational UI</h4>
              <p className="text-xs sm:text-[13px] t-text-secondary leading-relaxed">Responsive, accessible, high-contrast operational consoles and refined brand interfaces.</p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['React', 'Vite', 'Tailwind CSS', 'UI/UX Systems', 'TypeScript', 'Design Tokens'].map((s) => (
                  <span key={s} className="font-mono text-[11px] px-2.5 py-1 rounded-lg theme-badge">{s}</span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6 sm:p-7 space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] t-accent-warm">03 // Infrastructure & Delivery</span>
              <h4 className="font-serif text-xl font-semibold t-text-primary">Sovereign & Edge Ops</h4>
              <p className="text-xs sm:text-[13px] t-text-secondary leading-relaxed">Predictable bare-metal Linux servers paired with modern edge deployment and PIN-isolated staging.</p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Docker', 'Supabase', 'Vercel', 'Fly.io', 'Ubuntu Servers'].map((s) => (
                  <span key={s} className="font-mono text-[11px] px-2.5 py-1 rounded-lg theme-badge">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="p-8 rounded-3xl inner-panel border border-precious-gold/30 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold t-text-primary">
            Ready to Build With Architectural Certainty?
          </h3>
          <p className="text-xs sm:text-sm t-text-secondary max-w-xl mx-auto font-light">
            Whether auditing a legacy codebase or designing a greenfield platform from first principles, we are ready to discuss your operational requirements.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('commission')}
              className="px-8 py-3.5 rounded-full btn-luminous text-xs font-mono uppercase tracking-wider font-semibold inline-flex items-center gap-2"
            >
              <span>Initiate Commissioning Protocol</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
