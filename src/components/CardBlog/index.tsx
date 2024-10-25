import {
  BottomContainer,
  Card,
  Container,
  ImageContainer,
  ImageCustom,
  TextContainer,
} from './CardBlog.styles';
import type { CardBlogProps } from './CardBlog.types';
import Typography from '../Typography';
import Icon from '../Icon';
import { timeElapsed } from '../../utils/getTimeElapsed';
import { View } from 'react-native';
import Chip from '../ChipComponent';
import { useTheme } from 'styled-components/native';
import CardBlogSkeleton from './CardBlog.skeleton';

const CardBlog = ({
  category,
  date,
  description,
  image,
  title,
  variant,
  onCardPress,
}: CardBlogProps) => {
  const { colors, spacing } = useTheme();
  return (
    <Card>
      <Container activeOpacity={0.6} variant={variant} onPress={onCardPress}>
        <ImageContainer variant={variant}>
          <ImageCustom
            source={{ uri: image }}
            variant={variant}
            resizeMode="cover"
          />
        </ImageContainer>
        <TextContainer variant={variant}>
          <Typography sizeVariant="semiBold" variant="xs" numberOfLines={2}>
            {title}
          </Typography>
          <Typography sizeVariant="regular" variant="2xs" numberOfLines={2}>
            {description}
          </Typography>
          <BottomContainer variant={variant}>
            <View
              style={{
                flexDirection: 'row',
                gap: spacing.quarck,
                alignItems: 'center',
              }}
            >
              <Icon type="CalendarIcon" width={16} height={16} />
              <Typography sizeVariant="regular" variant="2xs">
                {timeElapsed(date)}
              </Typography>
            </View>
            <Chip
              size="small"
              label={category}
              variant="primary"
              style={{ backgroundColor: colors.purple[800] }}
            />
          </BottomContainer>
        </TextContainer>
      </Container>
    </Card>
  );
};

CardBlog.Skeleton = CardBlogSkeleton;

export default CardBlog;
