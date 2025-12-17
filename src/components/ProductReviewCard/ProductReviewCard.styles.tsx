import type { DefaultTheme } from 'styled-components/native';
import styled from 'styled-components/native';

export const Card = styled.View`
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.themed.backgroundSecondary};
  padding: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.nano}px;
  border-radius: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.xxs}px;
  flex-direction: row;
  gap: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.nano}px;
  width: 100%;
`;

export const LeftContainer = styled.View`
  align-items: flex-start;
  flex: 1;
  gap: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.xxxxs}px;
  justify-content: space-between;
`;

export const NameContainer = styled.View`
  flex-direction: row;
  gap: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.xxxxs}px;
  align-items: center;
`;

export const StarsContainer = styled.View`
  align-items: center;
`;

export const StarsFilledContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserAvatar = styled.View`
  padding: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.nano}px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.baseColors.pink[600]};
  border-radius: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.xxs}px;
`;

export const DescriptionContainer = styled.View``;

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
