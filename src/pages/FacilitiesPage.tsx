import React from 'react';
import { FACILITIES_DATA } from '../data/mockData';
import { CTASection } from '../components/CTASection';
import { CheckCircle2, Sparkles, Waves } from 'lucide-react';

export const FacilitiesPage: React.FC = () => {
  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-ocean/40 to-brand-navy opacity-80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 mb-3">
            <Waves className="w-3.5 h-3.5" />
            Sarana & Prasarana
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Fasilitas Lengkap Modern Fishing Park
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Dirancang dengan tata ruang terpadu demi kenyamanan hobi memancing Anda dan kebersamaan bahagia keluarga.
          </p>
        </div>
      </section>

      {/* Facilities List Detailed */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {FACILITIES_DATA.map((fac, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={fac.id}
                id={fac.id}
                className={`bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Media Image */}
                <div className={`relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100 ${
                  isReversed ? 'lg:col-start-2' : ''
                }`}>
                  <img
                    src={fac.image}
                    alt={fac.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-brand-navy/85 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-brand-cyan border border-brand-cyan/20">
                    {fac.category}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-brand-cyan/15 text-brand-ocean mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Fasilitas Unggulan #{idx + 1}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-4">
                    {fac.name}
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {fac.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Spesifikasi & Keunggulan:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {fac.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </div>
  );
};
