import { useState } from 'react';
import { motion } from 'framer-motion';

type SecretLetterButtonProps = {
  label: string;
  message: string;
};

export default function SecretLetterButton({
  label,
  message,
}: SecretLetterButtonProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div>
      <button
        type="button"
        aria-expanded={isRevealed}
        onClick={() => setIsRevealed((current) => !current)}
        className="min-h-14 w-full rounded-full bg-accent px-6 py-4 text-[1.25rem] font-normal text-textInverse shadow-photo transition active:scale-[0.98]"
      >
        {isRevealed ? '편지 접어두기' : label}
      </button>
      {isRevealed && (
        <motion.p
          className="mt-5 whitespace-pre-line rounded-lg border border-borderSoft bg-[linear-gradient(135deg,#FFF9FA_0%,#FBE8ED_100%)] p-5 text-[1.3rem] leading-10 text-ink/75"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          {message}
        </motion.p>
      )}
    </div>
  );
}
