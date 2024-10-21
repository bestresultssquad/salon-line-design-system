import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import ProductExibition from './index';
import type { ProductExibitionOnPressCallback } from './ProductExibition.types';

export const ProductExibitionDefault = (props: any) => {
  const handlePress = ({ id, type }: ProductExibitionOnPressCallback) => {
    console.log('ProductExibitionDefault', id, type);
  };

  return <ProductExibition {...props} onPress={handlePress} />;
};

const Component: Meta<typeof ProductExibition> = {
  title: 'ProductExibition',
  component: ProductExibition,
  argTypes: {},

  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const Primary: StoryObj<typeof ProductExibition> = {};
Primary.args = {};

export default Component;
