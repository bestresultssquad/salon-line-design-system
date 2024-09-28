import { fireEvent } from '@testing-library/react-native';
import SectionTitle from './index';
import type { Props } from './SectionTitle.types';
import { renderWithTheme } from '../../configs/testUtils';

describe('SectionTitle', () => {
  const defaultProps: Props = {
    linkOnPress: jest.fn(),
    linkText: 'Click here',
    title: 'Section Title',
  };

  it('renders the title and link text correctly', () => {
    const { getByText } = renderWithTheme(<SectionTitle {...defaultProps} />);

    expect(getByText('Section Title')).toBeTruthy();
    expect(getByText('Click here')).toBeTruthy();
  });

  it('calls linkOnPress when the link is pressed', () => {
    const { getByText } = renderWithTheme(<SectionTitle {...defaultProps} />);
    const link = getByText('Click here');

    fireEvent.press(link);

    expect(defaultProps.linkOnPress).toHaveBeenCalled();
  });
});
