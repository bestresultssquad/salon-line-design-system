export type BannerObject = {
  imageUrl: string;
  altText: string;
  action?: () => void;
};

export interface BannerImageProps {
  bannerObject: BannerObject[];
}
