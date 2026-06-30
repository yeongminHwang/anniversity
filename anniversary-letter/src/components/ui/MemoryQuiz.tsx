import { useState } from 'react';

type MemoryQuizProps = {
  quiz: {
    question: string;
    options: string[];
    answer: string;
    successMessage: string;
  };
};

export default function MemoryQuiz({ quiz }: MemoryQuizProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const isCorrect = selected === quiz.answer;

  return (
    <div className="rounded-lg border border-borderSoft bg-paper/95 p-5 font-hand shadow-paper">
      <p className="text-[1.1rem] font-normal text-rose">작은 기억 퀴즈</p>
      <h3 className="mt-2 text-[1.5rem] font-normal leading-snug text-ink">
        {quiz.question}
      </h3>
      <div className="mt-5 grid gap-3">
        {quiz.options.map((option) => {
          const isSelected = selected === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => setSelected(option)}
              className={`min-h-12 rounded-full border px-4 text-left text-[1.15rem] font-normal transition active:scale-[0.98] ${isSelected
                ? 'border-border bg-surface text-rose'
                : 'border-borderSoft bg-card/80 text-ink/70'
                }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {selected && (
        <p className="mt-5 rounded-md bg-[linear-gradient(135deg,#FFF9FA_0%,#FBE8ED_100%)] px-4 py-3 text-[1.15rem] leading-8 text-ink/70">
          {isCorrect
            ? quiz.successMessage
            : '다시 기억해볼까?ㅠㅠㅠ'}
        </p>
      )}
    </div>
  );
}
