import { useState } from 'react';
import { motion } from 'framer-motion';

type TapToRevealCardProps = {
  title: string;
  preview: string;
  message: string;
};

export default function TapToRevealCard({
  title,
  preview,
  message,
}: TapToRevealCardProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <motion.button
      type="button"
      aria-expanded={isRevealed}
      onClick={() => setIsRevealed((current) => !current)}
      className="w-full rounded-lg border border-borderSoft bg-paper/95 p-5 text-left font-hand shadow-paper active:scale-[0.99]"
      whileTap={{ scale: 0.99 }}
    >
      <span className="block text-[1.1rem] font-normal text-rose">{title}</span>
      <span className="mt-3 block text-[1.25rem] leading-9 text-ink/70">
        {isRevealed ? message : preview}
      </span>
      <span className="mt-4 inline-flex min-h-11 items-center rounded-full bg-blush px-4 text-[1.05rem] font-normal text-rose">
        {isRevealed ? '다시 덮어두기' : '마음 열어보기'}
      </span>
    </motion.button>
  );
}
