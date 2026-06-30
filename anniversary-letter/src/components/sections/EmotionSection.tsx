import { motion } from 'framer-motion';
import { emotionFlow } from '../../data/memories';
import type { EmotionNote } from '../../data/memories';
import FloralFrame from '../ui/FloralFrame';
import FloralWreath from '../ui/FloralWreath';

const toneClasses: Record<EmotionNote['tone'], string> = {
  rose: 'border-border bg-surface text-rose',
  sage: 'border-borderSoft bg-surfaceSoft text-textSoft',
  sky: 'border-info/25 bg-infoBg text-info',
  honey: 'border-warning/30 bg-warningBg text-warning',
};

export default function EmotionSection() {
  return (
    <section className="pointer-events-none px-5 py-16 font-hand select-none [-webkit-touch-callout:none] [-webkit-user-select:none]">
      <div className="mx-auto max-w-[402px]">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <FloralWreath size="sm" className="mb-3" />
          <p className="mb-3 text-[1.15rem] font-normal text-rose">희 · 노 · 애 · 락</p>
          <h2 className="text-[2.75rem] font-normal leading-tight text-ink">
            우리가 지나온 마음들
          </h2>
          <p className="mx-auto mt-5 max-w-[340px] text-[1.35rem] leading-9 text-ink/70">
            좋은 순간만 있던 건 아니지만, 모든 감정이 결국 우리를 조금 더
            단단하게 만들어 줬어.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {emotionFlow.map((emotion, index) => (
            <motion.article
              key={emotion.key}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: 'easeOut',
              }}
            >
              <FloralFrame className="p-6">
                <span
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-md border text-3xl font-normal ${toneClasses[emotion.tone]}`}
                >
                  {emotion.key}
                </span>
                <h3 className="text-[1.55rem] font-normal leading-snug text-ink">
                  {emotion.title}
                </h3>
                <p className="mt-4 whitespace-pre-line text-[1.2rem] leading-8 text-ink/70">
                  {emotion.message}
                </p>
              </FloralFrame>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
