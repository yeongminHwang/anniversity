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
  extraPolaroids?: {
    id: string;
    date: string;
    title: string;
    media: {
      type: 'image' | 'video';
      src: string;
      poster?: string;
    };
    message: string;
    flipMessage: string;
  }[];
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
    emotion: '첫 만남',
    image: memoryAsset('01-jeju/01-jeju-01-1600.webp'),
    media: {
      type: 'video',
      src: memoryAsset('01-jeju/01-jeju-01.mp4'),
      poster: memoryAsset('01-jeju/01-jeju-01-1600.webp'),
    },
    message:
      '빙글빙글 선미 😵‍💫😵‍💫😵‍💫',
    hiddenMessage:
      '돌아보면 그때는 몰랐지만, 너와 함께 남은 풍경들이 오래 마음에 붙어 있었어.',
    flipMessage:
      '이거 한 100번은 본 듯..!',
    extraPolaroids: [
      {
        id: 'jeju-extra-01',
        date: 'EP.01-2',
        title: '뭐하고 놀았을까요?',
        media: {
          type: 'image',
          src: memoryAsset('01-jeju/01-jeju-02.jpg'),
        },
        message: '선미 만나기 전 갔던 술집',
        flipMessage:
          '나중에 제주도 가면 여기서 같이 술 마시자.',
      },
    ],
    quiz: {
      question: '제주도에서 우리가 처음 만났던 장소의 이름은?',
      options: ['제주 여덟', '제주 아홉', '제주 열'],
      answer: '제주 아홉',
      successMessage: '기억하고 있구만!',
    },
  },
  {
    id: 'sseom',
    date: 'EP.02',
    title: '우리 더 친해져 볼래요?',
    emotion: '설렘',
    image: memoryAsset('02-sseom/02-sseom-02-1600.webp'),
    media: {
      type: 'image',
      src: memoryAsset('02-sseom/02-sseom-02-1600.webp'),
    },
    message:
      '선미 가평까지 찾아와주시다.',
    hiddenMessage:
      '그때의 어색함이 싫지 않았어. 오히려 너를 더 조심히 알고 싶게 만들었어.',
    flipMessage: `2시간씩 차타고 새벽에 달려와준 우리 선미 ❤️ \n 저 이 때 긴장 많이 했답니다!`,
    extraPolaroids: [
      {
        id: 'sseom-extra-01',
        date: 'EP.02-2',
        title: '각자의 자리에서.',
        media: {
          type: 'video',
          src: memoryAsset('02-sseom/02-sseom-01.mp4'),
        },
        message: 'with 어린이집 선생님',
        flipMessage:
          '이 영상 너무 귀여워. 완죤 귀여운 선생님이야. 😍😍',
      },
      {
        id: 'sseom-extra-02',
        date: 'EP.02-3',
        title: '각자의 자리에서.',
        media: {
          type: 'image',
          src: memoryAsset('02-sseom/02-sseom-03.jpg'),
        },
        message: 'with 군인 아저씨',
        flipMessage:
          `힘들 때마다 자기 사진 보면서 \n 씩 웃고 다시 일했답니다~ 😂`,
      },
      {
        id: 'sseom-extra-03',
        date: 'EP.02-4',
        title: '생일 축하해',
        media: {
          type: 'image',
          src: memoryAsset('02-sseom/02-sseom-04.jpg'),
        },
        message: '맛있는 양꼬치와 깨알 소주 한 병',
        flipMessage:
          `자기 덕분에 외로울 뻔한 생일 정말 행복하게 보냈어. \n 아직도 자기가 준 미역국이랑 좋아하는 반찬 듬뿍 \n 챙겨준게 생각나고 고마워`,
      },
      {
        id: 'sseom-extra-04',
        date: 'EP.02-5',
        title: '#아직 사귀는 거 아님',
        media: {
          type: 'image',
          src: memoryAsset('02-sseom/02-sseom-05.jpg'),
        },
        message: '서로 같이 찍은 첫 사진',
        flipMessage:
          `서로 기분좋아 포즈잡던 날.`,
      },
    ],
    quiz: {
      question: '선미는 썸 탈 때 가평에 몇 번이나 와줬을까요?',
      options: ['2번', '3번', '4번'],
      answer: '3번',
      successMessage: '내가 많이 못 가서 미안해. 사랑해 ❤️',
    },
  },
  {
    id: 'discharge',
    date: 'EP.03',
    title: '전역 끝, 연애 시작',
    emotion: '축하',
    image: memoryAsset('03-discharge/03-discharge-01-1600.webp'),
    media: {
      type: 'image',
      src: memoryAsset('03-discharge/03-discharge-01-1600.webp'),
    },
    message:
      '새로운 하루가 시작되던 날, 자기가 곁에 있어서 더 특별했어.',
    hiddenMessage:
      '축하받는 순간보다 더 기억나는 건, 그날을 같이 지나고 있었다는 사실이야.',
    flipMessage:
      '새로운 시작 앞에서 자기랑 웃을 수 있어서 \n 더 잘해야겠다고 다짐했어.',
    extraPolaroids: [
      {
        id: 'discharge-extra-01',
        date: 'EP.03-2',
        title: '전역 축하 케이크',
        media: {
          type: 'image',
          src: memoryAsset('03-discharge/03-discharge-02.jpg'),
        },
        message: '저 이런 거 처음 받아봐요~',
        flipMessage:
          '인생의 큰 순간에 나랑 함께 있어줘서 고마워.',
      },
    ],
    quiz: {
      question: '전역 날 선미가 사준 저녁은 뭘까요?',
      options: ['김진순', '골뱅이', '돌닭'],
      answer: '돌닭',
      successMessage: '정답이야. 아주 잘 기억하는 걸?',
    },
  },
  {
    id: 'changwon',
    date: 'EP.04',
    title: '창원 데이트',
    emotion: '다정함',
    image: memoryAsset('04-changwon-date/04-changwon-date-08-1600.webp'),
    media: {
      type: 'image',
      src: memoryAsset('04-changwon-date/04-changwon-date-08-1600.webp'),
    },
    message:
      '멀리서 와준 선미 고마워',
    hiddenMessage:
      '그날의 사진을 보면, 우리가 조금씩 서로에게 편해지고 있었다는 게 보여.',
    flipMessage:
      '익숙했던 공간도 자기랑 같이 있으니까 \n 다르게 느껴지는게 신기했어.',
    extraPolaroids: [
      {
        id: 'changwon-extra-01',
        date: 'EP.04-2',
        title: '커플 지갑',
        media: {
          type: 'image',
          src: memoryAsset('04-changwon-date/04-changwon-date-01.jpg'),
        },
        message: '자기와 첫 커플 아이템??',
        flipMessage:
          '안 잃어버리고 잘 간직하기',
      },
      {
        id: 'changwon-extra-04',
        date: 'EP.04-5',
        title: '깻잎막회',
        media: {
          type: 'image',
          src: memoryAsset('04-changwon-date/04-changwon-date-12.jpg'),
        },
        message: '우리 원픽 깻잎막회',
        flipMessage:
          '근질근질한데요..??',
      },
      {
        id: 'changwon-extra-02',
        date: 'EP.04-3',
        title: '넘어질라...',
        media: {
          type: 'image',
          src: memoryAsset('04-changwon-date/04-changwon-date-02.jpg'),
        },
        message: '선미. 벤츠 뽑으시다.',
        flipMessage:
          '이 때 귀여워서 얼마나 웃었는지 몰라ㅋㅋㅋ',
      },
      {
        id: 'changwon-extra-03',
        date: 'EP.04-4',
        title: '인생네컷',
        media: {
          type: 'image',
          src: memoryAsset('04-changwon-date/04-changwon-date-06.jpg'),
        },
        message: '귀엽다.',
        flipMessage:
          '우리 인생네컷 많이 찍으러 다니자아~~',
      },

    ],
    quiz: {
      question: '창원 데이트하다가 멍든 이유는?',
      options: ['길 가다 넘어져서', '선미랑 영민이의 상호 어깨빵', '클레이 사격'],
      answer: '클레이 사격',
      successMessage: '담에 한 번 더 Go??',
    },
  },
  {
    id: 'masan',
    date: 'EP.05',
    title: '마산 데이트',
    emotion: '웃음',
    image: memoryAsset('05-masan-date/05-masan-date-01.mp4'),
    media: {
      type: 'video',
      src: memoryAsset('05-masan-date/05-masan-date-01.mp4'),
    },
    message:
      '선미는 비눗방울이 좋아',
    hiddenMessage:
      '함께 웃는 일이 점점 익숙해질수록, 너와 보내는 하루가 내 일상에 가까워졌어.',
    flipMessage:
      '돝섬 갔을 때 자기 정말 이뻐서 사진 많이 찍어주고 싶더라니깐요?🤣🤣',
    extraPolaroids: [
      {
        id: 'masan-date-extra-01',
        date: 'EP.05-2',
        title: '잼민이와 언니',
        media: {
          type: 'image',
          src: memoryAsset('05-masan-date/05-masan-date-03-1600.webp'),
        },
        message: '그만 까불기',
        flipMessage:
          '자기랑 비눗방울 놀이해서 재밌었어. \n 다음에 또 돝섬 가자아',
      },
      {
        id: 'masan-date-extra-02',
        date: 'EP.05-3',
        title: '.',
        media: {
          type: 'image',
          src: memoryAsset('05-masan-date/05-masan-date-04.jpg'),
        },
        message: '그냥 이뻐서.',
        flipMessage:
          '자기는 자기 이쁜 줄 알아야 해. 🥰',
      },
    ],
    quiz: {
      question: '돝섬 데이트에서 열심히 주운 것은?',
      options: ['돌멩이', '솔방울', '쓰레기'],
      answer: '솔방울',
      successMessage: '말려서 어린이집에서 잘 썼니..?',
    },
  },
  {
    id: 'haenggung',
    date: 'EP.06',
    title: '행궁동 데이트',
    emotion: '산책',
    image: memoryAsset('06-haenggung-date/06-haenggung-date-03-1600.webp'),
    media: {
      type: 'image',
      src: memoryAsset('06-haenggung-date/06-haenggung-date-03-1600.webp'),
    },
    message:
      '이제 행궁동만 걸으면 자기 생각이 나.',
    hiddenMessage:
      '나란히 걷는 속도가 맞아간다는 건, 마음도 조금씩 같은 쪽을 본다는 뜻 같아.',
    flipMessage:
      '커피-밥-술만 먹어도 자기랑 하면 왜 다 재밌을까?',
    quiz: {
      question: '행궁동에서 안 먹어본 것은?',
      options: ['대방어회', '떡볶이', '골뱅이'],
      answer: '떡볶이',
      successMessage: '정답이야',
    },
  },
  {
    id: 'bojeong',
    date: 'EP.07',
    title: '보정동 데이트',
    emotion: '포근함',
    image: memoryAsset('07-bojeong-date/07-bojeong-date-03.jpg'),
    media: {
      type: 'image',
      src: memoryAsset('07-bojeong-date/07-bojeong-date-03.jpg'),
    },
    message:
      '누가 꽃일까요?',
    hiddenMessage:
      '같이 있는 시간이 편해질수록, 나는 너에게 더 좋은 사람이 되고 싶어졌어.',
    flipMessage:
      `예쁜 곳이라 좋았던 게 아니라, \n 자기랑 함께라서 그곳이 예뻐졌어.`,
    extraPolaroids: [
      {
        id: 'bojeong-date-extra-01',
        date: 'EP.06-2',
        title: '벚꽃길',
        media: {
          type: 'image',
          src: memoryAsset('07-bojeong-date/07-bojeong-date-04.jpg'),
        },
        message: '같이 걷기',
        flipMessage:
          '내년 벚꽃도 자기랑 함께. 🌸',
      },
    ],
    quiz: {
      question: '2027년 벚꽃 보러가고 싶은 사람은?',
      options: ['차은우', '황영민', '조인성'],
      answer: '황영민',
      successMessage: '그럼그럼. 벚꽃 보기로 약속한거다! 🤣',
    },
  },
  {
    id: 'andong',
    date: 'EP.08',
    title: '안동 데이트',
    emotion: '여행',
    image: memoryAsset('08-andong-date/08-andong-date-05-1600.webp'),
    media: {
      type: 'image',
      src: memoryAsset('08-andong-date/08-andong-date-05-1600.webp'),
    },
    message:
      '자기랑 함께해서 행복했던 안동 여행',
    hiddenMessage:
      '여행은 장소를 남기는 줄 알았는데, 너와 다녀온 곳은 마음의 온도를 남기더라.',
    flipMessage:
      '자기가 안동 같이 안 와줬으면, \n 지나가는 안동 "방문"이었을거야. 덕분에 행복한 추억이 됐어.',
    extraPolaroids: [
      {
        id: 'andong-date-extra-01',
        date: 'EP.08-2',
        title: '같이 가',
        media: {
          type: 'video',
          src: memoryAsset('08-andong-date/08-andong-date-01.mp4'),
        },
        message: '???: 나 다이어트 해야해',
        flipMessage:
          '다이어트는 나랑 같이 합시다. \n 나도 살 빼야해ㅠㅠㅠ',
      },
      {
        id: 'andong-date-extra-02',
        date: 'EP.08-3',
        title: '외모 공격',
        media: {
          type: 'image',
          src: memoryAsset('08-andong-date/08-andong-date-06.jpg'),
        },
        message: '합성 아님',
        flipMessage:
          '아무튼 합성 아님...',
      },
      {
        id: 'andong-date-extra-03',
        date: 'EP.08-4',
        title: '안동 맥주',
        media: {
          type: 'image',
          src: memoryAsset('08-andong-date/08-andong-date-07.jpg'),
        },
        message: '맥주 공부 열심히 한 날',
        flipMessage:
          '기억나는 맥주가 없네. \n 자기랑 또 가야겠다~ 😂',
      },
      {
        id: 'andong-date-extra-04',
        date: 'EP.08-5',
        title: '왕과 사는 남자',
        media: {
          type: 'image',
          src: memoryAsset('08-andong-date/08-andong-date-08.jpg'),
        },
        message: '물론 선미가 왕',
        flipMessage:
          '뫼시고 살겠습니다. \n 사랑해 🥰',
      },
    ],
    quiz: {
      question: '월영교 보러가는 길. 마주치고 깜짝 놀랐던 것은?',
      options: ['멧돼지', '호랑이', '지네'],
      answer: '지네',
      successMessage: '정답! 아직 그 지네 살아있을까?',
    },
  },
  {
    id: 'busan',
    date: 'EP.09',
    title: '부산 데이트',
    emotion: '기념',
    image: memoryAsset('09-busan-date/09-busan-date-05-1600.webp'),
    media: {
      type: 'image',
      src: memoryAsset('09-busan-date/09-busan-date-05-1600.webp'),
    },
    message:
      'MZ샷 실패...?',
    hiddenMessage:
      '많은 장면이 있었지만 결국 제일 좋은 건, 그 모든 장면 옆에 네가 있었다는 거야.',
    flipMessage:
      '가장 남쪽으로 떠나봤던 여행. \n 자기랑 함께해서 좋았어.',
    extraPolaroids: [
      {
        id: 'busan-date-extra-01',
        date: 'EP.09-2',
        title: '똑땅해',
        media: {
          type: 'image',
          src: memoryAsset('09-busan-date/09-busan-date-01.jpg'),
        },
        message: '???: 흰여율해안터널 오늘 못 들어갑니데이',
        flipMessage:
          '우리 다음에 또 와서 이쁜 사진 찍자 🥰 \n 사진 많이 찍어줄게.',
      },
      {
        id: 'busan-date-extra-02',
        date: 'EP.09-3',
        title: '여친짤',
        media: {
          type: 'image',
          src: memoryAsset('09-busan-date/09-busan-date-02.jpg'),
        },
        message: '???: 커피가 되고 싶어요',
        flipMessage:
          '내가 좋아하는 자기 사진이야.',
      },
      {
        id: 'busan-date-extra-03',
        date: 'EP.09-4',
        title: '택슐랭',
        media: {
          type: 'image',
          src: memoryAsset('09-busan-date/09-busan-date-04.jpg'),
        },
        message: '같이 해줘서 고마워',
        flipMessage:
          `뛰고, 땀나고 힘들텐데, \n 내가 좋아한다는 이유 하나로 같이 해줘서 \n 너무 고마워 ❤️`,
      },
      {
        id: 'busan-date-extra-04',
        date: 'EP.09-5',
        title: '영차영차',
        media: {
          type: 'video',
          src: memoryAsset('09-busan-date/09-busan-date-06.mp4'),
        },
        message: '우린 발도 잘 맞는 커플 🏃',
        flipMessage:
          `같이 발 맞춰서 뛰는 것처럼, \n 환상의 콤비가 되어보자.`,
      },
    ],
    quiz: {
      question: '부산에서 창원으로 넘어갈 때, 영민이가 두고 온 것은?',
      options: ['개념', '도라지 정과', '핸드폰'],
      answer: '도라지 정과',
      successMessage: '다음부터 정신 똑바로 차릴게ㅠㅠㅠ',
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
