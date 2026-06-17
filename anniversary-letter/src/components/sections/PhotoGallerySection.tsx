import { motion } from 'framer-motion';
import type { Memory } from '../../data/memories';
import FloralWreath from '../ui/FloralWreath';
import PhotoCard from '../ui/PhotoCard';

type PhotoGallerySectionProps = {
  memories: Memory[];
};

export default function PhotoGallerySection({
  memories,
}: PhotoGallerySectionProps) {
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

        <div className="grid gap-5">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
                ease: 'easeOut',
              }}
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
          ))}
        </div>
      </div>
    </section>
  );
}
