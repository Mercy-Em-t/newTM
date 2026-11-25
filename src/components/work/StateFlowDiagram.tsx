import React from 'react';
import { ArrowDown, CheckCircle2, Clock, AlertTriangle, RefreshCw } from 'lucide-react';

interface StateFlowDiagramProps {
  projectId: string;
}

export const StateFlowDiagram: React.FC<StateFlowDiagramProps> = ({ projectId }) => {
  if (projectId === 'tennissuite') {
    return (
      <div className="my-5 rounded-2xl border t-border-subtle inner-panel overflow-hidden shadow-lg transition-all">
        {/* Header Strip */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b t-border-subtle bg-white/5">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-precious-gold animate-pulse shrink-0" />
            <span className="font-mono text-[11px] sm:text-xs font-semibold t-text-primary tracking-wide">
              Domain State Machine &middot; Match Progression Invariants
            </span>
          </div>
          <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full theme-badge text-precious-gold font-bold">
            FSM &middot; 3NF
          </span>
        </div>

        {/* Visual State Nodes Container */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* Main Progression Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column: Normal Match Flow */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] t-accent-warm font-semibold">
                  01 // Deterministic Match Path
                </span>
              </div>

              <div className="space-y-2.5">
                {/* Node: SCHEDULED */}
                <div className="p-3.5 rounded-xl border border-white/10 inner-panel flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-opal/10 text-opal flex items-center justify-center font-mono text-xs font-bold">
                      01
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold t-text-primary block">[ SCHEDULED ]</span>
                      <span className="text-[11px] t-text-muted font-light">Match scheduled &amp; division seeded</span>
                    </div>
                  </div>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded theme-badge text-opal">Initial</span>
                </div>

                {/* Transition Arrow */}
                <div className="flex items-center justify-center gap-2 font-mono text-[10px] t-text-muted py-0.5">
                  <ArrowDown className="w-3.5 h-3.5 text-precious-gold" />
                  <span>Transition: Court Assigned</span>
                </div>

                {/* Node: READY_TO_PLAY */}
                <div className="p-3.5 rounded-xl border border-precious-gold/30 inner-panel flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-precious-gold/15 text-precious-gold flex items-center justify-center font-mono text-xs font-bold">
                      02
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold t-text-primary block">[ READY_TO_PLAY ]</span>
                      <span className="text-[11px] t-text-muted font-light">Venue allocated &amp; players checked in</span>
                    </div>
                  </div>
                  <Clock className="w-4 h-4 text-precious-gold" />
                </div>

                {/* Transition Arrow */}
                <div className="flex items-center justify-center gap-2 font-mono text-[10px] t-text-muted py-0.5">
                  <ArrowDown className="w-3.5 h-3.5 text-precious-gold" />
                  <span>Transition: Match Called</span>
                </div>

                {/* Node: IN_PROGRESS */}
                <div className="p-3.5 rounded-xl border border-precious-gold/30 inner-panel flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-precious-gold/15 text-precious-gold flex items-center justify-center font-mono text-xs font-bold">
                      03
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold t-text-primary block">[ IN_PROGRESS ]</span>
                      <span className="text-[11px] t-text-muted font-light">Live score ingestion &amp; set tracking</span>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-precious-gold animate-pulse" />
                </div>

                {/* Transition Arrow */}
                <div className="flex items-center justify-center gap-2 font-mono text-[10px] t-text-muted py-0.5">
                  <ArrowDown className="w-3.5 h-3.5 text-precious-gold" />
                  <span>Transition: Final Match Point</span>
                </div>

                {/* Node: COMPLETED */}
                <div className="p-3.5 rounded-xl border border-precious-gold/40 inner-panel flex items-center justify-between bg-precious-gold/[0.03]">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-precious-gold text-black flex items-center justify-center font-mono text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold t-text-primary block">[ COMPLETED ]</span>
                      <span className="text-[11px] text-precious-gold font-mono">──&gt; Auto Advance Seed Invariant</span>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-precious-gold" />
                </div>
              </div>
            </div>

            {/* Right Column: Exception & Concurrency Handling */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] t-accent-warm font-semibold">
                  02 // Concurrency &amp; Rain Hold Fallbacks
                </span>
              </div>

              <div className="space-y-2.5">
                {/* Exception Trigger */}
                <div className="p-3 rounded-xl border border-rose-500/30 inner-panel bg-rose-500/[0.04]">
                  <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-semibold">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>Exception Event: Weather Delay / Rain Hold</span>
                  </div>
                  <p className="text-[11px] t-text-muted mt-1 font-light leading-relaxed">
                    Triggered when unplayable conditions occur mid-match. Halts state mutation immediately.
                  </p>
                </div>

                {/* Transition */}
                <div className="flex items-center justify-center gap-2 font-mono text-[10px] t-text-muted py-0.5">
                  <ArrowDown className="w-3.5 h-3.5 text-rose-400" />
                  <span>Locks active set scores in PostgreSQL</span>
                </div>

                {/* Node: SUSPENDED */}
                <div className="p-3.5 rounded-xl border border-amber-500/30 inner-panel flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center font-mono text-xs font-bold">
                      !
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold t-text-primary block">[ SUSPENDED ]</span>
                      <span className="text-[11px] t-text-muted font-light">Scores locked &middot; court freed for scheduler</span>
                    </div>
                  </div>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded theme-badge text-amber-400">Locked</span>
                </div>

                {/* Transition */}
                <div className="flex items-center justify-center gap-2 font-mono text-[10px] t-text-muted py-0.5">
                  <ArrowDown className="w-3.5 h-3.5 text-precious-gold" />
                  <span>Transition: Re-Allocate Time Slot</span>
                </div>

                {/* Node: RESCHEDULED */}
                <div className="p-3.5 rounded-xl border border-opal/30 inner-panel flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-opal/15 text-opal flex items-center justify-center">
                      <RefreshCw className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold t-text-primary block">[ RESCHEDULED ]</span>
                      <span className="text-[11px] t-text-muted font-light">Next available court assigned with state preservation</span>
                    </div>
                  </div>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded theme-badge text-opal">Re-queued</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'perpetual-order-guard') {
    return (
      <div className="my-5 rounded-2xl border t-border-subtle inner-panel overflow-hidden shadow-lg transition-all">
        {/* Header Strip */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b t-border-subtle bg-white/5">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-precious-gold animate-pulse shrink-0" />
            <span className="font-mono text-[11px] sm:text-xs font-semibold t-text-primary tracking-wide">
              PostgreSQL Pessimistic Lock &amp; Idempotent Ingestion
            </span>
          </div>
          <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full theme-badge text-precious-gold font-bold">
            ACID &middot; NOWAIT
          </span>
        </div>

        {/* Visual Pipeline Nodes */}
        <div className="p-4 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
            {/* Step 1 */}
            <div className="p-3.5 rounded-xl border border-white/10 inner-panel space-y-2">
              <span className="font-mono text-[10px] px-2 py-0.5 rounded theme-badge text-opal font-bold">
                01 &middot; INGEST
              </span>
              <h4 className="font-mono text-xs font-bold t-text-primary">WhatsApp Webhook</h4>
              <p className="text-[11px] t-text-muted font-light leading-relaxed">
                Raw message payload received. Generates deterministic SHA-256 idempotency signature.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-3.5 rounded-xl border border-opal/30 inner-panel space-y-2">
              <span className="font-mono text-[10px] px-2 py-0.5 rounded theme-badge text-opal font-bold">
                02 &middot; CACHE
              </span>
              <h4 className="font-mono text-xs font-bold t-text-primary">Redis Mutex Gate</h4>
              <p className="text-[11px] t-text-muted font-light leading-relaxed">
                50ms distributed lock barrier. Drops duplicate retries before database hits.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-3.5 rounded-xl border border-precious-gold/30 inner-panel space-y-2">
              <span className="font-mono text-[10px] px-2 py-0.5 rounded theme-badge text-precious-gold font-bold">
                03 &middot; LOCK
              </span>
              <h4 className="font-mono text-xs font-bold t-text-primary">SELECT FOR UPDATE</h4>
              <p className="text-[11px] t-text-muted font-light leading-relaxed">
                PostgreSQL row-level lock with <code className="text-[10px] font-mono font-bold text-precious-gold">NOWAIT</code>. Guarantees zero overselling.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-3.5 rounded-xl border border-precious-gold/40 inner-panel space-y-2 bg-precious-gold/[0.03]">
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-precious-gold/20 text-precious-gold font-bold">
                04 &middot; COMMIT
              </span>
              <h4 className="font-mono text-xs font-bold t-text-primary">Order Dispatched</h4>
              <p className="text-[11px] text-precious-gold font-light leading-relaxed">
                Inventory decremented, transaction committed, and instant customer confirmation sent.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
