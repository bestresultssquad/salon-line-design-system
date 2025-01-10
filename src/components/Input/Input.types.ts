import type React from 'react';
import type { MaskInputProps } from 'react-native-mask-input';

export type InputVariant = 'sm' | 'md';

export interface InputProps extends MaskInputProps {
  value: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  inputLabel?: string;
  error?: string;
  clickable?: boolean;
  variant?: InputVariant;
}
