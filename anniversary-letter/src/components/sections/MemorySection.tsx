import { motion } from 'framer-motion';
import type { Memory } from '../../data/memories';
import PhotoCard from '../ui/PhotoCard';

type MemorySectionProps = {
  memory: Memory;
  index: number;
};

export default function MemorySection({ memory, index }: MemorySectionProps) {
  const isReversed = index % 2 === 1;

  return (
    <motion.section
      className="min-h-[100svh] px-5 py-14 font-hand [touch-action:pan-y]"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div
        className={`mx-auto grid max-w-[402px] items-center gap-5 ${
          isReversed ? '[&>*:first-child]:order-2' : ''
        }`}
      >
        <PhotoCard
          image={memory.media.src}
          mediaType={memory.media.type}
          poster={memory.media.poster}
          alt={`${memory.title} ${memory.media.type === 'video' ? '영상' : '사진'}`}
          title={memory.title}
          date={memory.date}
          caption={memory.emotion}
          enableTapScale={false}
        />

        <div className="pointer-events-none select-none rounded-lg border border-borderSoft bg-paper/90 p-5 shadow-paper [-webkit-touch-callout:none] [-webkit-user-select:none]">
          <span className="mb-4 inline-flex rounded-full bg-blush px-4 py-2 text-[1.1rem] font-normal text-rose">
            {String(index + 1).padStart(2, '0')} · {memory.emotion}
          </span>
          <h2 className="text-[2.2rem] font-normal leading-tight text-ink">
            {memory.title}
          </h2>
          <p className="mt-2 text-[1.1rem] font-normal text-rose">{memory.date}</p>
          <p className="mt-6 whitespace-pre-line text-[1.35rem] leading-9 text-ink/70">
            {memory.message}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
