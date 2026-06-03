import { motion } from 'motion/react';
import { ArrowRight, Smartphone, Users, MapPin, Clock } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-muted/30 to-white pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="batik-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="2" fill="currentColor" />
              <circle cx="75" cy="25" r="2" fill="currentColor" />
              <circle cx="25" cy="75" r="2" fill="currentColor" />
              <circle cx="75" cy="75" r="2" fill="currentColor" />
              <path d="M 25 25 Q 50 10, 75 25 T 125 25" stroke="currentColor" strokeWidth="1" fill="none" />
              <path d="M 25 75 Q 50 60, 75 75 T 125 75" stroke="currentColor" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#batik-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full font-medium"
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Platform Gotong Royong Digital Indonesia
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
            >
              Bantuan Apa Pun,{' '}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Kini Dalam Satu Klik
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Mas Tulung Mas menghubungkan masyarakat dengan mitra terpercaya untuk membantu kebutuhan sehari-hari secara cepat, aman, dan profesional.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(211, 47, 47, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
              >
                Pesan Bantuan
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white border-2 border-secondary text-secondary rounded-xl font-semibold shadow-lg hover:bg-secondary hover:text-white transition-all"
              >
                Jadi Mitra Tulung
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                className="relative bg-gradient-to-br from-foreground to-foreground/80 rounded-[3rem] p-4 shadow-2xl"
              >
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold">M</span>
                        </div>
                        <span className="font-bold text-foreground">MTM</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full">
                        <MapPin size={14} className="text-primary" />
                        <span className="text-xs font-medium">Surabaya</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow-lg mb-4">
                      <h3 className="font-bold text-foreground mb-3">Mitra Terdekat</h3>
                      <div className="space-y-2">
                        {['Andi Wijaya', 'Budi Santoso', 'Citra Dewi'].map((name, i) => (
                          <div key={i} className="flex items-center gap-3 p-2 bg-muted/50 rounded-lg">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                              {name[0]}
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-sm">{name}</p>
                              <div className="flex items-center gap-1">
                                <Clock size={12} className="text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">{i + 2} menit</span>
                              </div>
                            </div>
                            <div className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium">
                              Online
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { icon: '🚚', label: 'Kurir' },
                        { icon: '🔧', label: 'Teknis' },
                        { icon: '🛒', label: 'Belanja' },
                      ].map((service, i) => (
                        <div key={i} className="bg-white rounded-xl p-3 text-center shadow-md">
                          <div className="text-2xl mb-1">{service.icon}</div>
                          <p className="text-xs font-medium text-foreground">{service.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                className="absolute -top-8 -right-8 bg-white rounded-2xl p-4 shadow-xl border-2 border-primary/20"
              >
                <Users className="text-primary mb-2" size={24} />
                <p className="text-xs font-medium text-muted-foreground">1.500+</p>
                <p className="text-sm font-bold text-foreground">Mitra Aktif</p>
              </motion.div>

              <motion.div
                animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 2 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-xl border-2 border-secondary/20"
              >
                <Smartphone className="text-secondary mb-2" size={24} />
                <p className="text-xs font-medium text-muted-foreground">Respon</p>
                <p className="text-sm font-bold text-foreground">&lt; 5 Menit</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
