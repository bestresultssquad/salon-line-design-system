import styledDefault, { ThemeProvider } from 'styled-components/native';
import themes from './themes';
import type { DefaultThemeDesignSystem } from './configs/styled';
import BottomSheet from '@gorhom/bottom-sheet';
import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';
import type { ToastType } from './components/Toast/Toast.types';
import { timeElapsed } from './utils/getTimeElapsed';
import {
  getFontSize,
  getDeviceType,
  getScreenSizeCategory,
} from './utils/fontScale';

export * from './components';
import * as bottomSheetModule from '@gorhom/bottom-sheet';
export * from './lottie';

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
  getFontSize,
  getDeviceType,
  getScreenSizeCategory,
};
export type { DefaultThemeDesignSystem, ToastType };
