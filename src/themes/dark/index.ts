import defaultTheme from '../default';

const darkTheme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    gray: {
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      800: '#1F2937',
      900: '#111827',
    },
    green: {
      100: '#DCFCE7',
      200: '#BBF7D0',
      700: '#15803D',
      800: '#047857',
    },
    sky: {
      100: '#e0f2fe',
      700: '#0369a1',
    },
    blue: {
      100: '#DBEAFE',
      700: '#1D4ED8',
    },
    orange: {
      100: '#FFEDD5',
      700: '#C2410C',
    },
    purple: {
      100: '#FAF5FF',
      400: '#DAB2FF',
      500: '#BA4DDE',
      800: '#804FE8',
      900: '#5D0EC0',
    },
    pink: {
      600: '#DB2777',
      700: '#BE185D',
    },
    yellow: {
      100: '#FEF3C7',
      500: '#F59E0B',
      700: '#D97706',
    },
    red: {
      500: '#FF0000',
      600: '#C10007',
    },
  },
  ...defaultTheme,
};

export default darkTheme;
