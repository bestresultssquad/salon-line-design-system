import 'styled-components/native';

export type Colors = {
  black: string;
  white: string;
  gray: {
    100: string;
    400: string;
    500: string;
    600: string;
    900: string;
  };
  green: {
    700: string;
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
};

export type Typography = {
  '3xs': Fonts;
  '2xs': Fonts;
  'xs': Fonts;
  'sm': Fonts;
  'base': Fonts;
  'lg': Fonts;
};

export type Spacing = {
  quarck: number;
  nano: number;
  xxxxs: number;
  xxxs: number;
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
  huge: number;
  giant: number;
};

export interface DefaultThemeDesignSystem {
  colors: Colors;
  typography: Typography;
  spacing: Spacing;
}

declare module 'styled-components/native' {
  export interface DefaultTheme extends DefaultThemeDesignSystem {}
}
