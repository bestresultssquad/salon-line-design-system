import { Text, View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import AccordionPlayer from './index';
import { useSharedValue } from 'react-native-reanimated';

const AccordionCustom = (props: any) => {
  const open = useSharedValue(true);
  const muted = useSharedValue(true);
  return (
    <AccordionPlayer open={open} muted={muted} {...props}>
      <Text>Accordion</Text>
    </AccordionPlayer>
  );
};

const Component: Meta<typeof AccordionCustom> = {
  title: 'AccordionPlayer',
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
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          backgroundColor: 'white',
        }}
      >
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
