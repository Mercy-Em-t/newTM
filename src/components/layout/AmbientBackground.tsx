import React from 'react';

/**
 * Ambient Twilight Nebula & Architectural Blueprint Background
 * Corresponds to lines 686-695 of indexA.html
 */
export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base Canvas Wash */}
      <div className="absolute inset-0 theme-bg-gradient" />
      <div className="absolute inset-0 architectural-grid opacity-85" />

      {/* Splotch 1: Hero Top Right (Astrolabe Aura) - Painterly Deep Pink Bloom */}
      <div 
        className="aura-reverse absolute top-[3%] -right-20 w-[44rem] h-[44rem] rounded-full blur-[150px] opacity-90" 
        style={{ background: 'var(--aura-crimson)' }} 
      />

      {/* Splotch 2: Hero Top Left Eyebrow - Luminous Soft Petal Cloud */}
      <div 
        className="aura-slow absolute -top-28 -left-20 w-[38rem] h-[38rem] rounded-full blur-[145px] opacity-80" 
        style={{ background: 'var(--aura-opal)' }} 
      />

      {/* Splotch 3: Mid-page Asymmetric Wash (Protocol / Case Studies) - Washed-Away Deep Pink Splotch */}
      <div 
        className="aura-slow absolute top-[38%] -left-28 w-[40rem] h-[40rem] rounded-full blur-[165px] opacity-85" 
        style={{ background: 'var(--aura-fae)' }} 
      />

      {/* Splotch 4: Mid-Right Ethereal Bloom (Ecosystem / Bento Grid) - Subtle Rose Quartz Blossom */}
      <div 
        className="aura-reverse absolute top-[62%] -right-24 w-[38rem] h-[38rem] rounded-full blur-[160px] opacity-80" 
        style={{ background: 'var(--aura-blush)' }} 
      />

      {/* Splotch 5: Lower Canvas / Footer Bloom - Radiating Washed Amaranth Splotch */}
      <div 
        className="aura-slow absolute bottom-[-8%] left-[20%] w-[46rem] h-[46rem] rounded-full blur-[165px] opacity-90" 
        style={{ background: 'var(--aura-crimson)' }} 
      />
    </div>
  );
};
