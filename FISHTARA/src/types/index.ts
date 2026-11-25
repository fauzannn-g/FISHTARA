export interface Facility {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export interface FishingPackage {
  id: string;
  name: string;
  badge?: string;
  price: number;
  duration: string;
  targetFish: string[];
  description: string;
  facilitiesIncluded: string[];
  terms: string[];
  isPopular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'kolam' | 'ikan' | 'aktivitas' | 'fasilitas' | 'malam';
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
  fishCaught?: string;
}

export interface InstagramPost {
  id: string;
  caption: string;
  permalink: string;
  mediaUrl: string;
  timestamp: string;
  likes: number;
  comments: number;
}

export interface ReservationData {
  id: string;
  fullName: string;
  whatsapp: string;
  date: string;
  sessionTime: string;
  packageId: string;
  packageName: string;
  visitorsCount: number;
  rentRodsCount: number;
  gazeboRental: boolean;
  notes: string;
  status: 'Menunggu Konfirmasi' | 'Dikonfirmasi' | 'Selesai' | 'Dibatalkan';
  createdAt: string;
  estimatedTotal: number;
}
