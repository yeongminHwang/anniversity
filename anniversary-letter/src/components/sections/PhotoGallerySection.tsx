import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import type { Memory } from '../../data/memories';
import FloralWreath from '../ui/FloralWreath';
import PhotoCard from '../ui/PhotoCard';

type PhotoGallerySectionProps = {
  memories: Memory[];
};

export default function PhotoGallerySection({
  memories,
}: PhotoGallerySectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loopWidth, setLoopWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const activeIndexRef = useRef(0);
  const hasMeasuredRef = useRef(false);
  const trackX = useMotionValue(0);
  const memoryCount = memories.length;
  const repeatedMemories = useMemo(
    () => [...memories, ...memories, ...memories],
    [memories],
  );
  const loopDuration = Math.max(memoryCount * 5.2, 28);

  const normalizeX = useCallback(
    (value: number) => {
      if (!loopWidth) {
        return value;
      }

      let next = value;

      while (next <= -loopWidth * 2) {
        next += loopWidth;
      }

      while (next > -loopWidth) {
        next -= loopWidth;
      }

      return next;
    },
    [loopWidth],
  );

  const updateActiveIndex = useCallback(
    (value: number) => {
      if (!loopWidth || memoryCount <= 1) {
        return;
      }

      const normalized = normalizeX(value);
      const progress = (-normalized - loopWidth) / loopWidth;
      const nextIndex =
        Math.floor(progress * memoryCount + 0.5) % memoryCount;

      if (nextIndex !== activeIndexRef.current) {
        activeIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
      }
    },
    [loopWidth, memoryCount, normalizeX],
  );

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) {
      return;
    }

    const measure = () => {
      const nextLoopWidth = track.scrollWidth / 3;

      setLoopWidth(nextLoopWidth);
      setViewportWidth(viewport.clientWidth);

      if (!hasMeasuredRef.current && nextLoopWidth > 0) {
        trackX.set(-nextLoopWidth);
        hasMeasuredRef.current = true;
      }
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);

    resizeObserver.observe(viewport);
    resizeObserver.observe(track);

    return () => resizeObserver.disconnect();
  }, [trackX]);

  useAnimationFrame((_, delta) => {
    if (!loopWidth || memoryCount <= 1) {
      return;
    }

    if (!isDraggingRef.current) {
      const speed = loopWidth / (loopDuration * 1000);
      trackX.set(normalizeX(trackX.get() - speed * delta));
    }

    updateActiveIndex(trackX.get());
  });

  return (
    <section className="px-5 py-16 font-hand">
      <div className="mx-auto max-w-[402px]">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <FloralWreath size="sm" className="mb-3" />
          <p className="mb-3 text-[1.15rem] font-normal text-rose">Memory Album</p>
          <h2 className="text-[2.75rem] font-normal leading-tight text-ink">
            한 장씩 모인 우리
          </h2>
          <p className="mt-5 max-w-2xl text-[1.35rem] leading-9 text-ink/70">
            사진마다 완벽한 설명은 없어도, 그날의 공기와 마음은 오래 남아.
          </p>
        </motion.div>

        <div className="-mt-5 mb-5 flex items-center justify-center gap-2">
          {memories.map((memory, index) => (
            <span
              key={memory.id}
              aria-label={`${memory.title} 위치`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'w-5 bg-accent' : 'w-2 bg-border'
              }`}
            />
          ))}
        </div>

        <div
          ref={viewportRef}
          className="relative left-1/2 ml-[-50vw] w-screen cursor-grab overflow-hidden pb-2 select-none active:cursor-grabbing [touch-action:pan-y] [-webkit-user-select:none]"
        >
          <motion.div
            ref={trackRef}
            className="flex w-max gap-5"
            style={{ x: trackX }}
            drag={memoryCount > 1 ? 'x' : false}
            dragConstraints={
              loopWidth > 0 ? { left: -loopWidth * 2, right: 0 } : undefined
            }
            dragElastic={0.06}
            dragMomentum={false}
            onDragStart={() => {
              isDraggingRef.current = true;
            }}
            onDragEnd={() => {
              trackX.set(normalizeX(trackX.get()));
              updateActiveIndex(trackX.get());
              isDraggingRef.current = false;
            }}
          >
            {repeatedMemories.map((memory, index) => (
              <GalleryCarouselCard
                key={`${memory.id}-${index}`}
                index={index}
                loopWidth={loopWidth}
                memory={memory}
                memoryCount={memoryCount}
                trackX={trackX}
                viewportWidth={viewportWidth}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type GalleryCarouselCardProps = {
  index: number;
  loopWidth: number;
  memory: Memory;
  memoryCount: number;
  trackX: MotionValue<number>;
  viewportWidth: number;
};

function GalleryCarouselCard({
  index,
  loopWidth,
  memory,
  memoryCount,
  trackX,
  viewportWidth,
}: GalleryCarouselCardProps) {
  const itemSlotWidth = memoryCount > 0 ? loopWidth / memoryCount : 0;

  const focusProgress = useTransform(trackX, (value) => {
    if (!loopWidth || !viewportWidth || !itemSlotWidth) {
      return 1;
    }

    const itemCenter = value + itemSlotWidth * index + itemSlotWidth / 2;
    const distance = Math.abs(itemCenter - viewportWidth / 2);

    return Math.min(distance / (viewportWidth * 0.62), 1);
  });
  const scale = useTransform(focusProgress, [0, 1], [1, 0.82]);
  const opacity = useTransform(focusProgress, [0, 1], [1, 0.48]);
  const y = useTransform(focusProgress, [0, 1], [0, 18]);

  return (
    <motion.div
      className="w-[72vw] max-w-[310px] shrink-0 [transform:translateZ(0)]"
      style={{ opacity, scale, y }}
    >
      <PhotoCard
        image={memory.media.src}
        mediaType={memory.media.type}
        poster={memory.media.poster}
        alt={`${memory.title} 앨범 ${
          memory.media.type === 'video' ? '영상' : '사진'
        }`}
        title={memory.title}
        date={memory.date}
        caption={memory.emotion}
      />
    </motion.div>
  );
}
