import { Text, View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import AccordionCheckout from './index';
import { useSharedValue } from 'react-native-reanimated';

const AccordionCustom = (props: any) => {
  const open = useSharedValue(false);
  return (
    <AccordionCheckout open={open} {...props}>
      <Text>Accordion</Text>
    </AccordionCheckout>
  );
};

const Component: Meta<typeof AccordionCustom> = {
  title: 'AccordionCheckout',
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
  subtitle: 'Button Title',
  variant: 'default',
  iconType: 'CreditCardIcon',
};

export default Component;
