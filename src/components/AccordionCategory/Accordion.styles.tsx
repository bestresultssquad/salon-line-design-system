import styled from 'styled-components/native';
import type { AccordionVariant } from './Accordion.types';
import type { DefaultTheme } from 'styled-components/native';

const getStylesByVariant = (theme: DefaultTheme) => ({
  default: {
    padding: theme.spacing.xxxxs,
    borderWidth: 1,
    radius: 0,
    paddingHorizontal: 0,
    borderColor: theme.colors.white,
    backgrounColor: theme.colors.white,
  },
  reviews: {
    padding: 0,
    borderWidth: 0,
    radius: 0,
    paddingHorizontal: 0,
    borderColor: '',
    backgrounColor: theme.colors.white,
  },
  recurringPurchase: {
    padding: theme.spacing.xxxs,
    borderWidth: 1,
    radius: theme.spacing.xxxxs,
    paddingHorizontal: theme.spacing.nano,
    borderColor: theme.colors.gray[200],
    backgrounColor: theme.colors.white,
  },
  categories: {
    padding: theme.spacing.xxxxs,
    borderWidth: 0,
    radius: 0,
    paddingHorizontal: 0,
    borderColor: 0,
    backgrounColor: theme.colors.white,
  },
  subCategory: {
    padding: theme.spacing.xxxxs,
    borderWidth: 0,
    radius: theme.spacing.xxxxs,
    paddingHorizontal: theme.spacing.xxxxs,
    borderColor: 0,
    backgrounColor: theme.colors.gray[100],
  },
});

export const AccordionContainer = styled.View<{ variant: AccordionVariant }>`
  width: 100%;
  padding: ${({ theme, variant }) =>
    `${getStylesByVariant(theme)[variant].padding}px ${getStylesByVariant(theme)[variant].paddingHorizontal}px`};
  border-bottom-color: ${({ theme, variant }) =>
    variant === 'default' || variant === 'recurringPurchase'
      ? `${theme.colors.gray[200]} `
      : 0};
  border-color: ${({ theme, variant }) =>
    getStylesByVariant(theme)[variant].borderColor};
  border-bottom-width: ${({ variant, theme }) =>
    getStylesByVariant(theme)[variant].borderWidth}px;
  border-width: ${({ variant, theme }) =>
    getStylesByVariant(theme)[variant].borderWidth}px;
  border-radius: ${({ variant, theme }) =>
    getStylesByVariant(theme)[variant].radius}px;
  background-color: ${({ variant, theme }) =>
    getStylesByVariant(theme)[variant].backgrounColor};
`;

export const TitleContainer = styled.TouchableWithoutFeedback<{
  variant: AccordionVariant;
}>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.nano}px;
`;

export const AccordionItemContainer = styled.View``;

export const Wrapper = styled.View`
  width: 100%;
  position: absolute;
  display: flex;
`;
