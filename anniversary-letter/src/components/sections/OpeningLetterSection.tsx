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
        <p className="mb-6 text-[1.25rem] font-normal text-rose">Dear. 선미</p>
        <div className="space-y-6 text-[1.45rem] leading-10 text-ink">
          <p>
            안녕, 자기<br></br> 우리의 첫 번째 기념일을 그냥 지나치고 싶지
            않아서, <br></br>내가 좋아하는 걸로 자기를 웃게 만들어보고 싶어서 만들어봤어.
          </p>
          <p>
            내가 말도 화려하게 잘 하지 못하고, 항상 잼민이처럼 장난치고 그러지만, 자기를 엄청 좋아한단다?
          </p>
          <p>
            이거 만든다고 자기랑 통화하면서 계속 작업했는데, <br></br> 지금 이 자리를 빌어서 신경 못 써줘서 미안해.
            <br></br>그래도 이런 건 비밀로 만들어야하지 않겠어?ㅋㅋㅋ
          </p>
        </div>
      </FloralFrame>
    </motion.section>
  );
}
