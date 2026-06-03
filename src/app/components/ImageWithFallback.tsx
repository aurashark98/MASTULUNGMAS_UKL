import React, { useState } from 'react';
import ChosenLogo from '../../components/logo/ChosenLogo';

type Props = {
  size?: number; // pixel size
  rounded?: boolean;
};

export default function ImageWithFallback({ size = 44, rounded = true }: Props) {
  const [loaded, setLoaded] = useState(false);
  const px = `${size}px`;
  const borderClass = rounded ? 'rounded-lg' : '';

  return (
    <>
      <img
        src="/mtm-icon.png"
        alt="Mas Tulung Mas"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        style={{ width: px, height: px, objectFit: 'contain' }}
        className={`${loaded ? 'block' : 'hidden'}`}
      />

      {!loaded && (
        <div style={{ width: px, height: px }} className={`flex items-center justify-center ${borderClass}`}>
          <ChosenLogo size={size} withBackground={false} />
        </div>
      )}
    </>
  );
}
