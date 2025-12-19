import Typography from '../Typography';
import type { ChipProps } from './Chip.types';
import { ChipContainer } from './Chip.styles';

const Chip = ({
  variant = 'primary',
  size,
  textColor,
  label,
  ...props
}: ChipProps) => {
  return (
    <ChipContainer {...props} variant={variant} size={size ?? 'medium'}>
      <Typography
        numberOfLines={1}
        sizeVariant={props.textSizeVariant ?? 'semiBold'}
        variant={props.textVariant ?? '3xs'}
        color={textColor}
      >
        {label}
      </Typography>
    </ChipContainer>
  );
};

export default Chip;
