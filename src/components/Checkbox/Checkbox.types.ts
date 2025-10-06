import type { PropsWithChildren } from 'react';

export type CheckBoxVariant = 'default' | 'rounded' | 'sm';

export interface CheckboxProps extends PropsWithChildren {
  checked?: boolean;
  onPress: () => void;
  variant: CheckBoxVariant;
  disabled?: boolean;
  checkedColor?: string;
}
