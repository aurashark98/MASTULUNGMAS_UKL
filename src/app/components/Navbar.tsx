import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-[94%] max-w-5xl ${
        scrolled ? 'bg-primary/95 backdrop-blur-lg shadow-2xl' : 'bg-primary/90'
      } rounded-full`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 px-2">
          <motion.button
            type="button"
            aria-label="Refresh halaman"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.reload()}
          >
            <div className="w-14 h-14 flex items-center justify-center relative">
              {/* Prefer raster PNG placed at /public/mtm-icon.png for a 1:1 match with the uploaded image. Falls back to SVG if missing. */}
              <ImageWithFallback size={44} />
            </div>
          </motion.button>

          <div className="hidden md:flex items-center gap-6">
            {['Home', 'Layanan', 'Cara Kerja', 'Tentang Kami', 'Kontak'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white/95 hover:text-white transition-colors font-medium px-3 py-2 rounded-md"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-white/95 font-medium hover:text-white/80 transition-colors rounded-md"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(0,0,0,0.12)' }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-white text-primary rounded-full font-medium shadow-sm hover:opacity-95 transition-all"
            >
              Daftar
            </motion.button>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden bg-primary/95 rounded-xl mt-2 p-4 shadow-lg"
        >
          <div className="space-y-3">
            {['Home', 'Layanan', 'Cara Kerja', 'Tentang Kami', 'Kontak'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block text-white hover:text-white/90 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <button className="w-full px-4 py-2 text-white font-medium rounded-md border border-white/10">Login</button>
              <button className="w-full px-4 py-2 bg-white text-primary rounded-full font-medium">Daftar</button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
