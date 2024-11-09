import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.nano}px;
  align-items: center;
  padding: ${({ theme }) => `0px ${theme.spacing.nano}px`};
  border-width: 1px;
  border-radius: ${({ theme }) => theme.spacing.xxxxs}px;
  border-color: ${({ theme }) => theme.colors.gray[200]};
  height: 40px;
`;

export const TextContainer = styled.View`
  width: 20px;
  align-items: center;
`;
