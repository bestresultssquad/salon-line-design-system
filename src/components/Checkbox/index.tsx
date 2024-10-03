import { useCallback, useEffect, useRef } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import type { CheckboxProps } from './Checkbox.types';
import {
  CheckboxChecked,
  CheckboxComponent,
  CheckboxContainer,
} from './Checkbox.styles';
import { useTheme } from 'styled-components/native';

const Checkbox = ({ onPress, checked, children }: CheckboxProps) => {
  const { colors } = useTheme();

  const animatedValue = useRef(new Animated.Value(0)).current;

  const displayIcon = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const animateChecked = useCallback(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  const animateUnchecked = useCallback(() => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  useEffect(() => {
    checked ? animateChecked() : animateUnchecked();
  }, [animateChecked, animateUnchecked, animatedValue, checked]);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <CheckboxContainer testID="checkbox-container">
        <CheckboxComponent>
          <CheckboxChecked
            testID={'checkbox-checked'}
            style={[
              {
                transform: [{ scale: displayIcon }],
                backgroundColor: colors.black,
                width: '100%',
                height: '100%',
                borderRadius: 3,
                display: checked ? 'flex' : 'none',
              },
            ]}
          />
        </CheckboxComponent>
        {children}
      </CheckboxContainer>
    </TouchableWithoutFeedback>
  );
};

export default Checkbox;
