import defaultTheme from '../default';

const darkTheme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    gray: {
      100: '#F3F4F6',
      200: '#E5E7EB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      900: '#111827',
    },
    green: {
      700: '#008000',
    },
    purple: {
      500: '#BA4DDE',
    },
    pink: {
      600: '#DB2777',
    },
  },
  ...defaultTheme,
};

export default darkTheme;
