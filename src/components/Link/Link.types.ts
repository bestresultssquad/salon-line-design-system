import type {
  SizeVariants,
  TypographyVariants,
} from '../Typography/Typography.types';

export interface LinkProps {
  typographySizeVariant?: SizeVariants;
  typographyVariant?: TypographyVariants;
  onPress?: () => void;
}
