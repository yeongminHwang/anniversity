import type { ReactNode } from 'react';
import { decorationAsset } from '../../data/assets';

type FloralFrameProps = {
  children: ReactNode;
  className?: string;
};

export default function FloralFrame({
  children,
  className = '',
}: FloralFrameProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-borderSoft bg-paper/95 shadow-paper ${className}`}
    >
      <img
        aria-hidden="true"
        src={decorationAsset('floweralUp.svg')}
        alt=""
        loading="lazy"
        className="absolute -left-8 top-3 h-auto w-32 rotate-[-18deg] opacity-20"
      />
      <img
        aria-hidden="true"
        src={decorationAsset('floweralDown.svg')}
        alt=""
        loading="lazy"
        className="absolute -bottom-2 -right-8 h-auto w-32 rotate-[18deg] opacity-20"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
