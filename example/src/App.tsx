import { Animated, SafeAreaView, View } from 'react-native';
import {
  ThemeProvider,
  themes,
  Button,
  Paginator,
} from '@bestresultssquad/salon-line-design-system';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useRef } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  const scrollX = useRef(new Animated.Value(0)).current;

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider theme={themes.light}>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          alignContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 16,
          marginHorizontal: 3,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Paginator data={[1, 2, 3, 4]} scrollX={scrollX} />

          <Button
            variant="outline"
            textSizeVariant="medium"
            textVariant="base"
            size="small"
          >
            Outline
          </Button>
        </View>
        <Button
          variant="primary"
          textSizeVariant="medium"
          textVariant="base"
          size="small"
        >
          Primary
        </Button>

        <Button
          variant="disabled"
          textSizeVariant="semiBold"
          textVariant="base"
          size="small"
          disabled
        >
          Disabled
        </Button>
        <Button
          variant="primary"
          textSizeVariant="semiBold"
          textVariant="base"
          size="nano"
          onlyIcon
        />
        <Button
          variant="cart"
          textSizeVariant="semiBold"
          textVariant="base"
          size="cart"
          leftIcon
        >
          Adicionar
        </Button>
        <Button
          variant="action"
          textSizeVariant="semiBold"
          textVariant="base"
          size="nano"
          iconType="arrowLeft"
          onlyIcon
          iconStrokeColor="black"
        />
        <Button
          variant="outline"
          textSizeVariant="semiBold"
          textVariant="base"
          size="quarck"
          iconType="arrowLeft"
        >
          Pular
        </Button>
      </SafeAreaView>
    </ThemeProvider>
  );
}
