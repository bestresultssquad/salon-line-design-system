import { type ImageSourcePropType } from 'react-native';
import { BannerImg as Image, ImageContainer } from './BannerImageMd.styles';
import type { BannerObject } from './BannerImageMd.types';
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
  return (
    <ImageContainer
      delayPressIn={100}
      onPress={item.action}
      fullWidth={fullWidth}
    >
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
