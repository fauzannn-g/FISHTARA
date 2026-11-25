import React from 'react';
import { ABOUT_STORY, BRAND_INFO } from '../data/mockData';
import { CTASection } from '../components/CTASection';
import { ShieldCheck, Target, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-ocean/50 to-brand-navy opacity-70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Tentang FISHTARA
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Mengenal Lebih Dekat FISHTARA
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            {BRAND_INFO.fullName} - Menghadirkan era baru rekreasi pemancingan keluarga yang higienis, modern, dan berstandar nusantara.
          </p>
        </div>
      </section>

      {/* Story & History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-ocean">Sejarah & Profil</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mt-2 mb-6">
                Lahir Dari Kerinduan Wisata Alam yang Nyaman & Bersih
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>{ABOUT_STORY.profile}</p>
                <p>{ABOUT_STORY.history}</p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <span className="text-2xl font-extrabold text-brand-ocean">120+</span>
                  <p className="text-xs text-slate-500 font-medium mt-1">Lapak Pancing Bersih & Teratur</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <span className="text-2xl font-extrabold text-brand-cyan">100%</span>
                  <p className="text-xs text-slate-500 font-medium mt-1">Sirkulasi Air Alami Non-Kimiawi</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
                  alt="Danau Pemancingan FISHTARA"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-navy p-5 rounded-2xl text-white shadow-xl max-w-xs border border-brand-cyan/30 hidden sm:flex items-center gap-4">
                <img
                  src={`${import.meta.env.BASE_URL}logo.png`}
                  alt="Logo FISHTARA"
                  className="w-14 h-14 rounded-full bg-white object-contain p-1 ring-2 ring-brand-cyan shrink-0"
                />
                <div>
                  <p className="text-xs font-semibold text-brand-cyan uppercase">Logo Resmi FISHTARA</p>
                  <p className="text-xs text-slate-300 mt-0.5">Identitas otentik Pemancingan Nusantara modern & terpercaya.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-ocean/10 text-brand-ocean flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-brand-navy mb-4">Visi FISHTARA</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  "{ABOUT_STORY.vision}"
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-brand-ocean font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Pelopor Modern Fishing Park Indonesia</span>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-brand-navy text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between border border-brand-cyan/30">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-cyan/20 text-brand-cyan flex items-center justify-center mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4">Misi FISHTARA</h3>
                <ul className="space-y-3.5">
                  {ABOUT_STORY.mission.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-brand-cyan font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Komitmen Standar Kualitas Tinggi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai & Konsep Bisnis */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-ocean">Prinsip & Nilai Dasar</span>
            <h2 className="text-3xl font-extrabold text-brand-navy mt-1">
              Nilai Utama yang Kami Junjung Tinggi
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Empat pilar yang mendasari setiap layanan dan tata kelola di FISHTARA.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_STORY.values.map((val, idx) => (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-ocean/40 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-ocean/10 text-brand-ocean flex items-center justify-center mb-4 font-bold text-sm">
                  0{idx + 1}
                </div>
                <h4 className="font-extrabold text-brand-navy text-base mb-2">{val.title}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
