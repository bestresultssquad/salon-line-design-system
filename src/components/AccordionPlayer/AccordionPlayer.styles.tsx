import styled from 'styled-components/native';
import type { AccordionVariant } from './AccordionPlayer.types';
import type { DefaultTheme } from 'styled-components/native';

const getStylesByVariant = (theme: DefaultTheme) => ({
  default: {
    padding: theme.spacing.xxxxs,
    borderWidth: 1,
    radius: 0,
    paddingHorizontal: 0,
    borderColor: theme.colors.white,
  },
  reviews: {
    padding: 0,
    borderWidth: 0,
    radius: 0,
    paddingHorizontal: 0,
    borderColor: '',
  },
  recurringPurchase: {
    padding: theme.spacing.xxxs,
    borderWidth: 1,
    radius: theme.spacing.xxxxs,
    paddingHorizontal: theme.spacing.nano,
    borderColor: theme.colors.gray[200],
  },
  categories: {
    padding: theme.spacing.xxxxs,
    borderWidth: 0,
    radius: 0,
    paddingHorizontal: 0,
    borderColor: 0,
  },
});

export const AccordionContainer = styled.View<{ variant: AccordionVariant }>`
  width: 100%;
  padding: ${({ theme, variant }) =>
    `${getStylesByVariant(theme)[variant].padding}px ${getStylesByVariant(theme)[variant].paddingHorizontal}px`};
  border-width: 0;
`;

export const TitleContainer = styled.TouchableWithoutFeedback`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.nano}px;
`;

export const AccordionItemContainer = styled.View``;

export const Wrapper = styled.View`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
`;
