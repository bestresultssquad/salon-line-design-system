import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import FastImage from '@d11/react-native-fast-image';

export const BannerImageContainer = styled.View`
  align-items: center;
`;

export const ImageContainer = styled.TouchableOpacity<{
  fullWidth: boolean;
}>`
  width: ${Dimensions.get('window').width}px;
  padding-left: ${({ theme, fullWidth }) =>
    fullWidth ? 0 : theme.spacing.sm}px;
  padding-right: ${({ theme, fullWidth }) =>
    fullWidth ? 0 : theme.spacing.sm}px;
`;

export const BannerImg = styled(FastImage)<{
  removeBorder: boolean;
}>`
  border-radius: ${({ theme, removeBorder }) =>
    removeBorder ? 0 : theme.spacing.sm}px;
`;
