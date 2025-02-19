import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Icon from '../Icon/index';
import ChipFlashOffer from './index';

const Component: Meta<typeof ChipFlashOffer> = {
  title: 'ChipFlashOffer',
  component: ChipFlashOffer,
  argTypes: {
    label: { control: { type: 'text' } },
  },

  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const Default: StoryObj<typeof Icon> = {};
Default.args = {
  label: 'ChipFlashOffer',
};

export default Component;
