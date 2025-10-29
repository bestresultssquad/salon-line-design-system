import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Typography from '../Typography';
import FastImage from '@d11/react-native-fast-image';
import type { DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  gap: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.nano}px;
`;
export const ImageContainer = styled.View`
  position: relative;
`;

export const ImageCustom = styled(FastImage)`
  height: 96px;
  width: 96px;
  border-radius: 16px;
`;

export const DescriptionContainer = styled.View`
  flex-direction: column;
  gap: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.quarck}px;
  flex: 1;
`;

export const CheckboxContainer = styled.View`
  padding: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.quarck}px;
`;

export const TitleContainer = styled.View`
  min-height: 35.2px;
  flex: 1;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PriceLeft = styled.View``;

export const ButtonContainer = styled.View``;

export const OldPrice = styled(Typography).attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    color: theme.baseColors.gray[500],
  })
)`
  text-decoration-line: line-through;
`;

export const Card = styled(TouchableOpacity)`
  padding: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.nano}px;
  border-width: 1px;
  border-radius: ${({ theme }: { theme: DefaultTheme }) =>
    theme.spacing.xxxxs}px;
  width: 100%;
  border-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.baseColors.gray[200]};
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.themed.background};
`;
