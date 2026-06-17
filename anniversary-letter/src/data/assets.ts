const memoryImageRoot = '/images/memories';

export const memoryAsset = (path: string) =>
  `${memoryImageRoot}/${path.normalize('NFD')}`;
