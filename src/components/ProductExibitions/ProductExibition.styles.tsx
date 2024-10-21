import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const ProductExibitionContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.quarck}px;
  flex-direction: row;
  align-items: center;
  border-radius: ${({ theme }) => theme.spacing.nano}px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const TabBg = styled(Animated.View)``;

export const IconContainer = styled.Pressable`
  align-items: center;
  padding-top: 6px;
  padding-bottom: 6px;
  margin-right: ${({ theme }) => theme.spacing.xxxs}px;
  margin-left: ${({ theme }) => theme.spacing.xxxs}px;
  border-radius: ${({ theme }) => theme.spacing.nano}px;
`;
