import { Image, Text } from 'react-native';
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
import { intervalToDuration, parseISO } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

const ProductReviewCard = ({
  rating = 4.5,
  date,
  deslikeCount,
  likeCount,
  onDislikePress,
  onLikePress,
  recommends,
  review,
  userName,
  image,
}: ProductReviewCardProps) => {
  const { colors, spacing } = useTheme();

  const totalStars = 5;
  const fullStars = Math.floor(rating);

  const getInitials = (name: string) => {
    const words = name.split(' ');

    const initials = words
      .filter((word) => word.length > 0)
      .map((word) => (word[0] ? word[0].toUpperCase() : ''));

    return initials.join('');
  };

  function timeElapsed(dataString: string) {
    const dataPassada = parseISO(dataString);

    const duration = intervalToDuration({
      start: formatInTimeZone(
        dataPassada,
        'America/Sao_Paulo',
        'yyyy-MM-dd HH:mm:ss'
      ),
      end: formatInTimeZone(
        new Date(),
        'America/Sao_Paulo',
        'yyyy-MM-dd HH:mm:ss'
      ),
    });

    if (duration?.years && duration.years > 0) {
      return `${duration.years} ano(s) atrás`;
    }
    if (duration?.months && duration.months > 0) {
      return `${duration.months} mês(es) atrás`;
    }
    if (duration?.days && duration.days > 0) {
      return `${duration.days} dia(s) atrás`;
    }
    if (duration?.hours && duration.hours > 0) {
      return `${duration.hours} hora(s) atrás`;
    }
    return '';
  }

  return (
    <Card>
      {image && (
        <Image
          source={{ uri: image }}
          width={74}
          height={162}
          style={{ borderRadius: 8 }}
        />
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
                color={colors.white}
              >
                {getInitials(userName)}
              </Typography>
            </UserAvatar>
            <Text>{userName}</Text>
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
                      index < fullStars ? colors.yellow[500] : colors.gray[200]
                    }
                  />
                );
              })}
            </StarsFilledContainer>
            <Typography
              variant="xs"
              sizeVariant="medium"
              color={colors.gray[600]}
            >
              {timeElapsed(date)}
            </Typography>
          </StarsContainer>
        </View>
        <DescriptionContainer>
          <Typography
            variant="xs"
            sizeVariant="regular"
            color={colors.gray[600]}
          >
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
              textColor={colors.black}
              style={{
                backgroundColor: colors.white,
                borderRadius: 8,
              }}
              customIcon={
                <Icon
                  width={16}
                  height={16}
                  type="LikeIcon"
                  strokeWidth={2}
                  stroke={colors.green[700]}
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
              textColor={colors.black}
              style={{
                backgroundColor: colors.white,
                borderRadius: 8,
              }}
              customIcon={
                <Icon
                  width={16}
                  height={16}
                  type="DeslikeIcon"
                  strokeWidth={2}
                  stroke={colors.red[500]}
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
                stroke={colors.green[700]}
              />
              <Typography
                variant="xs"
                sizeVariant="medium"
                color={colors.green[700]}
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
