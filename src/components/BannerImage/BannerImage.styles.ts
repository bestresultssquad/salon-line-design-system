import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const BannerImageContainer = styled.View`
  height: 340px;
  align-items: center;
`;

export const ImageContainer = styled.TouchableOpacity`
  flex: 1;
  width: ${Dimensions.get('window').width}px;
  padding-left: ${({ theme }) => theme.spacing.sm}px;
  padding-right: ${({ theme }) => theme.spacing.sm}px;
`;

export const BannerImg = styled.Image`
  height: 320px;
  width: 100%;
  border-radius: ${({ theme }) => theme.spacing.sm}px;
  background-color: red;
  margin-bottom: ${({ theme }) => theme.spacing.nano}px;
`;
