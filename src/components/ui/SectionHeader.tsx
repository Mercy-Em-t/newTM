import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`space-y-3 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.24em] t-accent-warm block font-semibold">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl sm:text-5xl font-light t-text-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base t-text-secondary leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};
