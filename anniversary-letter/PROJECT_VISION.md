# PROJECT_VISION.md

## Product Vision

This project is a private first-anniversary web experience for 선미.

It should feel like opening a romantic card, scrolling through a personal photo album, and reading a handwritten anniversary letter. The website is not a portfolio demo or a generic template. It is a personal gift, so sincerity, pacing, readability, and emotional memory matter more than technical spectacle.

## Emotional Goal

The experience should feel:

- Warm
- Sincere
- Romantic
- Personal
- Elegant
- Soft
- Memorable

The design should resemble a high-end anniversary letter, a wedding invitation, or a luxury photo album rather than a game or a landing page.

## Audience And Device

Primary audience: one person, on mobile.

Primary target:

- iPhone-sized viewport around 393px wide
- Mobile Safari
- Touch-first interaction

Desktop should remain usable, but mobile is the design priority.

## Current Experience

The current site flow is:

1. A closed romantic opening card/door
2. A user tap on `첫 장 넘기기`
3. Main content reveal and background music start attempt
4. Hero section with stacked photo preview
5. Opening letter
6. Episode-based memory sections
7. Polaroid flip cards and memory quizzes
8. 선미 백과사전 carousel
9. Daily photo/video film carousel
10. Final anniversary letter

## Content Model

### Memories

`src/data/memories.ts` contains the main anniversary episodes.

Each memory can include:

- `id`
- `date`
- `title`
- `emotion`
- main media
- front message
- flip message
- extra Polaroid cards
- quiz data

Memory sections should tell the story of the relationship through short, specific Korean writing.

### Daily Gallery

`src/data/dailyGallery.ts` contains the daily photo/video carousel.

Daily media is stored in:

```txt
public/images/daily/
```

The current naming convention is:

```txt
daily-01.jpg
daily-02.jpg
...
daily-21.jpg
daily-22.mp4
```

### Seonmi Encyclopedia

`SeonmiEncyclopediaSection` stores small preferences and traits in category cards. It should feel affectionate and observant, not like a long numbered list.

Do not include private addresses or sensitive public-facing details.

## Visual Language

Use the existing color system:

- Background: `#FFF5F7`
- Surface: `#F7DCE3`
- Primary pink: `#EDBEC9`
- Accent pink: `#D98FA4`
- Text: `#4B343B`

The UI should use:

- Pastel pink tones
- Ivory paper surfaces
- Soft borders
- Gentle shadows
- Floral SVG assets
- Handwritten Korean typography
- Rounded photo cards
- Subtle gradients only when they add warmth

Avoid:

- Pure black or stark white as dominant colors
- Neon or saturated UI colors
- Childish stickers or overly cute decoration
- Heavy motion or bouncing
- Complex game-like interactions

## Motion Direction

Motion should be calm and intentional.

Use:

- Fade-in
- Slide-up
- Soft card flip
- Gentle carousel loop
- Small celebratory confetti only for correct quiz answers

Avoid:

- Fast movement
- Flickering that makes reading difficult
- Scroll hijacking
- Heavy parallax
- Motion that blocks vertical page scrolling

## Interaction Principles

- The user should always be able to scroll vertically through the page.
- Horizontal carousels may drag left and right, but vertical gestures must remain page scroll.
- Music must never autoplay before the opening button interaction.
- Videos inside cards can autoplay only when muted and inline.
- Interactive elements should feel like small romantic touches, not arcade mechanics.

## Technical Principles

- Keep the app static and deployable.
- Use Vite-compatible public asset handling through `src/data/assets.ts`.
- Keep asset names URL-safe.
- Keep data in `src/data/` and components in `src/components/`.
- Prefer focused edits over broad refactors.
- Preserve current UI unless a redesign is explicitly requested.

## Success Criteria

The project is successful when:

- It loads reliably on the custom domain.
- Media assets do not break after deployment.
- The first screen feels like opening a special anniversary card.
- The scroll journey feels personal and paced.
- Memory cards, quizzes, and carousels work on mobile touch devices.
- The final letter feels sincere and emotionally complete.
