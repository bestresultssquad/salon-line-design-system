import { Dimensions, Platform, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import Typography from '../Typography';
import FastImage from '@d11/react-native-fast-image';
import type { DefaultTheme } from 'styled-components/native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = DEVICE_WIDTH / 2 - 32;

export const Container = styled.View`
  flex-direction: column;
  width: ${CARD_WIDTH}px;
`;
export const ImageContainer = styled.View`
  position: relative;
  width: 100%;
`;

export const ImageCustom = styled(FastImage)`
  max-width: ${CARD_WIDTH}px;
  height: 160px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const DescriptionContainer = styled.View`
  flex-direction: column;
  padding: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.nano}px;
  gap: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.quarck}px;
`;

export const StarContainer = styled.View`
  flex-direction: row;
  gap: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.quarck}px;
  align-items: center;
`;

export const TitleContainer = styled.View`
  min-height: 35.2px;
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
)<{ disabled?: boolean }>`
  text-decoration-line: ${({ disabled }: { disabled: boolean }) =>
    disabled ? 'none' : 'line-through'};
`;

const cardStyle = css<{
  elevation?: 'md';
}>`
  background-color: ${({ theme }) => theme.themed.background};
  border-radius: 16px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.baseColors.gray[200]};
  ${({ theme, elevation = 'md' }) => css`
    elevation: 6;
    shadow-color: ${Platform.OS === 'ios'
      ? theme.elevation[elevation].color
      : '#00000049'};
    shadow-offset: ${theme.elevation[elevation].x}px
      ${theme.elevation[elevation].y}px;
    shadow-radius: 16px;
    shadow-opacity: 1;
  `}
`;

export const Card = styled(TouchableOpacity)<{ elevation?: 'md' }>`
  ${cardStyle}
`;
