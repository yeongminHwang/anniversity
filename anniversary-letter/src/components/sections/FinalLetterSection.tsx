import { motion } from 'framer-motion';
import { useState } from 'react';
import FloralFrame from '../ui/FloralFrame';
import FloralWreath from '../ui/FloralWreath';
import SecretLetterButton from '../ui/SecretLetterButton';

const paragraphs = [
  '지난 1년 동안 내 곁에 있어줘서 고마워. 너와 함께한 시간 덕분에 나는 더 자주 웃었고, 더 솔직해졌고, 사랑받는다는 마음을 배웠어.',
  '가끔은 내가 서툴러서 너를 서운하게 했던 순간도 있었을 거야. 그때마다 미안했고, 앞으로는 네 마음을 더 천천히 듣고 더 다정하게 표현하는 사람이 되고 싶어.',
  '우리의 다음 계절에도 거창한 약속보다 매일의 작은 약속을 지킬게. 힘든 날엔 곁에 있고, 좋은 날엔 제일 먼저 함께 웃고, 평범한 날에도 너를 소중히 대할게.',
  '첫 번째 기념일을 진심으로 축하해. 내 하루에 와줘서, 내 마음에 오래 머물러줘서 고마워. 사랑해.',
];

export default function FinalLetterSection() {
  const [isPromised, setIsPromised] = useState(false);

  return (
    <motion.section
      className="px-5 pb-[calc(env(safe-area-inset-bottom)+6rem)] pt-16 font-hand"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <FloralFrame className="mx-auto max-w-[402px] px-5 py-10">
        <FloralWreath size="sm" className="mb-4" />
        <p className="mb-4 text-[1.15rem] font-normal text-rose">마지막 편지</p>
        <h2 className="text-[2.75rem] font-normal leading-tight text-ink">
          앞으로도, 천천히 함께
        </h2>
        <div className="mt-8 space-y-6 text-[1.35rem] leading-10 text-ink/75">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-9">
          <SecretLetterButton
            label="비밀 편지 열어보기"
            message="너에게 이 페이지를 보여주는 순간까지도 조금 떨렸어. 그래도 꼭 말하고 싶었어. 내 첫 번째 1년을 이렇게 따뜻하게 만들어줘서 고마워."
          />
        </div>
        <button
          type="button"
          aria-pressed={isPromised}
          onClick={() => setIsPromised(true)}
          className="mt-5 min-h-14 w-full rounded-full border border-border bg-card/80 px-6 py-4 text-[1.25rem] font-normal text-rose shadow-sm transition active:scale-[0.98]"
        >
          앞으로도 함께하기
        </button>
        {isPromised && (
          <motion.p
            className="mt-4 rounded-lg border border-borderSoft bg-[linear-gradient(135deg,#FFF9FA_0%,#FBE8ED_100%)] p-4 text-[1.2rem] leading-8 text-ink/70"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            좋아. 다음 365일도, 그다음 계절도 너와 같은 방향으로 걸어갈게.
          </motion.p>
        )}
        <div className="mt-10 border-t border-rose/20 pt-8 text-right">
          <p className="text-[1.7rem] text-ink">우리의 1주년에</p>
          <p className="mt-2 text-[1.1rem] font-normal text-rose">from. 나</p>
        </div>
      </FloralFrame>
    </motion.section>
  );
}
