import styled from 'styled-components/native';
import type { AccordionVariant } from './Accordion.types';
import type { DefaultTheme } from 'styled-components/native';

const getStylesByVariant = (
  theme: DefaultTheme
): Record<
  AccordionVariant,
  {
    padding: number;
    borderWidth: number;
    radius: number;
    paddingHorizontal: number;
    borderColor: string | number;
    backgrounColor: string;
  }
> => ({
  default: {
    padding: theme.spacing.xxxxs,
    borderWidth: 1,
    radius: 0,
    paddingHorizontal: 0,
    borderColor: theme.baseColors.white,
    backgrounColor: theme.themed.background,
  },
  reviews: {
    padding: 0,
    borderWidth: 0,
    radius: 0,
    paddingHorizontal: 0,
    borderColor: '',
    backgrounColor: theme.themed.background,
  },
  recurringPurchase: {
    padding: theme.spacing.xxxs,
    borderWidth: 1,
    radius: theme.spacing.xxxxs,
    paddingHorizontal: theme.spacing.nano,
    borderColor: theme.baseColors.gray[200],
    backgrounColor: theme.themed.background,
  },
  categories: {
    padding: theme.spacing.xxxxs,
    borderWidth: 0,
    radius: 0,
    paddingHorizontal: 0,
    borderColor: 0,
    backgrounColor: theme.themed.background,
  },
  subCategory: {
    padding: theme.spacing.xxxxs,
    borderWidth: 0,
    radius: theme.spacing.xxxxs,
    paddingHorizontal: theme.spacing.xxxxs,
    borderColor: 0,
    backgrounColor: theme.themed.background,
  },
});

export const AccordionContainer = styled.View<{ variant: AccordionVariant }>`
  width: 100%;
  padding: ${({
    theme,
    variant,
  }: {
    theme: DefaultTheme;
    variant: AccordionVariant;
  }) =>
    `${getStylesByVariant(theme)[variant].padding}px ${getStylesByVariant(theme)[variant].paddingHorizontal}px`};
  border-bottom-color: ${({
    theme,
    variant,
  }: {
    theme: DefaultTheme;
    variant: AccordionVariant;
  }) =>
    variant === 'default' || variant === 'recurringPurchase'
      ? `${theme.baseColors.gray[200]} `
      : 0};
  border-color: ${({
    theme,
    variant,
  }: {
    theme: DefaultTheme;
    variant: AccordionVariant;
  }) => getStylesByVariant(theme)[variant].borderColor};
  border-bottom-width: ${({
    variant,
    theme,
  }: {
    theme: DefaultTheme;
    variant: AccordionVariant;
  }) => getStylesByVariant(theme)[variant].borderWidth}px;
  border-width: ${({
    variant,
    theme,
  }: {
    theme: DefaultTheme;
    variant: AccordionVariant;
  }) => getStylesByVariant(theme)[variant].borderWidth}px;
  border-radius: ${({
    variant,
    theme,
  }: {
    theme: DefaultTheme;
    variant: AccordionVariant;
  }) => getStylesByVariant(theme)[variant].radius}px;
  background-color: ${({
    variant,
    theme,
  }: {
    theme: DefaultTheme;
    variant: AccordionVariant;
  }) => getStylesByVariant(theme)[variant].backgrounColor};
`;

export const TitleContainer = styled.TouchableOpacity<{
  variant: AccordionVariant;
}>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconContainer = styled.View<{ theme: DefaultTheme }>`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.nano}px;
`;

export const AccordionItemContainer = styled.View``;

export const Wrapper = styled.View`
  width: 100%;
  position: absolute;
  display: flex;
`;
