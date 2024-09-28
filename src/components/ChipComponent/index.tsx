import Typography from '../Typography';
import type { ChipProps } from './Chip.types';
import { ChipContainer } from './Chips.styles';

const Chip = ({ label, ...props }: ChipProps) => {
  return (
    <ChipContainer {...props}>
      <Typography sizeVariant={'semiBold'} variant={'3xs'} color={'white'}>
        {label}
      </Typography>
    </ChipContainer>
  );
};

export default Chip;
