import { View } from 'react-native';
import {
  ThemeProvider,
  themes,
  Button,
} from '@bestresultssquad/salon-line-design-system';

export default function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <View style={{ flex: 1 }}>
        <Button />
      </View>
    </ThemeProvider>
  );
}
