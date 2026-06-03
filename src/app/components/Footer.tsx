import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-accent via-secondary to-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative mb-12">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="2">
              <defs>
                <pattern id="footer-divider" x="0" y="0" width="20" height="2" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="1" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="2" fill="url(#footer-divider)" />
            </svg>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl">Mas Tulung Mas</span>
                <span className="text-sm text-white/70">Gotong Royong Digital</span>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Platform gotong royong digital yang menghubungkan masyarakat dengan mitra terpercaya untuk berbagai kebutuhan sehari-hari.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Tentang Kami', 'Cara Kerja', 'Blog', 'Karir', 'Press Kit'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-6">Layanan</h3>
            <ul className="space-y-3">
              {['Kurir & Logistik', 'Asisten Personal', 'Jasa Antre', 'Pendamping Lansia', 'Teknis & Reparasi', 'Custom Task'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-6">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-white/80">
                  Jl. Raya Darmo No. 123
                  <br />
                  Surabaya, Jawa Timur 60265
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={20} />
                <a href="tel:+6281234567890" className="text-white/80 hover:text-white transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={20} />
                <a href="mailto:info@mastulungmas.id" className="text-white/80 hover:text-white transition-colors">
                  info@mastulungmas.id
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="relative mb-8">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="2">
              <rect width="100%" height="2" fill="url(#footer-divider)" />
            </svg>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm"
        >
          <p>© 2026 Mas Tulung Mas. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
