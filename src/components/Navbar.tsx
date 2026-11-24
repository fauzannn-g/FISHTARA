import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, CalendarCheck, PhoneCall } from 'lucide-react';
import { Logo } from './Logo';
import { InstagramIcon } from './InstagramIcon';
import { BRAND_INFO } from '../data/mockData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { label: 'Beranda', to: '/' },
    { label: 'Tentang Kami', to: '/tentang' },
    { label: 'Fasilitas', to: '/fasilitas' },
    { label: 'Paket Memancing', to: '/paket' },
    { label: 'Galeri', to: '/galeri' },
    { label: 'Kontak', to: '/kontak' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-brand-navy/95 backdrop-blur-md shadow-lg shadow-brand-navy/20 py-3 border-b border-brand-ocean/20' 
        : 'bg-gradient-to-b from-brand-navy/90 to-transparent backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo variant="light" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors duration-200 hover:text-brand-cyan relative py-1 ${
                    isActive
                      ? 'text-brand-cyan font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-cyan after:rounded-full'
                      : 'text-slate-200'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Button & Social */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Resmi FISHTARA"
              className="p-2 text-slate-300 hover:text-brand-cyan hover:bg-white/10 rounded-full transition-colors"
              title="Instagram @fishtara.official"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>

            <Link
              to="/reservasi"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-ocean to-brand-cyan hover:from-brand-ocean-hover hover:to-brand-cyan-hover text-brand-navy font-bold px-5 py-2.5 rounded-full shadow-md shadow-brand-ocean/30 hover:shadow-brand-cyan/40 transition-all duration-200 text-sm transform hover:-translate-y-0.5"
            >
              <CalendarCheck className="w-4 h-4 text-brand-navy" />
              <span>Reservasi</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/reservasi"
              className="inline-flex items-center gap-1.5 bg-brand-cyan text-brand-navy font-bold px-3 py-1.5 rounded-full text-xs"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Reservasi</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-200 hover:text-brand-cyan hover:bg-white/10 focus:outline-none transition-colors"
              aria-label={isOpen ? 'Tutup Menu' : 'Buka Menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-navy/98 backdrop-blur-xl border-b border-brand-ocean/30 px-4 pt-3 pb-6 animate-fadeIn shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-brand-ocean/20 text-brand-cyan font-semibold border-l-4 border-brand-cyan'
                      : 'text-slate-200 hover:bg-white/5 hover:text-brand-cyan'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            
            <div className="pt-4 mt-2 border-t border-brand-ocean/20 flex flex-col gap-3">
              <Link
                to="/reservasi"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-ocean to-brand-cyan text-brand-navy font-bold py-3 rounded-xl shadow-md text-sm"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Reservasi Sekarang</span>
              </Link>
              
              <div className="flex items-center justify-between px-2 pt-2 text-xs text-slate-400">
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-brand-cyan"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>{BRAND_INFO.phone}</span>
                </a>

                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-brand-cyan"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-400" />
                  <span>@fishtara.official</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
