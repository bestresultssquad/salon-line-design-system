import type { ViewProps } from 'react-native';
import type {
  SizeVariants,
  TypographyVariants,
} from '../Typography/Typography.types';

export type ChipVariant = 'primary' | 'outlined';
export type ChipSize = 'small' | 'medium';

export interface ChipProps extends ViewProps {
  label: string;
  textVariant?: TypographyVariants;
  textSizeVariant?: SizeVariants;
  variant?: ChipVariant;
  size?: ChipSize;
  textColor?: string;
}
