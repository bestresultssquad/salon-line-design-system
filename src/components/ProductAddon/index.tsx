import {
  Card,
  CheckboxContainer,
  Container,
  DescriptionContainer,
  ImageContainer,
  ImageCustom,
  OldPrice,
  PriceContainer,
  PriceLeft,
  TitleContainer,
} from './ProductAddon.styles';
import Typography from '../Typography';
import type { ProductAddonProps } from './ProductAddon.types';
import Checkbox from '../Checkbox';

const ProductAddon = ({
  imageUri,
  price,
  title,
  oldPrice,
  disabled,
  onPress,
  checked,
}: ProductAddonProps) => {
  return (
    <Card onPress={onPress}>
      <Container>
        <CheckboxContainer>
          <Checkbox onPress={onPress} checked={checked} variant="sm" />
        </CheckboxContainer>
        <ImageContainer>
          <ImageCustom source={{ uri: imageUri }} />
        </ImageContainer>
        <DescriptionContainer>
          <TitleContainer>
            <Typography
              variant="xs"
              sizeVariant="medium"
              numberOfLines={2}
              style={{ flex: 1 }}
            >
              {title}
            </Typography>
          </TitleContainer>
          <PriceContainer>
            <PriceLeft>
              {oldPrice && (
                <OldPrice variant="sm" sizeVariant="semiBold">
                  {disabled ? 'Produto' : oldPrice?.toString()}
                </OldPrice>
              )}
              <Typography variant="xl" sizeVariant="semiBold">
                {disabled ? 'Indisponível' : price}
              </Typography>
            </PriceLeft>
          </PriceContainer>
        </DescriptionContainer>
      </Container>
    </Card>
  );
};

export default ProductAddon;
