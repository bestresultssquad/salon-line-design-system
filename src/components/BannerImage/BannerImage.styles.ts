import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import type { BannerVariant } from './BannerImage.types';

export const BannerImageContainer = styled.View<{
  bannerVariant: BannerVariant;
}>`
  height: ${({ bannerVariant }) => (bannerVariant === 'md' ? 340 : 128)}px;
  align-items: center;
`;

export const ImageContainer = styled.TouchableOpacity`
  flex: 1;
  width: ${Dimensions.get('window').width}px;
  padding-left: ${({ theme }) => theme.spacing.sm}px;
  padding-right: ${({ theme }) => theme.spacing.sm}px;
`;

export const BannerImg = styled.Image<{ bannerVariant: BannerVariant }>`
  height: ${({ bannerVariant }) => (bannerVariant === 'md' ? 320 : 128)}px;
  width: 100%;
  border-radius: ${({ theme }) => theme.spacing.sm}px;
  background-color: red;
  margin-bottom: ${({ theme }) => theme.spacing.nano}px;
`;
