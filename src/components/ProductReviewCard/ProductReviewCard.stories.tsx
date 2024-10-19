import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import ProductReviewCard from './index';

const Component: Meta<typeof ProductReviewCard> = {
  title: 'ProductReviewCard',
  component: ProductReviewCard,
  argTypes: {
    rating: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0.5,
      },
    },
    date: {
      control: {
        type: 'date',
      },
    },
    deslikeCount: {
      control: {
        type: 'number',
      },
    },
    likeCount: {
      control: {
        type: 'number',
      },
    },
    onDislikePress: {
      action: 'dislike',
    },
    onLikePress: {
      action: 'like',
    },
    recommends: {
      control: {
        type: 'boolean',
      },
    },
    review: {
      control: {
        type: 'text',
      },
    },
    userName: {
      control: {
        type: 'text',
      },
    },
    image: {
      control: {
        type: 'text',
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

export const Default: StoryObj<typeof ProductReviewCard> = {};
Default.args = {
  rating: 4.5,
  date: '2024-10-19T01:56:27',
  deslikeCount: 10,
  likeCount: 20,
  onDislikePress: () => {},
  onLikePress: () => {},
  recommends: true,
  review: 'This is a review',
  userName: 'John Doe',
  image: 'https://picsum.photos/200/300',
};

export default Component;
