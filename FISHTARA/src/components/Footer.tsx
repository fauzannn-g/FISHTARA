import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { Logo } from './Logo';
import { InstagramIcon } from './InstagramIcon';
import { BRAND_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy-dark text-slate-300 pt-16 pb-8 border-t border-brand-ocean/30 relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-ocean/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Profile */}
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-slate-400 text-sm leading-relaxed mt-3">
              {BRAND_INFO.description}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-brand-ocean/20 text-brand-cyan border border-brand-ocean/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                Modern Fishing Park Resmi
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>
              Navigasi Cepat
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-brand-cyan transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-brand-ocean group-hover:translate-x-1 transition-transform" />
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/tentang" className="hover:text-brand-cyan transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-brand-ocean group-hover:translate-x-1 transition-transform" />
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/fasilitas" className="hover:text-brand-cyan transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-brand-ocean group-hover:translate-x-1 transition-transform" />
                  Fasilitas Pemancingan
                </Link>
              </li>
              <li>
                <Link to="/paket" className="hover:text-brand-cyan transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-brand-ocean group-hover:translate-x-1 transition-transform" />
                  Paket Memancing & Harga
                </Link>
              </li>
              <li>
                <Link to="/galeri" className="hover:text-brand-cyan transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-brand-ocean group-hover:translate-x-1 transition-transform" />
                  Galeri Foto & Video
                </Link>
              </li>
              <li>
                <Link to="/reservasi" className="hover:text-brand-cyan transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-brand-ocean group-hover:translate-x-1 transition-transform" />
                  Reservasi Tiket / Lapak
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="hover:text-brand-cyan transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-brand-ocean group-hover:translate-x-1 transition-transform" />
                  Kontak & Lokasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Jam Operasional */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>
              Jam Buka & Layanan
            </h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 text-brand-cyan font-semibold mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Senin - Jumat</span>
                </div>
                <p className="text-slate-300 font-medium pl-6">{BRAND_INFO.openingHours.weekdays}</p>
              </div>

              <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 text-brand-cyan font-semibold mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Sabtu, Minggu & Libur</span>
                </div>
                <p className="text-slate-300 font-medium pl-6">{BRAND_INFO.openingHours.weekends}</p>
              </div>

              <p className="text-xs text-slate-400 italic">
                *Tersedia sesi malam bertabur lampu hingga pukul 22:00 WIB.
              </p>
            </div>
          </div>

          {/* Col 4: Informasi Kontak & Instagram */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>
              Kontak Resmi
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <span className="text-slate-300">{BRAND_INFO.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-brand-cyan transition-colors"
                >
                  {BRAND_INFO.phone} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-ocean shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-brand-cyan transition-colors">
                  {BRAND_INFO.email}
                </a>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-white/10">
              <p className="text-xs text-slate-400 mb-2 font-medium">Ikuti Akun Resmi:</p>
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 text-white font-semibold text-xs hover:opacity-95 shadow-md shadow-pink-600/20 transition-all transform hover:scale-105"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>@fishtara.official</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} FISHTARA PEMANCINGAN NUSANTARA. Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1.5">
            Dibuat dengan <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> untuk Komunitas Pemancing Nusantara
          </p>
        </div>
      </div>
    </footer>
  );
};
