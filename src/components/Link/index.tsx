import { TouchableOpacity } from 'react-native';
import Typography from '../Typography';
import type { LinkProps } from './Link.types';

const Link = ({
  onPress,
  typographySizeVariant,
  typographyVariant,
  children,
}: LinkProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Typography
        sizeVariant={typographySizeVariant ?? 'medium'}
        variant={typographyVariant ?? 'base'}
      >
        {children}
      </Typography>
    </TouchableOpacity>
  );
};

export default Link;
