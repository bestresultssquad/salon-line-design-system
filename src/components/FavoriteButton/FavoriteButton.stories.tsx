import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Icon from '../Icon/index';
import FavoriteButton from './index';

const Component: Meta<typeof FavoriteButton> = {
  title: 'FavoriteButton',
  component: FavoriteButton,
  argTypes: {
    favorited: { control: { type: 'boolean' } },
    onPress: { action: 'pressed' },
  },

  decorators: [
    (Story: any) => (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          position: 'relative',
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export const Default: StoryObj<typeof Icon> = {};
Default.args = {
  onPress: () => console.log('FavoriteButton pressed'),
  favorited: false,
};

export default Component;
