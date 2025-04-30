import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import type { BannerVariant } from './BannerImage.types';
import FastImage from 'react-native-fast-image';

const getStyleByVariant = () => ({
  sm: {
    containerHeight: 128,
    imgHeight: 128,
    imgWidth: Dimensions.get('window').width,
  },
  md: {
    containerHeight: Dimensions.get('window').width + 20,
    imgHeight: Dimensions.get('window').width,
    imgWidth: Dimensions.get('window').width,
  },
  blog: {
    containerHeight: 340,
    imgHeight: 320,
    imgWidth: Dimensions.get('window').width,
  },
});

export const BannerImageContainer = styled.View<{
  bannerVariant: BannerVariant;
}>`
  height: ${({ bannerVariant }) =>
    getStyleByVariant()[bannerVariant].containerHeight}px;
  align-items: center;
`;

export const ImageContainer = styled.TouchableOpacity<{
  fullWidth: boolean;
  bannerVariant: BannerVariant;
  width?: number;
  height?: number;
}>`
  flex: 1;
  width: ${({ bannerVariant, width }) =>
    width || getStyleByVariant()[bannerVariant].imgWidth}px;
  height: ${({ height }) => `${height}px` || '100%'};
  padding-left: ${({ theme, fullWidth }) =>
    fullWidth ? 0 : theme.spacing.sm}px;
  padding-right: ${({ theme, fullWidth }) =>
    fullWidth ? 0 : theme.spacing.sm}px;
`;

export const BannerImg = styled(FastImage)<{
  bannerVariant: BannerVariant;
  removeBorder: boolean;
  width?: number;
  height?: number;
}>`
  height: ${({ bannerVariant, height }) =>
    height ? height : getStyleByVariant()[bannerVariant].imgHeight}px;
  width: ${({ width }) => `${width}px` || '100%'};
  border-radius: ${({ theme, removeBorder }) =>
    removeBorder ? 0 : theme.spacing.sm}px;
`;

export const BannerBgImg = styled.ImageBackground.attrs(() => ({
  imageStyle: {
    borderRadius: 16,
  },
}))<{
  bannerVariant: BannerVariant;
}>`
  height: ${({ bannerVariant }) =>
    getStyleByVariant()[bannerVariant].imgHeight}px;
  width: 100%;
  border-radius: ${({ theme }) => theme.spacing.sm}px;
  margin-bottom: ${({ theme }) => theme.spacing.nano}px;
`;

export const TextBlogContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.quarck}px;
  padding: ${({ theme }) => theme.spacing.xxxxs}px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: ${({ theme }) => theme.spacing.xxs}px;
`;
