import type React from 'react';
import type { TextProps } from 'react-native';

export type TypographyVariants = '3xs' | '2xs' | 'xs' | 'sm' | 'base' | 'lg';

export type SizeVariants = 'regular' | 'medium' | 'semiBold';

export interface Props extends TextProps {
  variant: TypographyVariants;
  children: string | React.ReactNode;
  sizeVariant: SizeVariants;
  color?: string;
}
