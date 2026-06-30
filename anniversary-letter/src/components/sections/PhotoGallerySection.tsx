import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import {
  motion,
  useAnimationFrame,
  useDragControls,
  useMotionValue,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import type { DailyGalleryItem } from '../../data/dailyGallery';
import FloralWreath from '../ui/FloralWreath';
import PhotoCard from '../ui/PhotoCard';

type PhotoGallerySectionProps = {
  items: DailyGalleryItem[];
};

export default function PhotoGallerySection({
  items,
}: PhotoGallerySectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loopWidth, setLoopWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const hasStartedDragRef = useRef(false);
  const pointerStartRef = useRef({ x: 0, y: 0 });
  const shouldTrackPointerRef = useRef(false);
  const resumeTimerRef = useRef<number>();
  const activeIndexRef = useRef(0);
  const hasMeasuredRef = useRef(false);
  const dragControls = useDragControls();
  const trackX = useMotionValue(0);
  const itemCount = items.length;
  const repeatedItems = useMemo(
    () => [...items, ...items, ...items],
    [items],
  );
  const loopDuration = Math.max(itemCount * 5.2, 28);

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
      if (!loopWidth || itemCount <= 1) {
        return;
      }

      const normalized = normalizeX(value);
      const progress = (-normalized - loopWidth) / loopWidth;
      const nextIndex =
        Math.floor(progress * itemCount + 0.5) % itemCount;

      if (nextIndex !== activeIndexRef.current) {
        activeIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
      }
    },
    [loopWidth, itemCount, normalizeX],
  );

  const pauseAutoLoop = useCallback(() => {
    window.clearTimeout(resumeTimerRef.current);
    isDraggingRef.current = true;
  }, []);

  const resumeAutoLoop = useCallback(() => {
    window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => {
      trackX.set(normalizeX(trackX.get()));
      updateActiveIndex(trackX.get());
      isDraggingRef.current = false;
    }, 120);
  }, [normalizeX, trackX, updateActiveIndex]);

  const handlePointerDown = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (itemCount <= 1) {
        return;
      }

      shouldTrackPointerRef.current = true;
      hasStartedDragRef.current = false;
      pointerStartRef.current = {
        x: event.clientX,
        y: event.clientY,
      };
    },
    [itemCount],
  );

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (!shouldTrackPointerRef.current || hasStartedDragRef.current) {
        return;
      }

      const deltaX = Math.abs(event.clientX - pointerStartRef.current.x);
      const deltaY = Math.abs(event.clientY - pointerStartRef.current.y);

      if (deltaY > 8 && deltaY > deltaX) {
        shouldTrackPointerRef.current = false;
        return;
      }

      if (deltaX > 10 && deltaX > deltaY * 1.25) {
        hasStartedDragRef.current = true;
        pauseAutoLoop();
        dragControls.start(event);
      }
    },
    [dragControls, pauseAutoLoop],
  );

  const handlePointerEnd = useCallback(() => {
    shouldTrackPointerRef.current = false;

    if (hasStartedDragRef.current) {
      resumeAutoLoop();
    }

    hasStartedDragRef.current = false;
  }, [resumeAutoLoop]);

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

    return () => {
      resizeObserver.disconnect();
      window.clearTimeout(resumeTimerRef.current);
    };
  }, [trackX]);

  useAnimationFrame((_, delta) => {
    if (!loopWidth || itemCount <= 1) {
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
          {items.map((item, index) => (
            <span
              key={item.id}
              aria-label={`${item.title} 위치`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'w-5 bg-accent' : 'w-2 bg-border'
              }`}
            />
          ))}
        </div>

        <div
          ref={viewportRef}
          className="relative left-1/2 ml-[-50vw] w-screen cursor-grab overflow-hidden pb-2 select-none active:cursor-grabbing [overscroll-behavior-x:contain] [touch-action:pan-y] [-webkit-touch-callout:none] [-webkit-user-select:none]"
        >
          <motion.div
            ref={trackRef}
            className="flex w-max gap-5 [will-change:transform]"
            style={{ x: trackX }}
            drag={itemCount > 1 ? 'x' : false}
            dragControls={dragControls}
            dragDirectionLock
            dragListener={false}
            dragConstraints={
              loopWidth > 0 ? { left: -loopWidth * 2, right: 0 } : undefined
            }
            dragElastic={0.025}
            dragMomentum={false}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerCancel={handlePointerEnd}
            onPointerUp={handlePointerEnd}
            onDragStart={pauseAutoLoop}
            onDragEnd={resumeAutoLoop}
          >
            {repeatedItems.map((item, index) => (
              <GalleryCarouselCard
                key={`${item.id}-${index}`}
                index={index}
                loopWidth={loopWidth}
                item={item}
                itemCount={itemCount}
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
  item: DailyGalleryItem;
  itemCount: number;
  loopWidth: number;
  trackX: MotionValue<number>;
  viewportWidth: number;
};

function GalleryCarouselCard({
  index,
  item,
  itemCount,
  loopWidth,
  trackX,
  viewportWidth,
}: GalleryCarouselCardProps) {
  const itemSlotWidth = itemCount > 0 ? loopWidth / itemCount : 0;

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
        image={item.media.src}
        mediaType={item.media.type}
        poster={item.media.poster}
        alt={`${item.title} 앨범 ${
          item.media.type === 'video' ? '영상' : '사진'
        }`}
        title={item.title}
        date={item.date}
        caption={item.caption}
        enableTapScale={false}
        showVideoControls={false}
      />
    </motion.div>
  );
}
