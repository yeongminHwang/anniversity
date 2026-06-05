# AGENTS.md

## Project Name

1st Anniversary Scroll Love Letter

## Project Goal

Build a romantic 1st anniversary website for my girlfriend.

The website should work like a scroll-based love letter.
As the user scrolls, photos and short letter messages appear one by one, telling the story of our first year together.

This project does not use a 3D avatar.

The emotional goal is more important than technical complexity.
The final website should feel warm, sincere, romantic, personal, and memorable.

---

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion

---

## Main Concept

A scroll-based interactive love letter.

Each section represents a memory, emotion, or moment from our relationship.

Each section includes:

- date
- title
- photo or photo collage
- short Korean letter-style message
- small decorative elements

The website should feel like reading a private anniversary letter while looking through memories.

---

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

---

## Agent Roles

### 1. PM Agent

Responsible for:

- Planning the page flow
- Breaking the website into sections
- Keeping the project focused on the anniversary love letter goal

Priority:

- Emotional storytelling
- Simple implementation
- Smooth user experience

---

### 2. Story Agent

Responsible for:

- Korean letter-style writing
- Warm and sincere romantic text
- Making each memory feel personal

Writing style:

- Natural Korean
- Sincere
- Warm
- Not too cheesy
- Short but emotional
- Suitable for a girlfriend

Avoid:

- Overly dramatic writing
- Generic love quotes
- Cringe expressions
- Too long paragraphs

---

### 3. Frontend Agent

Responsible for:

- React component structure
- Responsive layout
- Tailwind styling
- Scroll-based sections
- Framer Motion animations
- Mobile-first design

Rules:

- Use TypeScript
- Use reusable components
- Avoid unnecessary libraries
- Keep UI clean and romantic
- Make mobile experience excellent

---

### 4. Design Agent

Responsible for:

- Visual mood
- Typography
- Color palette
- Photo layout
- Letter-like presentation

Design direction:

- Warm ivory background
- Soft pink or rose accents
- Rounded photo cards
- Paper-like sections
- Subtle shadows
- Gentle animations
- Elegant spacing

Avoid:

- Dark cyberpunk style
- Neon colors
- Too many effects
- Overcomplicated UI

---

### 5. Reviewer Agent

Responsible for:

- Checking code quality
- Checking responsive layout
- Finding broken imports
- Checking asset paths
- Making sure the project builds successfully

Before finishing any task, verify:

- `npm run build` works
- Components are separated
- No unused imports
- No broken image paths
- Mobile layout is usable

---

## Required Sections

### 1. Hero Section

Purpose:
Introduce the anniversary website.

Content:

- Main title
- Short subtitle
- Date or anniversary phrase
- Scroll hint

Example:
“우리의 첫 번째 1년”
“너와 함께 걸어온 365일의 기록”

---

### 2. Opening Letter Section

Purpose:
Start the website like a personal letter.

Content:

- Short greeting
- Why this website was made
- Emotional introduction

---

### 3. Memory Sections

Purpose:
Show important memories one by one.

Each memory should include:

- date
- title
- image
- short letter message

Memory examples:

- 처음 만난 날
- 첫 데이트
- 같이 웃었던 날
- 다퉜지만 더 가까워진 날
- 여행 갔던 날
- 평범해서 더 좋았던 날

---

### 4. Emotion Flow Sections

Purpose:
Show that the relationship had many emotions.

Include:

- 희
- 노
- 애
- 락

Each emotion section should feel different but still belong to the same design system.

---

### 5. Photo Gallery Section

Purpose:
Show multiple photos together like a memory album.

Use:

- responsive grid
- soft hover effects
- rounded corners

---

### 6. Final Letter Section

Purpose:
End with a sincere full letter.

This should be the most emotional part of the website.

Include:

- gratitude
- apology if needed
- promise
- love
- anniversary message

---

## Data Rules

Use a data file like this:

```ts
export const memories = [
  {
    id: 'first-meeting',
    date: '2025.00.00',
    title: '처음 만난 날',
    emotion: '설렘',
    image: '/images/memories/first-meeting.jpg',
    message: '처음 너를 만났던 순간은 아직도 선명하게 기억나.',
  },
];
```

Do not hardcode memory data inside components.

---

## Animation Rules

Use Framer Motion for:

- fade in
- slide up
- photo reveal
- text reveal
- section transition

Keep animations subtle.

Avoid:

- fast movement
- excessive bouncing
- heavy animation
- distracting effects

---

## Responsive Rules

Mobile-first.

The website must look good on:

- iPhone size screens
- tablet
- desktop

On mobile:

- use single column layout
- large readable text
- photos should be full width
- avoid tiny buttons

---

## Performance Rules

- Lazy load images
- Use compressed photos
- Avoid large video files
- Avoid unnecessary dependencies
- Keep animations lightweight
- Make the site deployable to Vercel

---

## Build Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

---

## Important Reminder

This is not a portfolio demo first.

This is a personal gift.

Prioritize sincerity, readability, emotional pacing, and a beautiful final experience.
