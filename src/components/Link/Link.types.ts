import type { PropsWithChildren } from 'react';
import type {
  SizeVariants,
  TypographyVariants,
} from '../Typography/Typography.types';

export interface LinkProps extends PropsWithChildren {
  typographySizeVariant?: SizeVariants;
  typographyVariant?: TypographyVariants;
  onPress?: () => void;
  disabled?: boolean;
  typographyColor?: string;
}
