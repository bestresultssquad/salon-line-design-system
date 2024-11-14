import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Loading from './index';

const Component: Meta<typeof Loading> = {
  title: 'Loading',
  component: Loading,
  argTypes: {
    color: { control: { type: 'color' } },
    size: { control: { type: 'number' } },
  },

  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const Primary: StoryObj<typeof Loading> = {};
Primary.args = {
  color: 'black',
  size: 50,
};

export default Component;
