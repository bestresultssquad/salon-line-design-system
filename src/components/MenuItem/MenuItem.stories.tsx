import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import MenuItem from './index';
import { IconsComponent } from '../Icon/Icons';

const Component: Meta<typeof MenuItem> = {
  title: 'MenuItem',
  component: MenuItem,
  argTypes: {
    onPress: { action: 'clicked' },
    title: { control: { type: 'text' } },
    useSwitch: { control: { type: 'boolean' } },
    leftIcon: {
      control: { type: 'select' },
      options: Object.keys(IconsComponent),
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

export const Default: StoryObj<typeof MenuItem> = {};
Default.args = {
  title: 'Title',
  useSwitch: false,
  leftIcon: 'CreditCardIcon',
};

export const WithSwitch: StoryObj<typeof MenuItem> = {};
WithSwitch.args = {
  title: 'Title',
  useSwitch: true,
  leftIcon: 'CreditCardIcon',
};

export default Component;
