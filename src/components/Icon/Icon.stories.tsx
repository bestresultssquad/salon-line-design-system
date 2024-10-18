import { FlatList, View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Icon from '../Icon/index';
import type { IconTypes } from '../Icon/Icon.types';
import { IconsComponent } from './Icons';
import Typography from '../Typography';

export const IconsList: StoryObj<typeof Icon> = {
  render: () => (
    <View>
      <FlatList
        contentContainerStyle={{ gap: 12 }}
        columnWrapperStyle={{
          flexWrap: 'wrap',
          gap: 12,
          justifyContent: 'center',
        }}
        numColumns={2}
        data={Object.keys(IconsComponent).sort() as IconTypes[]}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }: { item: IconTypes }) => (
          <View
            style={{
              padding: 24,
              borderRadius: 16,
              borderColor: 'black',
              borderWidth: 1,
              alignItems: 'center',
              width: 150,
              height: 100,
              gap: 8,
            }}
          >
            <Icon
              height={24}
              width={24}
              type={item}
              stroke="black"
              strokeWidth={1.5}
            />
            <Typography sizeVariant="regular" variant="sm">
              {item}
            </Typography>
          </View>
        )}
      />
    </View>
  ),
};

const Component: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  argTypes: {
    type: {
      options: Object.keys(IconsComponent),
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

export const Primary: StoryObj<typeof Icon> = {};
Primary.args = {
  type: 'bag',
  stroke: 'black',
  strokeWidth: 1.5,
};

export default Component;
