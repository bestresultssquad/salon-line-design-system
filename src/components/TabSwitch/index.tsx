import { TouchableWithoutFeedback, type LayoutChangeEvent } from 'react-native';
import { Container, TextContainer } from './TabSwitch.styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useState } from 'react';
import { useTheme } from 'styled-components/native';
import Typography from '../Typography';
import type { TabSwitchProps } from './TabSwitch.types';

const TabSwitch = ({ onPress, tabs, ...props }: TabSwitchProps) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [dimensions, setDimensions] = useState({ height: 20, width: 160 });
  const { colors } = useTheme();

  const buttonWidth = dimensions.width / 2;

  const onTabLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setDimensions({ width, height });
  };

  const tabPositionX = useSharedValue(0);

  const animatedStyled = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });
  return (
    <Container onLayout={onTabLayout} {...props}>
      <Animated.View
        style={[
          animatedStyled,
          {
            position: 'absolute',
            width: buttonWidth,
            marginHorizontal: 4,
            height: dimensions.height - 8,
            backgroundColor: colors.gray[900],
            borderRadius: 16,
          },
        ]}
      />
      {tabs.map((tab, index) => {
        const selected = selectedTab === tab.id;
        return (
          <TouchableWithoutFeedback
            key={tab.id}
            onPress={() => {
              setSelectedTab(tab.id);
              tabPositionX.value = withSpring((buttonWidth - 8) * index, {
                duration: 1500,
              });
              onPress({ id: tab.id, text: tab.text });
            }}
          >
            <TextContainer>
              <Typography
                sizeVariant="semiBold"
                variant="sm"
                color={selected ? colors.white : colors.black}
              >
                {tab.text}
              </Typography>
            </TextContainer>
          </TouchableWithoutFeedback>
        );
      })}
    </Container>
  );
};

export default TabSwitch;
