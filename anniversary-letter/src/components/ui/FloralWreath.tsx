import { decorationAsset } from '../../data/assets';

type FloralWreathProps = {
  size?: 'sm' | 'lg';
  className?: string;
};

export default function FloralWreath({
  size = 'lg',
  className = '',
}: FloralWreathProps) {
  const dimensions = size === 'lg' ? 'w-52' : 'w-36';

  return (
    <img
      aria-hidden="true"
      src={decorationAsset('floweralUp.svg')}
      alt=""
      draggable={false}
      loading="lazy"
      className={`pointer-events-none mx-auto h-auto select-none object-contain opacity-85 [-webkit-user-drag:none] ${dimensions} ${className}`}
    />
  );
}
