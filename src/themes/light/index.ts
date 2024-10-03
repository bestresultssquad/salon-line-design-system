import defaultTheme from '../default';

const lightTheme = {
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
    },
    purple: {
      500: '#BA4DDE',
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
    },
  },
  ...defaultTheme,
};

export default lightTheme;
