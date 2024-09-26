import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const PaginatorContainer = styled.View`
  flex: 1;
  flex-direction: row;
  height: ${({ theme }) => theme.spacing.xxxxs}px;
`;

export const Dots = styled(Animated.View)`
  height: ${({ theme }) => theme.spacing.xxxxs}px;
  border-radius: ${({ theme }) => theme.spacing.md}px;
  border-width: 1.5px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-left: 8px;
  margin-right: 8px;
`;
