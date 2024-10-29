import type { ViewProps } from 'react-native';

export type TabSwitchOnPressCallback = {
  id: number;
  text: string;
};

export interface TabSwitchProps extends ViewProps {
  onPress: (callback: TabSwitchOnPressCallback) => void;
  tabs: Array<{ id: number; text: string }>;
  animatedStyleContainer?: Array<any>;
}
