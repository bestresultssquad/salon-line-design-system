import Animated from 'react-native-reanimated';
import type { DefaultTheme } from 'styled-components/native';
import styled from 'styled-components/native';

export const ModalBackground = styled(Animated.View)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled(Animated.View)`
  width: 90%;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.themed.background};
  border-radius: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.sm}px;
  elevation: 20;
  padding: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.xxs}px;
  gap: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.sm}px;
`;
