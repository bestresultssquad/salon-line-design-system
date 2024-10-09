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

const ProductCard = ({
  image,
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
}: ProductCardProps) => {
  return (
    <Card>
      <Container>
        <ImageContainer>
          {chipText && <Chip label={chipText} />}
          <FavoriteButton onPress={onFavoritePress} favorited={favorited} />
          <ImageCustom source={imageUri ? { uri: imageUri } : image} />
        </ImageContainer>
        <DescriptionContainer>
          <StarContainer>
            <Icon width={12} height={12} type="star" />
            <Typography variant="2xs" sizeVariant="semiBold">
              {rating.toString()}
            </Typography>
            <Typography variant="3xs" sizeVariant="medium">
              {`(${ratingCount}) Avaliações`}
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
                  {oldPrice?.toString()}
                </OldPrice>
              )}
              <Typography variant="sm" sizeVariant="semiBold">
                {price}
              </Typography>
            </PriceLeft>
            <ButtonContainer>
              <Button
                onPress={onPress}
                onlyIcon
                variant="primary"
                size="nano"
                iconType="arrowRight"
                iconSize={16}
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
