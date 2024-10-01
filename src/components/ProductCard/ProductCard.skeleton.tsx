import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';
import { View } from 'react-native';

import styled from 'styled-components/native';

const MotiCustom = styled(MotiView)`
  width: 158px;
  height: 264px;
  gap: ${({ theme }) => theme.spacing.xxxxs}px;
`;

const DescriptionContainer = styled.View`
  gap: ${({ theme }) => theme.spacing.xxxxs}px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProductCardSkeleton = () => {
  return (
    <MotiCustom
      transition={{
        type: 'timing',
        duration: 2000,
      }}
    >
      <Skeleton colorMode={'light'} radius={16} height={160} width={158} />
      <DescriptionContainer>
        <Skeleton colorMode={'light'} width={103} height={12} />
        <Skeleton colorMode={'light'} width={141} height={15} />
        <Skeleton colorMode={'light'} width={100} height={15} />
        <ButtonContainer>
          <View style={{ gap: 4 }}>
            <Skeleton colorMode={'light'} width={39} height={10} />
            <Skeleton colorMode={'light'} width={80} height={14} />
          </View>
          <View>
            <Skeleton colorMode={'light'} width={32} height={32} />
          </View>
        </ButtonContainer>
      </DescriptionContainer>
    </MotiCustom>
  );
};

export default ProductCardSkeleton;
