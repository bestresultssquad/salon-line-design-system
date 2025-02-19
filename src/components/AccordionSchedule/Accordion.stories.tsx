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
  title: 'AccordionSchedule',
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

export default Component;
