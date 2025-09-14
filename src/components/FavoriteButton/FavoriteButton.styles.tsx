import styled from 'styled-components/native';
import Button from '../Button';
import type { DefaultTheme } from 'styled-components/native';

export const FavoriteCustomButton = styled(Button)`
  position: absolute;
  top: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.quarck}px;
  right: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.quarck}px;
  z-index: 1;
`;
