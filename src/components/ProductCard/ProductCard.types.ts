import type { ImageSourcePropType } from 'react-native';

export interface ProductCardProps {
  oldPrice?: string;
  price: string;
  title: string;
  image: ImageSourcePropType;
  onPress: () => void;
  onFavoritePress: () => void;
  rating: number;
  ratingCount: number;
  chipText?: string;
  favorited?: boolean;
}
