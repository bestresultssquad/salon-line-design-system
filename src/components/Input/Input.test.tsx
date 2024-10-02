import { fireEvent } from '@testing-library/react-native';
import Input from './index';
import type { InputProps } from './Input.types';
import { renderWithTheme } from '../../configs/testUtils';
import themes from '../../themes/light';
import { View } from 'react-native';

describe('Input Component', () => {
  const defaultProps: InputProps = {
    value: '',
    onChangeText: jest.fn(),
    inputLabel: 'Test Label',
    mask: undefined,
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render input label', () => {
    const { getByText } = renderWithTheme(<Input {...defaultProps} />);
    expect(getByText('Test Label')).toBeTruthy();
  });

  it('should call onChangeText when text changes', () => {
    const { getByPlaceholderText } = renderWithTheme(
      <Input {...defaultProps} editable placeholder="Test Placeholder" />
    );
    const input = getByPlaceholderText('Test Placeholder');
    fireEvent.changeText(input, 'new text');
    expect(defaultProps.onChangeText).toHaveBeenCalledTimes(1);
  });

  it('should render left icon if provided', () => {
    const leftIcon = <View testID="left-icon" />;
    const { getByTestId } = renderWithTheme(
      <Input {...defaultProps} leftIcon={leftIcon} />
    );
    expect(getByTestId('left-icon')).toBeTruthy();
  });

  it('should render right icon if provided', () => {
    const rightIcon = <View testID="right-icon" />;
    const { getByTestId } = renderWithTheme(
      <Input {...defaultProps} rightIcon={rightIcon} />
    );
    expect(getByTestId('right-icon')).toBeTruthy();
  });

  it('should apply placeholder text color from theme', () => {
    const { getByPlaceholderText } = renderWithTheme(
      <Input {...defaultProps} placeholder="Test Placeholder" />
    );
    const input = getByPlaceholderText('Test Placeholder');
    expect(input.props.placeholderTextColor).toBe(themes.colors.gray[500]);
  });
});
