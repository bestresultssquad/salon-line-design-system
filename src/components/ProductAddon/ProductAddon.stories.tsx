import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import ProductAddon from './index';

const Component: Meta<typeof ProductAddon> = {
  title: 'ProductAddon',
  component: ProductAddon,
  argTypes: {
    image: {
      control: {
        type: 'text',
      },
    },
    imageUri: {
      control: {
        type: 'text',
      },
    },
    title: { control: { type: 'text' } },
    subtitle: { control: { type: 'text' } },
    price: { control: { type: 'text' } },
    oldPrice: { control: { type: 'text' } },
    discount: { control: { type: 'text' } },
    ratingCount: { control: { type: 'number' } },
    rating: { control: { type: 'number' } },
    favorited: { control: { type: 'boolean' } },
    chipText: { control: { type: 'text' } },
    onPressFavorite: { action: 'pressed' },
    onPress: { action: 'pressed' },
  },

  decorators: [
    (Story: any) => (
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          paddingHorizontal: 24,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export const Primary: StoryObj<typeof ProductAddon> = {};
Primary.args = {
  imageUri: 'https://picsum.photos/200/300',
  title:
    'Kit Cremes Modelador Natural e Forte #todecacho Cachos dos Sonhos 500ml',
  subtitle: 'Subtitle',
  price: 'R$100',
  oldPrice: 'R$200',
  discount: '50%',
  onPress: () => console.log('ProductCard pressed'),
  checked: true,
};

export default Component;
