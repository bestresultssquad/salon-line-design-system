import styled from 'styled-components/native';
import Button from '../Button';

export const FavoriteCustomButton = styled(Button)`
  position: absolute;
  top: ${({ theme }) => theme.spacing.quarck}px;
  right: ${({ theme }) => theme.spacing.quarck}px;
  z-index: 1;
`;
