import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import Typography from '../Typography';
import type { ProductCardHorizontalVariant } from './ProductCardHorizontal.type';
import FastImage from '@d11/react-native-fast-image';

export const TitleMainContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.nano}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray[200]};
  margin-bottom: ${({ theme }) => theme.spacing.nano}px;
`;

export const Container = styled.TouchableOpacity<{
  variant: ProductCardHorizontalVariant;
}>`
  flex-direction: column;
  padding: ${({ theme, variant }) =>
    variant === 'cart' ? `${theme.spacing.nano}px` : 0};
  border-radius: ${({ theme }) => theme.spacing.xxs}px;
`;

export const ImageContainer = styled.View`
  position: relative;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.nano}px;
`;

export const ImageCustom = styled(FastImage)`
  width: ${({ theme }) => theme.spacing.huge}px;
  height: ${({ theme }) => theme.spacing.huge}px;
  border-radius: ${({ theme }) => theme.spacing.xxs}px;
`;

export const OldPrice = styled(Typography)`
  text-decoration-line: line-through;
`;

const cardStyle = css<{
  elevation?: 'md';
}>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray[200]};

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

const cardSearchStyle = css`
  border-bottom-color: ${({ theme }) => theme.colors.gray[200]};
  border-bottom-width: 1px;
`;

export const Card = styled.View<{
  elevation?: 'md';
  variant: ProductCardHorizontalVariant;
}>`
  ${({ variant }) => (variant === 'cart' ? cardStyle : cardSearchStyle)}
`;
