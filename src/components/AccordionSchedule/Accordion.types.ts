import type { PropsWithChildren } from 'react';
import type { SharedValue } from 'react-native-reanimated';

export interface AccordionItemProps {
  duration?: number;
  isExpanded: SharedValue<boolean>;
  children: React.ReactNode;
  viewKey: string;
}

export interface AccordionProps extends PropsWithChildren {
  title: string;
  buttonTitle?: string;
  open?: SharedValue<boolean>;
  textRight?: string;
  textColor?: string;
  checked?: boolean;
  handlePressSwitch?: () => void;
  withoutOpen?: boolean;
  number?: number;
}
