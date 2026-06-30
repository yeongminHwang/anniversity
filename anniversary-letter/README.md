# 1주년 스크롤 러브레터

선미를 위한 첫 번째 1주년 기념 웹사이트입니다.

문을 여는 듯한 첫 화면에서 시작해, 함께한 추억과 편지, 퀴즈, 선미 백과사전, 일상 사진 앨범을 차례로 보여주는 모바일 중심의 스크롤형 러브레터입니다.

## 기술 스택

- Vite
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- js-confetti
- 정적 프론트엔드
- GitHub Pages 커스텀 도메인 배포

## 실행 방법

의존성 설치:

```bash
npm install
```

개발 서버 실행:

```bash
npm run dev
```

타입 검사:

```bash
npm run lint
```

프로덕션 빌드:

```bash
npm run build
```

빌드 결과 미리보기:

```bash
npm run preview
```

배포:

```bash
npm run deploy
```

## 현재 페이지 흐름

페이지 구성은 `src/pages/HomePage.tsx`에서 관리합니다.

1. 오프닝 문 화면
2. 문 열림 이후 음악 토글 버튼 표시
3. 히어로 섹션
4. 오프닝 편지
5. 추억별 인터랙티브 메모리 섹션
6. 선미 백과사전
7. 일상 사진/영상 캐러셀
8. 마지막 편지

## 주요 데이터 파일

- 추억 에피소드: `src/data/memories.ts`
- 일상 갤러리: `src/data/dailyGallery.ts`
- 정적 자산 경로 헬퍼: `src/data/assets.ts`

## 자산 폴더

- 추억 사진/영상: `public/images/memories/`
- 일상 갤러리 사진/영상: `public/images/daily/`
- 장식 SVG: `public/images/decorations/`
- 배경음악: `public/audio/background-music.mp3`
- 손글씨 폰트: `public/fonts/handwriting/`

일상 갤러리 파일명 규칙:

```txt
public/images/daily/daily-01.jpg
...
public/images/daily/daily-21.jpg
public/images/daily/daily-22.mp4
```

정적 자산은 직접 문자열로 경로를 쓰기보다 `src/data/assets.ts`의 헬퍼를 사용합니다. 이렇게 해야 로컬 개발과 커스텀 도메인 배포 환경에서 같은 방식으로 경로가 동작합니다.

## 배포 설정

이 프로젝트는 GitHub Pages 커스텀 도메인 기준으로 설정되어 있습니다.

- 도메인: `seonmi.o-r.kr`
- 커스텀 도메인 파일: `public/CNAME`
- Vite base 설정: `vite.config.ts`의 `base: '/'`
- package homepage: `http://seonmi.o-r.kr/`

## 디자인 방향

전체 분위기는 따뜻하고 고급스러운 1주년 편지/사진 앨범입니다.

- 파스텔 핑크와 아이보리 배경
- 종이 같은 카드 표면
- 부드러운 플로럴 SVG 장식
- 딥 로즈 포인트 컬러
- 손글씨 느낌의 한글 타이포그래피
- 과하지 않은 Framer Motion 애니메이션
- 모바일 우선 레이아웃

## 작업 전 확인 사항

코드 수정 후에는 아래 명령어를 실행합니다.

```bash
npm run lint
npm run build
```

함께 확인할 것:

- 오프닝 문이 열린 뒤에만 본문이 보이는지
- 배경음악이 사용자 클릭 이후에만 재생되는지
- 이미지, 영상, SVG, 오디오 경로가 깨지지 않는지
- 모바일에서 세로 스크롤이 부드러운지
- 선미 백과사전과 일상 갤러리 캐러셀이 드래그 및 루프 동작하는지
