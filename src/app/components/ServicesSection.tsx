import { motion } from 'motion/react';
import { Truck, User, Clock, Users, Wrench, Sparkles } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Truck,
      title: 'Kurir & Logistik',
      description: 'Pengiriman dokumen, paket, dan barang dengan cepat dan aman ke seluruh kota.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: User,
      title: 'Asisten Personal',
      description: 'Bantuan untuk berbagai kebutuhan pribadi, dari belanja hingga administrasi.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Clock,
      title: 'Jasa Antre',
      description: 'Tidak perlu antre lagi! Mitra kami siap mengantri untuk keperluan Anda.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Users,
      title: 'Pendamping Lansia',
      description: 'Perawatan dan pendampingan profesional untuk orang tua tercinta.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Wrench,
      title: 'Teknis & Reparasi',
      description: 'Perbaikan rumah, instalasi, dan bantuan teknis lainnya oleh ahli terpercaya.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Sparkles,
      title: 'Custom Task',
      description: 'Punya kebutuhan khusus? Kami siap membantu dengan solusi yang fleksibel.',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <section id="layanan" className="py-24 bg-white">
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
            Layanan Kami
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Berbagai Layanan untuk{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Kebutuhan Anda
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dari tugas sederhana hingga kebutuhan kompleks, kami siap membantu dengan mitra terpercaya.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity rounded-bl-full"
                       style={{ backgroundImage: `linear-gradient(135deg, var(--primary), var(--secondary))` }}
                  />

                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
