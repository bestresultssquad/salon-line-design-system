import type { ViewProps } from 'react-native';

export interface Props extends ViewProps {
  title: string;
  linkText: string;
  linkOnPress: () => void;
}
