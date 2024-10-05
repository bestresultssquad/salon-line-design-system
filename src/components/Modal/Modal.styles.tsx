import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const ModalBackground = styled(Animated.View)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled(Animated.View)`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  elevation: 20;
  padding: ${({ theme }) => theme.spacing.xxxxs}px;
  gap: ${({ theme }) => theme.spacing.sm}px;
`;
