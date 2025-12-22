//@ts-ignore
import { useTheme } from 'styled-components/native';
import { Container, InputContainer, TextInput } from './Input.styles';
import type { InputProps } from './Input.types';
import Typography from '../Typography';
import Icon from '../Icon';
import { useRef, useState } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

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
  loading = false,
  loadingText,
  endLoadingText,
  ...props
}: InputProps) => {
  const { baseColors, themed } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const animation = useRef<LottieView>(null);

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
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 4,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography sizeVariant="semiBold" variant="base">
            {inputLabel}
          </Typography>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            {loading &&
              (themed.text === baseColors.black ? (
                <LottieView
                  autoPlay
                  ref={animation}
                  style={{
                    width: 16,
                    height: 16,
                  }}
                  source={require('../../lottie/loading-black.json')}
                />
              ) : (
                <LottieView
                  autoPlay
                  ref={animation}
                  style={{
                    width: 16,
                    height: 16,
                  }}
                  source={require('../../lottie/loading-white.json')}
                />
              ))}
            <Typography sizeVariant="medium" variant="3xs">
              {loading ? loadingText : endLoadingText}
            </Typography>
          </View>
        </View>
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
          placeholderTextColor={baseColors.gray[500]}
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
            stroke={baseColors.red[500]}
            type="AlertIcon"
          />
        )}
        {!error && rightIcon && renderRightIcon()}
      </InputContainer>
      {error && (
        <Typography
          sizeVariant="semiBold"
          variant="xs"
          color={baseColors.red[500]}
          style={{ marginTop: 4 }}
        >
          {error}
        </Typography>
      )}
    </Container>
  );
};

export default Input;
