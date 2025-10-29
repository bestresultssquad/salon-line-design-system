import styled from 'styled-components/native';
import Typography from '../Typography';
import type { DefaultTheme } from 'styled-components/native';

export const Container = styled.View``;

export const TypographyCustom = styled(Typography)<{ disabled: boolean }>`
  color: ${({ theme, disabled }: { theme: DefaultTheme; disabled: boolean }) =>
    disabled ? theme.baseColors.gray[600] : theme.themed.text};
`;
