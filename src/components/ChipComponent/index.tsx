import Typography from '../Typography';
import type { ChipProps } from './Chip.types';
import { ChipContainer } from './Chip.styles';

const Chip = ({ variant = 'primary', size, label, ...props }: ChipProps) => {
  return (
    <ChipContainer {...props} variant={variant} size={size ?? 'medium'}>
      <Typography
        numberOfLines={1}
        sizeVariant={props.textSizeVariant ?? 'semiBold'}
        variant={props.textVariant ?? '3xs'}
        color={variant === 'primary' ? 'white' : 'black'}
      >
        {label}
      </Typography>
    </ChipContainer>
  );
};

export default Chip;
