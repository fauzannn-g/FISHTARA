import React from 'react';
import { PACKAGES_DATA } from '../data/mockData';
import { PackageCard } from '../components/PackageCard';
import { CTASection } from '../components/CTASection';
import { Award, CheckCircle, Info } from 'lucide-react';

export const PackagesPage: React.FC = () => {
  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-ocean/40 to-brand-navy opacity-80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 mb-3">
            <Award className="w-3.5 h-3.5" />
            Daftar Paket & Biaya
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Paket Memancing & Rekreasi FISHTARA
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Pilihan paket transparan dengan fasilitas lengkap. Bebas pilih paket kiloan santai, tantangan masteran, hingga acara gathering rombongan.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PACKAGES_DATA.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          {/* Terms & Regulations */}
          <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4 text-brand-navy">
              <Info className="w-5 h-5 text-brand-ocean" />
              <h3 className="font-extrabold text-lg">Ketentuan Umum Memancing di FISHTARA</h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Pengunjung dipersilakan membawa joran sendiri atau memanfaatkan fasilitas penyewaan alat resmi FISHTARA.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Untuk paket kiloan, penimbangan ikan dilakukan di pos penimbangan sebelum diolah di resto atau dibawa pulang.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Dilarang keras menggunakan obat kimia, racun, atau teknik memancing yang membahayakan kelestarian ekosistem kolam.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Anak-anak di area tepian kolam wajib dalam pengawasan orang tua demi keamanan bersama.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
