import { motion } from 'motion/react';
import { FileText, UserCheck, Zap, CreditCard } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: 'Buat Permintaan',
      description: 'Jelaskan bantuan apa yang Anda butuhkan melalui aplikasi kami dengan mudah.',
    },
    {
      icon: UserCheck,
      title: 'Mitra Menerima Tugas',
      description: 'Mitra terdekat dan terpercaya akan menerima permintaan Anda dalam hitungan menit.',
    },
    {
      icon: Zap,
      title: 'Tugas Dikerjakan',
      description: 'Pantau progres real-time dan komunikasi langsung dengan mitra Anda.',
    },
    {
      icon: CreditCard,
      title: 'Konfirmasi & Pembayaran',
      description: 'Setelah selesai, konfirmasi tugas dan bayar dengan metode yang aman.',
    },
  ];

  return (
    <section id="cara-kerja" className="py-24 bg-gradient-to-br from-secondary/5 via-white to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-secondary/10 text-secondary px-6 py-2 rounded-full font-medium mb-4"
          >
            Cara Kerja
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Mudah dan{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Cepat Digunakan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hanya 4 langkah sederhana untuk mendapatkan bantuan yang Anda butuhkan
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2 opacity-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative z-10"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-xl"
                        >
                          <Icon className="text-white" size={36} />
                        </motion.div>
                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md font-bold text-primary text-lg border-2 border-primary/20">
                          {index + 1}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-20"
                    >
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-primary/20">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
