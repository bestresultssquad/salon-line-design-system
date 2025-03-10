import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import type { AccordionItemProps } from '../Accordion/Accordion.types';
import { Wrapper } from '../Accordion/Accordion.styles';

function AccordionItem({
  isExpanded,
  children,
  viewKey,
  duration,
}: Readonly<AccordionItemProps>) {
  const height = useSharedValue(0);

  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(isExpanded.value), {
      duration: duration ?? 500,
    })
  );
  const bodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
  }));

  return (
    <Animated.View
      key={`accordionItem_${viewKey}`}
      style={[{ width: '100%', overflow: 'hidden' }, bodyStyle]}
    >
      <Wrapper
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
      >
        {children}
      </Wrapper>
    </Animated.View>
  );
}

export default AccordionItem;
