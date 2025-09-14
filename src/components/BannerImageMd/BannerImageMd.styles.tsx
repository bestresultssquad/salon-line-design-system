import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import FastImage from '@d11/react-native-fast-image';
import type { DefaultTheme } from 'styled-components/native';

export const BannerImageContainer = styled.View`
  align-items: center;
`;

export const ImageContainer = styled.TouchableOpacity<{ fullWidth: boolean }>`
  width: ${Dimensions.get('window').width}px;
  padding-left: ${({
    theme,
    fullWidth,
  }: {
    theme: DefaultTheme;
    fullWidth: boolean;
  }) => (fullWidth ? 0 : theme.spacing.sm)}px;
  padding-right: ${({
    theme,
    fullWidth,
  }: {
    theme: DefaultTheme;
    fullWidth: boolean;
  }) => (fullWidth ? 0 : theme.spacing.sm)}px;
`;

export const BannerImg = styled(FastImage)<{ removeBorder: boolean }>`
  border-radius: ${({
    theme,
    removeBorder,
  }: {
    theme: DefaultTheme;
    removeBorder: boolean;
  }) => (removeBorder ? 0 : theme.spacing.sm)}px;
`;
