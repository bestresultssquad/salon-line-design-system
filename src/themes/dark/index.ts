import defaultTheme from '../default';
import baseColors from '../default/baseColors';

const darkTheme = {
  themed: {
    background: baseColors.black,
    inputBackground: baseColors.gray[800],
    inverseBackground: baseColors.white,
    text: baseColors.white,
  },
  ...defaultTheme,
};

export default darkTheme;
