import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { PackagesPage } from './pages/PackagesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { ReservationPage } from './pages/ReservationPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      <ScrollToTop />
      {/* Top Navbar */}
      <Navbar />

      {/* Main Routed Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/fasilitas" element={<FacilitiesPage />} />
          <Route path="/paket" element={<PackagesPage />} />
          <Route path="/galeri" element={<GalleryPage />} />
          <Route path="/kontak" element={<ContactPage />} />
          <Route path="/reservasi" element={<ReservationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
export default App;
