import { Container, Text } from './Categories.styles';
import type { CategoriesProps } from './Categories.types';
import { FlatList, View } from 'react-native';
import { useCallback, useEffect, useRef, useState } from 'react';

const Categories = ({
  categories,
  variant,
  onPress,
  disableSelection,
}: CategoriesProps) => {
  const [selectedTab, setSelectedTab] = useState(undefined);
  const ref = useRef<FlatList>(null);

  const scrollToItem = useCallback(() => {
    const index = categories.findIndex((item) => item.id === selectedTab);
    ref.current?.scrollToIndex({
      index: index === -1 ? 0 : index,
      animated: true,
      viewPosition: 0.8,
    });
  }, [categories, selectedTab]);

  useEffect(() => {
    scrollToItem();
  }, [categories, scrollToItem, selectedTab]);

  return (
    <View style={{ height: 36 }}>
      <FlatList
        ref={ref}
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        contentContainerStyle={{ gap: 8 }}
        renderItem={({ item }) => (
          <Container
            activeOpacity={0.4}
            disableSelection={disableSelection ?? false}
            selected={selectedTab === item.id}
            variant={variant || 'default'}
            delayPressIn={100}
            onPress={() => {
              setSelectedTab(item.id);
              onPress(item);
            }}
          >
            <Text
              disableSelection={disableSelection ?? false}
              categoriesVariant={variant || 'default'}
              variant="sm"
              sizeVariant={'semiBold'}
              selected={selectedTab === item.id}
            >
              {item.text}
            </Text>
          </Container>
        )}
      />
    </View>
  );
};

export default Categories;
