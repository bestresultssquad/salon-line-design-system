import { View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import type { AccordionProps } from './Accordion.types';
import {
  AccordionContainer,
  AccordionItemContainer,
  TitleContainer,
} from './Accordion.styles';
import Typography from '../Typography';
import { useTheme } from 'styled-components/native';
import Switch from '../Switch';
import AccordionItem from '../AccordionItem';

function AccordionSchedule({
  children,
  title,
  handlePressSwitch,
  withoutOpen,
  number = 0,
  checked,
  ...props
}: Readonly<AccordionProps>) {
  const { colors } = useTheme();
  const openInternal = useSharedValue(false);
  const open = props.open ?? openInternal;

  const handlePressAccordion = () => {
    if (open && !withoutOpen) {
      open.value = !open.value;
    }
    handlePressSwitch && handlePressSwitch();
  };

  return (
    <AccordionContainer>
      <TitleContainer>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 8,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              width: 24,
              height: 24,
              borderRadius: 999,
              backgroundColor: colors.black,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="sm"
              sizeVariant={'semiBold'}
              color={colors.white}
            >
              {number}
            </Typography>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              gap: 12,
              flex: 1,
            }}
          >
            <Typography variant="sm" sizeVariant={'semiBold'}>
              {title}
            </Typography>
          </View>
          <Switch active={checked} onPress={() => handlePressAccordion()} />
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

export default AccordionSchedule;
