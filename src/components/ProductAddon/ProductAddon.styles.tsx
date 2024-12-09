import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Typography from '../Typography';
import FastImage from 'react-native-fast-image';

export const Container = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.nano}px;
`;
export const ImageContainer = styled.View`
  position: relative;
`;

export const ImageCustom = styled(FastImage)`
  height: 96px;
  width: 96px;
  border-radius: 16px;
`;

export const DescriptionContainer = styled.View`
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.quarck}px;
  flex: 1;
`;

export const CheckboxContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.quarck}px;
`;

export const TitleContainer = styled.View`
  min-height: 35.2px;
  flex: 1;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PriceLeft = styled.View``;

export const ButtonContainer = styled.View``;

export const OldPrice = styled(Typography).attrs(({ theme }) => ({
  color: theme.colors.gray[500],
}))`
  text-decoration-line: line-through;
`;

export const Card = styled(TouchableOpacity)`
  padding: ${({ theme }) => theme.spacing.nano}px;
  border-width: 1px;
  border-radius: ${({ theme }) => theme.spacing.xxxxs}px;
  width: 100%;
  border-color: ${({ theme }) => theme.colors.gray[200]};
`;
