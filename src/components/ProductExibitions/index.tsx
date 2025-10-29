import {
  IconContainer,
  ProductExibitionContainer,
  TabBg,
} from './ProductExibition.styles';
import { useState } from 'react';
import Icon from '../Icon';
import type { IconTypes } from '../Icon/Icon.types';
import { useTheme } from 'styled-components/native';
import type { LayoutChangeEvent } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import type { ProductExibitionProps } from './ProductExibition.types';

const ProductExibition = ({ onPress }: ProductExibitionProps) => {
  const buttons: Array<{ id: number; type: string; icon: IconTypes }> = [
    { id: 1, type: '3dView', icon: 'RdViewIcon' },
    { id: 2, type: 'Images', icon: 'CarouselHorizontalIcon' },
    { id: 3, type: 'Video', icon: 'PlayCircleIcon' },
  ];

  const [selectedTab, setSelectedTab] = useState(2);
  const [dimensions, setDimensions] = useState({ height: 20, width: 48 });
  const { baseColors } = useTheme();

  const buttonWidth = dimensions.width / buttons.length;

  const onTabLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setDimensions({ width, height });
  };

  const tabPositionX = useSharedValue(46.666666);

  const animatedStyled = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  return (
    <ProductExibitionContainer onLayout={onTabLayout}>
      <TabBg
        style={[
          animatedStyled,
          {
            position: 'absolute',
            width: buttonWidth,
            marginHorizontal: 4,
            height: dimensions.height - 6,
            backgroundColor: baseColors.gray[900],
            borderRadius: 8,
          },
        ]}
      />
      {buttons.map((button, index) => {
        const selected = selectedTab === button.id;

        const iconColor = selected ? baseColors.white : baseColors.black;

        return (
          <IconContainer
            key={index}
            onPress={() => {
              setSelectedTab(button.id);
              tabPositionX.value = withSpring((buttonWidth - 4) * index, {
                duration: 1500,
              });
              onPress({ id: button.id, type: button.type as any });
            }}
          >
            <Icon
              key={button.id}
              type={button.icon}
              width={20}
              height={20}
              strokeWidth={2}
              stroke={iconColor}
            />
          </IconContainer>
        );
      })}
    </ProductExibitionContainer>
  );
};
export default ProductExibition;
