import { motion } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full shadow-2xl flex items-center justify-center text-white z-40 group"
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <>
            <MessageCircle size={28} />
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-primary rounded-full opacity-75"
            />
          </>
        )}
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-28 right-8 w-96 max-w-[calc(100vw-4rem)] bg-white rounded-2xl shadow-2xl z-40 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
            <h3 className="text-xl font-bold mb-1">Butuh Bantuan?</h3>
            <p className="text-white/90 text-sm">Tim kami siap membantu Anda 24/7</p>
          </div>

          <div className="p-6">
            <div className="space-y-4 mb-6">
              <div className="bg-muted/50 rounded-xl p-4">
                <p className="text-sm text-foreground">
                  Halo! Selamat datang di Mas Tulung Mas. Ada yang bisa kami bantu?
                </p>
              </div>

              <div className="flex gap-2 flex-wrap">
                {['Cara Pesan', 'Harga', 'Mitra', 'Bantuan'].map((topic) => (
                  <button
                    key={topic}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ketik pesan Anda..."
                className="flex-1 px-4 py-3 bg-muted rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium hover:shadow-lg transition-all">
                Kirim
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
