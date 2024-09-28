import { ButtonContainer, CustomIcon } from './Button.styles';
import Typography from '../Typography';
import type { Props } from './Button.types';
import { useTheme } from 'styled-components/native';

const Button = ({
  children,
  textSizeVariant,
  size,
  variant,
  textVariant,
  iconType,
  onlyIcon = false,
  leftIcon = false,
  iconStrokeColor = 'white',
  textColor,
  fullRounded,
  iconSize,
  iconFill = 'none',
  customIcon,
  ...props
}: Props) => {
  const { colors } = useTheme();

  const renderIcon = () => {
    if (customIcon) {
      return customIcon;
    }

    return (
      <CustomIcon
        testID="custom-icon-left"
        leftIcon={leftIcon}
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
      {(onlyIcon || leftIcon) && renderIcon()}
      {!onlyIcon && children && (
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
      )}
    </ButtonContainer>
  );
};

export default Button;
