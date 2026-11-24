import React from 'react';
import { GalleryGrid } from '../components/GalleryGrid';
import { CTASection } from '../components/CTASection';
import { Camera } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-ocean/40 to-brand-navy opacity-80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 mb-3">
            <Camera className="w-3.5 h-3.5" />
            Dokumentasi & Portofolio
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Galeri FISHTARA Pemancingan Nusantara
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Jelajahi keindahan lanskap kolam asri, kebanggaan hasil tangkapan ikan, hingga kehangatan momen santap kuliner nusantara.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid showFilters={true} />
        </div>
      </section>

      <CTASection />
    </div>
  );
};
