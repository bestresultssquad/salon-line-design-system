import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import BannerImage from './index';

const Component: Meta<typeof BannerImage> = {
  title: 'BannerImage',
  component: BannerImage,
  argTypes: {
    bannerVariant: {
      options: ['sm', 'md', 'blog'],
      control: { type: 'select' },
    },
    bannerObject: {
      control: {
        type: 'object',
        options: [
          {
            imageUrl: 'https://picsum.photos/200/300',
            altText: 'Banner Image',
            action: () => console.log('Banner Image Clicked'),
          },
          {
            imageUrl: 'https://picsum.photos/200/300',
            altText: 'Banner Image',
            action: () => console.log('Banner Image Clicked'),
          },
          {
            imageUrl: 'https://picsum.photos/200/300',
            altText: 'Banner Image',
            action: () => console.log('Banner Image Clicked'),
          },
          {
            imageUrl: 'https://picsum.photos/200/300',
            altText: 'Banner Image',
            action: () => console.log('Banner Image Clicked'),
          },
        ],
      },
    },
    title: { control: { type: 'text' } },
    category: { control: { type: 'text' } },
    date: { control: { type: 'text' } },
    subtitle: { control: { type: 'text' } },
  },

  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const BannerSmall: StoryObj<typeof BannerImage> = {};
BannerSmall.args = {
  bannerVariant: 'sm',
  bannerObject: [
    {
      imageUrl: 'https://picsum.photos/200/300',
      altText: 'Banner Image',
      action: () => console.log('Banner Image Clicked'),
    },
  ],
};
export const BannerMedium: StoryObj<typeof BannerImage> = {};
BannerMedium.args = {
  bannerVariant: 'md',
  bannerObject: [
    {
      imageUrl: 'https://picsum.photos/200/300',
      altText: 'Banner Image',
      action: () => console.log('Banner Image Clicked'),
    },
  ],
};

export const BannerCarroussel: StoryObj<typeof BannerImage> = {};
BannerCarroussel.args = {
  bannerVariant: 'md',
  bannerObject: [
    {
      imageUrl: 'https://picsum.photos/200/300',
      altText: 'Banner Image',
      action: () => console.log('Banner Image Clicked'),
    },
    {
      imageUrl: 'https://picsum.photos/200/300',
      altText: 'Banner Image',
      action: () => console.log('Banner Image Clicked'),
    },
  ],
};

export const BannerBlog: StoryObj<typeof BannerImage> = {};
BannerBlog.args = {
  bannerVariant: 'blog',
  bannerObject: [
    {
      imageUrl: 'https://picsum.photos/327/320',
      altText: 'Banner Image',
      action: () => console.log('Banner Image Clicked'),
      title:
        'Maracujá é Salon Line: vem conhecer as novidades com cheirinho de fruta',
      category: 'Beleza',
      date: '2024-10-19T01:56:27',
      subtitle:
        'Quando falamos de cuidados capilares, a Salon Line é expert! Com produtos que conquistam milhares de corações, hoje queremos falar de uma novidade que vai encantar a família inteira: a linha Salon Line Maracujá! Imagine cuidar dos cachinhos das crianças com um cheirinho delicioso de maracujá, enquanto mantém os fios hidratados e saudáveis? Pois é, a Salon Line pensou em tudo isso. Vem conhecer e se apaixonar!',
    },
    {
      imageUrl: 'https://picsum.photos/327/320',
      altText: 'Banner Image',
      action: () => console.log('Banner Image Clicked'),
      title:
        'Maracujá é Salon Line: vem conhecer as novidades com cheirinho de fruta',
      category: 'Beleza',
      date: '2024-10-19T01:56:27',
      subtitle:
        'Quando falamos de cuidados capilares, a Salon Line é expert! Com produtos que conquistam milhares de corações, hoje queremos falar de uma novidade que vai encantar a família inteira: a linha Salon Line Maracujá! Imagine cuidar dos cachinhos das crianças com um cheirinho delicioso de maracujá, enquanto mantém os fios hidratados e saudáveis? Pois é, a Salon Line pensou em tudo isso. Vem conhecer e se apaixonar!',
    },
  ],
};

export default Component;
