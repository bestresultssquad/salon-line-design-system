import {
  Dimensions,
  View,
  StyleSheet,
  type ImageSourcePropType,
} from 'react-native';
import { BannerImg as Image, ImageContainer } from './BannerImageMd.styles';
import type { BannerObject } from './BannerImageMd.types';
import { useTimeCounter } from '../../utils/useTimeCounter';
import Typography from '../Typography';
import { useTheme } from 'styled-components/native';
import { memo, useMemo } from 'react';

const WINDOW_WIDTH = Dimensions.get('window').width;
const COUNTER_BOX_WIDTH = 76;
const COUNTER_TRANSLATE_X = -0.3 * WINDOW_WIDTH;

const CounterBox = memo(
  ({
    value,
    label,
    baseColors,
    spacing,
  }: {
    value: string;
    label: string;
    baseColors: any;
    spacing: any;
  }) => (
    <View
      style={[
        styles.counterBox,
        {
          backgroundColor: baseColors.gray[900],
          borderRadius: spacing.xxxxs,
        },
      ]}
    >
      <Typography sizeVariant="semiBold" variant="lg" color={baseColors.white}>
        {value}
      </Typography>
      <Typography sizeVariant="medium" variant="2xs" color={baseColors.white}>
        {label}
      </Typography>
    </View>
  )
);

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
  const { baseColors, spacing } = useTheme();

  const date = useMemo(() => {
    if (!item.date) return new Date();
    const [datePart, timePart] = item.date.split('-');
    const [day, month, year] = datePart?.split('/') || [];
    const formattedDateString = `${year}-${month}-${day}T${timePart?.trim()}:00`;
    return new Date(formattedDateString);
  }, [item.date]);

  const { hours, minutes, seconds, hasEnded } = useTimeCounter(date);

  const containerStyle = useMemo(
    () => ({
      transform: [{ translateX: COUNTER_TRANSLATE_X }],
    }),
    []
  );

  const counterRowStyle = useMemo(
    () => ({
      gap: spacing.nano,
    }),
    [spacing.nano]
  );

  const imageSource = useMemo(
    () =>
      item.imageFile ||
      ({
        uri: item.imageUrl,
        cache: 'immutable',
      } as unknown as ImageSourcePropType),
    [item.imageFile, item.imageUrl]
  );

  const imageStyle = useMemo(
    () => ({
      width,
      height,
      aspectRatio: !width && !height ? 4 / 3 : undefined,
    }),
    [width, height]
  );

  return (
    <ImageContainer
      delayPressIn={100}
      onPress={item.action}
      fullWidth={fullWidth}
    >
      {item.date && !hasEnded && (
        <View style={[styles.counterContainer, containerStyle]}>
          <View style={[styles.counterRow, counterRowStyle]}>
            <CounterBox
              value={hours}
              label="Horas"
              baseColors={baseColors}
              spacing={spacing}
            />
            <CounterBox
              value={minutes}
              label="Minutos"
              baseColors={baseColors}
              spacing={spacing}
            />
            <CounterBox
              value={seconds}
              label="Segundos"
              baseColors={baseColors}
              spacing={spacing}
            />
          </View>
        </View>
      )}
      <Image
        removeBorder={removeBorder}
        key={index}
        source={imageSource}
        style={imageStyle}
        testID={`image-${index}`}
      />
    </ImageContainer>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    position: 'absolute',
    bottom: 10,
    left: '50%',
    zIndex: 1,
  },
  counterRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  counterBox: {
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: COUNTER_BOX_WIDTH,
  },
});

export default memo(BannerImg);
