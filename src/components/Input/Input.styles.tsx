import styled from 'styled-components/native';
import MaskInput from 'react-native-mask-input';

export const Container = styled.View``;

export const InputContainer = styled.View`
  padding: ${({ theme }) => `${theme.spacing.xxxs}px ${theme.spacing.xxxxs}px`};
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 12px;
  width: 100%;
  flex-direction: row;
`;

export const TextInput = styled(MaskInput)<{
  rightIcon: boolean;
  leftIcon: boolean;
}>`
  flex: 1;
  font-family: ${({ theme }) => theme.typography.sm.medium.family};
  font-size: ${({ theme }) => theme.typography.sm.medium.size}px;
  font-weight: ${({ theme }) => theme.typography.sm.medium.weight};
  margin-left: ${({ theme, leftIcon }) =>
    leftIcon ? theme.spacing.xxxxs : 0}px;
  margin-right: ${({ theme, rightIcon }) =>
    rightIcon ? theme.spacing.xxxxs : 0}px;
`;