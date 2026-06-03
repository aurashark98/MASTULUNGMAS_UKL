import { motion } from 'motion/react';
import { GraduationCap, Users, Briefcase, Store, TrendingUp } from 'lucide-react';

export function CommunityImpact() {
  const impacts = [
    {
      icon: Users,
      title: 'Komunitas',
      description: 'Mempererat hubungan antar tetangga dan warga',
      stat: '50+',
      label: 'Komunitas',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: GraduationCap,
      title: 'Mahasiswa',
      description: 'Membuka peluang kerja fleksibel untuk pelajar',
      stat: '500+',
      label: 'Mahasiswa',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Briefcase,
      title: 'Pekerja',
      description: 'Penghasilan tambahan untuk keluarga Indonesia',
      stat: '1.000+',
      label: 'Pekerja',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Store,
      title: 'UMKM',
      description: 'Mendukung pertumbuhan usaha kecil menengah',
      stat: '300+',
      label: 'UMKM',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: TrendingUp,
      title: 'Ekonomi Lokal',
      description: 'Meningkatkan perputaran ekonomi di tingkat lokal',
      stat: 'Rp 5M+',
      label: 'Transaksi',
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section id="tentang-kami" className="py-24 bg-gradient-to-br from-white via-primary/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-medium mb-4"
          >
            Dampak Sosial
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Membangun Indonesia{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Bersama-sama
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lebih dari sekadar platform, kami adalah gerakan untuk memberdayakan masyarakat Indonesia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {impacts.slice(0, 3).map((impact, index) => {
            const Icon = impact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all h-full border border-border">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${impact.color} mb-6 shadow-md`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  <div className="mb-4">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${impact.color} bg-clip-text text-transparent mb-2`}>
                      {impact.stat}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{impact.label}</p>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {impact.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {impacts.slice(3).map((impact, index) => {
            const Icon = impact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 3) * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all h-full border border-border">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${impact.color} mb-6 shadow-md`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  <div className="mb-4">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${impact.color} bg-clip-text text-transparent mb-2`}>
                      {impact.stat}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{impact.label}</p>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {impact.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">
            Bergabunglah dalam Gerakan Gotong Royong Digital
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Bersama-sama kita membangun Indonesia yang lebih solid, saling membantu, dan sejahtera
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-primary rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all"
          >
            Mulai Sekarang
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
