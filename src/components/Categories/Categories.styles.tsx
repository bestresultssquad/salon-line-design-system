import type { DefaultTheme } from 'styled-components/native';
import styled from 'styled-components/native';
import type { CategoriesVariant } from './Categories.types';
import Typography from '../Typography';

const getStylesByVariant = (theme: DefaultTheme) => ({
  default: {
    backgroundColor: theme.themed.background,
    selected: theme.baseColors.gray[900],
    borderWidth: 1,
    borderColor: theme.baseColors.gray[200],
    textColor: theme.themed.text,
    textColorSelected: theme.baseColors.white,
  },
  primary: {
    backgroundColor: theme.baseColors.gray[100],
    selected: theme.baseColors.gray[900],
    borderWidth: 1,
    borderColor: theme.baseColors.gray[100],
    textColor: theme.baseColors.black,
    textColorSelected: theme.baseColors.white,
  },
});

export const Container = styled.TouchableOpacity<{
  variant: CategoriesVariant;
  selected: boolean;
  disableSelection: boolean;
}>`
  padding: ${({ theme }: { theme: DefaultTheme }) =>
    `${theme.spacing.nano}px ${theme.spacing.xxxxs}px`};
  border-width: ${({
    theme,
    variant,
  }: {
    theme: DefaultTheme;
    variant: CategoriesVariant;
  }) => getStylesByVariant(theme)[variant].borderWidth}px;
  border-color: ${({
    theme,
    variant,
  }: {
    theme: DefaultTheme;
    variant: CategoriesVariant;
  }) => getStylesByVariant(theme)[variant].borderColor};
  border-radius: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.xxs}px;
  background-color: ${({
    theme,
    variant,
    selected,
    disableSelection,
  }: {
    theme: DefaultTheme;
    variant: CategoriesVariant;
    selected: boolean;
    disableSelection: boolean;
  }) =>
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
  color: ${({
    theme,
    categoriesVariant,
    selected,
    disableSelection,
  }: {
    theme: DefaultTheme;
    selected: boolean;
    categoriesVariant: CategoriesVariant;
    disableSelection: boolean;
  }) =>
    selected && !disableSelection
      ? getStylesByVariant(theme)[categoriesVariant].textColorSelected
      : getStylesByVariant(theme)[categoriesVariant].textColor};
`;
