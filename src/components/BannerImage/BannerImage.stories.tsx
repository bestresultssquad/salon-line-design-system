import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Icon from '../Icon/index';
import BannerImage from './index';

const Component: Meta<typeof BannerImage> = {
  title: 'BannerImage',
  component: BannerImage,
  argTypes: {
    bannerVariant: {
      options: ['sm', 'md'],
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
  },

  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const BannerSmall: StoryObj<typeof Icon> = {};
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
export const BannerMedium: StoryObj<typeof Icon> = {};
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

export const BannerCarroussel: StoryObj<typeof Icon> = {};
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
