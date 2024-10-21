import { View } from 'react-native';
import type { Meta } from '@storybook/react';
import Counter from './index';
import { useState } from 'react';

const CounterDefault = (props: any) => {
  const [value, setValue] = useState(0);

  return (
    <Counter
      {...props}
      value={value}
      onIncrement={() => setValue(value + 1)}
      onDecrement={() => setValue(value - 1)}
    />
  );
};

const Component: Meta<typeof Counter> = {
  title: 'Counter',
  component: CounterDefault,
  argTypes: {
    checked: { control: { type: 'boolean' } },
    children: { control: { type: 'text' } },
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
