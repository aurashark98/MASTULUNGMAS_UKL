import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import MyLogo from './logo/MyLogo';

type Props = { onFinish?: () => void };

export const MTMLoadingScreen: React.FC<Props> = ({ onFinish }) => {
  const container = useAnimation();
  const left = useAnimation();
  const right = useAnimation();
  const heart = useAnimation();
  const text = useAnimation();
  const prog = useAnimation();

  useEffect(() => {
    let mounted = true;
    async function run() {
      // Step 1: background fades in (0.18s)
      await container.start({ opacity: 1, transition: { duration: 0.18 } });

      // Step 2: small particles (handled via CSS below)
      // Step 3 & 4: hands slide in (0.45s)
      left.set({ x: -48 });
      right.set({ x: 48 });
      await Promise.all([
        left.start({ x: 0, transition: { duration: 0.45, ease: 'easeOut' } }),
        right.start({ x: 0, transition: { duration: 0.45, ease: 'easeOut' } }),
      ]);

      // Step 5: connect bounce (0.18s)
      await Promise.all([
        left.start({ y: -6, transition: { duration: 0.09 } }),
        right.start({ y: -6, transition: { duration: 0.09 } }),
      ]);
      await Promise.all([
        left.start({ y: 0, transition: { duration: 0.09 } }),
        right.start({ y: 0, transition: { duration: 0.09 } }),
      ]);

      // Step 6: heart appears (0.26s)
      await heart.start({ scale: [0, 1.06, 1], opacity: 1, transition: { duration: 0.26 } });

      // Step 7: MTM text fades in
      text.start({ opacity: 1, y: 0, transition: { duration: 0.18 } });
      await new Promise((r) => setTimeout(r, 180));

      // Step 8: progress bar animates (0.5s)
      await prog.start({ width: '100%', transition: { duration: 0.5, ease: 'linear' } });

      // Step 9: fade out (0.2s)
      await container.start({ opacity: 0, transition: { duration: 0.2 } });

      if (mounted && onFinish) onFinish();
    }

    // init
    container.set({ opacity: 0 });
    heart.set({ scale: 0, opacity: 0 });
    text.set({ opacity: 0, y: 8 });
    prog.set({ width: '0%' });

    run();
    return () => { mounted = false; };
  }, [container, left, right, heart, text, prog, onFinish]);

  return (
    <motion.div animate={container} initial={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', zIndex: 9999 }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: 160, height: 160, margin: '0 auto', position: 'relative' }}>
          <motion.div style={{ position: 'absolute', left: 0, top: 0 }} animate={left as any}>
            {/* left hand is part of SVG; we offset the whole SVG by left movement */}
            <MyLogo size={160} />
          </motion.div>

          <motion.div style={{ position: 'absolute', left: 0, top: 0 }} animate={right as any}>
            {/* right will be handled inside same SVG visually (for simplicity reusing the same component) */}
            <MyLogo size={160} />
          </motion.div>

          <motion.div style={{ position: 'absolute', inset: 0 }} animate={heart as any}>
            {/* center heart animation is subtle in MyLogo; this animates a translucent overlay */}
          </motion.div>
        </div>

        <motion.div animate={text} style={{ marginTop: 12, fontWeight: 700, color: '#1A1A1A' }}>
          MAS TULUNG MAS
        </motion.div>

        <div style={{ width: 280, height: 8, background: '#f1f1f1', borderRadius: 8, margin: '18px auto', overflow: 'hidden' }}>
          <motion.div animate={prog as any} style={{ height: '100%', width: '0%', background: 'linear-gradient(90deg,#ff6b6b,#d32f2f)' }} />
        </div>
      </div>
      <style>{`
        /* particles */
        @keyframes p { from { transform: translateY(0) scale(1); opacity: 1 } to { transform: translateY(-28px) scale(0.2); opacity: 0 } }
      `}</style>
    </motion.div>
  );
};

export default MTMLoadingScreen;
