import styled, { css } from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';
import type { CardBlogVariant } from './CardBlog.types';
import FastImage from '@d11/react-native-fast-image';
import type { DefaultTheme } from 'styled-components/native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = DEVICE_WIDTH / 2 - 24;
const CARD_WIDTH_HORIZONTAL = DEVICE_WIDTH - 24;

const cardStyle = css<{
  elevation?: 'md';
}>`
  background-color: ${({ theme }) => theme.themed.backgroundSecondary};
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
    width: CARD_WIDTH_HORIZONTAL - 12,
    imgWidth: 104,
    imgHeight: 104,
    textContainerWidth: CARD_WIDTH_HORIZONTAL - 116,
  },
  vertical: {
    flexDirection: 'column',
    width: CARD_WIDTH,
    imgWidth: CARD_WIDTH,
    imgHeight: 144,
    textContainerWidth: CARD_WIDTH,
  },
});

export const Container = styled.TouchableOpacity<{ variant: CardBlogVariant }>`
  flex-direction: ${({ variant }: { variant: CardBlogVariant }) =>
    getSizeByVariant()[variant].flexDirection};
  width: ${({ variant }: { variant: CardBlogVariant }) =>
    getSizeByVariant()[variant].width}px;
  align-items: center;
`;

export const ImageContainer = styled.View<{ variant: CardBlogVariant }>`
  width: ${({ variant }: { variant: CardBlogVariant }) =>
    getSizeByVariant()[variant].imgWidth}px;
  height: ${({ variant }: { variant: CardBlogVariant }) =>
    getSizeByVariant()[variant].imgHeight}px;
  border-radius: 16px;
`;

export const ImageCustom = styled(FastImage)<{ variant: CardBlogVariant }>`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

export const TextContainer = styled.View<{ variant: CardBlogVariant }>`
  padding: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.nano}px;
  width: ${({ variant }: { variant: CardBlogVariant }) =>
    getSizeByVariant()[variant].textContainerWidth}px;
  gap: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.quarck}px;
`;

export const BottomContainer = styled.View<{ variant: CardBlogVariant }>`
  margin-top: ${({
    theme,
    variant,
  }: {
    theme: DefaultTheme;
    variant: CardBlogVariant;
  }) => (variant === 'vertical' ? theme.spacing.nano : theme.spacing.quarck)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.nano}px;
`;
