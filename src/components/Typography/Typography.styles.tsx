import styled, { css } from 'styled-components/native';
import type { Props } from './Typography.types';

export const TypographyContainer = styled.Text<Props>`
  ${(props) => css`
    font-size: ${props.theme.typography[props.variant][props.sizeVariant]
      .size}px;
    font-weight: ${props.theme.typography[props.variant][props.sizeVariant]
      .weight};
    font-family: ${props.theme.typography[props.variant][props.sizeVariant]
      .family};
    line-height: ${props.theme.typography[props.variant][props.sizeVariant]
      .lineHeight}px;
    color: ${props.color ? props.color : props.theme.colors.white};
  `}
`;
