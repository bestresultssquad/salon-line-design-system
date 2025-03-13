import type { ImageRequireSource } from 'react-native';

export interface tagProps {
  text: string;
  color: string;
  visible?: boolean;
}

export interface ProductCardProps {
  oldPrice?: string;
  price: string;
  title: string;
  image?: ImageRequireSource;
  imageUri?: string;
  onPress: () => void;
  onFavoritePress: () => void;
  onCardPress: () => void;
  rating: number;
  ratingCount: number;
  chipText?: string;
  favorited?: boolean;
  disabled?: boolean;
  tags?: tagProps[];
}
