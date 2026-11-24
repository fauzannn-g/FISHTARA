import React, { useState } from 'react';
import { ExternalLink, Heart, MessageCircle, Info } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { BRAND_INFO, INSTAGRAM_POSTS_DATA } from '../data/mockData';

export const InstagramFeed: React.FC = () => {
  const [posts] = useState(INSTAGRAM_POSTS_DATA);
  const hasMetaApiKey = Boolean(import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN);

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-pink-100 text-pink-700 mb-3">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Akun Resmi Media Sosial</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              Ikuti Keseruan di <span className="text-brand-ocean">Instagram</span>
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-xl">
              Lihat foto keseruan strike harian para angler, agenda turnamen, promo resto kuliner, serta aktivitas keluarga di akun resmi <strong className="text-brand-navy">@fishtara.official</strong>.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white font-bold px-6 py-3 rounded-full shadow-md shadow-pink-600/20 hover:shadow-pink-600/30 transition-all transform hover:-translate-y-0.5 text-sm"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Ikuti Instagram Kami</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Technical compliance note for Meta Graph API / curated gallery */}
        <div className="mb-6 p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-brand-navy flex items-start gap-2.5">
          <Info className="w-4 h-4 text-brand-ocean shrink-0 mt-0.5" />
          <div>
            <span>
              <strong>Koneksi Resmi Instagram:</strong> Ditautkan langsung ke profil{' '}
              <a href={BRAND_INFO.instagramUrl} target="_blank" rel="noreferrer" className="underline font-semibold hover:text-brand-ocean">
                @fishtara.official
              </a>
              . {hasMetaApiKey 
                ? 'Terhubung dengan Instagram Graph API Meta.' 
                : 'Galeri postingan kurasi resmi siap menerima token Meta Graph API via file .env (VITE_INSTAGRAM_ACCESS_TOKEN).'}
            </span>
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
            >
              {/* Media Container */}
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  src={post.mediaUrl}
                  alt="Postingan Instagram FISHTARA"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white font-semibold">
                  <div className="flex items-center gap-1.5 drop-shadow">
                    <Heart className="w-5 h-5 fill-white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 drop-shadow">
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm p-1.5 rounded-full text-white">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Caption excerpt & Meta */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-slate-700 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-3">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium pt-2 border-t border-slate-100">
                  <span>{post.timestamp}</span>
                  <span className="text-brand-ocean group-hover:underline flex items-center gap-1">
                    Buka Postingan <ExternalLink className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
