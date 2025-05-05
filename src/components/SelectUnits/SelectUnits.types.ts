import type { ViewProps } from 'react-native';

export interface Props extends ViewProps {
  onSelectPress?: () => void;
  value?: number;
}
