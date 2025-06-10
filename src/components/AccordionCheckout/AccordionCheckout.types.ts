import type { PropsWithChildren } from 'react';
import type { SharedValue } from 'react-native-reanimated';
import type { IconTypes } from '../Icon/Icon.types';

export interface AccordionItemProps {
  duration?: number;
  isExpanded: SharedValue<boolean>;
  children: React.ReactNode;
  viewKey: string;
}

export interface AccordionCheckoutProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  open?: SharedValue<boolean>;
  handlePress?: () => void;
  iconSize?: number;
  iconType: IconTypes;
  checked: boolean;
  withoutOpen?: boolean;
  disabled?: boolean;
}
