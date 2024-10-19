import type {
  SizeVariants,
  TypographyVariants,
} from '../Typography/Typography.types';

export interface ChipProps {
  label: string;
  textVariant?: TypographyVariants;
  textSizeVariant?: SizeVariants;
}
