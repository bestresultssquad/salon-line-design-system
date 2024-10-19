import styled from 'styled-components/native';
import type { AccordionVariant } from './Accordion.types';

export const AccordionContainer = styled.View<{ variant: AccordionVariant }>`
  width: 100%;
  padding: ${({ theme, variant }) =>
    variant === 'default' ? `${theme.spacing.xxxxs}px 0` : 0};
  border-bottom-color: ${({ theme, variant }) =>
    variant === 'default' ? `${theme.colors.gray[200]} ` : 0};
  border-bottom-width: ${({ variant }) => (variant === 'default' ? `1px` : 0)};
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.nano}px;
`;

export const AccordionItemContainer = styled.View``;

export const Wrapper = styled.View`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
`;
