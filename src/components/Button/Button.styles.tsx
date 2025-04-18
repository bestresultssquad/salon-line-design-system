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
    backgroundColor: theme.colors.gray[900],
    borderColor: 'transparent',
  },
  outline: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.gray[600],
  },
  disabled: {
    backgroundColor: theme.colors.gray[400],
    borderColor: 'transparent',
  },
  cart: {
    backgroundColor: theme.colors.green[700],
    borderColor: 'transparent',
  },
  action: {
    backgroundColor: theme.colors.gray[100],
    borderColor: 'transparent',
  },

  favorite: {
    backgroundColor: theme.colors.gray[200],
    borderColor: 'transparent',
  },
  onboarding: {
    backgroundColor: theme.colors.gray[100],
    borderColor: 'transparent',
  },
  filter: {
    backgroundColor: theme.colors.gray[900],
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
  background-color: ${({ theme, variant, disabled }) =>
    disabled
      ? theme.colors.gray[400]
      : colorByVariant(theme)[variant].backgroundColor};
  border-color: ${({ theme, variant }) =>
    colorByVariant(theme)[variant].borderColor};
  border-width: ${({ variant }) => (variant === 'outline' ? 1 : 0)}px;
  padding-left: ${({ theme, size }) => paddingHorizontalBySize(theme)[size]}px;
  padding-right: ${({ theme, size }) => paddingHorizontalBySize(theme)[size]}px;
  padding-top: ${({ theme, size }) => paddingVerticalBySize(theme)[size]}px;
  padding-bottom: ${({ theme, size }) => paddingVerticalBySize(theme)[size]}px;

  border-radius: ${({ fullRounded }) => (fullRounded ? 50 : 12)}px;
  align-items: center;
  justify-content: center;

  flex-direction: row;
`;

export const CustomIcon = styled(Icon)<{
  leftIcon: boolean;
  rightIcon: boolean;
}>`
  margin-right: ${({ theme, leftIcon }) =>
    leftIcon ? theme.spacing.nano : 0}px;
  margin-left: ${({ theme, rightIcon }) =>
    rightIcon ? theme.spacing.nano : 0}px;
`;
