import { Facility, FishingPackage, GalleryItem, Testimonial, InstagramPost } from '../types';

export const BRAND_INFO = {
  name: 'FISHTARA',
  fullName: 'FISHTARA PEMANCINGAN NUSANTARA',
  tagline: 'Modern Fishing Park & Rekreasi Keluarga',
  headline: 'Temukan Pengalaman Memancing Terbaik Bersama FISHTARA.',
  description: 'Pusat pemancingan modern terpadu yang memadukan sensasi strike memancing, kenyamanan rekreasi keluarga, kelezatan kuliner nusantara, dan kehangatan komunitas.',
  instagram: '@fishtara.official',
  instagramUrl: 'https://www.instagram.com/fishtara.official/',
  phone: '+62 812-3456-7890',
  whatsappNumber: '6281234567890',
  email: 'info@fishtara.id',
  location: 'Jl. Raya Pemancingan Nusantara No. 88, Jawa Timur, Indonesia',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126511.45899981258!2d112.7168694!3d-7.2754438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac015%3A0x3027a76e352be40!2sSurabaya%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid',
  openingHours: {
    weekdays: '08:00 - 21:00 WIB',
    weekends: '07:00 - 22:00 WIB'
  }
};

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'kolam-pemancingan',
    name: 'Kolam Pemancingan Modern',
    category: 'Area Utama',
    icon: 'Waves',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80',
    description: 'Kolam dengan sistem aerasi air mengalir bersih dan teratur, menjamin keaktifan ikan dan kenyamanan pemancing tanpa bau amis menyengat.',
    features: ['Sistem sirkulasi air 24 jam', 'Kedalaman 1.8m - 2.5m', 'Kapasitas 120 lapak nyaman', 'Penerangan malam LED premium']
  },
  {
    id: 'gazebo-bersantai',
    name: 'Gazebo & Tempat Bersantai',
    category: 'Relaksasi',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    description: 'Gazebo privat bernuansa etnik nusantara yang asri di tepian kolam, ideal untuk beristirahat bersama keluarga sambil menikmati semilir angin.',
    features: ['Stop kontak listrik di tiap gazebo', 'Meja lesehan & bantal duduk', 'Bebas sewa untuk paket keluarga', 'Pemandangan langsung ke danau utama']
  },
  {
    id: 'area-keluarga',
    name: 'Taman & Area Keluarga',
    category: 'Rekreasi',
    icon: 'Smile',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1000&q=80',
    description: 'Lingkungan hijau teduh dengan taman bermain anak yang aman, membuat seluruh anggota keluarga betah menghabiskan akhir pekan bersama.',
    features: ['Playground ramah anak', 'Spot foto estetik & instagramable', 'Jalur pejalan kaki ramah stroller & lansia', 'Musholla bersih & sejuk']
  },
  {
    id: 'cafe-kuliner',
    name: 'Resto & Cafe Kuliner Nusantara',
    category: 'Kuliner',
    icon: 'Utensils',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
    description: 'Nikmati hidangan khas ikan bakar madu, asam manis, dan gurame terbang hasil tangkapan segar Anda yang langsung diolah chef profesional.',
    features: ['Layanan olah ikan langsung', 'Aneka minuman segar & kopi pilihan', 'Kapasitas resto hingga 150 orang', 'Live acoustic pada malam akhir pekan']
  },
  {
    id: 'sewa-alat',
    name: 'Penyewaan Alat Pancing Lengkap',
    category: 'Perlengkapan',
    icon: 'Fish',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80',
    description: 'Tak perlu repot membawa alat dari rumah. Kami menyediakan joran, reel bermerek, kail, timah, serta aneka racikan umpan juara.',
    features: ['Joran lentur dan kuat', 'Umpan jitu harian & masteran', 'Serokan ikan & kepis gratis', 'Bimbingan instruktur pancing ramah']
  },
  {
    id: 'area-parkir',
    name: 'Area Parkir Luas & Aman',
    category: 'Fasilitas Umum',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1000&q=80',
    description: 'Lahan parkir lapang dengan pengawasan CCTV 24 jam dan petugas keamanan siaga, mampu menampung puluhan mobil dan ratusan motor.',
    features: ['Sistem satu gerbang (one-gate system)', 'CCTV pengawas 24 jam', 'Area bus pariwisata tersedia', 'Gratis parkir untuk reservasi paket']
  }
];

export const PACKAGES_DATA: FishingPackage[] = [
  {
    id: 'paket-kiloan',
    name: 'Paket Kiloan Rekreasi',
    badge: 'Paling Populer untuk Pemula',
    price: 35000,
    duration: 'Sepuasnya (Jam Operasional)',
    targetFish: ['Ikan Nila Merah', 'Ikan Gurame', 'Ikan Patin'],
    description: 'Pilihan paling pas untuk rekreasi santai bersama pasangan atau anak. Bayar tiket masuk hemat, ikan yang didapat ditimbang sesuai berat.',
    facilitiesIncluded: [
      '1 Lapak pemancingan nyaman',
      'Free sewa 1 set joran bambu/fiber standar',
      '1 Bungkus umpan pellet dasar',
      'Pemberian wadah / ember tangkapan',
      'Fasilitas gazebo bersama'
    ],
    terms: [
      'Ikan yang tertangkap wajib ditimbang dan dibayar (mulai Rp 35.000/kg tergantung jenis ikan)',
      'Boleh dibawa pulang mentah atau dimasak langsung di resto FISHTARA',
      'Tidak diperbolehkan melepaskan kembali ikan yang sudah terluka kail'
    ],
    isPopular: true
  },
  {
    id: 'paket-harian-master',
    name: 'Paket Harian Master Strike',
    badge: 'Tantangan Angler',
    price: 95000,
    duration: 'Satu Sesi Penuh (6 Jam)',
    targetFish: ['Bawal Babon 2-5kg', 'Ikan Mas Liar', 'Patin Monster'],
    description: 'Didesain untuk pehobi mancing sejati yang mengejar sensasi tarikan ikan berbobot besar dengan lapak eksklusif dan regulasi tertib.',
    facilitiesIncluded: [
      'Lapak VIP dengan kursi sandar & payung lebar',
      'Bonus welcome drink dingin & snack',
      'Bebas gunakan joran pribadi maksimal 2 joran',
      'Akses ke kolam masteran dengan sirkulasi deras',
      'Penimbangan ikan prestasi berkala'
    ],
    terms: [
      'Wajib menggunakan mata kail tanpa ruit (barbless hook) untuk sistem tangkap-lepas / catch & release',
      'Ikan yang ingin dibawa pulang dikenakan tarif kiloan spesial diskon 15%',
      'Dilarang menggunakan umpan berbahan kimia berbahaya'
    ]
  },
  {
    id: 'paket-keluarga-bahagia',
    name: 'Paket Family Gathering',
    badge: 'Hemat Rombongan',
    price: 320000,
    duration: 'Sepuasnya (Jam Operasional)',
    targetFish: ['Nila Merah', 'Gurame', 'Ikan Mas'],
    description: 'Paket komplet keluarga untuk 4-6 orang. Memancing santai dipadukan dengan santap bersama hidangan ikan bakar khas nusantara.',
    facilitiesIncluded: [
      'Privat Gazebo tepian danau selama kunjungan',
      'Paket hidangan Resto FISHTARA (Gurame Bakar Madu, Kangkung Terasi, Nasi Bakul, Es Kelapa Muda)',
      'Sewa 2 set joran modern + 2 racikan umpan',
      'Bonus 2 kg ikan hasil tangkapan gratis bawa pulang',
      'Akses taman bermain anak'
    ],
    terms: [
      'Berlaku untuk 4 hingga 6 orang',
      'Reservasi disarankan H-1 untuk penyiapan gazebo privat',
      'Tambahan ikan tangkapan di atas 2 kg dikenakan tarif kiloan normal'
    ],
    isPopular: true
  },
  {
    id: 'paket-komunitas-vip',
    name: 'Paket Komunitas & Turnamen',
    badge: 'Event Spesial',
    price: 1500000,
    duration: 'Booking Kolam 4 - 8 Jam',
    targetFish: ['Ikan Mas Super', 'Bawal Babon', 'Patin'],
    description: 'Khusus paguyuban angler, acara kantor (outing), atau turnamen persahabatan dengan sistem booking blok kolam eksklusif.',
    facilitiesIncluded: [
      'Blokade kolam khusus peserta rombongan (20-40 orang)',
      'Timbangan digital resmi & juri panitia bantuan',
      'Sound system & mic wireless untuk pengumuman turnamen',
      'Diskon 20% menu katering resto untuk seluruh peserta',
      'Banner ucapan selamat datang dari FISHTARA'
    ],
    terms: [
      'Wajib reservasi minimal H-3 dengan deposit uang muka',
      'Pelepasan ikan tambahan (ikan pita/bonus) dapat dipesan tersendiri',
      'Jadwal turnamen disesuaikan dengan ketersediaan slot kalender'
    ]
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Panorama Kolam Utama Asri',
    category: 'kolam',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    description: 'Air jernih beroksigen tinggi dengan pemandangan pegunungan yang menyejukkan mata.'
  },
  {
    id: 'g-2',
    title: 'Strike Ikan Patin Monster',
    category: 'ikan',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80',
    description: 'Tangkapan pemancing dengan bobot 4.8 kg di kolam Masteran FISHTARA.'
  },
  {
    id: 'g-3',
    title: 'Keceriaan Belajar Memancing Anak',
    category: 'aktivitas',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80',
    description: 'Momen berharga saat sang buah hati merasakan sensasi tarikan kail pertamanya.'
  },
  {
    id: 'g-4',
    title: 'Gazebo Lesehan Tradisional',
    category: 'fasilitas',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    description: 'Gazebo bambu dengan atap rumbia yang sejuk untuk berkumpul hangat.'
  },
  {
    id: 'g-5',
    title: 'Suasana Malam Eksotis Bertabur Lampu',
    category: 'malam',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80',
    description: 'Pengalaman memancing malam hari yang tenang dengan refleksi lampu di atas air.'
  },
  {
    id: 'g-6',
    title: 'Resto Apung dan Kuliner Nusantara',
    category: 'fasilitas',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
    description: 'Olahan ikan gurame bakar segar sambal terasi khas chef FISHTARA.'
  },
  {
    id: 'g-7',
    title: 'Koleksi Ikan Nila Merah Segar',
    category: 'ikan',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80',
    description: 'Kondisi ikan yang sehat, aktif, dan dibudidayakan secara higienis.'
  },
  {
    id: 'g-8',
    title: 'Kompetisi Memancing Komunitas',
    category: 'aktivitas',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80',
    description: 'Keseruan silaturahmi turnamen antar komunitas mancing dari berbagai kota.'
  },
  {
    id: 'g-9',
    title: 'Spot Senja Tepi Danau',
    category: 'kolam',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    description: 'Pemandangan golden hour yang menakjubkan bagi para pecinta fotografi alam.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    name: 'Hendra Gunawan',
    city: 'Surabaya',
    rating: 5,
    date: '18 November 2026',
    fishCaught: 'Gurame 2.4 kg',
    text: 'Tempat pemancingan paling bersih dan rapi yang pernah saya kunjungi. Bawa anak dan istri ke sini tidak ada komplain sama sekali. Gazebonya nyaman dan ikannya tarikannya mantap!',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-2',
    name: 'Siti Rahmawati',
    city: 'Sidoarjo',
    rating: 5,
    date: '12 November 2026',
    fishCaught: 'Nila Merah 3 kg',
    text: 'Resto kulinernya juara! Ikan hasil pancingan langsung dibakar pakai bumbu madu, rasanya manis gurih meresap sampai ke dalam. Pelayanannya sangat ramah dan tempat wudhu mushollanya bersih.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-3',
    name: 'Budi Santoso',
    city: 'Malang',
    rating: 5,
    date: '5 November 2026',
    fishCaught: 'Patin Babon 4.5 kg',
    text: 'Sebagai angler yang sering keliling kolam pancing, FISHTARA punya air yang kualitasnya bagus sehingga ikannya gesit dan bertenaga. Sangat recommended buat yang suka tantangan.',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80'
  }
];

export const INSTAGRAM_POSTS_DATA: InstagramPost[] = [
  {
    id: 'ig-1',
    caption: 'Sensasi strike akhir pekan di kolam utama FISHTARA! Terima kasih om angler sudah berkunjung bersama komunitas 🎣✨ #Fishtara #MancingNusantara #FishingPark',
    permalink: 'https://www.instagram.com/fishtara.official/',
    mediaUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
    timestamp: '2 jam yang lalu',
    likes: 342,
    comments: 28
  },
  {
    id: 'ig-2',
    caption: 'Momen hangat rekreasi keluarga di gazebo FISHTARA. Nikmati hidangan gurame bakar segar langsung dari kolam! 🐟🔥 #FishtaraKuliner #FamilyGathering',
    permalink: 'https://www.instagram.com/fishtara.official/',
    mediaUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    timestamp: '1 hari yang lalu',
    likes: 519,
    comments: 42
  },
  {
    id: 'ig-3',
    caption: 'Golden hour di FISHTARA Pemancingan Nusantara. Suasana adem, hembusan angin sepoi-sepoi menemani joran Anda melengkung 🌅🌊 #SunsetFishing #FishtaraVibes',
    permalink: 'https://www.instagram.com/fishtara.official/',
    mediaUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    timestamp: '3 hari yang lalu',
    likes: 678,
    comments: 35
  },
  {
    id: 'ig-4',
    caption: 'Malam mingguan di FISHTARA! Mancing malam dengan lampu penerangan LED estetik yang ramah mata. Tag teman mabar kalian! 🌙💡 #NightFishing #MancingMalam',
    permalink: 'https://www.instagram.com/fishtara.official/',
    mediaUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80',
    timestamp: '5 hari yang lalu',
    likes: 420,
    comments: 19
  }
];

export const ABOUT_STORY = {
  profile: 'FISHTARA PEMANCINGAN NUSANTARA lahir dari sebuah visi sederhana namun mendalam: mengubah pandangan masyarakat tentang tempat pemancingan tradisional menjadi destinasi wisata rekreasi modern yang bersih, nyaman, dan ramah bagi seluruh anggota keluarga.',
  history: 'Didirikan dengan memadukan keindahan alam nusantara dan teknologi tata kelola kolam terkini, FISHTARA berawal dari kecintaan terhadap dunia perikanan dan budaya silaturahmi memancing di Indonesia. Kami melihat adanya kerinduan masyarakat perkotaan akan ruang terbuka hijau di mana para orang tua dapat menyalurkan hobi strike memancing, sementara anak-anak dan keluarga dapat bersantai menikmati sajian kuliner khas nusantara dalam atmosfer yang higienis dan prestisius.',
  vision: 'Menjadi pelopor Modern Fishing Park terkemuka di Indonesia yang mengintegrasikan rekreasi alam, edukasi perikanan, kuliner nusantara, dan komunitas pemancing berstandar premium.',
  mission: [
    'Menyediakan fasilitas pemancingan bertaraf modern dengan sistem aerasi air bersih ramah lingkungan.',
    'Menciptakan ruang rekreasi keluarga yang inklusif, aman, higienis, dan nyaman bagi segala usia.',
    'Mengangkat kekayaan kuliner ikan nusantara segar berkualitas tinggi dengan cita rasa otentik.',
    'Membangun ekosistem komunitas angler yang menjunjung tinggi sportivitas, pelestarian ikan, dan keakraban sosial.'
  ],
  values: [
    {
      title: 'Kebersihan & Higienitas',
      desc: 'Kami mendobrak stigma kolam becek dan bau dengan standar pemeliharaan air sirkulasi kontinu dan sanitasi berkala.'
    },
    {
      title: 'Keluarga & Kehangatan',
      desc: 'Setiap sudut FISHTARA dirancang agar anak, ibu, ayah, hingga kakek nenek merasakan kebersamaan yang menyenangkan.'
    },
    {
      title: 'Sportivitas & Kepuasan Tamu',
      desc: 'Populasi ikan aktif dan sehat dipelihara secara teratur agar setiap pengunjung merasakan sensasi strike memuaskan.'
    },
    {
      title: 'Inovasi Modern',
      desc: 'Mulai dari kemudahan reservasi digital, fasilitas gazebo berdaya listrik, hingga sistem pencahayaan malam modern.'
    }
  ]
};
