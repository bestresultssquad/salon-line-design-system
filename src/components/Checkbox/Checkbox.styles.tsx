import { Animated } from 'react-native';
import type { DefaultTheme } from 'styled-components/native';
import styled from 'styled-components/native';
import type { CheckBoxVariant } from './Checkbox.types';

const getStyleByVariant = (theme: DefaultTheme) => ({
  sm: {
    size: theme.spacing.sm,
    borderRadius: 6.5,
    padding: 3,
    checkedRadius: 4,
  },
  default: {
    size: theme.spacing.xs,
    borderRadius: 6.5,
    padding: 3,
    checkedRadius: 4,
  },
  rounded: {
    size: theme.spacing.xxs,
    borderRadius: theme.spacing.giant,
    padding: 0,
    checkedRadius: theme.spacing.giant,
  },
});

export const CheckboxContainer = styled.View<{ variant: CheckBoxVariant }>`
  flex-direction: row;
  gap: ${({ theme, variant }) =>
    variant === 'default' ? theme.spacing.nano : theme.spacing.xxxxs}px;
  align-items: flex-start;
`;

export const CheckboxComponent = styled.View<{
  variant: CheckBoxVariant;
  disabled?: boolean;
}>`
  width: ${({ theme, variant }) => getStyleByVariant(theme)[variant].size}px;
  height: ${({ theme, variant }) => getStyleByVariant(theme)[variant].size}px;
  border-radius: ${({ theme, variant }) =>
    getStyleByVariant(theme)[variant].borderRadius}px;
  border-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.gray[400] : theme.colors.gray[900]};
  border-width: 1px;
  padding: ${({ theme, variant }) =>
    getStyleByVariant(theme)[variant].padding}px;
`;

export const CheckboxChecked = styled(Animated.View)<{
  variant: CheckBoxVariant;
}>`
  border-radius: ${({ theme, variant }) =>
    getStyleByVariant(theme)[variant].checkedRadius}px;
`;
