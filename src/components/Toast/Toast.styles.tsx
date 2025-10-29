import type { DefaultTheme } from 'styled-components/native';
import styled from 'styled-components/native';
import type { ToastType } from './Toast.types';

export const stylesByType = (theme: DefaultTheme) => ({
  warning: {
    backgroundColor: theme.baseColors.yellow[700],
    titleColor: theme.baseColors.white,
  },
  error: {
    backgroundColor: theme.baseColors.red[500],
    titleColor: theme.baseColors.white,
  },
  success: {
    backgroundColor: theme.baseColors.green[700],
    titleColor: theme.baseColors.white,
  },
  notificationtoast: {
    backgroundColor: theme.baseColors.white,
    titleColor: theme.baseColors.white,
  },
});

export const ToastContainer = styled.TouchableOpacity<{ type: ToastType }>`
  padding: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.xxxxs}px;
  border-radius: ${({ theme }: { theme: DefaultTheme }) =>
    theme.spacing.xxxxs}px;
  background-color: ${({
    theme,
    type,
  }: {
    theme: DefaultTheme;
    type: ToastType;
  }) => stylesByType(theme)[type]?.backgroundColor};
  flex-direction: row;
  gap: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.nano}px;
  margin-left: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.sm}px;
  margin-right: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.sm}px;
  margin-bottom: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.xxs}px;
`;
