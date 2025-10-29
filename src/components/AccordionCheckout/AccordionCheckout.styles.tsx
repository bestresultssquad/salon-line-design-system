import type { DefaultTheme } from 'styled-components/native';
import styled from 'styled-components/native';

export const AccordionContainer = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.baseColors.gray[200]};
`;

export const TitleContainer = styled.TouchableOpacity`
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
