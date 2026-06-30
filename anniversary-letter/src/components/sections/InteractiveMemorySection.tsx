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
  const sectionTone =
    index % 2 === 0
      ? 'bg-[linear-gradient(180deg,#ffffff_0%,#fff8fb_44%,#ffffff_100%)]'
      : 'bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf6_48%,#ffffff_100%)]';

  return (
    <motion.section
      className={`relative isolate min-h-[100svh] overflow-hidden border-y border-rose/10 px-5 py-16 font-hand shadow-[inset_0_18px_42px_rgba(201,79,114,0.035)] sm:px-6 ${sectionTone}`}
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
            <span className="rounded-full border border-rose/20 bg-white/80 px-4 py-2 text-[1.05rem] font-normal text-rose shadow-sm">
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

        <PolaroidFlipCard
          image={memory.media.src}
          mediaType={memory.media.type}
          poster={memory.media.poster}
          title={memory.title}
          date={memory.date}
          frontMessage={memory.message}
          backMessage={memory.flipMessage}
        />

        <TapToRevealCard
          title="손끝으로 열어보는 마음"
          preview="여기에 그날의 작은 진심을 숨겨뒀어."
          message={memory.hiddenMessage}
        />

        <MemoryQuiz quiz={memory.quiz} />
      </div>
    </motion.section>
  );
}
