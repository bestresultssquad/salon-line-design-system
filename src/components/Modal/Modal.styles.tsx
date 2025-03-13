import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const ModalBackground = styled(Animated.View)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled(Animated.View)`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing.sm}px;
  elevation: 20;
  padding: ${({ theme }) => theme.spacing.xxs}px;
  gap: ${({ theme }) => theme.spacing.sm}px;
`;
