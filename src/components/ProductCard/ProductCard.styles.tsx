import { Platform, View } from 'react-native';
import styled, { css } from 'styled-components/native';
import Typography from '../Typography';
import Button from '../Button';

export const Container = styled.View`
  flex-direction: column;
  max-width: 158px;
`;
export const ImageContainer = styled.View`
  position: relative;
  width: 100%;
`;

export const ImageCustom = styled.Image`
  width: 100%;
  max-width: 158px;
  min-width: 158px;
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

export const TitleContainer = styled.View``;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PriceLeft = styled.View``;

export const ButtonContainer = styled.View``;

export const OldPrice = styled(Typography).attrs(({ theme }) => ({
  variant: 'xs',
  sizeVariant: 'medium',
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

export const Card = styled(View)<{ elevation?: 'md' }>`
  ${cardStyle}
`;
