import { fireEvent } from '@testing-library/react-native';
import Switch from './index';
import { renderWithTheme } from '../../configs/testUtils';

describe('Switch Component', () => {
  const onPressMock = jest.fn();

  const renderComponent = (active: boolean) => {
    return renderWithTheme(<Switch onPress={onPressMock} active={active} />);
  };

  it('should render correctly when inactive', () => {
    const { getByTestId } = renderComponent(false);
    const switchContainer = getByTestId('switch-container');
    const switchCircle = getByTestId('switch-circle');

    expect(switchContainer).toBeTruthy();
    expect(switchCircle).toBeTruthy();
  });

  it('should render correctly when active', () => {
    const { getByTestId } = renderComponent(true);
    const switchContainer = getByTestId('switch-container');
    const switchCircle = getByTestId('switch-circle');

    expect(switchContainer).toBeTruthy();
    expect(switchCircle).toBeTruthy();
  });

  it('should call onPress when pressed', () => {
    const { getByTestId } = renderComponent(false);
    const switchContainer = getByTestId('switch-container');

    fireEvent.press(switchContainer);
    expect(onPressMock).toHaveBeenCalled();
  });
});
