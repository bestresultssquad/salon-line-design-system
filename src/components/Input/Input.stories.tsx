import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Input from './index';
import { useState } from 'react';
import Icon from '../Icon';

const InputDefault = (props: any) => {
  const [value, setValue] = useState(props.value);

  return (
    <Input {...props} value={value} onChangeText={(text) => setValue(text)} />
  );
};

const Component: Meta<typeof Input> = {
  title: 'Input',
  component: InputDefault,
  argTypes: {
    leftIcon: { control: { type: 'text' } },
    rightIcon: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
    secureTextEntry: { control: { type: 'boolean' } },
    onChangeText: { action: 'changed' },
    editable: { control: { type: 'boolean' } },
    clickable: { control: { type: 'boolean' } },
  },

  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const Default: StoryObj<typeof Input> = {};
Default.args = {
  placeholder: 'Input',
  value: '',
  secureTextEntry: false,
  editable: true,
};

export const Disabled: StoryObj<typeof Input> = {};
Disabled.args = {
  placeholder: 'Input',
  value: '',
  secureTextEntry: false,
  editable: false,
  clickable: true,
};

export const Password: StoryObj<typeof Input> = {};
Password.args = {
  placeholder: 'Password',
  value: '',
  secureTextEntry: true,
  editable: true,
  rightIcon: (
    <Icon type="PasswordIcon" width={24} height={24} color={'black'} />
  ),
};

export const ErrorState: StoryObj<typeof Input> = {};
ErrorState.args = {
  placeholder: 'Error',
  value: '',
  secureTextEntry: false,
  editable: true,
  error: 'Error message',
  rightIcon: (
    <Icon type="PasswordIcon" width={24} height={24} color={'black'} />
  ),
};

export default Component;
