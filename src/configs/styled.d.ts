import 'styled-components/native';

export interface DefaultThemeDesignSystem {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  fonts: {
    primary: string;
  };
  fontSizes: {
    small: string;
    medium: string;
    large: string;
  };
  spacings: {
    xsmall: string;
    small: string;
    medium: string;
    large: string;
  };
}

declare module 'styled-components/native' {
  export interface DefaultTheme extends DefaultThemeDesignSystem {}
}
