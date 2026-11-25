import React, { useState } from 'react';
import { Lock, Terminal } from 'lucide-react';

export const PortalView: React.FC = () => {
  const [pin, setPin] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [pinError, setPinError] = useState('');

  const [checklist, setChecklist] = useState([
    { id: 'c1', label: 'Normalized 3NF PostgreSQL Domain Schema Spec (Approved)', done: true },
    { id: 'c2', label: 'Deterministic State Machines & Transition Invariant Proofs (Passing)', done: true },
    { id: 'c3', label: 'ISO/IEC 29148 Software Requirements Specification (Locked)', done: true },
    { id: 'c4', label: 'Pessimistic Row-Level Locking Under Concurrent Webhook Burst (Stress-tested)', done: true },
    { id: 'c5', label: 'Hardened Ubuntu 24.04 LTS Staging Container Deployment (Active)', done: false },
    { id: 'c6', label: '24/7 Self-Healing Health Telemetry Daemon Cutover (Pending Handover)', done: false },
  ]);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.trim() === '2027') {
      setUnlocked(true);
      setPinError('');
    } else {
      setPinError('Invalid engagement PIN. Try demo PIN: 2027');
    }
  };

  const toggleCheck = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  };

  const completedCount = checklist.filter((c) => c.done).length;
  const progressPct = Math.round((completedCount / checklist.length) * 100);

  if (!unlocked) {
    return (
      <section className="view-enter py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-10 text-center space-y-6 border border-precious-gold/30">
            <div className="w-14 h-14 mx-auto rounded-2xl theme-badge flex items-center justify-center">
              <Lock className="w-6 h-6 text-fae-fruit" />
            </div>
            <div>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] t-accent-warm block font-semibold">
                Savannah Atelier Staging Gate
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-semibold t-text-primary mt-1.5">
                Client Preview Portal
              </h1>
              <p className="text-xs sm:text-sm t-text-secondary mt-2 font-light">
                Enter your engagement PIN to inspect your isolated staging environment and milestone checklist.
              </p>
            </div>

            <form onSubmit={handleUnlock} className="space-y-4">
              <div>
                <input
                  type="password"
                  inputMode="numeric"
                  maxLength={6}
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="Enter 4-Digit PIN (2027)"
                  className="theme-input w-full px-4 py-4 rounded-xl text-center font-mono text-lg tracking-[0.45em] placeholder:tracking-normal placeholder:text-xs sm:placeholder:text-sm"
                />
              </div>
              {pinError && (
                <p className="text-xs text-rose-400 font-mono font-medium">{pinError}</p>
              )}
              <button
                type="submit"
                className="w-full py-3.5 rounded-full btn-luminous text-xs font-mono uppercase tracking-wider font-semibold shadow-lg"
              >
                Unlock Staging Environment
              </button>
            </form>

            <p className="font-mono text-[11px] t-text-muted pt-2 border-t t-border-subtle">
              (Demo PIN: <span className="text-precious-gold font-bold">2027</span>)
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="view-enter py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Top Staging Header */}
        <div className="glass-card rounded-3xl p-7 sm:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6 border t-border-subtle">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-badge font-mono text-[10.5px]">
                <span className="w-2 h-2 rounded-full bg-precious-gold animate-pulse"></span>
                STAGING HEALTHY &middot; 99.98%
              </span>
              <span className="font-mono text-[11px] t-text-muted">Node: nairobi-ubuntu-01</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold t-text-primary">
              Perpetual &mdash; <span className="italic t-accent-editorial">Order Guard v2.4 Staging</span>
            </h1>
            <p className="font-mono text-xs t-text-secondary">
              Isolated Preview Namespace: <span className="text-precious-gold font-bold">/preview/sav-perpetual-2027</span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => setUnlocked(false)}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full btn-ghost-twilight text-xs font-mono shrink-0"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Lock Portal</span>
          </button>
        </div>

        {/* Milestone Progress Tracker */}
        <div className="glass-card rounded-3xl p-7 sm:p-8 space-y-5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.2em] t-accent-warm font-semibold">
              Milestone Progress Tracker
            </span>
            <span className="font-mono text-xs text-precious-gold font-bold">
              Phase 3 of 4 Active ({progressPct}%)
            </span>
          </div>

          <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/10">
            <div
              className="bg-gradient-to-r from-fae-fruit to-precious-gold h-full transition-all duration-500 rounded-full"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div className="inner-panel rounded-2xl p-4 border border-precious-gold/30">
              <span className="font-mono text-[10px] text-precious-gold font-bold">01 &middot; COMPLETE</span>
              <p className="text-sm font-medium t-text-primary mt-1">Discovery &amp; Audit</p>
            </div>
            <div className="inner-panel rounded-2xl p-4 border border-precious-gold/30">
              <span className="font-mono text-[10px] text-precious-gold font-bold">02 &middot; COMPLETE</span>
              <p className="text-sm font-medium t-text-primary mt-1">Architecture Blueprint</p>
            </div>
            <div className="inner-panel rounded-2xl p-4 border border-precious-gold/40 bg-precious-gold/5">
              <span className="font-mono text-[10px] text-precious-gold font-bold">03 &middot; IN PROGRESS</span>
              <p className="text-sm font-medium t-text-primary mt-1">Production Build</p>
            </div>
            <div className="inner-panel rounded-2xl p-4 border border-white/10 opacity-70">
              <span className="font-mono text-[10px] t-text-muted">04 &middot; SCHEDULED</span>
              <p className="text-sm font-medium t-text-primary mt-1">Cutover &amp; Handover</p>
            </div>
          </div>
        </div>

        {/* Interactive Acceptance Checklist */}
        <div className="glass-card rounded-3xl p-7 sm:p-8 space-y-5">
          <div className="flex items-center justify-between border-b t-border-subtle pb-4">
            <div>
              <h2 className="font-serif text-2xl font-semibold t-text-primary">
                Technical Acceptance Checklist
              </h2>
              <p className="text-xs t-text-secondary mt-0.5 font-light">
                Click any milestone item to review live sign-off state.
              </p>
            </div>
            <span className="font-mono text-xs px-3 py-1 rounded-full theme-badge text-precious-gold font-bold">
              {completedCount} / {checklist.length} Passed
            </span>
          </div>

          <div className="space-y-3">
            {checklist.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  item.done
                    ? 'inner-panel border-precious-gold/30 bg-precious-gold/5'
                    : 'inner-panel border-white/10 hover:border-precious-gold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-5 h-5 rounded-md flex items-center justify-center border text-xs ${
                      item.done
                        ? 'bg-precious-gold border-precious-gold text-black font-bold'
                        : 'border-white/20'
                    }`}
                  >
                    {item.done && '✓'}
                  </span>
                  <span className={`text-xs sm:text-sm font-mono ${item.done ? 't-text-primary font-medium' : 't-text-secondary'}`}>
                    {item.label}
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-precious-gold shrink-0">
                  {item.done ? 'Verified' : 'Pending'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Live Staging Telemetry Box */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4 border border-opal/30">
          <div className="flex items-center justify-between pb-3 border-b t-border-subtle">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-precious-gold" />
              <span className="font-mono text-xs text-lavender-rose/90 font-bold">
                nairobi-ubuntu-01:~# docker logs --tail 4 perpetual-order-guard
              </span>
            </div>
            <span className="font-mono text-[10px] text-precious-gold animate-pulse">LIVE STREAM</span>
          </div>
          <div className="p-4 rounded-xl font-mono text-xs leading-relaxed text-opal bg-black/70 border border-white/5 overflow-x-auto">
{`2026-11-24T12:20:01Z [INFO] Atomic inventory lock verified: SKU-9284 locked for transaction #TX-829184
2026-11-24T12:20:02Z [INFO] PostgreSQL 16 row-level lock released in 1.42ms (Zero deadlocks detected)
2026-11-24T12:20:03Z [INFO] WhatsApp Baileys webhook dispatched to customer endpoint (Port 3000)
2026-11-24T12:20:04Z [HEARTBEAT] Staging cluster healthy. CPU: 12% | RAM: 1.4GB / 8GB | Invariants: LOCKED`}
          </div>
        </div>
      </div>
    </section>
  );
};
