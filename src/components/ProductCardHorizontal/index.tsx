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
import Button from '../Button';
import ProductCardHorizontalSkeleton from './ProductCardHorizontal.skeleton';
import { TouchableOpacity } from 'react-native';
import SelectUnits from '../SelectUnits';

const ProductCardHorizontal = ({
  imageUri,
  title,
  oldPrice,
  price,
  chipTexts,
  onPress,
  onRemove,
  value,
  variant,
  label,
  disabled,
  type = 'product',
  enableHeader,
  onPressCard,
  onSelectPress,
}: ProductCardHorizontalProps) => {
  const { baseColors, spacing, themed } = useTheme();

  return (
    <Card variant={variant ?? 'cart'}>
      <Container
        delayPressIn={100}
        variant={variant ?? 'cart'}
        onPress={onPressCard}
        activeOpacity={onPressCard ? 0.2 : 1}
      >
        {variant === 'cart' && enableHeader && (
          <TitleMainContainer>
            <Typography sizeVariant="medium" variant="sm">
              {label}
            </Typography>
            <View
              style={{
                flexDirection: 'row',
                gap: spacing.nano,
                alignItems: 'center',
              }}
            >
              <TouchableOpacity onPress={onRemove}>
                <Icon
                  type="TrashIcon"
                  width={24}
                  height={24}
                  strokeWidth={2}
                  stroke={baseColors.red[500]}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onPress}>
                <Icon
                  type="MoreHorizontalIcon"
                  width={24}
                  height={24}
                  strokeWidth={2}
                  stroke={themed.text}
                />
              </TouchableOpacity>
            </View>
          </TitleMainContainer>
        )}
        <View style={{ flexDirection: 'row' }}>
          <ImageContainer>
            <ImageCustom source={{ uri: imageUri, cache: 'immutable' }} />
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
                    textColor={
                      chipText.variant === 'outlined'
                        ? themed.text
                        : themed.inverseText
                    }
                    style={{
                      position: 'relative',
                      backgroundColor:
                        chipText.variant === 'outlined'
                          ? undefined
                          : themed.inverseBackground,
                      borderColor:
                        chipText.variant === 'outlined'
                          ? themed.text
                          : undefined,
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
              <View style={{ gap: variant === 'cart' ? spacing.quarck : 0 }}>
                {oldPrice && (
                  <OldPrice
                    sizeVariant="medium"
                    variant="xs"
                    color={baseColors.gray[600]}
                  >
                    {disabled ? 'Produto' : oldPrice}
                  </OldPrice>
                )}
                <Typography sizeVariant="semiBold" variant="xl">
                  {disabled ? 'Indisponível' : price}
                </Typography>
              </View>
              <View>
                {variant === 'cart' ? (
                  type === 'gift' ? (
                    <Typography sizeVariant="medium" variant="sm">
                      {value} Unidade(s)
                    </Typography>
                  ) : (
                    <SelectUnits value={value} onSelectPress={onSelectPress} />
                  )
                ) : (
                  <Button
                    disabled={disabled}
                    onlyIcon
                    size="nano"
                    onPress={onPress}
                    variant="primary"
                    iconType="BagIcon"
                    iconStrokeColor={themed.inverseText}
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
