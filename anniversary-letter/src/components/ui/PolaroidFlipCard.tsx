import {
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
} from 'react';
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
  isActive?: boolean;
};

export default function PolaroidFlipCard({
  image,
  mediaType = 'image',
  poster,
  title,
  date,
  frontMessage,
  backMessage,
  isActive = true,
}: PolaroidFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const touchStateRef = useRef({
    didMove: false,
    startX: 0,
    startY: 0,
  });

  const toggle = () => setIsFlipped((current) => !current);
  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    touchStateRef.current = {
      didMove: false,
      startX: event.clientX,
      startY: event.clientY,
    };
  };
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const deltaX = Math.abs(event.clientX - touchStateRef.current.startX);
    const deltaY = Math.abs(event.clientY - touchStateRef.current.startY);

    if (deltaX > 8 || deltaY > 8) {
      touchStateRef.current.didMove = true;
    }
  };
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (touchStateRef.current.didMove) {
      event.preventDefault();
      touchStateRef.current.didMove = false;
      return;
    }

    toggle();
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      onClick={handleClick}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onDragStart={(event) => event.preventDefault()}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          toggle();
        }
      }}
      className="select-none font-hand [perspective:1200px] [-webkit-touch-callout:none] [-webkit-user-drag:none] [-webkit-user-select:none]"
    >
      <motion.div
        className="relative min-h-[620px] w-full rounded-lg outline-none [touch-action:pan-y] [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <article
          className={`absolute inset-0 rounded-lg border border-borderSoft bg-paper p-3 transition-shadow duration-300 [backface-visibility:hidden] ${isActive ? 'shadow-photo' : 'shadow-none'}`}
        >
          <img
            aria-hidden="true"
            src={decorationAsset('floweralUp.svg')}
            alt=""
            draggable={false}
            loading="lazy"
            className="absolute right-2 top-2 z-10 h-auto w-24 rotate-[16deg] select-none opacity-35 [-webkit-user-drag:none]"
          />
          <div className="aspect-[4/5] overflow-hidden rounded-md bg-surface/50">
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
                draggable={false}
              />
            ) : (
              <img
                src={image}
                srcSet={responsiveWebpSrcSet(image)}
                sizes="(max-width: 640px) calc(100vw - 2.5rem), 402px"
                alt={`${title} 사진`}
                draggable={false}
                loading="lazy"
                decoding="async"
                className="h-full w-full select-none object-cover [-webkit-user-drag:none]"
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
            <p className="mt-4 whitespace-pre-line text-[1.3rem] leading-9 text-ink/70">
              {frontMessage}
            </p>
          </div>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-3 -right-3 z-20 w-12"
            initial={{ opacity: 0, x: 14, y: 14, scale: 0.82 }}
            animate={{
              opacity: isFlipped ? 0 : 1,
              x: isFlipped ? 14 : 0,
              y: isFlipped ? 14 : 0,
              scale: isFlipped ? 0.82 : 1,
            }}
            transition={{ delay: 0.4, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={decorationAsset('touch.svg')}
              alt=""
              draggable={false}
              loading="lazy"
              decoding="async"
              className="h-auto w-full select-none drop-shadow-[0_8px_14px_rgba(217,143,164,0.22)] [-webkit-user-drag:none]"
              animate={
                isFlipped
                  ? { opacity: 0 }
                  : {
                    opacity: [0.92, 0.48, 1, 0.62, 0.92],
                    x: [0, -2, -4, -1, 0],
                    y: [0, -2, -4, -1, 0],
                  }
              }
              transition={{
                duration: 1.45,
                ease: 'easeInOut',
                repeat: isFlipped ? 0 : Infinity,
                repeatDelay: 0.18,
              }}
            />
          </motion.div>
        </article>

        <article
          className={`absolute inset-0 flex rounded-lg border border-border bg-[linear-gradient(180deg,#FFFAFB_0%,#FBE8ED_58%,#FFF7F0_100%)] p-7 transition-shadow duration-300 [backface-visibility:hidden] [transform:rotateY(180deg)] ${isActive ? 'shadow-photo' : 'shadow-none'}`}
        >
          <div className="m-auto text-center">
            <p className="text-[1.05rem] font-normal text-rose">{date}</p>
            <h3 className="mt-3 text-[2.35rem] font-normal leading-tight text-ink">
              {title}
            </h3>
            <p className="mt-6 whitespace-pre-line text-[1.5rem] leading-10 text-ink/75">
              {backMessage}
            </p>
            <p className="mt-8 text-[1.05rem] font-normal text-rose">
              다시 탭해서 돌아가기
            </p>
          </div>
        </article>
      </motion.div>
    </div>
  );
}
