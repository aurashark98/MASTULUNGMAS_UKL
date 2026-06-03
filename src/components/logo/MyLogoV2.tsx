import React from 'react';

export type MyLogoV2Props = {
  size?: number | string;
  className?: string;
  primary?: string;
  secondary?: string;
  withBackground?: boolean;
};

export const MyLogoV2: React.FC<MyLogoV2Props> = ({
  size = 48,
  className,
  primary = '#D32F2F',
  secondary = '#8B5A2B',
  withBackground = true,
}) => {
  const s = typeof size === 'number' ? `${size}` : size;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="MTM logo"
    >
      <defs>
        <linearGradient id="gV2" x1="0" x2="1">
          <stop offset="0%" stopColor="#FF7A79" />
          <stop offset="100%" stopColor={primary} />
        </linearGradient>
      </defs>

      {withBackground && <rect width="120" height="120" rx="20" fill="#fff" />}

      {/* Two geometric helping-hands forming an M negative space */}
      <g transform="translate(12,18)">
        <path d="M4 68 C18 46 28 20 46 20 C56 20 64 26 68 38 L56 38 C52 30 46 26 40 26 C28 26 16 44 4 68 Z" fill="url(#gV2)" stroke={secondary} strokeWidth="1" />
        <path d="M104 68 C90 46 80 20 62 20 C52 20 44 26 40 38 L52 38 C56 30 62 26 68 26 C80 26 92 44 104 68 Z" fill="url(#gV2)" stroke={secondary} strokeWidth="1" />

        {/* subtle M negative space as stroke */}
        <path d="M20 82 L40 48 L60 76 L80 48 L100 82" fill="none" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" opacity="0.06" />

        {/* small center heart as accent */}
        <path d="M60 56 C54 42 34 42 34 58 C34 68 46 76 60 88 C74 76 86 68 86 58 C86 42 66 42 60 56 Z" fill="#FFFFFF" opacity="0.95" />
      </g>
    </svg>
  );
};

export default MyLogoV2;
