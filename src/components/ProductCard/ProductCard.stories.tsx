import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from './index';

const Component: Meta<typeof ProductCard> = {
  title: 'ProductCard',
  component: ProductCard,
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
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const Primary: StoryObj<typeof ProductCard> = {};
Primary.args = {
  imageUri: 'https://picsum.photos/200/300',
  title: 'Product Card',
  subtitle: 'Subtitle',
  price: 'R$100',
  oldPrice: 'R$200',
  discount: '50%',
  ratingCount: 0,
  rating: 4,
  favorited: false,
  chipText: '10% OFF',
  onPressFavorite: () => console.log('FavoriteButton pressed'),
  onPress: () => console.log('ProductCard pressed'),
};

export default Component;
