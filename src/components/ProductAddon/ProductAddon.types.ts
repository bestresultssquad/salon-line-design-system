import type { ImageRequireSource } from 'react-native';

export interface ProductAddonProps {
  oldPrice?: string;
  price: string;
  title: string;
  image?: ImageRequireSource;
  imageUri?: string;
  onPress: () => void;
  disabled?: boolean;
  checked?: boolean;
}
