import Typography from '../Typography';
import type { ChipFlashOfferProps } from './ChipFlashOffer.types';
import { ChipContainer } from './ChipFlashOffer.styles';

const ChipFlashOffer = ({ label, ...props }: ChipFlashOfferProps) => {
  return (
    <ChipContainer {...props}>
      <Typography
        numberOfLines={1}
        sizeVariant={props.textSizeVariant ?? 'semiBold'}
        variant={props.textVariant ?? '3xs'}
        color={'black'}
      >
        {label}
      </Typography>
    </ChipContainer>
  );
};

export default ChipFlashOffer;
