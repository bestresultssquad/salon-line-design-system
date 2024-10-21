import { TouchableOpacity } from 'react-native';
import { Container, TextContainer } from './Counter.styles';
import Icon from '../Icon';
import type { CounterProps } from './Counter.types';
import Typography from '../Typography';

const Counter = ({ onDecrement, onIncrement, value }: CounterProps) => {
  return (
    <Container>
      <TouchableOpacity onPress={onDecrement}>
        <Icon type="MinusIcon" width={20} height={20} />
      </TouchableOpacity>

      <TextContainer>
        <Typography sizeVariant="medium" variant="sm">
          {value}
        </Typography>
      </TextContainer>

      <TouchableOpacity onPress={onIncrement}>
        <Icon type="PlusIcon" width={20} height={20} />
      </TouchableOpacity>
    </Container>
  );
};

export default Counter;
