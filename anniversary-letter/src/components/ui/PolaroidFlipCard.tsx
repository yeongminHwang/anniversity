import { useState } from 'react';
import { motion } from 'framer-motion';
import { decorationAsset, responsiveWebpSrcSet } from '../../data/assets';
import LazyVideo from './LazyVideo';

type PolaroidFlipCardProps = {
  image: string;
  mediaType?: 'image' | 'video';
  poster?: string;
  title: string;
  date: string;
  frontMessage: string;
  backMessage: string;
};

export default function PolaroidFlipCard({
  image,
  mediaType = 'image',
  poster,
  title,
  date,
  frontMessage,
  backMessage,
}: PolaroidFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggle = () => setIsFlipped((current) => !current);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      onClick={toggle}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          toggle();
        }
      }}
      className="font-hand [perspective:1200px]"
    >
      <motion.div
        className="relative min-h-[620px] w-full rounded-lg outline-none [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <article className="absolute inset-0 rounded-lg border border-rose/15 bg-paper p-3 shadow-photo [backface-visibility:hidden]">
          <img
            aria-hidden="true"
            src={decorationAsset('floweralUp.svg')}
            alt=""
            loading="lazy"
            className="absolute right-2 top-2 z-10 h-auto w-24 rotate-[16deg] opacity-35"
          />
          <div className="aspect-[4/5] overflow-hidden rounded-md bg-blush/50">
            {mediaType === 'video' ? (
              <LazyVideo
                src={image}
                poster={poster}
                aria-label={`${title} 영상`}
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            ) : (
              <img
                src={image}
                srcSet={responsiveWebpSrcSet(image)}
                sizes="(max-width: 640px) calc(100vw - 2.5rem), 402px"
                alt={`${title} 사진`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div className="px-2 pb-2 pt-5">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="text-[1.9rem] font-normal leading-tight text-ink">
                {title}
              </h2>
              <span className="shrink-0 text-[1.05rem] font-normal text-rose">
                {date}
              </span>
            </div>
            <p className="mt-4 text-[1.3rem] leading-9 text-ink/70">
              {frontMessage}
            </p>
            <p className="mt-4 text-[1.05rem] font-normal text-rose">
              {mediaType === 'video'
                ? '영상을 탭하면 뒷면의 마음이 보여'
                : '사진을 탭하면 뒷면의 마음이 보여'}
            </p>
          </div>
        </article>

        <article className="absolute inset-0 flex rounded-lg border border-rose/20 bg-[linear-gradient(180deg,#ffffff_0%,#fff8fb_58%,#f7fbf6_100%)] p-7 shadow-photo [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="m-auto text-center">
            <p className="text-[1.05rem] font-normal text-rose">{date}</p>
            <h3 className="mt-3 text-[2.35rem] font-normal leading-tight text-ink">
              {title}
            </h3>
            <p className="mt-6 text-[1.5rem] leading-10 text-ink/75">
              {backMessage}
            </p>
            <p className="mt-8 text-[1.05rem] font-normal text-rose">
              다시 탭하면 사진으로 돌아가
            </p>
          </div>
        </article>
      </motion.div>
    </div>
  );
}
