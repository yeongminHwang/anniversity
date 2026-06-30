import JSConfetti from 'js-confetti';

let confettiInstance: JSConfetti | null = null;

const getConfetti = () => {
  if (!confettiInstance) {
    confettiInstance = new JSConfetti();
  }

  return confettiInstance;
};

export const fireOpeningConfetti = () => {
  const confetti = getConfetti();

  void confetti.addConfetti({
    confettiColors: [
      '#D98FA4',
      '#EDBEC9',
      '#F7DCE3',
      '#FFF5F7',
      '#F3C77B',
    ],
    confettiNumber: 180,
    confettiRadius: 4,
  });

  window.setTimeout(() => {
    void confetti.addConfetti({
      emojis: ['🌸', '🌷'],
      emojiSize: 26,
      confettiNumber: 28,
    });
  }, 120);
};

export const fireQuizConfetti = () => {
  const confetti = getConfetti();

  void confetti.addConfetti({
    confettiColors: [
      '#D98FA4',
      '#EDBEC9',
      '#F7DCE3',
      '#FFF5F7',
      '#A7BFA3',
      '#F3C77B',
    ],
    confettiNumber: 140,
    confettiRadius: 4,
  });
};
