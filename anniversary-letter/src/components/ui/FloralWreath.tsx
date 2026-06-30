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
      loading="lazy"
      className={`mx-auto h-auto object-contain opacity-85 ${dimensions} ${className}`}
    />
  );
}
