import { useTheme } from 'styled-components/native';
import { Container, InputContainer, TextInput } from './Input.styles';
import type { InputProps } from './Input.types';
import Typography from '../Typography';
import Icon from '../Icon';

const Input = ({
  leftIcon,
  rightIcon,
  value,
  onChangeText,
  inputLabel,
  mask,
  editable = true,
  error,
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
      <InputContainer editable={editable} error={!!error}>
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
        {error && (
          <Icon height={24} width={24} stroke={colors.red[500]} type="alert" />
        )}
        {!error && rightIcon && renderRightIcon()}
      </InputContainer>
      {error && (
        <Typography
          sizeVariant="medium"
          variant="xs"
          color={colors.red[500]}
          style={{ marginTop: 4 }}
        >
          {error}
        </Typography>
      )}
    </Container>
  );
};

export default Input;
