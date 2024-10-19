import type { TouchableOpacityProps } from 'react-native';

export interface FavoriteButtonProps extends TouchableOpacityProps {
  favorited?: boolean;
  onPress: () => void;
}
