import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '.';

const Component: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
  argTypes: {
    variant: {
      options: ['3xs', '2xs', 'xs', 'sm', 'base', 'lg'],
      control: { type: 'select' },
    },
    sizeVariant: {
      options: ['regular', 'medium', 'semiBold'],
      control: { type: 'select' },
    },
    color: { control: { type: 'color' } },
  },

  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default Component;

export const LgSemiBold: StoryObj<typeof Typography> = {};
LgSemiBold.args = {
  children: 'Large SemiBold',
  variant: 'lg',
  sizeVariant: 'semiBold',
};

export const BaseRegular: StoryObj<typeof Typography> = {};
BaseRegular.args = {
  children: 'Base Regular',
  variant: 'base',
  sizeVariant: 'regular',
};

export const SmMedium: StoryObj<typeof Typography> = {};
SmMedium.args = {
  children: 'Small Medium',
  variant: 'sm',
  sizeVariant: 'medium',
};
