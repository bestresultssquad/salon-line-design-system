import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Link from './index';

const Component: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
  argTypes: {
    children: { control: { type: 'text' } },
  },

  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const Primary: StoryObj<typeof Link> = {};
Primary.args = {
  children: 'Link',
};

export default Component;
