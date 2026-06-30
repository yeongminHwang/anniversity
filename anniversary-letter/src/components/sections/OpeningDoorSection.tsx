import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { decorationAsset } from '../../data/assets';

type OpeningDoorSectionProps = {
  onOpen: () => void;
  onStartOpen?: () => void;
};

export default function OpeningDoorSection({
  onOpen,
  onStartOpen,
}: OpeningDoorSectionProps) {
  const [isOpening, setIsOpening] = useState(false);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    return () => {
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleOpen = () => {
    if (isOpening) {
      return;
    }

    onStartOpen?.();
    setIsOpening(true);
    timeoutRef.current = window.setTimeout(onOpen, 1180);
  };

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-white px-5 pb-[calc(env(safe-area-inset-bottom)+2rem)] pt-[calc(env(safe-area-inset-top)+2rem)] font-hand [perspective:1400px]">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#fff9fb_0%,#ffffff_48%,#f7fbf6_100%)]"
        animate={{ opacity: isOpening ? 1 : 0.35, scale: isOpening ? 1.08 : 1 }}
        transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 z-10 w-1/2 border-r border-rose/20 bg-[linear-gradient(135deg,#ffffff_0%,#fff8fb_36%,#f9dce6_100%)] shadow-[inset_-18px_0_34px_rgba(201,79,114,0.08)] [backface-visibility:hidden]"
        style={{ transformOrigin: 'left center' }}
        animate={{
          x: isOpening ? '-16%' : '0%',
          rotateY: isOpening ? -82 : 0,
          opacity: isOpening ? 0.9 : 1,
        }}
        transition={{ duration: 1.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute right-0 top-0 h-full w-px bg-white/70" />
        <div className="absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border border-rose/25 bg-white/70 shadow-sm" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 z-10 w-1/2 border-l border-rose/20 bg-[linear-gradient(225deg,#ffffff_0%,#fff8fb_36%,#f4b7c9_100%)] shadow-[inset_18px_0_34px_rgba(201,79,114,0.08)] [backface-visibility:hidden]"
        style={{ transformOrigin: 'right center' }}
        animate={{
          x: isOpening ? '16%' : '0%',
          rotateY: isOpening ? 82 : 0,
          opacity: isOpening ? 0.9 : 1,
        }}
        transition={{ duration: 1.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute left-0 top-0 h-full w-px bg-white/70" />
        <div className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border border-rose/25 bg-white/70 shadow-sm" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-10 z-20 h-[calc(100%-5rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-rose/25 to-transparent"
        animate={{ opacity: isOpening ? 0 : 1, scaleY: isOpening ? 0.8 : 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      />

      <motion.div
        className="relative z-30 mx-auto flex w-full max-w-[402px] flex-col items-center text-center"
        initial={{ opacity: 0, y: 18 }}
        animate={{
          opacity: isOpening ? 0 : 1,
          y: isOpening ? -18 : 0,
          scale: isOpening ? 0.97 : 1,
        }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[45%] z-0 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute inset-7 rounded-[44%] bg-ivory/70 blur-[1px]" />
          <img
            src={decorationAsset('openingDoor.svg')}
            alt=""
            className="relative h-full w-full object-contain opacity-[0.58] drop-shadow-[0_18px_32px_rgba(201,79,114,0.12)]"
          />
        </div>

        <img
          src={decorationAsset('floweralUp.svg')}
          alt=""
          aria-hidden="true"
          className="relative z-10 mx-auto mb-4 h-auto w-[178px] max-w-[54vw] object-contain opacity-90"
        />

        <div className="relative z-10 mx-auto max-w-[340px]">
          <p className="mb-3 text-base font-normal tracking-wide text-rose">
            2025.07.01 - 2026.07.01
          </p>
          <h1 className="text-[2.75rem] font-normal leading-[1.08] text-ink">
            우리의 첫 번째 1년
          </h1>
          <p className="mx-auto mt-4 max-w-[320px] text-[1.35rem] leading-8 text-ink/70">
            하얀 종이 위에 너와 내가 지나온 계절을 조용히 담아봤어.
          </p>
          <button
            type="button"
            onClick={handleOpen}
            disabled={isOpening}
            className="mt-7 min-h-14 w-full rounded-full bg-rose px-6 py-4 text-[1.25rem] font-normal text-white shadow-photo transition active:scale-[0.98] disabled:opacity-75"
          >
            우리의 1년 열어보기
          </button>
        </div>

        <img
          src={decorationAsset('floweralDown.svg')}
          alt=""
          aria-hidden="true"
          className="relative z-10 mx-auto mt-5 h-auto w-[178px] max-w-[54vw] object-contain opacity-90"
        />
      </motion.div>
    </section>
  );
}
