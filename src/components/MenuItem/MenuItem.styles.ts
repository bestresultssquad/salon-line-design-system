import type { DefaultTheme } from 'styled-components/native';
import styled from 'styled-components/native';

export const Container = styled.Pressable<{
  pressed: boolean;
  removeBorderBottom: boolean;
}>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: ${({
    removeBorderBottom,
  }: {
    removeBorderBottom: boolean;
  }) => (removeBorderBottom ? 0 : 1)}px;
  border-bottom-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.gray[200]};
  padding: ${({ theme }: { theme: DefaultTheme }) =>
    `${theme.spacing.xxxxs}px 0`};
  opacity: ${({ pressed }: { pressed: boolean }) => (pressed ? 0.5 : 1)};
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.white};
`;

export const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.nano}px;
`;
