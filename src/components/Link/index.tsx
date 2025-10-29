import { TouchableOpacity } from 'react-native';
import type { LinkProps } from './Link.types';
import { TypographyCustom } from './Link.styles';

const Link = ({
  onPress,
  typographySizeVariant,
  typographyVariant,
  typographyColor,
  children,
  disabled = false,
  ...props
}: LinkProps) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <TypographyCustom
        {...props}
        disabled={disabled}
        sizeVariant={typographySizeVariant ?? 'medium'}
        variant={typographyVariant ?? 'base'}
        color={typographyColor}
      >
        {children}
      </TypographyCustom>
    </TouchableOpacity>
  );
};

export default Link;
