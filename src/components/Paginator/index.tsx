import { useWindowDimensions } from 'react-native';
import { Dots, PaginatorContainer } from './Paginator.styles';
import type { Props } from './Paginator.types';
import { useTheme } from 'styled-components/native';

const Paginator = ({ data, scrollX }: Props) => {
  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  return (
    <PaginatorContainer>
      {data.map((_: any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 25, 12],
          extrapolate: 'clamp',
        });

        const dotColor = scrollX.interpolate({
          inputRange,
          outputRange: [colors.white, colors.purple[500], colors.white],
          extrapolate: 'clamp',
        });

        const borderColor = scrollX.interpolate({
          inputRange,
          outputRange: [colors.black, colors.purple[500], colors.black],
          extrapolate: 'clamp',
        });

        return (
          <Dots
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
