import type { IconsComponent } from './Icons';
import type { SvgProps } from 'react-native-svg';

export type IconTypes = keyof typeof IconsComponent;

export interface Props extends SvgProps {
  type?: IconTypes;
  width: number;
  height: number;
  stroke?: string;
  strokeWidth?: number;
}
