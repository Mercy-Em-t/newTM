import React, { useState } from 'react';
import { CheckCircle2, Shield, Clock, Send, Sparkles } from 'lucide-react';
import { useCommissionInquiry } from '../../hooks/useContent';
import { useToast } from '../../context/ToastContext';

export const CommissionView: React.FC = () => {
  const { submit, isSubmitting, result } = useCommissionInquiry();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    organization: '',
    tier: 'Strategy & Blueprint (Phase 1)',
    budget: '$5,000 - $15,000 (KES 650k - 2M)',
    timeline: '3 - 6 Weeks',
    summary: '',
  });

  const [activePhaseQualifier, setActivePhaseQualifier] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState<string | null>(null);

  const qualifyScope = (phase: number) => {
    setActivePhaseQualifier(phase);
    if (phase === 1) {
      setFormData((prev) => ({
        ...prev,
        tier: 'Strategy & Blueprint (Phase 1)',
        budget: 'From KES 300,000 / $2,300',
        timeline: '1 – 2 Weeks',
      }));
    } else if (phase === 2) {
      setFormData((prev) => ({
        ...prev,
        tier: 'Interactive Prototype & Specification (Phase 2)',
        budget: 'From KES 500,000 / $3,850',
        timeline: '2 – 3 Weeks',
      }));
    } else if (phase === 3) {
      setFormData((prev) => ({
        ...prev,
        tier: 'High-Assurance Production Build (Phase 3)',
        budget: 'From KES 800,000 / $6,150',
        timeline: '3 – 6 Weeks',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Post to Headless Backend API
    const res = await submit({
      clientName: formData.clientName,
      email: formData.clientEmail,
      phone: formData.clientPhone,
      scope: `${formData.tier} - ${formData.organization || 'Independent'}`,
      timeline: formData.timeline,
      architectureNotes: formData.summary
    });

    // 2. Prepare WhatsApp direct transmission link (optional secondary channel)
    const waText = `*COMMISSIONING BRIEF — SAVANNAH ATELIER*
Client / Organization: ${formData.clientName} (${formData.organization || 'Independent'})
Email: ${formData.clientEmail}
Phone: ${formData.clientPhone || 'N/A'}
Selected Tier: ${formData.tier}
Budget: ${formData.budget}
Timeline: ${formData.timeline}
${res?.inquiryId ? `Reference ID: ${res.inquiryId}\n` : ''}
Project Brief & Invariants:
${formData.summary}`;

    const waUrl = `https://wa.me/254710720949?text=${encodeURIComponent(waText)}`;
    setWaLink(waUrl);
    setSubmitted(true);
    showToast('Commissioning brief registered in Savannah Atelier ledger.', 'success');
  };

  return (
    <section className="view-enter py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto space-y-12 transition-all duration-300">
        {/* Top Full-Width Editorial Masthead (indexA.html lines 6254-6266) */}
        <div className="pb-8 border-b t-border-subtle max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full inner-panel border border-precious-gold/30 mb-3.5">
            <span className="w-2 h-2 rounded-full bg-precious-gold animate-pulse"></span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-precious-gold font-bold">
              Client Onboarding &middot; Direct Technical Desk
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold t-text-primary leading-[1.04] tracking-tight">
            Commission a <span className="italic font-normal t-accent-editorial">System</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl t-text-secondary leading-relaxed font-light mt-4 max-w-4xl">
            Share your architectural requirements below. Qualified briefs receive a written feasibility assessment and discovery coordinates within 48 business hours.
          </p>
        </div>

        {/* Guarantees Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl inner-panel border t-border-subtle flex items-start gap-3">
            <Shield className="w-5 h-5 text-precious-gold shrink-0 mt-0.5" />
            <div>
              <div className="font-mono text-xs font-bold t-text-primary">Zero Defect Invariants</div>
              <div className="text-[11px] t-text-secondary mt-0.5">Strict formal verification across concurrency and state models.</div>
            </div>
          </div>
          <div className="p-4 rounded-2xl inner-panel border t-border-subtle flex items-start gap-3">
            <Clock className="w-5 h-5 text-precious-gold shrink-0 mt-0.5" />
            <div>
              <div className="font-mono text-xs font-bold t-text-primary">48hr Desk SLA</div>
              <div className="text-[11px] t-text-secondary mt-0.5">Direct written senior assessment from Nairobi executive desk.</div>
            </div>
          </div>
          <div className="p-4 rounded-2xl inner-panel border t-border-subtle flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-fae-fruit shrink-0 mt-0.5" />
            <div>
              <div className="font-mono text-xs font-bold t-text-primary">Phase-Gated SDLC</div>
              <div className="text-[11px] t-text-secondary mt-0.5">Clear stage deliverables, architecture docs, and sign-offs.</div>
            </div>
          </div>
        </div>

        {/* Balanced 2-Column Grid (indexA.html lines 6268-6340) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Scope Qualifier & Tiers */}
          <div className="lg:col-span-5 space-y-6">
            {/* Interactive Scope Qualifier Tool */}
            <div className="glass-card rounded-2xl p-5 border border-precious-gold/30 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-precious-gold animate-ping"></span>
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] t-accent-editorial font-bold">
                  Interactive Scope Qualifier
                </h3>
              </div>
              <p className="text-xs t-text-secondary leading-relaxed font-light">
                Not sure where your project starts? Select the prompt below that best matches your situation:
              </p>
              <div className="space-y-2.5 text-left">
                <button
                  type="button"
                  onClick={() => qualifyScope(1)}
                  className={`w-full text-left p-3 rounded-xl border transition-all ${
                    activePhaseQualifier === 1
                      ? 'bg-precious-gold/15 border-precious-gold text-precious-gold shadow-md'
                      : 'inner-panel t-border-subtle hover:border-fae-fruit hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded-md theme-badge">Phase 1</span>
                    <p className="text-xs font-medium leading-snug">
                      "We have a business concept or workflow, but need a locked budget &amp; technical blueprint first."
                    </p>
                  </div>
                  <span className="block mt-1 font-mono text-[10px] text-precious-gold pl-8">
                    Action: Book Strategy &amp; Blueprint &rarr;
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => qualifyScope(2)}
                  className={`w-full text-left p-3 rounded-xl border transition-all ${
                    activePhaseQualifier === 2
                      ? 'bg-precious-gold/15 border-precious-gold text-precious-gold shadow-md'
                      : 'inner-panel t-border-subtle hover:border-fae-fruit hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded-md theme-badge">Phase 2</span>
                    <p className="text-xs font-medium leading-snug">
                      "We know our user workflows, but want a clickable prototype and locked rules before building."
                    </p>
                  </div>
                  <span className="block mt-1 font-mono text-[10px] text-precious-gold pl-8">
                    Action: Book Interactive Prototype &rarr;
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => qualifyScope(3)}
                  className={`w-full text-left p-3 rounded-xl border transition-all ${
                    activePhaseQualifier === 3
                      ? 'bg-precious-gold/15 border-precious-gold text-precious-gold shadow-md'
                      : 'inner-panel t-border-subtle hover:border-fae-fruit hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded-md theme-badge">Phase 3</span>
                    <p className="text-xs font-medium leading-snug">
                      "We need an engineering partner to build a high-speed, crash-proof production engine."
                    </p>
                  </div>
                  <span className="block mt-1 font-mono text-[10px] text-precious-gold pl-8">
                    Action: Commission Production Build &rarr;
                  </span>
                </button>
              </div>
            </div>

            {/* Transparent Engagement Tiers */}
            <div className="space-y-3.5">
              <div className="glass-card rounded-2xl p-5">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-semibold t-text-primary">Strategy &amp; Blueprint</h4>
                  <span className="font-mono text-[11px] t-accent-editorial font-bold">From KES 300,000 / $2,300</span>
                </div>
                <p className="text-xs t-text-secondary font-light">1–2 week deep technical audit, concurrency review, and formal locked delivery roadmap.</p>
              </div>
              <div className="glass-card rounded-2xl p-5">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-semibold t-text-primary">Production Build Commission</h4>
                  <span className="font-mono text-[11px] t-accent-editorial font-bold">From KES 800,000 / $6,150</span>
                </div>
                <p className="text-xs t-text-secondary font-light">End-to-end architecture, crash-proof checkout locking, private staging preview, and zero-downtime cutover.</p>
              </div>
              <div className="glass-card rounded-2xl p-5">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-semibold t-text-primary">Fractional Systems Advisory</h4>
                  <span className="font-mono text-[11px] t-accent-editorial font-bold">KES 350,000 / $2,700 wk</span>
                </div>
                <p className="text-xs t-text-secondary font-light">Ongoing fractional systems architecture, schema governance, and engineering leadership review.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Commissioning Brief Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-10 space-y-6">
              <div className="flex items-center justify-between border-b t-border-subtle pb-4">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold t-text-primary">
                    Commissioning Brief
                  </h3>
                  <p className="text-xs t-text-muted mt-0.5">
                    All technical disclosures are treated as strictly confidential under Savannah Atelier.
                  </p>
                </div>
                <span className="font-mono text-[11px] px-3 py-1 rounded-full theme-badge text-precious-gold font-bold">
                  Q1 2027
                </span>
              </div>

              {submitted && (
                <div className="p-5 rounded-2xl inner-panel border border-precious-gold/40 text-xs sm:text-sm font-mono space-y-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 shrink-0 text-precious-gold" />
                    <span className="font-semibold t-text-primary">
                      Brief logged securely to Savannah Atelier ledger.
                    </span>
                  </div>
                  {result?.inquiryId && (
                    <div className="text-[11px] t-text-secondary pl-7 space-y-1">
                      <div>
                        Reference ID: <span className="underline font-bold t-accent-editorial">{result.inquiryId}</span>
                      </div>
                      <div className="t-text-muted text-[10px]">
                        Confidentiality SLA: Written feasibility coordinates within 48 business hours.
                      </div>
                    </div>
                  )}
                  {waLink && (
                    <div className="pl-7 pt-1">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full btn-luminous text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-md"
                      >
                        <span>Dispatch via WhatsApp Direct ↗</span>
                      </a>
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase tracking-wider text-precious-gold font-bold block">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      placeholder="e.g. Amani Mwangi"
                      className="w-full px-4 py-3 rounded-xl theme-input text-xs sm:text-sm font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase tracking-wider text-precious-gold font-bold block">
                      Corporate / Institutional Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.clientEmail}
                      onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                      placeholder="e.g. amani@enterprise.ke"
                      className="w-full px-4 py-3 rounded-xl theme-input text-xs sm:text-sm font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase tracking-wider text-precious-gold font-bold block">
                      Organization / Venture Name
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Apex Concurrency Labs"
                      className="w-full px-4 py-3 rounded-xl theme-input text-xs sm:text-sm font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase tracking-wider text-precious-gold font-bold block">
                      Direct WhatsApp / Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.clientPhone}
                      onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                      placeholder="+254 7XX XXX XXX"
                      className="w-full px-4 py-3 rounded-xl theme-input text-xs sm:text-sm font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase tracking-wider text-precious-gold font-bold block">
                      Engagement Tier
                    </label>
                    <select
                      value={formData.tier}
                      onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl theme-input text-xs sm:text-sm font-sans"
                    >
                      <option value="Strategy & Blueprint (Phase 1)">Phase 1: Strategy &amp; Blueprint</option>
                      <option value="Interactive Prototype & Specification (Phase 2)">Phase 2: Interactive Prototype</option>
                      <option value="High-Assurance Production Build (Phase 3)">Phase 3: High-Assurance Production Build</option>
                      <option value="Fractional Systems Advisory">Fractional Systems Advisory</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase tracking-wider text-precious-gold font-bold block">
                      Target Delivery Window
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl theme-input text-xs sm:text-sm font-sans"
                    >
                      <option value="1 – 2 Weeks (Sprint)">1 – 2 Weeks (Rapid Blueprint)</option>
                      <option value="3 – 6 Weeks (Standard Build)">3 – 6 Weeks (Standard Build)</option>
                      <option value="6 – 12 Weeks (Enterprise System)">6 – 12 Weeks (Enterprise Platform)</option>
                      <option value="Ongoing Retainer">Ongoing Architecture Retainer</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs uppercase tracking-wider text-precious-gold font-bold block">
                    System Requirements &amp; Known Invariants *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                    placeholder="Describe your architecture constraints, target throughput, current tech stack, and primary failure modes to prevent..."
                    className="w-full px-4 py-3 rounded-xl theme-input text-xs sm:text-sm font-sans leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-full btn-luminous text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-xl ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  <Send className={`w-4 h-4 ${isSubmitting ? 'animate-bounce' : ''}`} />
                  <span>{isSubmitting ? 'Registering Brief...' : 'Transmit Commissioning Brief →'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
