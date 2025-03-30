import styled from 'styled-components/native';
import MaskInput from 'react-native-mask-input';
import type { InputVariant } from './Input.types';
import type { DefaultTheme } from 'styled-components/native';

const getPaddingByVariant = (variant: InputVariant, theme: DefaultTheme) => {
  switch (variant) {
    case 'sm':
      return {
        vertical: '10px',
        horizontal: '9px',
      };
    case 'md':
      return {
        vertical: `${theme.spacing.xxxs}px`,
        horizontal: `${theme.spacing.xxxxs}px`,
      };
    default:
      return {
        vertical: `${theme.spacing.xxxs}px`,
        horizontal: `${theme.spacing.xxxxs}px`,
      };
  }
};

const getBorder = (
  theme: DefaultTheme,
  error: boolean,
  focused: boolean,
  editable: boolean,
  clickable: boolean
) => {
  if (!editable && !clickable) {
    return 'none';
  }
  if (error) {
    return `1px solid ${theme.colors.red[500]}`;
  }
  if (focused) {
    return `1px solid  ${theme.colors.black}`;
  }

  return `1px solid  ${theme.colors.gray[200]}`;
};

export const Container = styled.View``;

export const InputContainer = styled.View<{
  editable: boolean;
  error: boolean;
  clickable: boolean;
  variant: InputVariant;
  focused: boolean;
}>`
  padding: ${({ theme, variant }) =>
    getPaddingByVariant(variant, theme).vertical +
    ' ' +
    getPaddingByVariant(variant, theme).horizontal};
  background-color: ${({ theme, editable, clickable }) =>
    editable || clickable ? theme.colors.white : theme.colors.gray[100]};
  border-radius: 12px;
  width: 100%;
  flex-direction: row;
  border: ${({ theme, editable, error, clickable, focused }) =>
    getBorder(theme, error, focused, editable, clickable)};
  align-items: center;
`;

export const TextInput = styled(MaskInput)<{
  rightIcon: boolean;
  leftIcon: boolean;
}>`
  flex: 1;
  font-family: ${({ theme }) => theme.typography.sm.medium.family};
  font-size: ${({ theme }) => theme.typography.sm.medium.size}px;
  font-weight: ${({ theme }) => theme.typography.sm.medium.weight};
  margin-left: ${({ theme, leftIcon }) =>
    leftIcon ? theme.spacing.xxxxs : 0}px;
  margin-right: ${({ theme, rightIcon }) =>
    rightIcon ? theme.spacing.xxxxs : 0}px;
  color: ${({ theme }) => theme.colors.black};
`;
