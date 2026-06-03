import React from 'react';

export type PinHandsLogoProps = {
  size?: number | string;
  className?: string;
  primary?: string;
  secondary?: string;
  withBackground?: boolean;
};

export const PinHandsLogo: React.FC<PinHandsLogoProps> = ({
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
      viewBox="0 0 120 160"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Mas Tulung Mas pin logo"
    >
      <defs>
        <linearGradient id="ph-grad" x1="0" x2="1">
          <stop offset="0%" stopColor="#FF7A79" />
          <stop offset="100%" stopColor={primary} />
        </linearGradient>
      </defs>

      {withBackground && <rect width="120" height="120" rx="20" fill="#fff" />}

      {/* pin outline */}
      <path
        d="M60 6 C36 6 18 24 18 48 C18 78 60 140 60 140 C60 140 102 78 102 48 C102 24 84 6 60 6 Z"
        fill="url(#ph-grad)"
        stroke={secondary}
        strokeWidth="1.6"
      />

      {/* left helping hand (geometric) */}
      <path
        d="M34 62 C42 50 50 36 60 36 C66 36 72 40 76 50 L66 50 C63 44 58 40 52 40 C42 40 36 50 34 62 Z"
        fill="#fff"
        opacity="0.98"
      />

      {/* right helping hand mirrored */}
      <path
        d="M86 62 C78 50 70 36 60 36 C54 36 48 40 44 50 L54 50 C57 44 62 40 68 40 C78 40 84 50 86 62 Z"
        fill="#fff"
        opacity="0.98"
      />

      {/* M negative-space stroke for clarity (very subtle) */}
      <path d="M38 86 L56 56 L60 64 L64 56 L82 86" fill="none" stroke="#1A1A1A" strokeWidth="1.6" opacity="0.06" strokeLinecap="round" />

      {/* heart center */}
      <path d="M60 56 C56 46 44 46 44 56 C44 62 50 66 60 78 C70 66 76 62 76 56 C76 46 64 46 60 56 Z" fill={primary} opacity="0.95" />
    </svg>
  );
};

export default PinHandsLogo;
