import { Dimensions } from 'react-native';
import { BannerImageContainer } from './BannerImageMd.styles';
import { useRef } from 'react';
import type { BannerImageProps } from './BannerImageMd.types';
import BannerImageSkeleton from '../BannerImage/BannerImage.skeleton';
import BannerImg from './BannerImgWithCounter';
import BannerImgWithCounter from './BannerImgWithCounter';
import Carousel, {
  type ICarouselInstance,
  Pagination,
  type CarouselRenderItem,
} from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

const BannerImageMd = ({
  bannerObject,
  fullWidth = false,
  removeBorder = false,
  width,
  height,
}: BannerImageProps) => {
  const ref = useRef<ICarouselInstance>(null);
  const screenWidth = Dimensions.get('window').width;
  const progress = useSharedValue<number>(0);
  const { themed, baseColors } = useTheme();

  const isCarrousel = bannerObject.length > 1;

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  const renderBannerImage: CarouselRenderItem<any> = ({ item, index }) => {
    if (!item.date) {
      return (
        <BannerImg
          removeBorder={removeBorder}
          index={index}
          item={item}
          fullWidth={fullWidth}
          width={width}
          height={height}
        />
      );
    }
    return (
      <BannerImgWithCounter
        removeBorder={removeBorder}
        index={index}
        item={item}
        fullWidth={fullWidth}
        width={width}
        height={height}
      />
    );
  };

  return (
    <BannerImageContainer>
      <Carousel
        ref={ref}
        autoPlay={isCarrousel}
        autoPlayInterval={5000}
        loop={isCarrousel}
        data={bannerObject}
        renderItem={renderBannerImage}
        onProgressChange={progress}
        width={screenWidth}
        height={height || 350}
      />
      {isCarrousel && (
        <Pagination.Custom
          progress={progress}
          data={bannerObject}
          dotStyle={{
            backgroundColor: baseColors.gray[600],
            borderRadius: 50,
            width: 24,
          }}
          activeDotStyle={{
            backgroundColor: themed.text,
            borderRadius: 999,
            width: 12,
          }}
          containerStyle={{ gap: 5, marginTop: 10 }}
          onPress={onPressPagination}
        />
      )}
    </BannerImageContainer>
  );
};

BannerImageMd.Skeleton = BannerImageSkeleton;

export default BannerImageMd;
