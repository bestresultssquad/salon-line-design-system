import type { DefaultTheme } from 'styled-components/native';
import styled from 'styled-components/native';
import type { ToastType } from './Toast.types';

export const stylesByType = (theme: DefaultTheme) => ({
  warning: {
    backgroundColor: theme.colors.yellow[700],
    titleColor: theme.colors.white,
  },
  error: {
    backgroundColor: theme.colors.red[500],
    titleColor: theme.colors.white,
  },
  success: {
    backgroundColor: theme.colors.green[700],
    titleColor: theme.colors.white,
  },
  notificationtoast: {
    backgroundColor: theme.colors.white,
    titleColor: theme.colors.white,
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
