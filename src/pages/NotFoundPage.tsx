import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, AlertCircle } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-16 flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full text-center bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-brand-ocean/10 text-brand-ocean flex items-center justify-center mb-6">
          <AlertCircle className="w-10 h-10" />
        </div>
        
        <span className="text-5xl font-extrabold text-brand-navy font-mono block mb-2">
          404
        </span>
        <h1 className="text-2xl font-bold text-slate-800 mb-2">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-slate-500 text-sm mb-8 leading-relaxed">
          Mohon maaf, halaman yang Anda tuju sepertinya telah berpindah atau belum tersedia. Silakan kembali ke beranda FISHTARA.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3 px-5 rounded-xl text-sm transition-all shadow-md"
          >
            <Home className="w-4 h-4 text-brand-cyan" />
            <span>Kembali ke Beranda</span>
          </Link>
          <Link
            to="/fasilitas"
            className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold py-3 px-5 rounded-xl text-sm transition-colors"
          >
            <Compass className="w-4 h-4" />
            <span>Jelajahi Fasilitas</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
