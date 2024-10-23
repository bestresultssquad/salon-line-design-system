import { Text, View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './index';
import { useState } from 'react';

const CheckboxDefault = (props: any) => {
  const [checked, setChecked] = useState(false);

  return <Checkbox {...props} onPress={() => setChecked(!checked)} />;
};

const Component: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: CheckboxDefault,
  argTypes: {
    checked: { control: { type: 'boolean' } },
    children: { control: { type: 'text' } },
    variant: { control: { type: 'select' }, options: ['default', 'rounded'] },
  },

  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const Default: StoryObj<typeof CheckboxDefault> = {};
Default.args = {
  checked: false,
  children: <Text>Checkbox</Text>,
};

export default Component;
