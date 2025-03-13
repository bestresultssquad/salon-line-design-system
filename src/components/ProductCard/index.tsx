import {
  ButtonContainer,
  Card,
  Container,
  DescriptionContainer,
  ImageContainer,
  ImageCustom,
  OldPrice,
  PriceContainer,
  PriceLeft,
  StarContainer,
  TitleContainer,
} from './ProductCard.styles';
import Typography from '../Typography';
import Icon from '../Icon';
import Button from '../Button';
import type { ProductCardProps } from './ProductCard.types';
import Chip from '../ChipComponent';
import FavoriteButton from '../FavoriteButton';
import ProductCardSkeleton from './ProductCard.skeleton';
import { useTheme } from 'styled-components/native';
import { View } from 'react-native';

const ProductCard = ({
  imageUri,
  onFavoritePress,
  onPress,
  price,
  rating,
  ratingCount,
  title,
  oldPrice,
  chipText,
  favorited = false,
  onCardPress,
  disabled,
  tags,
}: ProductCardProps) => {
  const { colors } = useTheme();

  return (
    <Card onPress={onCardPress}>
      <Container>
        <ImageContainer>
          {chipText && (
            <Chip
              label={chipText}
              style={{ position: 'absolute', top: 12, left: 5 }}
            />
          )}
          <FavoriteButton onPress={onFavoritePress} favorited={favorited} />
          <ImageCustom source={{ uri: imageUri }} />
          <View
            style={{ flexDirection: 'row', gap: 4, padding: 4, height: 28 }}
          >
            {tags
              ?.filter((tag) => tag.visible)
              .map((tag, index) => (
                <Chip
                  key={index}
                  label={tag.text}
                  style={{
                    backgroundColor: tag.color,
                  }}
                />
              ))}
          </View>
        </ImageContainer>
        <DescriptionContainer>
          <StarContainer>
            {Array.from({ length: rating }).map((_, index) => (
              <Icon
                key={index}
                width={12}
                height={12}
                type="StarIcon"
                fill={colors.yellow[500]}
              />
            ))}
            {Array.from({ length: 5 - rating }).map((_, index) => (
              <Icon
                key={index}
                width={12}
                height={12}
                type="StarIcon"
                fill={colors.gray[300]}
              />
            ))}
            <Typography variant="3xs" sizeVariant="medium">
              {`(${ratingCount})`}
            </Typography>
          </StarContainer>
          <TitleContainer>
            <Typography variant="xs" sizeVariant="semiBold" numberOfLines={2}>
              {title}
            </Typography>
          </TitleContainer>
          <PriceContainer>
            <PriceLeft>
              {oldPrice && (
                <OldPrice variant="xs" sizeVariant="semiBold">
                  {disabled ? 'Produto' : oldPrice?.toString()}
                </OldPrice>
              )}
              <Typography variant="sm" sizeVariant="semiBold">
                {disabled ? 'Indisponível' : price}
              </Typography>
            </PriceLeft>
            <ButtonContainer>
              <Button
                disabled={disabled}
                onPress={onPress}
                onlyIcon
                variant="primary"
                size="nano"
                iconType="BagIcon"
                iconSize={16}
                iconStrokeColor={colors.white}
              />
            </ButtonContainer>
          </PriceContainer>
        </DescriptionContainer>
      </Container>
    </Card>
  );
};

ProductCard.Skeleton = ProductCardSkeleton;

export default ProductCard;
