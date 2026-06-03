import React from 'react';
import { motion } from 'motion/react';

export type ChosenLogoProps = {
  size?: number | string;
  className?: string;
  primary?: string;
  withBackground?: boolean;
};

// ChosenLogo supports a simple entrance animation when `animate` is true.
export const ChosenLogo: React.FC<ChosenLogoProps & { animate?: boolean }> = ({
  size = 48,
  className,
  primary = '#FF6A00',
  withBackground = true,
  animate = false,
}) => {
  const s = typeof size === 'number' ? `${size}` : size;

  return (
    <svg width={s} height={s} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="MTM logo">
      <defs>
        <linearGradient id="cg" x1="0" x2="1">
          <stop offset="0%" stopColor="#FF8A00" />
          <stop offset="100%" stopColor={primary} />
        </linearGradient>
      </defs>

      {/* NOTE: background tile removed — logo now renders only hands + heart (transparent background) */}

      {/* Group hands+heart */}
      <g id="logo-figure" transform="translate(0,4)">
        {animate ? (
          <>
            <motion.path
              id="left-hand"
              d="M32 50c4-8 16-22 28-20 6 1 12 6 16 12 3 5 4 9 2 12-2 3-6 4-9 2-3-2-6-5-9-6-4-1-9-1-13 1-5 2-11 6-15 6-3 0-6-3-7-7-1-3 0-7 3-8z"
              fill="#ffffff"
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.36, delay: 0.08, ease: 'easeOut' }}
            />

            <motion.path
              id="right-hand"
              d="M88 50c-4-8-16-22-28-20-6 1-12 6-16 12-3 5-4 9-2 12 2 3 6 4 9 2 3-2 6-5 9-6 4-1 9-1 13 1 5 2 11 6 15 6 3 0 6-3 7-7 1-3 0-7-3-8z"
              fill="#ffffff"
              initial={{ x: 24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.36, delay: 0.18, ease: 'easeOut' }}
            />

            <motion.path
              id="heart"
              d="M60 48c-3.3-3.6-9.6-3.6-9.6 0 0 2.5 3.2 4.6 5 6 1.6-1.2 5.2-3.6 4.6-6z"
              transform="translate(0,-2) scale(1.1)"
              fill="#ffffff"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 600, damping: 18, delay: 0.52 }}
            />
          </>
        ) : (
          <>
            <path id="left-hand" d="M32 50c4-8 16-22 28-20 6 1 12 6 16 12 3 5 4 9 2 12-2 3-6 4-9 2-3-2-6-5-9-6-4-1-9-1-13 1-5 2-11 6-15 6-3 0-6-3-7-7-1-3 0-7 3-8z" fill="#ffffff" />
            <path id="right-hand" d="M88 50c-4-8-16-22-28-20-6 1-12 6-16 12-3 5-4 9-2 12 2 3 6 4 9 2 3-2 6-5 9-6 4-1 9-1 13 1 5 2 11 6 15 6 3 0 6-3 7-7 1-3 0-7-3-8z" fill="#ffffff" />
            <path id="heart" d="M60 48c-3.3-3.6-9.6-3.6-9.6 0 0 2.5 3.2 4.6 5 6 1.6-1.2 5.2-3.6 4.6-6z" transform="translate(0,-2) scale(1.1)" fill="#ffffff" />
          </>
        )}
      </g>
    </svg>
  );
};

export default ChosenLogo;
