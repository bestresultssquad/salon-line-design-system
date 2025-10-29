import defaultTheme from '../default';
import baseColors from '../default/baseColors';

const lightTheme = {
  themed: {
    background: baseColors.white,
    inputBackground: baseColors.white,
    inverseBackground: baseColors.black,
    text: baseColors.black,
  },
  ...defaultTheme,
};

export default lightTheme;
