import defaultTheme from '../default';
import baseColors from '../default/baseColors';

const lightTheme = {
  themed: {
    background: baseColors.white,
    backgroundSecondary: baseColors.gray[50],
    backgroundTertiary: baseColors.gray[100],
    inputBackground: baseColors.white,
    inverseBackground: baseColors.black,
    text: baseColors.black,
    textSecondary: baseColors.gray[600],
    inverseText: baseColors.white,
    shadowColor: baseColors.black,
    borderColor: baseColors.gray[200],
    success: baseColors.green[700],
  },
  ...defaultTheme,
};

export default lightTheme;
