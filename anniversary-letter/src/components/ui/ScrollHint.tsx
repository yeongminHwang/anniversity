import { motion } from 'framer-motion';

export default function ScrollHint() {
  return (
    <motion.div
      className="pointer-events-none mx-auto flex w-fit select-none flex-col items-center gap-3 text-[1.15rem] text-ink/60"
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <span className="font-hand">천천히 내려보기</span>
      <span className="relative h-10 w-6 rounded-full border border-border bg-paper/75 shadow-sm">
        <motion.span
          className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent"
          animate={{ y: [0, 14, 0], opacity: [1, 0.35, 1] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </span>
    </motion.div>
  );
}
