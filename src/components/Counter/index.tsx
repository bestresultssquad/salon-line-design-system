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
  disabled,
}: CounterProps) => {
  const { colors } = useTheme();
  return (
    <Container>
      <TouchableOpacity onPress={onDecrement} disabled={disabled}>
        <Icon
          type="MinusIcon"
          width={20}
          height={20}
          stroke={disabled ? colors.gray[400] : colors.black}
        />
      </TouchableOpacity>

      <TextContainer>
        <Typography sizeVariant="medium" variant="sm">
          {value}
        </Typography>
      </TextContainer>

      <TouchableOpacity onPress={onIncrement} disabled={disabled}>
        <Icon
          type="PlusIcon"
          width={20}
          height={20}
          stroke={disabled ? colors.gray[400] : colors.black}
        />
      </TouchableOpacity>
    </Container>
  );
};

export default Counter;
