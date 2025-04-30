import type { PropsWithChildren } from 'react';
import type { SharedValue } from 'react-native-reanimated';

export interface AccordionItemProps {
  duration?: number;
  isExpanded: SharedValue<boolean>;
  children: React.ReactNode;
  viewKey: string;
}

export type AccordionVariant =
  | 'default'
  | 'reviews'
  | 'recurringPurchase'
  | 'categories'
  | 'subCategory';

export interface AccordionProps extends PropsWithChildren {
  title: string;
  buttonTitle?: string;
  variant: AccordionVariant;
  open?: SharedValue<boolean>;
  textRight?: string;
  textColor?: string;
  checked?: boolean;
  handlePress?: () => void;
  withoutOpen?: boolean;
  iconSize?: number;
  invertIcon?: boolean;
}
