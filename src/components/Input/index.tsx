import { useTheme } from 'styled-components/native';
import { Container, InputContainer, TextInput } from './Input.styles';
import type { InputProps } from './Input.types';
import Typography from '../Typography';

const Input = ({
  leftIcon,
  rightIcon,
  value,
  onChangeText,
  inputLabel,
  mask,
  editable = true,
  ...props
}: InputProps) => {
  const { colors } = useTheme();

  const renderLeftIcon = () => {
    if (leftIcon) {
      return leftIcon;
    }

    return null;
  };

  const renderRightIcon = () => {
    if (rightIcon) {
      return rightIcon;
    }

    return null;
  };

  return (
    <Container>
      {inputLabel && (
        <Typography sizeVariant="medium" variant="base">
          {inputLabel}
        </Typography>
      )}
      <InputContainer editable={editable}>
        {leftIcon && renderLeftIcon()}
        <TextInput
          mask={mask}
          value={value}
          onChangeText={onChangeText}
          editable={editable}
          {...props}
          leftIcon={!!leftIcon}
          rightIcon={!!rightIcon}
          placeholderTextColor={colors.gray[500]}
        />
        {rightIcon && renderRightIcon()}
      </InputContainer>
    </Container>
  );
};

export default Input;
