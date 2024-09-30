export type PaginatorVariant = 'onboarding' | 'default';

export interface Props {
  data: any;
  scrollX: any;
  variant?: PaginatorVariant;
  testID?: string;
}
