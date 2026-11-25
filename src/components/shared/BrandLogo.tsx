import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  sublabel?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  sublabel = 'SAVANNAH ATELIER',
}) => {
  const sizeMap = {
    sm: {
      name: 'text-[12.5px] tracking-[0.14em]',
      sub: 'text-[7.5px] tracking-[0.24em]',
      gap: 'mt-0.5',
    },
    md: {
      name: 'text-[14.5px] sm:text-[15.5px] tracking-[0.15em]',
      sub: 'text-[8.5px] sm:text-[9px] tracking-[0.24em]',
      gap: 'mt-0.5',
    },
    lg: {
      name: 'text-[18px] sm:text-[20px] tracking-[0.16em]',
      sub: 'text-[9.5px] sm:text-[10px] tracking-[0.24em]',
      gap: 'mt-1',
    },
  };

  const current = sizeMap[size];

  return (
    <div className={`flex flex-col min-w-0 select-none ${className}`}>
      <div className={`flex items-baseline leading-none font-serif ${current.name}`}>
        <span className="brand-first uppercase">TRYPHEN</span>
        <span className="brand-last uppercase ml-1.5">EMURUGAT</span>
      </div>
      <span className={`brand-sub font-mono uppercase font-semibold leading-none ${current.sub} ${current.gap}`}>
        {sublabel}
      </span>
    </div>
  );
};
