import styledDefault, { ThemeProvider } from 'styled-components/native';
import themes from './themes';
import type { DefaultThemeDesignSystem } from './configs/styled';
import BottomSheet from '@gorhom/bottom-sheet';
import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';

export * from './components';
import * as bottomSheetModule from '@gorhom/bottom-sheet';

const styled = styledDefault;

export {
  styled,
  ThemeProvider,
  themes,
  BottomSheet,
  bottomSheetModule,
  MotiView,
  Skeleton,
};
export type { DefaultThemeDesignSystem };
