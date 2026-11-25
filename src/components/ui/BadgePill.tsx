import React from 'react';

interface BadgePillProps {
  children: React.ReactNode;
  pulseDot?: boolean;
  pulseColor?: string;
  icon?: React.ReactNode;
  variant?: 'gold' | 'fae' | 'opal' | 'neutral';
  className?: string;
}

export const BadgePill: React.FC<BadgePillProps> = ({
  children,
  pulseDot = false,
  pulseColor = 'bg-precious-gold',
  icon,
  variant = 'gold',
  className = '',
}) => {
  const variantStyles = {
    gold: 'border-precious-gold/30 text-precious-gold',
    fae: 'border-fae-fruit/30 text-fae-fruit',
    opal: 'border-opal/30 text-opal',
    neutral: 'border-white/10 t-text-secondary',
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full inner-panel border font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] font-semibold ${variantStyles[variant]} ${className}`}
    >
      {pulseDot && <span className={`w-1.5 h-1.5 rounded-full ${pulseColor} animate-pulse shrink-0`} />}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </div>
  );
};
