import { useWindowDimensions } from 'react-native';
import { Dots, PaginatorContainer } from './Paginator.styles';
import type { Props } from './Paginator.types';
import { useTheme } from 'styled-components/native';

const Paginator = ({
  data,
  scrollX,
  testID,
  variant = 'onboarding',
  ...props
}: Props) => {
  const { width } = useWindowDimensions();
  const { colors, spacing } = useTheme();

  const variantStyle = {
    onboarding: {
      widthNormal: 12,
      widthActive: 25,
      colorNormal: colors.white,
      colorActive: colors.pink[700],
      borderNormal: colors.gray[600],
      borderActive: colors.pink[700],
    },
    default: {
      widthNormal: spacing.quarck,
      widthActive: spacing.xxs,
      colorNormal: colors.gray[400],
      colorActive: colors.black,
      borderNormal: colors.black,
      borderActive: colors.black,
    },
  };

  return (
    <PaginatorContainer variant={variant} testID={testID} {...props}>
      {data.map((_: any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [
            variantStyle[variant].widthNormal,
            variantStyle[variant].widthActive,
            variantStyle[variant].widthNormal,
          ],
          extrapolate: 'clamp',
        });

        const dotColor = scrollX.interpolate({
          inputRange,
          outputRange: [
            variantStyle[variant].colorNormal,
            variantStyle[variant].colorActive,
            variantStyle[variant].colorNormal,
          ],
          extrapolate: 'clamp',
        });

        const borderColor = scrollX.interpolate({
          inputRange,
          outputRange: [
            variantStyle[variant].borderNormal,
            variantStyle[variant].borderActive,
            variantStyle[variant].borderNormal,
          ],
          extrapolate: 'clamp',
        });

        return (
          <Dots
            variant={variant}
            key={i}
            style={[
              {
                width: dotWidth,
                backgroundColor: dotColor,
                borderColor: borderColor,
              },
            ]}
          />
        );
      })}
    </PaginatorContainer>
  );
};

export default Paginator;
