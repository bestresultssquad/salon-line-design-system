import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './index';

const Component: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    image: {
      control: {
        type: 'text',
      },
    },
    label: { control: { type: 'text' } },
    rightLabel: { control: { type: 'boolean' } },
    uri: {
      control: {
        type: 'text',
      },
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

export const Default: StoryObj<typeof Avatar> = {};
Default.args = {
  uri: 'https://picsum.photos/200/300',
  label: 'Avatar',
  rightLabel: false,
};

export const LabelRight: StoryObj<typeof Avatar> = {};
LabelRight.args = {
  uri: 'https://picsum.photos/200/300',
  label: 'Avatar',
  rightLabel: true,
};

export default Component;
