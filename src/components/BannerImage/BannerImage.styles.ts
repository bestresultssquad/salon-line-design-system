import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import type { BannerVariant } from './BannerImage.types';
import FastImage from 'react-native-fast-image';

const getStyleByVariant = () => ({
  sm: {
    containerHeight: 128,
    imgHeight: 128,
  },
  md: {
    containerHeight: 340,
    imgHeight: 320,
  },
  blog: {
    containerHeight: 340,
    imgHeight: 320,
  },
});

export const BannerImageContainer = styled.View<{
  bannerVariant: BannerVariant;
}>`
  height: ${({ bannerVariant }) =>
    getStyleByVariant()[bannerVariant].containerHeight}px;
  align-items: center;
`;

export const ImageContainer = styled.TouchableOpacity`
  flex: 1;
  width: ${Dimensions.get('window').width}px;
  padding-left: ${({ theme }) => theme.spacing.sm}px;
  padding-right: ${({ theme }) => theme.spacing.sm}px;
`;

export const BannerImg = styled(FastImage)<{ bannerVariant: BannerVariant }>`
  height: ${({ bannerVariant }) =>
    getStyleByVariant()[bannerVariant].imgHeight}px;
  width: 100%;
  border-radius: ${({ theme }) => theme.spacing.sm}px;
  margin-bottom: ${({ theme }) => theme.spacing.nano}px;
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
