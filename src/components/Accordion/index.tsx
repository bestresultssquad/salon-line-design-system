import { TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import type { AccordionItemProps, AccordionProps } from './Accordion.types';
import {
  AccordionContainer,
  AccordionItemContainer,
  IconContainer,
  TitleContainer,
  Wrapper,
} from './Accordion.styles';
import Typography from '../Typography';
import Icon from '../Icon';
import type { IconTypes } from '../Icon/Icon.types';

function AccordionItem({
  isExpanded,
  children,
  viewKey,
  duration = 500,
}: AccordionItemProps) {
  const height = useSharedValue(0);

  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(isExpanded.value), {
      duration,
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

function Accordion({
  open,
  children,
  title,
  buttonTitle,
  variant = 'default',
}: AccordionProps) {
  const derivedOpacityOpen = useDerivedValue(() =>
    withTiming(Number(!open.value), { duration: 0 })
  );

  const derivedOpacityClose = useDerivedValue(() =>
    withTiming(Number(open.value), { duration: 0 })
  );

  const iconStyleOpen = useAnimatedStyle(() => ({
    display: derivedOpacityOpen.value ? 'flex' : 'none',
  }));
  const iconStyleClose = useAnimatedStyle(() => ({
    display: derivedOpacityClose.value ? 'flex' : 'none',
  }));

  type IconVariant = {
    default: {
      open: IconTypes;
      close: IconTypes;
    };
    reviews: {
      open: IconTypes;
      close: IconTypes;
    };
  };

  const getIcon = (): IconVariant => {
    return {
      default: {
        open: 'PlusIcon',
        close: 'MinusIcon',
      },
      reviews: {
        open: 'ChevronRightIcon',
        close: 'ChevronDownIcon',
      },
    };
  };

  return (
    <AccordionContainer variant={variant}>
      <TitleContainer>
        <Typography
          variant="sm"
          sizeVariant={variant === 'default' ? 'medium' : 'semiBold'}
        >
          {title}
        </Typography>
        <TouchableOpacity
          onPress={() => {
            open.value = !open.value;
          }}
        >
          <IconContainer>
            {variant === 'reviews' && (
              <Typography variant="xs" sizeVariant="medium">
                {buttonTitle}
              </Typography>
            )}
            <Animated.View style={[iconStyleOpen]}>
              <Icon height={24} width={24} type={getIcon()[variant].open} />
            </Animated.View>
            <Animated.View style={[iconStyleClose]}>
              <Icon height={24} width={24} type={getIcon()[variant].close} />
            </Animated.View>
          </IconContainer>
        </TouchableOpacity>
      </TitleContainer>
      <AccordionItemContainer>
        <AccordionItem isExpanded={open} viewKey="Accordion">
          {children}
        </AccordionItem>
      </AccordionItemContainer>
    </AccordionContainer>
  );
}

export default Accordion;
