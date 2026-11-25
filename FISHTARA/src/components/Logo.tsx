import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'light',
  showSubtitle = true,
  size = 'md'
}) => {
  const isLight = variant === 'light'; // Light text for dark background
  const textColor = isLight ? '#FFFFFF' : '#071D3A';
  const subColor = isLight ? '#20C5E8' : '#0879C9';

  const imgDimensions = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11 sm:w-12 sm:h-12',
    lg: 'w-16 h-16',
  }[size];

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  }[size];

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group transition-transform ${className}`}>
      {/* Official Circular Logo Badge */}
      <div className="relative shrink-0">
        <img 
          src={`${import.meta.env.BASE_URL}logo.png`} 
          alt="Logo Resmi FISHTARA Pemancingan Nusantara" 
          className={`${imgDimensions} object-contain rounded-full bg-white shadow-md shadow-brand-ocean/30 ring-2 ring-brand-cyan/60 p-0.5 group-hover:scale-105 group-hover:ring-brand-cyan transition-all duration-300`}
        />
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col">
        <div className={`flex items-center tracking-wider ${titleSizes} font-extrabold leading-none`}>
          <span style={{ color: textColor }}>FISH</span>
          <span className="text-brand-cyan">TARA</span>
        </div>
        {showSubtitle && (
          <span 
            className="text-[9px] uppercase tracking-[0.25em] font-semibold mt-1"
            style={{ color: subColor }}
          >
            PEMANCINGAN NUSANTARA
          </span>
        )}
      </div>
    </Link>
  );
};
