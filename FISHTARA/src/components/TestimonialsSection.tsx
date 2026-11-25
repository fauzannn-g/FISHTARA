import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Pengalaman Pengunjung</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Apa Kata Mereka Tentang <span className="text-brand-ocean">FISHTARA</span>?
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Kepuasan pemancing, keluarga, dan penikmat kuliner adalah komitmen utama kami.
          </p>
          <div className="inline-block mt-3 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-medium">
            *Data ulasan di bawah merupakan contoh simulasi (Demo Content) untuk demonstrasi antarmuka.
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-cyan/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="absolute top-5 right-5 text-brand-cyan/30 group-hover:text-brand-cyan/50 transition-colors">
                <MessageSquareQuote className="w-8 h-8" />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-semibold text-slate-500 ml-1.5">{item.rating}.0 / 5.0</span>
                </div>

                {/* Caught highlight */}
                {item.fishCaught && (
                  <div className="inline-block px-2.5 py-1 rounded-md bg-brand-cyan/15 text-brand-ocean font-semibold text-xs mb-3">
                    Tangkapan: {item.fishCaught}
                  </div>
                )}

                {/* Review text */}
                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  "{item.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/80">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-brand-cyan/30"
                />
                <div>
                  <h4 className="font-bold text-brand-navy text-sm">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.city} • <span className="text-slate-400">{item.date}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
