import { dailyAsset } from './assets';

export type DailyGalleryItem = {
  id: string;
  title: string;
  date: string;
  caption: string;
  media: {
    type: 'image' | 'video';
    src: string;
    poster?: string;
  };
};

export const dailyGalleryItems: DailyGalleryItem[] = [
  {
    id: 'daily-01',
    title: '이 해보세요~',
    date: 'Daily 01',
    caption: '2222',
    media: {
      type: 'image',
      src: dailyAsset('daily-01.jpg'),
    },
  },
  {
    id: 'daily-02',
    title: '선미 어릴 적',
    date: 'Daily 02',
    caption: '애기 선미',
    media: {
      type: 'image',
      src: dailyAsset('daily-02.jpg'),
    },
  },
  {
    id: 'daily-03',
    title: '영민 어릴 적',
    date: 'Daily 03',
    caption: '귀엽죠?ㅎㅎㅎ',
    media: {
      type: 'image',
      src: dailyAsset('daily-03.jpg'),
    },
  },
  {
    id: 'daily-04',
    title: '영상통화',
    date: 'Daily 04',
    caption: '일상이 된 영상통화',
    media: {
      type: 'image',
      src: dailyAsset('daily-04.jpg'),
    },
  },
  {
    id: 'daily-05',
    title: '칙칙폭폭',
    date: 'Daily 05',
    caption: '선생님 열일중',
    media: {
      type: 'image',
      src: dailyAsset('daily-05.jpg'),
    },
  },
  {
    id: 'daily-06',
    title: '파견',
    date: 'Daily 06',
    caption: '파견 나가는 중',
    media: {
      type: 'image',
      src: dailyAsset('daily-06.jpg'),
    },
  },
  {
    id: 'daily-07',
    title: '오목',
    date: 'Daily 07',
    caption: '선미 오목 영민이한테 짐.',
    media: {
      type: 'image',
      src: dailyAsset('daily-07.jpg'),
    },
  },
  {
    id: 'daily-08',
    title: '대장부',
    date: 'Daily 08',
    caption: '잘생겼어 🥰',
    media: {
      type: 'image',
      src: dailyAsset('daily-08.jpg'),
    },
  },
  {
    id: 'daily-09',
    title: '인형뽑기',
    date: 'Daily 09',
    caption: '만 원 이상은 안돼',
    media: {
      type: 'image',
      src: dailyAsset('daily-09.jpg'),
    },
  },
  {
    id: 'daily-10',
    title: '선미가 준 크리스마스 선물',
    date: 'Daily 10',
    caption: '뭐게요~~',
    media: {
      type: 'image',
      src: dailyAsset('daily-10.jpg'),
    },
  },
  {
    id: 'daily-11',
    title: '매운 갈비찜',
    date: 'Daily 11',
    caption: '담에 또 가기',
    media: {
      type: 'image',
      src: dailyAsset('daily-11.jpg'),
    },
  },
  {
    id: 'daily-12',
    title: '새로운 취미',
    date: 'Daily 12',
    caption: '지구 한 바퀴 돌자',
    media: {
      type: 'image',
      src: dailyAsset('daily-12.jpg'),
    },
  },
  {
    id: 'daily-13',
    title: '낮술',
    date: 'Daily 13',
    caption: '행궁동에서의 낮술',
    media: {
      type: 'image',
      src: dailyAsset('daily-13.jpg'),
    },
  },
  {
    id: 'daily-14',
    title: '광교박물관',
    date: 'Daily 14',
    caption: '영민 ❤️ 선미',
    media: {
      type: 'image',
      src: dailyAsset('daily-14.jpg'),
    },
  },
  {
    id: 'daily-15',
    title: '주짓떼로',
    date: 'Daily 15',
    caption: '화이트벨트 이선미',
    media: {
      type: 'image',
      src: dailyAsset('daily-15.jpg'),
    },
  },
  {
    id: 'daily-16',
    title: '영민',
    date: 'Daily 16',
    caption: '해맑',
    media: {
      type: 'image',
      src: dailyAsset('daily-16.jpg'),
    },
  },
  {
    id: 'daily-17',
    title: '용인FC 직관',
    date: 'Daily 17',
    caption: '용인 vs 성남',
    media: {
      type: 'image',
      src: dailyAsset('daily-17.jpg'),
    },
  },
  {
    id: 'daily-18',
    title: '택슐랭',
    date: 'Daily 18',
    caption: '택슐랭 마라톤 완주',
    media: {
      type: 'image',
      src: dailyAsset('daily-18.jpg'),
    },
  },
  {
    id: 'daily-19',
    title: '택슐랭',
    date: 'Daily 19',
    caption: '택슐랭 마라톤 완주 후 브런치',
    media: {
      type: 'image',
      src: dailyAsset('daily-19.jpg'),
    },
  },
  {
    id: 'daily-20',
    title: 'ㅋㅋㅋ',
    date: 'Daily 20',
    caption: 'ㅋㅋㅋㅋㅋㅋ',
    media: {
      type: 'image',
      src: dailyAsset('daily-20.jpg'),
    },
  },
  {
    id: 'daily-21',
    title: '영민팬티',
    date: 'Daily 21',
    caption: '오싹오싹 팬티',
    media: {
      type: 'image',
      src: dailyAsset('daily-21.jpg'),
    },
  },
  {
    id: 'daily-22',
    title: '가위바위보',
    date: 'Daily 22',
    caption: '출발.',
    media: {
      type: 'video',
      src: dailyAsset('daily-22.mp4'),
    },
  },
];
