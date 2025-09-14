import styled from 'styled-components/native';
import type { ChipSize, ChipVariant } from './Chip.types';
import type { DefaultTheme } from 'styled-components/native';

const getStyleBySize = (theme: DefaultTheme) => ({
  small: {
    paddingHorizontal: theme.spacing.nano,
    paddingVertical: 2,
  },
  medium: {
    paddingHorizontal: theme.spacing.nano,
    paddingVertical: theme.spacing.quarck,
  },
});

export const ChipContainer = styled.View<{
  variant: ChipVariant;
  size: ChipSize;
}>`
  z-index: 1;
  padding: ${({ theme, size }: { theme: DefaultTheme; size: ChipSize }) =>
    `${getStyleBySize(theme)[size].paddingVertical}px ${getStyleBySize(theme)[size].paddingHorizontal}px`};
  background-color: ${({
    theme,
    variant,
  }: {
    theme: DefaultTheme;
    variant: ChipVariant;
  }) => (variant === 'outlined' ? theme.colors.white : theme.colors.pink[600])};
  border-radius: 50px;
  border-width: ${({ variant }: { variant: ChipVariant }) =>
    variant === 'outlined' ? '1px' : '0'};
  justify-content: center;
`;
