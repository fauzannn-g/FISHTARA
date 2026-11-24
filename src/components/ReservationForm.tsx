import React, { useState, useEffect } from 'react';
import { PACKAGES_DATA } from '../data/mockData';
import { formatRupiah, saveReservation } from '../utils/storage';
import { ReservationData } from '../types';
import { ReservationSummaryModal } from './ReservationSummaryModal';
import { Calendar, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

interface Props {
  initialPackageId?: string;
}

export const ReservationForm: React.FC<Props> = ({ initialPackageId }) => {
  const [selectedPackageId, setSelectedPackageId] = useState<string>(
    initialPackageId || PACKAGES_DATA[0].id
  );
  const [fullName, setFullName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [date, setDate] = useState('');
  const [sessionTime, setSessionTime] = useState('08:00 - 12:00 (Sesi Pagi)');
  const [visitorsCount, setVisitorsCount] = useState<number>(2);
  const [rentRodsCount, setRentRodsCount] = useState<number>(0);
  const [gazeboRental, setGazeboRental] = useState<boolean>(false);
  const [notes, setNotes] = useState('');

  // Validation state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedReservation, setCompletedReservation] = useState<ReservationData | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (initialPackageId) {
      setSelectedPackageId(initialPackageId);
    }
  }, [initialPackageId]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const currentPackage = PACKAGES_DATA.find((p) => p.id === selectedPackageId) || PACKAGES_DATA[0];

  // Pricing calculations
  const packagePrice = currentPackage.price;
  const rodRentalPrice = rentRodsCount * 25000;
  // If package already has private gazebo included, extra gazebo is 0
  const isGazeboIncludedInPackage = selectedPackageId === 'paket-keluarga-bahagia' || selectedPackageId === 'paket-komunitas-vip';
  const gazeboPrice = !isGazeboIncludedInPackage && gazeboRental ? 50000 : 0;
  const estimatedTotal = packagePrice + rodRentalPrice + gazeboPrice;

  // Today's date string for input min attribute
  const todayStr = new Date().toISOString().split('T')[0];

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!fullName.trim() || fullName.trim().length < 3) {
      errs.fullName = 'Nama lengkap minimal 3 karakter';
    }

    const cleanPhone = whatsapp.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 9 || cleanPhone.length > 15) {
      errs.whatsapp = 'Nomor WhatsApp tidak valid (minimal 10 digit)';
    }

    if (!date) {
      errs.date = 'Silakan pilih tanggal kunjungan';
    }

    if (visitorsCount < 1) {
      errs.visitorsCount = 'Jumlah pengunjung minimal 1 orang';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Sanitize
    const sanitizedName = fullName.replace(/[<>]/g, '').trim();
    const cleanPhone = whatsapp.replace(/\D/g, '');
    const sanitizedNotes = notes.replace(/[<>]/g, '').trim();

    setTimeout(() => {
      const result = saveReservation({
        fullName: sanitizedName,
        whatsapp: cleanPhone,
        date,
        sessionTime,
        packageId: currentPackage.id,
        packageName: currentPackage.name,
        visitorsCount,
        rentRodsCount,
        gazeboRental: isGazeboIncludedInPackage || gazeboRental,
        notes: sanitizedNotes,
        estimatedTotal,
      });

      setCompletedReservation(result);
      setShowModal(true);
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8 lg:p-10">
      {/* Form Header */}
      <div className="mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-ocean/10 text-brand-ocean border border-brand-ocean/20 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          Sistem Reservasi Online FISHTARA
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
          Formulir Pemesanan Jadwal Memancing
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          Lengkapi data di bawah ini untuk memastikan kenyamanan lapak Anda di Modern Fishing Park FISHTARA.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Package Selector */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            1. Pilih Paket Memancing
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PACKAGES_DATA.map((pkg) => {
              const isSelected = pkg.id === selectedPackageId;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackageId(pkg.id)}
                  className={`cursor-pointer rounded-2xl p-4 border transition-all text-left flex flex-col justify-between ${
                    isSelected
                      ? 'border-brand-ocean bg-brand-cyan-light/30 shadow-md ring-2 ring-brand-ocean/30'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-brand-navy text-sm">{pkg.name}</h4>
                      <p className="text-xs text-brand-ocean font-semibold mt-0.5">{pkg.duration}</p>
                    </div>
                    {pkg.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-ocean text-white shrink-0">
                        {pkg.badge}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-xs text-slate-500">Mulai dari</span>
                    <span className="font-extrabold text-brand-navy text-sm">
                      {formatRupiah(pkg.price)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Date & Session */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              2. Tanggal Kunjungan <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                min={todayStr}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-colors ${
                  errors.date ? 'border-rose-400 bg-rose-50' : 'border-slate-300 bg-white'
                }`}
              />
            </div>
            {errors.date && (
              <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.date}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              3. Sesi Waktu
            </label>
            <select
              value={sessionTime}
              onChange={(e) => setSessionTime(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-cyan"
            >
              <option value="08:00 - 12:00 (Sesi Pagi)">08:00 - 12:00 (Sesi Pagi - Segar)</option>
              <option value="12:00 - 17:00 (Sesi Siang & Senja)">12:00 - 17:00 (Sesi Siang & Golden Hour)</option>
              <option value="17:00 - 21:00 (Sesi Malam)">17:00 - 21:00 (Sesi Malam Berlampu)</option>
              <option value="Sepuasnya (Sesi Penuh Harian)">Sepuasnya (Sesi Penuh Harian)</option>
            </select>
          </div>
        </div>

        {/* Visitors & Extra Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              4. Jumlah Pengunjung
            </label>
            <div className="flex items-center">
              <input
                type="number"
                min="1"
                max="50"
                value={visitorsCount}
                onChange={(e) => setVisitorsCount(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-cyan"
              />
            </div>
            {errors.visitorsCount && (
              <p className="text-rose-500 text-xs mt-1">{errors.visitorsCount}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              5. Tambahan Sewa Joran (+Rp 25.000/set)
            </label>
            <input
              type="number"
              min="0"
              max="20"
              value={rentRodsCount}
              onChange={(e) => setRentRodsCount(Math.max(0, parseInt(e.target.value) || 0))}
              placeholder="0 (Jika bawa sendiri)"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-cyan"
            />
          </div>
        </div>

        {/* Gazebo add-on */}
        {!isGazeboIncludedInPackage && (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div>
              <span className="font-semibold text-sm text-brand-navy block">
                Tambah Sewa Gazebo Privat (+Rp 50.000)
              </span>
              <span className="text-xs text-slate-500">
                Gazebo lesehan tepi danau dengan stop kontak listrik & bantal duduk
              </span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={gazeboRental}
                onChange={(e) => setGazeboRental(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-ocean"></div>
            </label>
          </div>
        )}

        {/* Contact info: Name & WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              6. Nama Lengkap Pemesan <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Contoh: Budi Santoso"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-cyan ${
                errors.fullName ? 'border-rose-400 bg-rose-50' : 'border-slate-300 bg-white'
              }`}
            />
            {errors.fullName && (
              <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              7. Nomor WhatsApp Aktif <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Contoh: 081234567890"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-cyan ${
                errors.whatsapp ? 'border-rose-400 bg-rose-50' : 'border-slate-300 bg-white'
              }`}
            />
            {errors.whatsapp && (
              <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.whatsapp}
              </p>
            )}
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            8. Catatan Khusus / Permintaan Khusus (Opsional)
          </label>
          <textarea
            rows={2}
            placeholder="Contoh: Request lapak dekat resto atau butuh arahan instruktur pemula..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-cyan"
          />
        </div>

        {/* Summary Card before submit */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs text-slate-500">Estimasi Total Awal:</p>
              <p className="text-2xl font-extrabold text-brand-navy">
                {formatRupiah(estimatedTotal)}
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                *Termasuk paket {currentPackage.name} + fasilitas pendukung.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Verifikasi langsung bersama pengelola FISHTARA</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-ocean via-brand-ocean to-brand-cyan hover:from-brand-ocean-hover hover:to-brand-cyan-hover text-brand-navy font-bold py-4 px-6 rounded-2xl shadow-lg shadow-brand-ocean/30 hover:shadow-brand-cyan/40 transition-all text-base transform hover:-translate-y-0.5 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Memproses Permintaan Reservasi...</span>
            ) : (
              <>
                <Calendar className="w-5 h-5 text-brand-navy" />
                <span>Kirim Permintaan Reservasi Sekarang</span>
              </>
            )}
          </button>
          <p className="text-center text-xs text-slate-400 mt-2.5">
            Dengan mengirimkan formulir, data reservasi akan tersimpan dan dapat dikonfirmasikan via WhatsApp.
          </p>
        </div>
      </form>

      {/* Summary Modal */}
      <ReservationSummaryModal
        isOpen={showModal}
        reservation={completedReservation}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};
