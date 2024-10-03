import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const CheckboxContainer = styled.View`
  flex: 1;
  flex-direction: row;
  gap: 8px;
  align-items: flex-start;
`;

export const CheckboxComponent = styled.View`
  width: ${({ theme }) => theme.spacing.xs}px;
  height: ${({ theme }) => theme.spacing.xs}px;
  border-radius: 6.5px;
  border-width: 1px;
  padding: 3px;
`;

export const CheckboxChecked = styled(Animated.View)``;
