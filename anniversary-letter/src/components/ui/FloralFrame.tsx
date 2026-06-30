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
        draggable={false}
        loading="lazy"
        className="pointer-events-none absolute -left-8 top-3 h-auto w-32 rotate-[-18deg] select-none opacity-20 [-webkit-user-drag:none]"
      />
      <img
        aria-hidden="true"
        src={decorationAsset('floweralDown.svg')}
        alt=""
        draggable={false}
        loading="lazy"
        className="pointer-events-none absolute -bottom-2 -right-8 h-auto w-32 rotate-[18deg] select-none opacity-20 [-webkit-user-drag:none]"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
