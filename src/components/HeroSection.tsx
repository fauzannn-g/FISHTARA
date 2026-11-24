import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheck, Compass, Sparkles, Award, Waves, Users } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-navy">
      {/* Background Image with Deep Blue Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2000&q=85"
          alt="Panorama Kolam Pemancingan FISHTARA"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Multi-layered gradient for brand contrast & readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/50" />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center lg:text-left py-12">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-ocean/40 border border-brand-cyan/40 text-brand-cyan text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md mb-6 animate-pulse">
            <Sparkles className="w-4 h-4 text-brand-cyan" />
            <span>Modern Fishing Park & Rekreasi Keluarga</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 drop-shadow-md">
            {BRAND_INFO.headline}
          </h1>

          {/* Brief Description */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed mb-8 font-normal max-w-2xl drop-shadow">
            {BRAND_INFO.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
            <Link
              to="/reservasi"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-brand-ocean to-brand-cyan hover:from-brand-ocean-hover hover:to-brand-cyan-hover text-brand-navy font-bold px-7 py-3.5 rounded-full shadow-lg shadow-brand-ocean/40 hover:shadow-brand-cyan/50 transition-all duration-300 transform hover:-translate-y-0.5 text-base"
            >
              <CalendarCheck className="w-5 h-5 text-brand-navy" />
              <span>Reservasi Sekarang</span>
            </Link>

            <Link
              to="/tentang"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full border border-white/25 transition-all duration-300 text-base backdrop-blur-md"
            >
              <Compass className="w-5 h-5 text-brand-cyan" />
              <span>Jelajahi FISHTARA</span>
            </Link>
          </div>

          {/* Quick Stats / Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/15">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan shrink-0">
                <Waves className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm sm:text-base">Air Sirkulasi</p>
                <p className="text-slate-300 text-xs">Jernih & Bebas Bau</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-ocean/30 border border-brand-ocean/40 flex items-center justify-center text-brand-cyan shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm sm:text-base">Ramah Keluarga</p>
                <p className="text-slate-300 text-xs">Gazebo & Playground</p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm sm:text-base">Kuliner Segar</p>
                <p className="text-slate-300 text-xs">Langsung Dari Kolam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
