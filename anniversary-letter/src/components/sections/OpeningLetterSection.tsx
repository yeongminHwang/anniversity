import { motion } from 'framer-motion';
import FloralFrame from '../ui/FloralFrame';
import FloralWreath from '../ui/FloralWreath';

export default function OpeningLetterSection() {
  return (
    <motion.section
      className="px-5 py-16 font-hand"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <FloralFrame className="mx-auto max-w-[402px] px-5 py-9">
        <FloralWreath size="sm" className="mb-2" />
        <p className="mb-6 text-[1.25rem] font-normal text-rose">Dear. 너에게</p>
        <div className="space-y-6 text-[1.45rem] leading-10 text-ink">
          <p>
            안녕, 내 사람. 우리의 첫 번째 기념일을 그냥 지나치고 싶지
            않아서, 너와 함께한 시간들을 천천히 꺼내 볼 수 있는 작은 편지를
            만들었어.
          </p>
          <p>
            화려한 말보다 우리가 함께 보낸 하루하루가 더 정확한 마음이라고
            생각해. 그래서 이 페이지에는 그 마음을 조용히 담아봤어.
          </p>
          <p>
            스크롤을 내릴 때마다 우리가 지나온 계절과 표정들이 너에게 다정하게
            닿았으면 좋겠어.
          </p>
        </div>
      </FloralFrame>
    </motion.section>
  );
}
