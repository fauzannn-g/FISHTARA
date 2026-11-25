import React, { useState } from 'react';
import { BRAND_INFO } from '../data/mockData';
import { CTASection } from '../components/CTASection';
import { InstagramIcon } from '../components/InstagramIcon';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle, 
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    // Simulate sending message
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 2000);
  };

  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-ocean/40 to-brand-navy opacity-80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            Layanan Informasi
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Hubungi & Kunjungi FISHTARA
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Tim ramah FISHTARA siap menjawab pertanyaan Anda seputar reservasi, fasilitas khusus rombongan, atau panduan rute perjalanan.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Details Card */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-xl font-extrabold text-brand-navy">Informasi Kontak</h3>
                
                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-ocean/10 text-brand-ocean flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase">Alamat Lokasi</p>
                      <p className="text-slate-700 font-medium mt-0.5">{BRAND_INFO.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase">WhatsApp Official</p>
                      <a 
                        href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 font-bold hover:underline mt-0.5 block"
                      >
                        {BRAND_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 text-brand-navy flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase">Email Pertanyaan</p>
                      <a href={`mailto:${BRAND_INFO.email}`} className="text-slate-700 font-medium hover:text-brand-ocean mt-0.5 block">
                        {BRAND_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase">Jam Operasional</p>
                      <p className="text-slate-700 text-xs mt-0.5">Senin - Jumat: {BRAND_INFO.openingHours.weekdays}</p>
                      <p className="text-slate-700 text-xs">Sabtu - Minggu: {BRAND_INFO.openingHours.weekends}</p>
                    </div>
                  </div>
                </div>

                {/* Social Button */}
                <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent('Halo Pengelola FISHTARA, saya ingin informasi reservasi dan layanan.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-md transition-all text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat WhatsApp Pengelola</span>
                  </a>

                  <a
                    href={BRAND_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-95 text-white font-bold py-3 rounded-xl shadow-md transition-all text-sm"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Instagram @fishtara.official</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Inquiry Form & Interactive Map */}
            <div className="lg:col-span-2 space-y-10">
              {/* Message Form */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-extrabold text-brand-navy mb-2">Kirim Pesan atau Pertanyaan</h3>
                <p className="text-slate-500 text-xs sm:text-sm mb-6">
                  Punya pertanyaan khusus seputar event komunitas atau penawaran kerja sama? Sampaikan di sini.
                </p>

                {submitted ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                    <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-emerald-900">Pesan Anda Telah Terkirim!</h4>
                    <p className="text-xs text-emerald-700">
                      Terima kasih telah menghubungi FISHTARA. Tim kami akan segera menanggapi pertanyaan Anda.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Nama Anda *</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Nama lengkap"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Email / No. HP *</label>
                        <input
                          type="text"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email atau nomor WhatsApp"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Subjek Pertanyaan</label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Contoh: Booking Acara Ulang Tahun / Outing Kantor"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Pesan *</label>
                      <textarea
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tuliskan pesan atau pertanyaan Anda secara rinci..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3 px-6 rounded-xl transition-all text-sm shadow-md"
                    >
                      <Send className="w-4 h-4 text-brand-cyan" />
                      <span>Kirim Pesan</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Google Maps Embed Preview */}
              <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm">Peta Lokasi FISHTARA</h4>
                    <p className="text-xs text-slate-500">{BRAND_INFO.location}</p>
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-ocean font-bold flex items-center gap-1 hover:underline"
                  >
                    Buka Google Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-[16/8] bg-slate-100 border border-slate-100">
                  <iframe
                    title="Lokasi FISHTARA"
                    src={BRAND_INFO.mapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
