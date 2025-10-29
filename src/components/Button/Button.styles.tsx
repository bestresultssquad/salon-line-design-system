import styled, { type DefaultTheme } from 'styled-components/native';
import type { ButtonSize, ButtonVariant } from './Button.types';
import Icon from '../Icon';

const paddingVerticalBySize = (theme: DefaultTheme) => ({
  nano: theme.spacing.nano,
  small: theme.spacing.xxxxs,
  medium: theme.spacing.xxxs,
  large: theme.spacing.xxs,
  cart: theme.spacing.nano,
  quarck: theme.spacing.quarck,
  onboarding: theme.spacing.nano,
  filter: theme.spacing.xxxxs,
});

const paddingHorizontalBySize = (theme: DefaultTheme) => ({
  nano: theme.spacing.nano,
  small: theme.spacing.sm,
  medium: theme.spacing.sm,
  large: theme.spacing.sm,
  cart: theme.spacing.sm,
  quarck: theme.spacing.xxxxs,
  onboarding: theme.spacing.xxxxs,
  filter: theme.spacing.xxxxs,
});

const colorByVariant = (theme: DefaultTheme) => ({
  primary: {
    backgroundColor: theme.baseColors.gray[900],
    borderColor: 'transparent',
  },
  outline: {
    backgroundColor: theme.baseColors.white,
    borderColor: theme.baseColors.gray[600],
  },
  disabled: {
    backgroundColor: theme.baseColors.gray[400],
    borderColor: 'transparent',
  },
  cart: {
    backgroundColor: theme.baseColors.green[700],
    borderColor: 'transparent',
  },
  action: {
    backgroundColor: theme.baseColors.gray[100],
    borderColor: 'transparent',
  },

  favorite: {
    backgroundColor: theme.baseColors.gray[200],
    borderColor: 'transparent',
  },
  onboarding: {
    backgroundColor: theme.baseColors.gray[100],
    borderColor: 'transparent',
  },
  filter: {
    backgroundColor: theme.baseColors.gray[900],
    borderColor: 'transparent',
  },
  link: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
});

export const ButtonContainer = styled.TouchableOpacity<{
  size: ButtonSize;
  variant: ButtonVariant;
  fullRounded?: boolean;
  disabled?: boolean;
}>`
  background-color: ${({
    theme,
    variant,
    disabled,
  }: {
    theme: DefaultTheme;
    variant: ButtonVariant;
    disabled?: boolean;
  }) =>
    disabled
      ? theme.baseColors.gray[400]
      : colorByVariant(theme)[variant].backgroundColor};
  border-color: ${({
    theme,
    variant,
  }: {
    theme: DefaultTheme;
    variant: ButtonVariant;
  }) => colorByVariant(theme)[variant].borderColor};
  border-width: ${({ variant }: { variant: ButtonVariant }) =>
    variant === 'outline' ? 1 : 0}px;
  padding-left: ${({
    theme,
    size,
  }: {
    theme: DefaultTheme;
    size: ButtonSize;
  }) => paddingHorizontalBySize(theme)[size]}px;
  padding-right: ${({
    theme,
    size,
  }: {
    theme: DefaultTheme;
    size: ButtonSize;
  }) => paddingHorizontalBySize(theme)[size]}px;
  padding-top: ${({ theme, size }: { theme: DefaultTheme; size: ButtonSize }) =>
    paddingVerticalBySize(theme)[size]}px;
  padding-bottom: ${({
    theme,
    size,
  }: {
    theme: DefaultTheme;
    size: ButtonSize;
  }) => paddingVerticalBySize(theme)[size]}px;

  border-radius: ${({ fullRounded }: { fullRounded: boolean }) =>
    fullRounded ? 50 : 12}px;
  align-items: center;
  justify-content: center;

  flex-direction: row;
`;

export const CustomIcon = styled(Icon)<{
  leftIcon: boolean;
  rightIcon: boolean;
}>`
  margin-right: ${({
    theme,
    leftIcon,
  }: {
    theme: DefaultTheme;
    leftIcon: boolean;
  }) => (leftIcon ? theme.spacing.nano : 0)}px;
  margin-left: ${({
    theme,
    rightIcon,
  }: {
    theme: DefaultTheme;
    rightIcon: boolean;
  }) => (rightIcon ? theme.spacing.nano : 0)}px;
`;
