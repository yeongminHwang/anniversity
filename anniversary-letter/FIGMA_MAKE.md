# Figma Make File: 1st Anniversary Scroll Love Letter

아래 내용을 Figma Make의 프롬프트/컨텍스트로 붙여넣어 현재 프로젝트를 최대한 동일한 모바일 웹 프로토타입으로 재현한다.

## Build Goal

Create a romantic first-anniversary mobile website for a girlfriend. It should feel like a private wedding-invitation-style love letter, not like a portfolio or landing page.

The experience begins with an opening folded-card door. After the user taps `우리의 1년 열어보기`, the doors open, background music may start, and the scroll-based love letter is revealed.

Primary device: iPhone-style mobile viewport around `393px` wide. Use safe-area spacing for notch and bottom home indicator.

## Product Mood

- Warm, sincere, romantic, personal, fresh, clean, memorable.
- White page background with warm ivory paper surfaces.
- Pastel pink blossoms, deep rose highlights, pastel green leaves.
- Soft wedding invitation mood.
- Handwritten Korean typography for all major section text.
- Gentle scroll journey with page-like reveals.

Avoid:

- Dark theme, neon, cyberpunk, flashy animation.
- Generic startup landing page layout.
- Excessive gradients.
- Childish game-like visuals.
- Decorative icon backgrounds.
- Hand-drawn floral/wreath shapes when the provided floral SVG assets can be used.

## Assets

Use these existing project assets. If importing into Figma Make manually, upload the files and keep the same semantic names.

```txt
public/fonts/handwriting/MyHandwriting.woff2
public/fonts/handwriting/MyHandwriting.ttf
public/images/decorations/floweralUp.svg
public/images/decorations/floweralDown.svg
public/images/memories/1-제주도/1-제주도-01.jpg
public/images/memories/1-제주도/1-제주도-01.mp4
public/images/memories/2-썸/2-썸-02.jpg
public/images/memories/3-전역/3-전역-01.jpg
public/images/memories/4-창원 데이트/4-창원 데이트-08.jpg
public/images/memories/5-마산 데이트/5-마산 데이트-01.jpg
public/images/memories/6-행궁동 데이트/6-행궁동 데이트-04.jpg
public/images/memories/7-보정동 데이트/7-보정동 데이트-03.jpg
public/images/memories/8-안동 데이트/8-안동 데이트-05.jpg
public/images/memories/9-부산 데이트/9-부산 데이트-05.jpg
public/audio/background-music.mp3
```

Font rule:

```css
font-family: AnniversaryHand, "Apple SD Gothic Neo", "Noto Sans KR", cursive;
```

Serve `MyHandwriting.woff2` first and keep `MyHandwriting.ttf` as fallback/source.

## Design Tokens

```txt
white: #ffffff
ivory: #fffdf8
paper: #ffffff
ink: #3a2b2b
rose: #c94f72
blush: #f9dce6
petal: #f4b7c9
coral: #e58f8f
sage: #8fb79a
leaf: #7fa88a
leafsoft: #dfeede
skysoft: #d6e6ea
honey: #d6b76c
```

Shadow tokens:

```txt
paper shadow: 0 18px 48px rgba(126, 82, 94, 0.10)
photo shadow: 0 18px 36px rgba(126, 82, 94, 0.14)
```

Shape and spacing:

- Main content max width: `430px`; inner section content around `402px`.
- Cards: `8px` radius, soft border `rose / 15%`.
- Buttons: pill shape where primary action, minimum height `56px`.
- Use `px-5` mobile spacing.
- Use `min-height: 100svh` for full-screen sections.

## Global Layout

Create a single static React-style mobile web app:

- Outer page background: white.
- Fixed background wash: vertical gradient `#ffffff 0%`, `#fff8fb 46%`, `#f6fbf5 100%`.
- Main width: full width, max `430px`, centered.
- All major sections use the handwritten font.
- Scroll should feel like a sequence of letter pages with subtle fade-up reveals.

Main order:

1. `OpeningDoorSection`
2. `HeroSection`
3. `OpeningLetterSection`
4. Six repeated `InteractiveMemorySection` entries
5. `EmotionSection`
6. `HeartCollectMiniGame`
7. `PhotoGallerySection`
8. `FinalLetterSection`

## Opening Door Section

Initial state only shows this full-screen invitation.

Layout:

- `min-height: 100svh`
- white background
- centered content max `402px`
- top floral asset `floweralUp.svg`, width about `210px`
- bottom floral asset `floweralDown.svg`, width about `210px`
- date line: `2025.06.05 - 2026.06.05`
- title: `우리의 첫 번째 1년에 초대해`
- body: `하얀 종이 위에 너와 내가 지나온 계절을 조용히 담아봤어.`
- button: `우리의 1년 열어보기`

Door behavior:

- Two half-screen panels cover the page.
- Left panel opens with perspective rotation around left center, moving slightly left.
- Right panel opens with perspective rotation around right center, moving slightly right.
- Use a soft center seam and warm radial light behind.
- Animation duration about `1.08s`.
- After the opening button click, reveal the main content.
- Music must only attempt to start after this click, never on page load.

## Music Toggle

After opening, show a fixed icon-only circular button:

- position: top right, respecting safe area
- size: `44px x 44px`
- white translucent background, rose icon, soft shadow
- states: play icon, pause icon, error icon
- accessible label may exist, but no visible text inside the button
- play/pause toggles `public/audio/background-music.mp3`
- handle playback failure gracefully

## Hero Section

Full-screen first scroll page.

Content:

```txt
2025.06.05 - 2026.06.05
Our First Year
우리의 첫 번째 1년
벚꽃처럼 조용히 피어난 기억들을 한 장씩 초대장처럼 펼쳐볼게.
천천히 내려보기
```

Visual:

- Top floral accent using `floweralUp.svg`, small width about `144px`.
- Three overlapping polaroid preview images:
  - `1-제주도-01.jpg`, rotate `-9deg`
  - `8-안동 데이트-05.jpg`, rotate `4deg`
  - `9-부산 데이트-05.jpg`, rotate `11deg`
- White photo borders, rounded `8px`, photo shadow.
- Scroll hint is a tiny mouse/scroll pill with a rose dot moving vertically.

## Opening Letter Section

Use a floral paper frame.

Header:

```txt
Dear. 너에게
```

Paragraphs:

```txt
안녕, 내 사람. 우리의 첫 번째 기념일을 그냥 지나치고 싶지 않아서, 너와 함께한 시간들을 천천히 꺼내 볼 수 있는 작은 편지를 만들었어.

화려한 말보다 우리가 함께 보낸 하루하루가 더 정확한 마음이라고 생각해. 그래서 이 페이지에는 그 마음을 조용히 담아봤어.

스크롤을 내릴 때마다 우리가 지나온 계절과 표정들이 너에게 다정하게 닿았으면 좋겠어.
```

## Memory Data

Create nine interactive memory pages from the real episode folders.

```ts
const memories = [
  { id: "jeju", date: "EP.01", title: "제주도", emotion: "시작", image: "/images/memories/1-제주도/1-제주도-01.jpg", media: { type: "video", src: "/images/memories/1-제주도/1-제주도-01.mp4", poster: "/images/memories/1-제주도/1-제주도-01.jpg" } },
  { id: "sseom", date: "EP.02", title: "썸", emotion: "설렘", image: "/images/memories/2-썸/2-썸-02.jpg", media: { type: "image", src: "/images/memories/2-썸/2-썸-02.jpg" } },
  { id: "discharge", date: "EP.03", title: "전역", emotion: "축하", image: "/images/memories/3-전역/3-전역-01.jpg", media: { type: "image", src: "/images/memories/3-전역/3-전역-01.jpg" } },
  { id: "changwon", date: "EP.04", title: "창원 데이트", emotion: "다정함", image: "/images/memories/4-창원 데이트/4-창원 데이트-08.jpg", media: { type: "image", src: "/images/memories/4-창원 데이트/4-창원 데이트-08.jpg" } },
  { id: "masan", date: "EP.05", title: "마산 데이트", emotion: "웃음", image: "/images/memories/5-마산 데이트/5-마산 데이트-01.jpg", media: { type: "image", src: "/images/memories/5-마산 데이트/5-마산 데이트-01.jpg" } },
  { id: "haenggung", date: "EP.06", title: "행궁동 데이트", emotion: "산책", image: "/images/memories/6-행궁동 데이트/6-행궁동 데이트-04.jpg", media: { type: "image", src: "/images/memories/6-행궁동 데이트/6-행궁동 데이트-04.jpg" } },
  { id: "bojeong", date: "EP.07", title: "보정동 데이트", emotion: "포근함", image: "/images/memories/7-보정동 데이트/7-보정동 데이트-03.jpg", media: { type: "image", src: "/images/memories/7-보정동 데이트/7-보정동 데이트-03.jpg" } },
  { id: "andong", date: "EP.08", title: "안동 데이트", emotion: "여행", image: "/images/memories/8-안동 데이트/8-안동 데이트-05.jpg", media: { type: "image", src: "/images/memories/8-안동 데이트/8-안동 데이트-05.jpg" } },
  { id: "busan", date: "EP.09", title: "부산 데이트", emotion: "기념", image: "/images/memories/9-부산 데이트/9-부산 데이트-05.jpg", media: { type: "image", src: "/images/memories/9-부산 데이트/9-부산 데이트-05.jpg" } }
];
```

## Interactive Memory Section

Each memory should be one near-full-screen scroll section.

Structure:

1. Small floral frame with badge: `01 · 설렘`, `02 · 두근거림`, etc. and date on the right.
2. Polaroid flip card.
3. Tap-to-reveal card.
4. Memory quiz.

Polaroid flip card:

- Front: photo, title, date, front message, hint text `사진을 탭하면 뒷면의 마음이 보여`.
- Back: date, title, flip message, hint text `다시 탭하면 사진으로 돌아가`.
- Tap/click toggles `rotateY 180deg`.
- Perspective around `1200px`.
- Duration about `0.65s`.

Tap-to-reveal:

```txt
손끝으로 열어보는 마음
여기에 그날의 작은 진심을 숨겨뒀어.
마음 열어보기
다시 덮어두기
```

When opened, replace preview with `hiddenMessage`.

Memory quiz:

- Header: `작은 기억 퀴즈`
- Show three pill options.
- Selected option becomes blush/rose.
- If correct, show `successMessage`.
- If incorrect, show: `조금 빗나갔지만 괜찮아. 우리 기억은 같이 다시 맞춰가면 되니까.`

## Emotion Section

Header:

```txt
희 · 노 · 애 · 락
우리가 지나온 마음들
좋은 순간만 있던 건 아니지만, 모든 감정이 결국 우리를 조금 더 단단하게 만들어 줬어.
```

Cards:

```ts
[
  {
    key: "희",
    title: "함께라서 밝아진 순간",
    tone: "rose",
    message: "너와 있으면 사소한 하루도 조금 더 환해졌고, 웃을 이유가 많아졌어."
  },
  {
    key: "노",
    title: "서로를 배워간 순간",
    tone: "sage",
    message: "서운했던 날도 있었지만, 그 시간 덕분에 너의 마음을 더 조심히 보게 됐어."
  },
  {
    key: "애",
    title: "말없이 기대고 싶던 순간",
    tone: "sky",
    message: "힘든 날에는 큰 말보다 곁을 지키는 마음이 더 필요하다는 걸 배웠어."
  },
  {
    key: "락",
    title: "다시 웃게 된 순간",
    tone: "honey",
    message: "결국 가장 오래 남는 건 같이 웃던 얼굴과 다시 손잡던 마음이더라."
  }
]
```

Each card uses a floral frame, a square character badge, title, and message.

## Heart Collect Mini Game

Keep it gentle and emotional, not game-like.

Header:

```txt
꽃잎 조각 모으기
우리의 1년을 채워줘
```

Five tappable pieces:

```txt
처음
웃음
이해
여행
오늘
```

Behavior:

- Each piece toggles collected/uncollected.
- Collected state: blush background, rose text, petal dot.
- Uncollected state: white background, muted ink, leafsoft dot.
- Progress bar fills by `collected / 5`.
- Incomplete text: `하나씩 눌러서 우리가 지나온 마음들을 채워줘.`
- Complete text: `다 모였어. 이렇게 많은 마음들이 모여서 우리의 첫 번째 1년이 됐어.`

## Photo Gallery Section

Header:

```txt
Memory Album
한 장씩 모인 우리
사진마다 완벽한 설명은 없어도, 그날의 공기와 마음은 오래 남아.
```

Render all six memory images as photo cards:

- image ratio `4 / 5`
- white card background
- border rose 15%
- padding `12px`
- title, date, caption/emotion
- soft photo shadow

## Final Letter Section

Use a floral frame with generous paper spacing.

Header:

```txt
마지막 편지
앞으로도, 천천히 함께
```

Paragraphs:

```txt
지난 1년 동안 내 곁에 있어줘서 고마워. 너와 함께한 시간 덕분에 나는 더 자주 웃었고, 더 솔직해졌고, 사랑받는다는 마음을 배웠어.

가끔은 내가 서툴러서 너를 서운하게 했던 순간도 있었을 거야. 그때마다 미안했고, 앞으로는 네 마음을 더 천천히 듣고 더 다정하게 표현하는 사람이 되고 싶어.

우리의 다음 계절에도 거창한 약속보다 매일의 작은 약속을 지킬게. 힘든 날엔 곁에 있고, 좋은 날엔 제일 먼저 함께 웃고, 평범한 날에도 너를 소중히 대할게.

첫 번째 기념일을 진심으로 축하해. 내 하루에 와줘서, 내 마음에 오래 머물러줘서 고마워. 사랑해.
```

Secret letter button:

- Initial label: `비밀 편지 열어보기`
- Open label: `편지 접어두기`
- Revealed message:

```txt
너에게 이 페이지를 보여주는 순간까지도 조금 떨렸어. 그래도 꼭 말하고 싶었어. 내 첫 번째 1년을 이렇게 따뜻하게 만들어줘서 고마워.
```

Final promise button:

- Label: `앞으로도 함께하기`
- After click, show:

```txt
좋아. 다음 365일도, 그다음 계절도 너와 같은 방향으로 걸어갈게.
```

Signature:

```txt
우리의 1주년에
from. 나
```

## Reusable Components

Implement or visually model these named components:

- `PageLayout`
- `OpeningDoorSection`
- `HeroSection`
- `OpeningLetterSection`
- `InteractiveMemorySection`
- `EmotionSection`
- `PhotoGallerySection`
- `FinalLetterSection`
- `PhotoCard`
- `ScrollHint`
- `TapToRevealCard`
- `MemoryQuiz`
- `HeartCollectMiniGame`
- `SecretLetterButton`
- `PolaroidFlipCard`
- `MusicToggleButton`
- `FloralFrame`
- `FloralWreath`

Floral frame:

- rounded `8px`, white paper, rose-tinted border, soft paper shadow
- faint `floweralUp.svg` at top-left, rotated about `-18deg`, opacity `20%`
- faint `floweralDown.svg` at bottom-right, rotated about `18deg`, opacity `20%`
- content stays readable over the decoration

Floral wreath:

- Use `floweralUp.svg`
- Small width about `144px`, large width about `208px`
- Opacity about `85%`

## Animation Rules

- Section reveal: fade in + slide up `24-36px`.
- Duration: `0.55s` to `0.8s`.
- Easing: soft ease-out, no bounce.
- Card tap: scale to `0.98-0.99`.
- Opening door: perspective fold, around `1.08s`.
- Polaroid flip: rotateY, around `0.65s`.
- Avoid fast, distracting movement.

## Accessibility And Mobile Rules

- No autoplay music before the user opens the invitation.
- All tappable controls should be at least `44px` high/wide.
- Do not rely on hover.
- Keep text large and readable because the handwritten font needs breathing room.
- Use Korean content exactly as written unless refining for small layout issues.
- Maintain comfortable line height: body letter text around `1.6-1.75`.
- Keep images and text from overlapping.
- Use alt text for meaningful images, empty alt for pure decoration.

## Acceptance Checklist

- Opening door appears first and blocks the main content until tapped.
- Button text exactly: `우리의 1년 열어보기`.
- Music only starts after the opening tap.
- Music toggle is icon-only and appears only after opening.
- The floral SVG assets are used as the primary decorations.
- All major section text feels handwritten.
- All six memories appear in the correct order.
- Tap-to-reveal, flip cards, quiz, mini-game, secret letter, and final promise interactions work.
- Mobile layout is usable around `393px` width.
- Visual tone remains white, ivory, pastel pink, deep rose, and soft leaf green.
