import type { ViewProps } from 'react-native';
import type {
  SizeVariants,
  TypographyVariants,
} from '../Typography/Typography.types';

export type ChipVariant = 'primary' | 'outlined';
export interface ChipProps extends ViewProps {
  label: string;
  textVariant?: TypographyVariants;
  textSizeVariant?: SizeVariants;
  variant?: ChipVariant;
}
