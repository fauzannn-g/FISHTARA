import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = 'h-10', 
  variant = 'light',
  showSubtitle = true 
}) => {
  const isLight = variant === 'light'; // Light text for dark background
  const textColor = isLight ? '#FFFFFF' : '#071D3A';
  const subColor = isLight ? '#20C5E8' : '#0879C9';

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group transition-transform ${className}`}>
      {/* Dynamic Emblem */}
      <div className="relative w-11 h-11 shrink-0 rounded-2xl bg-gradient-to-br from-brand-navy via-brand-ocean to-brand-cyan p-[2px] shadow-md shadow-brand-ocean/20 transition-all duration-300 group-hover:shadow-brand-cyan/40">
        <div className="w-full h-full bg-brand-navy rounded-[14px] flex items-center justify-center overflow-hidden">
          <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logoEmblemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0879C9" />
                <stop offset="100%" stopColor="#20C5E8" />
              </linearGradient>
            </defs>
            <path 
              d="M 28 32 C 38 20, 68 22, 74 38 C 78 48, 70 64, 55 68 C 45 71, 38 64, 38 56 C 38 48, 48 44, 52 48" 
              stroke="url(#logoEmblemGrad)" 
              strokeWidth="8" 
              strokeLinecap="round" 
              fill="none" 
            />
            <circle cx="28" cy="32" r="5" fill="#20C5E8" />
            <path 
              d="M 52 68 C 65 74, 76 70, 80 62 C 84 54, 78 40, 78 40" 
              stroke="#FFFFFF" 
              strokeWidth="3.5" 
              strokeLinecap="round" 
              opacity="0.85" 
              fill="none" 
            />
            <path 
              d="M 22 78 C 34 74, 44 82, 56 78 C 68 74, 78 80, 82 78" 
              stroke="#20C5E8" 
              strokeWidth="4" 
              strokeLinecap="round" 
              fill="none" 
            />
          </svg>
        </div>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col">
        <div className="flex items-center tracking-wider text-xl font-extrabold leading-none">
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
