import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Icon from '../Icon/index';
import Chip from './index';

const Component: Meta<typeof Chip> = {
  title: 'Chip',
  component: Chip,
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
  label: 'Chip',
};

export default Component;
