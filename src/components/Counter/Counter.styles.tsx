import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.nano}px;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.xxxs}px ${theme.spacing.nano}px`};
  border-width: 1px;
  border-radius: ${({ theme }) => theme.spacing.xxxxs}px;
  border-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const TextContainer = styled.View`
  width: 20px;
  align-items: center;
`;
