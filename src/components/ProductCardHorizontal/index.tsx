import { View } from 'react-native';
import {
  Card,
  Container,
  ImageContainer,
  ImageCustom,
  OldPrice,
  TitleMainContainer,
} from './ProductCardHorizontal.styles';
import type { ProductCardHorizontalProps } from './ProductCardHorizontal.type';
import Icon from '../Icon';
import Typography from '../Typography';
import Chip from '../ChipComponent';
import { useTheme } from 'styled-components/native';
import Counter from '../Counter';
import Button from '../Button';
import ProductCardHorizontalSkeleton from './ProductCardHorizontal.skeleton';

const ProductCardHorizontal = ({
  image,
  imageUri,
  title,
  oldPrice,
  price,
  chipTexts,
  onPress,
  onDecrement,
  onIncrement,
  value,
  variant,
  label,
  disabled,
  disableDecrement,
  disableIncrement,
}: ProductCardHorizontalProps) => {
  const { colors, spacing } = useTheme();

  return (
    <Card variant={variant ?? 'cart'}>
      <Container variant={variant ?? 'cart'}>
        {variant === 'cart' && (
          <TitleMainContainer>
            <Typography sizeVariant="medium" variant="sm">
              {label}
            </Typography>
            <Icon
              type="MoreHorizontalIcon"
              width={24}
              height={24}
              strokeWidth={2}
            />
          </TitleMainContainer>
        )}
        <View style={{ flexDirection: 'row', gap: spacing.nano }}>
          <ImageContainer>
            <ImageCustom source={imageUri ? { uri: imageUri } : image} />
          </ImageContainer>
          <View
            style={{
              paddingVertical: variant === 'search' ? spacing.xxxxs : 0,
              gap: variant === 'search' ? spacing.xxs : 0,
              flex: 1,
            }}
          >
            {variant === 'cart' && (
              <View
                style={{
                  flexDirection: 'row',
                  gap: spacing.quarck,
                  marginBottom: spacing.quarck,
                }}
              >
                {chipTexts?.map((chipText, index) => (
                  <Chip
                    key={index}
                    label={chipText.text}
                    variant={chipText.variant}
                    style={{
                      position: 'relative',
                      backgroundColor:
                        chipText.variant === 'outlined'
                          ? undefined
                          : colors.black,
                      top: undefined,
                      left: undefined,
                    }}
                  />
                ))}
              </View>
            )}
            <Typography
              sizeVariant="medium"
              variant="xs"
              style={{ maxWidth: 207, marginBottom: spacing.nano }}
              numberOfLines={2}
            >
              {title}
            </Typography>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <View style={{ gap: variant === 'cart' ? spacing.nano : 0 }}>
                <OldPrice
                  sizeVariant="medium"
                  variant="xs"
                  color={colors.gray[600]}
                >
                  {disabled ? 'Produto' : oldPrice}
                </OldPrice>
                <Typography sizeVariant="semiBold" variant="xl">
                  {disabled ? 'Indisponível' : price}
                </Typography>
              </View>
              <View>
                {variant === 'cart' ? (
                  <Counter
                    disableDecrement={disableDecrement}
                    disableIncrement={disableIncrement}
                    onDecrement={onDecrement ?? (() => {})}
                    onIncrement={onIncrement ?? (() => {})}
                    value={value ?? 1}
                  />
                ) : (
                  <Button
                    disabled={disabled}
                    onlyIcon
                    size="nano"
                    onPress={onPress}
                    variant="primary"
                    iconType="BagIcon"
                  />
                )}
              </View>
            </View>
          </View>
          <View />
        </View>
      </Container>
    </Card>
  );
};

ProductCardHorizontal.Skeleton = ProductCardHorizontalSkeleton;

export default ProductCardHorizontal;
