import type { PropsWithChildren } from 'react';

export type CheckBoxVariant = 'default' | 'rounded';

export interface CheckboxProps extends PropsWithChildren {
  checked?: boolean;
  onPress: () => void;
  variant: CheckBoxVariant;
}
