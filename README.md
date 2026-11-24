# FISHTARA PEMANCINGAN NUSANTARA 🎣🌊
**Modern Fishing Park, Rekreasi Keluarga, Kuliner Nusantara & Komunitas Angler**

Website bisnis resmi **FISHTARA PEMANCINGAN NUSANTARA** yang dibangun dengan standar profesional, modern, elegan, responsif, dan performa tinggi sesuai instruksi panduan desain dan bisnis.

---

## 🎨 Identitas Brand & Warna
- **Nama Brand:** FISHTARA
- **Nama Lengkap:** FISHTARA PEMANCINGAN NUSANTARA
- **Instagram Resmi:** [@fishtara.official](https://www.instagram.com/fishtara.official/)
- **Palet Warna Utama:**
  - **Navy:** `#071D3A`
  - **Ocean Blue:** `#0879C9`
  - **Cyan:** `#20C5E8`
  - **White:** `#FFFFFF`
- **Logo:** Logo vektor SVG resmi FISHTARA terletak di `public/logo.svg` dan komponen reusable `src/components/Logo.tsx`.

---

## 🚀 Fitur Unggulan Website

1. **Homepage Menarik & Komprehensif:**
   - **Hero Section:** Headline resmi *"Temukan Pengalaman Memancing Terbaik Bersama FISHTARA"*, visual resolusi tinggi, tombol *"Jelajahi FISHTARA"* dan *"Reservasi Sekarang"*.
   - **Tentang Kami:** Perkenalan konsep Modern Fishing Park, visi, misi, dan 4 pilar nilai bisnis.
   - **Fasilitas:** Kolam pemancingan, Gazebo privat, Area keluarga, Resto & Cafe kuliner nusantara, Sewa alat pancing, dan Parkir luas ber-CCTV.
   - **Paket Memancing:** Paket Kiloan Rekreasi, Harian Master Strike, Family Gathering, dan Komunitas VIP.
   - **Galeri Foto:** Galeri dengan kategori (Kolam, Ikan, Aktivitas, Fasilitas, Suasana Malam) serta modal lightbox zoom.
   - **Testimoni Pengunjung:** Desain card modern lengkap dengan rating bintang dan label resmi **Konten Demo / Simulasi Pengunjung**.
   - **Integrasi Instagram Resmi:** Section khusus dengan profil @fishtara.official, tombol *"Ikuti Instagram Kami"*, dan feed kurasi siap integrasi Meta Graph API.
   - **Call To Action (CTA):** *"Saatnya Menikmati Pengalaman Memancing yang Berbeda"*.
   - **Footer Komprehensif:** Navigasi cepat, jam operasional (hari kerja & akhir pekan), alamat lokasi, kontak WhatsApp, dan copyright.

2. **Halaman Khusus (Multi-Page Routing):**
   - `/` : Beranda
   - `/tentang` : Profil lengkap, sejarah bisnis, visi-misi, nilai bisnis.
   - `/fasilitas` : Spesifikasi & foto seluruh sarana prasarana.
   - `/paket` : Rincian harga, fasilitas termasuk, dan ketentuan pemancingan.
   - `/galeri` : Galeri filterable dengan kategori dan peninjau foto besar.
   - `/kontak` : Alamat, Google Maps terintegrasi, formulir pesan, dan tautan langsung WhatsApp & Instagram.
   - `/reservasi` : Sistem formulir pemesanan jadwal memancing interaktif dan tab pelacak riwayat pemesanan.
   - `*` : Halaman 404 kustom bernuansa brand.

3. **Sistem Reservasi Interaktif:**
   - Pemilihan paket memancing dinamis (terkoneksi dari halaman paket via query params).
   - Pemilihan tanggal kunjungan (validasi tanggal minimal hari ini).
   - Pemilihan sesi waktu (Pagi, Siang/Golden Hour, Malam, Sesi Penuh Harian).
   - Penghitungan jumlah pengunjung & kalkulasi biaya otomatis.
   - Opsi sewa joran tambahan & gazebo privat.
   - Validasi nama & nomor WhatsApp secara otomatis.
   - Modal ringkasan pemesanan dengan nomor kode booking resmi (`FST-YYYYMM-XXXX`).
   - Tombol **Kirim ke WhatsApp Pengelola** untuk meneruskan rincian pemesanan ke nomor resmi pengelola.
   - Status transparan: *"Menunggu Konfirmasi"* (memenuhi ketentuan regulasi reservasi).

4. **Kesiapan Integrasi Meta Graph API Instagram:**
   - Disediakan file konfigurasi `.env` dan `.env.example`.
   - Dokumentasi pengaturan token resmi Meta tanpa metode scraping ilegal.

---

## 💻 Panduan Menjalankan Project

### 1. Prasyarat
- Node.js versi 18+ (direkomendasikan v20+)
- npm versi 9+

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan (Dev Mode)
```bash
npm run dev
```
Buka browser di `http://localhost:5173/`.

### 4. Build untuk Produksi
```bash
npm run build
```
Hasil build produksi yang teroptimasi akan berada di folder `dist/`.

### 5. Menjalankan Pratinjau Hasil Build
```bash
npm run preview
```

---

## ⚙️ Konfigurasi Environment Variable (`.env`)

Salin `.env.example` menjadi `.env` jika diperlukan:
```env
# Token Meta Graph API Resmi untuk Instagram (Opsional)
VITE_INSTAGRAM_ACCESS_TOKEN=
VITE_INSTAGRAM_USER_ID=

# Nomor WhatsApp Pengelola FISHTARA (Format internasional tanpa +)
VITE_WHATSAPP_NUMBER=6281234567890

# Informasi Alamat & Lokasi
VITE_LOCATION_NAME=FISHTARA Pemancingan Nusantara
VITE_LOCATION_ADDRESS=Jl. Raya Pemancingan Nusantara No. 88, Jawa Timur, Indonesia
```
