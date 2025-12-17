import type { DefaultTheme } from 'styled-components/native';
import styled from 'styled-components/native';

export const AccordionContainer = styled.View`
  width: 100%;
  border-width: 1px;
  border-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.themed.borderColor};
  padding: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.xxxxs}px;
  border-radius: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.xxs}px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.nano}px;
`;

export const AccordionItemContainer = styled.View``;

export const Wrapper = styled.View`
  width: 100%;
  position: absolute;
  display: flex;
`;
