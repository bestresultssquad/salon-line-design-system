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

export interface BannerImageProps {
  bannerObject: BannerObject[];
  fullWidth?: boolean;
  removeBorder?: boolean;
}
