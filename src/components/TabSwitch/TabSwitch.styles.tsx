import Animated from 'react-native-reanimated';
import type { DefaultTheme } from 'styled-components/native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  padding: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.quarck}px;
  border-width: 1px;
  border-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.themed.borderColor};
  border-radius: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.xxs}px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-height: 54px;
  justify-content: space-between;
`;

export const TextContainer = styled.View`
  padding: ${({ theme }: { theme: DefaultTheme }) =>
    `${theme.spacing.xxxxs}px 0px`};
  flex: 1;
  align-items: center;
`;
