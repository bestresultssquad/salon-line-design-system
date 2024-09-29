import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native';
import { Icon, Input, ProductCard } from '../../src/components';
import { ThemeProvider } from 'styled-components/native';
import light from '../../src/themes/light';
import { useState } from 'react';
import { Icons } from '../../src/components/Icon/Icons';

function App() {
  const [loaded, error] = useFonts({
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  });

  const [favorited, setFavorited] = useState(false);
  const [value, setValue] = useState('');

  if (!loaded && !error) {
    return null;
  }

  const handleFavoritePress = () => {
    setFavorited(!favorited);
  };

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
        <Input
          value={value}
          onChangeText={(masked) => setValue(masked)}
          placeholder="Buscar produtos"
          mask={[
            '(',
            /\d/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
          leftIcon={
            <Icon height={24} width={24} type="search" stroke="#6B7280" />
          }
          rightIcon={
            <Icon height={24} width={24} type="share" stroke="black" />
          }
        />
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
