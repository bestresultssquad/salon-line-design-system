import { ButtonContainer } from './Button.styles';
import Typography from '../Typography';
import type { Props } from './Button.types';
import { useTheme } from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

const Button = ({
  children,
  textSizeVariant,
  size,
  variant,
  textVariant,
  onlyIcon = false,
  leftIcon = false,
  textColor,
  fullRounded,
  customIcon,
  loading = false,
  rightIcon,
  ...props
}: Props) => {
  const { colors } = useTheme();

  const renderLeftIcon = () => {
    if (customIcon) {
      return customIcon;
    }

    return null;
  };

  const renderRightIcon = () => {
    if (rightIcon) {
      return rightIcon;
    }
    return null;
  };

  return (
    <ButtonContainer
      {...props}
      size={size}
      variant={variant}
      fullRounded={fullRounded}
    >
      {(onlyIcon || leftIcon) && renderLeftIcon()}
      {!onlyIcon &&
        children &&
        (loading ? (
          <ActivityIndicator size={'small'} style={{ height: 24 }} />
        ) : (
          <>
            <Typography
              color={
                textColor ??
                (variant !== 'outline' ? colors.white : colors.gray[900])
              }
              sizeVariant={textSizeVariant ?? 'regular'}
              variant={textVariant ?? '3xs'}
              style={{
                marginRight: rightIcon ? 8 : 0,
                marginLeft: leftIcon ? 8 : 0,
              }}
            >
              {children}
            </Typography>
            {rightIcon && renderRightIcon()}
          </>
        ))}
    </ButtonContainer>
  );
};

export default Button;
