import styled from 'styled-components/native';
import Typography from '../Typography';

export const Container = styled.View``;

export const TypographyCustom = styled(Typography)<{ disabled: boolean }>`
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray[600] : theme.colors.black};
`;
