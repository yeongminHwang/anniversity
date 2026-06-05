/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#fffdf8',
        paper: '#ffffff',
        ink: '#3a2b2b',
        rose: '#c94f72',
        blush: '#f9dce6',
        petal: '#f4b7c9',
        coral: '#e58f8f',
        sage: '#8fb79a',
        leaf: '#7fa88a',
        leafsoft: '#dfeede',
        skysoft: '#d6e6ea',
        honey: '#d6b76c',
      },
      fontFamily: {
        sans: [
          'Pretendard',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'system-ui',
          'sans-serif',
        ],
        serif: [
          'Nanum Myeongjo',
          'AppleMyungjo',
          'Georgia',
          'serif',
        ],
        hand: [
          'AnniversaryHand',
          'Nanum Pen Script',
          'Apple SD Gothic Neo',
          'Bradley Hand',
          'Comic Sans MS',
          'cursive',
        ],
      },
      boxShadow: {
        paper: '0 18px 48px rgba(126, 82, 94, 0.10)',
        photo: '0 18px 36px rgba(126, 82, 94, 0.14)',
      },
    },
  },
  plugins: [],
};
