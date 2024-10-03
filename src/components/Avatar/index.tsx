import Typography from '../Typography';
import AvatarSkeleton from './Avatar.skeleton';
import { Container, Image } from './Avatar.styles';
import type { AvatarProps } from './Avatar.types';

const Avatar = ({ image, label, uri, rightLabel = false }: AvatarProps) => {
  return (
    <Container rightLabel={rightLabel}>
      <Image source={uri ? { uri: uri } : image} />
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

Avatar.Skeleton = AvatarSkeleton;

export default Avatar;
