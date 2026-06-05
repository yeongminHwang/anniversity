# PROJECT_VISION.md

# Our First Year

## Why This Project Exists

This website is not a portfolio project.

This website is a gift.

A gift created to celebrate the first year we have spent together.

The purpose is not to impress with technology. The purpose is to make her smile, remember our memories, feel loved, and experience our story again through a beautiful digital love letter.

Every design decision, animation, interaction, and piece of content should support this goal.

If there is a conflict between technical complexity and emotional impact, always choose emotional impact.

---

# Core Experience

The website should feel like:

- Opening a private love letter
- Receiving a soft wedding invitation
- Walking through our memories together
- Looking through a treasured photo album
- Reliving the emotions of our first year
- Receiving a sincere anniversary gift

The experience should be personal, warm, intimate, fresh, and emotional.

Never make it feel like a portfolio website, startup landing page, or technology demo.

---

# Current Visual Concept

The current theme is a romantic wedding-invitation-style anniversary letter.

The visual direction is:

- White background
- Warm ivory paper surfaces
- Pastel pink floral accents
- Deep rose highlights
- Pastel green leaves
- Fresh spring mood
- Soft cherry-blossom feeling
- Clean spacing
- Gentle shadows
- Handwritten Korean typography

The page should feel like a letter printed on clean white paper and decorated with soft pink flowers and fresh green leaves.

Use the existing floral assets:

```txt
anniversary-letter/public/images/decorations/floweralUp.svg
anniversary-letter/public/images/decorations/floweralDown.svg
```

These decorations should replace wreath icons or manually drawn floral shapes.

Avoid decorative Lucide icons in the background or inside the section design. The floral assets and photos should carry the mood.

---

# Typography

The handwritten font is part of the emotional identity of the page.

Use the local font file:

```txt
anniversary-letter/public/fonts/handwriting/MyHandwriting.ttf
anniversary-letter/public/fonts/handwriting/MyHandwriting.woff2
```

Serve WOFF2 first for faster mobile loading and keep TTF as the source/fallback.

All major section text should feel handwritten:

- Opening invitation text
- Hero copy
- Letter paragraphs
- Memory card titles and messages
- Photo captions
- Emotion section text
- Interactive card text
- Final letter text

Because handwritten fonts can be lighter and looser, use generous line height, slightly larger text sizes, and calm spacing.

---

# Emotional Journey

The scroll experience should tell a story.

The emotional flow should be:

First Meeting
↓

Getting Closer
↓

Falling In Love
↓

Happy Memories
↓

Challenges and Difficult Moments
↓

Growing Together
↓

Gratitude
↓

Love
↓

The Future We Want Together

The website should acknowledge both joyful and difficult moments.

The goal is to show that our relationship became stronger through everything we experienced together.

---

# Design Philosophy

The design should feel:

- Romantic
- Lyrical
- Calm
- Comfortable
- Sincere
- Premium
- Fresh
- Personal

Avoid:

- Neon colors
- Cyberpunk aesthetics
- Excessive effects
- Loud animations
- Childish visuals
- Overly playful design
- Dark, heavy palettes
- Generic landing-page layouts

The feeling should be closer to a handwritten wedding invitation and anniversary letter than a social media page.

---

# Mobile First

The primary device is my girlfriend's iPhone 17.

The website should be designed for her phone first.

Everything should feel natural on mobile:

- Comfortable reading
- Large typography
- Easy touch interactions
- Smooth scrolling
- Fast loading
- Safe-area support for the notch and home indicator

Desktop support is secondary.

The emotional experience on mobile is the highest priority.

---

# Opening Scene

The website begins with a symbolic door.

The door represents entering our memories together.

The user taps:

```txt
우리의 1년 열어보기
```

The doors slowly open, and the main story appears.

The opening motion should feel like an invitation door or folded card opening with gentle perspective, a soft center seam, and warm light behind it.

The opening page should use the floral SVG decorations above and below the central invitation text.

This moment should feel magical, elegant, and memorable.

Not flashy.

Not dramatic.

Just warm and meaningful.

---

# Music

Background music should support the experience.

Music must not autoplay on page load.

After the user taps the opening button, the site may start the local background music:

```txt
anniversary-letter/public/audio/background-music.mp3
```

The music toggle should:

- Appear after the opening interaction
- Use icons instead of text
- Support play and pause
- Stay minimal and romantic

Music should feel:

- Warm
- Emotional
- Nostalgic
- Gentle

The music should enhance memories, not distract from them.

---

# Interactions

This should not feel like endless scrolling.

The user should occasionally participate.

Examples:

- Reveal hidden messages
- Open memory cards
- Flip photos
- Discover secret notes
- Answer small memory questions
- Collect small emotional pieces
- Tap the final promise button

Interactions should create emotional connection.

They should never feel like a game.

---

# Photography

Photos are the heart of the experience.

Photos should always be treated with respect.

Photos should:

- Be large
- Be easy to see
- Have breathing room
- Feel like treasured memories

Photos are more important than decorative graphics.

Whenever a design choice must be made, prioritize the visibility and emotional impact of the photos.

---

# Writing Style

All text should feel like it was written personally.

Writing should be:

- Warm
- Natural
- Honest
- Emotional
- Simple

Avoid:

- Generic quotes
- Overly dramatic expressions
- Internet-style cringe romance
- Artificial sounding poetry

The best writing should sound like something I would genuinely say to her.

---

# Final Letter

The final section is the emotional climax.

The user should finish the website feeling:

- Appreciated
- Loved
- Understood
- Grateful

The ending should look and feel like the final page of a handwritten anniversary letter.

The last emotion should be:

```txt
Thank you for being with me this year.
```

Followed by:

```txt
I hope we can continue making memories together.
```

---

# Success Criteria

This project succeeds if:

- She smiles while reading it.
- She spends time exploring it.
- She feels our memories were thoughtfully preserved.
- She feels loved.
- She remembers the experience after closing the website.

Not because it was technically impressive.

Because it felt genuine.
