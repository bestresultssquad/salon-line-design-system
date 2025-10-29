import { TouchableOpacity } from 'react-native';
import { Container, TextContainer } from './Counter.styles';
import Icon from '../Icon';
import type { CounterProps } from './Counter.types';
import Typography from '../Typography';
import { useTheme } from 'styled-components/native';

const Counter = ({
  onDecrement,
  onIncrement,
  value,
  disableDecrement,
  disableIncrement,
}: CounterProps) => {
  const { baseColors } = useTheme();
  return (
    <Container>
      <TouchableOpacity
        onPress={onDecrement}
        disabled={disableDecrement}
        style={{ padding: 10 }}
      >
        {value > 1 ? (
          <Icon
            type="MinusIcon"
            width={20}
            height={20}
            stroke={disableDecrement ? baseColors.gray[400] : baseColors.black}
          />
        ) : (
          <Icon
            type="TrashIcon"
            width={20}
            height={20}
            stroke={baseColors.red[500]}
            strokeWidth={2}
          />
        )}
      </TouchableOpacity>

      <TextContainer>
        <Typography sizeVariant="medium" variant="sm">
          {value}
        </Typography>
      </TextContainer>

      <TouchableOpacity
        onPress={onIncrement}
        disabled={disableIncrement}
        style={{ padding: 10 }}
      >
        <Icon
          type="PlusIcon"
          width={20}
          height={20}
          stroke={disableIncrement ? baseColors.gray[400] : baseColors.black}
        />
      </TouchableOpacity>
    </Container>
  );
};

export default Counter;
