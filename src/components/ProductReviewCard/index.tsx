import { Pressable } from 'react-native';
import {
  ButtonContainer,
  Card,
  DescriptionContainer,
  LeftContainer,
  NameContainer,
  StarsContainer,
  StarsFilledContainer,
  UserAvatar,
} from './ProductReviewCard.styles';
import Typography from '../Typography';
import { useTheme } from 'styled-components/native';
import Icon from '../Icon';
import { View } from 'react-native';
import Button from '../Button';
import type { ProductReviewCardProps } from './ProductReviewCard.types';
import { timeElapsed } from '../../utils/getTimeElapsed';
import FastImage from '@d11/react-native-fast-image';

const ProductReviewCard = ({
  rating = 4.5,
  date,
  deslikeCount,
  likeCount,
  onDislikePress,
  onLikePress,
  onImagePress,
  recommends,
  review,
  userName,
  image,
}: ProductReviewCardProps) => {
  const { baseColors, spacing, themed } = useTheme();

  const totalStars = 5;
  const fullStars = Math.floor(rating);

  const getInitials = (name: string) => {
    const words = name.split(' ');

    const initials = words
      .filter((word) => word.length > 0)
      .map((word) => (word[0] ? word[0].toUpperCase() : ''));

    return initials.join('');
  };

  return (
    <Card>
      {image && (
        <Pressable onPress={onImagePress}>
          <FastImage
            source={{ uri: image }}
            style={{ width: 74, height: 162, borderRadius: 8 }}
          />
        </Pressable>
      )}
      <LeftContainer>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'space-between',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <NameContainer>
            <UserAvatar>
              <Typography
                sizeVariant="medium"
                variant="xs"
                color={baseColors.white}
              >
                {getInitials(userName)}
              </Typography>
            </UserAvatar>
            <Typography sizeVariant="medium" variant="sm" color={themed.text}>
              {userName}
            </Typography>
          </NameContainer>
          <StarsContainer>
            <StarsFilledContainer>
              {Array.from({ length: totalStars }, (_, index) => {
                return (
                  <Icon
                    key={index}
                    width={12}
                    height={12}
                    type="StarIcon"
                    fill={
                      index < fullStars
                        ? baseColors.yellow[500]
                        : baseColors.gray[200]
                    }
                  />
                );
              })}
            </StarsFilledContainer>
            <Typography variant="xs" sizeVariant="medium" color={themed.text}>
              {timeElapsed(date)}
            </Typography>
          </StarsContainer>
        </View>
        <DescriptionContainer>
          <Typography variant="xs" sizeVariant="regular" color={themed.text}>
            {review}
          </Typography>
        </DescriptionContainer>
        <ButtonContainer>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: spacing.nano,
            }}
          >
            <Button
              variant="primary"
              size="nano"
              leftIcon
              textSizeVariant="semiBold"
              textVariant="xs"
              onPress={onLikePress}
              textColor={themed.text}
              style={{
                backgroundColor: themed.backgroundTertiary,
                borderRadius: 8,
              }}
              customIcon={
                <Icon
                  width={16}
                  height={16}
                  type="LikeIcon"
                  strokeWidth={2}
                  stroke={baseColors.green[700]}
                />
              }
            >
              {' '}
              {likeCount}
            </Button>
            <Button
              variant="primary"
              size="nano"
              leftIcon
              onPress={onDislikePress}
              textSizeVariant="semiBold"
              textVariant="xs"
              textColor={themed.text}
              style={{
                backgroundColor: themed.backgroundTertiary,
                borderRadius: 8,
              }}
              customIcon={
                <Icon
                  width={16}
                  height={16}
                  type="DeslikeIcon"
                  strokeWidth={2}
                  stroke={baseColors.red[500]}
                />
              }
            >
              {' '}
              {deslikeCount}
            </Button>
          </View>
          {recommends && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: spacing.quarck,
              }}
            >
              <Icon
                width={20}
                height={20}
                type="StarCircleIcon"
                stroke={themed.success}
              />
              <Typography
                variant="xs"
                sizeVariant="medium"
                color={themed.success}
              >
                Recomenda!
              </Typography>
            </View>
          )}
        </ButtonContainer>
      </LeftContainer>
    </Card>
  );
};

export default ProductReviewCard;
