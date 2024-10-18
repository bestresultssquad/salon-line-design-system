import Button from './index';
import { renderWithTheme } from '../../../src/configs/testUtils';
import { fireEvent } from '@testing-library/react-native';

describe('Button Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  it('renders correctly with children', () => {
    const { getByText } = renderWithTheme(
      <Button
        variant="primary"
        size="medium"
        textSizeVariant="medium"
        textVariant="3xs"
      >
        Click Me
      </Button>
    );
    expect(getByText('Click Me')).toBeTruthy();
  });
  it('renders correctly with only icon', () => {
    const { getByTestId } = renderWithTheme(
      <Button size="nano" variant="cart" onlyIcon iconType="ChevronRightIcon" />
    );
    expect(getByTestId('custom-icon-left')).toBeTruthy();
  });

  it('renders correctly with left icon and children', () => {
    const { getByText, getByTestId } = renderWithTheme(
      <Button leftIcon iconType="ShareIcon" size="cart" variant="outline">
        Click Me
      </Button>
    );
    expect(getByText('Click Me')).toBeTruthy();
    expect(getByTestId('custom-icon-left')).toBeTruthy();
  });

  it('Should call function on press', () => {
    const mockFn = jest.fn();
    const { getByText } = renderWithTheme(
      <Button
        leftIcon
        iconType="ShareIcon"
        size="cart"
        variant="outline"
        onPress={() => mockFn()}
      >
        Click Me
      </Button>
    );

    const btn = getByText('Click Me');

    fireEvent.press(btn);

    expect(mockFn).toHaveBeenCalled();
  });
});
