import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  padding?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  padding,
  ...rest
}) => {
  // If className already defines padding (e.g. p-*, px-*, py-*), use that;
  // otherwise default to luxury responsive padding (p-6 sm:p-8).
  const hasPaddingInClassName = /(^|\s)p[xytb]?-/.test(className);
  const resolvedPadding = padding !== undefined ? padding : (hasPaddingInClassName ? '' : 'p-6 sm:p-8');

  return (
    <div
      className={`glass-card rounded-3xl ${resolvedPadding} ${
        hoverEffect ? 'hover:-translate-y-1' : ''
      } transition-all duration-300 relative overflow-hidden ${className}`.trim()}
      {...rest}
    >
      {children}
    </div>
  );
};
