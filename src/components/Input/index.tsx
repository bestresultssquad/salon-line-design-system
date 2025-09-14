//@ts-ignore
import { useTheme } from 'styled-components/native';
import { Container, InputContainer, TextInput } from './Input.styles';
import type { InputProps } from './Input.types';
import Typography from '../Typography';
import Icon from '../Icon';
import { useState } from 'react';

const Input = ({
  leftIcon,
  rightIcon,
  value,
  onChangeText,
  inputLabel,
  mask,
  editable = true,
  error,
  clickable = false,
  variant = 'md',
  inputRef,
  ...props
}: InputProps) => {
  const { colors } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

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
        <Typography sizeVariant="semiBold" variant="base">
          {inputLabel}
        </Typography>
      )}
      <InputContainer
        editable={editable}
        clickable={clickable ?? false}
        variant={variant}
        error={!!error}
        focused={isFocused}
      >
        {leftIcon && renderLeftIcon()}
        <TextInput
          ref={inputRef}
          mask={mask}
          value={value}
          onChangeText={onChangeText}
          editable={editable}
          {...props}
          leftIcon={!!leftIcon}
          rightIcon={!!rightIcon}
          placeholderTextColor={colors.gray[500]}
          onFocus={(e: React.FocusEvent<any>) => {
            if (props.onFocus) {
              //@ts-ignore
              props.onFocus(e);
            }
            setIsFocused(true);
          }}
          onBlur={(e: React.FocusEvent<any>) => {
            if (props.onBlur) {
              //@ts-ignore
              props.onBlur(e);
            }
            setIsFocused(false);
          }}
        />
        {error && (
          <Icon
            height={24}
            width={24}
            stroke={colors.red[500]}
            type="AlertIcon"
          />
        )}
        {!error && rightIcon && renderRightIcon()}
      </InputContainer>
      {error && (
        <Typography
          sizeVariant="semiBold"
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
