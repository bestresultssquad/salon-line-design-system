import styled from 'styled-components/native';
import type { ChipVariant } from './Chip.types';

export const ChipContainer = styled.View<{ variant: ChipVariant }>`
  position: absolute;
  top: 12px;
  left: 5px;
  z-index: 1;
  padding: ${({ theme }) =>
    `${theme.spacing.quarck}px ${theme.spacing.nano}px`};
  background-color: ${({ theme, variant }) =>
    variant === 'outlined' ? theme.colors.white : theme.colors.pink[600]};
  border-radius: 50px;
  border-width: ${({ variant }) => (variant === 'outlined' ? '1px' : '0')};
  justify-content: center;
`;
