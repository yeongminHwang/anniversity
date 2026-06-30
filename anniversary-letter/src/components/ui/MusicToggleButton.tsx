type MusicToggleButtonProps = {
  hasError: boolean;
  isPlaying: boolean;
  onToggle: () => void;
};

export default function MusicToggleButton({
  hasError,
  isPlaying,
  onToggle,
}: MusicToggleButtonProps) {
  const label = hasError
    ? '음악 파일을 재생할 수 없음'
    : isPlaying
      ? '음악 끄기'
      : '음악 켜기';

  return (
    <div className="fixed right-4 top-[calc(env(safe-area-inset-top)+0.75rem)] z-30">
      <button
        type="button"
        aria-label={label}
        aria-pressed={isPlaying}
        title={label}
        onClick={onToggle}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/90 text-accent shadow-paper backdrop-blur transition active:scale-[0.96]"
      >
        {hasError ? (
          <span
            aria-hidden="true"
            className="relative h-5 w-5 rounded-full border-2 border-current before:absolute before:left-1/2 before:top-1/2 before:h-0.5 before:w-3 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:rounded-full before:bg-current after:absolute after:left-1/2 after:top-1/2 after:h-0.5 after:w-3 after:-translate-x-1/2 after:-translate-y-1/2 after:-rotate-45 after:rounded-full after:bg-current"
          />
        ) : isPlaying ? (
          <span
            aria-hidden="true"
            className="flex h-5 w-5 items-center justify-center gap-1"
          >
            <span className="h-4 w-1.5 rounded-full bg-current" />
            <span className="h-4 w-1.5 rounded-full bg-current" />
          </span>
        ) : (
          <span
            aria-hidden="true"
            className="ml-0.5 h-0 w-0 border-y-[8px] border-l-[13px] border-y-transparent border-l-current"
          />
        )}
      </button>
    </div>
  );
}
