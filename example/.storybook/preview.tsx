import React from 'react';
import type { Preview } from '@storybook/react';
import { View } from 'moti';
import { ThemeProvider } from 'styled-components/native';
import light from '../../src/themes/light';
import { Dimensions } from 'react-native';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story, { parameters }) => (
      <View
        style={{
          flex: 1,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          padding: 8,
          backgroundColor: 'white',
        }}
      >
        <ThemeProvider theme={light}>
          <Story />
        </ThemeProvider>
      </View>
    ),
  ],
};

export default preview;
