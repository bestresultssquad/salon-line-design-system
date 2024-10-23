import Typography from '../Typography';
import type { ChipProps } from './Chip.types';
import { ChipContainer } from './Chip.styles';

const Chip = ({ variant = 'primary', label, ...props }: ChipProps) => {
  return (
    <ChipContainer {...props} variant={variant}>
      <Typography
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
