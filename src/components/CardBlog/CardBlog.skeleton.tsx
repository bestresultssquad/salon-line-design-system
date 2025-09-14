import styled from 'styled-components/native';
import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';
import { View } from 'react-native';
import type { CardBlogVariant } from './CardBlog.types';
import type { DefaultTheme } from 'styled-components/native';

const MotiCustom = styled(MotiView)<{ variant: CardBlogVariant }>`
  width: ${({ variant }: { variant: CardBlogVariant }) =>
    variant === 'horizontal' ? 327 : 158}px;
  height: ${({ variant }: { variant: CardBlogVariant }) =>
    variant === 'horizontal' ? 112 : 252}px;
  gap: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.nano}px;
  flex-direction: ${({ variant }: { variant: CardBlogVariant }) =>
    variant === 'horizontal' ? 'row' : 'column'};
`;

const DescriptionContainer = styled.View`
  gap: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.quarck}px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CardBlogSkeleton = ({ variant }: { variant: CardBlogVariant }) => {
  return (
    <MotiCustom
      variant={variant}
      transition={{
        type: 'timing',
        duration: 2000,
      }}
    >
      <Skeleton
        colorMode={'light'}
        radius={16}
        height={variant === 'horizontal' ? 104 : 144}
        width={variant === 'horizontal' ? 104 : 158}
      />
      <DescriptionContainer>
        <View style={{ gap: 4 }}>
          <Skeleton colorMode={'light'} width={158} height={14} />
          <Skeleton colorMode={'light'} width={80} height={15} />
        </View>
        <View style={{ gap: 4 }}>
          <Skeleton colorMode={'light'} width={180} height={15} />
          <Skeleton colorMode={'light'} width={100} height={15} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ gap: 4 }}>
            <Skeleton colorMode={'light'} width={63} height={16} />
          </View>
          <ButtonContainer>
            <View>
              <Skeleton colorMode={'light'} width={43} height={16} />
            </View>
          </ButtonContainer>
        </View>
      </DescriptionContainer>
    </MotiCustom>
  );
};

export default CardBlogSkeleton;
