import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/mockData';
import { GalleryItem } from '../types';
import { X, ZoomIn, Layers } from 'lucide-react';

interface Props {
  initialLimit?: number;
  showFilters?: boolean;
}

export const GalleryGrid: React.FC<Props> = ({ initialLimit, showFilters = true }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [previewItem, setPreviewItem] = useState<GalleryItem | null>(null);

  const categories = [
    { key: 'all', label: 'Semua Koleksi' },
    { key: 'kolam', label: 'Kolam' },
    { key: 'ikan', label: 'Ikan' },
    { key: 'aktivitas', label: 'Aktivitas Memancing' },
    { key: 'fasilitas', label: 'Fasilitas' },
    { key: 'malam', label: 'Suasana Malam' },
  ];

  const filteredItems = activeTab === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeTab);

  const displayedItems = initialLimit ? filteredItems.slice(0, initialLimit) : filteredItems;

  return (
    <div>
      {/* Category Filter Tabs */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveTab(cat.key)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === cat.key
                  ? 'bg-brand-navy text-brand-cyan shadow-md shadow-brand-navy/20 scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-brand-navy border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Masonry / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setPreviewItem(item)}
            className="group relative rounded-2xl overflow-hidden bg-slate-900 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-300" />

            {/* Floating Category Badge */}
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-navy/80 text-brand-cyan backdrop-blur-md border border-brand-cyan/20">
                {item.category}
              </span>
            </div>

            {/* Zoom Icon indicator */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
              <ZoomIn className="w-4 h-4" />
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-bold text-base sm:text-lg mb-1 leading-snug">
                {item.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {displayedItems.length === 0 && (
        <div className="text-center py-16 text-slate-400">
          <Layers className="w-10 h-10 mx-auto mb-2 opacity-50" />
          <p className="text-sm">Tidak ada foto dalam kategori ini saat ini.</p>
        </div>
      )}

      {/* Lightbox Modal */}
      {previewItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setPreviewItem(null)}
        >
          <div
            className="max-w-4xl w-full bg-brand-navy rounded-3xl overflow-hidden shadow-2xl relative border border-brand-ocean/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewItem(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors"
              aria-label="Tutup preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={previewItem.image}
                alt={previewItem.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-brand-navy text-white">
              <span className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold bg-brand-ocean text-white uppercase tracking-wider mb-2">
                {previewItem.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{previewItem.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{previewItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
