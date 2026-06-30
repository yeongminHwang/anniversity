import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type MemoryQuizProps = {
  quiz: {
    question: string;
    options: string[];
    answer: string;
    successMessage: string;
  };
};

const confettiPieces = [
  { x: -96, y: -108, rotate: -60, color: '#D98FA4' },
  { x: -72, y: -138, rotate: 44, color: '#EDBEC9' },
  { x: -44, y: -96, rotate: 120, color: '#A7BFA3' },
  { x: -18, y: -144, rotate: -110, color: '#F3C77B' },
  { x: 12, y: -112, rotate: 70, color: '#D98FA4' },
  { x: 38, y: -150, rotate: 155, color: '#EDBEC9' },
  { x: 64, y: -102, rotate: -38, color: '#A7BFA3' },
  { x: 94, y: -132, rotate: 96, color: '#F3C77B' },
  { x: -88, y: -62, rotate: 145, color: '#EDBEC9' },
  { x: -52, y: -72, rotate: -25, color: '#D98FA4' },
  { x: 48, y: -66, rotate: 28, color: '#F3C77B' },
  { x: 82, y: -76, rotate: -135, color: '#A7BFA3' },
];

export default function MemoryQuiz({ quiz }: MemoryQuizProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [celebrationKey, setCelebrationKey] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const isCorrect = selected === quiz.answer;
  const handleSelect = (option: string) => {
    setSelected(option);

    if (option === quiz.answer) {
      setShowCelebration(true);
      setCelebrationKey((current) => current + 1);
    }
  };

  return (
    <div className="pointer-events-auto relative overflow-hidden rounded-lg border border-borderSoft bg-paper/95 p-5 font-hand shadow-paper">
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            key={celebrationKey}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 1, 0] }}
            transition={{ duration: 1.22, times: [0, 0.82, 1] }}
            onAnimationComplete={() => setShowCelebration(false)}
          >
            {confettiPieces.map((piece, index) => (
              <motion.span
                key={`${celebrationKey}-${index}`}
                className="absolute left-1/2 top-[45%] h-2.5 w-1.5 rounded-full"
                style={{ backgroundColor: piece.color }}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0.4, rotate: 0 }}
                animate={{
                  x: piece.x,
                  y: piece.y,
                  opacity: [0, 1, 1, 0],
                  scale: [0.4, 1, 0.9],
                  rotate: piece.rotate,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.018,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}
            <motion.span
              className="absolute left-1/2 top-[45%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40"
              initial={{ opacity: 0.55, scale: 0.2 }}
              animate={{ opacity: 0, scale: 1.8 }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-[1.1rem] font-normal text-rose">작은 기억 퀴즈</p>
      <h3 className="mt-2 text-[1.5rem] font-normal leading-snug text-ink">
        {quiz.question}
      </h3>
      <div className="mt-5 grid gap-3">
        {quiz.options.map((option) => {
          const isSelected = selected === option;
          const isAnswer = option === quiz.answer;
          const isWrongSelection = isSelected && selected !== quiz.answer;

          return (
            <motion.button
              key={option}
              type="button"
              onClick={() => handleSelect(option)}
              className={`pointer-events-auto min-h-12 rounded-full border px-4 text-left text-[1.15rem] font-normal transition active:scale-[0.98] ${isSelected && isAnswer
                ? 'border-accent bg-accent text-textInverse shadow-soft'
                : isWrongSelection
                  ? 'border-[#C77A8C] bg-[#FFF0F3] text-[#A85D70]'
                  : 'border-borderSoft bg-card/80 text-ink/70'
                }`}
              animate={
                isWrongSelection
                  ? { x: [0, -6, 6, -4, 4, 0] }
                  : isSelected && isAnswer
                    ? { scale: [1, 1.035, 1] }
                    : { x: 0, scale: 1 }
              }
              transition={{ duration: 0.38, ease: 'easeOut' }}
            >
              {option}
            </motion.button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        {selected && (
          <motion.p
            key={isCorrect ? 'correct' : 'wrong'}
            className={`mt-5 rounded-md px-4 py-3 text-[1.15rem] leading-8 ${isCorrect
              ? 'bg-[linear-gradient(135deg,#FFF9FA_0%,#F7DCE3_100%)] text-rose'
              : 'bg-[linear-gradient(135deg,#FFF9FA_0%,#FFF0F3_100%)] text-ink/70'
              }`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            {isCorrect ? quiz.successMessage : '다시 기억해볼까?ㅠㅠㅠ'}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
