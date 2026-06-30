import { memoryAsset } from './assets';

export type Memory = {
  id: string;
  date: string;
  title: string;
  emotion: string;
  image: string;
  media: {
    type: 'image' | 'video';
    src: string;
    poster?: string;
  };
  message: string;
  hiddenMessage: string;
  flipMessage: string;
  quiz: {
    question: string;
    options: string[];
    answer: string;
    successMessage: string;
  };
};

export type EmotionNote = {
  key: '희' | '노' | '애' | '락';
  title: string;
  tone: 'rose' | 'sage' | 'sky' | 'honey';
  message: string;
};

export const memories: Memory[] = [
  {
    id: 'jeju',
    date: 'EP.01',
    title: '제주도',
    emotion: '시작',
    image: memoryAsset('1-제주도/1-제주도-01-1600.webp'),
    media: {
      type: 'video',
      src: memoryAsset('1-제주도/1-제주도-01.mp4'),
      poster: memoryAsset('1-제주도/1-제주도-01-1600.webp'),
    },
    message:
      '처음의 공기까지 오래 남아 있는 제주도. 그때의 장면들이 우리 이야기의 첫 페이지가 됐어.',
    hiddenMessage:
      '돌아보면 그때는 몰랐지만, 너와 함께 남은 풍경들이 오래 마음에 붙어 있었어.',
    flipMessage:
      '바람이 많이 불던 순간도, 웃던 얼굴도 지금 보니 전부 시작의 표시였어.',
    quiz: {
      question: '제주도 기억에서 제일 먼저 떠오르는 건?',
      options: ['같이 남긴 영상', '공항 의자', '길 이름'],
      answer: '같이 남긴 영상',
      successMessage: '맞아. 움직이는 장면이라 더 생생하게 남아 있어.',
    },
  },
  {
    id: 'sseom',
    date: 'EP.02',
    title: '썸',
    emotion: '설렘',
    image: memoryAsset('2-썸/2-썸-02-1600.webp'),
    media: {
      type: 'image',
      src: memoryAsset('2-썸/2-썸-02-1600.webp'),
    },
    message:
      '아직 말로 다 정하지 못한 마음들이 사진 사이에 조용히 남아 있던 시간.',
    hiddenMessage:
      '그때의 어색함이 싫지 않았어. 오히려 너를 더 조심히 알고 싶게 만들었어.',
    flipMessage:
      '확신보다 궁금함이 먼저였고, 그 궁금함이 천천히 좋아하는 마음이 됐어.',
    quiz: {
      question: '그때 우리 사이에 제일 많이 흐르던 건?',
      options: ['조용한 설렘', '완벽한 계획', '괜한 경쟁'],
      answer: '조용한 설렘',
      successMessage: '맞아. 조용해서 더 오래 기억나는 설렘이었어.',
    },
  },
  {
    id: 'discharge',
    date: 'EP.03',
    title: '전역',
    emotion: '축하',
    image: memoryAsset('3-전역/3-전역-01-1600.webp'),
    media: {
      type: 'image',
      src: memoryAsset('3-전역/3-전역-01-1600.webp'),
    },
    message:
      '하나의 시간이 끝나고 새로운 하루가 시작되던 날, 네가 곁에 있어서 더 특별했어.',
    hiddenMessage:
      '축하받는 순간보다 더 기억나는 건, 그날을 같이 지나고 있었다는 사실이야.',
    flipMessage:
      '새로운 시작 앞에서 네가 함께 웃어줘서 마음이 많이 든든했어.',
    quiz: {
      question: '이날을 더 특별하게 만든 건?',
      options: ['함께 축하한 마음', '복잡한 일정', '먼 길의 피곤함'],
      answer: '함께 축하한 마음',
      successMessage: '맞아. 함께 축하해서 더 오래 남는 날이 됐어.',
    },
  },
  {
    id: 'changwon',
    date: 'EP.04',
    title: '창원 데이트',
    emotion: '다정함',
    image: memoryAsset('4-창원 데이트/4-창원 데이트-08-1600.webp'),
    media: {
      type: 'image',
      src: memoryAsset('4-창원 데이트/4-창원 데이트-08-1600.webp'),
    },
    message:
      '창원에서 보낸 하루는 특별한 말보다 같이 걷던 분위기로 더 선명하게 남아 있어.',
    hiddenMessage:
      '그날의 사진을 보면, 우리가 조금씩 서로에게 편해지고 있었다는 게 보여.',
    flipMessage:
      '낯설었던 곳도 너와 같이 있으면 금방 우리 기억이 되는 게 신기했어.',
    quiz: {
      question: '창원 데이트가 남긴 느낌은?',
      options: ['편안한 다정함', '급한 하루', '어색한 침묵'],
      answer: '편안한 다정함',
      successMessage: '맞아. 편해지는 마음이 참 좋았어.',
    },
  },
  {
    id: 'masan',
    date: 'EP.05',
    title: '마산 데이트',
    emotion: '웃음',
    image: memoryAsset('5-마산 데이트/5-마산 데이트-03-1600.webp'),
    media: {
      type: 'image',
      src: memoryAsset('5-마산 데이트/5-마산 데이트-03-1600.webp'),
    },
    message:
      '마산에서의 우리는 조금 더 자연스러웠고, 그래서 사진 속 표정도 더 따뜻해 보여.',
    hiddenMessage:
      '함께 웃는 일이 점점 익숙해질수록, 너와 보내는 하루가 내 일상에 가까워졌어.',
    flipMessage:
      '어디를 갔는지보다 네 옆에서 어떤 마음이었는지가 더 오래 남았어.',
    quiz: {
      question: '마산 데이트에서 제일 크게 남은 건?',
      options: ['함께 웃던 표정', '길 찾기 실력', '날씨 걱정'],
      answer: '함께 웃던 표정',
      successMessage: '맞아. 결국 가장 오래 남는 건 네 표정이더라.',
    },
  },
  {
    id: 'haenggung',
    date: 'EP.06',
    title: '행궁동 데이트',
    emotion: '산책',
    image: memoryAsset('6-행궁동 데이트/6-행궁동 데이트-03-1600.webp'),
    media: {
      type: 'image',
      src: memoryAsset('6-행궁동 데이트/6-행궁동 데이트-03-1600.webp'),
    },
    message:
      '행궁동을 걸으며 나눈 작은 말들이 생각보다 오래 마음에 남았어.',
    hiddenMessage:
      '나란히 걷는 속도가 맞아간다는 건, 마음도 조금씩 같은 쪽을 본다는 뜻 같아.',
    flipMessage:
      '많은 걸 하지 않아도 충분했던 하루. 네가 있어서 그랬어.',
    quiz: {
      question: '행궁동에서 우리에게 제일 잘 어울린 건?',
      options: ['천천히 걷기', '빨리 지나가기', '말 아끼기'],
      answer: '천천히 걷기',
      successMessage: '맞아. 천천히 걷는 시간이 우리답게 좋았어.',
    },
  },
  {
    id: 'bojeong',
    date: 'EP.07',
    title: '보정동 데이트',
    emotion: '포근함',
    image: memoryAsset('7-보정동 데이트/7-보정동 데이트-03-1600.webp'),
    media: {
      type: 'image',
      src: memoryAsset('7-보정동 데이트/7-보정동 데이트-03-1600.webp'),
    },
    message:
      '보정동의 거리처럼 조용하고 예쁜 순간들이 우리 사이에도 차곡차곡 쌓였어.',
    hiddenMessage:
      '같이 있는 시간이 편해질수록, 나는 너에게 더 좋은 사람이 되고 싶어졌어.',
    flipMessage:
      '예쁜 곳이라 좋았던 게 아니라, 너와 함께라서 그곳이 예뻐졌어.',
    quiz: {
      question: '보정동 데이트의 분위기에 가까운 말은?',
      options: ['포근한 하루', '시끄러운 계획', '급한 약속'],
      answer: '포근한 하루',
      successMessage: '맞아. 그날은 포근하다는 말이 잘 어울렸어.',
    },
  },
  {
    id: 'andong',
    date: 'EP.08',
    title: '안동 데이트',
    emotion: '여행',
    image: memoryAsset('8-안동 데이트/8-안동 데이트-05-1600.webp'),
    media: {
      type: 'image',
      src: memoryAsset('8-안동 데이트/8-안동 데이트-05-1600.webp'),
    },
    message:
      '안동에서 본 풍경보다 더 오래 남은 건, 그 안에서 같은 방향을 보던 우리였어.',
    hiddenMessage:
      '여행은 장소를 남기는 줄 알았는데, 너와 다녀온 곳은 마음의 온도를 남기더라.',
    flipMessage:
      '낯선 풍경이 우리 추억이 되는 순간마다, 너와 더 멀리 가보고 싶어졌어.',
    quiz: {
      question: '안동 여행에서 제일 오래 남은 건?',
      options: ['같이 본 풍경', '짐 무게', '알람 소리'],
      answer: '같이 본 풍경',
      successMessage: '맞아. 같이 봐서 더 예쁜 풍경이었어.',
    },
  },
  {
    id: 'busan',
    date: 'EP.09',
    title: '부산 데이트',
    emotion: '기념',
    image: memoryAsset('9-부산 데이트/9-부산 데이트-05-1600.webp'),
    media: {
      type: 'image',
      src: memoryAsset('9-부산 데이트/9-부산 데이트-05-1600.webp'),
    },
    message:
      '부산에서의 우리는 첫 번째 1년을 지나, 다음 계절을 같이 바라보는 사람들 같았어.',
    hiddenMessage:
      '많은 장면이 있었지만 결국 제일 좋은 건, 그 모든 장면 옆에 네가 있었다는 거야.',
    flipMessage:
      '우리의 1년은 끝이 아니라 다음 이야기를 여는 가장 다정한 시작이야.',
    quiz: {
      question: '부산 데이트가 우리에게 남긴 건?',
      options: ['다음 계절의 기대', '완벽한 일정표', '길 잃은 기억'],
      answer: '다음 계절의 기대',
      successMessage: '맞아. 앞으로도 같이 가고 싶은 곳이 많아졌어.',
    },
  },
];

export const emotionFlow: EmotionNote[] = [
  {
    key: '희',
    title: '함께라서 밝아진 순간',
    tone: 'rose',
    message:
      '너와 있으면 사소한 하루도 조금 더 환해졌고, 웃을 이유가 많아졌어.',
  },
  {
    key: '노',
    title: '서로를 배워간 순간',
    tone: 'sage',
    message:
      '서운했던 날도 있었지만, 그 시간 덕분에 너의 마음을 더 조심히 보게 됐어.',
  },
  {
    key: '애',
    title: '말없이 기대고 싶던 순간',
    tone: 'sky',
    message:
      '힘든 날에는 큰 말보다 곁을 지키는 마음이 더 필요하다는 걸 배웠어.',
  },
  {
    key: '락',
    title: '다시 웃게 된 순간',
    tone: 'honey',
    message:
      '결국 가장 오래 남는 건 같이 웃던 얼굴과 다시 손잡던 마음이더라.',
  },
];
