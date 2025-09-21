import { useBottomSheetInternal } from '@gorhom/bottom-sheet';
import { useCallback, useEffect, useImperativeHandle, useRef } from 'react';
import {
  findNodeHandle,
  TextInput,
  type NativeSyntheticEvent,
  type TextInputFocusEventData,
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
  const { animatedKeyboardState, textInputNodesRef } = useBottomSheetInternal();
  const ref = useRef<TextInput>(null);
  const handleOnFocus = useCallback(
    (args: NativeSyntheticEvent<TextInputFocusEventData>) => {
      animatedKeyboardState.set((state) => ({
        ...state,
        target: args.nativeEvent.target,
      }));
      if (onFocus) {
        onFocus(args);
      }
    },
    [onFocus, animatedKeyboardState]
  );
  const handleOnBlur = useCallback(
    (args: NativeSyntheticEvent<TextInputFocusEventData>) => {
      const keyboardState = animatedKeyboardState.get();
      const currentFocusedInput = findNodeHandle(
        TextInput.State.currentlyFocusedInput()
      );

      const shouldRemoveCurrentTarget =
        keyboardState.target === args.nativeEvent.target;
      const shouldIgnoreBlurEvent =
        currentFocusedInput &&
        textInputNodesRef.current.has(currentFocusedInput);

      if (shouldRemoveCurrentTarget && !shouldIgnoreBlurEvent) {
        animatedKeyboardState.set((state) => ({
          ...state,
          target: undefined,
        }));
      }

      if (onBlur) {
        onBlur(args);
      }
    },
    [onBlur, animatedKeyboardState, textInputNodesRef]
  );
  useEffect(() => {
    const componentNode = findNodeHandle(ref.current);
    if (!componentNode) {
      return;
    }

    if (!textInputNodesRef.current.has(componentNode)) {
      textInputNodesRef.current.add(componentNode);
    }

    return () => {
      const componentNode = findNodeHandle(ref.current);
      if (!componentNode) {
        return;
      }

      const keyboardState = animatedKeyboardState.get();
      if (keyboardState.target === componentNode) {
        animatedKeyboardState.set((state) => ({
          ...state,
          target: undefined,
        }));
      }

      if (textInputNodesRef.current.has(componentNode)) {
        textInputNodesRef.current.delete(componentNode);
      }
    };
  }, [textInputNodesRef, animatedKeyboardState]);
  useImperativeHandle(props.inputRef, () => ref.current ?? undefined, []);

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
