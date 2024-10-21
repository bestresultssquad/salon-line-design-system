import type { ViewProps } from 'react-native';

export type PaginatorVariant = 'onboarding' | 'default';

export interface Props extends ViewProps {
  data: any;
  scrollX: any;
  variant?: PaginatorVariant;
  testID?: string;
}
