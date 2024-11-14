import { ButtonContainer, CustomIcon } from './Button.styles';
import Typography from '../Typography';
import type { Props } from './Button.types';
import { useTheme } from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import Loading from '../Loading';

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
  iconType,
  iconSize,
  iconStrokeColor = 'white',
  iconFill = 'none',
  ...props
}: Props) => {
  const { colors } = useTheme();

  const renderLeftIcon = () => {
    if (customIcon) {
      return customIcon;
    }

    return (
      <CustomIcon
        testID="custom-icon-left"
        leftIcon={leftIcon}
        rightIcon={false}
        type={iconType}
        width={iconSize ?? 24}
        height={iconSize ?? 24}
        stroke={iconStrokeColor}
        fill={iconFill}
        strokeWidth={1.5}
      />
    );
  };

  const renderRightIcon = () => {
    if (rightIcon) {
      return rightIcon;
    }
    return (
      <CustomIcon
        testID="custom-icon-left"
        leftIcon={leftIcon}
        rightIcon={true}
        type={iconType}
        width={iconSize ?? 24}
        height={iconSize ?? 24}
        stroke={iconStrokeColor}
        fill={iconFill}
        strokeWidth={1.5}
      />
    );
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
          <Loading size={24} color="white" />
        ) : (
          <>
            <Typography
              color={
                textColor ??
                (variant !== 'outline' ? colors.white : colors.gray[900])
              }
              sizeVariant={textSizeVariant ?? 'regular'}
              variant={textVariant ?? '3xs'}
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
