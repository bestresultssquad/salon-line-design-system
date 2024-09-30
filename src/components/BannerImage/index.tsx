import { Animated, Dimensions, FlatList } from 'react-native';
import {
  BannerImageContainer,
  BannerImg,
  ImageContainer,
} from './BannerImage.styles';
import { useCallback, useEffect, useRef, useState } from 'react';
import Paginator from '../Paginator';
import type { BannerImageProps } from './BannerImage.types';

const BannerImage = ({ bannerObject }: BannerImageProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get('window').width;

  const isCarrousel = bannerObject.length > 1;

  const renderBannerImage = ({ item, index }: any) => {
    return (
      <ImageContainer onPress={item.action}>
        <BannerImg
          key={index}
          source={{ uri: item.imageUrl }}
          alt={item.altText}
          testID={`image-${index}`}
        />
      </ImageContainer>
    );
  };

  const autoRotate = useCallback(() => {
    const nextIndex = (currentIndex + 1) % bannerObject.length;

    if (nextIndex >= 0 && nextIndex < bannerObject.length) {
      const nextItemOffset = screenWidth * nextIndex;
      flatListRef?.current?.scrollToOffset({
        animated: true,
        offset: nextItemOffset,
      });
      setCurrentIndex(nextIndex);
    } else {
      setCurrentIndex(0);
    }
  }, [bannerObject.length, currentIndex, screenWidth]);

  const getItemLayout = (_: any, index: any) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  useEffect(() => {
    if (!isCarrousel) return;
    const interval = setInterval(autoRotate, 4000);
    return () => clearInterval(interval);
  }, [autoRotate, currentIndex, isCarrousel]);

  return (
    <BannerImageContainer>
      <FlatList
        getItemLayout={getItemLayout}
        keyExtractor={(_, index) => index.toString()}
        ref={flatListRef}
        data={bannerObject}
        renderItem={renderBannerImage}
        horizontal
        pagingEnabled={true}
        snapToInterval={screenWidth}
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
        />
      )}
    </BannerImageContainer>
  );
};

export default BannerImage;
