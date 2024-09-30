import { Animated } from 'react-native';
import type { DefaultTheme } from 'styled-components/native';
import styled from 'styled-components/native';
import type { PaginatorVariant } from './Paginator.types';

const getVariantStyle = (theme: DefaultTheme) => {
  return {
    onboarding: {
      height: theme.spacing.xxxxs,
      borderWidth: 1.5,
      margin: theme.spacing.nano,
    },
    default: {
      height: theme.spacing.nano,
      borderWidth: 0,
      margin: theme.spacing.quarck,
    },
  };
};

export const PaginatorContainer = styled.View<{ variant: PaginatorVariant }>`
  flex-direction: row;
  height: ${({ theme, variant }) => getVariantStyle(theme)[variant].height}px;
`;

export const Dots = styled(Animated.View)<{ variant: PaginatorVariant }>`
  height: ${({ theme, variant }) => getVariantStyle(theme)[variant].height}px;
  border-radius: ${({ theme }) => theme.spacing.md}px;
  border-width: ${({ theme, variant }) =>
    getVariantStyle(theme)[variant].borderWidth}px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-left: ${({ theme, variant }) =>
    getVariantStyle(theme)[variant].margin}px;
  margin-right: ${({ theme, variant }) =>
    getVariantStyle(theme)[variant].margin}px;
`;
