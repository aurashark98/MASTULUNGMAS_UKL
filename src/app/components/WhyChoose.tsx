import { motion } from 'motion/react';
import { Shield, DollarSign, Zap, Heart, MapPin, Clock } from 'lucide-react';

export function WhyChoose() {
  const features = [
    {
      icon: Shield,
      title: 'Mitra Terverifikasi',
      description: 'Semua mitra melewati proses seleksi dan verifikasi ketat untuk menjamin kualitas layanan.',
    },
    {
      icon: DollarSign,
      title: 'Pembayaran Aman',
      description: 'Sistem pembayaran terenkripsi dan terpercaya untuk transaksi yang aman.',
    },
    {
      icon: Zap,
      title: 'Respon Cepat',
      description: 'Mitra kami siap merespon permintaan Anda dalam waktu kurang dari 5 menit.',
    },
    {
      icon: Heart,
      title: 'Harga Transparan',
      description: 'Tidak ada biaya tersembunyi. Semua harga jelas dan disepakati di awal.',
    },
    {
      icon: MapPin,
      title: 'Dukungan Lokal',
      description: 'Memberdayakan masyarakat lokal dan mendukung ekonomi komunitas.',
    },
    {
      icon: Clock,
      title: 'Fleksibel 24/7',
      description: 'Layanan tersedia kapan saja, disesuaikan dengan kebutuhan Anda.',
    },
  ];

  return (
    <section className="py-24 bg-white">
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
            Mengapa MTM?
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Dipercaya oleh Ribuan{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pengguna Indonesia
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kami berkomitmen memberikan pengalaman terbaik dengan standar layanan premium
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative bg-gradient-to-br from-white to-muted/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all h-full border border-border group">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary to-secondary mb-4 shadow-md"
                  >
                    <Icon className="text-white" size={28} />
                  </motion.div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform rounded-b-2xl" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
