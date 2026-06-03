import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Siti Nurhaliza',
      role: 'Ibu Rumah Tangga',
      image: '👩',
      rating: 5,
      text: 'Sangat membantu! Mitra MTM sangat profesional dan ramah. Saya tidak perlu repot antre lagi untuk perpanjang SIM.',
    },
    {
      name: 'Bambang Suryono',
      role: 'Pengusaha UMKM',
      image: '👨',
      rating: 5,
      text: 'Layanan kurir MTM cepat dan aman. Sudah 3 bulan langganan untuk kirim produk ke pelanggan. Sangat recommended!',
    },
    {
      name: 'Dewi Lestari',
      role: 'Mahasiswa',
      image: '👧',
      rating: 5,
      text: 'Sebagai mahasiswa yang sibuk, MTM sangat membantu untuk belanja dan tugas-tugas lainnya. Harganya juga terjangkau!',
    },
    {
      name: 'Agus Prasetyo',
      role: 'Karyawan Swasta',
      image: '👨‍💼',
      rating: 5,
      text: 'Aplikasi mudah digunakan, mitra cepat merespon, dan hasilnya memuaskan. MTM benar-benar solusi untuk orang sibuk seperti saya.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
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
            className="inline-block bg-secondary/10 text-secondary px-6 py-2 rounded-full font-medium mb-4"
          >
            Testimoni
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Apa Kata{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pengguna Kami?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ribuan pengguna telah merasakan kemudahan layanan Mas Tulung Mas
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="flex"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-2xl border border-border"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl mb-6 shadow-lg">
                        {testimonial.image}
                      </div>

                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                        ))}
                      </div>

                      <p className="text-xl lg:text-2xl text-foreground italic mb-8 leading-relaxed max-w-3xl">
                        "{testimonial.text}"
                      </p>

                      <h4 className="text-xl font-bold text-foreground mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
