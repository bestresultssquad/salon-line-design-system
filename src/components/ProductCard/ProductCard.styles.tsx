import { Dimensions, Platform, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import Typography from '../Typography';

const DEVICE_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = DEVICE_WIDTH / 2 - 30;

export const Container = styled.View`
  flex-direction: column;
  width: ${CARD_WIDTH}px;
`;
export const ImageContainer = styled.View`
  position: relative;
  width: 100%;
`;

export const ImageCustom = styled.Image`
  max-width: ${CARD_WIDTH}px;
  height: 160px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const DescriptionContainer = styled.View`
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.nano}px;
  gap: ${({ theme }) => theme.spacing.quarck}px;
`;

export const StarContainer = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.quarck}px;
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

export const OldPrice = styled(Typography).attrs(({ theme }) => ({
  color: theme.colors.gray[500],
}))`
  text-decoration-line: line-through;
`;

const cardStyle = css<{
  elevation?: 'md';
}>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;

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
