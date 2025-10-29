import { ButtonContainer, CustomIcon } from './Button.styles';
import Typography from '../Typography';
import type { Props } from './Button.types';
import { useTheme } from 'styled-components/native';
import LottieView from 'lottie-react-native';
import { useRef } from 'react';

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
  const { baseColors } = useTheme();
  const animation = useRef<LottieView>(null);

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
      {(onlyIcon || leftIcon) && !loading && renderLeftIcon()}
      {loading ? (
        variant === 'outline' ? (
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: onlyIcon ? 16 : 24,
              height: onlyIcon ? 16 : 24,
            }}
            source={require('../../lottie/loading-black.json')}
          />
        ) : (
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: onlyIcon ? 16 : 24,
              height: onlyIcon ? 16 : 24,
            }}
            source={require('../../lottie/loading-white.json')}
          />
        )
      ) : (
        <>
          <Typography
            color={
              textColor ??
              (variant !== 'outline' ? baseColors.white : baseColors.gray[900])
            }
            sizeVariant={textSizeVariant ?? 'regular'}
            variant={textVariant ?? '3xs'}
            numberOfLines={1}
            style={{
              textDecorationLine: variant === 'link' ? 'underline' : 'none',
            }}
          >
            {children}
          </Typography>
          {rightIcon && renderRightIcon()}
        </>
      )}
    </ButtonContainer>
  );
};

export default Button;
