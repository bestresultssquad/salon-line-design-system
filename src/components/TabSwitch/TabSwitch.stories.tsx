import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import TabSwitch from './index';

const Component: Meta<typeof TabSwitch> = {
  title: 'TabSwitch',
  component: TabSwitch,
  argTypes: {
    tabs: { control: { type: 'array' } },
  },

  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const Default: StoryObj<typeof TabSwitch> = {};
Default.args = {
  tabs: [
    { id: 1, text: 'Tab 1' },
    { id: 2, text: 'Tab 2' },
  ],
  onPress: (callback: any) => console.log(callback),
};

export default Component;
