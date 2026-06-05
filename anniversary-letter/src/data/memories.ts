export type Memory = {
  id: string;
  date: string;
  title: string;
  emotion: string;
  image: string;
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
    id: 'first-meeting',
    date: '2025.06.05',
    title: '처음 만난 날',
    emotion: '설렘',
    image: '/images/memories/first-meeting.svg',
    message:
      '처음 너를 만났던 날, 평범한 하루가 조금 다른 빛으로 남기 시작했어.',
    hiddenMessage:
      '사실 그날 이후로 네가 어떤 사람인지 계속 궁금했어. 그 궁금함이 지금의 우리까지 데려와 줬네.',
    flipMessage:
      '첫인상보다 더 오래 남은 건, 다시 만나고 싶다는 조용한 마음이었어.',
    quiz: {
      question: '이날 내 마음에 제일 먼저 남은 건?',
      options: ['너의 말투', '그날의 날씨', '내 신발'],
      answer: '너의 말투',
      successMessage: '맞아. 네가 말하던 온도가 오래 기억났어.',
    },
  },
  {
    id: 'first-date',
    date: '2025.07.12',
    title: '첫 데이트',
    emotion: '두근거림',
    image: '/images/memories/first-date.svg',
    message:
      '어색한 웃음 사이로 너를 더 알고 싶다는 마음이 조용히 커졌던 날이야.',
    hiddenMessage:
      '같이 걷는 속도를 맞추는 일이 이렇게 다정할 수 있다는 걸 처음 알았어.',
    flipMessage:
      '조금 어색해서 더 선명했던 우리 첫 데이트.',
    quiz: {
      question: '첫 데이트의 분위기는 어떤 쪽에 가까웠을까?',
      options: ['조용한 설렘', '대단한 긴장', '완벽한 계획'],
      answer: '조용한 설렘',
      successMessage: '맞아. 큰 이벤트보다 조용한 설렘이 더 좋았어.',
    },
  },
  {
    id: 'laughing-day',
    date: '2025.09.03',
    title: '같이 웃었던 날',
    emotion: '행복',
    image: '/images/memories/laughing-day.svg',
    message:
      '별것 아닌 말에도 같이 웃던 그 순간들이 아직도 제일 자주 떠올라.',
    hiddenMessage:
      '너랑 웃고 나면 힘들었던 하루도 이상하게 조금 가벼워졌어.',
    flipMessage:
      '웃음은 우리가 가장 자주 나눈 사랑의 모양이었어.',
    quiz: {
      question: '우리가 제일 많이 나눴던 건?',
      options: ['웃음', '잔소리', '계산서'],
      answer: '웃음',
      successMessage: '맞아. 너와 나눈 웃음은 아직도 제일 따뜻해.',
    },
  },
  {
    id: 'closer-day',
    date: '2025.11.18',
    title: '더 가까워진 날',
    emotion: '이해',
    image: '/images/memories/closer-day.svg',
    message:
      '서운함이 지나간 자리에도 서로를 놓지 않으려는 마음이 남아 있었어.',
    hiddenMessage:
      '완벽하지 않아도 괜찮다는 말을, 우리는 서로에게 조금씩 배워갔던 것 같아.',
    flipMessage:
      '가까워진다는 건 좋은 날만 쌓는 일이 아니라는 걸 알게 된 날.',
    quiz: {
      question: '그날 우리에게 필요했던 건?',
      options: ['조금 더 듣기', '이기기', '모른 척하기'],
      answer: '조금 더 듣기',
      successMessage: '맞아. 서로를 더 듣는 쪽으로 우리가 걸어갔어.',
    },
  },
  {
    id: 'trip-day',
    date: '2026.02.14',
    title: '함께 떠난 날',
    emotion: '기억',
    image: '/images/memories/trip-day.svg',
    message:
      '낯선 풍경보다 더 오래 남은 건, 그 안에서 나란히 걷던 우리였어.',
    hiddenMessage:
      '여행지보다 더 좋았던 건, 어디에 있든 네 옆이면 마음이 놓였다는 사실이야.',
    flipMessage:
      '함께 본 풍경은 사진보다 마음에 더 오래 남았어.',
    quiz: {
      question: '여행에서 제일 오래 남은 건?',
      options: ['나란히 걷던 시간', '가방 무게', '알람 소리'],
      answer: '나란히 걷던 시간',
      successMessage: '맞아. 그 시간 자체가 제일 좋은 기념품이었어.',
    },
  },
  {
    id: 'ordinary-day',
    date: '2026.05.20',
    title: '평범해서 더 좋았던 날',
    emotion: '안정',
    image: '/images/memories/ordinary-day.svg',
    message:
      '특별한 일이 없어도 너와 함께라면 하루가 충분히 다정해진다는 걸 알았어.',
    hiddenMessage:
      '평범한 하루를 좋아하게 된 건, 그 안에 네가 자주 있었기 때문이야.',
    flipMessage:
      '가장 조용한 날들이 결국 가장 오래 남는다는 걸 알려준 우리.',
    quiz: {
      question: '평범한 날을 특별하게 만든 건?',
      options: ['너와 있는 마음', '비싼 선물', '완벽한 일정'],
      answer: '너와 있는 마음',
      successMessage: '맞아. 특별함은 늘 네가 있는 쪽에 있었어.',
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
