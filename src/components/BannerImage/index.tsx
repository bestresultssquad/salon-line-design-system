import {
  Animated,
  Dimensions,
  FlatList,
  View,
  type ImageSourcePropType,
  type ListRenderItemInfo,
} from 'react-native';
import {
  BannerBgImg,
  BannerImageContainer,
  BannerImg,
  ImageContainer,
  TextBlogContainer,
} from './BannerImage.styles';
import { useRef, useState, useCallback } from 'react';
import Paginator from '../Paginator';
import type { BannerImageProps, BannerObject } from './BannerImage.types';
import BannerImageSkeleton from './BannerImage.skeleton';
import Chip from '../ChipComponent';
import Typography from '../Typography';
import { useTheme } from 'styled-components/native';
import Icon from '../Icon';
import { timeElapsed } from '../../utils/getTimeElapsed';
import { useFocusEffect } from '@react-navigation/native';

const BannerImage = ({
  bannerObject,
  bannerVariant = 'md',
  fullWidth = false,
  removeBorder = false,
  width,
  height,
}: BannerImageProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const { colors } = useTheme();
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
    return (
      <ImageContainer
        delayPressIn={100}
        bannerVariant={bannerVariant}
        onPress={item.action}
        fullWidth={fullWidth}
        width={width}
        height={height}
      >
        {bannerVariant !== 'blog' && (
          <BannerImg
            removeBorder={removeBorder}
            bannerVariant={bannerVariant}
            key={index}
            width={width}
            height={height}
            //@ts-ignore
            source={
              item.imageFile
                ? item.imageFile
                : ({
                    uri: item.imageUrl,
                    cache: 'immutable',
                  } as unknown as ImageSourcePropType)
            }
            testID={`image-${index}`}
          />
        )}
        {bannerVariant === 'blog' && (
          <BannerBgImg
            bannerVariant={bannerVariant}
            key={index}
            source={item.imageUrl ? { uri: item.imageUrl } : item.imageFile}
            alt={item.altText}
            testID={`image-${index}`}
          >
            <TextBlogContainer>
              <View style={{ flexDirection: 'row' }}>
                <Chip
                  label={item.category ?? 'Beleza'}
                  size="small"
                  style={{
                    position: 'relative',
                    backgroundColor: colors.purple[500],
                  }}
                />
              </View>
              <Typography
                sizeVariant="medium"
                variant="base"
                color={colors.white}
              >
                {item?.title}
              </Typography>
              <Typography
                sizeVariant="regular"
                variant="2xs"
                color={colors.white}
                numberOfLines={1}
              >
                {item?.subtitle}
              </Typography>
              <View
                style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}
              >
                <Icon
                  width={16}
                  height={16}
                  stroke={colors.white}
                  type="CalendarIcon"
                  strokeWidth={1.5}
                />
                <Typography
                  sizeVariant="medium"
                  variant="3xs"
                  color={colors.white}
                >
                  {timeElapsed(item?.date ?? '')}
                </Typography>
              </View>
            </TextBlogContainer>
          </BannerBgImg>
        )}
      </ImageContainer>
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
    <BannerImageContainer bannerVariant={bannerVariant}>
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
        />
      )}
    </BannerImageContainer>
  );
};

BannerImage.Skeleton = BannerImageSkeleton;

export default BannerImage;
