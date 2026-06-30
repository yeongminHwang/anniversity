import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { publicAsset } from './data/assets';
import './styles/globals.css';

const fontStyle = document.createElement('style');
fontStyle.textContent = `
  @font-face {
    font-family: "AnniversaryHand";
    src:
      local("온글잎 윤우체"),
      local("Ownglyph YoonwooChae"),
      url("${publicAsset('fonts/handwriting/MyHandwriting.woff2')}") format("woff2"),
      url("${publicAsset('fonts/handwriting/MyHandwriting.ttf')}") format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;
document.head.appendChild(fontStyle);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
