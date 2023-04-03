const PUBLIC_ASSET_PATH = process.env.NEXT_PUBLIC_ASSET_BASE_URL + '/public';

export const getStaticAssetPath = (imagePath: string, width?: number) => {
  let assetUrl = imagePath;
  if (!assetUrl.includes('https')) {
    assetUrl = PUBLIC_ASSET_PATH + imagePath;
  }
  if (width) assetUrl = `${assetUrl}?w=${width}`;
  return assetUrl;
};
