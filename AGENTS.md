# AGENTS.md

Read `AGENTS.md` and `PROJECT_VISION.md` before working on this project.

## Project Name

1st Anniversary Scroll Love Letter

## Project Goal

Build a romantic 1st anniversary website for my girlfriend.

The website should feel like a scroll-based love letter and a private wedding-invitation-style anniversary card. As the user scrolls, photos, short Korean letter messages, and small interactions reveal the story of our first year together.

Emotional impact is more important than technical complexity. The final website should feel warm, sincere, romantic, personal, fresh, clean, and memorable.

This project does not use a 3D avatar or Three.js.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Static frontend only
- Deployable to Vercel

## Current Design Direction

The current theme is a soft wedding invitation concept.

Use:

- Clean white background
- Warm ivory paper surfaces
- Pastel pink accents
- Deep rose highlight color
- Pastel green leaf accents
- Fresh floral mood inspired by leaves, pink blossoms, and spring greenery
- Soft shadows
- Elegant spacing
- Mobile-first composition for iPhone 17
- Handwritten Korean typography inside scroll sections

Avoid:

- Dark themes
- Neon colors
- Cyberpunk styling
- Excessive gradients
- Childish or flashy visuals
- Overly complicated effects
- Decorative Lucide icons in the background or sections
- Hand-drawn custom wreath shapes when an asset is available

## Typography

Use the local handwritten font file for the romantic letter mood:

```txt
anniversary-letter/public/fonts/handwriting/MyHandwriting.ttf
anniversary-letter/public/fonts/handwriting/MyHandwriting.woff2
```

The WOFF2 file should be served first for browser performance, with TTF kept as the source/fallback. The handwritten font should be the first choice for Tailwind `font-hand`.

All text inside major `<section>` areas should feel handwritten, especially:

- Opening screen
- Hero section
- Letter sections
- Memory cards
- Emotion section
- Gallery captions
- Final letter
- Small interactive cards and buttons inside sections

Use larger sizing and generous line-height because handwritten fonts need more breathing room on mobile.

## Floral Assets

Use existing SVG assets instead of drawing floral or wreath shapes manually:

```txt
anniversary-letter/public/images/decorations/floweralUp.svg
anniversary-letter/public/images/decorations/floweralDown.svg
```

These assets should be treated as the main floral decoration. Keep their color aligned with the pastel pink theme.

Recommended use:

- Frame the opening page content between `floweralUp` and `floweralDown`
- Use floral decorations subtly around letter or final sections
- Keep photos and text readable

## Project Structure Rules

Use this structure:

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

Do not put all code in `App.tsx`.

Keep components small and readable.

Memory content must be stored in:

```txt
src/data/memories.ts
```

Memory photos must be stored in:

```txt
public/images/memories/
```

## Required Sections And Components

Required page and layout:

- HomePage
- PageLayout

Required sections:

- OpeningDoorSection
- HeroSection
- OpeningLetterSection
- InteractiveMemorySection
- MemorySection
- EmotionSection
- PhotoGallerySection
- FinalLetterSection

Required UI components:

- PhotoCard
- ScrollHint
- TapToRevealCard
- MemoryQuiz
- HeartCollectMiniGame
- SecretLetterButton
- PolaroidFlipCard
- MusicToggleButton
- FloralFrame
- FloralWreath

## Opening Experience

Keep the opening door interaction.

The user taps:

```txt
우리의 1년 열어보기
```

After this explicit user interaction:

- The doors open
- The main content is revealed
- Background music may start playing
- The music toggle button appears

The door motion should feel like an invitation door or folded card opening, using subtle perspective and soft light rather than a flat slide-only transition.

Music must not start on page load without user interaction.

## Background Music

Use:

```txt
anniversary-letter/public/audio/background-music.mp3
```

Rules:

- Start music only after the opening button click
- Support play and pause
- Show a minimal icon-only music toggle button
- Do not use text inside the music toggle button
- Handle browser audio failure gracefully

## Scroll Experience

The site should not feel like a plain vertical scroll.

Create a poetic scroll journey:

- Each section should reveal like a page of memories
- Use soft fade-in, slide-up, photo reveal, and letter reveal animations
- Keep Framer Motion animations subtle
- Avoid fast movement, heavy bouncing, or distracting effects

## Interactive Elements

Use small romantic interactions between scroll sections:

- Tap to reveal hidden messages
- Flip Polaroid-style memory cards
- Simple couple memory quiz
- Flower or heart collecting mini interaction
- Secret letter reveal button
- Final promise button

Interactions should feel emotional and personal, not game-like or childish.

## Content Style

Korean letter writing should be:

- Natural
- Warm
- Sincere
- Short but emotional
- Suitable for a girlfriend
- Personal rather than generic

Avoid:

- Generic love quotes
- Overly dramatic writing
- Cringe expressions
- Long paragraphs

## Target Device

Primary target device:

- iPhone 17
- Mobile Safari

Rules:

- Mobile-first layout
- Safe-area support for notch and bottom home indicator
- Touch-first interactions
- No hover-only features
- Large readable text
- Comfortable button sizes
- Use `min-h-[100svh]` where needed
- Use `px-5` or similar comfortable mobile spacing
- Avoid fixed UI that blocks content
- Test around 393px width

## Reviewer Checklist

Before finishing implementation work, verify:

- `npm run lint` passes
- `npm run build` passes
- Components remain separated
- No unused imports
- No broken image, audio, SVG, or font paths
- Mobile layout remains usable
- Touch interactions work
- Music does not autoplay before user interaction
