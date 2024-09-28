import { FlatList, View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Icon from './index';
import type { IconTypes } from './Icon.types';

export const Icons = (): StoryObj<typeof Icon> => {
  return (
    <View>
      <FlatList
        columnWrapperStyle={{ flexWrap: 'wrap' }}
        numColumns={8}
        data={Object.keys(Icons).sort()}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Icon
            height={24}
            width={24}
            type={item as IconTypes}
            stroke="black"
            strokeWidth={1.5}
          />
        )}
      />
    </View>
  );
};

const Meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  argTypes: {
    type: {
      options: Object.keys(Icons),
      control: { type: 'select' },
    },
    stroke: { control: { type: 'color' } },
    strokeWidth: { control: { type: 'number' } },
  },

  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default Meta;
