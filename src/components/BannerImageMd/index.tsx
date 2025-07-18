import {
  Animated,
  Dimensions,
  FlatList,
  type ListRenderItemInfo,
} from 'react-native';
import { BannerImageContainer } from './BannerImageMd.styles';
import { useRef, useState, useCallback } from 'react';
import Paginator from '../Paginator';
import type { BannerImageProps, BannerObject } from './BannerImageMd.types';
import BannerImageSkeleton from '../BannerImage/BannerImage.skeleton';
import BannerImg from './BannerImgWithCounter';
import BannerImgWithCounter from './BannerImgWithCounter';
import { useFocusEffect } from '@react-navigation/native';

const BannerImageMd = ({
  bannerObject,
  fullWidth = false,
  removeBorder = false,
  width,
  height,
}: BannerImageProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get('window').width;

  const isCarrousel = bannerObject.length > 1;

  useFocusEffect(
    useCallback(() => {
      if (!isCarrousel) return;

      const interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % bannerObject.length;
        flatListRef.current?.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
        setCurrentIndex(nextIndex);
      }, 4000);

      return () => clearInterval(interval);
    }, [currentIndex, bannerObject.length, isCarrousel])
  );

  const renderBannerImage = ({
    item,
    index,
  }: ListRenderItemInfo<BannerObject>) => {
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

  const getItemLayout = (_: any, index: number) => ({
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
