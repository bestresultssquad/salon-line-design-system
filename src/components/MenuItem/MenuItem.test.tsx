import { fireEvent } from '@testing-library/react-native';
import MenuItem from './index';
import { renderWithTheme } from '../../configs/testUtils';

describe('MenuItem Component', () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    const { getByText, getByTestId } = renderWithTheme(
      <MenuItem leftIcon="HomeIcon" onPress={mockOnPress} title="Home" />
    );

    expect(getByText('Home')).toBeTruthy();
    expect(getByTestId('icon-left-menu-item')).toBeTruthy();
    expect(getByTestId('icon-right-menu-item')).toBeTruthy();
  });

  it('calls onPress when pressed and useSwitch is false', () => {
    const { getByTestId } = renderWithTheme(
      <MenuItem leftIcon="HomeIcon" onPress={mockOnPress} title="Home" />
    );

    fireEvent.press(getByTestId('container-menu-item'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('does not call onPress when useSwitch is true', () => {
    const { getByTestId } = renderWithTheme(
      <MenuItem
        leftIcon="HomeIcon"
        onPress={mockOnPress}
        title="Home"
        useSwitch
      />
    );

    fireEvent.press(getByTestId('container-menu-item'));
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it.skip('toggles switch when useSwitch is true', () => {
    const { getByTestId } = renderWithTheme(
      <MenuItem
        leftIcon="HomeIcon"
        onPress={mockOnPress}
        title="Home"
        useSwitch
      />
    );

    const switchComponent = getByTestId('switch-menu-item');
    fireEvent.press(switchComponent);
    expect(switchComponent.props.active).toBe(true);

    fireEvent.press(switchComponent);
    expect(switchComponent.props.active).toBe(false);
  });

  it('changes pressed state on press in and press out', () => {
    const { getByTestId } = renderWithTheme(
      <MenuItem leftIcon="HomeIcon" onPress={mockOnPress} title="Home" />
    );

    const container = getByTestId('container-menu-item');
    fireEvent(container, 'onPressIn');
    expect(container.props.pressed).toBe(true);

    fireEvent(container, 'onPressOut');
    expect(container.props.pressed).toBe(false);
  });
});
