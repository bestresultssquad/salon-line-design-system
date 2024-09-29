import styledDefault, { ThemeProvider } from 'styled-components/native';
import themes from './themes';
import type { DefaultThemeDesignSystem } from './configs/styled';

export * from './components';

const styled = styledDefault;

export { styled, ThemeProvider, themes };
export type { DefaultThemeDesignSystem };
