import {
  useCallback,
  useRef,
  useState,
  type PointerEvent,
  type UIEvent,
} from 'react';
import { motion } from 'framer-motion';
import { decorationAsset } from '../../data/assets';
import type { Memory } from '../../data/memories';
import MemoryQuiz from '../ui/MemoryQuiz';
import PolaroidFlipCard from '../ui/PolaroidFlipCard';
import TapToRevealCard from '../ui/TapToRevealCard';

type InteractiveMemorySectionProps = {
  memory: Memory;
  index: number;
};

export default function InteractiveMemorySection({
  memory,
  index,
}: InteractiveMemorySectionProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const cardTrackRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({
    hasDirection: false,
    isHorizontal: false,
    pointerId: -1,
    scrollLeft: 0,
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
  const cardCount = polaroidCards.length + 2;
  const canMovePrevious = activeCardIndex > 0;
  const canMoveNext = activeCardIndex < cardCount - 1;
  const sectionTone =
    index % 2 === 0
      ? 'bg-[linear-gradient(180deg,#FFF5F7_0%,#FFF9FA_48%,#FFF5F7_100%)]'
      : 'bg-[linear-gradient(180deg,#FFF5F7_0%,#FFF7F0_52%,#FFF9FA_100%)]';
  const handleCardScroll = useCallback(
    (event: UIEvent<HTMLDivElement>) => {
      const { scrollLeft, scrollWidth, clientWidth } = event.currentTarget;
      const maxScrollLeft = scrollWidth - clientWidth;
      const nextProgress =
        maxScrollLeft <= 0 ? 0 : Math.min(scrollLeft / maxScrollLeft, 1);

      setScrollProgress(nextProgress);
      setActiveCardIndex(Math.round(nextProgress * (cardCount - 1)));
    },
    [cardCount],
  );
  const snapToNearestCard = useCallback((track: HTMLDivElement) => {
    const cards = Array.from(track.children) as HTMLElement[];
    const viewportCenter = track.scrollLeft + track.clientWidth / 2;
    const nearestCard = cards.reduce((nearest, card) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const nearestCenter = nearest.offsetLeft + nearest.clientWidth / 2;

      return Math.abs(cardCenter - viewportCenter) <
        Math.abs(nearestCenter - viewportCenter)
        ? card
        : nearest;
    }, cards[0]);

    if (!nearestCard) {
      return;
    }

    track.scrollTo({
      left:
        nearestCard.offsetLeft -
        (track.clientWidth - nearestCard.clientWidth) / 2,
      behavior: 'smooth',
    });
  }, []);
  const scrollToCard = useCallback(
    (nextIndex: number) => {
      const track = cardTrackRef.current;

      if (!track) {
        return;
      }

      const cards = Array.from(track.children) as HTMLElement[];
      const targetIndex = Math.min(Math.max(nextIndex, 0), cardCount - 1);
      const targetCard = cards[targetIndex];

      if (!targetCard) {
        return;
      }

      setActiveCardIndex(targetIndex);
      setScrollProgress(cardCount <= 1 ? 0 : targetIndex / (cardCount - 1));
      track.scrollTo({
        left:
          targetCard.offsetLeft -
          (track.clientWidth - targetCard.clientWidth) / 2,
        behavior: 'smooth',
      });
    },
    [cardCount],
  );
  const handlePointerDown = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (event.pointerType === 'mouse') {
        return;
      }

      dragStateRef.current = {
        hasDirection: false,
        isHorizontal: false,
        pointerId: event.pointerId,
        scrollLeft: event.currentTarget.scrollLeft,
        startX: event.clientX,
        startY: event.clientY,
      };
    },
    [],
  );
  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      const dragState = dragStateRef.current;

      if (dragState.pointerId !== event.pointerId) {
        return;
      }

      const deltaX = event.clientX - dragState.startX;
      const deltaY = event.clientY - dragState.startY;
      const absoluteX = Math.abs(deltaX);
      const absoluteY = Math.abs(deltaY);

      if (!dragState.hasDirection) {
        if (absoluteX < 8 && absoluteY < 8) {
          return;
        }

        dragState.hasDirection = true;
        dragState.isHorizontal = absoluteX > absoluteY * 1.25;

        if (dragState.isHorizontal) {
          event.currentTarget.setPointerCapture(event.pointerId);
        }
      }

      if (!dragState.isHorizontal) {
        return;
      }

      event.preventDefault();
      event.currentTarget.scrollLeft = dragState.scrollLeft - deltaX;
    },
    [],
  );
  const handlePointerEnd = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      const dragState = dragStateRef.current;

      if (dragState.pointerId !== event.pointerId) {
        return;
      }

      if (dragState.isHorizontal) {
        snapToNearestCard(event.currentTarget);
      }

      dragStateRef.current = {
        hasDirection: false,
        isHorizontal: false,
        pointerId: -1,
        scrollLeft: 0,
        startX: 0,
        startY: 0,
      };
    },
    [snapToNearestCard],
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
        loading="lazy"
        className="absolute -right-12 top-7 -z-10 h-auto w-44 rotate-[24deg] opacity-[0.08]"
      />
      <img
        aria-hidden="true"
        src={decorationAsset('floweralDown.svg')}
        alt=""
        loading="lazy"
        className="absolute -bottom-4 -left-14 -z-10 h-auto w-44 rotate-[-18deg] opacity-[0.08]"
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
          <div className="flex items-center justify-between px-1">
            <div
              aria-hidden="true"
              className="flex items-center gap-2 text-rose"
            >
              <motion.span
                className="text-[1.35rem] leading-none"
                animate={{ x: [0, -3, 0], opacity: [0.45, 0.9, 0.45] }}
                transition={{
                  duration: 1.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                ‹
              </motion.span>
              <div className="h-1.5 w-28 overflow-hidden rounded-full bg-surfaceSoft">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  animate={{ width: `${Math.max(scrollProgress * 100, 18)}%` }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                />
              </div>
              <motion.span
                className="text-[1.35rem] leading-none"
                animate={{ x: [0, 3, 0], opacity: [0.45, 0.9, 0.45] }}
                transition={{
                  duration: 1.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                ›
              </motion.span>
            </div>
            <span className="rounded-full border border-borderSoft bg-card/75 px-3 py-1 text-[0.95rem] font-normal text-ink/55">
              {activeCardIndex + 1}/{cardCount}
            </span>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-x-1 top-[46%] z-30 flex -translate-y-1/2 items-center justify-between">
              <motion.button
                type="button"
                aria-label="이전 카드 보기"
                title="이전 카드 보기"
                disabled={!canMovePrevious}
                onClick={() => scrollToCard(activeCardIndex - 1)}
                className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/90 text-[1.8rem] leading-none text-rose shadow-floating backdrop-blur transition disabled:pointer-events-none disabled:opacity-25"
                whileTap={{ scale: 0.94 }}
              >
                ‹
              </motion.button>
              <motion.button
                type="button"
                aria-label="다음 카드 보기"
                title="다음 카드 보기"
                disabled={!canMoveNext}
                onClick={() => scrollToCard(activeCardIndex + 1)}
                className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/90 text-[1.8rem] leading-none text-rose shadow-floating backdrop-blur transition disabled:pointer-events-none disabled:opacity-25"
                whileTap={{ scale: 0.94 }}
              >
                ›
              </motion.button>
            </div>

            <div
              ref={cardTrackRef}
              onScroll={handleCardScroll}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerCancel={handlePointerEnd}
              onPointerUp={handlePointerEnd}
              className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 select-none [overscroll-behavior-x:contain] [scrollbar-width:none] [touch-action:pan-y] [-webkit-user-select:none] [&::-webkit-scrollbar]:hidden"
            >
              {polaroidCards.map((card, cardIndex) => (
                <motion.div
                  key={card.id}
                  className="min-w-full snap-center"
                  animate={{
                    opacity: activeCardIndex === cardIndex ? 1 : 0.72,
                    rotateZ: activeCardIndex === cardIndex ? 0 : -1.5,
                    scale: activeCardIndex === cardIndex ? 1 : 0.965,
                    y: activeCardIndex === cardIndex ? 0 : 12,
                  }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                >
                  <PolaroidFlipCard
                    image={card.media.src}
                    mediaType={card.media.type}
                    poster={card.media.poster}
                    title={card.title}
                    date={card.date}
                    frontMessage={card.message}
                    backMessage={card.flipMessage}
                  />
                </motion.div>
              ))}

              <motion.div
                className="flex min-w-full snap-center items-center"
                animate={{
                  opacity:
                    activeCardIndex === polaroidCards.length ? 1 : 0.72,
                  scale: activeCardIndex === polaroidCards.length ? 1 : 0.965,
                  y: activeCardIndex === polaroidCards.length ? 0 : 12,
                }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <TapToRevealCard
                  title="손끝으로 열어보는 마음"
                  preview="여기에 그날의 작은 진심을 숨겨뒀어."
                  message={memory.hiddenMessage}
                />
              </motion.div>

              <motion.div
                className="flex min-w-full snap-center items-center"
                animate={{
                  opacity:
                    activeCardIndex === polaroidCards.length + 1 ? 1 : 0.72,
                  scale:
                    activeCardIndex === polaroidCards.length + 1 ? 1 : 0.965,
                  y: activeCardIndex === polaroidCards.length + 1 ? 0 : 12,
                }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <MemoryQuiz quiz={memory.quiz} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
