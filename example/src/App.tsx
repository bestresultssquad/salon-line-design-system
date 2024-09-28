import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native';
import { ProductCard } from '../../src/components';
import { ThemeProvider } from 'styled-components/native';
import light from '../../src/themes/light';
import { useState } from 'react';

function App() {
  const [loaded, error] = useFonts({
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  });

  const [favorited, setFavorited] = useState(false);

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
      }}
    >
      <ThemeProvider theme={light}>
        <ProductCard
          title="Kit Óleos de Tratamento Multifuncional Meu Liso Muito + Liso 60ml"
          image={require('./product1.png')}
          onFavoritePress={handleFavoritePress}
          onPress={() => {}}
          price="R$ 19,90"
          rating={4.5}
          ratingCount={120}
          oldPrice="R$ 32,90"
          chipText="10% OFF"
          favorited={favorited}
        />
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
