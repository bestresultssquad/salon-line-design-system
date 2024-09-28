import type { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: 'Salon Line DS',
    slug: 'Salon Line DS',
    version: '1.0.0',
    orientation: 'portrait',
    userInterfaceStyle: 'light',
    splash: {
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'salonline.designsystem.example',
    },
    android: {
      adaptiveIcon: {
        backgroundColor: '#ffffff',
      },
      package: 'salonline.designsystem.example',
    },
    web: {},
    plugins: [
      [
        'expo-font',
        {
          fonts: [
            '../assets/fonts/Poppins-Medium.ttf',
            '../assets/fonts/Poppins-Regular.ttf',
            '../assets/fonts/Poppins-SemiBold.ttf',
          ],
        },
      ],
    ],
    extra: {
      storybookEnabled: process.env.STORYBOOK === 'true',
    },
  };
};
