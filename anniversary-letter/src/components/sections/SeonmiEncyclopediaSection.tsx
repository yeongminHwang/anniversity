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
import FloralWreath from '../ui/FloralWreath';

type EncyclopediaCategory = {
  title: string;
  description: string;
  items: string[];
};

const encyclopediaCategories: EncyclopediaCategory[] = [
  {
    title: '좋아하는 음식',
    description: '자기가 맛있게 먹는 것들',
    items: [
      '고기와 면',
      '칼국수',
      '치킨버거와 새우버거',
      '순대곱창과 순대 간',
      '낙지볶음',
      '꽃게와 새우',
      '감태와 단새우',
      '간장게장',
      '김에 날치알 싸먹기',
      '소금빵과 크로와상',
      '슈크림 붕어빵',
      '도토리묵과 청포묵',
      '디핑 바나나초코 구슬아이스크림',
    ],
  },
  {
    title: '조금 어려운 음식',
    description: '기억해두면 다정한 취향',
    items: [
      '가지, 당근, 호박 같은 야채',
      '전복과 참치',
      '콩국수',
      '피자빵',
      '베이컨은 바싹 익히기',
      '번데기는 먹을 수 있지만 보는 건 어려움',
    ],
  },
  {
    title: '좋아하는 것',
    description: '보면 자기가 생각나는 것들',
    items: [
      '수달, 고양이, 강아지',
      '파스텔 색감',
      '파스텔 블루와 보라색',
      '수국, 작약꽃, 장미, 튤립',
      '네잎클로버',
      '줍에이 노래',
      '소리없는 비가 내린다',
      '꽃꽂이',
      '베이킹과 요리',
      '슬이',
    ],
  },
  {
    title: '싫어하는 것',
    description: '괜히 마주치지 않게 조심하기',
    items: ['새', '벌레', '구기종목은 조금 어려움'],
  },
  {
    title: '기억해야 할 것',
    description: '자기를 편하게 해주는 작은 습관',
    items: [
      '문자나 카톡보다 전화하기',
      '약속 장소로 이동할 때 가게 이름까지 알려주기',
      '걸어갈 때 몇 분 정도 걸리는지 알려주기',
      '인스타그램에서 먹고 싶은 것 기억해두기',
      '술 마신 날 마지막은 요아정',
      '새벽에 출출하면 요아정',
      '스타벅스는 아아 연하게, 유자민트티',
    ],
  },
  {
    title: '함께 하고 싶은 것',
    description: '언젠가 같이 체크할 약속들',
    items: [
      '스페인과 포르투갈 가기',
      '제주도에서 부채새우 먹기',
      '제주 오래옥식당 가기',
      '깻잎막회 먹고 다음에는 뼈찜 먹기',
      '꿀타래 먹어보기',
      '솥뚜껑 삼겹살 먹기',
      '논현동 오라이 게구이 사주기',
    ],
  },
  {
    title: '우리의 기념일',
    description: '작지만 오래 남겨둘 날짜',
    items: [
      '5월 31일, 처음 수원 놀러간 날',
      '7월 1일, 사랑 시작한 날',
      '7월 19일, 선미 엄지 발톱 빠진 날',
    ],
  },
  {
    title: '말버릇과 성격',
    description: '듣다 보면 웃음 나는 자기다움',
    items: [
      '"아니"라고 자주 말하기',
      '"내말이"라고 맞장구치기',
      'ESFP가 나왔지만 ENFP이고 싶은 마음',
      '2PM은 2시에 잔다',
    ],
  },
];

export default function SeonmiEncyclopediaSection() {
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
  const categoryCount = encyclopediaCategories.length;
  const repeatedCategories = useMemo(
    () => [
      ...encyclopediaCategories,
      ...encyclopediaCategories,
      ...encyclopediaCategories,
    ],
    [],
  );
  const loopDuration = Math.max(categoryCount * 5.4, 30);

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
      if (!loopWidth || categoryCount <= 1) {
        return;
      }

      const normalized = normalizeX(value);
      const progress = (-normalized - loopWidth) / loopWidth;
      const nextIndex =
        Math.floor(progress * categoryCount + 0.5) % categoryCount;

      if (nextIndex !== activeIndexRef.current) {
        activeIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
      }
    },
    [categoryCount, loopWidth, normalizeX],
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
      if (categoryCount <= 1) {
        return;
      }

      shouldTrackPointerRef.current = true;
      hasStartedDragRef.current = false;
      pointerStartRef.current = {
        x: event.clientX,
        y: event.clientY,
      };
    },
    [categoryCount],
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

  const moveToCategory = useCallback(
    (nextIndex: number) => {
      if (!loopWidth || categoryCount <= 1) {
        return;
      }

      const itemSlotWidth = loopWidth / categoryCount;
      const nextX = -loopWidth - itemSlotWidth * nextIndex;

      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
      trackX.set(nextX);
    },
    [categoryCount, loopWidth, trackX],
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

    return () => {
      resizeObserver.disconnect();
      window.clearTimeout(resumeTimerRef.current);
    };
  }, [trackX]);

  useAnimationFrame((_, delta) => {
    if (!loopWidth || categoryCount <= 1) {
      return;
    }

    if (!isDraggingRef.current) {
      const speed = loopWidth / (loopDuration * 1000);
      trackX.set(normalizeX(trackX.get() - speed * delta));
    }

    updateActiveIndex(trackX.get());
  });

  return (
    <section className="relative overflow-hidden px-5 py-16 font-hand">
      <div
        aria-hidden="true"
        className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-rose/25 to-transparent"
      />

      <div className="mx-auto max-w-[402px]">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <FloralWreath size="sm" className="mb-3" />
          <p className="mb-3 text-[1.15rem] font-normal text-rose">
            Seonmi Encyclopedia
          </p>
          <h2 className="text-[2.75rem] font-normal leading-tight text-ink">
            선미 백과사전
          </h2>
          <p className="mx-auto mt-5 max-w-[340px] text-[1.35rem] leading-9 text-ink/70">
            내가 오래오래 기억하고 싶은 자기의 작은 취향들
          </p>
        </motion.div>

        <div className="-mt-5 mb-5 flex items-center justify-center gap-1.5">
          {encyclopediaCategories.map((category, index) => (
            <button
              key={category.title}
              type="button"
              aria-label={`${category.title} 카드 보기`}
              onClick={() => moveToCategory(index)}
              className={`h-2 rounded-full transition ${
                activeIndex === index ? 'w-5 bg-accent' : 'w-2 bg-border'
              }`}
            />
          ))}
        </div>

        <div
          ref={viewportRef}
          className="relative left-1/2 ml-[-50vw] w-screen cursor-grab overflow-hidden pb-3 select-none active:cursor-grabbing [overscroll-behavior-x:contain] [touch-action:pan-y] [-webkit-touch-callout:none] [-webkit-user-select:none]"
        >
          <motion.div
            ref={trackRef}
            className="flex w-max gap-4 [will-change:transform]"
            style={{ x: trackX }}
            drag={categoryCount > 1 ? 'x' : false}
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
            {repeatedCategories.map((category, index) => (
              <EncyclopediaCarouselCard
                key={`${category.title}-${index}`}
                category={category}
                categoryCount={categoryCount}
                index={index}
                loopWidth={loopWidth}
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

type EncyclopediaCarouselCardProps = {
  category: EncyclopediaCategory;
  categoryCount: number;
  index: number;
  loopWidth: number;
  trackX: MotionValue<number>;
  viewportWidth: number;
};

function EncyclopediaCarouselCard({
  category,
  categoryCount,
  index,
  loopWidth,
  trackX,
  viewportWidth,
}: EncyclopediaCarouselCardProps) {
  const itemSlotWidth = categoryCount > 0 ? loopWidth / categoryCount : 0;
  const categoryIndex = index % categoryCount;

  const focusProgress = useTransform(trackX, (value) => {
    if (!loopWidth || !viewportWidth || !itemSlotWidth) {
      return 1;
    }

    const itemCenter = value + itemSlotWidth * index + itemSlotWidth / 2;
    const distance = Math.abs(itemCenter - viewportWidth / 2);

    return Math.min(distance / (viewportWidth * 0.62), 1);
  });
  const scale = useTransform(focusProgress, [0, 1], [1, 0.84]);
  const opacity = useTransform(focusProgress, [0, 1], [1, 0.5]);
  const y = useTransform(focusProgress, [0, 1], [0, 16]);

  return (
    <motion.article
      className="w-[82vw] max-w-[330px] shrink-0 rounded-lg border border-borderSoft bg-paper/95 p-5 shadow-paper [transform:translateZ(0)]"
      style={{ opacity, scale, y }}
    >
      <p className="text-[1.05rem] font-normal text-rose">
        {String(categoryIndex + 1).padStart(2, '0')}
      </p>
      <h3 className="mt-1 text-[1.65rem] font-normal leading-snug text-ink">
        {category.title}
      </h3>
      <p className="mt-2 text-[1.08rem] leading-7 text-ink/60">
        {category.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {category.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-borderSoft bg-card/85 px-3 py-2 text-[1.05rem] leading-6 text-ink/70"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
