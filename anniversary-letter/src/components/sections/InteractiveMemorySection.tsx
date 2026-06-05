import { motion } from 'framer-motion';
import type { Memory } from '../../data/memories';
import FloralFrame from '../ui/FloralFrame';
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
  return (
    <motion.section
      className="min-h-[100svh] px-5 py-14 font-hand sm:px-6"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="mx-auto flex w-full max-w-[402px] flex-col gap-5">
        <FloralFrame className="px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-full bg-blush px-4 py-2 text-[1.1rem] font-normal text-rose">
              {String(index + 1).padStart(2, '0')} · {memory.emotion}
            </span>
            <span className="text-[1.1rem] font-normal text-leaf">
              {memory.date}
            </span>
          </div>
        </FloralFrame>

        <PolaroidFlipCard
          image={memory.image}
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
