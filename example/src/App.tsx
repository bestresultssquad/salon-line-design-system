import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native';
import { Avatar, Icon, Input, ProductCard } from '../../src/components';
import { ThemeProvider } from 'styled-components/native';
import light from '../../src/themes/light';

function App() {
  const [loaded, error] = useFonts({
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 24,
      }}
    >
      <ThemeProvider theme={light}>
        <Avatar image={require('./influencer.jpeg')} label="Liso" />
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
