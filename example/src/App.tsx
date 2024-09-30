import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native';
import { BannerImage, Icon, Input, ProductCard } from '../../src/components';
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

  const bannerImages = [
    {
      imageUrl: 'https://via.placeholder.com/327x320',
      altText: 'Banner 1',
    },
    {
      imageUrl: 'https://via.placeholder.com/327x320',
      altText: 'Banner 2',
    },
    {
      imageUrl: 'https://via.placeholder.com/327x320',
      altText: 'Banner 3',
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingLeft: 24,
      }}
    >
      <ThemeProvider theme={light}>
        <BannerImage bannerObject={bannerImages} />
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
