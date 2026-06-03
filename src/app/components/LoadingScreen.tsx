import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Wrench, Heart, Truck, Users } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const totalDuration = 2400;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / totalDuration) * 100));
      setProgress(pct);
      if (elapsed < totalDuration) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);

    const completeTimer = window.setTimeout(() => {
      onComplete();
    }, totalDuration + 320);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const loadingText = useMemo(() => {
    if (progress < 35) return 'Mempersiapkan layanan...';
    if (progress < 70) return 'Mencocokkan mitra terdekat...';
    return 'Hampir siap...';
  }, [progress]);

  const icons = [
    { Icon: MapPin, delay: 0, position: 'top-20 left-20' },
    { Icon: Wrench, delay: 0.2, position: 'top-40 right-32' },
    { Icon: Heart, delay: 0.4, position: 'bottom-40 left-32' },
    { Icon: Truck, delay: 0.6, position: 'bottom-20 right-20' },
    { Icon: Users, delay: 0.8, position: 'top-1/2 left-20' },
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {icons.map((item, index) => {
        const Icon = item.Icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.3, 0.3, 0],
              scale: [0, 1, 1, 0],
              y: [0, -20, -40, -60]
            }}
            transition={{
              duration: 2,
              delay: item.delay,
              repeat: Infinity,
              repeatDelay: 1
            }}
            className={`absolute ${item.position} text-primary/30`}
          >
            <Icon size={40} />
          </motion.div>
        );
      })}

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: [0.9, 1.04, 1], rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360, opacity: [0.35, 0.6, 0.35] }}
                transition={{ rotate: { duration: 10, repeat: Infinity, ease: 'linear' }, opacity: { duration: 2.2, repeat: Infinity } }}
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-xl opacity-50"
              />
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center shadow-2xl" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: [0.98, 1.02, 1] }}
                    transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
                    className="relative w-32 h-32 flex items-center justify-center"
                  >
                    <div style={{ width: 128, height: 128 }} className="flex items-center justify-center">
                      <ImageWithFallback size={128} />
                    </div>
                  </motion.div>
                </div>
            </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-4xl font-bold text-foreground mb-2"
        >
          Mas Tulung Mas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-lg text-muted-foreground mb-8"
        >
          {loadingText}
        </motion.p>

        <div className="w-64">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
            />
          </div>
          <div className="mt-2 text-right text-sm font-medium text-primary">{progress}%</div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
          className="mt-8 flex items-center gap-2 text-primary"
        >
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                className="w-2 h-2 bg-primary rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
