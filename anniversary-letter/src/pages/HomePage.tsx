import { useRef, useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import FinalLetterSection from '../components/sections/FinalLetterSection';
import HeroSection from '../components/sections/HeroSection';
import InteractiveMemorySection from '../components/sections/InteractiveMemorySection';
import OpeningLetterSection from '../components/sections/OpeningLetterSection';
import OpeningDoorSection from '../components/sections/OpeningDoorSection';
import PhotoGallerySection from '../components/sections/PhotoGallerySection';
import SeonmiEncyclopediaSection from '../components/sections/SeonmiEncyclopediaSection';
import MusicToggleButton from '../components/ui/MusicToggleButton';
import { audioAsset } from '../data/assets';
import { memories } from '../data/memories';

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [hasMusicError, setHasMusicError] = useState(false);

  const playMusic = () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.volume = 0.55;
    setHasMusicError(false);

    audio
      .play()
      .then(() => setIsMusicPlaying(true))
      .catch(() => {
        setHasMusicError(true);
        setIsMusicPlaying(false);
      });
  };

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (isMusicPlaying) {
      audio.pause();
      setIsMusicPlaying(false);
      return;
    }

    playMusic();
  };

  return (
    <PageLayout>
      <audio
        ref={audioRef}
        src={audioAsset('background-music.mp3')}
        loop
        preload="none"
        onPlay={() => setIsMusicPlaying(true)}
        onPause={() => setIsMusicPlaying(false)}
        onError={() => {
          setHasMusicError(true);
          setIsMusicPlaying(false);
        }}
      />
      {!isOpen ? (
        <OpeningDoorSection
          onOpen={() => setIsOpen(true)}
          onStartOpen={playMusic}
        />
      ) : (
        <>
          <MusicToggleButton
            hasError={hasMusicError}
            isPlaying={isMusicPlaying}
            onToggle={toggleMusic}
          />
          <HeroSection />
          <OpeningLetterSection />
          {memories.map((memory, index) => (
            <InteractiveMemorySection
              key={memory.id}
              memory={memory}
              index={index}
            />
          ))}
          <SeonmiEncyclopediaSection />
          <PhotoGallerySection memories={memories} />
          <FinalLetterSection />
        </>
      )}
    </PageLayout>
  );
}
