import {
  Animated,
  Dimensions,
  FlatList,
  type ImageSourcePropType,
  type ListRenderItemInfo,
} from 'react-native';
import {
  BannerImageContainer,
  BannerImg,
  ImageContainer,
} from './BannerImageMd.styles';
import { useRef, useState } from 'react';
import Paginator from '../Paginator';
import type { BannerImageProps, BannerObject } from './BannerImageMd.types';
import BannerImageSkeleton from '../BannerImage/BannerImage.skeleton';

const BannerImageMd = ({
  bannerObject,
  fullWidth = false,
  removeBorder = false,
}: BannerImageProps) => {
  const [_, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get('window').width;

  const isCarrousel = bannerObject.length > 1;

  const renderBannerImage = ({
    item,
    index,
  }: ListRenderItemInfo<BannerObject>) => {
    return (
      <ImageContainer onPress={item.action} fullWidth={fullWidth}>
        <BannerImg
          removeBorder={removeBorder}
          key={index}
          //@ts-ignore
          source={
            item.imageFile
              ? item.imageFile
              : ({ uri: item.imageUrl } as ImageSourcePropType)
          }
          testID={`image-${index}`}
        />
      </ImageContainer>
    );
  };

  const getItemLayout = (_: any, index: any) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <BannerImageContainer>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        ref={flatListRef}
        data={bannerObject}
        renderItem={renderBannerImage}
        getItemLayout={getItemLayout}
        onViewableItemsChanged={viewableItemsChanged}
        horizontal
        pagingEnabled={true}
        viewabilityConfig={viewConfig}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        showsHorizontalScrollIndicator={false}
      />
      {isCarrousel && (
        <Paginator
          testID="paginator"
          variant="default"
          data={bannerObject}
          scrollX={scrollX}
          style={{ paddingTop: 12 }}
        />
      )}
    </BannerImageContainer>
  );
};

BannerImageMd.Skeleton = BannerImageSkeleton;

export default BannerImageMd;
