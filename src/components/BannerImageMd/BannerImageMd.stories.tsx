import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import BannerImage from './index';

const Component: Meta<typeof BannerImage> = {
  title: 'BannerImageMd',
  component: BannerImage,
  argTypes: {
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

export default Component;
