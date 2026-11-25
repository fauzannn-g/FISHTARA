import React from 'react';
import { Link } from 'react-router-dom';
import { FishingPackage } from '../types';
import { formatRupiah } from '../utils/storage';
import { Check, Clock, Fish, ArrowRight, Sparkles } from 'lucide-react';

interface Props {
  pkg: FishingPackage;
  featured?: boolean;
}

export const PackageCard: React.FC<Props> = ({ pkg, featured = false }) => {
  return (
    <div
      className={`rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between relative ${
        featured || pkg.isPopular
          ? 'bg-gradient-to-b from-brand-navy to-brand-navy-light text-white shadow-xl shadow-brand-ocean/20 border-2 border-brand-cyan/40 scale-[1.02]'
          : 'bg-white text-slate-800 shadow-md hover:shadow-xl border border-slate-200'
      }`}
    >
      {/* Popular Badge */}
      {(featured || pkg.isPopular) && (
        <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-brand-ocean to-brand-cyan text-brand-navy shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-brand-navy" />
            {pkg.badge || 'Pilihan Favorit'}
          </span>
        </div>
      )}

      <div>
        {/* Top Header */}
        <div className="mb-4">
          <h3 className={`text-xl font-extrabold ${featured || pkg.isPopular ? 'text-white' : 'text-brand-navy'}`}>
            {pkg.name}
          </h3>
          <p className={`text-xs mt-1 leading-relaxed ${featured || pkg.isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
            {pkg.description}
          </p>
        </div>

        {/* Pricing & Duration */}
        <div className="my-5 pb-5 border-b border-slate-200/20">
          <div className="flex items-baseline gap-1.5">
            <span className={`text-3xl font-extrabold tracking-tight ${featured || pkg.isPopular ? 'text-brand-cyan' : 'text-brand-ocean'}`}>
              {formatRupiah(pkg.price)}
            </span>
            <span className={`text-xs font-medium ${featured || pkg.isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
              / paket
            </span>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold ${
              featured || pkg.isPopular ? 'bg-white/10 text-brand-cyan' : 'bg-brand-cyan/15 text-brand-navy'
            }`}>
              <Clock className="w-3.5 h-3.5" />
              {pkg.duration}
            </span>
          </div>
        </div>

        {/* Target Fish */}
        <div className="mb-6">
          <span className={`text-xs font-bold uppercase tracking-wider block mb-2 ${
            featured || pkg.isPopular ? 'text-slate-300' : 'text-slate-500'
          }`}>
            Target Ikan Utama:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {pkg.targetFish.map((fish, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md font-medium ${
                  featured || pkg.isPopular ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                <Fish className="w-3 h-3 text-brand-cyan" />
                {fish}
              </span>
            ))}
          </div>
        </div>

        {/* Inclusions */}
        <div className="space-y-2.5 mb-6">
          <span className={`text-xs font-bold uppercase tracking-wider block mb-1 ${
            featured || pkg.isPopular ? 'text-slate-300' : 'text-slate-500'
          }`}>
            Fasilitas Termasuk:
          </span>
          {pkg.facilitiesIncluded.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
              <Check className={`w-4 h-4 mt-0.5 shrink-0 ${
                featured || pkg.isPopular ? 'text-brand-cyan' : 'text-emerald-600'
              }`} />
              <span className={featured || pkg.isPopular ? 'text-slate-200' : 'text-slate-700'}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Button Action */}
      <div className="pt-4 border-t border-slate-200/20">
        <Link
          to={`/reservasi?package=${pkg.id}`}
          className={`w-full inline-flex items-center justify-center gap-2 font-bold py-3 px-5 rounded-2xl transition-all duration-200 text-sm shadow-sm ${
            featured || pkg.isPopular
              ? 'bg-gradient-to-r from-brand-ocean to-brand-cyan hover:from-brand-ocean-hover hover:to-brand-cyan-hover text-brand-navy shadow-brand-cyan/25'
              : 'bg-brand-navy hover:bg-brand-navy-light text-white hover:text-brand-cyan'
          }`}
        >
          <span>Pilih & Reservasi Paket</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
