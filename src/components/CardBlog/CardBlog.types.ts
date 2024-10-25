import type { ViewProps } from 'react-native';

export type CardBlogVariant = 'horizontal' | 'vertical';
export interface CardBlogProps extends ViewProps {
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  variant: CardBlogVariant;
  onCardPress: () => void;
}
