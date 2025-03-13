import { View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import type {
  AccordionItemProps,
  AccordionCheckoutProps,
} from './AccordionCheckout.types';
import {
  AccordionContainer,
  AccordionItemContainer,
  TitleContainer,
  Wrapper,
} from './AccordionCheckout.styles';
import Typography from '../Typography';
import Icon from '../Icon';
import Checkbox from '../Checkbox';
import { useTheme } from 'styled-components/native';

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

function AccordionCheckout({
  children,
  title,
  handlePress,
  subtitle,
  iconType,
  checked = false,
  withoutOpen,
  ...props
}: Readonly<AccordionCheckoutProps>) {
  const openInternal = useSharedValue(false);
  const open = props.open ?? openInternal;
  const { colors } = useTheme();

  const handlePressAccordion = () => {
    if (open && !withoutOpen) {
      open.value = !open.value;
    }
    handlePress?.();
  };

  return (
    <AccordionContainer>
      <TitleContainer onPress={() => handlePressAccordion()}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingVertical: subtitle ? 16 : 24,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <View>
              <Checkbox
                onPress={() => handlePressAccordion()}
                variant="rounded"
                checked={checked}
              />
            </View>
            <View style={{ gap: 4 }}>
              <Typography variant="sm" sizeVariant="semiBold">
                {title}
              </Typography>
              {subtitle && (
                <Typography
                  variant="xs"
                  sizeVariant="regular"
                  color={colors.gray[600]}
                >
                  {subtitle}
                </Typography>
              )}
            </View>
          </View>
          <View>
            <Icon type={iconType} height={24} width={24} />
          </View>
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

export default AccordionCheckout;
