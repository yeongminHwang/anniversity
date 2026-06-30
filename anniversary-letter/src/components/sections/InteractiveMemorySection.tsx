import {
  useCallback,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type TouchEvent as ReactTouchEvent,
} from 'react';
import { motion } from 'framer-motion';
import { decorationAsset } from '../../data/assets';
import type { Memory } from '../../data/memories';
import MemoryQuiz from '../ui/MemoryQuiz';
import PolaroidFlipCard from '../ui/PolaroidFlipCard';

type InteractiveMemorySectionProps = {
  memory: Memory;
  index: number;
};

export default function InteractiveMemorySection({
  memory,
  index,
}: InteractiveMemorySectionProps) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const flickStateRef = useRef({
    isHorizontal: false,
    isTracking: false,
    startTime: 0,
    startX: 0,
    startY: 0,
  });
  const polaroidCards = [
    {
      id: `${memory.id}-main`,
      date: memory.date,
      title: memory.title,
      media: memory.media,
      message: memory.message,
      flipMessage: memory.flipMessage,
    },
    ...(memory.extraPolaroids ?? []),
  ];
  const cardCount = polaroidCards.length + 1;
  const canMovePrevious = activeCardIndex > 0;
  const canMoveNext = activeCardIndex < cardCount - 1;
  const scrollProgress = cardCount <= 1 ? 0 : activeCardIndex / (cardCount - 1);
  const sectionTone =
    index % 2 === 0
      ? 'bg-[linear-gradient(180deg,#FFF5F7_0%,#FFF9FA_48%,#FFF5F7_100%)]'
      : 'bg-[linear-gradient(180deg,#FFF5F7_0%,#FFF7F0_52%,#FFF9FA_100%)]';
  const moveToCard = useCallback(
    (nextIndex: number) => {
      const targetIndex = Math.min(Math.max(nextIndex, 0), cardCount - 1);

      setActiveCardIndex(targetIndex);
    },
    [cardCount],
  );
  const startFlickTracking = useCallback((clientX: number, clientY: number) => {
    flickStateRef.current = {
      isHorizontal: false,
      isTracking: true,
      startTime: performance.now(),
      startX: clientX,
      startY: clientY,
    };
  }, []);
  const updateFlickTracking = useCallback(
    (clientX: number, clientY: number, preventScroll?: () => void) => {
      if (!flickStateRef.current.isTracking) {
        return;
      }

      const deltaX = Math.abs(clientX - flickStateRef.current.startX);
      const deltaY = Math.abs(clientY - flickStateRef.current.startY);

      if (
        !flickStateRef.current.isHorizontal &&
        deltaY > 14 &&
        deltaY > deltaX * 1.25
      ) {
        flickStateRef.current.isTracking = false;
        return;
      }

      if (deltaX > 9 && deltaX > deltaY * 1.08) {
        flickStateRef.current.isHorizontal = true;
        preventScroll?.();
      }
    },
    [],
  );
  const finishFlickTracking = useCallback(
    (clientX: number, clientY: number) => {
      if (!flickStateRef.current.isTracking) {
        return;
      }

      const deltaX = clientX - flickStateRef.current.startX;
      const deltaY = clientY - flickStateRef.current.startY;
      const elapsed = Math.max(performance.now() - flickStateRef.current.startTime, 1);
      const velocityX = deltaX / elapsed;
      const isHorizontalFlick =
        Math.abs(deltaX) > Math.abs(deltaY) * 1.05 &&
        (flickStateRef.current.isHorizontal ||
          Math.abs(deltaX) > 20 ||
          Math.abs(velocityX) > 0.22);

      flickStateRef.current.isTracking = false;
      flickStateRef.current.isHorizontal = false;

      if (!isHorizontalFlick) {
        return;
      }

      moveToCard(activeCardIndex + (deltaX < 0 ? 1 : -1));
    },
    [activeCardIndex, moveToCard],
  );
  const cancelFlickTracking = useCallback(() => {
    flickStateRef.current.isTracking = false;
    flickStateRef.current.isHorizontal = false;
  }, []);
  const handleCarouselPointerDown = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (event.pointerType === 'touch') {
        return;
      }

      startFlickTracking(event.clientX, event.clientY);
    },
    [startFlickTracking],
  );
  const handleCarouselPointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (event.pointerType === 'touch') {
        return;
      }

      updateFlickTracking(event.clientX, event.clientY);
    },
    [updateFlickTracking],
  );
  const handleCarouselPointerEnd = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (event.pointerType === 'touch') {
        return;
      }

      finishFlickTracking(event.clientX, event.clientY);
    },
    [finishFlickTracking],
  );
  const handleCarouselTouchStart = useCallback(
    (event: ReactTouchEvent<HTMLDivElement>) => {
      const touch = event.touches[0];

      if (!touch) {
        return;
      }

      startFlickTracking(touch.clientX, touch.clientY);
    },
    [startFlickTracking],
  );
  const handleCarouselTouchMove = useCallback(
    (event: ReactTouchEvent<HTMLDivElement>) => {
      const touch = event.touches[0];

      if (!touch) {
        return;
      }

      updateFlickTracking(touch.clientX, touch.clientY, () => {
        if (event.cancelable) {
          event.preventDefault();
        }
      });
    },
    [updateFlickTracking],
  );
  const handleCarouselTouchEnd = useCallback(
    (event: ReactTouchEvent<HTMLDivElement>) => {
      const touch = event.changedTouches[0];

      if (!touch) {
        cancelFlickTracking();
        return;
      }

      finishFlickTracking(touch.clientX, touch.clientY);
    },
    [cancelFlickTracking, finishFlickTracking],
  );

  return (
    <motion.section
      className={`relative isolate min-h-[100svh] overflow-hidden border-y border-borderSoft px-5 py-16 font-hand shadow-[inset_0_18px_42px_rgba(217,143,164,0.04)] sm:px-6 ${sectionTone}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-rose/25 to-transparent"
      />
      <img
        aria-hidden="true"
        src={decorationAsset('floweralUp.svg')}
        alt=""
        draggable={false}
        loading="lazy"
        className="pointer-events-none absolute -right-12 top-7 -z-10 h-auto w-44 rotate-[24deg] select-none opacity-[0.08] [-webkit-user-drag:none]"
      />
      <img
        aria-hidden="true"
        src={decorationAsset('floweralDown.svg')}
        alt=""
        draggable={false}
        loading="lazy"
        className="pointer-events-none absolute -bottom-4 -left-14 -z-10 h-auto w-44 rotate-[-18deg] select-none opacity-[0.08] [-webkit-user-drag:none]"
      />

      <div className="mx-auto flex w-full max-w-[402px] flex-col gap-5">
        <div className="pb-2 text-center">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-rose/25" />
            <span className="rounded-full border border-border bg-card/85 px-4 py-2 text-[1.05rem] font-normal text-rose shadow-sm">
              {memory.date}
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-rose/25" />
          </div>
          <p className="text-[1.1rem] font-normal text-leaf">
            {String(index + 1).padStart(2, '0')} · {memory.emotion}
          </p>
          <h2 className="mt-2 text-[2.45rem] font-normal leading-tight text-ink">
            {memory.title}
          </h2>
        </div>

        <div aria-label={`${memory.title} 추억 카드`} className="space-y-3">
          <div className="flex items-center gap-3 px-1">
            <motion.button
              type="button"
              aria-label="이전 카드 보기"
              title="이전 카드 보기"
              disabled={!canMovePrevious}
              onClick={() => moveToCard(activeCardIndex - 1)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card/85 text-[1.45rem] leading-none text-rose shadow-sm transition disabled:pointer-events-none disabled:opacity-25"
              whileTap={{ scale: 0.94 }}
            >
              ‹
            </motion.button>

            <div className="min-w-0 flex-1">
              <div className="h-1.5 overflow-hidden rounded-full bg-surfaceSoft">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  animate={{ width: `${Math.max(scrollProgress * 100, 18)}%` }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                />
              </div>
              <div className="mt-2 flex items-center justify-center gap-1.5">
                {Array.from({ length: cardCount }).map((_, cardIndex) => (
                  <button
                    key={cardIndex}
                    type="button"
                    aria-label={`${cardIndex + 1}번째 카드 보기`}
                    onClick={() => moveToCard(cardIndex)}
                    className={`h-2 rounded-full transition ${activeCardIndex === cardIndex
                      ? 'w-5 bg-accent'
                      : 'w-2 bg-border'
                      }`}
                  />
                ))}
              </div>
            </div>

            <motion.button
              type="button"
              aria-label="다음 카드 보기"
              title="다음 카드 보기"
              disabled={!canMoveNext}
              onClick={() => moveToCard(activeCardIndex + 1)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card/85 text-[1.45rem] leading-none text-rose shadow-sm transition disabled:pointer-events-none disabled:opacity-25"
              whileTap={{ scale: 0.94 }}
            >
              ›
            </motion.button>

            <span className="shrink-0 rounded-full border border-borderSoft bg-card/75 px-2.5 py-1 text-[0.9rem] font-normal text-ink/55">
              {activeCardIndex + 1}/{cardCount}
            </span>
          </div>

          <div className="relative">
            <div className="sr-only" aria-live="polite">
              {activeCardIndex + 1}번째 카드
            </div>

            <div
              className="overflow-hidden pb-2 select-none [overscroll-behavior-x:contain] [touch-action:pan-y] [-webkit-touch-callout:none] [-webkit-user-select:none]"
              onPointerDown={handleCarouselPointerDown}
              onPointerMove={handleCarouselPointerMove}
              onPointerCancel={cancelFlickTracking}
              onPointerUp={handleCarouselPointerEnd}
              onTouchStart={handleCarouselTouchStart}
              onTouchMove={handleCarouselTouchMove}
              onTouchCancel={cancelFlickTracking}
              onTouchEnd={handleCarouselTouchEnd}
            >
              <motion.div
                className="flex [touch-action:pan-y]"
                animate={{ x: `-${activeCardIndex * 100}%` }}
                transition={{
                  duration: 0.58,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {polaroidCards.map((card, cardIndex) => (
                  <motion.div
                    key={card.id}
                    className="min-w-full shrink-0 [transform:translateZ(0)]"
                    animate={{
                      opacity: activeCardIndex === cardIndex ? 1 : 0.86,
                      scale: activeCardIndex === cardIndex ? 1 : 0.985,
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="pointer-events-auto">
                      <PolaroidFlipCard
                        image={card.media.src}
                        mediaType={card.media.type}
                        poster={card.media.poster}
                        title={card.title}
                        date={card.date}
                        frontMessage={card.message}
                        backMessage={card.flipMessage}
                        isActive={activeCardIndex === cardIndex}
                      />
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  className="pointer-events-auto flex min-w-full shrink-0 items-center justify-center [transform:translateZ(0)]"
                  animate={{
                    opacity:
                      activeCardIndex === polaroidCards.length ? 1 : 0.86,
                    scale: activeCardIndex === polaroidCards.length ? 1 : 0.985,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="w-full max-w-[402px]">
                    <MemoryQuiz quiz={memory.quiz} />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
