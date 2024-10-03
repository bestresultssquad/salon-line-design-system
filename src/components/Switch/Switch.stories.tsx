import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Switch from '.';
import { useState } from 'react';

const SwitchDefault = (props: any) => {
  const [checked, setChecked] = useState(false);

  return <Switch {...props} onPress={() => setChecked(!checked)} />;
};

const Component: Meta<typeof SwitchDefault> = {
  title: 'Switch',
  component: SwitchDefault,
  argTypes: {
    active: { control: { type: 'boolean' } },
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

export const Default: StoryObj<typeof SwitchDefault> = {};
Default.args = {
  active: false,
};
