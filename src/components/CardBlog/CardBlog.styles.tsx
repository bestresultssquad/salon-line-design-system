import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';
import type { CardBlogVariant } from './CardBlog.types';

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

export const Card = styled.View`
  ${cardStyle}
`;

const getSizeByVariant = () => ({
  horizontal: {
    flexDirection: 'row',
    width: 327,
    imgWidth: 104,
    imgHeight: 104,
    textContainerWidth: 223,
  },
  vertical: {
    flexDirection: 'column',
    width: 158,
    imgWidth: 158,
    imgHeight: 144,
    textContainerWidth: 158,
  },
});

export const Container = styled.View<{ variant: CardBlogVariant }>`
  flex-direction: ${({ variant }) => getSizeByVariant()[variant].flexDirection};
  width: ${({ variant }) => getSizeByVariant()[variant].width}px;
`;

export const ImageContainer = styled.View<{ variant: CardBlogVariant }>`
  width: ${({ variant }) => getSizeByVariant()[variant].imgWidth}px;
  height: ${({ variant }) => getSizeByVariant()[variant].imgHeight}px;
  border-radius: 16px;
`;

export const ImageCustom = styled.Image<{ variant: CardBlogVariant }>`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

export const TextContainer = styled.View<{ variant: CardBlogVariant }>`
  padding: ${({ theme }) => theme.spacing.nano}px;
  width: ${({ variant }) => getSizeByVariant()[variant].textContainerWidth}px;
  gap: ${({ theme }) => theme.spacing.quarck}px;
`;

export const BottomContainer = styled.View<{ variant: CardBlogVariant }>`
  margin-top: ${({ theme, variant }) =>
    variant === 'vertical' ? theme.spacing.nano : theme.spacing.quarck}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
