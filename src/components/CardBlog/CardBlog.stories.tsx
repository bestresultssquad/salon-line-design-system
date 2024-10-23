import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import CardBlog from './index';
import CardBlogSkeleton from './CardBlog.skeleton';

export const SkeletonHorizontal = () => {
  return <CardBlogSkeleton variant="horizontal" />;
};

export const SkeletonVertical = () => {
  return <CardBlogSkeleton variant="vertical" />;
};

const Component: Meta<typeof CardBlog> = {
  title: 'CardBlog',
  component: CardBlog,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
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

export const Horizontal: StoryObj<typeof CardBlog> = {};
Horizontal.args = {
  image: 'https://picsum.photos/500/600',
  title:
    'Guia completo da Trança Twist: como fazer, tipos e cuidados essenciais',
  description:
    'Se as tranças acompanham as mulheres desde as épocas passadas, a trança twist já se destaca como queridinha entre tantos...',
  date: '2023-09-01T00:00:00.000Z',
  variant: 'horizontal',
  category: 'Beleza',
};

export const Vertical: StoryObj<typeof CardBlog> = {};
Vertical.args = {
  image: 'https://picsum.photos/500/600',
  title:
    'Guia completo da Trança Twist: como fazer, tipos e cuidados essenciais',
  description:
    'Se as tranças acompanham as mulheres desde as épocas passadas, a trança twist já se destaca como queridinha entre tantos...',
  date: '2023-09-01T00:00:00.000Z',
  variant: 'vertical',
  category: 'Beleza',
};

export default Component;
