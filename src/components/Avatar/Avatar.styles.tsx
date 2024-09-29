import styled from 'styled-components/native';

export const Container = styled.View<{ rightLabel: boolean }>`
  align-items: center;
  gap: ${({ theme, rightLabel }) =>
    rightLabel ? theme.spacing.xxxxs : theme.spacing.nano}px;
  flex-direction: ${({ rightLabel }) => (rightLabel ? 'row' : 'column')};
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 99px;
`;
