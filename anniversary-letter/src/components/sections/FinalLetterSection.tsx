import { motion } from 'framer-motion';
import { useState } from 'react';
import FloralFrame from '../ui/FloralFrame';
import FloralWreath from '../ui/FloralWreath';
import SecretLetterButton from '../ui/SecretLetterButton';

const paragraphs = [
  `안녕. 자기! 나 영민이야`,
  '벌써 우리가 만난 지 1년이 됐네. 자기와 함께한 시간 덕분에 더 자주 웃었고, 더 솔직해졌고, 사랑받는다는 마음을 배웠어.',
  `내가 서툴러서 자기를 서운하게 했던 일들도 많았었지?ㅠㅠ. 앞으로는 자기 마음에 더 공감하면서 다정하게 표현하는 사람이 되어볼게.`,
  `매번 먼거리 와주고, 운전해주고, 굶어죽을까 반찬 사주고... 항상 고마운 마음을 가지고 있어. 
  지금은 내가 부족한 점이 많고, 보여줄 수 있는 것도 많지 않지만, 열심히 해서 자기가 믿고 기댈 수 있는 사람이 될게.
  내가 데리러 가고, 밥 많이 사주고, 이쁘다 이쁘다 해줄거야.`,
  '앞으로도 특별한 날에만 잘하는 사람이 아니라, 평범한 날에도 잘하는 사람이 될게.',
  '힘들 때는 옆에 있고, 웃을 일 있으면 제일 같이 웃고, 그렇게 오래 갔으면 좋겠어.',
  '우리 첫 번째 기념일 축하하고, 옆에 있어줘서 진짜 고마워.',
  '사랑한다. ❤️',
];

export default function FinalLetterSection() {

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
        <h2 className="text-[2.75rem] font-normal leading-tight text-ink">
          To. 선미
        </h2>
        <div className="mt-8 space-y-6 text-[1.35rem] leading-10 text-ink/75">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10 border-t border-rose/20 pt-8 text-right">
          <p className="text-[1.7rem] text-ink">for 1st anniversary</p>
          <p className="mt-2 text-[1.1rem] font-normal text-rose">from. 영민</p>
        </div>
      </FloralFrame>
    </motion.section>
  );
}
