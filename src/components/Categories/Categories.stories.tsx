import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Categories from './index';

const Component: Meta<typeof Categories> = {
  title: 'Categories',
  component: Categories,
  argTypes: {
    categories: { control: { type: 'array' } },
  },

  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const Default: StoryObj<typeof Categories> = {};
Default.args = {
  categories: [
    { id: 1, text: 'Category 1' },
    { id: 2, text: 'Category 2' },
    { id: 3, text: 'Category 3' },
    { id: 4, text: 'Category 4' },
    { id: 5, text: 'Category 5' },
    { id: 6, text: 'Category 6' },
  ],
  onPress: (callback: any) => console.log(callback),
  variant: 'default',
};

export const Primary: StoryObj<typeof Categories> = {};
Primary.args = {
  categories: [
    { id: 1, text: 'Category 1' },
    { id: 2, text: 'Category 2' },
    { id: 3, text: 'Category 3' },
    { id: 4, text: 'Category 4' },
    { id: 5, text: 'Category 5' },
    { id: 6, text: 'Category 6' },
  ],
  onPress: (callback: any) => console.log(callback),
  variant: 'primary',
};

export const DisableSelection: StoryObj<typeof Categories> = {};
DisableSelection.args = {
  categories: [
    { id: 1, text: 'Category 1' },
    { id: 2, text: 'Category 2' },
    { id: 3, text: 'Category 3' },
    { id: 4, text: 'Category 4' },
    { id: 5, text: 'Category 5' },
    { id: 6, text: 'Category 6' },
  ],
  onPress: (callback: any) => console.log(callback),
  variant: 'primary',
  disableSelection: true,
};

export default Component;
