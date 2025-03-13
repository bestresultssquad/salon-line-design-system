import type { DefaultTheme } from 'styled-components/native';
import styled from 'styled-components/native';
import type { CategoriesVariant } from './Categories.types';
import Typography from '../Typography';

const getStylesByVariant = (theme: DefaultTheme) => ({
  default: {
    backgroundColor: theme.colors.white,
    selected: theme.colors.gray[900],
    borderWidth: 1,
    borderColor: theme.colors.gray[200],
    textColor: theme.colors.black,
    textColorSelected: theme.colors.white,
  },
  primary: {
    backgroundColor: theme.colors.gray[100],
    selected: theme.colors.gray[900],
    borderWidth: 1,
    borderColor: theme.colors.gray[100],
    textColor: theme.colors.black,
    textColorSelected: theme.colors.white,
  },
});

export const Container = styled.TouchableOpacity<{
  variant: CategoriesVariant;
  selected: boolean;
  disableSelection: boolean;
}>`
  padding: ${({ theme }) => `${theme.spacing.nano}px ${theme.spacing.xxxxs}px`};
  border-width: ${({ theme, variant }) =>
    getStylesByVariant(theme)[variant].borderWidth}px;
  border-color: ${({ theme, variant }) =>
    getStylesByVariant(theme)[variant].borderColor};
  border-radius: ${({ theme }) => theme.spacing.xxs}px;
  background-color: ${({ theme, variant, selected, disableSelection }) =>
    selected && !disableSelection
      ? getStylesByVariant(theme)[variant].selected
      : getStylesByVariant(theme)[variant].backgroundColor};
  flex-direction: row;
  align-items: center;
`;

export const Text = styled(Typography)<{
  selected: boolean;
  categoriesVariant: CategoriesVariant;
  disableSelection: boolean;
}>`
  color: ${({ theme, categoriesVariant, selected, disableSelection }) =>
    selected && !disableSelection
      ? getStylesByVariant(theme)[categoriesVariant].textColorSelected
      : getStylesByVariant(theme)[categoriesVariant].textColor};
`;
