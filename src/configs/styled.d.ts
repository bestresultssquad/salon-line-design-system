import 'styled-components/native';

export type Colors = {
  black: string;
  white: string;
  gray: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    800: string;
    900: string;
  };
  green: {
    100: string;
    200: string;
    700: string;
  };
  sky: {
    100: string;
    700: string;
  };
  blue: {
    100: string;
    700: string;
  };
  orange: {
    100: string;
    700: string;
  };
  purple: {
    500: string;
    800: string;
  };
  pink: {
    600: string;
    700: string;
  };
  yellow: {
    100: string;
    500: string;
    700: string;
  };
  red: {
    500: string;
  };
};

type Fonts = {
  regular: {
    family: string;
    weight: string;
    size: number;
    lineHeight: number;
  };
  medium: {
    family: string;
    weight: string;
    size: number;
    lineHeight: number;
  };
  semiBold: {
    family: string;
    weight: string;
    size: number;
    lineHeight: number;
  };
  bold: {
    family: string;
    weight: string;
    size: number;
    lineHeight: number;
  };
};

export type Typography = {
  '3xs': Fonts;
  '2xs': Fonts;
  'xs': Fonts;
  'sm': Fonts;
  'base': Fonts;
  'lg': Fonts;
  'xl': Fonts;
  '2xl': Fonts;
  '3xl': Fonts;
};

export type Spacing = {
  quarck: 4;
  nano: 8;
  xxxxs: 12;
  xxxs: 14;
  xxs: 16;
  xs: 20;
  sm: 24;
  md: 32;
  lg: 40;
  xl: 48;
  xxl: 64;
  xxxl: 80;
  huge: 96;
  giant: 112;
};

export type Elevation = {
  md: {
    x: number;
    y: number;
    blur: number;
    spread: number;
    color: string;
  };
};

export interface DefaultThemeDesignSystem {
  colors: Colors;
  typography: Typography;
  spacing: Spacing;
  elevation: Elevation;
}

declare module 'styled-components/native' {
  export interface DefaultTheme extends DefaultThemeDesignSystem {}
}
