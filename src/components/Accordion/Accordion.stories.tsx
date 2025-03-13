import { Text, View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './index';
import { useSharedValue } from 'react-native-reanimated';

const AccordionCustom = (props: any) => {
  const open = useSharedValue(false);
  return (
    <Accordion open={open} {...props}>
      <Text>Accordion</Text>
    </Accordion>
  );
};

const Component: Meta<typeof AccordionCustom> = {
  title: 'Accordion',
  component: AccordionCustom,
  argTypes: {
    title: { control: { type: 'text' } },
    buttonTitle: { control: { type: 'text' } },
    withoutOpen: { control: { type: 'boolean' } },
    variant: {
      control: { type: 'select' },
      options: ['default', 'reviews', 'recurringPurchase'],
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

export const Default: StoryObj<typeof AccordionCustom> = {};
Default.args = {
  title: 'Title',
  buttonTitle: 'Button Title',
  variant: 'default',
};

export const Reviews: StoryObj<typeof AccordionCustom> = {};
Reviews.args = {
  title: 'Reviews',
  buttonTitle: 'Button Title',
  variant: 'reviews',
};

export const RecurringPurchase: StoryObj<typeof AccordionCustom> = {};
RecurringPurchase.args = {
  title: 'RecurringPurchase',
  buttonTitle: 'Button Title',
  variant: 'recurringPurchase',
  textColor: 'purple',
  textRight: '+10% OFF',
};

export const SubCategory: StoryObj<typeof AccordionCustom> = {};
SubCategory.args = {
  title: 'SubCategory',
  buttonTitle: 'Button Title',
  variant: 'subCategory',
};

export const Category: StoryObj<typeof AccordionCustom> = {};
Category.args = {
  title: 'Category',
  buttonTitle: 'Button Title',
  variant: 'categories',
};

export default Component;
