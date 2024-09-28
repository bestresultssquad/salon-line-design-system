import { Animated, View } from 'react-native';
import Icon from '../Icon';
import { FavoriteCustomButton } from './FavoriteButton.styles';
import { useEffect, useRef } from 'react';
import type { FavoriteButtonProps } from './FavoriteButton.types';

const FavoriteButton = ({
  onPress,
  favorited = false,
}: FavoriteButtonProps) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const displayIcon = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const displayIcon2 = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    if (favorited) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [animatedValue, favorited]);

  return (
    <FavoriteCustomButton
      onlyIcon
      variant="favorite"
      size="nano"
      fullRounded
      onPress={onPress}
      customIcon={
        <View>
          <Animated.View
            style={[
              {
                transform: [{ scale: displayIcon }],
                display: favorited ? 'flex' : 'none',
              },
            ]}
          >
            <Icon
              testID="custom-icon-left"
              type={'favoriteFilled'}
              width={16}
              height={16}
              stroke="black"
              strokeWidth={1.5}
            />
          </Animated.View>
          <Animated.View
            style={[
              {
                transform: [{ scale: displayIcon2 }],
                display: favorited ? 'none' : 'flex',
              },
            ]}
          >
            <Icon
              testID="custom-icon-left"
              type={'favorite'}
              width={16}
              height={16}
              stroke="black"
              strokeWidth={1.5}
            />
          </Animated.View>
        </View>
      }
    />
  );
};

export default FavoriteButton;