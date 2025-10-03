import { View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import type {
  AccordionItemProps,
  AccordionProps,
} from './AccordionPlayer.types';
import {
  AccordionContainer,
  AccordionItemContainer,
  IconContainer,
  TitleContainer,
  Wrapper,
} from './AccordionPlayer.styles';
import Typography from '../Typography';
import Icon from '../Icon';

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
        onLayout={(e: { nativeEvent: { layout: { height: number } } }) => {
          height.value = e.nativeEvent.layout.height;
        }}
      >
        {children}
      </Wrapper>
    </Animated.View>
  );
}

function AccordionPlayer({
  children,
  variant,
  textColor,
  handlePress,
  handleMuted,
  withoutOpen,
  ...props
}: Readonly<AccordionProps>) {
  const openInternal = useSharedValue(false);
  const mutedInternal = useSharedValue(false);

  const open = props.open ?? openInternal;
  const muted = props.muted ?? mutedInternal;

  const derivedOpacityOpen = useDerivedValue(() =>
    withTiming(Number(!open?.value), { duration: 0 })
  );

  const derivedOpacityClose = useDerivedValue(() =>
    withTiming(Number(open?.value ?? false), { duration: 0 })
  );

  const derivedOpacityVolumeClose = useDerivedValue(() =>
    withTiming(Number(muted?.value ?? false), { duration: 0 })
  );
  const derivedOpacityVolumeOpen = useDerivedValue(() =>
    withTiming(Number(!muted?.value), { duration: 0 })
  );

  const iconStyleOpen = useAnimatedStyle(() => ({
    display: derivedOpacityOpen.value ? 'flex' : 'none',
  }));

  const iconStyleClose = useAnimatedStyle(() => ({
    display: derivedOpacityClose.value ? 'flex' : 'none',
  }));

  const iconVolumeStyleOpen = useAnimatedStyle(() => ({
    display: derivedOpacityVolumeOpen.value ? 'flex' : 'none',
  }));
  const iconVolumeStyleClose = useAnimatedStyle(() => ({
    display: derivedOpacityVolumeClose.value ? 'flex' : 'none',
  }));

  const handlePressAccordion = () => {
    if (open && !withoutOpen) {
      open.value = !open.value;
    }
    handlePress && handlePress();
  };

  const handlePressMuted = () => {
    if (muted) {
      muted.value = !muted.value;
    }
    handleMuted?.();
  };

  return (
    <AccordionContainer variant={variant}>
      <TitleContainer onPress={() => handlePressAccordion()}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}
        >
          <IconContainer onPress={() => handlePressAccordion()}>
            {!props.open && (
              <Typography sizeVariant="regular" variant="2xs" color={textColor}>
                Veja os produtos
              </Typography>
            )}
            <Animated.View style={[iconStyleOpen]}>
              <Icon
                height={24}
                width={24}
                type={'ChevronDownIcon'}
                stroke="white"
              />
            </Animated.View>
            <Animated.View style={[iconStyleClose]}>
              <Icon
                height={24}
                width={24}
                type={'ChevronUpIcon'}
                stroke="white"
              />
            </Animated.View>
          </IconContainer>
          <IconContainer onPress={() => handlePressMuted()}>
            <Animated.View style={[iconVolumeStyleOpen]}>
              <Icon
                height={24}
                width={24}
                type={'VolumeHighIcon'}
                stroke="white"
              />
            </Animated.View>
            <Animated.View style={[iconVolumeStyleClose]}>
              <Icon
                height={24}
                width={24}
                type={'VolumeMutedIcon'}
                stroke="white"
              />
            </Animated.View>
          </IconContainer>
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

export default AccordionPlayer;
