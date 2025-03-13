import type { ImageRequireSource } from 'react-native';
import type { ChipVariant } from '../ChipComponent/Chip.types';

export type ProductCardHorizontalVariant = 'cart' | 'search';

export type ChipTextProps = {
  text: string;
  variant: ChipVariant;
};

export interface ProductCardHorizontalProps {
  oldPrice?: string;
  price: string;
  title: string;
  image?: ImageRequireSource;
  imageUri?: string;
  chipTexts?: ChipTextProps[];
  onPress: () => void;
  onIncrement?: () => void;
  onDecrement?: () => void;
  value?: number;
  variant?: ProductCardHorizontalVariant;
  label?: string;
  disabled?: boolean;
  disableIncrement?: boolean;
  disableDecrement?: boolean;
  type?: 'gift' | 'product';
  onPressCard?: () => void;
  enableHeader?: boolean;
}
