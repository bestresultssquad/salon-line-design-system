import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import SelectUnits from './index';

const Component: Meta<typeof SelectUnits> = {
  title: 'SelectUnits',
  component: SelectUnits,
  argTypes: {},

  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const Default: StoryObj<typeof SelectUnits> = {};
Default.args = {};

export default Component;
