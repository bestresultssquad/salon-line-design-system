import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  padding: ${({ theme }) => theme.spacing.quarck}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.spacing.xxs}px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-height: 54px;
  justify-content: space-between;
`;

export const TextContainer = styled.View`
  padding: ${({ theme }) => `${theme.spacing.xxxxs}px 0px`};
  flex: 1;
  align-items: center;
`;
