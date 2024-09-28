import styled from 'styled-components/native';

export const ChipContainer = styled.View`
  position: absolute;
  top: 12px;
  left: 5px;
  z-index: 1;
  padding: ${({ theme }) =>
    `${theme.spacing.quarck}px ${theme.spacing.nano}px`};
  background-color: ${({ theme }) => theme.colors.pink[600]};
  border-radius: 50px;
`;
