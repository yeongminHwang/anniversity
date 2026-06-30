import { motion } from 'framer-motion';
import { memoryAsset, responsiveWebpSrcSet } from '../../data/assets';
import FloralWreath from '../ui/FloralWreath';
import ScrollHint from '../ui/ScrollHint';

const photoPreview = [
  memoryAsset('6-행궁동 데이트/6-행궁동 데이트-01-1600.webp'),
  memoryAsset('8-안동 데이트/8-안동 데이트-05-1600.webp'),
  memoryAsset('9-부산 데이트/9-부산 데이트-05-1600.webp'),
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center bg-white px-5 pb-12 pt-[calc(env(safe-area-inset-top)+4.5rem)] font-hand">
      <div className="mx-auto flex w-full max-w-[402px] flex-col justify-center gap-9">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <FloralWreath size="sm" className="mb-3" />
          <p className="mb-5 text-base font-normal tracking-wide text-rose">
            2025.06.05 - 2026.06.05
          </p>
          <h1 className="text-[3.25rem] font-normal leading-[1.04] text-ink">
            Our First Year
          </h1>
          <p className="mx-auto mt-3 text-[1.7rem] leading-8 text-rose">
            우리의 첫 번째 1년
          </p>
          <p className="mx-auto mt-5 max-w-[330px] text-[1.38rem] leading-9 text-ink/70">
            벚꽃처럼 조용히 피어난 기억들을 한 장씩 초대장처럼 펼쳐볼게.
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
              decoding="async"
              className="absolute h-56 w-44 rounded-lg border-[10px] border-white object-cover shadow-photo"
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
