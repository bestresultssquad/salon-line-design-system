import type { IconTypes } from '../Icon/Icon.types';

export interface MenuItemProps {
  leftIcon: IconTypes;
  title: string;
  onPress: () => void;
  useSwitch?: boolean;
  strokeWidth?: number;
}
