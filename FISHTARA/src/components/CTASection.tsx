import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheck, MessageSquare, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export const CTASection: React.FC = () => {
  return (
    <section className="relative py-20 bg-brand-navy overflow-hidden">
      {/* Background visual texture with soft waves */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-cyan blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-ocean blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-ocean/30 text-brand-cyan border border-brand-cyan/30 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
          Modern Fishing Park Nusantara
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Saatnya Menikmati Pengalaman Memancing yang Berbeda.
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Segera agendakan liburan seru Anda bersama keluarga dan rekan-rekan. Nikmati ketenangan kolam asri, sensasi strike memuaskan, dan hidangan kuliner lezat khas FISHTARA.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/reservasi"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-brand-ocean to-brand-cyan hover:from-brand-ocean-hover hover:to-brand-cyan-hover text-brand-navy font-bold px-8 py-3.5 rounded-full shadow-lg shadow-brand-ocean/30 hover:shadow-brand-cyan/40 transition-all duration-300 transform hover:-translate-y-1 text-base"
          >
            <CalendarCheck className="w-5 h-5 text-brand-navy" />
            <span>Reservasi Sekarang</span>
          </Link>

          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent('Halo Pengelola FISHTARA, saya ingin bertanya seputar pemancingan dan reservasi.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-full border border-white/20 transition-all duration-300 text-base backdrop-blur-sm"
          >
            <MessageSquare className="w-5 h-5 text-brand-cyan" />
            <span>Hubungi Pengelola</span>
          </a>
        </div>
      </div>
    </section>
  );
};
