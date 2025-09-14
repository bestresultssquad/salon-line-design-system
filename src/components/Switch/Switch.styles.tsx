import Animated from 'react-native-reanimated';
import type { DefaultTheme } from 'styled-components/native';
import styled from 'styled-components/native';

export const SwitchContainer = styled(Animated.View)`
  width: 40px;
  height: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.sm}px;
  border-radius: 30px;
  justify-content: center;
`;

export const SwitchCircle = styled(Animated.View)`
  width: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.xs}px;
  height: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.xs}px;
  border-radius: 30px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.white};
`;
