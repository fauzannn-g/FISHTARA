import React from 'react';
import { ReservationData } from '../types';
import { formatRupiah } from '../utils/storage';
import { BRAND_INFO } from '../data/mockData';
import { CheckCircle2, Copy, Send, X, Clock, Calendar, Users, Phone, FileText } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  reservation: ReservationData | null;
  onClose: () => void;
}

export const ReservationSummaryModal: React.FC<ModalProps> = ({ isOpen, reservation, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen || !reservation) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(reservation.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendWhatsApp = () => {
    const message = `Halo Pengelola FISHTARA,\nSaya ingin konfirmasi permintaan reservasi dengan rincian berikut:\n\n*Kode Reservasi:* ${reservation.id}\n*Nama:* ${reservation.fullName}\n*WhatsApp:* ${reservation.whatsapp}\n*Tanggal:* ${reservation.date}\n*Sesi Waktu:* ${reservation.sessionTime}\n*Paket:* ${reservation.packageName}\n*Jumlah Pengunjung:* ${reservation.visitorsCount} orang\n*Sewa Joran:* ${reservation.rentRodsCount} set\n*Gazebo Privat:* ${reservation.gazeboRental ? 'Ya' : 'Tidak'}\n*Catatan:* ${reservation.notes || '-'}\n*Estimasi Total:* ${formatRupiah(reservation.estimatedTotal)}\n\nMohon informasi ketersediaan slot lapak dan konfirmasi dari pihak pengelola. Terima kasih!`;

    const url = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-navy/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-100 overflow-hidden transform transition-all animate-fadeIn">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-navy via-brand-ocean to-brand-navy p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Tutup ringkasan"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-brand-cyan text-xs font-semibold tracking-wider uppercase">Permintaan Terkirim</span>
              <h3 className="text-xl font-bold">Ringkasan Reservasi</h3>
            </div>
          </div>
        </div>

        {/* Status Alert Banner */}
        <div className="bg-amber-50 border-b border-amber-200 px-6 py-3 flex items-center gap-2.5 text-xs text-amber-900">
          <Clock className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Status: Menunggu Konfirmasi.</strong> Jadwal Anda akan resmi setelah diverifikasi oleh pengelola FISHTARA.
          </span>
        </div>

        {/* Content Details */}
        <div className="p-6 space-y-5 text-sm">
          {/* Booking Code */}
          <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Kode Reservasi Anda</p>
              <p className="font-mono font-bold text-brand-ocean text-base">{reservation.id}</p>
            </div>
            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <Copy className="w-3.5 h-3.5 text-slate-500" />
              <span>{copied ? 'Tersalin!' : 'Salin'}</span>
            </button>
          </div>

          {/* Breakdown Grid */}
          <div className="grid grid-cols-2 gap-3.5 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-400 block mb-1">Nama Pemesan</span>
              <span className="font-semibold text-slate-800 text-sm">{reservation.fullName}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-400 block mb-1">Nomor WhatsApp</span>
              <span className="font-semibold text-slate-800 text-sm flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                {reservation.whatsapp}
              </span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-400 block mb-1">Tanggal Kunjungan</span>
              <span className="font-semibold text-slate-800 text-sm flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-brand-ocean" />
                {reservation.date}
              </span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-400 block mb-1">Sesi Waktu</span>
              <span className="font-semibold text-slate-800 text-sm">{reservation.sessionTime}</span>
            </div>
            <div className="col-span-2 p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-400 block mb-1">Paket Memancing</span>
              <span className="font-semibold text-brand-navy text-sm">{reservation.packageName}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-400 block mb-1">Jumlah Pengunjung</span>
              <span className="font-semibold text-slate-800 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-brand-ocean" />
                {reservation.visitorsCount} Orang
              </span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-400 block mb-1">Sewa Joran Tambahan</span>
              <span className="font-semibold text-slate-800">{reservation.rentRodsCount} Set</span>
            </div>
          </div>

          {reservation.notes && (
            <div className="p-3 bg-slate-50 rounded-xl text-xs">
              <span className="text-slate-400 block mb-1 flex items-center gap-1">
                <FileText className="w-3.5 h-3.5" /> Catatan Khusus
              </span>
              <p className="text-slate-700 italic">{reservation.notes}</p>
            </div>
          )}

          {/* Total Price */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500">Estimasi Total Biaya</p>
              <p className="text-xs text-slate-400">*Ikan kiloan dibayar saat penimbangan</p>
            </div>
            <p className="text-xl font-extrabold text-brand-navy">
              {formatRupiah(reservation.estimatedTotal)}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={handleSendWhatsApp}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all text-sm"
          >
            <Send className="w-4 h-4" />
            <span>Kirim ke WhatsApp Pengelola</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="sm:w-auto px-5 py-3 border border-slate-300 rounded-xl text-slate-700 hover:bg-white font-medium transition-colors text-sm"
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};
