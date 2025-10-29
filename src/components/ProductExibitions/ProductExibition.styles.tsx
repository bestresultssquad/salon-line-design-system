import Animated from 'react-native-reanimated';
import type { DefaultTheme } from 'styled-components/native';
import styled from 'styled-components/native';

export const ProductExibitionContainer = styled.View`
  padding: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.quarck}px;
  flex-direction: row;
  align-items: center;
  border-radius: ${({ theme }: { theme: DefaultTheme }) =>
    theme.spacing.nano}px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.baseColors.gray[100]};
`;

export const TabBg = styled(Animated.View)``;

export const IconContainer = styled.Pressable`
  align-items: center;
  padding-top: 6px;
  padding-bottom: 6px;
  margin-right: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.xxxs}px;
  margin-left: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.xxxs}px;
  border-radius: ${({ theme }: { theme: DefaultTheme }) =>
    theme.spacing.nano}px;
`;
