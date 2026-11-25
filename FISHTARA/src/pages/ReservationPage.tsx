import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ReservationForm } from '../components/ReservationForm';
import { getSavedReservations, formatRupiah } from '../utils/storage';
import { ReservationData } from '../types';
import { BRAND_INFO } from '../data/mockData';
import { CalendarCheck, History, Clock, Send, AlertCircle } from 'lucide-react';

export const ReservationPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialPackage = searchParams.get('package') || undefined;

  const [activeTab, setActiveTab] = useState<'form' | 'history'>('form');
  const [historyList, setHistoryList] = useState<ReservationData[]>([]);

  useEffect(() => {
    setHistoryList(getSavedReservations());
  }, [activeTab]);

  const handleSendWa = (item: ReservationData) => {
    const message = `Halo Pengelola FISHTARA,\nSaya ingin menanyakan status konfirmasi reservasi saya:\n*Kode:* ${item.id}\n*Nama:* ${item.fullName}\n*Tanggal:* ${item.date}\n*Paket:* ${item.packageName}\n\nMohon informasinya. Terima kasih!`;
    const url = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-ocean/40 to-brand-navy opacity-80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 mb-3">
            <CalendarCheck className="w-3.5 h-3.5" />
            Layanan Reservasi Resmi
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Reservasi Jadwal Memancing FISHTARA
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Pesan lapak pemancingan Anda sebelumnya agar kenyamanan berkunjung bersama keluarga atau komunitas tetap terjaga tanpa antre.
          </p>

          {/* Toggle Tab */}
          <div className="mt-8 inline-flex p-1 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
            <button
              type="button"
              onClick={() => setActiveTab('form')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'form'
                  ? 'bg-gradient-to-r from-brand-ocean to-brand-cyan text-brand-navy shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Formulir Reservasi Baru</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('history')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'history'
                  ? 'bg-gradient-to-r from-brand-ocean to-brand-cyan text-brand-navy shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <History className="w-4 h-4" />
              <span>Riwayat Pengajuan ({historyList.length})</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'form' ? (
            <ReservationForm initialPackageId={initialPackage} />
          ) : (
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-bold text-brand-navy">Riwayat Pengajuan Reservasi</h3>
                  <p className="text-xs text-slate-500">Tersimpan di perangkat Anda untuk pemantauan status.</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                  Total: {historyList.length} data
                </span>
              </div>

              {historyList.length === 0 ? (
                <div className="text-center py-16 text-slate-400 space-y-3">
                  <AlertCircle className="w-12 h-12 mx-auto text-slate-300" />
                  <p className="text-base font-semibold text-slate-600">Belum ada pengajuan reservasi</p>
                  <p className="text-xs text-slate-400">
                    Silakan isi formulir untuk menjadwalkan kunjungan Anda ke FISHTARA.
                  </p>
                  <button
                    onClick={() => setActiveTab('form')}
                    className="mt-2 inline-flex items-center gap-2 text-xs font-bold text-brand-ocean hover:underline"
                  >
                    Buka Formulir Pemesanan
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {historyList.map((item) => (
                    <div
                      key={item.id}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-ocean/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-brand-navy text-sm">{item.id}</span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                            <Clock className="w-3 h-3 text-amber-600" />
                            {item.status}
                          </span>
                        </div>
                        <h4 className="font-bold text-slate-800 text-base">{item.packageName}</h4>
                        <p className="text-xs text-slate-500">
                          Pemesan: <strong>{item.fullName}</strong> • Tanggal: <strong>{item.date}</strong> ({item.sessionTime})
                        </p>
                        <p className="text-xs text-slate-500">
                          Jumlah: {item.visitorsCount} orang • Estimasi: <strong className="text-brand-navy">{formatRupiah(item.estimatedTotal)}</strong>
                        </p>
                      </div>

                      <div className="shrink-0">
                        <button
                          type="button"
                          onClick={() => handleSendWa(item)}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Follow up WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
