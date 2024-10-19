import Typography from '../Typography';
import type { ChipProps } from './Chip.types';
import { ChipContainer } from './Chip.styles';

const Chip = ({ label, ...props }: ChipProps) => {
  return (
    <ChipContainer {...props}>
      <Typography
        sizeVariant={props.textSizeVariant ?? 'semiBold'}
        variant={props.textVariant ?? '3xs'}
        color={'white'}
      >
        {label}
      </Typography>
    </ChipContainer>
  );
};

export default Chip;
