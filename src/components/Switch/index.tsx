import { TouchableWithoutFeedback } from 'react-native';
import { useEffect } from 'react';
import {
  interpolateColor,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useDerivedValue,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';
import type { SwitchProps } from './Switch.types';
import { SwitchCircle, SwitchContainer } from './Switch.styles';

const Switch = ({ onPress, active }: SwitchProps) => {
  const switchTranslate = useSharedValue(0);
  const { colors } = useTheme();

  const progress = useDerivedValue(() => {
    return withTiming(active ? 22 : 0);
  });

  useEffect(() => {
    if (active) {
      switchTranslate.value = 18;
    } else {
      switchTranslate.value = 2;
    }
  }, [active, switchTranslate]);

  const customSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(switchTranslate.value, {
            mass: 1,
            damping: 15,
            stiffness: 120,
            overshootClamping: false,
            restSpeedThreshold: 0.001,
            restDisplacementThreshold: 0.001,
          }),
        },
      ],
    };
  });

  const backgroundColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 22],
      [colors.gray[400], colors.green[700]]
    );
    return {
      backgroundColor,
    };
  });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <SwitchContainer
        testID={'switch-container'}
        style={[backgroundColorStyle]}
      >
        <SwitchCircle
          testID={'switch-circle'}
          style={[
            {
              shadowColor: colors.black,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 2.5,
              elevation: 4,
            },
            customSpringStyles,
          ]}
        />
      </SwitchContainer>
    </TouchableWithoutFeedback>
  );
};

export default Switch;
