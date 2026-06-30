import { useState } from 'react';
import { motion } from 'framer-motion';
import FloralFrame from './FloralFrame';

const pieces = ['처음', '웃음', '이해', '여행', '오늘'];

export default function HeartCollectMiniGame() {
  const [collected, setCollected] = useState<string[]>([]);
  const isComplete = collected.length === pieces.length;

  const togglePiece = (piece: string) => {
    setCollected((current) =>
      current.includes(piece)
        ? current.filter((item) => item !== piece)
        : [...current, piece],
    );
  };

  return (
    <motion.section
      className="px-5 py-16 font-hand"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      <FloralFrame className="mx-auto max-w-[402px] p-5">
        <p className="text-[1.1rem] font-normal text-rose">꽃잎 조각 모으기</p>
        <h2 className="mt-2 text-[2.2rem] font-normal leading-tight text-ink">
          우리의 1년을 채워줘
        </h2>
        <div className="mt-6 grid grid-cols-5 gap-2">
          {pieces.map((piece) => {
            const isCollected = collected.includes(piece);

            return (
              <button
                key={piece}
                type="button"
                aria-pressed={isCollected}
                onClick={() => togglePiece(piece)}
                className={`flex min-h-14 flex-col items-center justify-center rounded-md border text-[1rem] font-normal transition active:scale-95 ${
                  isCollected
                    ? 'border-border bg-surface text-rose'
                    : 'border-borderSoft bg-card/80 text-ink/55'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-4 w-4 rounded-full border ${
                    isCollected
                      ? 'border-petal bg-petal/70'
                      : 'border-borderSoft bg-surfaceSoft'
                  }`}
                />
                <span className="mt-1">{piece}</span>
              </button>
            );
          })}
        </div>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-surfaceSoft">
          <div
            className="h-full rounded-full bg-accent transition-all duration-300"
            style={{ width: `${(collected.length / pieces.length) * 100}%` }}
          />
        </div>
        <p className="mt-5 text-[1.2rem] leading-8 text-ink/70">
          {isComplete
            ? '다 모였어. 이렇게 많은 마음들이 모여서 우리의 첫 번째 1년이 됐어.'
            : '하나씩 눌러서 우리가 지나온 마음들을 채워줘.'}
        </p>
      </FloralFrame>
    </motion.section>
  );
}
