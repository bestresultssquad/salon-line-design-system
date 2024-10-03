import { fireEvent } from '@testing-library/react-native';

import Checkbox from './index';
import type { CheckboxProps } from './Checkbox.types';
import { renderWithTheme } from '../../configs/testUtils';

describe('Checkbox Component', () => {
  const defaultProps: CheckboxProps = {
    onPress: jest.fn(),
    checked: false,
    children: null,
  };

  it('should render correctly', () => {
    const { getByTestId } = renderWithTheme(<Checkbox {...defaultProps} />);
    expect(getByTestId('checkbox-container')).toBeTruthy();
  });

  it('should call onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = renderWithTheme(
      <Checkbox {...defaultProps} onPress={onPressMock} />
    );

    fireEvent.press(getByTestId('checkbox-container'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('should display the checked icon when checked is true', () => {
    const { getByTestId } = renderWithTheme(
      <Checkbox {...defaultProps} checked={true} />
    );

    expect(getByTestId('checkbox-checked')).toHaveStyle({ display: 'flex' });
  });

  it.skip('should hide the checked icon when checked is false', () => {
    const { getByTestId } = renderWithTheme(
      <Checkbox {...defaultProps} checked={false} />
    );

    expect(getByTestId('checkbox-checked')).toHaveStyle({ display: 'none' });
  });
});
