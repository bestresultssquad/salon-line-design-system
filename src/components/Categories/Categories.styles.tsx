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
    textColor: theme.colors.gray[600],
    textColorSelected: theme.colors.white,
  },
});

export const Container = styled.TouchableOpacity<{
  variant: CategoriesVariant;
  selected: boolean;
}>`
  padding: ${({ theme }) => `${theme.spacing.nano}px ${theme.spacing.xxxxs}px`};
  border-width: ${({ theme, variant }) =>
    getStylesByVariant(theme)[variant].borderWidth}px;
  border-color: ${({ theme, variant }) =>
    getStylesByVariant(theme)[variant].borderColor};
  border-radius: ${({ theme }) => theme.spacing.xxs}px;
  background-color: ${({ theme, variant, selected }) =>
    selected
      ? getStylesByVariant(theme)[variant].selected
      : getStylesByVariant(theme)[variant].backgroundColor};
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const Text = styled(Typography)<{
  selected: boolean;
  categoriesVariant: CategoriesVariant;
}>`
  color: ${({ theme, categoriesVariant, selected }) =>
    selected
      ? getStylesByVariant(theme)[categoriesVariant].textColorSelected
      : getStylesByVariant(theme)[categoriesVariant].textColor};
`;
