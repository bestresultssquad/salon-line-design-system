import { useEffect } from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import LoadingIconComponent from '../Icon/IconComponents/Loading.icon';

const Loading = ({ size, color }: { color: string; size: number }) => {
  const sv = useSharedValue<number>(0);
  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${sv.value}deg`,
      },
    ],
  }));

  useEffect(() => {
    sv.value = withRepeat(
      withTiming(360, {
        duration: 1500,
        easing: Easing.linear,
      }),
      -1
    );
  }, [sv]);

  const Component = Animated.createAnimatedComponent(LoadingIconComponent);

  return (
    <Component
      width={size}
      height={size}
      stroke={color}
      style={[animatedStyle2]}
    />
  );
};

export default Loading;
