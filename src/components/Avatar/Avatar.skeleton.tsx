import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';

import styled from 'styled-components/native';

const MotiCustom = styled(MotiView)<{ rightLabel: boolean }>`
  width: 70px;
  height: 70px;
  gap: ${({ theme, rightLabel }) =>
    rightLabel ? theme.spacing.xxxxs : theme.spacing.nano}px;
  margin-bottom: ${({ theme }) => theme.spacing.xxs}px;
`;

const AvatarSkeleton = ({ rightLabel = false }) => {
  return (
    <MotiCustom
      rightLabel={rightLabel}
      transition={{
        type: 'timing',
        duration: 2000,
      }}
    >
      <Skeleton colorMode={'light'} radius={'round'} height={70} width={70} />
      <Skeleton colorMode={'light'} radius={16} height={20} width={71} />
    </MotiCustom>
  );
};

export default AvatarSkeleton;
