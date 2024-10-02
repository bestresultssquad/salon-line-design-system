import { fireEvent } from '@testing-library/react-native';
import Link from './index';
import { renderWithTheme } from '../../configs/testUtils';

describe('Link Component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = renderWithTheme(<Link onPress={() => {}} />);
    const linkText = getByText('Link');
    expect(linkText).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = renderWithTheme(<Link onPress={onPressMock} />);
    const linkText = getByText('Link');
    fireEvent.press(linkText);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('renders with custom typographySizeVariant', () => {
    const { getByText } = renderWithTheme(
      <Link onPress={() => {}} typographySizeVariant="regular" />
    );
    const linkText = getByText('Link');
    expect(linkText.props.sizeVariant).toBe('regular');
  });

  it('renders with custom typographyVariant', () => {
    const { getByText } = renderWithTheme(
      <Link onPress={() => {}} typographyVariant="base" />
    );
    const linkText = getByText('Link');
    expect(linkText.props.variant).toBe('base');
  });
});
