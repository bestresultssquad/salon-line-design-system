import type React from 'react';
import type { TextProps } from 'react-native';
import type { Typography } from '../../configs/styled';

export type TypographyVariants = keyof Typography;

export type SizeVariants = 'regular' | 'medium' | 'semiBold' | 'bold';

export interface Props extends TextProps {
  variant: TypographyVariants;
  children: string | React.ReactNode;
  sizeVariant: SizeVariants;
  color?: string;
}
