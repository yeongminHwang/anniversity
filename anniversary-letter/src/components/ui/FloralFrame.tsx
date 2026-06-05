import type { ReactNode } from 'react';

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
      className={`relative overflow-hidden rounded-lg border border-rose/15 bg-paper/95 shadow-paper ${className}`}
    >
      <img
        aria-hidden="true"
        src="/images/decorations/floweralUp.svg"
        alt=""
        loading="lazy"
        className="absolute -left-8 top-3 h-auto w-32 rotate-[-18deg] opacity-20"
      />
      <img
        aria-hidden="true"
        src="/images/decorations/floweralDown.svg"
        alt=""
        loading="lazy"
        className="absolute -bottom-2 -right-8 h-auto w-32 rotate-[18deg] opacity-20"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
