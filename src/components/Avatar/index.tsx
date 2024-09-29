import Typography from '../Typography';
import { Container, Image } from './Avatar.styles';
import type { AvatarProps } from './Avatar.types';

const Avatar = ({ image, label, rightLabel = false }: AvatarProps) => {
  return (
    <Container rightLabel={rightLabel}>
      <Image source={image} />
      {label && (
        <Typography
          sizeVariant={rightLabel ? 'semiBold' : 'medium'}
          variant={rightLabel ? 'lg' : 'sm'}
        >
          {label}
        </Typography>
      )}
    </Container>
  );
};

export default Avatar;
