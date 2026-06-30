# AGENTS.md

Read `AGENTS.md` and `PROJECT_VISION.md` before working on this project.

## Project

**1st Anniversary Scroll Love Letter** is a React + Vite anniversary website for a private first-anniversary gift.

The site is a mobile-first, scroll-based romantic letter. The emotional goal is more important than technical complexity: it should feel warm, sincere, elegant, personal, and memorable.

This project does not use a 3D avatar or Three.js.

## Current Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- js-confetti
- Static frontend only
- GitHub Pages deployment with a custom domain

## Deployment Notes

- Custom domain: `seonmi.o-r.kr`
- `public/CNAME` must stay in place.
- `vite.config.ts` uses `base: '/'`, which is correct for the custom-domain GitHub Pages deployment.
- Static assets should be referenced through helpers in `src/data/assets.ts`, not by fragile hardcoded absolute strings.
- Keep Korean, spaces, and special characters out of new asset file and directory names. Prefer English kebab-case or numbered names.

## Source Of Truth

- Memory story data: `src/data/memories.ts`
- Daily gallery data: `src/data/dailyGallery.ts`
- Asset URL helpers: `src/data/assets.ts`
- Memory media: `public/images/memories/`
- Daily gallery media: `public/images/daily/`
- Decoration SVGs: `public/images/decorations/`
- Background music: `public/audio/background-music.mp3`
- Handwritten font: `public/fonts/handwriting/MyHandwriting.woff2` with TTF fallback

Do not hardcode memory or gallery content inside section components unless the component is intentionally self-contained, such as `SeonmiEncyclopediaSection`.

## Active Page Flow

The rendered page flow lives in `src/pages/HomePage.tsx`.

1. `OpeningDoorSection`
2. `MusicToggleButton`
3. `HeroSection`
4. `OpeningLetterSection`
5. `InteractiveMemorySection` for every item in `memories`
6. `SeonmiEncyclopediaSection`
7. `PhotoGallerySection` using `dailyGalleryItems`
8. `FinalLetterSection`

`EmotionSection`, `MemorySection`, and `HeartCollectMiniGame` still exist as legacy or supporting components but are not part of the current rendered flow. Do not reintroduce them unless explicitly requested.

## Design Direction

The current theme is a premium romantic wedding-invitation/photo-album mood.

Use:

- Warm pastel pinks and ivory paper surfaces
- Soft floral decoration using existing SVG assets
- Deep rose accents
- Soft shadows and subtle gradients
- Handwritten Korean typography in major sections
- Mobile-first spacing for roughly 393px wide iPhone screens
- Gentle fade, slide, flip, and carousel motion

Avoid:

- Dark themes
- Neon colors
- Cyberpunk styling
- Childish or flashy effects
- Heavy bouncing animations
- Decorative background icon clutter
- New hand-drawn floral SVGs when an existing asset fits

## Color System

The core palette is already reflected in Tailwind and CSS variables.

- Background: `#FFF5F7`
- Surface: `#F7DCE3`
- Primary pink: `#EDBEC9`
- Accent pink: `#D98FA4`
- Primary text: `#4B343B`

Use Tailwind tokens from `tailwind.config.js`, such as `bg`, `bgSoft`, `paper`, `card`, `ink`, `rose`, `accent`, `border`, and `borderSoft`.

## Typography

- Use `font-hand` for the romantic handwritten mood across major sections.
- The local font is declared in `src/styles/globals.css`.
- Keep line-height generous because the handwriting font needs breathing room.
- Avoid tiny text in buttons, cards, and captions on mobile.

## Interaction Rules

### Opening Door

- Music must start only after the user taps the opening button.
- The opening button currently says `첫 장 넘기기`.
- Do not autoplay background music on page load.
- Keep the door motion subtle and invitation-like.

### Music

- Use `public/audio/background-music.mp3`.
- Keep `MusicToggleButton` icon-only and minimal.
- Handle browser audio play failure gracefully.

### Memory Cards

- `InteractiveMemorySection` uses Polaroid flip cards plus a quiz slide.
- Polaroid cards must remain tappable/flippable.
- Vertical swipes inside memory sections should scroll the full page smoothly.
- Do not let inner horizontal/drag UI trap vertical page scrolling.
- `flipMessage` and card text should support line breaks with `whitespace-pre-line`.

### Quiz

- Quiz options must be clickable.
- Correct answers show a positive state and confetti.
- Wrong answers should shake only the wrong selected option; do not highlight the correct answer after a wrong click.

### Carousels

- `SeonmiEncyclopediaSection` and `PhotoGallerySection` use film-like continuous looping carousels.
- Carousels must support horizontal dragging.
- During dragging, automatic loop motion should pause and resume after release.
- Use `touch-action: pan-y` so vertical gestures continue to scroll the page.

## Asset Rules

- Use `memoryAsset`, `dailyAsset`, `decorationAsset`, and `audioAsset`.
- Keep `public/images/daily/` filenames as `daily-01.jpg` through `daily-21.jpg` and `daily-22.mp4`.
- Keep memory folders URL-safe, for example `04-changwon-date`.
- Prefer WebP variants for large memory hero images when available (`-800.webp`, `-1600.webp`).
- `responsiveWebpSrcSet` only applies to `-1600.webp` images.
- Lazy-load non-critical images and videos.
- Videos in cards should be muted, inline, looped, and allowed to autoplay after lazy loading.

## Project Structure

```txt
src/
├─ components/
│  ├─ layout/
│  ├─ sections/
│  └─ ui/
├─ data/
├─ pages/
├─ styles/
├─ App.tsx
└─ main.tsx
```

Keep components small and readable. Do not move all logic into `App.tsx`.

## Editing Guidance

- Preserve the current UI, layout rhythm, and emotional tone unless explicitly asked to redesign.
- Prefer existing component patterns over new abstractions.
- Keep changes scoped to the requested section or data file.
- Do not revert unrelated user changes in the working tree.
- Use `apply_patch` for manual edits.

## Verification

Before finishing implementation work, run:

```bash
npm run lint
npm run build
```

Also check:

- No unused imports
- No broken image, video, SVG, audio, or font paths
- Mobile layout remains usable
- Touch interactions still work
- Music does not start before explicit user interaction
