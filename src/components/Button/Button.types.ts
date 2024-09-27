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
  | 'quarck';

export type ButtonVariant =
  | 'primary'
  | 'outline'
  | 'disabled'
  | 'cart'
  | 'action';

export interface Props extends TouchableOpacityProps {
  textVariant?: TypographyVariants;
  children?: string;
  textSizeVariant?: SizeVariants;
  textColor?: string;
  size: ButtonSize;
  variant: ButtonVariant;
  onlyIcon?: boolean;
  iconType?: IconTypes;
  leftIcon?: boolean;
  iconStrokeColor?: string;
}
