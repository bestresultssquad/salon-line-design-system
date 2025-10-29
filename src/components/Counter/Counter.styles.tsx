import type { DefaultTheme } from 'styled-components/native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  gap: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.nano}px;
  align-items: center;
  border-width: 1px;
  border-radius: ${({ theme }: { theme: DefaultTheme }) =>
    theme.spacing.xxxxs}px;
  border-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.baseColors.gray[200]};
  height: 40px;
`;

export const TextContainer = styled.View`
  width: 15px;
  align-items: center;
`;
