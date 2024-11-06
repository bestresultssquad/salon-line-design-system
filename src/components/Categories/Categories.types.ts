import type { ViewProps } from 'react-native';

export type CategoriesVariant = 'default' | 'primary';

export type CategoriesOnPressCallback = {
  id: number;
  text: string;
};

export interface CategoriesProps extends ViewProps {
  categories: Array<{ id: number; text: string }>;
  onPress: (callback: CategoriesOnPressCallback) => void;
  variant: CategoriesVariant;
  disableSelection?: boolean;
}
