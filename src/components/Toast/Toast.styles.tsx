import type { DefaultTheme } from 'styled-components/native';
import styled from 'styled-components/native';
import type { ToastType } from './Toast.types';

export const stylesByType = (theme: DefaultTheme) => ({
  warning: {
    backgroundColor: theme.colors.yellow[100],
    titleColor: theme.colors.yellow[700],
  },
  error: {
    backgroundColor: '#FFF2F2',
    titleColor: theme.colors.red[500],
  },
  success: {
    backgroundColor: '#E8F3EC',
    titleColor: theme.colors.green[700],
  },
});

export const ToastContainer = styled.View<{ type: ToastType }>`
  padding: ${({ theme }) => theme.spacing.xxxxs}px;
  border-radius: ${({ theme }) => theme.spacing.xxxxs}px;
  background-color: ${({ theme, type }) =>
    stylesByType(theme)[type].backgroundColor};
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.nano}px;
  margin-left: ${({ theme }) => theme.spacing.sm}px;
  margin-right: ${({ theme }) => theme.spacing.sm}px;
  margin-bottom: ${({ theme }) => theme.spacing.xxs}px;
`;
