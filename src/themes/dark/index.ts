import defaultTheme from '../default';
import baseColors from '../default/baseColors';

const darkTheme = {
  themed: {
    background: '#030712',
    backgroundSecondary: '#101828',
    backgroundTertiary: '#1E2939',
    inputBackground: baseColors.gray[800],
    inverseBackground: baseColors.white,
    text: baseColors.white,
    inverseText: baseColors.black,
    shadowColor: baseColors.white,
    borderColor: baseColors.gray[800],
    success: baseColors.green[500],
  },
  ...defaultTheme,
};

export default darkTheme;
