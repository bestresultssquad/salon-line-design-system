import Avatar from './index';
import { renderWithTheme } from '../../configs/testUtils';

describe('Avatar Component', () => {
  const testImage = { uri: 'test-image.jpg' };
  it('renders the label correctly', () => {
    const { getByText } = renderWithTheme(
      <Avatar image={testImage} label="Test Label" />
    );
    const labelElement = getByText('Test Label');
    expect(labelElement).toBeTruthy();
  });

  it('does not render the label when it is not provided', () => {
    const { queryByText } = renderWithTheme(<Avatar image={testImage} />);
    const labelElement = queryByText('Test Label');
    expect(labelElement).not.toBeTruthy();
  });
});
