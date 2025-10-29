import { Dimensions, View, type ImageSourcePropType } from 'react-native';
import { BannerImg as Image, ImageContainer } from './BannerImageMd.styles';
import type { BannerObject } from './BannerImageMd.types';
import { useTimeCounter } from '../../utils/useTimeCounter';
import Typography from '../Typography';
import { useTheme } from 'styled-components/native';
import { memo } from 'react';

const BannerImg = ({
  item,
  index,
  fullWidth = false,
  removeBorder = false,
  width,
  height,
}: {
  item: BannerObject;
  index: number;
  fullWidth?: boolean;
  removeBorder?: boolean;
  width?: number;
  height?: number;
}) => {
  const [datePart, timePart] = item.date?.split('-') ?? [];
  const [day, month, year] = datePart?.split('/') || [];
  const formattedDateString = `${year}-${month}-${day}T${timePart?.trim()}:00`;
  const date = new Date(formattedDateString);
  const { baseColors, spacing } = useTheme();

  const { hours, minutes, seconds, hasEnded } = useTimeCounter(date);

  return (
    <ImageContainer
      delayPressIn={100}
      onPress={item.action}
      fullWidth={fullWidth}
    >
      {item.date && !hasEnded && (
        <View
          style={{
            position: 'absolute',
            transform: [{ translateX: -0.3 * Dimensions.get('window').width }],
            bottom: 10,
            left: '50%',
            zIndex: 1,
          }}
        >
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              gap: spacing.nano,
            }}
          >
            <View
              style={{
                paddingVertical: 8,
                backgroundColor: baseColors.gray[900],
                borderRadius: spacing.xxxxs,
                alignItems: 'center',
                justifyContent: 'center',
                width: 76,
              }}
            >
              <Typography
                sizeVariant="semiBold"
                variant="lg"
                color={baseColors.white}
              >
                {hours}
              </Typography>
              <Typography
                sizeVariant="medium"
                variant="2xs"
                color={baseColors.white}
              >
                Horas
              </Typography>
            </View>
            <View
              style={{
                paddingVertical: 8,
                backgroundColor: baseColors.gray[900],
                borderRadius: spacing.xxxxs,
                alignItems: 'center',
                justifyContent: 'center',
                width: 76,
              }}
            >
              <Typography
                sizeVariant="semiBold"
                variant="lg"
                color={baseColors.white}
              >
                {minutes}
              </Typography>
              <Typography
                sizeVariant="medium"
                variant="2xs"
                color={baseColors.white}
              >
                Minutos
              </Typography>
            </View>
            <View
              style={{
                paddingVertical: 8,
                backgroundColor: baseColors.gray[900],
                borderRadius: spacing.xxxxs,
                alignItems: 'center',
                justifyContent: 'center',
                width: 76,
              }}
            >
              <Typography
                sizeVariant="semiBold"
                variant="lg"
                color={baseColors.white}
              >
                {seconds}
              </Typography>
              <Typography
                sizeVariant="medium"
                variant="2xs"
                color={baseColors.white}
              >
                Segundos
              </Typography>
            </View>
          </View>
        </View>
      )}
      <Image
        removeBorder={removeBorder}
        key={index}
        //@ts-ignore
        source={
          item.imageFile
            ? item.imageFile
            : ({
                uri: item.imageUrl,
                cache: 'immutable',
              } as unknown as ImageSourcePropType)
        }
        style={{
          width,
          height,
          aspectRatio: !width && !height ? 4 / 3 : undefined,
        }}
        testID={`image-${index}`}
      />
    </ImageContainer>
  );
};

export default memo(BannerImg);
