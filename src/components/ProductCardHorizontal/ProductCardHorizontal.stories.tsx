import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import ProductCardHorizontal from './index';
import ProductCardHorizontalSkeleton from './ProductCardHorizontal.skeleton';

export const Skeleton = () => {
  return <ProductCardHorizontalSkeleton />;
};

const Component: Meta<typeof ProductCardHorizontal> = {
  title: 'ProductCardHorizontal',
  component: ProductCardHorizontal,
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
    type: { control: { type: 'text' } },
    chipTexts: { control: { type: 'object' } },
    title: { control: { type: 'text' } },
    subtitle: { control: { type: 'text' } },
    price: { control: { type: 'text' } },
    oldPrice: { control: { type: 'text' } },
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

export const Cart: StoryObj<typeof ProductCardHorizontal> = {};
Cart.args = {
  imageUri: 'https://picsum.photos/200/300',
  title:
    'Kit Kids com Shampoo + Condicionador + Creme para Pentear + Spray Desembaraçante Meu Lisinho Salon Line',
  subtitle: 'Subtitle',
  price: 'R$100',
  oldPrice: 'R$200',
  discount: '50%',
  chipTexts: [
    { text: 'Compra Recorrente', variant: 'primary' },
    { text: 'A cada 30 dias', variant: 'outlined' },
  ],
  variant: 'cart',
  type: 'product',
};

export const CartGift: StoryObj<typeof ProductCardHorizontal> = {};
CartGift.args = {
  imageUri: 'https://picsum.photos/200/300',
  title:
    'Kit Kids com Shampoo + Condicionador + Creme para Pentear + Spray Desembaraçante Meu Lisinho Salon Line',
  subtitle: 'Subtitle',
  price: 'R$100',
  oldPrice: 'R$200',
  discount: '50%',
  chipTexts: [
    { text: 'Compra Recorrente', variant: 'primary' },
    { text: 'A cada 30 dias', variant: 'outlined' },
  ],
  variant: 'cart',
  value: 5,
  type: 'gift',
};
export const Search: StoryObj<typeof ProductCardHorizontal> = {};
Search.args = {
  imageUri: 'https://picsum.photos/200/300',
  title:
    'Kit Kids com Shampoo + Condicionador + Creme para Pentear + Spray Desembaraçante Meu Lisinho Salon Line',
  price: 'R$100',
  oldPrice: 'R$200',
  discount: '50%',
  chipTexts: [
    { text: 'Compra Recorrente', variant: 'primary' },
    { text: 'A cada 30 dias', variant: 'outlined' },
  ],
  ratingCount: 5,
  rating: 4,
  onPress: () => console.log('ProductCard pressed'),
  onPressCard: () => console.log('Card pressed'),
  variant: 'search',
};

export default Component;
