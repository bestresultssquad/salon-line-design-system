import type { TouchableOpacityProps } from 'react-native';
import type {
  SizeVariants,
  TypographyVariants,
} from '../Typography/Typography.types';
import type { IconTypes } from '../Icon/Icon.types';

export type ButtonSize =
  | 'small'
  | 'medium'
  | 'large'
  | 'nano'
  | 'cart'
  | 'quarck'
  | 'onboarding'
  | 'filter';

export type ButtonVariant =
  | 'primary'
  | 'outline'
  | 'cart'
  | 'action'
  | 'favorite'
  | 'onboarding'
  | 'filter'
  | 'link';

export interface Props extends TouchableOpacityProps {
  textVariant?: TypographyVariants;
  children?: string | React.ReactNode;
  textSizeVariant?: SizeVariants;
  textColor?: string;
  size: ButtonSize;
  variant: ButtonVariant;
  onlyIcon?: boolean;
  iconType?: IconTypes;
  leftIcon?: boolean;
  iconStrokeColor?: string;
  fullRounded?: boolean;
  iconSize?: number;
  iconFill?: string;
  customIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
}
