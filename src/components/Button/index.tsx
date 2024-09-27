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
  ...props
}: Props) => {
  const { colors } = useTheme();
  return (
    <ButtonContainer {...props} size={size} variant={variant}>
      {(onlyIcon || leftIcon) && (
        <CustomIcon
          testID="custom-icon-left"
          leftIcon={leftIcon}
          type={iconType}
          width={24}
          height={24}
          stroke={iconStrokeColor}
          strokeWidth={1.5}
        />
      )}
      {!onlyIcon && children && (
        <Typography
          color={
            textColor
              ? textColor
              : variant !== 'outline'
                ? colors.white
                : colors.gray[900]
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
