import { motion } from 'framer-motion';
import { memoryAsset, responsiveWebpSrcSet } from '../../data/assets';
import FloralWreath from '../ui/FloralWreath';
import ScrollHint from '../ui/ScrollHint';

const photoPreview = [
  memoryAsset('04-changwon-date/04-changwon-date-09.jpg'),
  memoryAsset('04-changwon-date/04-changwon-date-08-1600.webp'),
  memoryAsset('03-discharge/03-discharge-01-1600.webp'),
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center bg-bg px-5 pb-12 pt-[calc(env(safe-area-inset-top)+4.5rem)] font-hand">
      <div className="pointer-events-none mx-auto flex w-full max-w-[402px] select-none flex-col justify-center gap-9 [-webkit-touch-callout:none] [-webkit-user-select:none]">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <FloralWreath size="sm" className="mb-3" />
          <p className="mb-5 text-base font-normal tracking-wide text-rose">
            2025.07.01 - 2026.07.01
          </p>
          <h1 className="text-[3.25rem] font-normal leading-[1.04] text-ink">
            Our First Year
          </h1>
          <p className="mx-auto mt-3 text-[1.7rem] leading-8 text-rose">
            영민 ❤️ 선미
          </p>
          <p className="mx-auto mt-5 max-w-[330px] text-[1.38rem] leading-9 text-ink/70">
            지난 1년동안의 행복한 추억 살펴보기
          </p>
          <div className="mt-9">
            <ScrollHint />
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto h-[330px] w-full max-w-[350px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          aria-label="추억 사진 미리보기"
        >
          {photoPreview.map((image, index) => (
            <img
              key={image}
              src={image}
              srcSet={responsiveWebpSrcSet(image)}
              sizes="176px"
              alt=""
              draggable={false}
              decoding="async"
              className="absolute h-56 w-44 select-none rounded-lg border-[10px] border-card object-cover shadow-photo [-webkit-user-drag:none]"
              style={{
                left: `${index * 22}%`,
                top: `${index * 13}%`,
                rotate: `${index === 0 ? -9 : index === 1 ? 4 : 11}deg`,
                zIndex: index + 1,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
