import type { ImageSourcePropType } from 'react-native';

export type BannerObject = {
  imageUrl?: string;
  imageFile?: ImageSourcePropType;
  altText: string;
  action?: () => void;
  title?: string;
  subtitle?: string;
  category?: string;
  date?: string;
};

export type BannerVariant = 'sm' | 'md' | 'blog';

export interface BannerImageProps {
  bannerObject: BannerObject[];
  bannerVariant?: BannerVariant;
  fullWidth?: boolean;
  removeBorder?: boolean;
}
