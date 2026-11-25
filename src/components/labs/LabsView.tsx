import React, { useState } from 'react';
import { 
  Terminal, 
  ArrowRight, 
  Radio, 
  Key, 
  Server, 
  Video 
} from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

export const LabsView: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeCmd, setActiveCmd] = useState<'docker' | 'nueve' | 'redis' | 'iam'>('docker');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleRunCommand = (cmd: 'docker' | 'nueve' | 'redis' | 'iam') => {
    setActiveCmd(cmd);
    showToast(`Executed: ${cmd === 'docker' ? 'docker ps' : cmd === 'nueve' ? 'nueve --status' : cmd === 'redis' ? 'redis-cli ping' : 'cargo test (IAM)'}`);
  };

  return (
    <section className="view-enter py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Labs Masthead */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 pb-8 border-b t-border-subtle">
          <div className="max-w-2xl space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-precious-gold animate-ping"></span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-precious-gold font-bold whitespace-nowrap">
                R&amp;D Sandbox &middot; Live Staging Cluster
              </span>
              <span className="font-mono text-[11px] t-accent-warm px-2 py-0.5 rounded inner-panel border border-precious-gold/30">
                LABS-RUNNER-01
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-light t-text-primary leading-tight">
              Emurugat <span className="italic t-accent-editorial">Labs</span>
            </h1>
            <p className="text-sm sm:text-base t-text-secondary leading-relaxed font-light">
              Our private engineering wing and experimental proving ground. Self-hosted Docker microservices, low-latency media streaming pipelines, and distributed state machines stress-tested before enterprise cutover.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 xl:justify-end">
            <a
              href="https://www.youtube.com/@TryphenEmurrugatLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full btn-ghost-twilight text-xs font-mono uppercase tracking-wider flex items-center gap-2 hover:border-rose-500/50 hover:text-rose-400 transition-all shrink-0"
            >
              <Video className="w-4 h-4 text-rose-500" />
              <span>Official YouTube ↗</span>
            </a>
            <button
              onClick={() => navigate('catalog')}
              className="px-4 py-2.5 rounded-full btn-ghost-twilight text-xs font-mono uppercase tracking-wider shrink-0"
            >
              &larr; Solution Catalog
            </button>
            <button
              onClick={() => navigate('commission')}
              className="px-5 py-2.5 rounded-full btn-luminous text-xs font-mono uppercase tracking-wider inline-flex items-center gap-2 font-semibold shrink-0 shadow-md"
            >
              <span>Client Staging Vault</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Section 1: Pre-Built Software Solutions & Labs IP (lines 6017-6116) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold t-text-primary">
                Software IP &amp; Live Sandboxes
              </h2>
              <p className="text-xs sm:text-sm t-text-secondary mt-1 font-light">
                Pre-built software engines and standalone microservices engineered in Emurugat Labs.
              </p>
            </div>
            <span className="font-mono text-xs px-3 py-1 rounded-full theme-badge text-precious-gold font-semibold">
              2 Flagship Systems
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product 1: Nueve Streaming Core */}
            <div className="glass-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between border-t-4 border-t-precious-gold hover:border-precious-gold transition-all duration-300">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full theme-badge text-precious-gold font-bold">
                      SaaS License
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md inner-panel text-precious-gold">
                      &bull; Demo Available in Labs
                    </span>
                  </div>
                  <span className="font-mono text-xs t-text-muted">v2.4-STABLE</span>
                </div>

                <h3 className="font-serif text-3xl font-semibold t-text-primary">Nueve Streaming Core</h3>
                <p className="text-sm t-text-secondary leading-relaxed font-light">
                  Proprietary low-latency live media streaming engine. Enables media platforms, online broadcasters, and educational institutions to stream multi-bitrate HLS and WebRTC video directly without paying exorbitant third-party CDN egress markup.
                </p>

                {/* Key Architecture Specs */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
                  <div className="inner-panel p-2.5 rounded-xl border t-border-subtle">
                    <span className="text-precious-gold block font-bold text-sm">120ms</span>
                    <span className="t-text-muted text-[10px]">End-to-End Latency</span>
                  </div>
                  <div className="inner-panel p-2.5 rounded-xl border t-border-subtle">
                    <span className="text-precious-gold block font-bold text-sm">10,000+</span>
                    <span className="t-text-muted text-[10px]">Concurrent Viewers</span>
                  </div>
                  <div className="inner-panel p-2.5 rounded-xl border t-border-subtle col-span-2 sm:col-span-1">
                    <span className="text-indigo-400 block font-bold text-sm">60%</span>
                    <span className="t-text-muted text-[10px]">Bandwidth Savings</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t t-border-subtle flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => handleRunCommand('nueve')}
                  className="px-5 py-2.5 rounded-full inner-panel border t-border-subtle hover:border-precious-gold text-xs font-mono uppercase tracking-wider t-text-primary transition-all flex items-center gap-1.5"
                >
                  <Terminal className="w-3.5 h-3.5 text-precious-gold" />
                  <span>Launch Terminal Test ↗</span>
                </button>
                <a
                  href="https://wa.me/254710720949?text=Hello%20Tryphen%2C%20I%20would%20like%20to%20inquire%20about%20licensing%20the%20Nueve%20Streaming%20Core%20for%20our%20video%20platform."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full btn-luminous text-xs font-mono uppercase tracking-wider font-semibold inline-flex items-center gap-1.5 transition-all shadow-md"
                >
                  <span>Inquire Commercial License</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

            {/* Product 2: Identity Access Manager (IAM in Rust) */}
            <div className="glass-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between border-t-4 border-t-purple-500 hover:border-precious-gold transition-all duration-300">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full theme-badge text-purple-400 font-bold">
                      Microservice IP
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md inner-panel text-purple-300">
                      &bull; API Sandbox Available
                    </span>
                  </div>
                  <span className="font-mono text-xs t-text-muted">RUST-EDITION-2024</span>
                </div>

                <h3 className="font-serif text-3xl font-semibold t-text-primary">Identity Access Manager (IAM)</h3>
                <p className="text-sm t-text-secondary leading-relaxed font-light">
                  A drop-in, zero-latency authentication microservice featuring asymmetric JWT verification, fine-grained role-based access control (RBAC), and hardware key integration. Engineered in memory-safe Rust with zero garbage-collection pauses.
                </p>

                {/* Key Architecture Specs */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
                  <div className="inner-panel p-2.5 rounded-xl border t-border-subtle">
                    <span className="text-purple-400 block font-bold text-sm">&lt;0.4ms</span>
                    <span className="t-text-muted text-[10px]">Token Verification</span>
                  </div>
                  <div className="inner-panel p-2.5 rounded-xl border t-border-subtle">
                    <span className="text-precious-gold block font-bold text-sm">Zero GC</span>
                    <span className="t-text-muted text-[10px]">Deterministic RAM</span>
                  </div>
                  <div className="inner-panel p-2.5 rounded-xl border t-border-subtle col-span-2 sm:col-span-1">
                    <span className="text-precious-gold block font-bold text-sm">ISO/IEC</span>
                    <span className="t-text-muted text-[10px]">29148 Verified</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t t-border-subtle flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => handleRunCommand('iam')}
                  className="px-5 py-2.5 rounded-full inner-panel border t-border-subtle hover:border-purple-400 text-xs font-mono uppercase tracking-wider t-text-primary transition-all flex items-center gap-1.5"
                >
                  <Terminal className="w-3.5 h-3.5 text-purple-400" />
                  <span>View API Sandbox ↗</span>
                </button>
                <a
                  href="https://wa.me/254710720949?text=Hello%20Tryphen%2C%20I%20would%20like%20to%20purchase%20and%20integrate%20the%20Rust%20IAM%20Microservice%20into%20our%20backend."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full btn-luminous text-xs font-mono uppercase tracking-wider font-semibold inline-flex items-center gap-1.5 transition-all shadow-md"
                >
                  <span>Purchase Integration</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Active Docker Staging Clusters (lines 6118-6171) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold t-text-primary">Active Staging Clusters</h2>
              <p className="text-xs sm:text-sm t-text-secondary mt-1 font-light">
                Live containerized environments maintained under 24/7 telemetry monitoring.
              </p>
            </div>
            <span className="font-mono text-xs px-3 py-1 rounded-full theme-badge text-precious-gold font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-precious-gold animate-pulse"></span>
              <span>All Systems Operational</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cluster 01 */}
            <div className="glass-card rounded-2xl p-6 border-t-4 border-t-fae-fruit hover:border-precious-gold transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase tracking-wider text-fae-fruit font-bold">Cluster 01</span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-precious-gold/15 text-precious-gold border border-precious-gold/30">
                  UP 99.98%
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold t-text-primary mb-2 flex items-center gap-2">
                <Server className="w-4 h-4 text-fae-fruit" />
                <span>Docker Microservices</span>
              </h3>
              <p className="text-xs t-text-secondary leading-relaxed mb-4 font-light">
                Hardened Ubuntu 24.04 LTS host running isolated Redis mutex queues, Baileys WhatsApp bridges, and PostgreSQL 3NF nodes.
              </p>
              <div className="font-mono text-[11px] t-accent-editorial space-y-1 bg-black/30 p-3 rounded-xl border border-white/5">
                <div>&bull; redis:7.2-alpine (Port 6379)</div>
                <div>&bull; postgres:16-bookworm (Port 5432)</div>
                <div>&bull; baileys-whatsapp-gw (Port 3000)</div>
              </div>
            </div>

            {/* Cluster 02 */}
            <div className="glass-card rounded-2xl p-6 border-t-4 border-t-precious-gold hover:border-precious-gold transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase tracking-wider text-precious-gold font-bold">Cluster 02</span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-precious-gold/15 text-precious-gold border border-precious-gold/30">
                  ACTIVE RTMP
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold t-text-primary mb-2 flex items-center gap-2">
                <Radio className="w-4 h-4 text-precious-gold" />
                <span>Media &amp; Video Engine</span>
              </h3>
              <p className="text-xs t-text-secondary leading-relaxed mb-4 font-light">
                Autonomous ffmpeg renderers, audio masterers, and 24/7 continuous low-bandwidth live radio broadcasters to YouTube Live.
              </p>
              <div className="font-mono text-[11px] t-accent-editorial space-y-1 bg-black/30 p-3 rounded-xl border border-white/5">
                <div>&bull; ffmpeg:6.1-nvenc (Hardware Accel)</div>
                <div>&bull; youtube-rtmps-relay (Port 443)</div>
                <div>&bull; labcut-context-chopper (v1.8)</div>
              </div>
            </div>

            {/* Cluster 03 */}
            <div className="glass-card rounded-2xl p-6 border-t-4 border-t-cyan-500 hover:border-precious-gold transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400 font-bold">Cluster 03</span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-precious-gold/15 text-precious-gold border border-precious-gold/30">
                  SECURE VAULT
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold t-text-primary mb-2 flex items-center gap-2">
                <Key className="w-4 h-4 text-cyan-400" />
                <span>PIN Staging Vault</span>
              </h3>
              <p className="text-xs t-text-secondary leading-relaxed mb-4 font-light">
                Dedicated namespaces for active commissions. Clients review staging deployments in strict isolation before production DNS cutover.
              </p>
              <div className="font-mono text-[11px] t-accent-editorial space-y-1 bg-black/30 p-3 rounded-xl border border-white/5">
                <div>&bull; 4-digit PIN authentication</div>
                <div>&bull; Per-client isolated container</div>
                <div>&bull; Zero shared session leak</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Interactive Simulated Labs Terminal (lines 6173-6244) */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4 border border-opal/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b t-border-subtle">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-opal/70 inline-block"></span>
              <span className="font-mono text-xs text-lavender-rose/80 font-bold ml-2">
                emurugat-labs-node-01:~#
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="t-text-muted text-[11px]">Click to Test:</span>
              <button
                type="button"
                onClick={() => handleRunCommand('docker')}
                className={`px-2.5 py-1 rounded inner-panel border transition-all text-[11px] ${
                  activeCmd === 'docker' ? 'border-precious-gold text-precious-gold font-bold bg-white/5' : 't-border-subtle hover:border-precious-gold text-precious-gold'
                }`}
              >
                docker ps
              </button>
              <button
                type="button"
                onClick={() => handleRunCommand('nueve')}
                className={`px-2.5 py-1 rounded inner-panel border transition-all text-[11px] ${
                  activeCmd === 'nueve' ? 'border-opal text-opal font-bold bg-white/5' : 't-border-subtle hover:border-opal text-opal'
                }`}
              >
                nueve --status
              </button>
              <button
                type="button"
                onClick={() => handleRunCommand('redis')}
                className={`px-2.5 py-1 rounded inner-panel border transition-all text-[11px] ${
                  activeCmd === 'redis' ? 'border-purple-400 text-purple-400 font-bold bg-white/5' : 't-border-subtle hover:border-purple-400 text-purple-400'
                }`}
              >
                redis-cli ping
              </button>
              <button
                type="button"
                onClick={() => handleRunCommand('iam')}
                className={`px-2.5 py-1 rounded inner-panel border transition-all text-[11px] ${
                  activeCmd === 'iam' ? 'border-cyan-400 text-cyan-400 font-bold bg-white/5' : 't-border-subtle hover:border-cyan-400 text-cyan-400'
                }`}
              >
                iam verify
              </button>
            </div>
          </div>

          <div className="p-4 rounded-xl font-mono text-xs leading-relaxed overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden text-opal min-h-[140px] bg-black/70 border border-white/5">
            {activeCmd === 'docker' && (
              <div>
                <span className="text-white font-bold block mb-1">
                  emurugat-labs:~# docker ps --format "table &#123;&#123;.Names&#125;&#125;\t&#123;&#123;.Status&#125;&#125;\t&#123;&#123;.Ports&#125;&#125;"
                </span>
                <pre className="text-opal font-mono text-xs">
{`NAMES               STATUS              PORTS
nueve-stream-live   Up 4 days (healthy) 0.0.0.0:1935->1935/tcp, 0.0.0.0:8000->8000/tcp
iam-rust-auth       Up 2 weeks (active) 0.0.0.0:8080->8080/tcp (Rust 0.38ms verification)
redis-state-mutex   Up 3 weeks (active) 0.0.0.0:6379->6379/tcp (10ms TTL inventory lock)
savannah-3nf-db     Up 3 weeks (active) 0.0.0.0:5432->5432/tcp (PostgreSQL 16 ACID B-Tree)`}
                </pre>
              </div>
            )}

            {activeCmd === 'nueve' && (
              <div>
                <span className="text-white font-bold block mb-1">
                  emurugat-labs:~# nueve --status --metrics
                </span>
                <pre className="text-opal font-mono text-xs">
{`[NUEVE LIVE STREAMING CORE v2.4-STABLE]
Egress Ingestion: ACTIVE (RTMP/RTMPS Port 1935)
Active Streams: 3 live channels
Latency: 118ms (WebSockets / WebRTC chunk relay)
Bandwidth Efficiency: 64.2% lower cost than third-party egress
Buffer Pool: 256MB pre-allocated (zero heap fragmentation)
System Health: OPTIMAL`}
                </pre>
              </div>
            )}

            {activeCmd === 'redis' && (
              <div>
                <span className="text-white font-bold block mb-1">
                  emurugat-labs:~# redis-cli ping && redis-cli --stat
                </span>
                <pre className="text-opal font-mono text-xs">
{`PONG
------- latency-history --------
min: 0.12ms | avg: 0.34ms | max: 0.88ms
Active Stock Locks: 14 SKU locks active
Deterministic TTL: 600s
Zero duplicate order confirmations registered.`}
                </pre>
              </div>
            )}

            {activeCmd === 'iam' && (
              <div>
                <span className="text-white font-bold block mb-1">
                  emurugat-labs:~# cargo test --package emurugat-iam-core -- --nocapture
                </span>
                <pre className="text-opal font-mono text-xs">
{`running 4 tests
test tests::test_jwt_asymmetric_validation ... ok (0.34ms)
test tests::test_rbac_privilege_escalation_guard ... ok (0.18ms)
test tests::test_hardware_key_fido2_contract ... ok (0.42ms)
test tests::test_zero_garbage_collection_allocation ... ok (0.09ms)

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.001s`}
                </pre>
              </div>
            )}
          </div>

          {toastMessage && (
            <div className="font-mono text-[11px] text-precious-gold animate-pulse text-right">
              ▶ {toastMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
