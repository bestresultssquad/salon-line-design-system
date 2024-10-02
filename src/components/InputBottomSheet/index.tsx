import { useBottomSheetInternal } from '@gorhom/bottom-sheet';
import { useCallback, useEffect } from 'react';
import type {
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import Input from '../Input';
import type { InputProps } from '../Input/Input.types';

const InputBottomSheet = ({
  leftIcon,
  rightIcon,
  value,
  onChangeText,
  inputLabel,
  mask,
  editable = true,
  onFocus,
  onBlur,
  ...props
}: InputProps) => {
  const { shouldHandleKeyboardEvents } = useBottomSheetInternal();

  const handleOnFocus = useCallback(
    (args: NativeSyntheticEvent<TextInputFocusEventData>) => {
      shouldHandleKeyboardEvents.value = true;
      if (onFocus) {
        onFocus(args);
      }
    },
    [onFocus, shouldHandleKeyboardEvents]
  );
  const handleOnBlur = useCallback(
    (args: NativeSyntheticEvent<TextInputFocusEventData>) => {
      shouldHandleKeyboardEvents.value = false;
      if (onBlur) {
        onBlur(args);
      }
    },
    [onBlur, shouldHandleKeyboardEvents]
  );

  useEffect(() => {
    return () => {
      shouldHandleKeyboardEvents.value = false;
    };
  }, [shouldHandleKeyboardEvents]);

  return (
    <Input
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      value={value}
      onChangeText={onChangeText}
      inputLabel={inputLabel}
      mask={mask}
      editable={editable}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      {...props}
    />
  );
};

export default InputBottomSheet;
