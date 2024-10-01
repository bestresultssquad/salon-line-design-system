import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';

import styled from 'styled-components/native';
import type { BannerVariant } from './BannerImage.types';

const MotiCustom = styled(MotiView)<{ bannerVariant: BannerVariant }>`
  width: 327px;
  height: ${({ bannerVariant }) => (bannerVariant === 'md' ? 320 : 128)}px;
  gap: ${({ theme }) => theme.spacing.xxxxs}px;
`;

const BannerImageSkeleton = ({
  bannerVariant,
}: {
  bannerVariant: BannerVariant;
}) => {
  return (
    <MotiCustom
      bannerVariant={bannerVariant}
      transition={{
        type: 'timing',
        duration: 2000,
      }}
    >
      <Skeleton
        colorMode={'light'}
        radius={16}
        height={bannerVariant === 'md' ? 320 : 128}
        width={327}
      />
    </MotiCustom>
  );
};

export default BannerImageSkeleton;
