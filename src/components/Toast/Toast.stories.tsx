import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Toast from './index';

const Component: Meta<typeof Toast> = {
  title: 'Toast',
  component: Toast,
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
    type: {
      control: { type: 'select' },
      options: ['warning', 'error', 'success'],
    },
  },

  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const Success: StoryObj<typeof Toast> = {};
Success.args = {
  title: 'Title',
  description: 'Description',
  type: 'success',
};

export const Warning: StoryObj<typeof Toast> = {};
Warning.args = {
  title: 'Title',
  description: 'Description',
  type: 'warning',
};

export const Error: StoryObj<typeof Toast> = {};
Error.args = {
  title: 'Title',
  description: 'Description',
  type: 'error',
};

export default Component;
