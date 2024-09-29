import type React from 'react';
import type { MaskInputProps } from 'react-native-mask-input';

export interface InputProps extends MaskInputProps {
  value: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  inputLabel?: string;
}
