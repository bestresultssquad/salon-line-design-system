import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import defaultTheme from '../themes/light';

const renderWithTheme = (children: any) => {
  return render(<ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>);
};

export { renderWithTheme };
