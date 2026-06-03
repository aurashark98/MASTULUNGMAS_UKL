import React from 'react';

export type MyLogoProps = {
  size?: number | string;
  className?: string;
  withBackground?: boolean;
};

export const MyLogo: React.FC<MyLogoProps> = ({ size = 48, className, withBackground = true }) => {
  const s = typeof size === 'number' ? `${size}` : size;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Mas Tulung Mas logo"
    >
      <defs>
        <linearGradient id="gMy" x1="0" x2="1">
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="100%" stopColor="#D32F2F" />
        </linearGradient>
      </defs>

      {/* rounded background to read well in navbar */}
      {withBackground && <rect x="0" y="0" width="200" height="200" rx="34" fill="#FFFFFF" />}

      {/* left hand */}
      <g transform="translate(36,48)">
        <path d="M6 78 C22 62 38 28 58 28 C66 28 74 34 80 46 L68 46 C64 36 58 30 52 30 C40 30 26 54 6 78 Z" fill="url(#gMy)" stroke="#8B5A2B" strokeWidth="1.2" />
      </g>
      {/* right hand mirrored */}
      <g transform="translate(166,48) scale(-1,1)">
        <path d="M6 78 C22 62 38 28 58 28 C66 28 74 34 80 46 L68 46 C64 36 58 30 52 30 C40 30 26 54 6 78 Z" fill="url(#gMy)" stroke="#8B5A2B" strokeWidth="1.2" />
      </g>
      {/* subtle M hint */}
      <path d="M44 132 L76 92 L100 118 L124 92 L156 132" fill="none" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" opacity="0.08" />

      {/* heart center (kept subtle in static) */}
      <g transform="translate(100,100) scale(0.6)">
        <path d="M0 -10 C-10 -24 -34 -24 -34 -4 C-34 8 -18 20 0 34 C18 20 34 8 34 -4 C34 -24 10 -24 0 -10 Z" fill="#FFFFFF" stroke="#D32F2F" strokeWidth="1.6" opacity="0.9" />
      </g>
    </svg>
  );
};

export default MyLogo;
