import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { PackageCard } from '../components/PackageCard';
import { GalleryGrid } from '../components/GalleryGrid';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { InstagramFeed } from '../components/InstagramFeed';
import { CTASection } from '../components/CTASection';
import { 
  FACILITIES_DATA, 
  PACKAGES_DATA, 
  ABOUT_STORY 
} from '../data/mockData';
import { 
  Waves, 
  ArrowRight, 
  Sparkles, 
  Award, 
  CheckCircle,
  Eye,
  CalendarCheck
} from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Tentang FISHTARA Quick Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual Mosaic */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
                  alt="Suasana Pemancingan FISHTARA"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-brand-navy/85 backdrop-blur-md text-white border border-brand-cyan/20">
                  <p className="font-extrabold text-sm text-brand-cyan">KONSEP MODERN FISHING PARK</p>
                  <p className="text-xs text-slate-200 mt-1">Mengintegrasikan rekreasi alam, kenyamanan keluarga, dan kuliner khas nusantara.</p>
                </div>
              </div>
              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-brand-ocean to-brand-navy text-white p-5 rounded-2xl shadow-xl border-2 border-brand-cyan/40 hidden sm:block">
                <p className="text-3xl font-extrabold text-brand-cyan">100%</p>
                <p className="text-xs text-slate-200 font-medium">Air Bersih & Terawat</p>
              </div>
            </div>

            {/* Narrative Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-ocean/10 text-brand-ocean border border-brand-ocean/20 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-brand-ocean" />
                <span>Mengenal FISHTARA</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight mb-5">
                Standar Baru Pemancingan Keluarga di Nusantara
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                {ABOUT_STORY.profile}
              </p>

              {/* Vision Points */}
              <div className="space-y-3.5 mb-8">
                {ABOUT_STORY.values.slice(0, 3).map((val, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-brand-ocean" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-brand-navy">{val.title}</h4>
                      <p className="text-xs text-slate-500 leading-normal">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/tentang"
                  className="inline-flex items-center gap-2 font-bold text-sm text-brand-navy bg-brand-cyan/20 hover:bg-brand-cyan/30 px-6 py-3 rounded-xl transition-colors"
                >
                  <span>Baca Cerita Lengkap Kami</span>
                  <ArrowRight className="w-4 h-4 text-brand-ocean" />
                </Link>
                <Link
                  to="/reservasi"
                  className="inline-flex items-center gap-2 font-bold text-sm text-white bg-brand-navy hover:bg-brand-navy-light px-6 py-3 rounded-xl shadow-md transition-colors"
                >
                  <CalendarCheck className="w-4 h-4 text-brand-cyan" />
                  <span>Jadwalkan Kunjungan</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Fasilitas Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/15 text-brand-navy border border-brand-cyan/30 mb-3">
              <Waves className="w-3.5 h-3.5 text-brand-ocean" />
              Fasilitas Kelas Premium
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              Kenyamanan Maksimal untuk Seluruh Pengunjung
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              Dari kolam beroksigen tinggi hingga resto kuliner dengan hidangan ikan segar, seluruh kebutuhan rekreasi Anda telah kami persiapkan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FACILITIES_DATA.map((fac) => (
              <div
                key={fac.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={fac.image}
                    alt={fac.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-brand-navy/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-cyan">
                    {fac.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-ocean transition-colors">
                      {fac.name}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {fac.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <ul className="space-y-1.5">
                      {fac.features.slice(0, 2).map((feat, i) => (
                        <li key={i} className="text-xs text-slate-500 flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/fasilitas"
              className="inline-flex items-center gap-2 font-bold text-sm text-brand-ocean hover:text-brand-ocean-hover border border-brand-ocean/30 hover:border-brand-ocean px-6 py-3 rounded-full transition-all"
            >
              <span>Lihat Detail Semua Fasilitas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Paket Memancing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-ocean/10 text-brand-ocean border border-brand-ocean/20 mb-3">
              <Award className="w-3.5 h-3.5" />
              Paket Wisata & Memancing
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              Pilihan Paket Sesuai Gaya Rekreasi Anda
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              Tersedia paket santai kiloan, tantangan angler harian master, hingga paket gathering lengkap bersama keluarga tercinta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGES_DATA.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <div className="mt-12 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-2xl mx-auto">
            <p className="text-xs text-slate-500">
              *Harga dan durasi paket dapat disesuaikan untuk kebutuhan khusus acara instansi / komunitas.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Galeri Preview */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/20 text-brand-navy border border-brand-cyan/30 mb-3">
                <Eye className="w-3.5 h-3.5 text-brand-ocean" />
                Dokumentasi Visual
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
                Galeri Suasana & Momen Strike
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-xl">
                Potret nyata suasana asri kolam, kebersamaan keluarga, dan sensasi memancing seru di FISHTARA.
              </p>
            </div>

            <Link
              to="/galeri"
              className="inline-flex items-center gap-2 font-bold text-sm text-brand-ocean hover:text-brand-ocean-hover transition-colors"
            >
              <span>Buka Galeri Lengkap</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <GalleryGrid initialLimit={6} showFilters={false} />
        </div>
      </section>

      {/* 6. Testimoni */}
      <TestimonialsSection />

      {/* 7. Instagram Section */}
      <InstagramFeed />

      {/* 8. CTA Section */}
      <CTASection />
    </div>
  );
};
