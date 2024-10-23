import styled from 'styled-components/native';
import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';
import { View } from 'react-native';

const MotiCustom = styled(MotiView)`
  width: 327px;
  height: 112px;
  gap: ${({ theme }) => theme.spacing.nano}px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray[200]};
`;

const DescriptionContainer = styled.View`
  gap: ${({ theme }) => theme.spacing.xxs}px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProductCardHorizontalSkeleton = () => {
  return (
    <MotiCustom
      transition={{
        type: 'timing',
        duration: 2000,
      }}
    >
      <Skeleton colorMode={'light'} radius={16} height={96} width={96} />
      <DescriptionContainer>
        <View style={{ gap: 4 }}>
          <Skeleton colorMode={'light'} width={207} height={14} />
          <Skeleton colorMode={'light'} width={80} height={15} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ gap: 4 }}>
            <Skeleton colorMode={'light'} width={60} height={15} />
            <Skeleton colorMode={'light'} width={100} height={20} />
          </View>
          <ButtonContainer>
            <View>
              <Skeleton colorMode={'light'} width={32} height={32} />
            </View>
          </ButtonContainer>
        </View>
      </DescriptionContainer>
    </MotiCustom>
  );
};

export default ProductCardHorizontalSkeleton;
