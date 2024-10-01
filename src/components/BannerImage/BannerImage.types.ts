export type BannerObject = {
  imageUrl: string;
  altText: string;
  action?: () => void;
};

export type BannerVariant = 'sm' | 'md';

export interface BannerImageProps {
  bannerObject: BannerObject[];
  bannerVariant?: BannerVariant;
}
