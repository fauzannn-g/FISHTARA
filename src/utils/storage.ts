import { ReservationData } from '../types';

const STORAGE_KEY = 'fishtara_reservations_v1';

export const formatRupiah = (number: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(number);
};

export const getSavedReservations = (): ReservationData[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (error) {
    console.error('Failed to parse reservations from localStorage:', error);
    return [];
  }
};

export const saveReservation = (data: Omit<ReservationData, 'id' | 'createdAt' | 'status'>): ReservationData => {
  const existing = getSavedReservations();
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const newReservation: ReservationData = {
    ...data,
    id: `FST-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}-${randomSuffix}`,
    status: 'Menunggu Konfirmasi',
    createdAt: new Date().toISOString()
  };

  const updated = [newReservation, ...existing];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save reservation:', e);
  }
  return newReservation;
};
