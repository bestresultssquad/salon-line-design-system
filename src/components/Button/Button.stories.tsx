import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const Component: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'outline', 'disabled', 'cart', 'action'],
      control: { type: 'select' },
    },
    size: {
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

export default Component;

export const Primary: StoryObj<typeof Button> = {};
Primary.args = {
  children: 'Primary',
  variant: 'primary',
  size: 'small',
  textSizeVariant: 'medium',
};

export const Loading: StoryObj<typeof Button> = {};
Loading.args = {
  children: 'Primary',
  variant: 'primary',
  size: 'small',
  textSizeVariant: 'medium',
  loading: true,
};

export const Outline: StoryObj<typeof Button> = {};
Outline.args = {
  children: 'Outline',
  variant: 'outline',
  size: 'small',
  textSizeVariant: 'medium',
  textVariant: 'sm',
};

export const Disabled: StoryObj<typeof Button> = {};
Disabled.args = {
  children: 'Disabled',
  variant: 'disabled',
  size: 'small',
  textSizeVariant: 'semiBold',
  disabled: true,
  textVariant: 'sm',
};

export const OnlyIcon: StoryObj<typeof Button> = {};
OnlyIcon.args = {
  variant: 'primary',
  size: 'nano',
  onlyIcon: true,
};

export const Cart: StoryObj<typeof Button> = {};
Cart.args = {
  children: 'Adicionar',
  variant: 'cart',
  size: 'cart',
  textSizeVariant: 'semiBold',
  leftIcon: true,
  textVariant: 'sm',
};

export const Action: StoryObj<typeof Button> = {};
Action.args = {
  children: 'Action',
  variant: 'action',
  size: 'quarck',
  textSizeVariant: 'semiBold',
  textVariant: 'sm',
};

export const Link: StoryObj<typeof Button> = {};
Link.args = {
  children: 'Link',
  variant: 'link',
  size: 'nano',
  textSizeVariant: 'semiBold',
  textVariant: 'sm',
  textColor: 'blue',
};
