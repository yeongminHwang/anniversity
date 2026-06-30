import { motion } from 'framer-motion';
import { responsiveWebpSrcSet } from '../../data/assets';
import LazyVideo from './LazyVideo';

type PhotoCardProps = {
  image: string;
  alt: string;
  mediaType?: 'image' | 'video';
  poster?: string;
  title?: string;
  date?: string;
  caption?: string;
  loading?: 'lazy' | 'eager';
  className?: string;
};

export default function PhotoCard({
  image,
  alt,
  mediaType = 'image',
  poster,
  title,
  date,
  caption,
  loading = 'lazy',
  className = '',
}: PhotoCardProps) {
  return (
    <motion.figure
      className={`overflow-hidden rounded-lg border border-borderSoft bg-paper p-3 shadow-photo [touch-action:pan-y] ${className}`}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <div className="aspect-[4/5] overflow-hidden rounded-md bg-surface/40">
        {mediaType === 'video' ? (
          <LazyVideo
            src={image}
            poster={poster}
            aria-label={alt}
            className="h-full w-full object-cover"
            controls
            muted
            playsInline
            preload="metadata"
            draggable={false}
          />
        ) : (
          <img
            src={image}
            srcSet={responsiveWebpSrcSet(image)}
            sizes="(max-width: 640px) calc(100vw - 2.5rem), 402px"
            alt={alt}
            draggable={false}
            loading={loading}
            decoding="async"
            className="h-full w-full select-none object-cover [-webkit-user-drag:none]"
          />
        )}
      </div>
      {(title || date || caption) && (
        <figcaption className="space-y-2 px-1 pb-1 pt-4 font-hand">
          {(title || date) && (
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              {title && (
                <h3 className="text-[1.45rem] font-normal leading-snug text-ink">
                  {title}
                </h3>
              )}
              {date && (
                <span className="text-base font-normal tracking-wide text-rose">
                  {date}
                </span>
              )}
            </div>
          )}
          {caption && (
            <p className="text-[1.15rem] leading-7 text-ink/65">{caption}</p>
          )}
        </figcaption>
      )}
    </motion.figure>
  );
}
