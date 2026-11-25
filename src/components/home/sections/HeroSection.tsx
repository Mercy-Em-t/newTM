import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import type { RouteKey } from '../../../context/NavigationContext';

interface HeroSectionProps {
  onNavigate: (route: RouteKey) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section id="heroSection" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Block 1: Main Headline */}
          <div className="lg:col-span-7 lg:row-start-1 z-10">
            <h1 className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl xl:text-[4.4rem] leading-[1.08] tracking-tight t-text-primary mb-0">
              Stop Gambling on Fragile Software.
              <span className="block italic font-medium t-accent-editorial mt-2 text-2xl sm:text-4xl lg:text-5xl">
                Software Built Right the First Time.
              </span>
            </h1>
          </div>

          {/* Block 2: THE SINGLE CELESTIAL ASTROLABE & GLASS ORB */}
          <div className="lg:col-span-5 lg:row-span-2 flex items-center justify-center relative mt-2 lg:mt-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] aspect-square flex items-center justify-center">
              {/* Backing Ambient Multi-stop Aura */}
              <div
                className="absolute inset-0 rounded-full blur-[80px] pointer-events-none opacity-50"
                style={{
                  background:
                    'radial-gradient(circle, rgba(217,115,82,0.38) 0%, rgba(158,30,91,0.32) 42%, rgba(104,80,173,0.22) 70%, transparent 88%)',
                }}
              ></div>
              <svg
                viewBox="0 0 600 600"
                className="w-full h-full overflow-visible drop-shadow-[0_28px_48px_rgba(10,2,16,0.52)]"
                role="img"
                aria-label="Celestial astrolabe orb with fluid ink waves and Nairobi coordinates"
              >
                <defs>
                  <linearGradient id="inkOpalCrimson" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6850AD" stopOpacity="0.88" />
                    <stop offset="48%" stopColor="#9E1E5B" stopOpacity="0.84" />
                    <stop offset="100%" stopColor="#6B0733" stopOpacity="0.92" />
                  </linearGradient>
                  <linearGradient id="inkCrimsonFae" x1="10%" y1="90%" x2="90%" y2="10%">
                    <stop offset="0%" stopColor="#2D1036" stopOpacity="0.85" />
                    <stop offset="35%" stopColor="#6B0733" stopOpacity="0.90" />
                    <stop offset="72%" stopColor="#D97352" stopOpacity="0.86" />
                    <stop offset="100%" stopColor="#F4B956" stopOpacity="0.92" />
                  </linearGradient>
                  <linearGradient id="inkSilkGold" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6850AD" stopOpacity="0.65" />
                    <stop offset="42%" stopColor="#9E1E5B" stopOpacity="0.72" />
                    <stop offset="78%" stopColor="#D97352" stopOpacity="0.78" />
                    <stop offset="100%" stopColor="#F4B956" stopOpacity="0.88" />
                  </linearGradient>
                  <radialGradient id="celestialCore" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                    <stop offset="18%" stopColor="#F4B956" stopOpacity="0.88" />
                    <stop offset="46%" stopColor="#D97352" stopOpacity="0.72" />
                    <stop offset="74%" stopColor="#9E1E5B" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#2D1036" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="orbGlassSheen" cx="32%" cy="26%" r="68%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.48" />
                    <stop offset="28%" stopColor="#FAF4F7" stopOpacity="0.18" />
                    <stop offset="65%" stopColor="#6850AD" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="#0B020F" stopOpacity="0.42" />
                  </radialGradient>
                  <linearGradient id="ringGoldShimmer" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F4B956" stopOpacity="0.95" />
                    <stop offset="25%" stopColor="#D97352" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#FAF4F7" stopOpacity="0.9" />
                    <stop offset="75%" stopColor="#9E1E5B" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#F4B956" stopOpacity="0.9" />
                  </linearGradient>
                  <filter id="astrolabeGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <clipPath id="orbInnerClip">
                    <circle cx="300" cy="300" r="236" />
                  </clipPath>
                </defs>

                {/* 1. Outer Concentric Astrolabe Coordinate Rings */}
                <g className="animate-[slowOrbit_160s_linear_infinite] origin-[300px_300px]">
                  <circle cx="300" cy="300" r="286" fill="none" stroke="url(#ringGoldShimmer)" strokeWidth="1" strokeOpacity="0.32" strokeDasharray="3 7" />
                  <circle cx="300" cy="300" r="274" fill="none" stroke="#D97352" strokeWidth="1.2" strokeOpacity="0.38" strokeDasharray="18 4 2 4" />
                  <circle cx="300" cy="300" r="260" fill="none" stroke="#F4B956" strokeWidth="0.8" strokeOpacity="0.45" />
                  <circle cx="300" cy="300" r="248" fill="none" stroke="url(#ringGoldShimmer)" strokeWidth="1.5" strokeOpacity="0.55" strokeDasharray="40 8 4 8" />
                  <g opacity="0.45" stroke="#F4B956" strokeWidth="1">
                    <line x1="300" y1="14" x2="300" y2="34" />
                    <line x1="300" y1="566" x2="300" y2="586" />
                    <line x1="14" y1="300" x2="34" y2="300" />
                    <line x1="566" y1="300" x2="586" y2="300" />
                  </g>
                </g>

                {/* 2. Glass Sphere Outer Casing */}
                <circle cx="300" cy="300" r="240" fill="#0E0314" fillOpacity="0.55" stroke="url(#ringGoldShimmer)" strokeWidth="2" filter="url(#astrolabeGlow)" />

                {/* 3. Clipped Interior: Fluid Ink Waves & Celestial Core */}
                <g clipPath="url(#orbInnerClip)">
                  <circle cx="300" cy="300" r="236" fill="#15051F" />
                  <path
                    d="M60,330 C120,220 200,420 300,280 C400,140 480,360 540,290 L540,540 L60,540 Z"
                    fill="url(#inkOpalCrimson)"
                    className="animate-[silkBreathe_18s_ease-in-out_infinite]"
                    opacity="0.85"
                  />
                  <path
                    d="M60,280 C150,380 230,190 320,320 C410,450 470,220 540,340 L540,540 L60,540 Z"
                    fill="url(#inkCrimsonFae)"
                    className="animate-[silkBreathe_24s_ease-in-out_infinite_reverse]"
                    opacity="0.78"
                  />
                  <path
                    d="M60,380 C160,290 220,440 310,330 C400,220 460,400 540,320 L540,540 L60,540 Z"
                    fill="url(#inkSilkGold)"
                    className="animate-[floatAura_14s_ease-in-out_infinite]"
                    opacity="0.65"
                  />
                  <circle cx="300" cy="300" r="140" fill="url(#celestialCore)" className="animate-[moonPulse_7s_ease-in-out_infinite]" />
                  <g opacity="0.65">
                    <circle cx="210" cy="180" r="2" fill="#FFFFFF" className="animate-[starTwinkle_4s_ease-in-out_infinite]" />
                    <circle cx="390" cy="190" r="1.8" fill="#F4B956" className="animate-[starTwinkle_5s_ease-in-out_infinite_1s]" />
                    <circle cx="180" cy="320" r="1.5" fill="#FAF4F7" className="animate-[starTwinkle_6s_ease-in-out_infinite_2s]" />
                    <circle cx="420" cy="340" r="2.2" fill="#D97352" className="animate-[starTwinkle_4.5s_ease-in-out_infinite_1.5s]" />
                  </g>
                  <ellipse cx="300" cy="300" rx="210" ry="85" fill="none" stroke="url(#ringGoldShimmer)" strokeWidth="1.2" strokeOpacity="0.45" transform="rotate(-24 300 300)" strokeDasharray="14 6 3 6" />
                  <ellipse cx="300" cy="300" rx="205" ry="55" fill="none" stroke="#FAF4F7" strokeWidth="0.8" strokeOpacity="0.32" transform="rotate(32 300 300)" />
                </g>

                {/* 4. Glass Surface Highlight & Curvature Sheen */}
                <circle cx="300" cy="300" r="236" fill="url(#orbGlassSheen)" pointerEvents="none" />
                <ellipse cx="230" cy="140" rx="95" ry="38" fill="#FFFFFF" fillOpacity="0.18" transform="rotate(-28 230 140)" pointerEvents="none" />

                {/* 5. Precision Graduation Ticks along Armillary Rim */}
                <g opacity="0.75" stroke="#F4B956" strokeWidth="1">
                  <circle cx="300" cy="60" r="3.5" fill="#F4B956" />
                  <circle cx="300" cy="540" r="3.5" fill="#F4B956" />
                  <circle cx="60" cy="300" r="3.5" fill="#D97352" />
                  <circle cx="540" cy="300" r="3.5" fill="#D97352" />
                </g>

                {/* 6. Nairobi Meridian & Polar Axis Legend */}
                <text x="300" y="562" textAnchor="middle" fill="#FAF4F7" fillOpacity="0.75" fontSize="11" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.22em">
                  NAIROBI · 1.2921° S 36.8219° E
                </text>
                <text x="300" y="48" textAnchor="middle" fill="#F4B956" fillOpacity="0.85" fontSize="10" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.26em">
                  SAVANNAH ATELIER · MERIDIAN 0°
                </text>
              </svg>
            </div>
          </div>

          {/* Block 3: Manifesto Lead, Action Buttons & Telemetry Proof */}
          <div className="lg:col-span-7 lg:row-start-2 z-10 space-y-6 sm:space-y-8">
            <p className="text-base sm:text-lg lg:text-xl font-light t-text-secondary leading-relaxed max-w-2xl">
              When 50 buyers hit your checkout at the exact same second or your tournament schedule faces a sudden rain delay, brittle code crumbles. I design and build resilient backends, zero-overselling commerce engines, and sovereign Linux systems that stay fast, accurate, and completely under your control.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={() => onNavigate('commission')}
                className="px-7 py-4 rounded-full btn-luminous text-xs sm:text-sm font-mono tracking-wider uppercase font-semibold flex items-center justify-center gap-2 group transition-all"
              >
                <span>Commission an Architecture</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('work')}
                className="px-7 py-4 rounded-full btn-ghost-twilight text-xs sm:text-sm font-mono tracking-wider uppercase flex items-center justify-center gap-2 transition-all"
              >
                <span>Explore Architectures</span>
                <ChevronRight className="w-4 h-4 text-precious-gold" />
              </button>
            </div>

            {/* Architecture Invariant Badges */}
            <div className="pt-2 sm:pt-4 border-t t-border-subtle grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-precious-gold shrink-0" />
                <span className="font-mono text-xs t-text-secondary">
                  <strong className="text-precious-gold font-bold">100%</strong> Invariant Verification
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-opal shrink-0" />
                <span className="font-mono text-xs t-text-secondary">
                  <strong className="text-precious-gold font-bold">3NF</strong> Relational Integrity
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Cpu className="w-4 h-4 text-fae-fruit shrink-0" />
                <span className="font-mono text-xs t-text-secondary">
                  <strong className="text-precious-gold font-bold">Zero</strong> Race Conditions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
