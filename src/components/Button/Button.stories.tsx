import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const Meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'outline', 'disabled', 'cart', 'action'],
      control: { type: 'select' },
    },
    sizeVariant: {
      options: ['small', 'medium', 'large', 'nano', 'cart', 'quarck'],
      control: { type: 'select' },
    },
    textColor: { control: { type: 'color' } },
    textVariant: {
      options: ['3xs', '2xs', 'xs', 'sm', 'base', 'lg'],
      control: { type: 'select' },
    },
    textSizeVariant: {
      options: ['regular', 'medium', 'semiBold'],
      control: { type: 'select' },
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

export default Meta;

export const Primary: StoryObj<typeof Button> = {};
Primary.args = {
  children: 'Primary',
  variant: 'primary',
  sizeVariant: 'small',
  textSizeVariant: 'medium',
};

export const Outline: StoryObj<typeof Button> = {};
Outline.args = {
  children: 'Outline',
  variant: 'outline',
  sizeVariant: 'small',
  textSizeVariant: 'medium',
};

export const Disabled: StoryObj<typeof Button> = {};
Disabled.args = {
  children: 'Disabled',
  variant: 'disabled',
  sizeVariant: 'small',
  textSizeVariant: 'semiBold',
  disabled: true,
};

export const OnlyIcon: StoryObj<typeof Button> = {};
OnlyIcon.args = {
  variant: 'primary',
  sizeVariant: 'nano',
  onlyIcon: true,
};

export const Cart: StoryObj<typeof Button> = {};
Cart.args = {
  children: 'Adicionar',
  variant: 'cart',
  sizeVariant: 'cart',
  textSizeVariant: 'semiBold',
  leftIcon: true,
};

export const Action: StoryObj<typeof Button> = {};
Action.args = {
  children: 'Action',
  variant: 'action',
  sizeVariant: 'quarck',
  textSizeVariant: 'semiBold',
};
