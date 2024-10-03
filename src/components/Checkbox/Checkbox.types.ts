import type { PropsWithChildren } from 'react';

export interface CheckboxProps extends PropsWithChildren {
  checked?: boolean;
  onPress: () => void;
}
