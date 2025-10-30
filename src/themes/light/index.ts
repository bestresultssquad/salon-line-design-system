import defaultTheme from '../default';
import baseColors from '../default/baseColors';

const lightTheme = {
  themed: {
    background: baseColors.white,
    inputBackground: baseColors.white,
    inverseBackground: baseColors.black,
    text: baseColors.black,
    inverseText: baseColors.white,
    shadowColor: baseColors.black,
    borderColor: baseColors.gray[200],
  },
  ...defaultTheme,
};

export default lightTheme;
