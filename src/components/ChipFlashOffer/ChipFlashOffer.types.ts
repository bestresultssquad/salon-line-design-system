import type { ViewProps } from 'react-native';
import type {
  SizeVariants,
  TypographyVariants,
} from '../Typography/Typography.types';

export interface ChipFlashOfferProps extends ViewProps {
  label: string;
  textVariant?: TypographyVariants;
  textSizeVariant?: SizeVariants;
}
