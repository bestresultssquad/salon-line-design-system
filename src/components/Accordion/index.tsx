import { View } from 'react-native';
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
import Checkbox from '../Checkbox';

function AccordionItem({
  isExpanded,
  children,
  viewKey,
  duration,
}: AccordionItemProps) {
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

function Accordion({
  children,
  title,
  buttonTitle,
  variant,
  textRight,
  textColor,
  checked,
  handlePress,
  withoutOpen,
  ...props
}: AccordionProps) {
  const openInternal = useSharedValue(false);
  const open = props.open ?? openInternal;

  const derivedOpacityOpen = useDerivedValue(() =>
    withTiming(Number(!open?.value), { duration: 0 })
  );

  const derivedOpacityClose = useDerivedValue(() =>
    withTiming(Number(open?.value ?? false), { duration: 0 })
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
    recurringPurchase: {
      open: IconTypes;
      close: IconTypes;
    };
    categories: {
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
      recurringPurchase: {
        open: 'ChevronRightIcon',
        close: 'ChevronDownIcon',
      },
      categories: {
        open: 'ChevronDownIcon',
        close: 'ChevronUpIcon',
      },
    };
  };

  return (
    <AccordionContainer variant={variant}>
      <TitleContainer
        onPress={() => {
          if (open && !withoutOpen) {
            open.value = !open.value;
          }
          handlePress && handlePress();
        }}
      >
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ alignItems: 'center', flexDirection: 'row', gap: 12 }}>
            {variant === 'recurringPurchase' && (
              <Checkbox
                variant="rounded"
                onPress={() => {}}
                checked={checked}
              />
            )}
            <Typography
              variant="sm"
              sizeVariant={variant === 'default' ? 'medium' : 'semiBold'}
            >
              {title}
            </Typography>
          </View>
          {variant !== 'recurringPurchase' && (
            <IconContainer>
              {variant === 'reviews' && (
                <Typography variant="xs" sizeVariant="medium">
                  {buttonTitle}
                </Typography>
              )}
              {withoutOpen ? (
                <Icon
                  height={24}
                  width={24}
                  type={'ArrowRightIcon'}
                  strokeWidth={1.5}
                />
              ) : (
                <>
                  <Animated.View style={[iconStyleOpen]}>
                    <Icon
                      height={24}
                      width={24}
                      type={getIcon()[variant ?? 'default'].open}
                    />
                  </Animated.View>
                  <Animated.View style={[iconStyleClose]}>
                    <Icon
                      height={24}
                      width={24}
                      type={getIcon()[variant ?? 'default'].close}
                    />
                  </Animated.View>
                </>
              )}
            </IconContainer>
          )}
          {textRight && (
            <Typography variant="sm" sizeVariant="semiBold" color={textColor}>
              {textRight}
            </Typography>
          )}
        </View>
      </TitleContainer>
      {children && open && (
        <AccordionItemContainer>
          <AccordionItem isExpanded={open} viewKey="Accordion">
            {children}
          </AccordionItem>
        </AccordionItemContainer>
      )}
    </AccordionContainer>
  );
}

export default Accordion;
