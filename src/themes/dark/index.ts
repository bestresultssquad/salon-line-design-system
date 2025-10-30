import defaultTheme from '../default';
import baseColors from '../default/baseColors';

const darkTheme = {
  themed: {
    background: baseColors.gray[900],
    inputBackground: baseColors.gray[800],
    inverseBackground: baseColors.white,
    text: baseColors.white,
    shadowColor: baseColors.white,
    borderColor: baseColors.gray[800],
  },
  ...defaultTheme,
};

export default darkTheme;
