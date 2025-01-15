import styledDefault, { ThemeProvider } from 'styled-components/native';
import themes from './themes';
import type { DefaultThemeDesignSystem } from './configs/styled';
import BottomSheet from '@gorhom/bottom-sheet';
import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';
import type { ToastType } from './components/Toast/Toast.types';
import { timeElapsed } from './utils/getTimeElapsed';

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
  timeElapsed,
};
export type { DefaultThemeDesignSystem, ToastType };
