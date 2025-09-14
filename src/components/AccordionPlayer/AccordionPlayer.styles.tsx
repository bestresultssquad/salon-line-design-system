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
  padding: ${({
    theme,
    variant,
  }: {
    theme: DefaultTheme;
    variant: AccordionVariant;
  }) => {
    const styles =
      getStylesByVariant(theme)[
        variant as keyof ReturnType<typeof getStylesByVariant>
      ];
    return `${styles.padding}px ${styles.paddingHorizontal}px`;
  }};
  border-width: 0;
`;

export const TitleContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.nano}px;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
`;

export const AccordionItemContainer = styled.View``;

export const Wrapper = styled.View`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
`;
