import { useCallback, useEffect, useRef } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import type { CheckboxProps } from './Checkbox.types';
import {
  CheckboxChecked,
  CheckboxComponent,
  CheckboxContainer,
} from './Checkbox.styles';
import { useTheme } from 'styled-components/native';

const Checkbox = ({
  onPress,
  checked,
  children,
  variant,
  disabled,
  checkedColor,
}: CheckboxProps) => {
  const { baseColors, themed } = useTheme();

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
      <CheckboxContainer variant={variant} testID="checkbox-container">
        <CheckboxComponent variant={variant ?? 'default'} disabled={disabled}>
          <CheckboxChecked
            variant={variant ?? 'default'}
            testID={'checkbox-checked'}
            style={[
              {
                transform: [{ scale: displayIcon }],
                backgroundColor: checkedColor || themed.inverseBackground,
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                display: checked ? 'flex' : 'none',
                borderColor: baseColors.red[500],
              },
            ]}
          >
            {variant === 'rounded' && (
              <Animated.View
                style={{
                  transform: [{ scale: displayIcon }],
                  width: 6,
                  height: 6,
                  backgroundColor: themed.background,
                  borderRadius: 100,
                }}
              />
            )}
          </CheckboxChecked>
        </CheckboxComponent>
        {children}
      </CheckboxContainer>
    </TouchableWithoutFeedback>
  );
};

export default Checkbox;
