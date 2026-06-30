const baseUrl = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export const publicAsset = (path: string) =>
  encodeURI(`${baseUrl}${path.replace(/^\/+/, '').normalize('NFD')}`);

export const memoryAsset = (path: string) =>
  publicAsset(`images/memories/${path}`);

export const decorationAsset = (path: string) =>
  publicAsset(`images/decorations/${path}`);

export const audioAsset = (path: string) => publicAsset(`audio/${path}`);

export const responsiveWebpSrcSet = (src: string) => {
  if (!src.endsWith('-1600.webp')) {
    return undefined;
  }

  return `${src.replace('-1600.webp', '-800.webp')} 800w, ${src} 1600w`;
};
